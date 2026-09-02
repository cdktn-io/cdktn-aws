# cdktn-aws — PoC report

**Audience:** open-constructs maintainers deciding whether the grouped generator family belongs in
cdk-terrain core.
**Status:** proof of concept, complete through M3. Nothing has been published, pushed or tagged.

## Executive summary

**Hypothesised:** regrouping `terraform-provider-aws` bindings from one jsii submodule per resource
into one per *service* would (a) make the library dramatically cheaper to load, (b) make the Go
distribution possible again after
[cdk-terrain#387](https://github.com/open-constructs/cdk-terrain/issues/387), and (c) cost nothing
in API surface.

**Proven, by measurement on the pinned aws 6.62.0 schema:**

* The regrouping is a **pure re-shaping**. The monolithic assembly carries **exactly the same 30,714
  types** as `@cdktn/provider-aws` 25.3.0, reachable through 258 doors instead of 2,402, and is
  0.1 % smaller on disk.
* **JS cold start −95.9 %** (45.2 ms vs 1,100.0 ms), **Python import −66.0 %** (429.6 ms vs
  1,263.7 ms), **9.3× fewer doc files** — with the honest caveat that both wins come from a
  post-compile *lazify* pass on the barrel, not from grouping alone, and that per-resource **deep**
  imports remain faster in the reference shape.
* The Go distribution works **only** split: 258 sibling modules, worst at **11.58 %** of the module
  proxy's per-module cap with 8.6× headroom, against a monolith that lands at **99.9 % of the cap at
  the absolute floor** and grows every provider release.
* The consumer cost of the split is a non-issue at realistic scale: a deliberately extreme
  36-module Go program synthesises in **324 ms with validations on**, ~90 ms of which is a bootstrap
  every cdktn Go program pays.

**The ask:** adopt grouped generation as a supported *mode* of `@cdktn/provider-generator` — the
grouping map stays a per-provider input, the machinery does not.

## 1. The problem

`go get` of the prebuilt `cdktn-provider-aws-go` broke **permanently** at tag `aws/v24.6.0`. The Go
toolchain, module proxy and checksum database enforce a **524,288,000 B** cap on a module's source
tree (`golang.org/x/mod/zip`, `MaxZipFile`):

| tag | module source bytes | |
| --- | ---: | --- |
| `aws/v24.5.0` | 523,366,927 | last passing, 99.82 % of the cap |
| `aws/v24.6.0` | 525,519,743 | **first failing**, 100.24 % |

Growth is ~1–2 MB per upstream provider *minor*. There is no client-side workaround for v24.6.0 and
after: the cap is enforced by `golang.org/x/mod/zip`, which is vendored into `cmd/go`, so the proxy,
the sumdb *and* the consumer's own toolchain all apply it — which is precisely why no flag, vendor
directory, private proxy or `GOPRIVATE` direct fetch restores it (a `GOPRIVATE` direct-mode
`go mod download` fails identically to the proxy path). **Every future monolithic Go
release of this provider stays broken**, and the margin only goes one way. Issue #387 proposed a
per-service module split as the structural fix; this PoC is that fix, taken seriously.

## 2. What was built

**M0 — the grouping map.** The `aws` provider does not encode its service in the resource name
(`aws_lb`, `aws_alb`, `aws_db_instance`), so the grouping has to come from outside the schema. The
only machine-readable grouping upstream maintains is the hand-written `subcategory:` frontmatter
that also drives the registry sidebar. `groups.json` is that mapping, mined once
(`tools/mine-groups`) and then **curated by hand**: **257 groups covering 100 % of the aws 6.62.0
schema** — 1,711 resources, 679 data sources, 10 ephemeral resources — with no misc bucket and an
explicit alias table. `tools/check-groups` gates coverage (gate A) and flags any resource that
changes group as a breaking change needing a marker (gate B). The miner is deliberately **not**
wired into automation: upstream renames subcategories for editorial reasons and a rename lands on us
as a submodule rename.

**M1 — the generator.** `tools/aws2cdk` forks `cdktn-awscc`'s `awscc2cdk`, which itself vendors
cdk-terrain's `@cdktn/provider-generator` verbatim. It emits **one standalone jsii package per
group**: classes named PascalCase-of-the-full-terraform-type (`AwsLambdaFunction`, `DataAwsLb`,
`EphemeralAwsLambdaInvocation`), and every nested block type mounted **inside the resource class's
merged `namespace`** rather than flat at module scope — which is what keeps struct-name collisions
at zero and makes the 400-export `structs<N>.ts` sharding rule unnecessary. Every CloudFormation-
shaped part of the awscc fork was dropped; every provider / data-source / ephemeral-resource /
write-only branch the awscc fork had trimmed was restored **verbatim from the vendored cdk-terrain
originals**, not reinvented. A runtime-contract diff against an unmodified vendored build is a gate.

**M2 — full generation and the monolith.** All **258** packages (257 groups + the synthetic
`provider`): 2,401 classes, 9,856 nested property types, **3,435 files** (2,660 `.ts`), **84.7 MiB**
/ 2,176,495 lines, emitted in **2.7–3.2 s** in one process under the default 4 GB heap;
`tsc --noEmit` over all 258 as *separate* programs takes 85 s. The published npm/PyPI shape is
**one** jsii assembly, `@cdktn/aws`, assembled by copying the 258 `src/` trees under one barrel:
**39.5 s** to compile, 7.2 GB peak RSS, **0 JSII3 / 0 JSII6**, a 150,147,226 B assembly against the
reference's 150,318,168 B. `generated/hashes.json` carries a per-group content hash — the lever M3's
release step uses.

**M3 — the Go fleet.** 258 sibling modules under `github.com/cdktn-io/cdktn-aws-go`, **no root
`go.mod`**, built by one pinned `jsii` 5.9.53 and one pinned `jsii-pacmak` 1.140.0 in **105.3 s** at
12-way (28.6 s compile + 76.7 s pack, ~94 % parallel efficiency), `go mod tidy` + `go build` 258/258
in 48.0 s. Isolation is proven on the code *pacmak* writes, not just ours: **68,402 `.go` files,
137,510 import specifiers, 0 cross-group imports, 0 root-level shared packages**. Sizes are measured
with `zip.CheckDir` — the function `go mod download` itself runs — not estimated. A **36-module**
consumer (`examples/go-consumer`) constructs a resource from each, invokes a provider-defined
function and synthesises with **validations on** in **324 ms**, asserting on the emitted
`cdk.tf.json`.

## 3. Headline metrics

Measured against `@cdktn/provider-aws` **25.3.0** on one machine (Apple silicon, 48 GiB, 18 cores).
Full method, every command and every caveat: [`docs/m2-metrics.md`](./docs/m2-metrics.md).

| | `@cdktn/aws` (258 submodules) | reference (2,402 submodules) | |
| --- | ---: | ---: | ---: |
| **JS cold start**, top-level import + reach two services | **45.2 ms** | 1,100.0 ms | **−95.9 %** (24.3×) |
| `require.cache` entries after that | 206 | 2,572 | −92.0 % |
| node RSS after that | 81 MB | 831 MB | −90.3 % |
| JS **deep path** (`lib/<resource>`) | 45.4 ms | **29.1 ms** | **+56 % — we lose** |
| **Python import**, + reach two services | **429.6 ms** | 1,263.7 ms | **−66.0 %** (2.9×) |
| `sys.modules` if every submodule is touched | 833 | 5,121 | −83.7 % |
| **Doc files** (5 languages) | 1,290 *projected* | 12,015 measured | −89.3 % |
| `.jsii` assembly | 150,147,226 B | 150,318,168 B | −0.1 % |
| **types in the assembly** | **30,714** | **30,714** | **identical** |
| npm `lib/` bytes | 312,316,455 B | 319,570,579 B | −2.3 % |
| Python wheel | 62,419,552 B | 69,098,649 B | −9.7 % |

Read honestly, this table says three things:

* **Cold start is the win, and it is the lazify pass that produces it.** TypeScript compiles
  `export * as lambda from './lambda'` to an eager `require`; the reference does the same thing
  2,405 times. Eager-vs-eager the two shapes are within 12 %. `build-monolith.mjs` rewrites the
  *compiled* `lib/index.js` into one self-replacing getter per submodule, before pacmak runs, so the
  npm tarball embedded in the Python wheel carries the lazy barrel too (**1** `require` against
  2,402). That is the whole Python win — same mechanism, not a second one.
* **Python's number depends on the jsii cache regime, and all three were measured:** −39.2 % with
  the package cache disabled (a high-variance regime that should not be quoted precisely), −66.0 %
  cached with no type index (the state right after `pip install`; the headline), −87.1 % / 7.7× once
  a type index exists. *A superseded −9.1 % top-level figure appears in this repo's history: it was
  taken against a wheel built before lazify ran ahead of pacmak, i.e. an eager build measured
  against a correct reference. It is an artifact of that mistake, not a regime, and the one-line
  `grep -c 'require('` on the shipped wheel is the check that catches it.*
* **Bytes on a registry are a wash.** Same types, same size. Grouping does not make the library
  smaller; it makes it cheaper to load and 9× cheaper to document.

**Struct duplication is the quantified cost of group independence.** A shape-hash census over the
generated tree finds **5,357** duplicate structs: **4,579 within a group** (where a shared type
would be legal but would break the rule that a resource's nested types live in its own namespace)
and **778 cross-group** (where deduplication is *structurally forbidden* — a shared struct needs a
shared module root, and the zero-cross-group-imports gate exists to guarantee there is none). That
guarantee is exactly what makes each group independently hashable, taggable and releasable as a Go
module. 778 duplicated definitions is the price, and it is cheap.

## 4. The Go verdict

| | bytes | % of the 524,288,000 B cap |
| --- | ---: | ---: |
| sum of the 258 fleet modules (measured, `zip.CheckDir`) | 567,214,581 | 108.2 % *summed, not a monolith* |
| …minus per-module overhead a monolith would not pay | −43,494,025 | 258 embedded tarballs, LICENSE/README/main.go/version sets |
| **monolith floor** | **523,720,556** | **99.89 %** |
| M2 projection from seven packed groups (top of the range) | 644,538,536 | 122.9 % |
| **largest single fleet module** (`awslexv2models`) | 60,722,732 | **11.58 %** |
| median fleet module (`awslocation`) | 956,808 | 0.18 % |

**The honest statement is that an unsplit aws Go monolith lands somewhere from ~99.9 % of the cap
upward.** 99.89 % is a floor in the strict sense: the one unquantified adjustment — a single
2,401-class Go package would have to disambiguate flat-namespace collisions — can only push it up.
At the low end this is a *margin call* rather than "undownloadable": the monolith would ship with a
fraction of a percent of headroom on a tree that grows 1–2 MB per upstream minor, would cross on
some near-future release, and would then have no recourse short of the split. That is a real
argument for the split; it is not the stronger claim, and this report does not make the stronger
claim.

**The per-module gate is not a projection at all.** All 258 modules are measured by the same
function `go mod download` runs: 1 module ≥ 10 % of the cap, 17 in 1–10 %, 158 in 0.1–1 %, 82 under
0.1 %, **0 over**. What the split buys, priced: a consumer of one group downloads the median
956,808 B — 60.7 MB in the very worst case — instead of the whole library.

**Tag growth is answered, not hand-waved.** 258 tags per release is ~13k a year at a weekly cadence.
`generated/hashes.json` + `scripts/release.mjs` tag **only the groups whose content hash moved**;
the release cadence is tied to upstream provider bumps; and shard repositories remain available as a
last resort. The rejected design (one whole-library `core` module) could do none of this — and its
consumer paid **849 ms** to load that core before constructing anything, against 6.2 ms per group
actually imported here.

## 5. What upstreaming into cdk-terrain core would take

The home is `packages/@cdktn/provider-generator/src/get/generator/**`. The PoC's
`src/vendored/cdktn/**` is that tree copied verbatim with **one** mechanical change (a relative
`util` import path), and `bin/baseline.ts` drives it unmodified as the reference side of a contract
diff — so the delta below is exactly what would have to become supported behaviour rather than a
fork.

**Generator-family changes (candidates for core):**

1. **Grouping as an input.** A group map (slug → resources / dataSources / ephemeralResources, plus
   an alias table) accepted by the generator, with slug → jsii-submodule / npm-name / Go-package-name
   derivation and a pairwise-injectivity assertion on the Go names (stripping underscores is not
   injective, and a collision means two groups claiming one directory and one tag prefix).
2. **Per-resource namespace merging** (`grouped/namespace-context.ts`): nested property types mounted
   into the owning class's merged `namespace` instead of flat module scope. This is what removes the
   `structs<N>.ts` 400-export sharding rule — proven safe at 4,647 exports in a single 6.87 MiB file.
3. **Package-scope mapper-name resolution.** Prefixing each mapper with its owning class name is not
   injective when one class name is a prefix of another (`AwsWafv2WebAcl` + `RuleActionAllow…` vs
   `AwsWafv2WebAclRule` + `ActionAllow…`); the fix computes prefixes for a whole package at once and
   iterates to a fixed point. This bug only appears at scale.
4. **Per-group standalone manifests** (`manifest.ts`): `package.json` / `README.md` / `tsconfig.json`
   per group, peer-dependency-mirrored-in-devDependencies, jsii Go target block.
5. **Per-group content hashes** (`hashes.ts`) — path-and-length-framed, machine-independent, and the
   input to changed-group releases.
6. **The second build workspace and the lazify pass** (`build-monolith.mjs`). The lazify pass is the
   piece with the broadest value: it is provider-agnostic, it is where the JS *and* Python cold-start
   wins come from, and it belongs in core far more than in a provider repo.
7. **Fleet build and gates**: sharded whole-fleet `jsii` + `pacmak --targets go` with size-balanced
   deterministic sharding, Go module isolation checking, and a `zip.CheckDir` size gate.
8. **Release tooling**: the hash-diff changed-group tag planner, dry-run-only by construction.

**Stays provider-specific:** `groups.json` and its curation record, the slug-shortening policy, the
`subcategory:` miner, the alias table and manual assignments. The *mechanism* generalises; the
*mapping* does not — a provider that encodes its service in the resource name (`awscc`) needs no
external map at all.

## 6. Costs and open risks

* **Two jsii compiles of the same tree.** 39.5 s monolithic (7.2 GB RSS, 16 GB heap flag required)
  plus 28.6 s across the fleet. Accepted deliberately: keeping the Go workspace strictly additive
  means the npm/PyPI build is untouched by the split.
* **258 machine-generated manifests.** Three strings in each are permanent from the first Go tag and
  unrepairable after: the npm name, `targets.go.moduleName`, `targets.go.packageName`. All 258 are
  asserted, not sampled (1,812 assertions), with the rules **restated** in the test rather than
  imported from the generator.
* **778 cross-group duplicated structs**, by design (§3).
* **Tag growth**, mitigated but not eliminated (§4).
* **The `/vN` event.** At semver major ≥ 2, pacmak appends `/vN` to all 258 module paths at once;
  consumers edit imports by hand, because Go's import-path-is-identity rule offers no migration.
* **The hash's one machine-dependent input: schema key order.** Struct members are emitted in the
  dump's own deep key order. `terraform providers schema -json` goes through Go's `encoding/json`,
  which sorts map keys, so every dump seen is sorted and this is inert *in practice* — but a
  differently-ordered dump would move all 258 hashes at once and falsely re-tag every module. The
  release planner warns loudly on "all N groups changed" for exactly this reason.
* **The release flow has never met a real registry.** No tag has ever been created; no module has
  been fetched through `proxy.golang.org`; the first-publish proxy smoke test is written down, not
  performed. **CI has never executed** — both workflows are `actionlint`-clean transcriptions of
  commands run by hand, and the first push is their first test.
* ~~**Java and .NET were never packed.**~~ **Retired — both were packed, and both work.**
  `jsii-pacmak --targets java` on the 258-submodule monolith: **418.3 s wall, 7.08 GB peak RSS,
  576 MB output** (jar 141.6 MB, sources 74.6 MB, javadoc 361.3 MB). `--targets dotnet`:
  **60.3 s wall, 2.37 GB peak RSS, 67 MB output** (`Io.Cdktn.Aws.0.0.0.nupkg` 65.9 MB + symbols).
  No errors, no diagnostics, no manifest changes needed. The remaining unknown is not pacmak but
  the registries: a 361 MB javadoc jar is a large thing to hand Maven Central, and neither upload
  has ever been attempted (docs/m4-publishing.md §5).
* **Deep-path imports regress** (§3): grouping is one service per door, so `lambda + s3` is 205
  modules against the reference's 144 for two resources.

## 7. Decisions that were the user's — all three now settled

Permanent, and all three needed **before the first tag**:

1. **The Go directory / `packageName` convention** — `aws` + slug with underscores stripped
   (`lex_v2_models` → `awslexv2models`). It is the directory, the tag prefix and the last element of
   every import path, forever. **Confirmed.**
2. **The fleet versioning scheme** — lockstep on this repository's own semver, not the provider
   version. **Confirmed**; the root `package.json` is off its placeholder at **0.1.0**, the proposed
   first release.
3. **Whether to create the real GitHub repositories and publish anything at all** — **yes.**
   Still nothing has been pushed from this workspace: the ordered procedure is
   [`docs/m4-publishing.md`](./docs/m4-publishing.md) §3, and `.github/workflows/release.yml` is
   dispatch-only with `dry_run` defaulting to true until it has run once.

## Appendix — evidence

| document | what it holds |
| --- | --- |
| [`docs/curation.md`](./docs/curation.md) | every M0 grouping decision and its reason; counts |
| [`docs/group-moves.md`](./docs/group-moves.md) | the append-only breaking-change marker file gate B reads |
| [`docs/options.md`](./docs/options.md) | the grouping-source options; why frontmatter (Option C) |
| [`docs/m1-generator.md`](./docs/m1-generator.md) | generator decisions; what the awscc fork dropped and restored |
| [`tools/aws2cdk/README.md`](./tools/aws2cdk/README.md) | file-by-file fork provenance |
| [`tools/aws2cdk/src/vendored/VENDORED.md`](./tools/aws2cdk/src/vendored/VENDORED.md) | the verbatim cdk-terrain copy and its one mechanical change |
| [`docs/m2-scale.md`](./docs/m2-scale.md) | full generation at 258 groups; sharding verdict; hash design |
| [`docs/m2-metrics.md`](./docs/m2-metrics.md) | every headline number, its command, and its caveats |
| [`docs/m3-go.md`](./docs/m3-go.md) | the fleet build, isolation, sizes, consumer cost, release, CI |
| [`docs/m4-publishing.md`](./docs/m4-publishing.md) | the publishing shape and the first-release checklist |
| [`docs/m6-tf-naming.md`](./docs/m6-tf-naming.md) | the `Tf` class-naming decision, its algorithm and its gates |
| [`docs/provider-bump-runbook.md`](./docs/provider-bump-runbook.md) | the human-intervention playbook per provider bump |
| `../go-split-spike/VERDICT.md` | the option decision, re-verified by its judge |
| [`docs/phase1-results.md`](./docs/phase1-results.md) | the sibling `cdktn-awscc` PoC's numbers (targets, not ours) |

## Addendum (M6) — the L1 class names changed

This report records M0–M4 as they were built and stays as written. One thing in it is now out of
date: the class-naming rule. §"the generator" describes classes named PascalCase-of-the-full-
terraform-type (`AwsLambdaFunction`); since M6 they are `Tf` + the terraform type with the owning
group's service prefix stripped (`lambda.TfFunction`, `s3.TfBucket`, `s3.TfDataBucket`), with `Tf`
playing the role `Cfn` plays in aws-cdk-lib and the bare name left free for a future L2. Curated
per group in `groups.json#stripPrefixes`, gated by `check:groups` gate C, mapped old-to-new in
`naming-map.json`. Decision and algorithm: [`docs/m6-tf-naming.md`](./docs/m6-tf-naming.md).

The measurements are unaffected — no file moved, no type was added or removed, and the runtime
contract still diffs 22/22 identical against the reference build.
