// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * What the map's nested section buys: the four wrapper classes and the two mapper functions of
 * every block type, none of which has a row of its own.
 */
import { migrate, migrated } from "./helpers";

describe("nested types", () => {
  it("mounts a nested block on the class namespace, with the Property suffix", () => {
    expect(
      migrated(
        [
          "import { S3BucketCorsRule } from '@cdktn/provider-aws/lib/s3-bucket';",
          "export const rule: S3BucketCorsRule = { allowedMethods: ['GET'], allowedOrigins: ['*'] };",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { s3 } from '@cdktn/aws';",
        "export const rule: s3.TfBucket.CorsRuleProperty = { allowedMethods: ['GET'], allowedOrigins: ['*'] };",
      ].join("\n"),
    );
  });

  it("derives the OutputReference and List classes by suffix, on both sides", () => {
    expect(
      migrated(
        [
          "import * as s3Bucket from '@cdktn/provider-aws/lib/s3-bucket';",
          "declare const ref: s3Bucket.S3BucketCorsRuleOutputReference;",
          "declare const list: s3Bucket.S3BucketCorsRuleList;",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { s3 } from '@cdktn/aws';",
        "declare const ref: s3.TfBucket.CorsRulePropertyOutputReference;",
        "declare const list: s3.TfBucket.CorsRulePropertyList;",
      ].join("\n"),
    );
  });

  it("moves a mapper function, including the s3/waf `Mapper` disambiguator", () => {
    // Module-level on both sides — jsii ignores functions, so ours cannot live in the namespace —
    // and in `s3` and `waf` the plain `<class><struct>` concatenation is not injective, hence
    // `tfBucketMapper…`. That is the entry's `mapperPrefix`, not a rule this tool restates.
    expect(
      migrated(
        [
          "import { s3BucketCorsRuleToTerraform } from '@cdktn/provider-aws/lib/s3-bucket';",
          "import { lambdaFunctionVpcConfigToHclTerraform } from '@cdktn/provider-aws/lib/lambda-function';",
          "export const a = s3BucketCorsRuleToTerraform;",
          "export const b = lambdaFunctionVpcConfigToHclTerraform;",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { lambda, s3 } from '@cdktn/aws';",
        "export const a = s3.tfBucketMapperCorsRulePropertyToTerraform;",
        "export const b = lambda.tfFunctionVpcConfigPropertyToHclTerraform;",
      ].join("\n"),
    );
  });

  it("moves the provider's own blocks onto AwsProvider", () => {
    expect(
      migrated(
        [
          "import { AwsProvider, AwsProviderAssumeRole } from '@cdktn/provider-aws/lib/provider';",
          "declare const role: AwsProviderAssumeRole;",
          "new AwsProvider(this, 'aws', { region: 'eu-west-1', assumeRole: [role] });",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { provider } from '@cdktn/aws';",
        "declare const role: provider.AwsProvider.AssumeRoleProperty;",
        "new provider.AwsProvider(this, 'aws', { region: 'eu-west-1', assumeRole: [role] });",
      ].join("\n"),
    );
  });

  it("moves AwsProviderFunctions, the one classic export with no schema entry", () => {
    expect(
      migrated(
        [
          "import { AwsProviderFunctions } from '@cdktn/provider-aws/lib/provider-functions';",
          "declare const fns: AwsProviderFunctions;",
        ].join("\n"),
      ),
    ).toBe(["import { provider } from '@cdktn/aws';", "declare const fns: provider.AwsProviderFunctions;"].join("\n"));
  });

  it("keeps the classic `…A` spelling straight in both directions", () => {
    // `aws_s3_bucket`'s own `versioning` block took `S3BucketVersioning` first, so the resource is
    // `S3BucketVersioningA` — the quirk no rule short of running the classic parser predicts.
    const result = migrate(
      [
        "import { S3BucketVersioningA, S3BucketVersioning } from '@cdktn/provider-aws/lib/s3-bucket-versioning';",
        "import { S3BucketVersioning as BucketVersioningBlock } from '@cdktn/provider-aws/lib/s3-bucket';",
        "declare const a: S3BucketVersioningA;",
        "declare const block: BucketVersioningBlock;",
      ].join("\n"),
    );
    // `S3BucketVersioning` is not an export of `s3-bucket-versioning` — it belongs to `s3-bucket`.
    expect(result.unmapped.map((u) => u.symbol)).toEqual(["s3-bucket-versioning.S3BucketVersioning"]);
    expect(result.after).toContain("declare const a: s3.TfBucketVersioning;");
    expect(result.after).toContain("declare const block: s3.TfBucket.VersioningProperty;");
    expect(result.after).toContain(
      "import { S3BucketVersioning } from '@cdktn/provider-aws/lib/s3-bucket-versioning';",
    );
  });
});
