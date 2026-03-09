import { strict as assert } from "node:assert";

export function captureConsole(fn: () => void): string[] {
  const original = console.log;
  const lines: string[] = [];
  console.log = (...args: unknown[]) => { lines.push(args.map(String).join(" ")); };
  try { fn(); } finally { console.log = original; }
  return lines;
}

export function assertIncludes(haystack: string, needle: string): void {
  assert.ok(haystack.includes(needle), `Expected to include "${needle}" but got: ${haystack}`);
}
