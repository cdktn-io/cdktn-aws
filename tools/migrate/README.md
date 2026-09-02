# `@cdktn/aws-migrate`

Rewrites a TypeScript project from [`@cdktn/provider-aws`][classic] — the classic, one-package-per-
resource cdktn bindings — onto [`@cdktn/aws`][target], the grouped ones.

```
cdktn-aws-migrate ts [--project tsconfig.json | <glob> ...] [--write] [--report <file>]
```

A **dry run by default**: it prints the unified diff it would apply and a report, and writes
nothing. `--write` applies it. The exit code is **1 while anything is left unmapped**, so a CI job
can gate on the tool rather than on someone reading its output.

From a checkout of this repository, before the package is published:

```
pnpm --filter @cdktn/aws-migrate start ts --project ../my-app/tsconfig.json
```

## What it rewrites

Everything is driven by the repository's committed [`naming-map.json`](../../naming-map.json) — the
rename table a full `pnpm generate` emits — and nothing else. There is no rule in this package that
restates a naming decision.

| in `@cdktn/provider-aws` | becomes |
| --- | --- |
| `import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket'` | `import { s3 } from '@cdktn/aws'` |
| `import * as s3Bucket from '@cdktn/provider-aws/lib/s3-bucket'` | same, merged into one declaration |
| `import { s3Bucket } from '@cdktn/provider-aws'` | same |
| `import * as aws from '@cdktn/provider-aws'` | `import * as aws from '@cdktn/aws'`, kept as one |
| `S3Bucket` / `S3BucketConfig` | `s3.TfBucket` / `s3.TfBucketConfig` |
| `S3BucketCorsRule` | `s3.TfBucket.CorsRuleProperty` |
| `S3BucketCorsRuleOutputReference` / `…List` | `s3.TfBucket.CorsRulePropertyOutputReference` / `…PropertyList` |
| `s3BucketCorsRuleToTerraform` | `s3.tfBucketMapperCorsRulePropertyToTerraform` |
| `@cdktn/provider-aws` in `package.json` | `@cdktn/aws@^0.2.0` |

The `require()` forms of every import shape are handled too, and every occurrence is resolved
through the TypeScript symbol rather than by matching text — so a local `const S3Bucket = …`, a
property named `s3Bucket` or a same-named import from another package are all left alone, and type
positions (`typeof`, generics, `satisfies`, `extends`) need no separate code path.

## What it reports instead

A symbol the map does not cover is **never guessed at**. It is listed in the report table, and the
import it comes through is kept — reduced to just the symbols that could not move — so the file
still compiles while a human decides. `docs/migrating-from-provider-aws.md` lists the known limits
(JSDoc `@type`, dynamic `require`, string-keyed access).

## Layout

| file | what it is |
| --- | --- |
| `src/map.ts` | `naming-map.json` expanded into "what does this classic export become" |
| `src/rewrite.ts` | one file's bindings, references and edits |
| `src/edits.ts` | the offsets-into-the-original splice, applied once at the end |
| `src/diff.ts` | the unified diff the dry run prints |
| `src/manifest.ts` | the `package.json` dependency swap |
| `src/report.ts` | the report, whose unmapped table decides the exit code |
| `bin/migrate.ts` | the CLI |

[classic]: https://www.npmjs.com/package/@cdktn/provider-aws
[target]: https://www.npmjs.com/package/@cdktn/aws
