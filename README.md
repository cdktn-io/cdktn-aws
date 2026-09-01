# cdktn-aws

**Proof of concept.** cdk-terrain (cdktn) provider bindings for
[`terraform-provider-aws`](https://github.com/hashicorp/terraform-provider-aws), regrouped from one
jsii submodule per resource into **257 service submodules** mined from the provider docs'
`subcategory:` frontmatter — the same shape `aws-cdk-lib` uses (`aws_ec2`, `aws_s3`, …) and the same
shape the Terraform registry sidebar already presents to users.

Nothing is published from here yet. This repo currently holds the grouping map and its gate; the
generator arrives in M1.

## What is in here today (M0)

| path | what |
| --- | --- |
| `groups.json` | **the source of truth**: 257 slugs → `{ title, resources, dataSources, ephemeralResources }`, plus an `aliases` table. Covers 100 % of the aws 6.62.0 schema. |
| `mine-config.json` | every human decision the miner must preserve: slug overrides, aliases, hand assignments. |
| `tools/mine-groups` | one-time miner: sparse-clones the provider at the pinned tag, parses the doc frontmatter, joins it against the schema, proposes `groups.json`. **Unstable for automation** — see its README. |
| `tools/check-groups` | the CI gate: 100 % coverage with no duplicates and no misc bucket (gate A), plus breaking-change detection on any resource that changes group (gate B). |
| `tools/groups-core` | shared types, schema reader, slug rule, deterministic serializer. |
| `docs/curation.md` | why every curated entry is what it is; counts; what M0 leaves out. |
| `docs/group-moves.md` | the breaking-change marker file gate B reads. |
| `docs/provider-bump-runbook.md` | the human-intervention playbook for moving to a new provider version. |

```bash
pnpm install
pnpm mine           # re-derive groups.json (needs network for the provider clone)
pnpm check:groups   # the gate
pnpm typecheck
```

Both tools need a `terraform providers schema -json` dump of aws **6.62.0**; it is ~34 MB and is
never committed. Point `$CDKTN_AWS_SCHEMA` at one, or drop it at `schemas/schema.json`
(`schemas/main.tf` pins the version to produce it from).

## Grouping in one paragraph

The `awscc` provider encodes its service in the resource name (`awscc_ec2_vpc`), so grouping needs
no external data. The `aws` provider does not — its first token is not a service (`ec2`, `vpc`,
`lb`, `alb`, `db`, `api`…), so the grouping has to come from somewhere else. The only machine-
readable grouping upstream maintains is the hand-written `subcategory:` frontmatter on each doc
page, which is also what drives the registry sidebar. `groups.json` is that mapping, mined once and
then curated: this is Option C of
[`docs/options.md`](./docs/options.md).

`groups.json` is **handcrafted from here on**, per provider-bump PR. The miner stays in the repo but
is not wired into automation: upstream renames subcategories for editorial reasons, and a rename is
a breaking change for us because the slug becomes the submodule name.

## Milestones

* **M0 — grouping map (this slice).** `groups.json` at a pinned provider version, the miner, the CI
  gate, the curation record. No generator, no jsii, no publishing.
* **M1 — generator fork.** Fork the cdktn provider generator to emit one submodule per group.
  Class naming is **PascalCase of the full terraform type**: `aws_lambda_function` →
  `AwsLambdaFunction`, reached as `aws_lambda.AwsLambdaFunction`. The `Aws` prefix is kept
  deliberately — it makes every class name globally unique, which keeps struct-name collisions at
  zero (the sibling PoC measured 141/277 collisions for the shortened variants). Property structs
  get mounted into the resource class's namespace rather than living flat at module scope.
* **M2 — full generation + jsii.** Generate all 257 groups, compile the jsii assembly, package for
  JS/Python, and measure against the published `@cdktn/provider-aws`: JS cold start, Python import,
  `.jsii` size, doc-file count, compile time and peak RSS.
* **M3 — Go multi-module spike.** Feasibility only: a core Go module embedding the jsii runtime
  tarball plus one source-only module per group, published under
  `github.com/cdktn-io/cdktn-aws-go`. Verdict, not a product.
* **M4 — publishing shape + report.** What actually ships (package names, versioning against the
  provider version, the release pipeline), plus the write-up of M2/M3 numbers.

## M1 — the generator (done)

`tools/aws2cdk` reads the pinned schema plus `groups.json` and emits one **standalone jsii package
per service group**: classes named after the full terraform type (`AwsLambdaFunction`, `DataAwsLb`,
`EphemeralAwsLambdaInvocation`), `<Class>Config` interfaces, and every nested block type mounted on
the class through a merged `namespace`. `generated/` carries the three M1 packages (`elb`,
`lambda`, `provider`); the decisions behind them are in
[`docs/m1-generator.md`](./docs/m1-generator.md), the fork provenance in
[`tools/aws2cdk/README.md`](./tools/aws2cdk/README.md).

```
pnpm generate        # regenerate generated/ from schemas/schema.json + groups.json
pnpm typecheck       # tsc --noEmit: workspace, generator, and each generated package
pnpm test            # jest contract tests over the committed mini fixture
pnpm jsii            # compile each generated package standalone with real jsii
pnpm pacmak:go elb   # jsii-pacmak --targets go on one package
pnpm synth:smoke     # cdktn synth with validation ON, two group packages at once
pnpm check:imports   # gate: zero cross-group imports, nothing at a shared root
pnpm check:contract  # diff the emitted runtime contract against @cdktn/provider-aws
pnpm check:groups    # M0 gate: groups.json coverage and group moves
pnpm baseline <dir>  # the unmodified vendored pipeline, for comparison
```

## What we expect to gain

The sibling PoC (`cdktn-awscc`, 1,494 resources regrouped into 276 modules) measured these on the
same machine — see
[`docs/phase1-results.md`](./docs/phase1-results.md):

* **JS cold start −93 %** (0.86 s → 0.06 s median for `require()` + touching one submodule), and
  `require.cache` from 1,913 to 145 entries — the noise-free half of that result. Needs grouping
  *and* the `lazify` pass.
* **Python import −45 %** (1.71 s → 0.92 s median, same 273 modules loaded). The win is wall clock,
  not module count: `jsii-pacmak` ≥ 1.139 already emits lazy Python submodules for both shapes, so
  what moves is how much JS the jsii kernel has to parse.
* **~15× fewer doc files**, from one module per resource to one per service.

Those are the targets for M2. They are the sibling's numbers, not ours — `cdktn-aws` is bigger
(1,711 resources, 679 data sources) and has to re-measure everything.

**Go package size is a hypothesis, not a claim.** `@cdktn/provider-awscc` already exceeds the Go
module proxy's ~500 MB limit, and per-group Go modules are the obvious escape hatch — but whether
the split actually clears the cap, and what it costs in build time and cross-module type references,
is exactly what M3 is for. No size win is claimed until M3 reports.

## License

MPL-2.0, matching the cdktn provider repos.
