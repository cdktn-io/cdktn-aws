# M6 — `Tf` naming for the L1 classes

The record of one decision and its blast radius: what an L1 class is called, why, and what was
deliberately left alone. Taken 2026-09-02, against `terraform-provider-aws` 6.62.0. No version
bump — 0.2.0 is cut once the nested-type milestone lands too.

## The decision

An L1 class is **`Tf`** + the terraform type with the group's own service prefix dropped from the
stem. Against `@cdktn/provider-aws`, the library a consumer is migrating from:

```ts
import { s3, lambda } from '@cdktn/aws';

new s3.TfBucket(this, 'b', { bucket: 'x' });                // was  s3Bucket.S3Bucket
new s3.TfBucketVersioning(this, 'v', { … });                // was  s3BucketVersioning.S3BucketVersioningA
new lambda.TfFunction(this, 'fn', { functionName: 'f' });   // was  lambdaFunction.LambdaFunction
```

(`S3BucketVersioningA` is not a typo — see [`naming-map.json`](#naming-mapjson).)

Two things are going on, and they are separable:

**`Tf` is a source-layer marker, not decoration.** It is the analogue of aws-cdk-lib's `Cfn`:

| aws-cdk-lib | cdktn-aws |
| --- | --- |
| `AWS::S3::Bucket` → `aws_s3.CfnBucket` | `aws_s3_bucket` → `awss3.TfBucket` |
| `Cfn` = generated 1:1 from the CloudFormation resource spec | `Tf` = generated 1:1 from the terraform resource schema |
| `aws_s3.Bucket` is the hand-written L2 | `awss3.Bucket` is free for a future L2 |

That last row is the whole point. `s3Bucket.S3Bucket` and `s3.Bucket` look like unrelated things;
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

Worked examples, all asserted in `tools/aws2cdk/test/contract.test.ts`, with the
`@cdktn/provider-aws` spelling of the same type — the thing a migrating consumer is holding — from
`tools/aws2cdk/test/classic-naming.test.ts`:

| terraform type | group | stripPrefixes | class | was, in `@cdktn/provider-aws` |
| --- | --- | --- | --- | --- |
| `aws_s3_bucket_versioning` | `s3` | `[s3]` | `TfBucketVersioning` | `s3BucketVersioning.S3BucketVersioningA` |
| data `aws_s3_bucket` | `s3` | `[s3]` | `DataTfBucket` | `dataAwsS3Bucket.DataAwsS3Bucket` |
| `aws_instance` | `ec2` | `[ec2]` | `TfInstance` | `instance.Instance` |
| `aws_ec2_capacity_reservation` | `ec2` | `[ec2]` | `TfCapacityReservation` | `ec2CapacityReservation.Ec2CapacityReservation` |
| `aws_prometheus_workspace` | `amp` | `[prometheus]` | `TfWorkspace` | `prometheusWorkspace.PrometheusWorkspace` |
| `aws_acmpca_certificate_authority` | `acm_pca` | `[acmpca]` | `TfCertificateAuthority` | `acmpcaCertificateAuthority.AcmpcaCertificateAuthority` |
| `aws_vpc` | `vpc` | `[vpc]` | `TfVpc` (no prefix leaves a stem) | `vpc.Vpc` |
| `aws_ec2_transit_gateway` | `transit_gateway` | `[ec2, ec2_transit_gateway]` | `TfTransitGateway` (the exact match falls through to `ec2`) | `ec2TransitGateway.Ec2TransitGateway` |
| `aws_lb` / `aws_alb` (alias) | `elb` | `[lb]` | `TfLb` / `TfAlb` | `lb.Lb` / `alb.Alb` |
| `aws_lb_listener` | `elb` | `[lb]` | `TfListener` | `lbListener.LbListener` |
| `aws_lambda_function` | `lambda` | `[lambda]` | `TfFunction` | `lambdaFunction.LambdaFunction` |
| ephemeral `aws_lambda_invocation` | `lambda` | `[lambda]` | `EphemeralTfInvocation` | `ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation` |
| data `aws_identitystore_user` | `sso_identity_store` | `[identitystore]` | `DataTfUser` | `dataAwsIdentitystoreUser.DataAwsIdentitystoreUser` |
| `aws_cloudwatch_log_group` | `cloudwatch_logs` | `[cloudwatch, cloudwatch_log]` | `TfGroup` | `cloudwatchLogGroup.CloudwatchLogGroup` |
| the provider block | `provider` | — | `AwsProvider` (unchanged) | `provider.AwsProvider` |

The last column is the classic library's TS submodule and class. Both other targets fall out of it
by jsii's own rules — Go drops the non-alphanumerics and lowercases (`s3bucketversioning`), Python
snake-cases (`s3_bucket_versioning`) — and `naming-map.json` carries all three per entry.

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
the files the run before it wrote beside today's `TfCertificate*.go`, in a module whose assembly no
longer declares those types. `scripts/build-fleet.mjs` removes the output before packing; the serial
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

A full `pnpm generate` writes the rename table to the repo root. It maps **`@cdktn/provider-aws` ->
`@cdktn/aws` 0.2.0** — the classic per-resource cdktn library is what every consumer of these
bindings is holding, and 0.1.x of this package was a PoC alpha with none. One entry per generated
class, keyed by the surface-marked terraform type, with the package roots recorded once:

```json
{
  "classicRoots": {
    "npm": "@cdktn/provider-aws",
    "goModule": "github.com/cdktn-io/cdktn-provider-aws-go",
    "goPackage": "aws",
    "python": "cdktn_provider_aws"
  },
  "entries": {
    "aws_s3_bucket_versioning": {
      "surface": "resource", "group": "s3", "className": "TfBucketVersioning",
      "classic": {
        "module": "s3-bucket-versioning", "className": "S3BucketVersioningA",
        "go": "s3bucketversioning", "python": "s3_bucket_versioning"
      }
    }
  }
}
```

The `classic` side is **not** derived from a rule restated here. `tools/aws2cdk/src/classic-naming.ts`
runs the vendored cdk-terrain parser — the same machinery `bin/baseline.ts` drives, in the same
order — and reads the names off its models, because the classic rule is not a function of one
terraform type: `uniqueClassName` and `uniqueBaseName` carry state across the whole schema, and
every nested struct competes for the same class-name pool. That is why `aws_s3_bucket_versioning`
is `S3BucketVersioningA`: `aws_s3_bucket`'s own `versioning` block took `S3BucketVersioning` first.
Eleven types land on such a suffix, and no rule short of running the parser finds them:

```
AutoscalingGroupTagA   DynamodbTableReplicaA   Ec2ManagedPrefixListEntryA
NetworkInterfaceAttachmentA   S3BucketLoggingA   S3BucketObjectLockConfigurationA
S3BucketReplicationConfigurationA   S3BucketServerSideEncryptionConfigurationA
S3BucketVersioningA   VpcPeeringConnectionAccepterA   Wafv2WebAclRuleA
```

The Go and Python names come from jsii-pacmak's own submodule rules — `goPackageNameForAssembly`
(non-alphanumerics dropped, lowercased) and the python target's `getPackageName` (snake_cased) —
applied to the TS submodule `src/index.ts` exports the module directory under.

All 2,401 rows are cross-checked against a `../ref-provider-aws` checkout by
`tools/aws2cdk/test/classic-naming.test.ts`: every `classic.module` must exist as `src/<module>/`
there and its `index.ts` must declare that class on that surface. 2,401 matched, 0 unmatched. The
check is skipped when the sibling checkout is absent and **fails** when it is absent under `CI`
(`CDKTN_PROVIDER_AWS_ROOT=none` is the deliberate opt-out), the same convention `manifests.test.ts`
uses for the Go fleet.

The file is the input of the upcoming migration-tool milestone, and the review table for this
change: 2,401 entries, sorted, committed.

## Go, before and after

The Go fleet inherits the rename through jsii-pacmak — module paths and package names are
unaffected, since those come from the slug, not from any class name. Against the classic Go
module, where each resource is its own package:

```go
// @cdktn/provider-aws (github.com/cdktn-io/cdktn-provider-aws-go/aws/vNN/…)
s3bucket.NewS3Bucket(stack, jsii.String("b"), &s3bucket.S3BucketConfig{Bucket: jsii.String("x")})
s3bucketversioning.NewS3BucketVersioningA(stack, jsii.String("v"), &s3bucketversioning.S3BucketVersioningAConfig{
    VersioningConfiguration: &s3bucketversioning.S3BucketVersioningVersioningConfiguration{…},
})

// @cdktn/aws 0.2.0 — one package per service group
awss3.NewTfBucket(stack, jsii.String("b"), &awss3.TfBucketConfig{Bucket: jsii.String("x")})
awss3.NewTfBucketVersioning(stack, jsii.String("v"), &awss3.TfBucketVersioningConfig{
    VersioningConfiguration: &awss3.TfBucketVersioning_VersioningConfigurationProperty{…},
})
```

`examples/go-consumer/main.go` is the compiled proof of the second spelling.

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

### `naming-map.json` reworked to the classic library, 2026-09-02

The map carried a `previous` column of 0.1.x `Aws<FullType>` names, and `naming.ts` froze that rule
for the migration tool. Wrong target: 0.1.x is a PoC alpha with no consumers, and the migration to
rewrite is `@cdktn/provider-aws` -> `@cdktn/aws` 0.2.0. `previous` is replaced by `classic`
(module / className / go / python) and `legacyClassName` is gone; file names are unaffected, since
they were only ever the dashed terraform type.

| gate | command | result |
| --- | --- | --- |
| generator | `pnpm generate` ×2 | 3,434 files / 2,401 classes in 3.4 s; `naming-map.json` rewritten, `generated/` byte-identical, `git status` clean on the second run |
| classic cross-check | `pnpm test` | **2,401 / 2,401** rows matched against `../ref-provider-aws` — every `classic.module` exists as `src/<module>/` and its `index.ts` declares that class on that surface. 0 unmatched, 0 classic modules unaccounted for (`provider-functions` is the only classic submodule that is not a schema entry) |
| tests | `pnpm test` | 2,226 passed, 9 snapshots |
| fixtures | `pnpm fixture:check` | up to date |
| types | `pnpm typecheck` (root + generator) | OK |
| groups | `pnpm check:groups` | PASS — gate C: 259 prefixes, all used, 0 collisions |

The 11 `A`-suffixed classic names above are the reason the derivation runs the vendored parser
instead of restating a rule; a re-implementation would have got every one of them wrong, and the
2,401-row cross-check is what proved that before the map was committed.

### The map grows a nested section, 2026-09-02 (M8)

`naming-map.json` carried one row per generated class and nothing about nested block types, which
is the smaller half of what a migrating consumer holds. Each entry now also carries
`nested: { "<terraform path>": { className, classic } }` — one row per struct — plus a
`mapperPrefix` on the five `s3`/`waf` entries whose mappers take the `Mapper` disambiguator, and the
file publishes the fixed suffix rules that derive the OutputReference/List/Map classes and the two
mapper functions on both sides. The classic side still comes from the vendored parser: the two
parses are joined positionally and every row is checked to end in the PascalCased terraform path it
claims. 9,856 nested rows; the file went from 866 KB to 3.0 MB. Nothing under `generated/` changed.
The record is [`docs/m8-migration.md`](./m8-migration.md).

### The Config interface's classic name is recorded too, 2026-09-02 (M8)

The map published `<classic.className>Config` as a derivation rule for the classic Config
interface. It is false for one entry in 2,401: the config struct is drawn from the same
`uniqueClassName` pool as every nested struct, so `aws_wafv2_web_acl_association` — whose
`Wafv2WebAclAssociationConfig` name was taken first — is `Wafv2WebAclAssociationConfigA`, and the
migration tool had no row for the one symbol a consumer of that resource's config type holds. Each
entry now carries `classic.configClassName`, read off the same parser models the class names are,
and the rule is gone. `classic-naming.test.ts` asserts all 2,401 against `../ref-provider-aws`.

### The marker is respelled `Aws`, and the Go packages drop it, 2026-09-07 (0.3.0)

Community feedback on 0.2.0 rejected `Tf` as a marker that marks nothing — "actively confusing" in
a library where every type is terraform-shaped — and asked for the prefix that names the provider
instead, as `Cc` does in `cdktn-awscc`. The same round objected to `awss3` in Go against `s3` in
TypeScript and Python. Both were taken: an L1 class is now `Aws<Stem>` / `DataAws<Stem>` /
`EphemeralAws<Stem>`, and a Go package is the slug with no `aws` prefix (`s3`, `acmpca`,
`provider`), with tags to match (`s3/v0.3.0`).

Everything this document decided *below* the marker survives it unchanged: the stem algorithm, the
curated `stripPrefixes` lists, the empty-stem back-off, the position-0 surface marker, the file
names keyed on the terraform type, the nested mount and its `Property` suffix, the `Mapper`
disambiguator, and the provider's three exports. The regeneration was verified to be a pure rename
of this tree, the same way this tree was verified against 0.1.x. The decision and the before/after
table for all three languages are in [`docs/v030-naming.md`](./v030-naming.md); the "Go, before and
after" section above is 0.2.0's spelling and is kept as the record of it.
