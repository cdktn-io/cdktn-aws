# Phase 1 results — full build, full jsii, python import benchmark

Plan §5 step 6 / §7 layer 6, CONTRACT.md "Iteration 3 — full jsii build", "Iteration 3 — python
import benchmark" and "Iteration 3b" (findings 2, 3, 5, 7). Re-measured 2026-08-28 on this machine
(macOS, arm64, 48 GB RAM) against the whole `cdktn-awscc/generated/` tree (1,494 resources, 276
modules), using the **graded pipeline's own artifacts** end to end — no hand-patched wheel, no
escape hatch. The iteration-3 write-up's numbers came from a hand-patched artifact (iteration-3
finding 3 broke `require()` through the packaged `exports` map) and are superseded, not annotated.

Python on this machine is **`/opt/homebrew/bin/python3.14`**. The system `python3` is 3.9 and its
pip resolver cannot provision the packages `jsii-pacmak --targets python` and
`scripts/bench_python_import.py` need; every python invocation below uses the absolute
`/opt/homebrew/bin/python3.14` path (`python3` alone resolves to it too, since `/opt/homebrew/bin`
happens to symlink `python3` -> `python3.14` on this machine, but the absolute path is what the
commands are written with, so they work regardless of `PATH` order).

## Full build metrics (`tools/awscc2cdk/test/out/full-build-metrics.json`)

Written by `step6.full-jsii.test.ts` itself:

```
cd cdktn-awscc
PATH="/opt/homebrew/bin:$PATH" NODE_OPTIONS=--max-old-space-size=16384 RUN_FULL_JSII=1 pnpm test:full-jsii
```

(`PATH` is reordered only so the pip `jsii-pacmak` shells out to resolves to Homebrew's
`python3.14` instead of the system 3.9 — see "iteration-3b findings" below.) 14/14 tests passed;
these numbers are the run's own metrics file, not transcribed:

| stage | seconds | max RSS | notes |
| --- | --- | --- | --- |
| `jsii` (compile + assembly) | 31–47 | **5.2–6.5 GB** (run-to-run) | `.jsii` 113,303,207 bytes (108 MB), 276 submodules, 23,023 types |
| `jsii-pacmak --targets python` | 35.2 | — | wheel **52,918,168 bytes** (52.9 MB); `unzip -l` confirmed both `cdktn_awscc/__init__.py` and `cdktn_awscc/aws_ec2/__init__.py`; `fileCount` 2 (wheel + sdist) |

`--max-old-space-size=16384` (16 GB) was given; the `jsii` step's actual peak RSS, now correctly
captured (see finding 2 below), was **5,345 MB** in this run (5,230–6,519 MB and 31–47 s across implementer and verifier runs on the same machine; run-to-run variance is large
runs) — well under the 16 GB heap budget. No OOM; the heap did not need to be raised further.

## Iteration-3b findings, as they resolved on this run

1. **`maxRssMB` (finding 2, test defect, already fixed in the given `step6.full-jsii.test.ts`):**
   `timedRun` now uses `spawnSync` and scans `stdout + stderr` (`/usr/bin/time -l` writes its
   report to stderr), so `maxRssMB` is a real number on every run, self-checked by the suite's own
   `describe("timedRun")` test. No implementation change was needed for this one — it was a
   read-only test file fix already in the iteration-3b contract.
2. **The `exports` map (finding 3, code defect, fixed):** `generated/package.exports.json` now
   emits every target with a `./generated/` prefix (`"." -> "./generated/index.js"`, `"./aws-ec2" ->
   "./generated/aws-ec2/index.js"`, etc.) instead of paths relative to `generated/` itself. The
   staging model is unchanged — the repo layout (`{ package.json, generated/** }`) is kept, nothing
   is flattened at publish time. `step6.full-jsii.test.ts`'s "the staged package is requireable
   through its exports map" test now passes against the real compiled tree:
   `require('@cdktn/awscc')` and `require('@cdktn/awscc/aws-ec2').CcVPC` both resolve. No workaround
   was needed for this benchmark — the wheel below was built from the unmodified, real manifest.
3. **`jsii-pacmak` wheel + `PACMAK_WHEEL` escape hatch (finding 5, fixed):** with `PATH` set so
   `python3` resolves to Homebrew's `python3.14` (not the system 3.9, whose pip resolver tops out at
   `build==1.4.4` and can't satisfy pacmak's `build~=1.5.0` requirement), `jsii-pacmak --targets
   python` (no `--code-only`) exits 0 and produces a real wheel: `cdktn_awscc-0.0.0-py3-none-any.whl`
   (52.9 MB), confirmed by `unzip -l` to contain `cdktn_awscc/aws_ec2/__init__.py` and
   `cdktn_awscc/__init__.py`. There is no `--code-only` mode and no `PACMAK_WHEEL` variable in this
   iteration's pipeline or in `scripts/bench_python_import.py` any more — the wheel is the only
   artifact either one produces or consumes.
4. **The benchmarked wheel's provenance (finding 7, fixed):** `step6.full-jsii.test.ts` copies the
   wheel it just asserted on to `cdktn-awscc/dist/python/` (gitignored — `cdktn-awscc/.gitignore`
   now has a `dist/` line), clearing any stale `.whl` first.
   `scripts/bench_python_import.py` installs from that exact path by default (`--wheel` /
   `$AWSCC_WHEEL` override it, but neither was used for this run) — the numbers below are therefore
   the graded pipeline's own wheel, not a separately hand-built one.

## Python import benchmark (`scripts/bench_python_import.py`)

```
/opt/homebrew/bin/python3.14 scripts/bench_python_import.py
```

`scripts/bench_python_import.py` guards `sys.version_info < (3, 10)` before any other import or
side effect and exits non-zero with a message naming `/opt/homebrew/bin/python3.14` on an old
interpreter — verified directly: running it under `/usr/bin/python3` (3.9 here) prints
`bench_python_import.py requires python 3.10+ ... Run it with /opt/homebrew/bin/python3.14` and
exits 1, no `Traceback`.

jsii version: **5.9.53** (this repo's `devDependencies.jsii`, used for our build).
jsii-pacmak version: **1.140.0** (this repo's `devDependencies.jsii-pacmak`, used for our build).
typescript version: **5.9.3** (jsii 5.9 pins `typescript ~5.9`).
cdktn-provider-awscc version: **1.2.0** (PyPI, options.md Option 0 baseline).

Toolchain note: the `.jsii` assembly's own `jsiiVersion` field (the *jsii compiler*, not
jsii-pacmak, which stamps no version into the assembly) reads `5.9.53 (build 16812ce)` for our
build and `5.9.52 (build c132e73)` for the published `cdktn-provider-awscc` — close, not identical;
both are `jsii ~5.9.x`.

Method: a venv (`/opt/homebrew/bin/python3.14`) with `cdktn`, `cdktn-provider-awscc` (PyPI), and
our wheel at `cdktn-awscc/dist/python/cdktn_awscc-0.0.0-py3-none-any.whl` — the one the graded
`RUN_FULL_JSII=1 pnpm test:full-jsii` run just built and copied there — all installed; 5 runs per
measurement, each in a fresh interpreter, median wall-clock (`time.perf_counter`) and the
`len(sys.modules)` delta reported.

| # | measurement | package | median s | modules loaded |
| --- | --- | --- | --- | --- |
| a | `import cdktn_provider_awscc` | cdktn-provider-awscc | 1.7144 | 273 |
| b | `from cdktn_provider_awscc import ec2_vpc` | cdktn-provider-awscc | 1.7081 | 275 |
| c | `import cdktn_awscc` | cdktn-awscc | 0.9203 | 273 |
| d | `from cdktn_awscc import aws_ec2` | cdktn-awscc | 0.9704 | 275 |
| e | `instantiate one resource in a TerraformStack` | cdktn-provider-awscc | 1.7220 | 275 |
| e | `instantiate one resource in a TerraformStack` | cdktn-awscc | 0.9691 | 275 |

**Reading it**: `cdktn_awscc` imports in roughly **53–57% of the wall-clock time** of
`cdktn_provider_awscc` for every comparable measurement (a vs c, b vs d, e vs e), while loading the
*same* number of Python modules (273/275 either way — both packages' jsii kernel bootstrap and
per-submodule `_jsii` wiring cost the same module count; the wall-clock difference is almost
certainly the size of the JS side the jsii kernel has to parse/instantiate on load — our `.jsii` is
108 MB over 276 submodules with the same grouping shape as `cdktn_provider_awscc`'s much larger flat
provider surface). This is the expected direction for the PoC's grouping hypothesis (options.md
Option 0 baseline vs. the grouped shape), essentially unchanged from the iteration-3 write-up's
(superseded) numbers — the fixes in this round changed how the wheel was built and packaged, not
what it contains. The two packages are still not apples-to-apples: `cdktn_awscc` here is the pinned
mini/full generation with `Cc`-prefixed classes and no L2s, while `cdktn_provider_awscc` is the full
published Terraform-shaped provider. Lazification (plan §5 step 7) is explicitly out of scope for
this iteration and would be the next lever on both `c`/`d`'s numbers.

Raw `-X importtime` traces for each measurement are kept next to the benchmark venv (not committed —
scratch-directory artifacts) for anyone who wants the per-module breakdown rather than the
aggregate wall-clock number above.

## JS load time

Plan §5 step 7 / §7 layer 6, CONTRACT.md "Iteration 4 — lazify" and "Iteration 4 — JS cold-start
benchmark". Measured 2026-08-28 on the same machine, with `scripts/bench_js_require.mjs`: five cold
starts per measurement (a fresh `node` process spawned for every run), median reported, against the
same `RUN_FULL_JSII=1` staged build `step7.lazify.test.ts` produces (`generated/` copied into a temp
root, `exports` merged in, `jsii` compiled) — before and after running the vendored `lazify` over it.

```
cd cdktn-awscc
PATH="/opt/homebrew/bin:$PATH" NODE_OPTIONS=--max-old-space-size=16384 \
  RUN_FULL_JSII=1 pnpm jest tools/awscc2cdk/test/step7.lazify.test.ts
```

node version: v26.7.0 (Homebrew's `node` on `$PATH`, per the `PATH="/opt/homebrew/bin:$PATH"`
prefix the graded commands use throughout iteration 3b/4 — `node -v` alone on this machine, without
that prefix, resolves the mise-managed v24.18.0 instead; both satisfy the contract's "node major
>= 24").

| # | measurement | package | phase | median s | modules loaded | heap MB |
| --- | --- | --- | --- | --- | --- | --- |
| a | `require('@cdktn/awscc')` then touch `.aws_ec2.CcVPC` | @cdktn/awscc | before | 0.8635 | 1913 | 477.7 |
| a | `require('@cdktn/awscc')` then touch `.aws_ec2.CcVPC` | @cdktn/awscc | after | 0.0591 | 145 | 11.8 |
| b | `require('@cdktn/awscc/aws-ec2').CcVPC` | @cdktn/awscc | before | 0.0946 | 252 | 31.3 |
| b | `require('@cdktn/awscc/aws-ec2').CcVPC` | @cdktn/awscc | after | 0.0554 | 144 | 12.9 |
| c | `require('@cdktn/provider-awscc')` then touch `.ec2Vpc.Ec2Vpc` | @cdktn/provider-awscc | baseline | 1.6379 | 4271 | 782.3 |

`@cdktn/provider-awscc` version (row c, npm latest, the options.md Option 0 baseline): **1.2.0**.
Raw JSON with all five sample runs per row: `tools/awscc2cdk/test/out/js-bench.json`.

**Reading it.** Measurement (a) — the worst case, `require('@cdktn/awscc')` and touch one
submodule — drops from **0.86 s to 0.06 s** median wall clock, a **93% reduction**, comfortably past
the stated acceptance (after < before) and nowhere near the ±10% noise band the contract treats as
unenforced: this is a real, large win, not measurement noise. The noise-free assertion — the one
with teeth — is `modulesLoaded`: `require.cache` goes from **1,913 to 145** entries for the same
`require('@cdktn/awscc')` call, comfortably under the contract's "less than half" ratchet (a
**92% cut**). Before lazify, touching a single submodule of the barrel pulled in all 276 submodule
barrels and effectively the whole 1,494-resource tree via `export * as … from './…'`; after lazify,
only the `cdktn`/`constructs` kernel chain plus the one submodule actually used gets loaded. The
`145`-module floor is exactly that kernel chain — lazify cannot remove it, since it isn't a
lazy-loadable barrel re-export. Measurement (b) — already scoped to the `aws-ec2` subpath import
before lazify — moves less dramatically (252 → 144 modules, 0.095 s → 0.055 s) because it never
touched the other 275 submodules to begin with; lazify still shaves the `aws-ec2` submodule's own
internal `export *` re-exports down to per-symbol getters. Row (c), `@cdktn/provider-awscc` (not
lazified by us, measured once as the fixed Option-0 baseline), loads far more modules
(**4,271**) and takes longer (**1.64 s**) than either `@cdktn/awscc` measurement even *before*
lazify — a flat, ungrouped, Terraform-shaped provider surface versus our 276-submodule grouping.

## Conclusion

Phase 1 was opened on two concerns; here is what the numbers say about each.

**1. Interface-name collisions.** `docs/schema-sweep.md`'s collision sweep
(`scripts/sweep_collisions.py`) measured, over the awscc 1.98.0 schema's 8,590 recursively-walked
nested object types: **0** collisions under the resource-prefixed naming scheme actually shipped
here (`<Resource><FullAttributePath>Property`, unique by construction — `8,590` distinct names),
versus **141** collisions within single resources if struct names were shortened to CDK-style leaf
names (`<Resource>.<LeafAttr>Property`), and **277** collisions if structs were named per-service
namespace + leaf attribute name instead of per-resource. What was actually implemented
(`tools/awscc2cdk/src/naming.ts#propertyTypeNamesForResource`) is a deterministic,
order-independent collision-splitting/suffixing algorithm: a candidate name is first tried as
`propertyTypeName(recoveredCfnName ?? path)`; every name claimed by more than one entry within a
resource is re-derived from its *full* attribute path (PascalCased and concatenated), and any name
still left colliding after that gets a sorted-index numeric suffix (`2`, `3`, …). Verified twice
with input order reversed, so the result never depends on schema iteration order. Because the
resource-prefixed scheme it runs on top of already has zero collisions at the numbers above, the
splitting logic in practice never has to fire over the current schema — but it exists, and is
covered by unit tests, so a future schema revision that *does* introduce a same-resource collision
degrades gracefully instead of silently overwriting one type with another. The practical upshot:
the shipped struct-naming shape does not need a CDK-style leaf-name rename to avoid collisions —
that renaming is exactly what would *introduce* the 141/277 collisions above.

**2. Python performance.** The iteration-3b import-benchmark table above: `cdktn_awscc` imports in
roughly 53–57% of `cdktn_provider_awscc`'s wall-clock time for every comparable measurement, while
both packages load the **same 273 Python modules** for the base import (`import cdktn_provider_awscc`
→ 273; `import cdktn_awscc` → 273). That equality is itself the load-bearing observation: it is
*not* because our grouped shape ships fewer Python modules than the flat Terraform-shaped provider —
`jsii-pacmak >= 1.139` already emits **lazy**, per-submodule Python bindings for both packages (each
package's jsii kernel loads its bootstrap plus only the submodules actually touched, regardless of
how many submodules the assembly declares). So Python's module *count* was never the lever phase 1
had available — pacmak had already pulled that lever upstream, on both packages, before this PoC
existed. What phase 1's grouping shape does move is **wall-clock time**: the same lazily-loaded
module count still has to parse/instantiate however much JS the jsii kernel maps it to, and our
276-submodule `.jsii` (108 MB) is smaller per touched submodule than `cdktn_provider_awscc`'s much
larger flat provider surface — hence the ~45% wall-clock cut at an unchanged module count. The JS
side tells the complementary half of this story directly (see "JS load time" above): there,
`lazify` *does* cut the module count, because the JS barrel — unlike jsii-pacmak's Python output —
was not already lazy before this iteration.

## Phase 2 gaps

Three gaps are known and explicitly out of scope for phase 1 (plan §5's "Out of scope" line and
plan §8/§9):

* **Shape parity.** `test/out/shape-parity.json` (written by `step4.shape-parity.test.ts`) records,
  per fixture resource, the `propsMembers` and `propertyTypes` diff against the matching
  `aws-cdk-lib` `Cfn*` class: `cdkOnly` (members/types aws-cdk-lib has that we don't — mostly
  CloudFormation-only escape hatches like `overrideLogicalId`/metadata attributes) and `ourOnly`
  (members/types we have that aws-cdk-lib doesn't — Cloud-Control-only attributes CFN never
  exposed). Both counts are nonzero for most fixture resources (e.g. `cloudformation_stack`:
  `cdkOnly` 1 prop / 1 propertyType, `ourOnly` 11 props / 2 propertyTypes; `lex_bot`: `cdkOnly` 2
  props / 51 propertyTypes, `ourOnly` 0 props / 166 propertyTypes) and are recorded, not yet
  reconciled — closing that gap (deciding, per member, whether it's a real API difference or a
  naming-scheme artifact) is phase 2 work.
* **Meta-properties.** CFN template-level and resource-level "meta" behaviour that this PoC does
  not model at all yet: `DeletionPolicy`, `UpdateReplacePolicy`, `DependsOn`, `Condition`,
  `Metadata`, `CreationPolicy`/`UpdatePolicy`, `Ref`/`Fn::GetAtt`, and the Terraform-side
  counterparts `lifecycle.ignore_changes`/`timeouts`. Plan §8 opened this as a spike that needs to
  run *before* phase 2, not as part of "same shape" — its deliverable is `docs/spike-meta-properties.md`,
  not yet written.
* **Data sources.** awscc's **2,621** data sources (1,494 singular + 1,127 plural "list" data
  sources, per `docs/schema-sweep.md`) plus **1,117** list resources are dropped entirely by this
  generator (plan §9) — only the 1,494 `resource_schemas` are emitted. Plan §9 records two options
  for re-introducing them: (a) generate CDK-style "from lookup" static methods backed by the
  singular data source, or (b) emit them as their own read-only L1 constructs mirroring the plural
  list-data-source shape; neither is implemented here.

## API doc sample

`docs/api/aws-ec2.md` is generated with `jsii-docgen` (`pnpm docgen`, added as a devDependency) over
a throwaway single-module package built from the committed `generated/aws-ec2/` sources — **not**
the full 276-module assembly, which is not a phase-1 deliverable.

`docs/api/aws-ec2.md` size: **13,898,022 bytes** (≈13.9 MB) for one module's 109 resources.

At that rate a whole-assembly render (1 of **276** modules shown here) would run into the hundreds
of megabytes, which is the concrete reason a full docgen pass is left for whoever actually needs to
publish per-language API docs in phase 2.
