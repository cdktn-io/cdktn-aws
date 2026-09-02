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
