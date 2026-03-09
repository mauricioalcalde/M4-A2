const { spawnSync } = require("node:child_process");

function splitCommand(input) {
  const re = /"([^"]*)"|([^\s]+)/g;
  const out = [];
  let m;
  while ((m = re.exec(input)) !== null) out.push(m[1] ?? m[2]);
  return out;
}

function run(commandLine) {
  const parts = splitCommand(commandLine);
  const cmd = parts[0];
  const args = parts.slice(1);
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: false });
  return res.status ?? 1;
}

const cmdLine = process.argv.slice(2).join(" ").trim();
if (!cmdLine) {
  console.error("Missing command line.");
  process.exit(2);
}

const exitCode = run(cmdLine);
if (exitCode === 0) {
  console.error("\n[expect-fail] ERROR: el comando terminó en exit code 0; se esperaba fallo.");
  process.exit(1);
}

console.log("\n[expect-fail] OK: fallo observado (exit code != 0).");
process.exit(0);
