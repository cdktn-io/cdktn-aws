# M4 — the publishing shape

What actually ships, from which build, in what order, and what has to happen once before any of it
can happen at all.

This describes **wiring that exists** — every script and workflow named here is in the repository
and every number is from [`m2-metrics.md`](./m2-metrics.md), [`m3-go.md`](./m3-go.md) or
[`m2-scale.md`](./m2-scale.md) — plus the gap between that wiring and a real release. **Nothing has
ever been published, pushed, or tagged from this workspace.** Neither GitHub repository exists.

## 1. Two pipelines out of one generated tree

`generated/` (258 packages: 257 groups + the synthetic `provider`) is the single source both
pipelines read. They share no build step, which is deliberate: the Go split is a strictly additive
second workspace, and the monolithic build is not touched by it (VERDICT §3.5).

```
                    generated/<group>/src/   +   generated/hashes.json
                            |                              |
        ┌───────────────────┴──────────────┐               │
        │ scripts/build-monolith.mjs       │               │
        │  copy 258 src/ -> monolith/src/  │               │
        │  one barrel, ONE jsii assembly   │               │
        │  lazify lib/index.js             │               │
        │  jsii-pacmak --targets python    │               │
        └───────────────────┬──────────────┘               │
              @cdktn/aws -> npm, PyPI, (Maven, NuGet)       │
                                                           │
        ┌──────────────────────────────────┐               │
        │ scripts/build-fleet.mjs          │               │
        │  258 x jsii  (28.6 s @12-way)    │               │
        │  258 x pacmak --targets go       │               │
        │            (76.7 s @12-way)      │               │
        └───────────────────┬──────────────┘               │
             copy dist/go/<packageName>/ verbatim          │
                            ↓                              ↓
             cdktn-aws-go/ 258 sibling modules   scripts/release.mjs --from <ref>
             go mod tidy + build (48.0 s)        hash diff -> tag ONLY changed groups
             isolation + zip.CheckDir gates      <packageName>/vX.Y.Z
```

### (a) The monolith — `@cdktn/aws`

One jsii assembly, 258 submodules, `import { lambda } from '@cdktn/aws'`. The per-group
`@cdktn/aws-<slug>` packages are `private: true` and **are never published to npm**: they are build
inputs to the monolith copy step and to the fleet's pacmak runs. Publishing 258 npm packages was
never the plan and no manifest allows it.

`monolith/package.json` (written by `build-monolith.mjs`, gitignored) declares four jsii targets:

| target | declared as | packed in the PoC? |
| --- | --- | --- |
| python | `cdktn-aws` / `cdktn_aws` | **yes** — `pnpm pacmak:python`, wheel 62,419,552 B, sdist 61,980,948 B |
| java | `io.cdktn:cdktn-aws`, package `io.cdktn.aws` | **no — never run** |
| dotnet | `Io.Cdktn.Aws` | **no — never run** |
| go | `github.com/cdktn-io/cdktn-aws-go`, package `aws` | **no, and it must never be** — see below |

The **monolith's `go` target is the thing that does not fit** and is the reason M3 exists. It is
present only because a jsii manifest carries all targets; `pacmak --targets go` must never be
invoked on `monolith/`, and the target block should be deleted from the emitted manifest before the
first real release rather than left as a loaded gun. The Go distribution comes from the fleet.

Two more publish-blocking facts about that manifest as it stands: `"private": true` (the PoC guard
against an accidental `npm publish`) and `"version": "0.0.0"`.

### (b) The Go fleet — `cdktn-aws-go`

258 sibling modules, **no root `go.mod`**, directory name == `jsii.targets.go.packageName`
(`awslexv2models`, `awsmsk`, …), tags `<packageName>/vX.Y.Z`. `jsii-pacmak` output is copied in
verbatim; nothing is rewritten. `go mod tidy` is a required post-pack step, not tidiness — pacmak
emits no `go.sum` and a tag without one is unverifiable.

`scripts/release.mjs` reads `generated/hashes.json` at two refs of *this* repository and prints the
plan, the tag list and the exact command sequence. **`--dry-run` is the default and the only mode
implemented**; `--execute` is refused, not ignored. A human pastes the commands.

## 2. Release ordering and gates

The runbook owns the procedure; this is the shape of it. Do not duplicate the steps — read
[`provider-bump-runbook.md`](./provider-bump-runbook.md) §(a) for the bump and §(g) for the release.

1. **Bump PR** (runbook §a–§f): re-pin the provider in three places, regenerate the schema dump, run
   the miner as a *proposal*, read the `groups.json` diff, clear gates A and B.
2. **PR gates** — `.github/workflows/ci.yml`: `checks` (typecheck, 2,143 tests, `check:imports`),
   `schema-gates` (`check:groups`, miner determinism, `pnpm generate` twice with
   `git diff --exit-code`, `runtime-contract-diff --strict`), `synth-smoke`, `fleet-jsii` (8 shards,
   **JSII3 == 0 and JSII6 == 0** asserted from the run record), `fleet-jsii-reconcile` (the shards
   must *partition* `hashes.json`), `fleet-pack-size` (2 of 8 shards packed + sized),
   `go-size-reconcile` (sums the size shards, refuses a shard that measured nothing, prints how many
   of the 258 modules this PR did not measure).
3. **Full-fleet gate** — `.github/workflows/fleet-full.yml`: nightly, on demand, or on the
   `full-fleet` label. All eight shards packed and measured; fails unless all **258** modules were
   measured and none is over the 524,288,000 B cap. The "all 258 are under the cap" claim belongs to
   this workflow alone.
4. **Merge**, then the release (runbook §g): `release.mjs --from <previous release ref>`, clear
   every warning it prints (`all N groups changed` / `nothing changed` / `a group disappeared` /
   `major >= 2`), run the printed commands, `go mod tidy` before any tag, re-run the isolation and
   size gates, commit, tag, push.
5. **Proxy smoke test** before announcing anything — every *first* publish of a module path:

   ```bash
   GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org GOFLAGS=-mod=mod \
     go mod download github.com/cdktn-io/cdktn-aws-go/<packageName>@vX.Y.Z
   ```

   A local `go build` never touches the proxy. A path that fails to resolve there is close to
   unrepairable: the proxy caches the outcome and the name is spent.

What blocks a release, in one line each: the **size gate** (`zip.CheckDir`, the function
`go mod download` itself runs — worst module 11.58 % of cap); **JSII3/JSII6 == 0** across all
shards; **generation determinism** (`generate` twice, byte-identical); **shard reconciliation**
(eight legs reporting `0/0 OK` also exit zero, so something has to add them up); and **inventory
agreement** — `groups.json` + `provider` == `generated/` == `hashes.json` keys == `cdktn-aws-go`
module directories, asserted in `manifests.test.ts`.

## 3. First-release checklist — none of this has been done

**Registry pre-registration** (from operating the cdktn provider fleet, not from this repo):

* **npm.** Trusted publishing is configured fleet-wide and npm has **no pending-publisher concept**,
  so a brand-new package cannot be published by automation first. `@cdktn/aws@0.0.0` must be
  published **manually once** as a placeholder before any workflow can take over.
* **PyPI.** Supports a *pending* publisher — configure `cdktn-aws` as pending against the repository
  and workflow; no placeholder release needed.
* **Maven Central / NuGet.** Not exercised at all (see §5). Namespace/prefix registration
  (`io.cdktn`, `Io.Cdktn.*`) is its own multi-day process and is not costed here.
* **Go.** No registry. The proxy smoke test in §2.5 is the whole registration story, and it is the
  one step that is unrepairable if it fails.

**Repository and manifest state:**

- [ ] Create `cdktn-io/cdktn-aws` and `cdktn-io/cdktn-aws-go` on GitHub. Neither exists.
      `cdktn-aws-go` is a local git repository with `origin` configured and signed commits; nothing
      has been pushed.
- [ ] Bump the root `package.json` off its `0.0.0` **placeholder** to a real semver.
      `release.mjs` warns that `0.0.0` is a placeholder rather than tagging 258 modules with it.
- [ ] Flip `monolith/package.json` `"private": true` → `false` (it is generated by
      `build-monolith.mjs`, so this is a change to the script) and drop the `go` target from it.
- [ ] Delete `CDKTN_AWS_GO_ROOT: none` from `ci.yml` the moment `cdktn-aws-go` has a remote a runner
      can clone — until then 259 inventory assertions are legitimately skipped, in writing.
- [ ] Write the publishing workflow. **There is none**: the repository has exactly two workflows and
      neither pushes, tags or publishes anything.
- [ ] **CI first run.** `ci.yml` and `fleet-full.yml` are `actionlint`-clean and transcribe commands
      that were run by hand — but neither has ever executed. Expect setup-level breakage (action
      versions, cache keys, runner tool versions) that local runs cannot surface.

**The three decisions that are the user's, not the implementer's** — all three are permanent and
all three are needed *before the first tag*:

1. **The Go dir / `packageName` convention.** `aws` + slug with underscores stripped
   (`lex_v2_models` → `awslexv2models`), forced into jsii's `^[a-z][a-z0-9]*$`. That string is the
   directory, the tag prefix and the last element of every consumer's import path, and Go's
   import-path-is-identity rule means it can never be changed, only abandoned.
2. **The fleet versioning scheme.** The tooling proposes lockstep on *this repository's* semver (not
   the provider version — see [`m3-go.md`](./m3-go.md) § "Versioning and release" for the three
   reasons). The scheme itself needs sign-off.
3. **Whether to create the real repositories and publish at all.**

## 4. Tag-growth policy

258 tags per release is ~13k a year at a weekly cadence, and every consumer's `git ls-remote` and
every full clone pays for them forever. VERDICT §5 names this the durable cost of the one-repository
shape, and gives the mitigations in order of preference:

1. **Release on upstream provider bumps, not on every commit.** The cadence is the first lever.
2. **Tag only the groups whose content hash moved.** `generated/hashes.json` + `release.mjs`.
   Option B's shared `core` made this impossible; it is the single biggest operational argument for
   the option that was chosen, and it is implemented.
3. **Shard into `cdktn-aws-go-a..z` repositories** — last resort, only if the first two stop being
   enough. Option A supports it; the rejected option did not.

The `/vN` event stands outside this: at semver major ≥ 2 pacmak appends `/vN` to **all 258** module
paths at once, the repository grows `awsmsk/v2/` directories, tags become `awsmsk/v2/v2.0.0`, and
consumers edit imports by hand. It belongs in its own PR, never folded into a provider bump.

## 5. Deliberately not built

* **No publishing automation of any kind.** No release workflow, no npm/PyPI credentials, no
  trusted-publishing configuration. `release.mjs` cannot tag or push by construction.
* **Java and .NET were never packed.** The targets are declared in the monolith manifest; only
  `--targets python` (monolith) and `--targets go` (fleet, all 258) were ever run. Their build time,
  output size and any pacmak breakage on a 258-submodule assembly are **unknown**, not assumed fine.
* **`jsii-docgen` was never run.** The "1,290 doc files" figure is exact arithmetic (258 × 5), not a
  measurement; docgen is not even a dependency of this repo.
* **The per-group content-hash release flow has never met a real registry.** The changed-group diff
  is unit-tested against a fixture of two refs (22 tests) and the command sequence is asserted in
  order, but no tag has ever been created and no module has ever been fetched through
  `proxy.golang.org`.
* **The Go consumer builds in workspace mode** against a local checkout, because the fleet is
  unpublished. Its committed `go.mod` requires each module at a placeholder `v0.0.0`; the `replace`
  directives are generated and gitignored.
