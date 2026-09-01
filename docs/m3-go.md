# M3 stage 1 — the Go fleet

The 258 generated TypeScript packages compiled by one pinned `jsii`, packed by one pinned
`jsii-pacmak --targets go`, and assembled into
[`cdktn-io/cdktn-aws-go`](https://github.com/cdktn-io/cdktn-aws-go) as 258 sibling Go modules with
no root module. This is the Option A decision from
[`go-split-spike/VERDICT.md`](../../go-split-spike/VERDICT.md) executed at full scale; the M2 record
is [`m2-scale.md`](./m2-scale.md), the projections it made are checked against measurement below.

Measured on one machine (Apple silicon, 18 cores, 48 GB, Go 1.27.0, Node 24, pnpm 11) against the
pinned **aws 6.62.0** dump, from a clean tree (`generated/*/{lib,dist,.jsii}` removed first).

## Pinned tools

| | version | why it is pinned |
| --- | --- | --- |
| `jsii` | **5.9.53** (`~5.9.53`) | one compiler for the whole fleet — 258 assemblies produced by two different jsii versions are 258 different type-surface contracts |
| `jsii-pacmak` | **1.140.0** (`^1.140.0`) | pacmak's emitted Go layout *is* the public API of every module: package name, file-per-type naming, `internal/` type aliases, `jsii/` embedded tarball. It also stamps `github.com/aws/jsii-runtime-go v1.140.0` into every `go.mod`, so one release must be packed by one pacmak |
| Go toolchain | 1.27.0 (modules declare `go 1.25.0`) | `go mod tidy` / `go build` only; the declared directive is pacmak's |

Both versions are in the root `package.json` `devDependencies` and both are read back out of
`node_modules` by `scripts/build-fleet.mjs`, which prints them at the head of each phase — the
numbers below cannot be from a different build than the one reported.

## The fleet build

```console
node scripts/build-fleet.mjs --concurrency 12       # both phases, all 258 groups
node scripts/build-fleet.mjs --jsii acm elb         # one phase, named groups
```

`scripts/build-generated.mjs` (M1 acceptance D/F) does the same work serially, one group at a time,
and stays as the single-group debugging tool. `build-fleet.mjs` is the CI shape: the groups are
independent by construction — zero cross-group imports, one jsii assembly each — so they shard
across cores with no ordering and no shared state.

| phase | groups | wall | CPU | speed-up | slowest group |
| --- | ---: | ---: | ---: | ---: | --- |
| `jsii` | 258/258 OK | **28.6 s** | 324.1 s | 11.3× | `lex_v2_models` 8.5 s |
| `jsii-pacmak --targets go` | 258/258 OK | **76.7 s** | 882.4 s | 11.5× | `lex_v2_models` 19.2 s |
| **total** | | **105.3 s** | 1,206.5 s | | |

The M2 carry-forward budgeted "on the order of ten minutes" for a full-fleet jsii gate and the
VERDICT priced Option A at 7–9 minutes serial, ~1–2 minutes at 8-way. Both phases together are
**1 minute 45 seconds** at 12-way, on 20 minutes of CPU. The parallel efficiency is ~94 %, which is
the point: nothing is shared, so the only limit is core count. Peak resident set stayed well inside
the default 4 GB Node heap for every worker — no `--max-old-space-size` anywhere in this path, unlike
the monolithic build.

### jsii warning counts

| code | count | verdict |
| --- | ---: | --- |
| JSII3 (package has no README.md) | **0** | bar, met |
| JSII6 (peer dependency missing from devDependencies) | **0** | bar, met |
| JSII5018 (attribute name is a reserved word in a target language) | 2,519 | expected — `@cdktn/provider-aws` emits it on the same attributes |

Nothing else was emitted across all 258 compiles. The 2,519 JSII5018s are the terraform attributes
whose names collide with a keyword in some target language (`type`, `interface`, `import`, …); jsii
renames them per target and says so.

## Risk check — no shared types at the Go level

VERDICT open risk #1, and the one Option A premise neither prototype verified at scale. The premise
is that 258 jsii assemblies pack into 258 Go modules that do not reference each other — but it is
`jsii-pacmak`, not us, that decides where a type lives, and Option B's entire shape (one `core`
module every group imports) is precisely what a failure here would produce.

`scripts/check-no-cross-group-imports.mjs` already proves the invariant in TypeScript, on source we
write. `scripts/check-go-module-isolation.mjs` proves it in Go, on code pacmak writes:

```console
node scripts/check-go-module-isolation.mjs                          # generated/*/dist/go
node scripts/check-go-module-isolation.mjs --root ../cdktn-aws-go   # the assembled repo
```

Every import specifier in every emitted `.go` file must resolve to the module's own path, cdktn core
(`github.com/open-constructs/cdk-terrain-go/…`), `constructs`, the jsii runtime, or the standard
library. A sibling fleet module fails as a cross-group import; the bare repository path fails as a
root-level shared package.

```
PASS — 258 modules, 68,402 .go files, 137,510 import specifiers; 0 cross-group imports,
       0 root-level shared packages
```

`go.mod` requires are checked by the same rule with one deliberate carve-out: a **direct** require is
held to the import rule, but an `// indirect` require is not a dependency we chose — it is the MVS
closure `go mod tidy` computes (`jsii-runtime-go` pulls in `Masterminds/semver/v3`), and refusing it
would mean refusing `go mod tidy`. Indirect requires are still checked against the fleet itself,
because a sibling appearing even indirectly would mean the modules are not independent.

The premise holds. Each module's only structural link to the rest of the fleet is that it depends on
the same `cdktn` core version — a shared *dependency*, resolved by MVS to one copy, not a shared
*assembly*. That is the difference that makes Option B's version-skew panic impossible here.

## The assembled repository

```
cdktn-aws-go/
  README.md                     (the only root file)
  awsdetective/    module github.com/cdktn-io/cdktn-aws-go/awsdetective
  awslexv2models/  module github.com/cdktn-io/cdktn-aws-go/awslexv2models
  …                258 directories, name == jsii targets.go.packageName
```

`generated/<group>/dist/go/<packageName>/` is copied verbatim; nothing is rewritten on the way in.
There is **no root `go.mod`**, and the reason is not the size cap. `x/mod/zip` omits every file
under a nested `go.mod` from a parent's zip *unconditionally* ("directory is in another module"),
so a root module here would zip to a near-empty tree — `README.md` and nothing else — not to the
fleet's 540.94 MiB. The cap is enforced 258 times, once per sibling module, and the worst is at
11.58 %. The invariant is there for tooling and consumer semantics: a root module makes
`go build ./...` at the repository root resolve against a module that contains no packages, and it
publishes a `github.com/cdktn-io/cdktn-aws-go` path that consumers can `go get` and depend on
forever for nothing. It is asserted in `manifests.test.ts` and mutation-tested.

### `go mod tidy` and `go build`

`jsii-pacmak` writes a `go.mod` and no `go.sum`, so its output is not consumable as it stands — the
spike hit exactly this (`missing go.sum entry for …/constructs-go/constructs/v10`). Tidy is a
required post-pack step, not a tidiness pass: it produces the checksums a tagged module is verified
against, normalises the `go` directive (`1.25` → `1.25.0`), and records the one indirect requirement.

```console
node scripts/go-tidy-build.mjs --root ../cdktn-aws-go --concurrency 12
```

| | |
| --- | ---: |
| `go mod tidy` + `go build ./...` | **258/258 PASS** |
| wall | **48.0 s** at 12-way (cache warmed serially on the first module) |
| `go.sum` present after tidy | 258/258 |

The first module runs alone on purpose: all 258 want the same three dependencies, and N concurrent
first-downloads of one module is the only way this step can flake.

## Size gate

`tools/gosize` calls `golang.org/x/mod/zip.CheckDir` — the same function `go mod download` runs, so
this is the check itself, not an estimate of it. A `du` over the tree answers a different question:
CheckDir excludes nested `go.mod` subtrees and `vendor/`, and it is the *valid* set that is capped.

```console
node scripts/check-go-size.mjs --root ../cdktn-aws-go            # gate
node scripts/check-go-size.mjs --root ../cdktn-aws-go --markdown # this table
```

| | |
| --- | ---: |
| modules | **258** |
| valid files | 69,950 |
| total valid bytes | **567,214,581 B** (540.94 MiB) |
| cap, per module | 524,288,000 B |
| largest module | `awslexv2models` 60,722,732 B = **11.58 % of cap** |
| median module | `awslocation` 956,808 B = 0.18 % |
| smallest module | `awsusernotificationscontacts` 81,091 B = 0.02 % |
| **over cap** | **0** |

Distribution: 1 module ≥ 10 % of the cap, 17 in 1–10 %, 158 in 0.1–1 %, 82 under 0.1 %. Headroom on
the worst module is **8.6×**.

### Top 20 by size

| # | module | group | files | bytes | MiB | % of cap | jsii | pacmak |
| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | `awslexv2models` | `lex_v2_models` | 7,631 | 60,722,732 | 57.91 | **11.58 %** | 8.5 s | 19.2 s |
| 2 | `awswaf` | `waf` | 4,933 | 36,395,699 | 34.71 | **6.94 %** | 3.3 s | 7.6 s |
| 3 | `awssagemakerai` | `sagemaker_ai` | 2,534 | 21,094,278 | 20.12 | **4.02 %** | 3.9 s | 8.4 s |
| 4 | `awsvpc` | `vpc` | 2,485 | 19,078,850 | 18.20 | **3.64 %** | 2.8 s | 7.1 s |
| 5 | `awsbedrockagentcore` | `bedrock_agentcore` | 2,152 | 15,820,861 | 15.09 | **3.02 %** | 2.9 s | 15.5 s |
| 6 | `awsappmesh` | `app_mesh` | 2,375 | 15,122,228 | 14.42 | **2.88 %** | 2.6 s | 14.8 s |
| 7 | `awsec2` | `ec2` | 1,432 | 11,862,873 | 11.31 | **2.26 %** | 2.8 s | 11.4 s |
| 8 | `awsbedrockagents` | `bedrock_agents` | 1,474 | 10,666,269 | 10.17 | **2.03 %** | 2.4 s | 11.0 s |
| 9 | `awssecurityhub` | `security_hub` | 1,304 | 9,349,278 | 8.92 | **1.78 %** | 2.3 s | 9.8 s |
| 10 | `awscloudfront` | `cloudfront` | 1,144 | 8,867,812 | 8.46 | **1.69 %** | 2.2 s | 9.8 s |
| 11 | `awsquicksight` | `quicksight` | 1,077 | 8,198,757 | 7.82 | **1.56 %** | 2.1 s | 8.2 s |
| 12 | `awselb` | `elb` | 1,006 | 7,741,393 | 7.38 | **1.48 %** | 2.1 s | 4.1 s |
| 13 | `awselementalmedialive` | `elemental_medialive` | 855 | 7,407,388 | 7.06 | **1.41 %** | 2.2 s | 7.8 s |
| 14 | `awss3` | `s3` | 855 | 7,155,140 | 6.82 | **1.36 %** | 2.1 s | 7.9 s |
| 15 | `awsglue` | `glue` | 844 | 6,826,467 | 6.51 | **1.30 %** | 2.0 s | 7.2 s |
| 16 | `awseks` | `eks` | 964 | 6,795,920 | 6.48 | **1.30 %** | 1.8 s | 7.2 s |
| 17 | `awsecs` | `ecs` | 895 | 6,758,401 | 6.45 | **1.29 %** | 2.0 s | 7.1 s |
| 18 | `awsce` | `ce` | 840 | 5,448,377 | 5.20 | **1.04 %** | 1.6 s | 7.3 s |
| 19 | `awsec2imagebuilder` | `ec2_image_builder` | 670 | 5,164,399 | 4.93 | **0.99 %** | 1.8 s | 5.5 s |
| 20 | `awsrds` | `rds` | 453 | 5,132,446 | 4.89 | **0.98 %** | 2.0 s | 5.2 s |

### Against the M2 projection

`scripts/project-go-size.mjs` extrapolated the Go sizes from seven packed groups
([`m2-metrics.md` §4](./m2-metrics.md)). All 258 are now measured:

| claim | M2 projection | M3 measurement | |
| --- | ---: | ---: | --- |
| largest group (`lex_v2_models`) | 60,178,411 B = **11.48 %** | 60,722,732 B = **11.58 %** | +0.9 % error |
| unsplit Go monolith | 644,538,536 B = **122.9 % of cap** | 567,214,581 B = **108.2 %** summed over the fleet | see the floor below |
| any single module over cap | none | none | holds |

The projection was accurate on the group it mattered for. The monolith figure it produced was 14 %
high, and the honest comparison is narrower than it looks: **567,214,581 B is the sum of 258
modules, not the size of a monolith.** It includes 43,494,025 B of per-module overhead a monolith
would not pay — 258 embedded jsii tarballs, 258 `LICENSE`/`README.md`/`main.go`/`version` sets — and
it excludes whatever a single 2,401-class Go package would spend on the flat-namespace collisions it
would have to disambiguate.

Carrying that subtraction out rather than leaving it as a caveat: 567,214,581 − 43,494,025 =
**523,720,556 B = 99.89 % of the cap** — just *under*. That is the honest floor, and it is a floor
in the strict sense: the one adjustment pushing the other way (collision disambiguation in a single
2,401-class package) is real but unquantified, so it can only move the number up, never down. So
the correct statement is that a monolith lands somewhere from **~99.9 % of the cap upward**, with
the M2 projection's 644,538,536 B (122.9 %) at the top of the plausible range.

At the low end this *is* a margin call — a monolith would ship at best with a fraction of a percent
of headroom, on a tree that grows with every upstream provider release. It would be over the cap on
some near-future minor and stay there, with no recourse short of the split. That is an argument for
the split, but it is a weaker one than "undownloadable at either end", and the doc should not claim
the stronger one. **The per-module gate is unaffected and is not a projection at all**: all 258
modules are measured by `zip.CheckDir`, and the worst sits at 11.58 % of the cap.

What the split actually buys, priced: a consumer of one group downloads the median 956,808 B, or
60.7 MB in the very worst case, instead of the whole library.

## Manifest and inventory tests

`tools/aws2cdk/test/manifests.test.ts`, 1,812 assertions over all 258 emitted manifests. These cover
VERDICT risks #4 and #5 — the two costs Option A accepts in exchange for what it wins.

**Risk #4 — 258 machine-generated manifests to keep correct.** Three strings in each manifest are
permanent from the first Go tag onward and unrepairable afterwards: the npm name,
`jsii.targets.go.moduleName` (the repository), and `jsii.targets.go.packageName` (the directory, the
tag prefix, and the last element of every consumer's import path). Every one of the 258 is asserted,
not sampled: name is `@cdktn/aws-<slug>`; `private` is `true`; `moduleName` is exactly
`github.com/cdktn-io/cdktn-aws-go`; `packageName` is `aws` + the slug with underscores stripped *and*
matches jsii's own `^[a-z][a-z0-9]*$`; the 258 package names are pairwise unique (stripping
underscores is not injective, and a collision would mean two groups claiming one directory); every
`peerDependency` is mirrored in `devDependencies` at an exact version that the peer range's minimum
matches; `README.md` exists and is non-empty.

The naming rules are **restated** in the test rather than imported from `../src/naming` — a test that
calls the generator's own function to check the generator's output asserts only that the function is
deterministic.

**Risk #5 — inventory drift.** Four independent inventories have to describe one group set, and any
pair falling out of step is silent (a group that vanishes from `hashes.json` simply stops being
tagged). Asserted equal: `groups.json` + the synthetic `provider` == the directories in `generated/`
== the keys of `generated/hashes.json` == the module directories in `cdktn-aws-go`. Plus: the Go repo
has no root `go.mod`, and each module's `go.mod` first line declares exactly the path its manifest
promised.

The Go-repo half is addressed through `CDKTN_AWS_GO_ROOT` (default `../cdktn-aws-go`). Locally, an
absent checkout reports as *skipped*, visibly — a fresh clone of this repo alone still runs green.
Under `CI` it does not skip: an absent or wrong `CDKTN_AWS_GO_ROOT` **fails the suite** with the
sibling path in the message, because 259 assertions reported as green-because-unrun is exactly the
failure mode this suite exists to prevent (the same treatment `scale.test.ts` got in M2). A workflow
that genuinely has no Go checkout says so in writing with `CDKTN_AWS_GO_ROOT=none`, which is what
`ci.yml` does today and what gets deleted the moment `cdktn-aws-go` has a remote a runner can clone.

## Gate summary

| gate | command | result |
| --- | --- | --- |
| fleet compile | `node scripts/build-fleet.mjs --jsii` | 258/258, JSII3 0, JSII6 0, 28.6 s |
| fleet pack | `node scripts/build-fleet.mjs --pacmak-go` | 258/258, 76.7 s |
| Go isolation | `node scripts/check-go-module-isolation.mjs --root ../cdktn-aws-go` | PASS, 0 violations |
| tidy + build | `node scripts/go-tidy-build.mjs --root ../cdktn-aws-go` | 258/258, 48.0 s |
| size | `node scripts/check-go-size.mjs --root ../cdktn-aws-go` | PASS, 0 over cap |
| manifests + inventory | `pnpm test` | 2,143 tests, 4 suites (stage 2 added the release-plan suite) |
| consumer synth | `node scripts/go-consumer.mjs` | 36 modules, PASS, 324 ms |
| release plan | `node scripts/release.mjs --from <ref>` | dry run only, never tags |

All six are scripts with exit codes, which is what M2's "repo CI" carry-forward needs. Stage 2 wires
them into workflows (below) and adds the consumer measurement, the release planner and its tests.

## Consumer cost at scale

VERDICT open risk **#2**, and the number that decides whether the per-group model needs a lazy-load
story. The VERDICT priced Option A's consumer cost from a **three**-module prototype: ~90 ms of
one-time jsii bootstrap, plus ~1.4 ms + 0.019 ms per KB of tarball for each assembly loaded, giving
20–45 ms for a realistic 5–10 group app. The real fleet's tarballs run up to 300× that prototype's,
so the model was an extrapolation with no data past 3.4 MB.

[`examples/go-consumer`](../examples/go-consumer/) is that program at realistic scale: **36 modules**
— `awsprovider` plus **35 group modules** spanning `awsec2`, `awss3`, `awsiam`, `awslambda`,
`awselb`, `awsrds`, `awsecs`, `awseks`, `awscloudfront`, `awsglue` … down to `awsswf` (13 KB) and
`awsusernotificationscontacts` (10 KB) — one resource constructed from each, a provider-defined
function invoked, and `app.Synth()` run with **validations ON**.

```console
node scripts/go-consumer.mjs           # writes go.work against ../cdktn-aws-go, builds, runs
node scripts/go-consumer.mjs --runs 3
```

### Measured

Same machine as the rest of this document; three consecutive runs, warm module cache.

| | run 1 | run 2 | run 3 |
| --- | ---: | ---: | ---: |
| kernel bootstrap (`cdktn.NewApp`, incl. `cdktn` + `constructs`) | 91.9 ms | 90.1 ms | 85.4 ms |
| `awsprovider` assembly (80 KB tarball) | 3.4 ms | 3.0 ms | 3.2 ms |
| 35 group assemblies, first touch each | 221.0 ms | 220.8 ms | 212.6 ms |
| per group assembly, mean | 6.31 ms | 6.31 ms | 6.07 ms |
| construct-only control (2nd resource from a loaded assembly) | 0.25 ms | 0.27 ms | 0.22 ms |
| `app.Synth()` | 7.3 ms | 7.2 ms | 7.3 ms |
| **total wall** | **324.4 ms** | **322.1 ms** | **309.3 ms** |

Run-to-run spread is a few percent and these three runs are not a bound: an independent re-run on
the same machine reproduced the total to within ~1 % but landed the group-assembly total ~3 % above
this table (223.9–227.9 ms). Read every figure here as ±5 %; nothing below turns on more precision
than that.

The construct-only control is what makes the per-assembly number mean something: constructing a
second resource out of an already-loaded assembly costs **0.24 ms**, so essentially all of the
6.2 ms is assembly load, not construction.

### Against the VERDICT's extrapolation

Fitting the 35 measured first-touch times against each module's embedded tarball size:

| | one-time bootstrap | per assembly | per KB of tarball |
| --- | ---: | ---: | ---: |
| VERDICT model (3 assemblies, ≤3.4 MB) | ~90 ms | 1.4 ms | 0.019 ms |
| M3 measurement (35 assemblies, 8.5 MB total, largest 1.11 MB) | **85–92 ms** | **1.19 ms** | **0.0208 ms** |

Summed over these 35 groups the model predicts **210.5 ms** against a measured **212.6–221.0 ms** —
inside 5 %, with no sign of a super-linear term at 12× the assembly count. Per module the two agree
across three orders of magnitude of tarball size:

| module | tarball | measured | model |
| --- | ---: | ---: | ---: |
| `awsec2` | 1,111.8 KB | 23.38 ms | 22.52 ms |
| `awselb` | 662.5 KB | 16.64 ms | 13.99 ms |
| `awss3` | 628.2 KB | 15.79 ms | 13.34 ms |
| `awsiam` | 280.1 KB | 8.74 ms | 6.72 ms |
| `awsathena` | 111.4 KB | 3.69 ms | 3.52 ms |
| `awsdetective` | 26.0 KB | 2.00 ms | 1.89 ms |
| `awsswf` | 13.1 KB | 0.89 ms | 1.65 ms |

**Risk #2 is closed, and the answer is that no lazy-load story is needed.** A 36-module program —
far more than a real stack imports — costs 324 ms end to end, of which 90 ms is a bootstrap every
cdktn Go program pays whatever it imports. The realistic 5–10 group app the VERDICT was arguing
about lands where it said: bootstrap plus 20–45 ms.

The comparison that decided the option is worth restating with both numbers now measured:
**Option B's rejected consumer paid 849 ms to load its single whole-library `core` before
constructing anything, no matter how little it imported.** Option A pays 6 ms per group actually
imported. At 35 groups — a deliberately extreme consumer — A is still 3.9× cheaper than B is at one.

### What else the run proves

Not a benchmark artefact: the program asserts on the synthesised `cdk.tf.json` and exits non-zero
otherwise. All 35 terraform types present under `resource`/`data`; `required_providers.aws` =
`hashicorp/aws` at **6.62.0** and the *only* required provider (36 assemblies, one provider);
`provider.aws[0].region` as configured; and `output.bucket_arn` rendering
`${provider::aws::arn_build("aws", "s3", "", "", "consumer-bucket")}` — a provider-defined function
surviving Go → jsii → HCL. Synth ran with no `SkipValidation` and no `skipValidation` context, so
`ValidateProviderPresence` really did walk a stack holding resources from 35 independent assemblies.

One real finding fell out of it: cdktn's `ValidateProviderFunctionTargetSupport` **failed** the first
run, because provider-defined functions need terraform ≥1.8 / opentofu ≥1.7 and cdktn's default
targets are the older baseline. The example declares `targetVersions` accordingly. That is the fix
the validation asks for; `skipValidation: true` would have been the cover-up, and the run would have
emitted an expression no supported binary can evaluate.

## Versioning and release

### The version number

**Lockstep**, as VERDICT §5 concluded: every module in a release carries the same version. Mixed
versions are *safe* under Option A — each group is its own jsii assembly, so there is no shared
`core` to skew against, which is exactly the hazard that sank Option B — but lockstep keeps the
support matrix explainable and lets one pinned `jsii-pacmak` pack the whole release, which matters
because pacmak stamps its own `jsii-runtime-go` version into every `go.mod`.

The number is **this repository's own semver**, read from the root `package.json`. Not the provider
version, for three reasons:

1. **The Go API surface is not a function of the provider alone.** It is a function of the provider
   schema *and* the generator *and* the pinned jsii/pacmak. A generator change can rename types
   across all 258 modules with no provider change at all; a provider patch release can change
   nothing we emit. A version that tracked only one of those inputs would lie about the other two.
2. **`aws 6.62.0` → `v6.62.0` costs the `/vN` suffix on day one.** Go requires `/v6` in every import
   path at major ≥ 2, so every one of the 258 import paths would be born with a suffix, and every
   provider major would be a repo-wide path rewrite whether or not our API broke.
3. **Precedent.** `cdktf-provider-aws` carries its own semver, separate from the provider version it
   wraps, for the same reason: the binding's compatibility story is the binding's, not the
   provider's. The provider pin is *recorded* — in `hashes.json`, in every package description, and
   in the generated `providerVersionConstraint` — and is not the version.

`scripts/release.mjs` refuses anything that is not a plain semver rather than tagging 258 modules
with it.

### The tag fan-out, and only tagging what moved

VERDICT §5 names tag growth as the durable cost of one repository: 258 tags per release is ~13k a
year at a weekly cadence, and every consumer's `git ls-remote` and every full clone pays for them
forever. The mitigation it identifies as *the single biggest operational argument for Option A*
— tag only the groups that actually changed, which Option B's shared `core` makes impossible — is
what `generated/hashes.json` exists for.

```console
node scripts/release.mjs --from v0.0.9              # --to defaults to HEAD
node scripts/release.mjs --from v0.0.9 --json
```

It reads `generated/hashes.json` at two git refs of *this* repository, and prints the changed
groups, the exact tag list (`awsdetective/v0.1.0`, …) and the full command sequence: build and pack
only the changed groups, copy each `generated/<slug>/dist/go/<packageName>/` into `cdktn-aws-go`,
`go mod tidy` (pacmak emits no `go.sum`, so a tag without one is unverifiable), run the isolation
and size gates, commit, tag, push, and smoke-test the proxy.

**`--dry-run` is the default and the only mode implemented.** Nothing in this repository can create
or push a tag; `--execute` is refused rather than ignored. The tag fan-out is the one step that is
unrepairable after a push, so it is a human pasting commands they have read.

Four sanity checks are folded into the plan as loud warnings, because each is a way it can be
catastrophically right-looking and wrong:

| warning | why |
| --- | --- |
| **all N groups changed** | M2's hazard: struct members are emitted in the schema dump's key order, so a differently key-ordered `terraform providers schema -json` moves every hash at once and looks exactly like a provider-wide change. Compare the count against the provider diff before tagging. |
| **nothing changed** | A release that tags nothing is usually wrong refs, not a quiet bump. |
| **a group disappeared** | Its module and every tag it ever had stay on the proxy forever. That is a curation decision (`docs/group-moves.md`), never a silent consequence of a diff. |
| **major ≥ 2** | The `/vN` event, below. |

The changed-group diff is unit-tested against a fixture of two refs' manifests
(`tools/aws2cdk/test/release-plan.test.ts`, 22 tests): changed, added, removed and unchanged groups
in one diff, the `/vN` tag shape, and the command ordering (tidy before tag, smoke test after push).

### Two runbook items the planner cannot check for you

* **The `/vN` path rewrite (VERDICT risk #7).** At semver major ≥ 2, `jsii-pacmak` appends `/vN` to
  every module path (`determineMajorVersionSuffix`). All 258 import paths change at once, the
  repository needs `awsdetective/v2/` directories beside the v1 ones, and consumers edit imports by
  hand — Go's import-path-is-identity rule means there is no migration. Plan it as a deliberate,
  rare, repo-wide event.
* **The proxy first-publish smoke test (VERDICT risk #6).** A local `go build` never touches
  `proxy.golang.org` or `sum.golang.org`. A module path that fails to resolve there is not
  released, and the failure is close to unrepairable: the proxy caches the outcome and the name is
  spent. Every first publish gets `GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org go mod
  download …` before anything is announced.

Both are written into the release section of
[`provider-bump-runbook.md`](./provider-bump-runbook.md), which is where the checklist lives.

## CI

The repository had no CI at all until now. Two workflows, both validated with `actionlint` 1.7.12
(clean) — and neither has ever *run*, because nothing is pushed and no GitHub repository exists yet.
What is claimed here is that the YAML is well-formed and the commands are the ones this document
reports; the first real run is the first push.

### `.github/workflows/ci.yml` — every pull request

| job | what it runs |
| --- | --- |
| `checks` | `pnpm typecheck` (tools + all 258 generated packages), `pnpm test` (2,143 assertions incl. the manifest and inventory suites), `pnpm check:imports` |
| `schema-gates` | `pnpm check:groups`; `pnpm mine` twice, byte-compared against the committed `groups.json`; `pnpm generate` twice with `git diff --exit-code`; `runtime-contract-diff --strict` |
| `synth-smoke` | `build-generated.mjs provider elb lambda` (the prerequisite the test names), then `pnpm synth:smoke` |
| `fleet-jsii` | 8-way matrix, `build-fleet.mjs --jsii --shard i/8`, then an explicit **JSII3 == 0 and JSII6 == 0** assertion read out of the run record |
| `fleet-jsii-reconcile` | downloads all eight shard records and asserts they **partition** `generated/hashes.json` — every group compiled by exactly one shard, none missed, none twice — with the JSII3/JSII6 totals summed across shards rather than per shard |
| `fleet-pack-size` | shards 1 and 5 only: full `jsii` + `jsii-pacmak --targets go`, `check-go-module-isolation`, and the `zip.CheckDir` size gate |
| `go-size-reconcile` | adds the two size shards up, refuses a shard that measured nothing, and prints in the log how many of the 258 modules this PR did *not* measure |

A sharded gate is not a fleet gate until something adds the shards up: eight legs that each report
`0/0 OK` exit zero, and so does a shard-dealer bug that drops a group from every leg. The two
reconcile jobs are where the fleet-level claims are actually made — and `go-size-reconcile` states
its own incompleteness out loud, so a green PR is never read as "all 258 modules are under the cap".
That claim belongs to `fleet-full.yml` alone.

The four schema-fed gates are one job on purpose: the ~34 MB dump is gitignored and has to be
produced by `terraform providers schema -json`, so `.github/actions/provider-schema` caches it
keyed on `schemas/PROVIDER_VERSION` and four separate jobs would pay for it four times.

`--shard i/N` is new in `build-fleet.mjs`. It is not `index % N`: the fleet spans three orders of
magnitude in size, so an index split leaves one shard carrying `lex_v2_models` (60 MB packed) and
`waf` while another finishes in seconds, and a matrix costs its slowest leg. Groups are dealt
largest-first into whichever shard is currently lightest, weighted by the committed `hashes.json`
byte counts — deterministic, so the same commit always produces the same eight shards, and even:
**10.6 MiB of source in every one of the eight.**

### `.github/workflows/fleet-full.yml` — nightly, on demand, and on a label

All eight shards packed and measured, plus a summary job that fails unless all **258** modules were
measured and none is over the cap. Why not every PR: packing the fleet is ~880 CPU-seconds and
~540 MiB of output, and on two-core hosted runners that is minutes added to every PR to re-prove a
bound whose worst module sits at 11.6 % of the cap with 8.6× of headroom, and which cannot move
without the schema moving. A PR that really does change the shape of the output asks for the full
run with the `full-fleet` label.

## Still deferred

* **Publishing.** Nothing is pushed and no GitHub repository exists; `cdktn-aws-go` is a local git
  repository with a configured `origin` and signed commits. The proxy smoke test above is therefore
  written down, not performed.
* **CI has never executed.** See above.
* **The Go consumer is built in workspace mode**, against a local checkout, because the fleet is
  unpublished. The `replace` directives that make that work are generated and gitignored; the
  committed `go.mod` requires each module at a placeholder `v0.0.0`.

## Appendix — all 258 modules by size

| module | files | bytes | % of cap |
| --- | ---: | ---: | ---: |
| `awslexv2models` | 7,631 | 60,722,732 | 11.58 % |
| `awswaf` | 4,933 | 36,395,699 | 6.94 % |
| `awssagemakerai` | 2,534 | 21,094,278 | 4.02 % |
| `awsvpc` | 2,485 | 19,078,850 | 3.64 % |
| `awsbedrockagentcore` | 2,152 | 15,820,861 | 3.02 % |
| `awsappmesh` | 2,375 | 15,122,228 | 2.88 % |
| `awsec2` | 1,432 | 11,862,873 | 2.26 % |
| `awsbedrockagents` | 1,474 | 10,666,269 | 2.03 % |
| `awssecurityhub` | 1,304 | 9,349,278 | 1.78 % |
| `awscloudfront` | 1,144 | 8,867,812 | 1.69 % |
| `awsquicksight` | 1,077 | 8,198,757 | 1.56 % |
| `awselb` | 1,006 | 7,741,393 | 1.48 % |
| `awselementalmedialive` | 855 | 7,407,388 | 1.41 % |
| `awss3` | 855 | 7,155,140 | 1.36 % |
| `awsglue` | 844 | 6,826,467 | 1.30 % |
| `awseks` | 964 | 6,795,920 | 1.30 % |
| `awsecs` | 895 | 6,758,401 | 1.29 % |
| `awsce` | 840 | 5,448,377 | 1.04 % |
| `awsec2imagebuilder` | 670 | 5,164,399 | 0.99 % |
| `awsrds` | 453 | 5,132,446 | 0.98 % |
| `awsbedrock` | 686 | 4,885,599 | 0.93 % |
| `awsnetworkfirewall` | 650 | 4,639,605 | 0.88 % |
| `awsautoscaling` | 566 | 4,599,563 | 0.88 % |
| `awsarcregionswitch` | 592 | 4,509,572 | 0.86 % |
| `awsconnect` | 556 | 4,504,325 | 0.86 % |
| `awsnetworkmanager` | 448 | 4,230,171 | 0.81 % |
| `awsfsx` | 506 | 4,216,830 | 0.80 % |
| `awskinesisfirehose` | 453 | 4,207,641 | 0.80 % |
| `awsappflow` | 486 | 4,185,792 | 0.80 % |
| `awstransitgateway` | 412 | 4,125,425 | 0.79 % |
| `awsiotcore` | 479 | 4,042,405 | 0.77 % |
| `awslambda` | 443 | 3,883,237 | 0.74 % |
| `awscognitoidp` | 456 | 3,830,647 | 0.73 % |
| `awss3control` | 425 | 3,825,386 | 0.73 % |
| `awsbatch` | 533 | 3,560,078 | 0.68 % |
| `awssesmailmanager` | 512 | 3,545,194 | 0.68 % |
| `awsoracledatabaseaws` | 468 | 3,536,818 | 0.67 % |
| `awsiam` | 317 | 3,365,677 | 0.64 % |
| `awscloudwatchlogs` | 393 | 3,360,024 | 0.64 % |
| `awscloudwatchobservabilityadmin` | 409 | 3,262,341 | 0.62 % |
| `awsopensearch` | 431 | 3,261,526 | 0.62 % |
| `awskendra` | 403 | 3,106,133 | 0.59 % |
| `awsinspector` | 434 | 2,945,058 | 0.56 % |
| `awsvpclattice` | 323 | 2,926,949 | 0.56 % |
| `awsapigateway` | 247 | 2,920,735 | 0.56 % |
| `awsredshift` | 270 | 2,891,070 | 0.55 % |
| `awslakeformation` | 351 | 2,871,639 | 0.55 % |
| `awstransferfamily` | 318 | 2,836,663 | 0.54 % |
| `awswebservicesbudgets` | 380 | 2,822,747 | 0.54 % |
| `awsmsk` | 339 | 2,695,295 | 0.51 % |
| `awsappsync` | 309 | 2,637,454 | 0.50 % |
| `awsroute53` | 288 | 2,598,609 | 0.50 % |
| `awselasticache` | 266 | 2,526,549 | 0.48 % |
| `awsbackup` | 309 | 2,520,232 | 0.48 % |
| `awseventbridge` | 290 | 2,499,664 | 0.48 % |
| `awsdynamodb` | 303 | 2,471,197 | 0.47 % |
| `awsssm` | 262 | 2,410,583 | 0.46 % |
| `awsemr` | 268 | 2,311,786 | 0.44 % |
| `awslightsail` | 210 | 2,288,290 | 0.44 % |
| `awsservicecatalog` | 215 | 2,269,727 | 0.43 % |
| `awssesv2` | 262 | 2,251,340 | 0.43 % |
| `awsssoadmin` | 236 | 2,242,902 | 0.43 % |
| `awsdms` | 188 | 2,162,183 | 0.41 % |
| `awseventbridgepipes` | 272 | 2,134,824 | 0.41 % |
| `awscodebuild` | 242 | 1,994,794 | 0.38 % |
| `awsdirectconnect` | 160 | 1,993,745 | 0.38 % |
| `awswafclassicregional` | 213 | 1,945,462 | 0.37 % |
| `awsecr` | 223 | 1,904,229 | 0.36 % |
| `awsapigatewayv2` | 183 | 1,897,985 | 0.36 % |
| `awsamp` | 232 | 1,893,079 | 0.36 % |
| `awsguardduty` | 207 | 1,892,619 | 0.36 % |
| `awscodepipeline` | 259 | 1,885,511 | 0.36 % |
| `awsmacie` | 214 | 1,878,706 | 0.36 % |
| `awsworkspacesweb` | 183 | 1,854,876 | 0.35 % |
| `awskinesisanalyticsv2` | 216 | 1,817,714 | 0.35 % |
| `awsvpcipam` | 204 | 1,808,977 | 0.35 % |
| `awsorganizations` | 210 | 1,775,073 | 0.34 % |
| `awsconfig` | 170 | 1,774,502 | 0.34 % |
| `awsdatasync` | 164 | 1,770,640 | 0.34 % |
| `awswafclassic` | 205 | 1,756,618 | 0.34 % |
| `awsebs` | 173 | 1,736,194 | 0.33 % |
| `awsapplicationautoscaling` | 182 | 1,679,657 | 0.32 % |
| `awselasticsearch` | 225 | 1,674,024 | 0.32 % |
| `awsworkspaces` | 201 | 1,640,092 | 0.31 % |
| `awsssmcontacts` | 242 | 1,628,495 | 0.31 % |
| `awsroute53resolver` | 147 | 1,625,607 | 0.31 % |
| `awsoutpostsec2` | 186 | 1,625,143 | 0.31 % |
| `awstimestreamquery` | 227 | 1,599,318 | 0.31 % |
| `awslexmodelbuilding` | 200 | 1,591,507 | 0.30 % |
| `awsdatazone` | 183 | 1,572,838 | 0.30 % |
| `awsfinspace` | 164 | 1,492,633 | 0.28 % |
| `awsopensearchserverless` | 161 | 1,489,531 | 0.28 % |
| `awsses` | 153 | 1,481,631 | 0.28 % |
| `awsmemorydb` | 168 | 1,459,168 | 0.28 % |
| `awsglobalaccelerator` | 168 | 1,453,268 | 0.28 % |
| `awskms` | 145 | 1,448,529 | 0.28 % |
| `awsssoidentitystore` | 204 | 1,447,400 | 0.28 % |
| `awssecuritylake` | 184 | 1,340,045 | 0.26 % |
| `awsresiliencehubv2` | 168 | 1,316,899 | 0.25 % |
| `awscloudwatch` | 139 | 1,283,800 | 0.24 % |
| `awsapprunner` | 128 | 1,268,081 | 0.24 % |
| `awsstoragegateway` | 100 | 1,243,515 | 0.24 % |
| `awsvpnsitetosite` | 126 | 1,239,719 | 0.24 % |
| `awsneptune` | 98 | 1,216,843 | 0.23 % |
| `awsverifiedaccess` | 125 | 1,211,124 | 0.23 % |
| `awsauditmanager` | 147 | 1,209,640 | 0.23 % |
| `awsappstream20` | 133 | 1,201,700 | 0.23 % |
| `awsroute53domains` | 126 | 1,189,765 | 0.23 % |
| `awscodedeploy` | 149 | 1,180,073 | 0.23 % |
| `awscloudformation` | 110 | 1,120,638 | 0.21 % |
| `awsefs` | 130 | 1,119,990 | 0.21 % |
| `awsverifiedpermissions` | 145 | 1,119,077 | 0.21 % |
| `awsmq` | 158 | 1,113,817 | 0.21 % |
| `awsathena` | 116 | 1,107,454 | 0.21 % |
| `awsappconfig` | 110 | 1,093,982 | 0.21 % |
| `awss3tables` | 133 | 1,090,560 | 0.21 % |
| `awsredshiftserverless` | 120 | 1,082,837 | 0.21 % |
| `awsdocumentdb` | 94 | 1,069,541 | 0.20 % |
| `awsmskconnect` | 128 | 1,068,204 | 0.20 % |
| `awssecretsmanager` | 107 | 1,060,019 | 0.20 % |
| `awselbclassic` | 111 | 1,057,809 | 0.20 % |
| `awsdirectoryservice` | 102 | 1,043,755 | 0.20 % |
| `awskinesisanalytics` | 133 | 1,022,608 | 0.20 % |
| `awss3files` | 120 | 1,019,601 | 0.19 % |
| `awsappfabric` | 132 | 1,016,352 | 0.19 % |
| `awsssmincidentmanagerincidents` | 146 | 1,012,729 | 0.19 % |
| `awsendusermessaging` | 83 | 1,007,053 | 0.19 % |
| `awsvpnclient` | 121 | 1,004,391 | 0.19 % |
| `awsgamelift` | 105 | 1,000,795 | 0.19 % |
| `awslocation` | 95 | 956,808 | 0.18 % |
| `awssigner` | 137 | 945,098 | 0.18 % |
| `awsdevopsguru` | 124 | 915,515 | 0.17 % |
| `awsfms` | 110 | 901,850 | 0.17 % |
| `awsrekognition` | 124 | 897,320 | 0.17 % |
| `awsdataexchange` | 120 | 896,775 | 0.17 % |
| `awsdlm` | 110 | 894,177 | 0.17 % |
| `awscloudwatchevidently` | 110 | 882,546 | 0.17 % |
| `awsconnectcustomerprofiles` | 88 | 826,585 | 0.16 % |
| `awsfis` | 110 | 825,590 | 0.16 % |
| `awsendusermessagingsms` | 74 | 823,924 | 0.16 % |
| `awsemrcontainers` | 108 | 822,109 | 0.16 % |
| `awslicensemanager` | 107 | 816,510 | 0.16 % |
| `awsacmpca` | 86 | 815,234 | 0.16 % |
| `awschimesdkmediapipelines` | 83 | 783,921 | 0.15 % |
| `awscloudmap` | 88 | 780,261 | 0.15 % |
| `awsmanagedgrafana` | 65 | 752,089 | 0.14 % |
| `awsemrserverless` | 94 | 733,678 | 0.14 % |
| `awseventbridgescheduler` | 89 | 723,438 | 0.14 % |
| `awsamplify` | 66 | 683,069 | 0.13 % |
| `awselasticbeanstalk` | 69 | 677,016 | 0.13 % |
| `awssfn` | 75 | 672,089 | 0.13 % |
| `awsdatapipeline` | 95 | 670,700 | 0.13 % |
| `awscomprehend` | 78 | 669,215 | 0.13 % |
| `awsshield` | 64 | 668,870 | 0.13 % |
| `awstimestreamwrite` | 91 | 666,164 | 0.13 % |
| `awscloudtrail` | 78 | 663,431 | 0.13 % |
| `awsoam` | 82 | 658,176 | 0.13 % |
| `awsram` | 64 | 653,185 | 0.12 % |
| `awschime` | 62 | 643,594 | 0.12 % |
| `awscleanrooms` | 79 | 642,404 | 0.12 % |
| `awskeyspaces` | 85 | 627,111 | 0.12 % |
| `awselastictranscoder` | 66 | 608,053 | 0.12 % |
| `awscodecatalyst` | 73 | 607,193 | 0.12 % |
| `awsservicequotas` | 72 | 591,313 | 0.11 % |
| `awsroute53recoveryreadiness` | 64 | 589,437 | 0.11 % |
| `awstimestreamforinfluxdb` | 67 | 584,018 | 0.11 % |
| `awscloudwatchsynthetics` | 67 | 578,814 | 0.11 % |
| `awsoutposts` | 63 | 560,381 | 0.11 % |
| `awsmainframemodernization` | 68 | 558,507 | 0.11 % |
| `awskinesis` | 62 | 555,553 | 0.11 % |
| `awsxray` | 55 | 540,056 | 0.10 % |
| `awsosis` | 71 | 536,718 | 0.10 % |
| `awsusernotifications` | 49 | 534,946 | 0.10 % |
| `awscognitoidentity` | 57 | 530,803 | 0.10 % |
| `awssns` | 37 | 529,853 | 0.10 % |
| `awsdevicefarm` | 44 | 516,678 | 0.10 % |
| `awscontroltower` | 58 | 490,321 | 0.09 % |
| `awsmwaa` | 59 | 456,888 | 0.09 % |
| `awsivs` | 49 | 455,404 | 0.09 % |
| `awscodeartifact` | 44 | 454,362 | 0.09 % |
| `awsautoscalingplans` | 54 | 450,614 | 0.09 % |
| `awschimesdkvoice` | 48 | 447,172 | 0.09 % |
| `awsiamaccessanalyzer` | 58 | 444,295 | 0.08 % |
| `awsroute53profiles` | 48 | 442,044 | 0.08 % |
| `awscloudwatchnetworkflowmonitor` | 60 | 441,691 | 0.08 % |
| `awscomputeoptimizer` | 56 | 438,890 | 0.08 % |
| `awsresourceexplorer` | 60 | 432,070 | 0.08 % |
| `awsecrpublic` | 51 | 430,195 | 0.08 % |
| `awstranscribe` | 41 | 427,291 | 0.08 % |
| `awsworkmail` | 40 | 426,497 | 0.08 % |
| `awsacm` | 50 | 409,481 | 0.08 % |
| `awsaccountmanagement` | 44 | 407,075 | 0.08 % |
| `awscodecommit` | 40 | 406,801 | 0.08 % |
| `awsbilling` | 60 | 404,951 | 0.08 % |
| `awscodegurureviewer` | 55 | 402,398 | 0.08 % |
| `awssqs` | 37 | 398,940 | 0.08 % |
| `awsbcmdataexports` | 59 | 389,400 | 0.07 % |
| `awsmetadatasources` | 48 | 386,910 | 0.07 % |
| `awsdsql` | 47 | 386,544 | 0.07 % |
| `awsivschat` | 45 | 374,554 | 0.07 % |
| `awsdax` | 43 | 367,183 | 0.07 % |
| `awsroute53recoverycontrolconfig` | 36 | 360,131 | 0.07 % |
| `awssavingsplans` | 46 | 357,405 | 0.07 % |
| `awsresiliencehub` | 52 | 352,663 | 0.07 % |
| `awscloudsearch` | 40 | 347,807 | 0.07 % |
| `awscloudhsm` | 43 | 347,223 | 0.07 % |
| `awss3vectors` | 42 | 346,475 | 0.07 % |
| `awsservicecatalogappregistry` | 33 | 338,869 | 0.06 % |
| `awsresourcegroups` | 43 | 331,239 | 0.06 % |
| `awsappintegrations` | 36 | 315,157 | 0.06 % |
| `awsdetective` | 29 | 307,767 | 0.06 % |
| `awscodeguruprofiler` | 45 | 302,815 | 0.06 % |
| `awspaymentcryptographycontrolplane` | 35 | 300,508 | 0.06 % |
| `awschatbot` | 29 | 298,794 | 0.06 % |
| `awsqldb` | 33 | 295,905 | 0.06 % |
| `awsresourcegroupstagging` | 45 | 295,613 | 0.06 % |
| `awsinspectorclassic` | 32 | 293,901 | 0.06 % |
| `awsrecyclebin` | 43 | 293,234 | 0.06 % |
| `awsprovider` | 21 | 289,773 | 0.06 % |
| `awsneptuneanalytics` | 32 | 282,122 | 0.05 % |
| `awsrolesanywhere` | 32 | 278,844 | 0.05 % |
| `awscodestarconnections` | 29 | 274,310 | 0.05 % |
| `awscodeconnections` | 32 | 273,630 | 0.05 % |
| `awseventbridgeschemas` | 25 | 261,237 | 0.05 % |
| `awsarczonalshift` | 31 | 251,403 | 0.05 % |
| `awscloudwatchrum` | 25 | 234,484 | 0.04 % |
| `awslambdamicrovms` | 31 | 224,231 | 0.04 % |
| `awsssmquicksetup` | 31 | 223,934 | 0.04 % |
| `awsamazonqbusiness` | 31 | 219,096 | 0.04 % |
| `awslambdacore` | 31 | 216,850 | 0.04 % |
| `awsdrs` | 24 | 207,952 | 0.04 % |
| `awscloudwatchinternetmonitor` | 25 | 195,688 | 0.04 % |
| `awsserverlessrepo` | 21 | 189,989 | 0.04 % |
| `awscloudfrontkeyvaluestore` | 24 | 186,812 | 0.04 % |
| `awss3glacier` | 21 | 177,052 | 0.03 % |
| `awscloudcontrolapi` | 21 | 174,380 | 0.03 % |
| `awsredshiftdata` | 24 | 172,318 | 0.03 % |
| `awselementalmediaconvert` | 21 | 172,238 | 0.03 % |
| `awsinvoicing` | 24 | 168,662 | 0.03 % |
| `awselementalmediapackage` | 27 | 162,249 | 0.03 % |
| `awscloud9` | 17 | 158,419 | 0.03 % |
| `awscostandusagereport` | 17 | 147,826 | 0.03 % |
| `awscloudwatchnetworkmonitor` | 17 | 147,650 | 0.03 % |
| `awscodestarnotifications` | 20 | 147,005 | 0.03 % |
| `awsdocumentdbelastic` | 17 | 144,397 | 0.03 % |
| `awselementalmediastore` | 17 | 138,875 | 0.03 % |
| `awscostoptimizationhub` | 17 | 131,499 | 0.03 % |
| `awskinesisvideo` | 17 | 129,056 | 0.02 % |
| `awss3onoutposts` | 20 | 127,831 | 0.02 % |
| `awspolly` | 20 | 114,318 | 0.02 % |
| `awsuserexperiencecustomization` | 17 | 113,551 | 0.02 % |
| `awspricingcalculator` | 20 | 111,492 | 0.02 % |
| `awssts` | 17 | 106,492 | 0.02 % |
| `awscloudwatchapplicationinsights` | 13 | 102,783 | 0.02 % |
| `awsswf` | 13 | 88,875 | 0.02 % |
| `awswavelength` | 13 | 83,486 | 0.02 % |
| `awselementalmediapackageversion2` | 13 | 83,395 | 0.02 % |
| `awsusernotificationscontacts` | 13 | 81,091 | 0.02 % |
