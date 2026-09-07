// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Every form a consumer can be holding `@cdktn/provider-aws` in, and what it becomes.
 *
 * The classic library exposes each resource three ways — a deep module, a camelCase namespace off
 * the barrel, and the barrel itself — and a real project mixes them. All of them are asserted here
 * against the committed naming map, not a stub, so a wrong row is a red test rather than a wrong
 * rewrite.
 */
import { migrate, migrated } from "./helpers";

describe("import forms", () => {
  it("rewrites a deep named import to the group barrel", () => {
    expect(
      migrated(
        [
          "import { S3Bucket, S3BucketConfig } from '@cdktn/provider-aws/lib/s3-bucket';",
          "",
          "export function make(scope: any, config: S3BucketConfig) {",
          "  return new S3Bucket(scope, 'b', config);",
          "}",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { s3 } from '@cdktn/aws';",
        "",
        "export function make(scope: any, config: s3.TfBucketConfig) {",
        "  return new s3.TfBucket(scope, 'b', config);",
        "}",
      ].join("\n"),
    );
  });

  it("rewrites a deep namespace import", () => {
    expect(
      migrated(
        [
          "import * as s3Bucket from '@cdktn/provider-aws/lib/s3-bucket';",
          "const b = new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
        ].join("\n"),
      ),
    ).toBe(["import { s3 } from '@cdktn/aws';", "const b = new s3.TfBucket(this, 'b', { bucket: 'x' });"].join("\n"));
  });

  it("rewrites a barrel named import, whose members are the classic submodules", () => {
    expect(
      migrated(
        [
          "import { s3Bucket, provider } from '@cdktn/provider-aws';",
          "new provider.AwsProvider(this, 'aws', { region: 'eu-west-1' });",
          "new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { provider, s3 } from '@cdktn/aws';",
        "new provider.AwsProvider(this, 'aws', { region: 'eu-west-1' });",
        "new s3.TfBucket(this, 'b', { bucket: 'x' });",
      ].join("\n"),
    );
  });

  it("keeps a `* as aws` barrel import as one, and moves only the two hops below it", () => {
    // `aws.s3.TfBucket` is a perfectly good call site on the new library, so the consumer's own
    // spelling survives and the diff stays as small as the rename actually is.
    expect(
      migrated(
        [
          "import * as aws from '@cdktn/provider-aws';",
          "const b = new aws.s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
          "const v: aws.s3BucketVersioning.S3BucketVersioningAConfig = { bucket: b.bucket };",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import * as aws from '@cdktn/aws';",
        "const b = new aws.s3.TfBucket(this, 'b', { bucket: 'x' });",
        "const v: aws.s3.TfBucketVersioningConfig = { bucket: b.bucket };",
      ].join("\n"),
    );
  });

  it("rewrites the require forms of all of it", () => {
    expect(
      migrated(
        [
          "const s3Bucket = require('@cdktn/provider-aws/lib/s3-bucket');",
          "const { provider } = require('@cdktn/provider-aws');",
          "new provider.AwsProvider(this, 'aws', {});",
          "new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { provider, s3 } from '@cdktn/aws';",
        "new provider.AwsProvider(this, 'aws', {});",
        "new s3.TfBucket(this, 'b', { bucket: 'x' });",
      ].join("\n"),
    );
  });

  it("rewrites `module.require` and `await import`, which bind the same namespace object", () => {
    expect(
      migrated(
        [
          "const s3Bucket = module.require('@cdktn/provider-aws/lib/s3-bucket');",
          "const { IamRole } = module.require('@cdktn/provider-aws/lib/iam-role');",
          "const iamPolicy = await import('@cdktn/provider-aws/lib/iam-policy');",
          "new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
          "new IamRole(this, 'r', {});",
          "new iamPolicy.IamPolicy(this, 'p', {});",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { iam, s3 } from '@cdktn/aws';",
        "new s3.TfBucket(this, 'b', { bucket: 'x' });",
        "new iam.TfRole(this, 'r', {});",
        "new iam.TfPolicy(this, 'p', {});",
      ].join("\n"),
    );
  });

  it("spells a residual `module.require` back as `module.require`, not as `require`", () => {
    // The residual has to be the same load the file had: `require` is not in scope in an ES module,
    // and rewriting the callee would be a change the tool never decided to make.
    const result = migrate(
      [
        "const { S3Bucket, Invented } = module.require('@cdktn/provider-aws/lib/s3-bucket');",
        "export const x = (s: any) => [new S3Bucket(s, 'b', {}), Invented];",
      ].join("\n"),
    );
    expect(result.after).toContain(
      "const { Invented } = module.require('@cdktn/provider-aws/lib/s3-bucket');",
    );
  });

  it("rewrites the split-out structs subpath of a large module", () => {
    expect(
      migrated(
        [
          "import { Wafv2WebAclRuleActionA } from '@cdktn/provider-aws/lib/wafv2-web-acl-rule/index-structs';",
          "export const action: Wafv2WebAclRuleActionA = {};",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { waf } from '@cdktn/aws';",
        "export const action: waf.TfWebAclRule.ActionProperty = {};",
      ].join("\n"),
    );
  });

  it("merges two groups into one sorted import declaration", () => {
    expect(
      migrated(
        [
          "import { LambdaFunction } from '@cdktn/provider-aws/lib/lambda-function';",
          "import { IamRole } from '@cdktn/provider-aws/lib/iam-role';",
          "import * as s3Bucket from '@cdktn/provider-aws/lib/s3-bucket';",
          "",
          "new IamRole(this, 'r', {});",
          "new LambdaFunction(this, 'f', {});",
          "new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { iam, lambda, s3 } from '@cdktn/aws';",
        "",
        "new iam.TfRole(this, 'r', {});",
        "new lambda.TfFunction(this, 'f', {});",
        "new s3.TfBucket(this, 'b', { bucket: 'x' });",
      ].join("\n"),
    );
  });
});

describe("forms the tool does not model", () => {
  // `package.json` loses the classic dependency, so a classic specifier that is merely passed over
  // leaves a project importing a package it no longer depends on — with a zero exit code. Every one
  // of them is reported instead, whatever the form, by a backstop that scans specifiers.
  const reasons = (source: string) => migrate(source).unmapped.map((u) => [u.symbol, u.reason]);

  it("reports a re-export declaration and a star re-export", () => {
    const source = [
      "export { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket';",
      "export * from '@cdktn/provider-aws/lib/s3-bucket-versioning';",
    ].join("\n");
    expect(reasons(source)).toEqual([
      ["@cdktn/provider-aws/lib/s3-bucket", "classic import form the tool does not rewrite — move it by hand"],
      [
        "@cdktn/provider-aws/lib/s3-bucket-versioning",
        "classic import form the tool does not rewrite — move it by hand",
      ],
    ]);
    expect(migrate(source).after).toBe(source);
  });

  it("reports `import x = require(…)` and a dynamic `import('…')`", () => {
    expect(
      reasons(
        [
          "import s3Bucket = require('@cdktn/provider-aws/lib/s3-bucket');",
          "export const later = () => import('@cdktn/provider-aws/lib/iam-role');",
          "export const x = (s: any) => new s3Bucket.S3Bucket(s, 'x', {});",
        ].join("\n"),
      ).map(([symbol]) => symbol),
    ).toEqual(["@cdktn/provider-aws/lib/s3-bucket", "@cdktn/provider-aws/lib/iam-role"]);
  });

  it("reports a loader it does not know, wherever the specifier is written", () => {
    // Round 4: the recognizer only knew a bare `require`, so `module.require` in a form it cannot
    // rewrite — and every other call taking the specifier — was neither rewritten NOR reported, and
    // `--write` dropped the classic dependency out from under a file that still loads it.
    expect(
      reasons(
        [
          "export const p = require.resolve('@cdktn/provider-aws/lib/s3-bucket');",
          "export const q = jest.requireActual('@cdktn/provider-aws/lib/iam-role');",
          "export const r = load(module.require('@cdktn/provider-aws/lib/iam-policy'));",
          "console.log('@cdktn/provider-aws');",
        ].join("\n"),
      ),
    ).toEqual([
      [
        "@cdktn/provider-aws/lib/s3-bucket",
        "classic specifier left in place: require.resolve(…) — move it by hand",
      ],
      [
        "@cdktn/provider-aws/lib/iam-role",
        "classic specifier left in place: jest.requireActual(…) — move it by hand",
      ],
      [
        "@cdktn/provider-aws/lib/iam-policy",
        "classic specifier left in place: module.require(…) — move it by hand",
      ],
      ["@cdktn/provider-aws", "classic specifier left in place: console.log(…) — move it by hand"],
    ]);
  });

  it("reports a bare `import('…')` bound to a variable — a Promise is not a namespace", () => {
    const source = "const s3Bucket = import('@cdktn/provider-aws/lib/s3-bucket');";
    expect(reasons(source)).toEqual([
      ["@cdktn/provider-aws/lib/s3-bucket", "classic import form the tool does not rewrite — move it by hand"],
    ]);
    expect(migrate(source).after).toBe(source);
  });

  it("reports a subpath with no map row instead of dropping its import", () => {
    const result = migrate(
      "import * as invented from '@cdktn/provider-aws/lib/not-a-resource';\nexport const m = invented;",
    );
    expect(result.unmapped.map((u) => u.reason)).toEqual([
      "no naming-map row for this classic submodule",
    ]);
    expect(result.after).toContain("import * as invented from '@cdktn/provider-aws/lib/not-a-resource';");
  });
});
