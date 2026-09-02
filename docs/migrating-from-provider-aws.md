# Migrating from `@cdktn/provider-aws`

`@cdktn/aws` is the same terraform provider, bound the same way, with three differences a consumer
feels: **one npm package instead of 2,402 submodules**, **one module per AWS service** instead of
one per resource, and **`Tf<Stem>` class names** instead of the full terraform type.

Everything else — the constructs, the props, the attribute getters, the synthesised terraform — is
unchanged. That last one is not a hope: `examples/migrate/typescript/` is a project migrated by the
tool whose `cdk.tf.json` is compared, on every pull request, to the synth of the same project
against the real published `@cdktn/provider-aws`.

There is a tool. It is a dry run by default.

```bash
npx @cdktn/aws-migrate ts --project tsconfig.json              # print the diff and the report
npx @cdktn/aws-migrate ts --project tsconfig.json --write      # apply it
```

## What changes

| | `@cdktn/provider-aws` | `@cdktn/aws` |
| --- | --- | --- |
| package | `@cdktn/provider-aws` | `@cdktn/aws` |
| import | `import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket'` | `import { s3 } from '@cdktn/aws'` |
| | `import { s3Bucket } from '@cdktn/provider-aws'` | (the same one import) |
| class | `S3Bucket` | `s3.TfBucket` |
| config | `S3BucketConfig` | `s3.TfBucketConfig` |
| data source | `DataAwsS3Bucket` | `s3.DataTfBucket` |
| ephemeral | `EphemeralAwsLambdaInvocation` | `lambda.EphemeralTfInvocation` |
| nested block | `S3BucketCorsRule` | `s3.TfBucket.CorsRuleProperty` |
| its reference | `S3BucketCorsRuleOutputReference` | `s3.TfBucket.CorsRulePropertyOutputReference` |
| its list | `S3BucketCorsRuleList` | `s3.TfBucket.CorsRulePropertyList` |
| its mapper | `s3BucketCorsRuleToTerraform` | `s3.tfBucketMapperCorsRulePropertyToTerraform` |
| provider | `AwsProvider`, `AwsProviderConfig`, `AwsProviderFunctions` | `provider.AwsProvider`, … (unchanged names) |
| provider block | `AwsProviderAssumeRole` | `provider.AwsProvider.AssumeRoleProperty` |

Three things to keep in mind while reading that table:

* **The class name drops the group's own service tokens**, because the module already carries them:
  `awss3.TfBucket`, not `awss3.TfS3Bucket`. Which tokens count is curated per group, not guessed —
  [`docs/m6-tf-naming.md`](./m6-tf-naming.md).
* **A nested type is mounted on its class**, with a `Property` suffix, instead of living flat at
  module scope under a name that repeats the resource.
* **The provider construct keeps its name.** It is not an L1 resource, and every stack has one.

Two classic names survive as traps worth knowing about:

* `S3BucketVersioningA` — the resource `aws_s3_bucket_versioning`, so named because
  `aws_s3_bucket`'s own `versioning` block took `S3BucketVersioning` first. Eleven types carry that
  `A`. Here they are just `s3.TfBucketVersioning`, and the block is `s3.TfBucket.VersioningProperty`.
* Mapper functions in `s3` and `waf` carry a `Mapper` disambiguator
  (`s3.tfBucketMapperCorsRulePropertyToTerraform`), because plain concatenation is not injective
  when one class name is a prefix of another. You will rarely call one by hand.

## The tool

```
cdktn-aws-migrate ts [--project tsconfig.json | <glob> ...] [--write] [--report <file>]
```

It is driven **only** by [`naming-map.json`](../naming-map.json), the rename table a full
`pnpm generate` emits: 2,401 entries and 9,856 nested rows, every one of them cross-checked against
the real `@cdktn/provider-aws` tree by `tools/aws2cdk/test/classic-naming.test.ts`. Nothing in the
tool restates a naming rule.

It rewrites:

* every import form — deep named, deep `* as`, barrel named, barrel `* as`, and the `require()`
  spelling of each. Deep and barrel-named imports merge into one sorted
  `import { … } from '@cdktn/aws'` per file; a `import * as aws from '@cdktn/provider-aws'` keeps
  its shape and only changes package, because `aws.s3.TfBucket` is a perfectly good call site;
* every reference to those bindings, in value **and** type positions — `typeof`, generics,
  `satisfies`, `extends`, a type annotation — resolved through the TypeScript symbol rather than by
  matching text, so a local variable that happens to share a name is never touched;
* `package.json`: `@cdktn/provider-aws` becomes `@cdktn/aws@^0.2.0`, in whichever dependency block
  declared it.

If the group name is already bound in a file, the barrel member is aliased deterministically
(`import { s3 as s3_ }`, then `s3_2`, `s3_3`).

## What it reports instead of rewriting

A symbol the map does not cover is **never guessed at**. It goes in the report table with its file,
line and the reason, and the import it comes through is kept — reduced to just the symbols that
could not move — so the file still compiles while you decide. While anything is unmapped,
`package.json` also keeps `@cdktn/provider-aws` *beside* `@cdktn/aws`, because those residual
imports still have to install. **The exit code is non-zero while anything is unmapped**, which is
what lets a CI job gate on the tool.

Known limits, all of them reported rather than silently wrong:

| limit | what happens |
| --- | --- |
| JSDoc `@type {S3Bucket}` | not rewritten, and not reported either — it is a comment; grep for `@cdktn/provider-aws` afterwards |
| a dynamic `require(someVariable)` | not recognised as an import; nothing is rewritten |
| string-keyed access, `aws['s3Bucket']['S3Bucket']` | not recognised; nothing is rewritten |
| a classic submodule passed around as a value (`const m = s3Bucket;`) | reported — there is no single symbol to rename |
| a shorthand property assignment (`{ S3Bucket }`) | reported — renaming it would rename the property too |
| a re-export of a classic binding (`export { S3Bucket };`) | reported — `export { s3.TfBucket }` is not valid syntax; re-export it by hand |
| `export … from '@cdktn/provider-aws/…'`, `export *` | reported — the classic names are part of *your* API there, so the choice is yours |
| `import x = require('@cdktn/provider-aws/…')`, `import('…')` | reported — the specifier is recognised, the form is not rewritten |
| a subpath with no map row | reported, and its import kept whole |
| `import type { … }` of a classic type | rewritten to a plain `import { s3 } from '@cdktn/aws'` — under `verbatimModuleSyntax` that is a runtime import the file did not have before |

After a `--write` run, `grep -r '@cdktn/provider-aws' .` is the honest last step.

## The worked example

[`examples/migrate/typescript/`](../examples/migrate/typescript/) is the reference: the same stack
in `classic/` and in `migrated/`, and the terraform both synthesise. `migrated/` is the tool's
literal output, regenerated by `pnpm migrate:example`, and `pnpm migrate:verify` re-proves both
halves — byte-equal tool output, and a `cdk.tf.json` equal to the classic one outside two masked
build fields. Read that directory's README for the mechanism.

## Go and Python

Planned, not built. The rename table already carries both — every entry has its classic Go package
(`s3bucketversioning`) and Python submodule (`s3_bucket_versioning`) beside its new one — so the
same map drives them when they land. Until then:

* **Go**: `github.com/cdktn-io/cdktn-provider-aws-go/aws/vNN/s3bucket` becomes
  `github.com/cdktn-io/cdktn-aws-go/awss3`, one module per service group.
  [`docs/m3-go.md`](./m3-go.md) has the shape; `examples/go-consumer/main.go` is a written-out
  consumer.
* **Python**: `cdktn_provider_aws.s3_bucket` becomes `cdktn_aws.s3`, one wheel.

## A note on versions

`@cdktn/aws` is an alpha at 0.2.0 with no released consumers, and its version does not track the
provider's — `@cdktn/provider-aws@25.3.0` and `@cdktn/aws@0.2.0` bind the same
`terraform-provider-aws` 6.62.0. Check `schemas/PROVIDER_VERSION` here and `cdktn.provider.version`
in the classic package's manifest before assuming two builds agree.
