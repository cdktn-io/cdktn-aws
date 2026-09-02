/**
 * Two suites, one command.
 *
 * `tools/aws2cdk/test` — the generator's contract tests, which run against the committed mini
 * fixture (`tools/aws2cdk/test/fixtures/`), never the 34 MB pinned schema, so they work in a fresh
 * clone where `schemas/schema.json` is absent.
 *
 * `tools/migrate/test` — the migration tool's, which run ts-morph over in-memory fixtures and read
 * the committed `naming-map.json` for the real rename table.
 */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tools/aws2cdk/test", "<rootDir>/tools/migrate/test"],
  testMatch: ["**/*.test.ts"],
  testTimeout: 120000,
  transform: {
    // Each tool owns its tsconfig, so the transform is scoped by path rather than shared.
    "tools/migrate/.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tools/migrate/tsconfig.json", diagnostics: false },
    ],
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tools/aws2cdk/tsconfig.json", diagnostics: false }],
  },
};
