# 0.3.0 — `Aws<Stem>` classes and `s3`-style Go packages

The record of one revision to M6, taken on community feedback 2026-09-07, against
`terraform-provider-aws` 6.62.0. Two spellings change. Nothing else does — not the stem algorithm,
not the curated lists, not a file name, not a nested type. Version **0.3.0**.

## The feedback

From Go and TypeScript users of `@cdktn/provider-aws`, on the 0.2.0 shape:

* **`Tf` marks nothing.** "It has no semantic usefulness and is actively confusing" — every type in
  a terraform binding is terraform-shaped, so an infix that says so carries no information. Stutter
  in a name is "filterable noise"; a new infix in the middle of every symbol is not. Keep the L1
  name as close to the HCL type as the grouping allows, and if there is to be a prefix, make it the
  one that says which provider: `Aws`, as `Cc` does in `cdktn-awscc`.
* **Per-service grouping is the win**, and it is the part to leave alone. Minimal API change
  otherwise.
* **Nested mount + `Property` + the Go underscore** are accepted as unavoidable once the types are
  mounted on the class (C# `CS0102` forbids a nested type sharing its outer type's member names,
  which is why the suffix exists at all).
* **`awss3` in Go against `s3` in TypeScript and Python is inconsistent**, and doubles the stutter
  in the one language where the package name is repeated at every call site.

## The decision

**1. An L1 class is `Aws` + PascalCase(stem)**, with the stem computed exactly as 0.2.0 computed it
— same algorithm, same curated `stripPrefixes` lists, same "an exact match leaves no stem, so back
off" rule. `s3.AwsBucket`, `ec2.AwsInstance`, `amp.AwsWorkspace`, `acm_pca.AwsCertificateAuthority`,
`vpc.AwsVpc`, `elb.AwsLb` / `elb.AwsAlb`, `lambda.AwsFunction`,
`transit_gateway.AwsTransitGateway`.

**2. The surface marker still leads**, in the shape the classic library already uses: a data source
is `DataAws<Stem>`, an ephemeral resource `EphemeralAws<Stem>`, a config interface the class name
plus `Config`. So one terraform name can still be two classes —
`quicksight.AwsDataSet` beside `quicksight.DataAwsDataSet` — and `AwsX` unambiguously means
"resource".

**3. The provider is untouched**: `AwsProvider`, `AwsProviderConfig`, `AwsProviderFunctions`. It is
not an L1 resource, and it already had the right prefix.

**4. Nested block types are untouched**: mounted on the class, `Property` suffix.
`s3.AwsBucket.CorsRuleProperty` in TypeScript, `s3.AwsBucket_CorsRuleProperty` in Go,
`cdktn_aws.s3.AwsBucket.CorsRuleProperty` in Python.

**5. A Go package is the group slug with underscores removed and no `aws` prefix**:
`github.com/cdktn-io/cdktn-aws-go/s3` → `s3.NewAwsBucket(…)`, `…/amp` → `amp.NewAwsWorkspace`,
`…/acmpca`, `…/provider` → `provider.NewAwsProvider`. Release tags follow the directory, so they
become `s3/v0.3.0`.

**6. File names do not move.** They are keyed on the terraform type
(`generated/s3/src/aws-s3-bucket-versioning.ts`), so the tree layout and the deep-path identity of
every generated file survive the rename — as they did in 0.2.0.

## Before and after

| | `@cdktn/provider-aws` (classic) | `@cdktn/aws` 0.2.0 | `@cdktn/aws` 0.3.0 |
| --- | --- | --- | --- |
| TS, resource | `s3Bucket.S3Bucket` | `s3.TfBucket` | `s3.AwsBucket` |
| TS, the other one | `s3BucketVersioning.S3BucketVersioningA` | `s3.TfBucketVersioning` | `s3.AwsBucketVersioning` |
| TS, config | `S3BucketConfig` | `s3.TfBucketConfig` | `s3.AwsBucketConfig` |
| TS, data source | `dataAwsS3Bucket.DataAwsS3Bucket` | `s3.DataTfBucket` | `s3.DataAwsBucket` |
| TS, ephemeral | `EphemeralAwsLambdaInvocation` | `lambda.EphemeralTfInvocation` | `lambda.EphemeralAwsInvocation` |
| TS, nested | `S3BucketCorsRule` | `s3.TfBucket.CorsRuleProperty` | `s3.AwsBucket.CorsRuleProperty` |
| TS, provider | `AwsProvider` | `provider.AwsProvider` | `provider.AwsProvider` |
| Go, import | `…/cdktn-provider-aws-go/aws/vNN/s3bucket` | `…/cdktn-aws-go/awss3` | `…/cdktn-aws-go/s3` |
| Go, ctor | `s3bucket.NewS3Bucket` | `awss3.NewTfBucket` | `s3.NewAwsBucket` |
| Go, nested | `s3bucket.S3BucketCorsRule` | `awss3.TfBucket_CorsRuleProperty` | `s3.AwsBucket_CorsRuleProperty` |
| Go, tag | `aws/vNN.N.N` | `awss3/v0.2.0` | `s3/v0.3.0` |
| Python | `cdktn_provider_aws.s3_bucket.S3Bucket` | `cdktn_aws.s3.TfBucket` | `cdktn_aws.s3.AwsBucket` |

## What did NOT change

The grouping and its 257 curated groups; `stripPrefixes` and every entry in it; the stem algorithm
and its empty-stem back-off; file names; the nested-type mount, their `Property` suffix and their
Go underscore spelling; the mapper-function `Mapper` disambiguator; the provider's three exports;
the TypeScript and Python submodule names (already `s3`); the npm package name; the monolith. The
regeneration was verified to be a pure rename against the 0.2.0 tree the way M6 verified itself:
every 0.2.0 file transformed by the rename rule alone must equal its 0.3.0 file byte-for-byte —
3,434 files checked, 0 residual.

`naming-map.json` moves in its `className` column only: 2,400 of 2,401 entries renamed
(`aws_provider` unchanged), every `classic` and `nested` row byte-identical.

## The Go package rename, and the directories it leaves behind

All 258 hashes change, so the 0.3.0 release tags all 258 modules, at the new names.

`publib-golang` handles the old directories on its own. Its `GoReleaser.syncRepo`
(`node_modules/publib/lib/targets/go.js:200`) checks for a **top-level** `go.mod` in the target
repository; `cdktn-aws-go` has none (that is asserted by `manifests.test.ts`), so it takes the
other branch and `git rm -r`s **every top-level directory that contains a `go.mod`** before
`fs.copySync`ing `dist/go` in. All 258 `aws<group>/` directories carry one, so they are removed by
the publish itself, in the same commit that adds `s3/`, `ec2/`, … No manual cleanup commit for the
directories is needed, and none should be made ahead of the release.

What that sweep does **not** reach is a top-level *file*: it only ever `git rm`s a top-level entry
that contains a `go.mod`. `cdktn-aws-go`'s tree is 258 module directories, `.git`, and one tracked
`README.md` — and `dist/go` has no root `README.md` to overwrite it with, so it survives the
publish verbatim. It is 0.2.0's landing page and it is wrong on every 0.3.0 name: the layout block
lists `awsdetective/`, `awslexv2models/`, `awsprovider/`; it states the directory rule as `aws`
followed by the slug; its `go get`, its import block and its `AwsProvider` sentence all say
`awsprovider`; its tags read `awsdetective/v0.1.0`; its major-version section says
`awsdetective/v2/`. That needs a **one-time hand edit in `cdktn-aws-go` after the 0.3.0 push** —
after, because until then the published tree really is the 0.2.0 one the README describes. It is a
checkbox in [`m4-publishing.md`](./m4-publishing.md) § "Still open"; nothing in this repository can
do it, and nothing here should.

Until that push, `../cdktn-aws-go` holds the 0.2.0 directory names, so a plain `pnpm test` reports
259 failed inventory assertions in `manifests.test.ts` against a checkout that is one release
behind — not a defect in either tree. Run the suite with `CDKTN_AWS_GO_ROOT=none` (what `ci.yml`
does, skipping those 259 in writing) or point it at a scratch fleet assembled from this branch:
`node scripts/assemble-go-dist.mjs --out <dir>` then `CDKTN_AWS_GO_ROOT=<dir> pnpm test`.

What that does **not** do is unpublish anything. The `aws<group>/v0.2.0` tags point at commits that
remain in history, so `go get github.com/cdktn-io/cdktn-aws-go/awss3@v0.2.0` keeps resolving
through `proxy.golang.org` forever — as it must, since the proxy and the checksum database are
append-only. A consumer on 0.2.0 is not broken by 0.3.0; they are on a different import path, which
is Go's import-path-is-identity rule doing exactly what it is for. Moving to 0.3.0 is an edit to
their imports, and `docs/migrating-from-provider-aws.md` covers the symbol half.

One new guard came with the shorter names: a Go package name is a bare identifier at every call
site, so `goPackageName` now refuses a slug that spells a Go keyword (`map`, `range`, `type`). No
aws 6.62.0 slug does; the `aws` prefix used to make it unreachable, and now it is not.

## Blast radius

* `tools/aws2cdk/src/naming.ts` — `CLASS_PREFIX`, `NAME_GRAMMAR`. One consequence worth knowing:
  the provider's three exports used to be the only names outside `NAME_GRAMMAR` and now satisfy it
  by accident of spelling. They stay on `isProviderExport`, because what excuses them is that the
  classic library named them.
* `tools/aws2cdk/src/groups.ts` and `release-plan.ts` — `goPackageName`, in both of its deliberate
  copies.
* All 258 generated packages, `generated/hashes.json`, `naming-map.json`.
* `examples/go-consumer` (import paths, identifiers, and the `provider` package aliased to
  `awsprovider` so it does not collide with the construct's own name), the migration tool's
  `TARGET_RANGE` (`^0.3.0`), and `examples/migrate/typescript/migrated/`, regenerated by the tool.

## Published (2026-09-07)

Release run `34093053651`, 16/16 green: npm `@cdktn/aws` 0.3.0, PyPI 0.3.0, GitHub Release `v0.3.0`.
`cdktn-aws-go` now holds exactly **258 top-level module directories at the new names** (`s3`,
`provider`, `acmpca`, …) and **zero `aws*` directories** — `publib-golang`'s sweep removed all 258
old ones in the publish commit, as predicted above — plus 258 `<pkg>/v0.3.0` tags (774 in total,
counting 0.1.1 and 0.2.0, which keep resolving). The proxy's
`.../cdktn-io/cdktn-aws-go/s3/@latest` returns `v0.3.0`, and a cold consumer outside any workspace
(`go get github.com/cdktn-io/cdktn-aws-go/s3@v0.3.0 …/provider@v0.3.0`) built and synthed
`s3.NewAwsBucket` with a `CorsRule` block and `s3.NewDataAwsBucket`.

The one-time README hand-edit this document reserved did not happen and is not needed: the surviving
top-level `README.md` is a two-line stub that names no directory, import path or tag, so it
contradicts nothing. The `m4-publishing.md` checkbox is ticked with that finding.
