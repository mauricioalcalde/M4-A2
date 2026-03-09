declare module "node:test" {
  const test: (name: string, fn: () => unknown) => void;
  export default test;
}

declare module "node:assert" {
  export const strict: {
    ok(value: unknown, message?: string): void;
    equal(actual: unknown, expected: unknown, message?: string): void;
  };
}
