# M1 — the aws2cdk generator

Decisions taken while building `tools/aws2cdk` (the M1 slice: a working generator, proven on three
packages). The M0 curation record is [`curation.md`](./curation.md); this file is the M1 record.

## Group selection for M1

Three packages, chosen to hit every emission path rather than to be representative:

| group | why |
| --- | ---: |
| `elb` | **small** — 8 listed resources (single digit, as required), and the **only** group in `groups.json` that carries aliases: all six `aws_alb*` types resolve into it, so alias emission is exercised on committed output and not only in a fixture. 24 classes total. |
| `lambda` | **medium** — 15 resources / 7 data sources / **1 ephemeral resource**, and `aws_lambda_function` has 14 nested block types, which is what actually stresses the namespace mount and the deterministic collision fallback. 23 classes, 66 nested types. |
| `provider` | the synthetic group holding `AwsProvider`. Not optional: cdktn's default `ValidateProviderPresence` fails synth without a provider construct, so M1's acceptance synth runs with validation ON. |

`generated/` is committed, the way sibling provider repos commit their `src/`. Everything jsii and
jsii-pacmak write (`lib/`, `dist/`, `.jsii`, `.warnings.jsii.js`) is gitignored.

## Decisions the spec left open

**npm package name spells the slug in kebab-case.** The group slug is the identity
(`acm_pca`), but the npm name is `@cdktn/aws-acm-pca`. Underscores are legal in a scoped npm name
and these packages are `private: true` and never published, but kebab-case is what every sibling
repo uses and what tooling expects. The Go `packageName` is derived from the slug directly
(`awsacmpca`) and is asserted injective across all 257 groups plus the provider group, on every
generate and in the contract tests — a collision would mean two groups sharing one Go directory and
one tag prefix, which the release story cannot express.

**The provider group's slug is `provider`, not `awsprovider`.** Every group's Go package is
`aws` + slug, so `provider` yields `awsprovider` — matching the go-split-spike prototype exactly —
while `awsprovider` would have yielded `awsawsprovider`. No real group in `groups.json` uses the
slug `provider`, and the uniqueness assertion covers it.

**`terraformProviderSource` is `hashicorp/aws` and the version constraint is `~> 6.0`,** copied
from `@cdktn/provider-aws`'s own generated provider so emitted metadata is comparable line for line
(see acceptance E below). The vendored baseline run, which has no cdktf.json constraint to read,
emits the full registry FQPN instead.

**Each package commits its own `tsconfig.json`,** mirroring what `jsii --generate-tsconfig` would
write, and jsii is invoked with `--tsconfig tsconfig.json --validate-tsconfig generated` so jsii
itself enforces the mirror. The alternative — letting jsii write and own the file — would have left
`tsc --noEmit` (acceptance B) and `jsii` (acceptance D) reading two different configs that can
drift.

**Emission uses `CodeMaker` indentation 2,** the same as every `@cdktn/provider-*` tree. This is
what makes the emitted text directly comparable to the reference build.

## What the awscc2cdk fork dropped, and what it had to put back

`tools/aws2cdk` forks `cdktn-io/cdktn-awscc`'s `tools/awscc2cdk` (see
[`../tools/aws2cdk/README.md`](../tools/aws2cdk/README.md) for the file-by-file provenance).

**Dropped** — every CloudFormation-shaped part, because cdktn-aws has no CFN consumer contract:
`cfn-map.ts`, `grouped/cfn-recovery.ts`, `grouped/cfn-property-map.ts`,
`grouped/cfn-attribute-map.ts`, the `CFN_PROPERTY_NAME_MAP` / `CFN_ATTRIBUTE_NAME_MAP` statics,
`scope-map.ts` + `vendored/scope-map.json`, `vendored/spec2cdk/**`, `grouped/jsiirc.ts`, the `Cc`
class prefix, `dedupeDefinitionNames`, and the `@aws-cdk/aws-service-spec` /
`@aws-cdk/service-spec-types` / `@cdklabs/typewriter` dependencies.

**Put back** — everything the awscc fork had trimmed because the awscc provider schema has managed
resources only. cdktn-aws needs all of it, and it came back verbatim from the vendored cdk-terrain
originals, not reinvented:

* the provider / data-source / ephemeral-resource branches on `ResourceModel` (parent class, doc
  link, `terraformResourceType` prefix stripping) and on the resource emitter (`emitProviderSuper`,
  `emitEphemeralResourceSuper`, the ephemeral resource's missing `generateConfigForImport`);
* `TerraformEphemeralMetaArguments` for an ephemeral resource's config, and no meta-argument
  interface at all for the provider's;
* the write-only registration gate (`markWriteOnlyAttribute` lives on `TerraformResource`, so only
  managed resources register it);
* `Scope#isProvider` threading, so a provider's nested blocks get interfaces and mappers but no
  `OutputReference` class;
* the `alias` attribute the provider schema omits and the vendored parser injects;
* `providerVersionConstraint` in `terraformGeneratorMetadata`.

**Ephemeral resources are supported.** The question in the M1 brief — whether the vendored 0.24-era
machinery can emit them — is answered yes, and `EphemeralAwsLambdaInvocation` is in the committed
output. It is not an M2 item.

## Deferred to M2

**Provider-defined functions.** The aws provider declares four. The vendored generator emits them
as a second top-level class (`AwsProviderFunctions`) in a sibling file, memoized behind a
`functions` getter on the provider class. M1 does not emit either: it is a second export shape with
its own jsii surface, orthogonal to everything M1 is proving, and skipping it costs nothing that
the M1 acceptance depends on. `vendored/cdktn/emitter/provider-functions-emitter.ts` and
`models/provider-function-model.ts` are vendored and unused, ready for M2 to switch on.

**Struct sharding.** The vendored generator shards a resource's structs across
`structs<N>.ts` files once their export count passes 400, to stay under jsii's export ceiling. The
grouped emitter drops that: nested types live inside the resource's merged namespace, and sharding
them across files would require cross-file namespace merging. No M1 resource comes close, but the
full 257-group M2 build will find resources that do (`aws_quicksight_*` is the obvious candidate,
and note it is also on the vendored `skipped-attributes.ts` list for exactly this reason). M2 must
either shard, or verify the namespace form raises the ceiling enough not to need it.

**The four ungrouped schema surfaces** (`list_resource_schemas`, `action_schemas`, `functions`,
`resource_identity_schemas`) stay out — see [`curation.md`](./curation.md), "Out of scope for M0".

## Open questions carried forward

**None blocking.** Specifically, the go-split-spike's one unverified premise — that a group package
can be emitted with **zero cross-group imports and nothing at a shared root** — held with no shared
helper type needed at all. Every emitted file imports exactly `cdktn` and `constructs` and nothing
else. `scripts/check-no-cross-group-imports.mjs` is the checked-in gate; it passes with 0 hits, and
the contract tests assert the same property independently.

Two things a reader should know but that are not open questions:

* **`JSII5018` reserved-word warnings are expected and unavoidable.** 34 in `elb`, 16 in `lambda`,
  1 in `provider`, all on terraform attribute names that happen to be keywords in a target language
  (`type` and `delete` in Go, `internal` in C#, `lambda` in Python). `@cdktn/provider-aws` emits the
  same warnings on the same attributes. Zero `JSII3` (missing README) and zero `JSII6` (peer not in
  devDependencies), which is what the M1 acceptance actually requires.
* **`aws_lambda_capacity_provider` is not a typo.** The pinned 6.62.0 schema really does carry it.

## Acceptance E — the runtime-contract method

`scripts/runtime-contract-diff.mjs`. Both sides are generated from the *same* schema at the *same*
pin (6.62.0): ours from `schemas/schema.json`, the reference from a `@cdktn/provider-aws` tree
built at that pin — or, when no such tree is checked out, from `bin/baseline.ts`, which drives the
*unmodified* vendored pipeline over the same dump and emits the same flat
`providers/aws/<dir>/index.ts` shape. The second source is what makes the check runnable on a fresh
clone; with neither available (no dump either) it skips with a warning, or fails under `--strict`. Each file is rewritten into one common spelling by erasing exactly the two
things the naming schemes disagree about (our `AwsLb.` qualifier + `Property` infix; their `Lb`
resource-name prefix), then every mapper function and every `OutputReference` / `List` / `Map`
class is compared **byte for byte**. The resource class and its config interface are excluded: they
differ by design.

Where the two schemes disambiguate a nested type differently — ours names it after the terraform
block leaf, theirs prefixes the whole parent path because all their types share one flat module
scope — the correspondence is declared explicitly with `--alias Ours=Ref` rather than guessed.

Result: `aws_lb` 22/22 units identical, `aws_lambda_function` 42/42 identical (one alias declared).
