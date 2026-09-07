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

# not published yet — until it is, run it from a checkout of this repository:
pnpm migrate ts --project ../my-app/tsconfig.json
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

* every import form — deep named, deep `* as`, barrel named, barrel `* as`, and the loader
  spellings of each: `require()`, `module.require()` and `const ns = await import('…')`, which all
  bind the same namespace object. Deep and barrel-named imports merge into one sorted
  `import { … } from '@cdktn/aws'` per file; a `import * as aws from '@cdktn/provider-aws'` keeps
  its shape and only changes package, because `aws.s3.TfBucket` is a perfectly good call site;
* every reference to those bindings, in value **and** type positions — `typeof`, generics,
  `satisfies`, `extends`, a type annotation — resolved through the TypeScript symbol rather than by
  matching text, so a local variable that happens to share a name is never touched;
* `package.json`: `@cdktn/provider-aws` becomes `@cdktn/aws@^0.2.0`, in every dependency block that
  declared it — a library that has it in both `dependencies` and `peerDependencies` gets both, one
  report row each. A touched block is rebuilt from a sorted key list, so the result does not depend
  on the order the file happened to have, and the report's *becomes* column prints the range the
  manifest actually ends up with. A block that already declares `@cdktn/aws` keeps its own range
  when that range is inside `@cdktn/aws@^0.2.0`; when it is not, nothing in the manifest is touched —
  see the limits table.

If the group name is already bound in a file, the barrel member is aliased deterministically
(`import { s3 as s3_ }`, then `s3_2`, `s3_3`). A type-only import stays type-only: when every
binding merged into the group import came from `import type { … }` or `import { type X }`, the
result is `import type { s3 } from '@cdktn/aws'` — mixed contributors make it a value import.

## What it reports instead of rewriting

A symbol the map does not cover is **never guessed at**. It goes in the report table with its file,
line and the reason, and the import it comes through is kept — reduced to just the symbols that
could not move — so the file still compiles while you decide. While anything is unmapped,
`package.json` also keeps `@cdktn/provider-aws` *beside* `@cdktn/aws`, because those residual
imports still have to install. **The exit code is non-zero while anything is unmapped**, which is
what lets a CI job gate on the tool.

Known limits. Every one of them is reported at runtime except the two marked **silent**, which the
closing `grep` below is there to catch:

| limit | what happens |
| --- | --- |
| JSDoc `@type {S3Bucket}` | **silent** — it is a comment, and the tool does not read comments |
| a dynamic `require(someVariable)` | **silent** — the specifier is not a literal, so nothing recognises it as an import |
| string-keyed access, `aws['s3Bucket']['S3Bucket']` | reported — the binding is seen, the hop through it is not a name to rewrite |
| a classic submodule passed around as a value (`const m = s3Bucket;`) | reported — there is no single symbol to rename |
| a shorthand property assignment (`{ S3Bucket }`) | reported — renaming it would rename the property too |
| a re-export of a classic binding (`export { S3Bucket };`) | reported — `export { s3.TfBucket }` is not valid syntax; re-export it by hand |
| `export … from '@cdktn/provider-aws/…'`, `export *` | reported — the classic names are part of *your* API there, so the choice is yours |
| `import x = require('@cdktn/provider-aws/…')`, an un-awaited `import('…')` | reported — the specifier is recognised, the form is not rewritten (an un-awaited `import()` binds a Promise, not a namespace) |
| any other call taking a classic specifier — `require.resolve('…')`, `jest.requireActual('…')`, a `module.require('…')` that is not a whole `const … =` statement | reported — the string is seen, but what the call does with it is not something to guess at |
| a classic specifier written as a bare string anywhere else | reported — the backstop scans every string literal, not the positions the tool recognises |
| a subpath with no map row | reported, and its import kept whole |
| a `package.json` that already declares `@cdktn/aws` at a range outside `@cdktn/aws@^0.2.0` | reported, and the manifest is left exactly as it was — overwriting an intentional pin, or keeping an incompatible one, are both guesses. Resolve the range by hand and re-run |
| a default import (`import aws from '@cdktn/provider-aws'`) | reported — neither library has a default export, so the binding stays on the classic package, and a `* as` binding sharing that statement stays with it |

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

The range `--write` puts in a manifest is written down once, in `tools/migrate/src/map.ts` as
`TARGET_RANGE` — not derived from this repository's own `package.json`, whose version is the *next*
release's for the whole of a development cycle. Bumping it is that one line;
`tools/migrate/test/map.test.ts` § "the target range" then fails until this page, the tool's README
and the worked example's manifest have caught up, which is what keeps them from drifting apart.
