# M6 — `Tf` naming for the L1 classes

The record of one decision and its blast radius: what an L1 class is called, why, and what was
deliberately left alone. Taken 2026-09-02, against `terraform-provider-aws` 6.62.0. No version
bump — 0.2.0 is cut once the nested-type milestone lands too.

## The decision

`Aws` as a class prefix is replaced by **`Tf`**, and the group's own service prefix is dropped from
the stem:

```ts
import { s3, lambda } from '@cdktn/aws';

new s3.TfBucket(this, 'b', { bucket: 'x' });                // was  s3.AwsS3Bucket
new s3.TfBucketVersioning(this, 'v', { … });                // was  s3.AwsS3BucketVersioning
new lambda.TfFunction(this, 'fn', { functionName: 'f' });   // was  lambda.AwsLambdaFunction
```

Two things are going on, and they are separable:

**`Tf` is a source-layer marker, not decoration.** It is the analogue of aws-cdk-lib's `Cfn`:

| aws-cdk-lib | cdktn-aws |
| --- | --- |
| `AWS::S3::Bucket` → `aws_s3.CfnBucket` | `aws_s3_bucket` → `awss3.TfBucket` |
| `Cfn` = generated 1:1 from the CloudFormation resource spec | `Tf` = generated 1:1 from the terraform resource schema |
| `aws_s3.Bucket` is the hand-written L2 | `awss3.Bucket` is free for a future L2 |

That last row is the whole point. `s3.AwsS3Bucket` and `s3.Bucket` look like unrelated things;
`s3.TfBucket` and `s3.Bucket` read as the two layers over one resource, which is the vocabulary the
CDK ecosystem already has.

**The group already names the service, so the class does not repeat it.** `awss3.TfS3Bucket` says
"s3" three times over. The tokens to strip are not inferred from the type — they are curated per
group in `groups.json#stripPrefixes`, because the terraform prefix, the subcategory title and the
slug all disagree often enough that a rule that guesses would be wrong in both directions.

## The algorithm

Pure, deterministic, a function of (terraform type, surface, that group's `stripPrefixes`) and
nothing else — `tools/aws2cdk/src/naming.ts#classNameForEntry`:

```
parserType:  aws_s3_bucket_versioning | data_aws_s3_bucket | ephemeral_aws_lambda_invocation
surface:     resource                 | data_source        | ephemeral        (the marker decides)
raw:         drop the surface marker, then the `aws_` provider prefix   -> s3_bucket_versioning
stem:        the LONGEST p in stripPrefixes (ties alphabetical) with
               raw startsWith p+"_" -> stem = raw without p_
             a p matching raw EXACTLY leaves no stem, so it is skipped and the
             next-longest p gets its turn
             none leaves a stem     -> stem = raw     (the empty-stem back-off, below)
className:   ("" | "Data" | "Ephemeral") + "Tf" + toPascalCase(stem)
configName:  className + "Config"
```

The surface marker sits at **position 0**: `DataTfBucket`, `EphemeralTfInvocation` — not
`TfDataBucket`. The alternative (marker after `Tf`, so every symbol starts with `Tf`) reads
ambiguously on the 23 resources whose terraform type leads with a `data_`/`database` token:
`quicksight.TfDataSet` is the resource `aws_quicksight_data_set` while `TfDataDataSet` would be its
data source, and nothing but the doubled word distinguishes them. With the marker first, **anything
starting with `Tf` is a resource**, full stop — and cdktn's own leading `Data…` shape
(`DataAwsS3Bucket`) is preserved, so a migrating consumer's muscle memory still lands on the right
prefix.

**The empty-stem back-off.** A prefix that matches the raw type *exactly* would name the class after
nothing, so it does not win — the next-longest prefix does. `transit_gateway` lists
`[ec2, ec2_transit_gateway]`, so `aws_ec2_transit_gateway` falls through to `ec2` and is
`TfTransitGateway` (while `aws_ec2_transit_gateway_route` is still `TfRoute`). Only when *no* prefix
leaves a stem is the raw type kept whole: `aws_vpc` → `TfVpc`, not `Tf`. Six terraform types in the
pinned schema land there — `aws_vpc`, `aws_vpc_ipam`, `aws_lb`, `aws_elb`, `aws_cloudtrail`,
`aws_codepipeline` (ten schema entries, counting the ones that exist on two surfaces) — and it is
the only place the stripping backs off entirely.

Worked examples, all asserted in `tools/aws2cdk/test/contract.test.ts`:

| terraform type | group | stripPrefixes | class |
| --- | --- | --- | --- |
| `aws_s3_bucket_versioning` | `s3` | `[s3]` | `TfBucketVersioning` |
| data `aws_s3_bucket` | `s3` | `[s3]` | `DataTfBucket` |
| `aws_instance` | `ec2` | `[ec2]` | `TfInstance` |
| `aws_ec2_capacity_reservation` | `ec2` | `[ec2]` | `TfCapacityReservation` |
| `aws_prometheus_workspace` | `amp` | `[prometheus]` | `TfWorkspace` |
| `aws_acmpca_certificate_authority` | `acm_pca` | `[acmpca]` | `TfCertificateAuthority` |
| `aws_vpc` | `vpc` | `[vpc]` | `TfVpc` (no prefix leaves a stem) |
| `aws_ec2_transit_gateway` | `transit_gateway` | `[ec2, ec2_transit_gateway]` | `TfTransitGateway` (the exact match falls through to `ec2`) |
| `aws_lb` / `aws_alb` (alias) | `elb` | `[lb]` | `TfLb` / `TfAlb` |
| `aws_lb_listener` | `elb` | `[lb]` | `TfListener` |
| `aws_lambda_function` | `lambda` | `[lambda]` | `TfFunction` |
| ephemeral `aws_lambda_invocation` | `lambda` | `[lambda]` | `EphemeralTfInvocation` |
| data `aws_identitystore_user` | `sso_identity_store` | `[identitystore]` | `DataTfUser` |
| `aws_cloudwatch_log_group` | `cloudwatch_logs` | `[cloudwatch, cloudwatch_log]` | `TfGroup` |
| the provider block | `provider` | — | `AwsProvider` (unchanged) |

## The gates

Class names must be unique **within a group**, compared **case-insensitively**, across all three
surfaces at once — jsii-pacmak's Go emitter writes one file per type and `go build` rejects a
package whose file names differ only in case. That is asserted twice, on purpose:

* `tools/check-groups` gate C, over `groups.json` + the schema, before anything is generated. It
  also checks that each list is present, well-formed, sorted, unique, and that **every** listed
  prefix matches at least one member — an unused prefix is a curation error, not a harmless extra.
* `generate.ts`, per group, at emission time. A collision aborts the run loudly.

Gate C calls the generator's own `classNameForEntry` rather than a second copy of the rule, so it
cannot pass on a tree the generator would not emit. The pinned schema produces zero collisions; the
asserts exist so a provider bump cannot introduce one silently.

### One operational trap

`jsii-pacmak` does **not** clear its output directory, and a rename is the one change where that
matters: pack over an existing `generated/<group>/dist/go/` and it keeps yesterday's
`AwsAcmCertificate*.go` beside today's `TfCertificate*.go`, in a module whose assembly no longer
declares those types. `scripts/build-fleet.mjs` removes the output before packing; the serial
`scripts/build-generated.mjs --pacmak-go` does not. After a rename, pack the fleet with the former,
or `rm -rf generated/*/dist` first.

## The curated `stripPrefixes`

Twelve groups needed a hand-written list (one of them empty — the provider's meta data sources have
no service prefix at all); the table and the reasoning are in
[`curation.md`](./curation.md) (§ `stripPrefixes`). The rule of thumb is: strip exactly the
service-name tokens the group title already conveys, never a token that names the resource itself.

## What did NOT change

* **File names.** `generated/s3/src/aws-s3-bucket-versioning.ts` still exports what it always did,
  under a new name. Paths are keyed on the terraform type through `fileNameForTerraformType`, so the
  tree layout, `hashes.json`'s inputs and the deep-path identity of all 3,434 files are stable; the
  regeneration commit is 2,401 modified files under `generated/` (2,400 sources plus `hashes.json`)
  and zero renames. The two files that did not change at all are the provider's.
* **The provider construct.** `AwsProvider`, `AwsProviderConfig`, `AwsProviderFunctions`. It is not
  an L1 resource — it is the thing every L1 resource needs in its stack — and it is the one
  documented exception to `NAME_GRAMMAR`.
* **Nested block types.** Still `<Class>.<Leaf>Property`, mounted on the class's merged namespace,
  with `…PropertyOutputReference` / `…PropertyList` / `…PropertyMap`. Their fate is a separate
  milestone.
* **The `Config` suffix.** `TfBucketConfig`, never `Props` (see `curation.md`).
* **The runtime contract.** `pnpm check:contract --strict` still reports 22/22 units identical to
  the reference `@cdktn/provider-aws` build after naming normalization. Renaming changed what the
  declarations are called and nothing about what they do.

## `naming-map.json`

A full `pnpm generate` writes the rename map to the repo root — one entry per generated class,
keyed by the surface-marked terraform type:

```json
"aws_s3_bucket_versioning": {
  "surface": "resource", "group": "s3",
  "className": "TfBucketVersioning", "previous": "AwsS3BucketVersioning"
}
```

`previous` is produced by `naming.legacyClassName`, the 0.1.x rule kept and frozen for exactly this
purpose. The file is the input of the upcoming migration-tool milestone, and the review table for
this change: 2,401 entries, sorted, committed.

## Go, before and after

The Go fleet inherits the rename through jsii-pacmak — module paths and package names are
unaffected, since those come from the slug, not from any class name:

```go
// before (v0.1.1)
awss3.NewAwsS3Bucket(stack, jsii.String("b"), &awss3.AwsS3BucketConfig{Bucket: jsii.String("x")})
awss3.NewAwsS3BucketVersioning(stack, jsii.String("v"), &awss3.AwsS3BucketVersioningConfig{
    VersioningConfiguration: &awss3.AwsS3BucketVersioning_VersioningConfigurationProperty{…},
})

// after
awss3.NewTfBucket(stack, jsii.String("b"), &awss3.TfBucketConfig{Bucket: jsii.String("x")})
awss3.NewTfBucketVersioning(stack, jsii.String("v"), &awss3.TfBucketVersioningConfig{
    VersioningConfiguration: &awss3.TfBucketVersioning_VersioningConfigurationProperty{…},
})
```

`examples/go-consumer/main.go` is the compiled proof of that spelling.

## Evidence

Every gate, run on this tree at the commit that renamed it (macOS, 12 cores):

| gate | command | result |
| --- | --- | --- |
| groups | `pnpm check:groups` | PASS — 257 groups, gate C: 259 prefixes, all used, 0 class-name collisions |
| miner is clean | `pnpm mine` | proposes no diff against the committed `groups.json` |
| generator | `pnpm generate` | 3,434 files / 258 groups / 2,401 classes in 3.5 s; a second run leaves `git status` clean |
| types | `pnpm typecheck` | 258/258 packages OK, 98 s |
| tests | `pnpm test` | 2,194 passed, 9 snapshots |
| fixtures | `pnpm fixture:check` | up to date |
| jsii (full fleet) | `pnpm jsii` | 258/258 OK, **197 s** serial — JSII3 **0**, JSII6 **0**, JSII5018 2,519 (the same count M3 recorded) |
| runtime contract | `pnpm check:contract --strict` | `aws_lb` 22/22 units identical to `../ref-provider-aws` |
| synth | `pnpm synth:smoke` | PASS with validation ON — `aws_lb`, `aws_alb` |
| isolation | `pnpm check:imports` / `pnpm check:go-imports` | 0 cross-group imports over 2,660 TS files / 258 Go modules |
| pacmak (full fleet) | `pnpm pacmak:go` | 258/258, every module path asserted against its own manifest, 698 s serial |
| Go build | `scripts/go-tidy-build.mjs` over the packed fleet | 258/258 tidied and `go build ./...` clean, 47.5 s at 10-way |
| Go consumer | `scripts/go-consumer.mjs` | 36 modules, all 35 sampled types present, every assertion OK |

### Post-review fix-up, 2026-09-02

Three changes landed after the review above: the surface marker moved to position 0
(`DataTfBucket`), an empty `stripPrefixes` became legal, and `s3_control`, `transit_gateway` and
`vpn_client` got curated lists. Re-run on the same machine:

| gate | command | result |
| --- | --- | --- |
| groups | `pnpm check:groups` | PASS — 257 groups, gate C: 259 prefixes, all used, 0 class-name collisions |
| miner is clean | `pnpm mine` | proposes no diff against the committed `groups.json` (12 stripPrefix overrides) |
| generator | `pnpm generate` | 3,434 files / 2,401 classes in 3.2 s; a second run leaves `git status` clean |
| types | `pnpm typecheck` | 258/258 packages OK, 67 s |
| tests | `pnpm test` | 2,197 passed, 9 snapshots |
| fixtures | `pnpm fixture:check` | up to date |
| jsii (full fleet) | `pnpm jsii` | 258/258 OK, **198 s** serial — JSII3 **0**, JSII6 **0**, JSII5018 2,519 |
| runtime contract | `pnpm check:contract --strict` | `aws_lb` 22/22 units identical to `../ref-provider-aws` |
| synth | `pnpm synth:smoke` | PASS with validation ON |
| isolation | `pnpm check:imports` | 0 cross-group imports over 2,660 TS files |
| ambiguity | `naming-map.json` | 0 resources named `DataTf…`/`EphemeralTf…`; the 23 `Tf<Data…>` resources are unambiguously resources |
| pacmak (40 groups) | `build-generated.mjs --pacmak-go` over the 36 the consumer imports + `quicksight`, `s3_control`, `transit_gateway`, `vpn_client` | 40/40 packed, every module path asserted against its own manifest, 96 s |
| Go build | `go mod tidy && go build ./...` in each packed module | 40/40 clean. `awsquicksight` carries `TfDataSet.go` and `DataTfDataSet.go` side by side — the case-insensitive file-name check the Go emitter would have failed on a bad rename |
| Go consumer | `scripts/go-consumer.mjs --root <packed 40>` | all 35 sampled types present, synth with validation ON, every assertion OK |

The full fleet was not re-packed (`pnpm pacmak:go`, 698 s) or re-run through `check:go-imports`
after the fix-up — `check:go-imports` reads packed modules, so it needs that pack first.

**Back-off refinement** (same day): an exact-matching prefix now falls through to the next-longest
instead of ending the search, which moves three `transit_gateway` entries and nothing else.

| gate | command | result |
| --- | --- | --- |
| groups | `pnpm check:groups` | PASS — gate C: 260 prefixes, every one used, 0 collisions |
| miner is clean | `pnpm mine` | zero diff against `groups.json` |
| generator | `pnpm generate` ×2 | 3,434 files; 3 entries changed (`aws_ec2_transit_gateway` on both surfaces + its Go file), `git status` clean on the second run |
| tests / fixtures | `pnpm test`, `pnpm fixture:check` | 2,200 passed, 9 snapshots; fixtures up to date |
| types | `pnpm typecheck` | 258/258 OK |
| runtime contract | `pnpm check:contract --strict` | 22/22 units identical |
| synth | `pnpm synth:smoke` | PASS, validation ON |
| Go | jsii + pacmak + `go build ./...` for `transit_gateway` | OK — JSII3 0, JSII6 0; `TfTransitGateway.go` and `DataTfTransitGateway.go` both build |
