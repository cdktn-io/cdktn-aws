# cdktn-aws

**Proof of concept.** cdk-terrain (cdktn) provider bindings for
[`terraform-provider-aws`](https://github.com/hashicorp/terraform-provider-aws), regrouped from one
jsii submodule per resource into **257 service submodules** mined from the provider docs'
`subcategory:` frontmatter — the same shape `aws-cdk-lib` uses (`aws_ec2`, `aws_s3`, …) and the same
shape the Terraform registry sidebar already presents to users.

**Nothing is published, pushed or tagged from here.** All four milestones are complete as a proof of
concept; the exportable synthesis — what was hypothesised, what was measured, what upstreaming into
cdk-terrain core would take, and the three decisions still waiting on a human — is
[**`REPORT.md`**](./REPORT.md). The publishing shape and the first-release checklist are
[`docs/m4-publishing.md`](./docs/m4-publishing.md).

## The grouping map (M0)

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
  `.jsii` size, doc-file count, compile time and peak RSS. **Done** — stage 1 (full generation,
  provider functions, per-group hashes) in [`docs/m2-scale.md`](./docs/m2-scale.md), stage 2 (the
  monolithic build and every headline number) in
  [`docs/m2-metrics.md`](./docs/m2-metrics.md).
* **M3 — the Go fleet.** 258 sibling Go modules under `github.com/cdktn-io/cdktn-aws-go`, one per
  group, no root module. **Done** — stage 1 (the fleet build, isolation, size gate) and stage 2 (the
  consumer measurement, the release planner, CI) both in [`docs/m3-go.md`](./docs/m3-go.md). The
  option it executes was decided in `go-split-spike/VERDICT.md`.
* **M4 — publishing shape + report. Done.** The two pipelines (the one `@cdktn/aws` assembly to
  npm/PyPI, the 258-module Go fleet to `cdktn-aws-go`), the release ordering and gates, the
  first-release checklist and the tag-growth policy are in
  [`docs/m4-publishing.md`](./docs/m4-publishing.md); the synthesis of every M0–M3 number, the
  upstreaming list and the open risks are in [`REPORT.md`](./REPORT.md). Still nothing published:
  neither GitHub repository exists, no workflow has ever run, and `scripts/release.mjs` has no mode
  that tags.

## M3 — the Go fleet (done)

258 sibling Go modules, one per group, **no root `go.mod`** — the repository root is deliberately
not a module, so `go build ./...` there cannot mean the wrong thing and no consumer can depend on an
empty path.
One pinned `jsii` (5.9.53) and one pinned `jsii-pacmak` (1.140.0) build all of them in **105 s** at
12-way; every module's imports resolve only to itself, cdktn core, constructs, the jsii runtime and
the standard library, so there is no shared assembly and none of Option B's version-skew hazard. The
worst module is 11.6 % of `x/mod/zip`'s per-module cap, measured with `zip.CheckDir` itself.

A 36-module consumer ([`examples/go-consumer`](./examples/go-consumer/)) synthesises with cdktn's
validations **on** in **324 ms** — 90 ms of one-time jsii bootstrap plus **6.2 ms per group actually
imported**, which lands within 5 % of the model the spike extrapolated from three modules. The
rejected alternative paid **849 ms** to load one whole-library assembly before constructing
anything.

Releases tag **only the groups whose content hash moved**: `node scripts/release.mjs --from <ref>`
prints the plan, the tag list and the commands, and has no mode that runs them. CI is two workflows
(`.github/workflows/`) and has never executed — nothing is pushed yet.

## M2 — full generation (stage 1, done)

`generated/` now carries **all 258 packages** (257 groups + the synthetic `provider`): 2,401
classes, 9,856 nested property types, 84.7 MiB of TypeScript, emitted in about three seconds and
type-checked in about 85 seconds. The provider package also exposes the four aws provider-defined
functions as `new AwsProvider(this, "aws", {...}).functions.arnParse(arn)`, and
`generated/hashes.json` carries a per-group content hash so the Go release step can tag only the
groups that actually moved. Numbers, the struct-sharding verdict (not needed) and the two M1 rules
that only broke at scale are in [`docs/m2-scale.md`](./docs/m2-scale.md).

## M2 — the monolithic build (stage 2, done)

The published shape is **one** jsii assembly, `@cdktn/aws`, whose barrel re-exports each group as a
submodule (`import { lambda } from '@cdktn/aws'; new lambda.AwsLambdaFunction(...)`). It compiles in
**39.5 s** with a 16 GB heap and 7.2 GB peak RSS, with **zero JSII3/JSII6**, into a 150 MB assembly
carrying **exactly the same 30,714 types** as `@cdktn/provider-aws` 25.3.0 — reachable through 258
doors instead of 2,402.

Headline, measured not argued (full method and every caveat in
[`docs/m2-metrics.md`](./docs/m2-metrics.md)):

* **JS cold start −95.9 %** — 45.2 ms vs 1,100.0 ms to import the library and reach two services,
  with 206 `require.cache` entries instead of 2,572 and 81 MB RSS instead of 831 MB. This needs the
  **lazify** pass on the compiled barrel, not just the grouping: both libraries' `index.js` is eager
  as TypeScript emits it, and eager-vs-eager the two are within 12 %.
* **Python import −66.0 %** (429.6 ms vs 1,263.7 ms, 2.9×) for the same "import and reach two
  services". jsii-pacmak already emits lazy *Python* submodules for both shapes, so that part is
  parity — the win is that the lazify pass runs before pacmak, so the npm tarball embedded in our
  wheel carries the lazy barrel (1 `require` against the reference's 2,402) and the jsii kernel
  stops loading 2,402 modules to reach one. 6× fewer modules resident if everything is touched.
* **9.3× fewer doc files** — 1,290 against the reference's measured 12,015.
* **Registry bytes are a wash** — the assembly is 0.1 % smaller, `lib/` 2.3 % smaller. Grouping is
  not a size story on npm.
* **The unsplit Go monolith does not fit**: projected at 644.5 MB, **122.9 % of the 524,288,000 B
  module-proxy cap**, from a fit over seven really-packed groups. The go-split-spike measured the
  *smaller* awscc provider's monolith at 78.7 % of that cap; aws crosses it. Largest single group is
  11.5 % of the cap. M3's split is now the only shape a Go distribution can take, not a size
  hypothesis.

## M1 — the generator (done)

`tools/aws2cdk` reads the pinned schema plus `groups.json` and emits one **standalone jsii package
per service group**: classes named after the full terraform type (`AwsLambdaFunction`, `DataAwsLb`,
`EphemeralAwsLambdaInvocation`), `<Class>Config` interfaces, and every nested block type mounted on
the class through a merged `namespace`. `generated/` carries the three M1 packages (`elb`,
`lambda`, `provider`); the decisions behind them are in
[`docs/m1-generator.md`](./docs/m1-generator.md), the fork provenance in
[`tools/aws2cdk/README.md`](./tools/aws2cdk/README.md).

```
pnpm generate        # regenerate ALL 258 packages from schemas/schema.json + groups.json
pnpm generate:m1     # just the three M1 pilot packages, for a fast inner loop
pnpm typecheck       # tsc --noEmit: workspace, generator, and each generated package
pnpm test            # jest contract tests over the committed mini fixture
pnpm jsii            # compile each generated package standalone with real jsii
pnpm pacmak:go elb   # jsii-pacmak --targets go on one package
pnpm synth:smoke     # cdktn synth with validation ON, two group packages at once
pnpm check:imports   # gate: zero cross-group imports, nothing at a shared root
pnpm check:contract  # diff the emitted runtime contract against a reference build
                     #   (a ../ref-provider-aws tree if present, else generated on the spot with
                     #    pnpm baseline; skips with a warning if neither is available, --strict
                     #    to fail instead)
pnpm check:groups    # M0 gate: groups.json coverage and group moves
pnpm build:monolith  # assemble the ONE published assembly, @cdktn/aws, and compile it with jsii
pnpm pacmak:python   # ...and jsii-pacmak --targets python
pnpm measure:dedup   # struct shape-hash census across the generated tree
pnpm project:go      # project per-group / monolith Go sizes against the module-proxy cap
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

**Go package size was a hypothesis; the cap half of it is now measured.** M2 stage 2 projects the
unsplit aws Go monolith at **122.9 % of the module proxy's 524,288,000 B cap** and every individual
group at under 11.5 % of it, from `jsii-pacmak --targets go` runs on seven real groups — so the
split is required, not merely preferred. What M3 still owes is the rest: build time, cross-module
type references, and the release mechanics.

## License

MPL-2.0 ([`LICENSE`](./LICENSE)), matching the cdktn provider repos.

[`NOTICE`](./NOTICE) is the attribution map: what is vendored (the cdk-terrain provider generator,
MPL-2.0, at a pinned commit), what is adapted and where each adaptation is written down, what is
original cdktn-io code that merely borrows an idea, and why every file under `generated/` carries a
`cdktn-io` copyright rather than an upstream one. The SPDX header at the top of each source file is
the authoritative statement for that file; `NOTICE` explains the shape.
