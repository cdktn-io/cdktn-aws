# The TypeScript migration, worked

One small stack, twice, plus the proof that the two mean the same thing.

| directory | what it is |
| --- | --- |
| `classic/` | the stack as a `@cdktn/provider-aws` consumer writes it today — three import styles, a provider `assume_role` block, an S3 bucket with `cors_rule` and `versioning`, `aws_s3_bucket_versioning` (the `…A` quirk), a lambda with `vpc_config`, an IAM role, a data source, an alias resource, an OutputReference read and two outputs |
| `migrated/` | **exactly** what `@cdktn/aws-migrate ts --write` produces from `classic/`. Never hand-edited — `pnpm migrate:example` regenerates it |
| `golden/cdk.tf.json` | the synth of `classic/` against the real published `@cdktn/provider-aws`. `golden/VERSION` records which build |

## The claim, and how it is checked

`pnpm migrate:verify` runs both halves, and so does CI:

1. **The tool still produces `migrated/`.** `classic/` is copied to a temp directory, the tool runs
   over the copy, and the result is compared byte for byte. Any change to the rewrite — or to
   `naming-map.json` — surfaces here as a diff a reviewer reads, rather than as a surprise in
   someone's project.
2. **The migration preserved the terraform.** `migrated/` is compiled and synthesised against this
   tree's own generated packages, and its `cdk.tf.json` is compared to `golden/cdk.tf.json`. Equal
   terraform out of two differently-named libraries is the whole claim the rename makes.

Two fields are masked in step 2 and nothing else: `//.metadata.version` (the cdktn runtime that
synthesised the file) and `terraform.required_providers.aws.version` (the provider version each
library was generated from). Both are properties of the build, not of the bindings; both happen to
be equal today, and `scripts/migrate-verify.mjs` prints their values on every run so that stays
visible.

## Why `golden/` is committed rather than rebuilt

`@cdktn/provider-aws` is ~460 MB installed — one npm package per resource — and it is the only
thing in this proof that CI cannot cheaply have. So the classic synth is produced **once, locally**,
by `pnpm migrate:golden:refresh` (`scripts/migrate-golden.mjs`), which installs it in a scratch
directory outside the repository, and its output is committed. Refresh it when the example changes
or when the provider pin moves.

CI never installs the classic library, and never builds the monolith either: step 2 compiles only
the six groups the example imports and resolves `@cdktn/aws` to a six-line barrel shim over
`generated/<group>/lib` — the same `export * as <group>` surface `scripts/build-monolith.mjs`
publishes, minus the copy-in.

## The rename, read off the diff

```diff
-import { AwsProvider, AwsProviderAssumeRole } from '@cdktn/provider-aws/lib/provider';
-import { S3Bucket, S3BucketCorsRule } from '@cdktn/provider-aws/lib/s3-bucket';
-import * as s3BucketVersioning from '@cdktn/provider-aws/lib/s3-bucket-versioning';
-import { dataAwsCallerIdentity, iamRole, lambdaFunction, alb } from '@cdktn/provider-aws';
+import { elb, iam, lambda, provider, s3, sts } from '@cdktn/aws';

-const ASSUME_ROLE: AwsProviderAssumeRole = { … };
+const ASSUME_ROLE: provider.AwsProvider.AssumeRoleProperty = { … };

-new s3BucketVersioning.S3BucketVersioningA(this, 'assets-versioning', { … });
+new s3.AwsBucketVersioning(this, 'assets-versioning', { … });

-new alb.Alb(this, 'edge', { … });
+new elb.AwsAlb(this, 'edge', { … });
```

Four import declarations become one; six classic submodules collapse into six service groups.
`docs/migrating-from-provider-aws.md` is the reference.
