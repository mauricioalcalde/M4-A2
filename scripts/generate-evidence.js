const { mkdirSync, writeFileSync } = require("node:fs");
const { spawnSync } = require("node:child_process");
const { join } = require("node:path");

function runAndCapture(cmd, args, logPath) {
  const res = spawnSync(cmd, args, { encoding: "utf-8", shell: false });
  const output = [
    `# ${cmd} ${args.join(" ")}`,
    "",
    "## STDOUT",
    res.stdout || "",
    "",
    "## STDERR",
    res.stderr || "",
    "",
    "## EXIT_CODE",
    String(res.status ?? 1),
    ""
  ].join("\n");
  writeFileSync(logPath, output, "utf-8");
  return res.status ?? 1;
}

function main() {
  const evidenceDir = join(process.cwd(), "evidence");
  mkdirSync(evidenceDir, { recursive: true });

  const buildCode = runAndCapture("npm", ["run", "build"], join(evidenceDir, "01_build.log"));
  const testCode = runAndCapture("npm", ["test"], join(evidenceDir, "02_test_pass.log"));
  const negCode = runAndCapture("npm", ["run", "test:negative"], join(evidenceDir, "03_test_negative_expected_fail.log"));
  const demoCode = runAndCapture("npm", ["start"], join(evidenceDir, "04_demo_run.log"));

  const summary = [
    `build: ${buildCode === 0 ? "PASS" : "FAIL"}`,
    `test: ${testCode === 0 ? "PASS" : "FAIL"}`,
    `test:negative: ${negCode === 0 ? "PASS" : "FAIL"}`,
    `start: ${demoCode === 0 ? "PASS" : "FAIL"}`,
    ""
  ].join("\n");

  writeFileSync(join(evidenceDir, "SUMMARY.txt"), summary, "utf-8");
  console.log(summary);
}

main();
