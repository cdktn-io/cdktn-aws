# M2 — the monolithic build and the headline numbers

Stage 2 of M2: the **one published jsii assembly** (`@cdktn/aws`, 258 service submodules), its
Python package, and every number the pitch rests on — measured against the published
`@cdktn/provider-aws` **25.3.0**, not argued.

Stage 1 (full 257-group generation, provider functions, per-group hashes) is
[`m2-scale.md`](./m2-scale.md). The M1 generator record is [`m1-generator.md`](./m1-generator.md).

Everything here was measured on one machine — Apple silicon, 48 GiB, 18 cores, Node v24.18.0,
Python 3.12.13, jsii 5.9.53, jsii-pacmak 1.140.0 — from a clean `monolith/`. Every command that
produced a number is printed next to it; all of them are `pnpm` scripts in this repo.

## Executive summary

| | `@cdktn/aws` (258 submodules) | `@cdktn/provider-aws` 25.3.0 (2,402 submodules) | |
| --- | ---: | ---: | ---: |
| **JS cold start**, import + reach two services | **45.2 ms** | 1,100.0 ms | **−95.9 %** (24.3×) |
| `require.cache` entries after that | **206** | 2,572 | −92.0 % |
| node RSS after that | **81 MB** | 831 MB | −90.3 % |
| **Python import**, import + reach two services | **1,119.5 ms** | 1,231.2 ms | **−9.1 %** |
| `sys.modules` if every submodule is touched | **833** | 5,121 | −83.7 % |
| **Doc files** (jsii-docgen, 5 languages) | **1,290** (projected) | 12,015 (measured) | −89.3 % |
| **jsii wall time** | **39.5 s**, 7.2 GB peak RSS | not re-measured | — |
| **`.jsii` assembly** | 150,147,226 B (5,441,708 gz) | 150,318,168 B (5,526,373 gz) | −0.1 % |
| **types in the assembly** | 30,714 | 30,714 | **identical** |
| Python wheel | 62,419,552 B | 69,098,649 B | −9.7 % |
| npm `lib/` bytes | 312,316,455 B | 319,570,579 B | −2.3 % |
| **Projected Go monolith** | 644.5 MB = **122.9 % of the 500 MB cap** | — | over |

The two things to take from this table: the **JS cold start is the win** (and it needs the lazify
pass, not just the grouping), and the **Go monolith does not fit** — which is the first-party
number M3 exists to act on.

Everything that is *bytes on a registry* is a wash. Same 30,714 types, so the assembly is the same
size to within 0.1 %; `lib/` is the same to within 2.3 %. Grouping does not make the library
smaller, it makes it **cheaper to load and 9× cheaper to document**.

## 1. The monolith: shape, and why

The npm / PyPI / Maven / NuGet distribution is **one jsii assembly**. A jsii assembly owns every
type it declares, so `export * as lambda from '@cdktn/aws-lambda'` would have made each of the 258
generated packages a *dependency assembly* — 258 published artifacts and 258 `.jsii` files, the
opposite of one library. So `scripts/build-monolith.mjs` **copies** each committed
`generated/<group>/src/` into `monolith/src/<group>/` and writes one barrel:

```ts
export * as lambda from './lambda';   // ×258
```

The copy is safe by construction: the zero-cross-group-imports invariant
(`pnpm check:imports`) means every emitted file imports exactly `cdktn` and `constructs`, so moving
a group one directory deeper cannot change a single specifier. `monolith/` is wholly generated and
wholly gitignored.

```bash
pnpm build:monolith          # assemble + jsii   (+ lazify)
pnpm pacmak:python           # ...and jsii-pacmak --targets python
```

| | |
| --- | ---: |
| submodules | **258** |
| source files copied | 2,660 (88,166,697 B) |
| `jsii` wall time | **39.5 s** (42.4 s on the first, cold run) |
| `jsii` peak RSS | **7.2 GB** |
| heap flag | `--max-old-space-size=16384` (`CDKTN_AWS_HEAP_MB`) — the default 4 GB ceiling is not enough |
| **JSII3 / JSII6** | **0 / 0** |
| JSII5018 (reserved word) | 2,519 — expected, same attributes `@cdktn/provider-aws` warns on |
| `lib/` | 5,323 files, 312,316,455 B |
| `.jsii` | 150,147,226 B; 5,441,708 B gzip −9; 30,714 types |

Zero JSII3/JSII6 at 258 submodules, so nothing had to be suppressed and the generator needed no
scratch iteration. 39.5 s for a 2,180,000-line program is not a typo — jsii is one `tsc` program
plus an assembler, and the type graph here is wide, not deep.

### The lazify pass

TypeScript compiles `export * as lambda from './lambda'` to `exports.lambda = require("./lambda")`.
258 eager `require`s. **`@cdktn/provider-aws` has exactly the same shape** — 2,405 eager
`__importStar(require(...))` calls in its `lib/index.js` — which is why an eager-vs-eager top-level
import was a near wash (959 ms vs 1,097 ms, −12.5 %) before this pass existed.

`build-monolith.mjs` therefore rewrites the **compiled** `lib/index.js` into one self-replacing
getter per submodule:

```js
Object.defineProperty(exports, name, { enumerable: true, configurable: true, get() {
  const mod = require("./" + name);
  Object.defineProperty(exports, name, { value: mod, enumerable: true, configurable: true });
  return mod;
}});
```

It is a post-compile rewrite of emitted JS only — `lib/index.d.ts` and the `.jsii` assembly are
untouched, so the type surface and every non-JS target still see exactly what jsii compiled. It
runs **before** pacmak so the tarball the jsii kernel loads for Python/Java/.NET carries the lazy
barrel too. The build asserts all 258 getters resolve before continuing (`lazify: OK — lib/index.js
41,412 B -> 4,453 B, all 258 getters resolve`); a getter that threw would otherwise stay invisible
until a consumer touched it.

This is the pass the sibling PoC's `−93 %` depended on, and it is where our `−95.9 %` comes from.
`--no-lazify` builds the eager form for comparison.

## 2. Python packaging + submodule lazification

```bash
pnpm pacmak:python           # jsii-pacmak --targets python, ~27 s
```

**No lazify step is needed on the Python side, and none was added.** jsii-pacmak 1.140.0 already
emits lazy submodules: `cdktn_aws/__init__.py` contains a `_SUBMODULES` set and a module-level
`__getattr__` that `importlib.import_module`s on first attribute access, with **zero**
`from . import <submodule>` lines for the 258. The reference package does the same thing (it is the
same pacmak feature), so this is parity, not an advantage — the advantage is that our
`__init__.py` is 24,224 B against the reference's 356,312 B, and our `_jsii/__init__.py` is
15,417 B against 245,576 B, because there are 258 names to register instead of 2,405.

| | ours | `cdktn-provider-aws` 25.3.0 |
| --- | ---: | ---: |
| dist name / module | `cdktn-aws` / `cdktn_aws` | `cdktn-provider-aws` / `cdktn_provider_aws` |
| wheel | **62,419,552 B** | 69,098,649 B |
| sdist | **61,981,480 B** | 65,987,953 B |
| installed files | **522** | 4,810 |
| installed bytes | 495,869,693 | 498,123,183 |
| embedded assembly tarball | 41,918,526 B | 45,246,255 B |
| `__init__.py` | 24,224 B | 356,312 B |
| lazy submodules | yes (pacmak native) | yes (pacmak native) |

Nothing was published anywhere. The wheel was installed into a throwaway venv only to time it.

One naming note worth carrying to M4: `lambda` is a Python keyword, so pacmak exposes the group as
`cdktn_aws.lambda_`. That is jsii's standard reserved-word handling (the `JSII5018` warnings), and
`@cdktn/provider-aws` does the same to its `lambda_function` module's members — but it is the one
place where a submodule name is not the slug.

## 3. Headline metrics vs `@cdktn/provider-aws` 25.3.0

Reference obtained with `npm install @cdktn/provider-aws@25.3.0` (unpacked 469,918,136 B) and
`uv pip install cdktn-provider-aws` → **25.3.0** in both cases. The source checkout at
`~/cdktn/ref-provider-aws` is unbuilt, so it was used only for the docs count.

### (a) JS cold start

```bash
pnpm bench:js -- --ref <dir containing node_modules/@cdktn/provider-aws> --runs 7
```

Every sample is a **fresh `node` process** (a warm `require.cache` would measure nothing), timed
around the `require` alone, median of 7 after one discarded warm-up.

| case | median | min–max | `require.cache` | RSS |
| --- | ---: | ---: | ---: | ---: |
| `require('@cdktn/aws')`, nothing touched | **0.5 ms** | 0.5–0.5 | 1 | 44 MB |
| `require('@cdktn/provider-aws')`, nothing touched | 1,085.1 ms | 1,081.6–1,087.7 | 2,572 | 830 MB |
| **`require('@cdktn/aws')` + `.lambda` + `.s3`** | **45.2 ms** | 44.5–46.1 | 206 | 81 MB |
| **`require('@cdktn/provider-aws')` + `.lambdaFunction` + `.s3Bucket`** | **1,100.0 ms** | 1,080.4–1,112.7 | 2,572 | 831 MB |
| deep path: `lib/lambda` + `lib/s3` | 45.4 ms | 44.2–46.0 | 205 | 81 MB |
| deep path: `lib/lambda-function` + `lib/s3-bucket` | 29.1 ms | 28.0–30.0 | 144 | 69 MB |

**Does the module graph allow partial loading? Yes, both ways, and it matters which.**

* Through the **public top-level import** — the row that matters, because it is what the jsii
  Python/Java/.NET bindings and most TypeScript users actually write — ours loads only the services
  you name (45.2 ms), and the reference cannot: its barrel is eager, so reaching for one resource
  costs all 2,405 (1,100.0 ms). **−95.9 %, a 24.3× speed-up**, and 92 % fewer `require.cache`
  entries.
* Through a **deep path** (`require('@cdktn/provider-aws/lib/lambda-function')`), the reference is
  *faster* than us: 29.1 ms vs 45.4 ms. That is honest and expected — its granularity is one
  resource, ours is one service, so "all of `lambda` + all of `s3`" is 205 modules against its 144.
  The grouped shape does not beat per-resource deep imports on cold start; it beats them on
  ergonomics, on the top-level import, and on doc count.
* The bare `require('@cdktn/aws')` at 0.5 ms is reported for completeness only. It loads nothing,
  so it is not a number to pitch.

### (b) Python import

```bash
<venv>/bin/python scripts/bench-py-import.py cdktn_aws --touch lambda_,s3 --runs 5
<venv>/bin/python scripts/bench-py-import.py cdktn_provider_aws --touch lambda_function,s3_bucket --runs 5
<venv>/bin/python scripts/bench-py-import.py cdktn_aws --all --runs 3        # eager upper bound
```

Fresh interpreter per sample, median of 5 after a discarded warm-up.

| case | ours | reference | |
| --- | ---: | ---: | ---: |
| bare `import` | 1,108.6 ms | 1,222.0 ms | −9.3 % |
| **import + reach two services** | **1,119.5 ms** | **1,231.2 ms** | **−9.1 %** |
| `sys.modules` after that | 321 | 321 | — |
| every submodule touched (eager upper bound) | 1,835.8 ms | 2,240.6 ms | −18.1 % |
| `sys.modules` after that | **833** | 5,121 | −83.7 % |

**The Python win is small, and the reason is structural, not fixable by grouping.** Both packages
are already lazy, so nothing is being avoided that the reference does not also avoid; ~1.1 s of the
1.12 s is the jsii kernel starting Node and loading the embedded assembly tarball (41.9 MB ours, 45.2 MB theirs), which every jsii Python package pays regardless of shape. Grouping buys the
difference in tarball size and in how much `__init__.py` the interpreter parses — 9 %.

The eager row is the interesting one for M4: if a future pacmak ever stopped emitting lazy
submodules, the grouped shape would be 18 % ahead and hold 6× fewer modules resident. That is the
insurance the grouping buys, not the headline.

The `--all` walk uses `pkgutil.iter_modules`, not the generated `_SUBMODULES` set: jsii modules
call `publication.publish()`, which strips private names, so `_SUBMODULES` is not reachable at
runtime.

### (c) Doc and file counts

| | ours | reference | |
| --- | ---: | ---: | ---: |
| **doc files** (`<name>.{typescript,python,java,csharp,go}.md`) | **1,290** projected | **12,015** measured (1,844,848,478 B) | **−89.3 %, 9.3×** |
| npm `lib/` files | 5,323 | 4,862 | +9.5 % |
| npm `lib/` bytes | 312,316,455 | 319,570,579 | −2.3 % |
| npm package bytes (unpacked) | — | 469,918,136 | — |
| python installed files | 522 | 4,810 | −89.1 % |
| python installed bytes | 495,869,693 | 498,123,183 | −0.5 % |

The doc figure is the one **projection** in this table, and it is exact arithmetic rather than an
estimate: jsii-docgen emits one file per submodule per language, and the reference's tree is
exactly 2,403 × 5 = 12,015 files. Ours would be 258 × 5 = 1,290. `jsii-docgen` is not a dependency
of this repo and was not run.

`lib/` has *more* files than the reference (5,323 vs 4,862) because we emit one `.js`/`.d.ts` pair
per resource **file** and the reference emits one per resource **directory**; the bytes are what
matter and they are a wash. Grouping is not a size story on npm.

### (d) Struct dedup, measured

```bash
pnpm measure:dedup
```

Shape hash = sha256 over an interface's members rendered `name[?]:type`, sorted. Two structs
collide only if a consumer could literally pass one where the other is expected.

| population | count |
| --- | ---: |
| schema **nesting sites** across 2,400 roots, no dedup at all | **83,030** |
| distinct shapes among those sites | 4,592 |
| **nested structs actually emitted** | **9,856** |
| `<Class>Config` interfaces (excluded from the shape analysis) | 2,401 |
| distinct shapes among the emitted structs | **4,499** |
| shapes emitted exactly once | 3,792 |
| duplicate structs (emitted − distinct) | **5,357** |
| …of which **within-group** duplicates | **4,579** |
| …of which **cross-group** duplicates | **778** |
| distinct shapes appearing in more than one group | 176 |

**83,030, not the ~72,277 the brief carried.** The count is per nesting site — every `block_types`
entry and every `object`/`list(object)` attribute type, walked recursively — and it reproduces
exactly from the pinned 6.62.0 dump. Report 83,030.

**The 83,030 → 9,856 drop is not struct reuse, and it would be wrong to sell it as such.** The
generator emits one struct per nesting site with no reuse at all (`resource-parser.ts` carries no
cross-resource dedup state by design). The collapse is concentrated in **seven** resources:

| resource | schema nesting sites |
| --- | ---: |
| `aws_wafv2_web_acl_rule` | 21,025 |
| `aws_wafv2_web_acl` | 10,229 |
| `aws_quicksight_dashboard` | 8,620 |
| `aws_quicksight_analysis` (×2 schemas) | 8,609 + 8,600 |
| `aws_quicksight_template` | 8,609 |
| `aws_wafv2_rule_group` | 8,150 |
| everything else (2,393 roots) | 9,188 |

— i.e. 73,842 of the 83,030 sites are the recursive `wafv2` rule tree and the four `quicksight`
definition trees, which the generator cuts with `loop-detection.ts` and the vendored
`skipped-attributes.ts` list (those attributes collapse to `any`). Outside those seven, sites and
emitted structs agree essentially 1:1 — `aws_lambda_function` is 14 sites and 14 structs.

**The residual duplication is 5,357 structs, and we deliberately keep all of it.** 4,579 of those
are *within* a group, where a shared type would be legal but would break the rule that a resource's
nested types live in that resource's own namespace; 778 are *cross-group*, where deduplication is
structurally forbidden — a shared struct needs a shared module root, and
`scripts/check-no-cross-group-imports.mjs` exists to guarantee there is none. That guarantee is
what makes each group independently hashable, independently taggable and independently releasable
as a Go module (M3); 778 duplicated struct definitions is the price, and it is cheap.

The largest duplicate classes are exactly what you would guess: **1,976** empty structs across 146
groups (an attribute with no members, e.g. `RegionsProperty`), **344** `TimeoutsProperty` with
`{create?, delete?, update?}` across 136 groups, **149** two-field `TimeoutsProperty` across 70
groups, and **327** single-`value` structs inside `lex_v2_models` alone.

### (e) Assembly size

| | ours | reference |
| --- | ---: | ---: |
| `.jsii` | 150,147,226 B | 150,318,168 B |
| `.jsii` gzip −9 | 5,441,708 B | 5,526,373 B |
| types | **30,714** | **30,714** |
| submodules | 258 | 2,402 |

The type counts are **identical**, which is the strongest single check in this document that the
regrouping is a pure re-shaping: the same 30,714 types, reachable through 258 doors instead of
2,402. The assembly is 0.1 % smaller and compresses 1.5 % better.

## 4. Go size projection

```bash
pnpm pacmak:go elb lambda provider vpc sagemaker_ai waf lex_v2_models
pnpm project:go
```

`jsii-pacmak --targets go` was run on **seven** real groups spanning three orders of magnitude of
source size; the expansion factor is fitted from those, not assumed. A full per-group pacmak-go of
all 258 is M3.

| group | TS bytes | Go bytes | .go files | embedded tarball | factor |
| --- | ---: | ---: | ---: | ---: | ---: |
| `provider` | 215,519 | 288,922 | 15 | 82,113 | 1.34 † |
| `lambda` | 642,166 | 3,882,386 | 437 | 369,112 | 6.05 |
| `elb` | 1,366,727 | 7,740,542 | 1,000 | 678,449 | 5.66 |
| `vpc` | 2,731,839 | 19,077,999 | 2,479 | 1,510,840 | 6.98 |
| `sagemaker_ai` | 3,685,934 | 21,093,427 | 2,528 | 1,474,756 | 5.72 |
| `waf` | 5,078,125 | 36,394,848 | 4,927 | 1,318,260 | **7.17** |
| `lex_v2_models` | 8,486,724 | 60,721,881 | 7,625 | 1,943,163 | 7.15 |

† `provider` is excluded from the fit: it is the only package with no `…OutputReference` classes at
all (a provider construct has no attributes to read back), so its factor is not representative.

Ordinary least squares over the other six: **`goBytes = 7.334 × tsBytes − 2,061,859`** (R fitted on
n = 6; the largest observed factor, 7.17, is used as a second, model-free estimate).

### Projected per-group modules — top 10

| group | TS bytes | projected Go bytes | % of the 524,288,000 B cap |
| --- | ---: | ---: | ---: |
| `lex_v2_models` | 8,486,724 | 60,178,411 | **11.48 %** |
| `waf` | 5,078,125 | 35,180,294 | 6.71 % |
| `sagemaker_ai` | 3,685,934 | 24,970,189 | 4.76 % |
| `vpc` | 2,731,839 | 17,973,009 | 3.43 % |
| `bedrock_agentcore` | 2,324,176 | 14,983,274 | 2.86 % |
| `ec2` | 2,107,239 | 13,392,293 | 2.55 % |
| `app_mesh` | 1,862,704 | 11,598,913 | 2.21 % |
| `bedrock_agents` | 1,566,007 | 9,422,984 | 1.80 % |
| `elemental_medialive` | 1,471,044 | 8,726,541 | 1.66 % |
| `security_hub` | 1,445,307 | 8,537,790 | 1.63 % |

Largest single group: **11.48 % of the cap**, ~8.7× headroom. The two groups already packed for
real (`waf`, `lex_v2_models`) came in at 6.94 % and 11.58 % measured — the projection is accurate
within 2 % on its own anchors, as it must be.

### Projected unsplit monolith

| | bytes | % of cap |
| --- | ---: | ---: |
| total TypeScript across 258 groups | 88,166,697 | — |
| projected Go monolith, OLS fit | **644,538,536** | **122.9 %** |
| projected Go monolith, worst observed factor (7.17×) | 632,155,217 | 120.6 % |
| the cap (`golang.org/x/mod/zip` MaxZipFile) | 524,288,000 | 100 % |
| **measured** unsplit `awscc` monolith, go-split-spike VERDICT §2 | 412,862,916 | 78.7 % |

**The unsplit aws Go monolith does not fit.** Both estimates land at 121–123 % of the cap — it
would be rejected by the module proxy and the checksum database outright, not merely be
uncomfortable. This is the number the go-split-spike could only extrapolate towards: its
first-party measurement was on `awscc`, the *smaller* stand-in provider, at 78.7 % of the cap
("PASS-but-doomed"). aws is 1.56× that, and it crosses.

So the M3 per-group split is no longer a hypothesis about a size win — it is the only shape in
which a Go distribution of this provider can exist at all. The README's "Go package size is a
hypothesis, not a claim" caveat is now discharged **for the cap question**; what M3 still has to
report is build time, cross-module type references, and the release mechanics, none of which this
projection touches.

Caveats, stated so nobody over-reads the table: this is a projection from seven packed groups, not
258 pacmak-go runs; a real monolith would embed **one** ~42 MB assembly tarball instead of 258
small ones, which the fit's intercept only approximates; and `x/mod/zip.CheckDir` counts a filtered
file set, not `du`. The margin is 21–23 %, comfortably outside any of those errors, but the exact
figure is M3's to produce.

## Reproducing all of it

```bash
pnpm install
pnpm generate                                      # 258 packages from the pinned schema
pnpm build:monolith                                # assemble + jsii + lazify   (~40 s, 7.2 GB RSS)
pnpm pacmak:python                                 # + jsii-pacmak --targets python (~27 s)
pnpm measure:dedup                                 # metric (d)
pnpm pacmak:go elb lambda provider vpc sagemaker_ai waf lex_v2_models
pnpm project:go                                    # metric (4)

# reference, into a scratch directory — nothing is published from here
npm install @cdktn/provider-aws@25.3.0
pnpm bench:js -- --ref <that directory> --runs 7   # metric (a)

uv venv --python 3.12 venv-ref && uv pip install --python venv-ref/bin/python cdktn-provider-aws
uv venv --python 3.12 venv-ours && uv pip install --python venv-ours/bin/python \
    monolith/dist/python/cdktn_aws-0.0.0-py3-none-any.whl
venv-ours/bin/python scripts/bench-py-import.py cdktn_aws --touch lambda_,s3 --runs 5
venv-ref/bin/python  scripts/bench-py-import.py cdktn_provider_aws --touch lambda_function,s3_bucket --runs 5
```

`jsii-pacmak --targets python` needs a `python` on `$PATH` that can install `build~=1.5.0` —
macOS's system 3.9 cannot, and fails with `No matching distribution found for build~=1.5.0`. A
3.12 on `$PATH` (e.g. `uv python install 3.12`) is enough.
