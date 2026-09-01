/**
 * Contract tests for the aws2cdk generator. They run against the committed mini fixture
 * (`tools/aws2cdk/test/fixtures/`), never the 34 MB pinned schema, so they work in a fresh clone
 * where `schemas/schema.json` is absent.
 */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tools/aws2cdk/test"],
  testMatch: ["**/*.test.ts"],
  testTimeout: 120000,
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tools/aws2cdk/tsconfig.json", diagnostics: false }],
  },
};
