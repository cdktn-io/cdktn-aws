# M4 — the publishing shape

What actually ships, from which build, in what order, and what has to happen once before any of it
can happen at all.

This describes **wiring that exists** — every script and workflow named here is in the repository
and every number is from [`m2-metrics.md`](./m2-metrics.md), [`m3-go.md`](./m3-go.md),
[`m2-scale.md`](./m2-scale.md) or §5 below — plus the gap between that wiring and a real release.
**Nothing has ever been published, pushed, or tagged from this workspace.** Neither GitHub
repository exists.

Since M4 was first written the publishing half has been built: `.github/workflows/release.yml`
exists (dispatch-only, dry-run by default), `pnpm package` builds the publishable artifacts, and
Java and .NET have been packed for real. §3 is the remaining checklist and it is now specific.

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

`monolith/package.json` (emitted by [`scripts/monolith-manifest.mjs`](../scripts/monolith-manifest.mjs)
for `build-monolith.mjs`; gitignored) declares **three** jsii targets, all now packed:

| target | declared as | packed | wall | peak RSS | output |
| --- | --- | --- | --- | --- | --- |
| js | `@cdktn/aws` | yes | 8.0 s | — | `dist/js/aws@0.0.0.jsii.tgz`, 48,619,611 B |
| python | `cdktn-aws` / `cdktn_aws` | yes | — | — | wheel 62,419,552 B, sdist 61,980,948 B |
| java | `io.cdktn:cdktn-aws`, package `io.cdktn.aws` | **yes** | **418.3 s** | **7.08 GB** | 576 MB: jar 141,616,569 B, sources 74,406,642 B, javadoc 361,265,305 B, pom 5,348 B (+ md5/sha1) |
| dotnet | `Io.Cdktn.Aws` | **yes** | **60.3 s** | **2.37 GB** | 67 MB: `Io.Cdktn.Aws.0.0.0.nupkg` 65,921,939 B + `.snupkg` |
| ~~go~~ | — | **removed from the manifest** | | | see below |

The Java and .NET runs were the two unknowns M4 originally listed as "never packed". Both are
retired: `jsii-pacmak` handles 258 submodules on both targets with no errors, no diagnostics and no
manifest changes (measured 2026-09-01, macOS arm64, jsii-pacmak 1.140.0, Corretto 20 + Maven
3.9.16, .NET SDK 6.0.428; CI uses Corretto 11 and .NET 8.x, so treat these as the shape of the cost,
not a promise about the runner). Java is the expensive one — seven minutes and a 7 GB working set,
the same order as the jsii compile itself — and its **361 MB javadoc jar is the largest single file
this repository would ever upload anywhere**. That is a registry question, not a pacmak question,
and it has not been asked yet.

**The monolith's `go` target is gone from the emitted manifest**, which is what M4 said had to
happen before the first release. It does not fit — one Go module carrying all 258 groups is past
`x/mod/zip`'s 524,288,000 B cap, so `go mod download` refuses it and the module path is spent
permanently — and leaving it declared was a loaded gun one `pacmak --targets go` away from firing.
Three things now stand in the way: the manifest declares no `go` target,
`scripts/build-monolith.mjs` refuses `--pacmak go` by name, and `scripts/package.mjs` refuses the
`go` target by name. `tools/aws2cdk/test/monolith-manifest.test.ts` asserts the absence so it cannot
come back. The Go distribution comes from the fleet, and only from the fleet.

The other two publish blockers M4 named are also gone: the manifest is `"private": false` (npm
refuses to publish a tarball marked private) and its version is this repository's own semver, with
`PACKAGE_VERSION` overriding it — which is how `release.yml` passes a validated dispatch input and
how the npm placeholder is built at `0.0.0`. The published tarball now also carries `LICENSE` and
`NOTICE`.

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

## 3. First-release checklist

> ### ⚠️ Before the next release: the `release` environment
>
> `release.yml` is `workflow_dispatch`-only, and a dispatch runs the workflow file **from whatever
> ref the dispatcher chooses** — so before this change any branch anyone could push was a code path
> to npm, PyPI, Maven Central, NuGet, the `v*` tags on this repository and a push token for
> `cdktn-aws-go`. A `if: github.ref == 'refs/heads/main'` check inside the workflow does not fix
> that: the attacker's branch contains the check, and can delete it. The control has to live outside
> the workflow file, in repository settings GitHub evaluates before the job starts — a **deployment
> environment** with a branch policy, reviewers, and the secrets scoped to it.
>
> Every publishing job now declares one: `release` for `release_npm`, `release_maven`,
> `release_nuget`, `release_go` and `release_github`; `release_pypi` keeps **`pypi`**, because the
> PyPI trusted publisher binds that exact name. Three things must happen, in this order:
>
> 1. **Apply the `cdktn-repository-manager` PR that creates the `release` environment** with
>    deployment branch policy = protected branches only, plus required reviewers. Naming an
>    environment that does not exist does not fail the run — **GitHub auto-creates it with no
>    protection whatsoever**, which gates nothing while looking like it does. Until that apply lands,
>    the branch restriction is not in force. Verify at Settings → Environments that `release` shows a
>    deployment branch rule and is not marked as having been created by a workflow run.
> 2. **Add environment `release` to the npm Trusted Publisher for `@cdktn/aws`** (npmjs.com →
>    package → Settings → Trusted Publisher → Environment name → `release`). The job's OIDC token now
>    carries an `environment` claim; a publisher config with a blank Environment may reject or ignore
>    a token that has one depending on how npm matches the claim, and a release is not the place to
>    discover which. Treat this as a **required** pre-release step. (Step 4 below reflects it.)
> 3. **PyPI needs no change** — its pending/confirmed publisher is already registered against
>    environment `pypi`, and `release_pypi` still declares exactly that.

Ordering matters more than any single item: the repository-manager PR has to be merged *and
applied* before `cdktn-aws` can be pushed (it is what creates the branch protection, the secrets,
the `pypi` environment and the empty `cdktn-aws-go`), and the trusted-publisher registrations have
to exist before a real release runs, but the npm one needs a tarball that only this repository can
build. In order:

1. **Merge and apply the `cdktn-repository-manager` adoption PR** — a second entry in
   `CustomConstructsStack`, alongside `cdktn-awscc`. It creates: branch protection on `cdktn-aws`
   (required checks = `protectMainChecks`, see below), the 11 publishing secrets + 4 aliases,
   dependabot, the Slack webhook, `team-cdk-terrain` admin, the `pypi` **and `release`** repository
   environments (the latter with a protected-branches-only deployment policy and reviewers — see the
   box above; an unapplied environment is auto-created unprotected), and
   `cdktn-io/cdktn-aws-go` as an **empty** repository with `protectMain: false`. Confirm
   `deploy.yml`'s `custom-constructs` leg applied cleanly; the plan is ~29 resources.
   *`protectMainChecks` must be the check contexts `ci.yml` actually produces* — they are listed in
   a comment at the top of `ci.yml`, and with `enforce_admins: true` a required context no job
   produces makes every PR permanently unmergeable. This is the exact mistake PR #83's second review
   round caught for `cdktn-awscc`.
2. **Push `cdktn-aws` and get CI green.** `ci.yml` and `fleet-full.yml` have never executed. Expect
   setup-level breakage (action versions, cache keys, runner tool versions) that local runs cannot
   surface. The 16 GB heap flag is no longer among them: every job that carries it — `release.yml`'s
   `build_monolith`, `build_fleet` and `assemble_go`, plus `ci.yml`'s typecheck, generate and shard
   jobs and `fleet-full.yml`'s shards — runs on `depot-ubuntu-24.04-8` (8 cores, 32 GB), the fleet
   convention. Light jobs stay on `ubuntu-latest`. Nothing below is worth attempting until the PR
   gate is green.
3. **Both repositories start empty; do not hand-seed either.** `cdktn-aws-go` in particular is
   created by Terraform with an auto-init commit and nothing else — no template, no workflows, no
   branch protection — and the first content it ever receives should come from a real `release.yml`
   run, so that its commit identity, its per-module `go.mod` files and its tags are what a release
   actually produces. `~/cdktn/cdktn-aws-go` on a developer machine is a local staging build, not
   the seed. Same rule for `cdktn-aws`: it is adopted as an existing repository, so it must be
   pushed by hand once (step 2) — but only the real repository content, no bootstrap scaffolding.
4. **npm placeholder, then Trusted Publisher.** npm has no pending-publisher concept, so a
   brand-new package cannot be published by automation first. Build a **real** `0.0.0` tarball
   through the real pipeline — never a hand-written stub, because the point is that the manifest npm
   registers against is the manifest every later release ships:

   ```bash
   PACKAGE_VERSION=0.0.0 PACMAK_TARGETS=js pnpm package     # -> dist/js/aws@0.0.0.jsii.tgz
   npm login                                                # the @cdktn org's publisher account
   npm publish dist/js/*.tgz --access public                # the ONLY manual publish this package needs
   ```

   That exact invocation is exercised and current: it assembles 258 submodules, compiles with the
   pinned jsii (JSII3 0 / JSII6 0), lazifies the barrel, asserts all 258 getters resolve, and writes
   a 48,619,611 B tarball in ~52 s wall on a developer machine. Then on npmjs.com: package →
   **Settings → Trusted Publisher → GitHub Actions**, with

   | field | value |
   | --- | --- |
   | Organization or user | `cdktn-io` |
   | Repository | `cdktn-aws` |
   | Workflow filename | `release.yml` |
   | Environment name | **`release`** — `release_npm` declares `environment: release`; see the box at the top of this section |

   Then disable classic publish access / any leftover automation tokens for the package. Sanity
   check: `npm view @cdktn/aws` shows `0.0.0` and the panel names `cdktn-io/cdktn-aws` + `release.yml`.
5. **PyPI pending publisher** — no placeholder needed, and it can be registered before the project
   exists. pypi.org → Publishing → Add a pending publisher, with PyPI project name `cdktn-aws`,
   owner `cdktn-io`, repository `cdktn-aws`, workflow name `release.yml`, environment name **`pypi`**.
   All three of those strings have to keep matching `release.yml`'s `release_pypi` job and the
   `github_repository_environment` the manager creates; the pending publisher converts to a
   confirmed one on the first real run.
6. **Maven Central / NuGet.** Namespace/prefix registration (`io.cdktn`, `Io.Cdktn.*`) is its own
   multi-day process, and the fleet's existing `MAVEN_*` / `NUGET_API_KEY` secrets already cover the
   credentials — but neither upload has ever been attempted from this package, and the Java bundle
   is 576 MB with a 361 MB javadoc jar (§1(a)). Check Central's per-file limits before the first
   real run rather than during it.
7. **Go: no registry, one unrepairable step.** `GO_GITHUB_TOKEN` is not a Go-specific secret — it is
   an alias of the fleet-wide `gh-token` PAT that the manager provisions on every repo, and it is
   the only credential the Go publish needs. `publib-golang` reads each `dist/go/<dir>/go.mod`,
   derives `github.com/cdktn-io/cdktn-aws-go` from the module path, clones it, syncs the tree,
   commits once as `team-cdk-terrain <github-team-cdk-terrain@cdktn.io>`, and creates one
   `<dir>/v<version>` tag per module — 258 of them on the first release, because there is no previous
   release to diff against. Then, before announcing anything, the proxy smoke test in §2.5 for every
   first-published module path: the proxy caches a failure and the name is spent.
8. **Dispatch a dry run, then the real release.** `release.yml` is `workflow_dispatch`-only and
   `dry_run` defaults to **true**: a dry run builds everything, runs every gate including the
   258-module `zip.CheckDir` size gate, and prints exactly what each registry would receive without
   publishing. Only after a clean dry run, dispatch with `dry_run: false`. Push-to-tag auto-release
   is deliberately not wired until both have succeeded once.

**Version.** The root `package.json` is at **0.1.1** — the corrected first release (§7 says what
0.1.0 shipped and why it is not it), and no longer the `0.0.0` placeholder `release.mjs` refuses to
tag 258 modules with. The scheme is this repository's own semver, in lockstep across `@cdktn/aws`
and all 258 Go modules, disconnected from the provider
version ([`m3-go.md`](./m3-go.md) § "Versioning and release"). `release.yml` will refuse a dispatch
whose version does not equal `package.json`'s: the bump is a reviewed PR, never a push from a job
holding publishing credentials.

**Still open:**

- [ ] Apply the `cdktn-repository-manager` PR that creates the **`release`** environment (protected
      branches only + reviewers) **before** the next dispatch — until it applies, GitHub auto-creates
      `release` unprotected on first use and the branch restriction is not in force.
- [ ] Set the npm Trusted Publisher's **Environment name** to `release` for `@cdktn/aws`, before the
      next release. Both items are the box at the top of this section.
- [ ] Delete `CDKTN_AWS_GO_ROOT: none` from `ci.yml` the moment `cdktn-aws-go` has a remote a runner
      can clone — until then 259 inventory assertions are legitimately skipped, in writing.
- [ ] Wire the changed-groups-only release path (`scripts/release.mjs`) into `release.yml` for the
      second release onward. It is implemented and unit-tested; it is unwired because the first
      release has nothing to diff against.
- [ ] **After** the 0.3.0 push: hand-edit `cdktn-aws-go`'s top-level `README.md`. `publib-golang`'s
      sweep only `git rm`s top-level entries that contain a `go.mod`, so that file — the landing
      page, naming `awsdetective`/`awsprovider`, the `aws` + slug rule and `awsdetective/v0.1.0`
      tags — survives the publish verbatim and then contradicts every directory beside it. See the
      0.3.0 addendum at the end of this file and [`v030-naming.md`](./v030-naming.md).

**The three decisions that were the user's, not the implementer's** — all three are permanent, all
three were needed *before the first tag*, and all three are now settled:

1. **The Go dir / `packageName` convention: `aws` + slug with underscores stripped**
   (`lex_v2_models` → `awslexv2models`), forced into jsii's `^[a-z][a-z0-9]*$`. That string is the
   directory, the tag prefix and the last element of every consumer's import path, and Go's
   import-path-is-identity rule means it can never be changed, only abandoned. **Confirmed.**
2. **The fleet versioning scheme: lockstep on this repository's own semver**, not the provider
   version. **Confirmed.**
3. **Whether to create the real repositories and publish at all: yes**, at 0.1.1 (0.1.0 was
   attempted and is superseded — §6 and §7), by the ordering above.

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

* **No release has ever run.** `.github/workflows/release.yml` now exists — dispatch-only, dry-run
  by default, every publish step gated — but it has never executed, and neither has `ci.yml`. The
  credentials it names are provisioned by the repository manager and the two trusted-publisher
  registrations are still to be made (§3). `release.mjs`, the changed-groups planner, still cannot
  tag or push by construction and is not wired into the workflow.
* ~~**Java and .NET were never packed.**~~ Both are packed and measured (§1(a)): 418.3 s / 7.08 GB /
  576 MB for Java, 60.3 s / 2.37 GB / 67 MB for .NET, no errors on either. What remains unknown is
  the *upload* — no artifact of this package has ever been sent to Maven Central or NuGet, and the
  361 MB javadoc jar is worth checking against Central's limits before a real run.
* **`jsii-docgen` was never run.** The "1,290 doc files" figure is exact arithmetic (258 × 5), not a
  measurement; docgen is not even a dependency of this repo.
* **The per-group content-hash release flow has never met a real registry.** The changed-group diff
  is unit-tested against a fixture of two refs (22 tests) and the command sequence is asserted in
  order, but no tag has ever been created and no module has ever been fetched through
  `proxy.golang.org`.
* **The Go consumer builds in workspace mode** against a local checkout, because the fleet is
  unpublished. Its committed `go.mod` requires each module at a placeholder `v0.0.0`; the `replace`
  directives are generated and gitignored.

## 6. Version stamping, and recovering a partial release

Release **0.1.0** (run 33531108440) published npm, PyPI, Maven Central, NuGet and the GitHub Release
`v0.1.0`, and then `publib-golang` refused the fleet:

```
Repo version (0.1.0) conflicts with module version (0.0.0\n) for module in dist/go/awsaccountmanagement
```

Nothing reached `cdktn-aws-go` — it still has zero tags — so the release is recoverable, not
half-published.

**Where a Go module's version comes from.** `jsii-pacmak --targets go` takes it from
`generated/<group>/package.json`, through the `.jsii` assembly, and writes it into three places:
the `version` file, the embedded `jsii/<name>-<version>.tgz`, and that tarball's name in
`jsii/jsii.go`. Those manifests are committed at `0.0.0` and must stay there — their bytes are
hashed into `generated/hashes.json` and `pnpm generate` has to leave the tree clean — while the
monolith honoured `PACKAGE_VERSION` and shipped 0.1.0. Hence the mismatch.

**The stamp** (`scripts/fleet-version.mjs`, used by `build-fleet.mjs` and `assemble-go-dist.mjs`):

* the fleet version is `PACKAGE_VERSION`, else this repository's own semver — the same rule
  `build-monolith.mjs` follows, so the two halves cannot be built at two different numbers;
* `build-fleet.mjs` writes it into the selected groups' manifests before the `jsii` phase and puts
  the original bytes back on **every** exit path, so a stamped build leaves `git status` clean and
  the committed manifests stay at `0.0.0`;
* after packing, each module's `version` file is rewritten as **exactly** the version, with no
  trailing newline. `publib`'s `GoReleaser.extractVersion` compares the file's raw contents with
  `$VERSION` and does not trim, so pacmak's `0.1.0\n` is a conflict — and with `$VERSION` unset it
  would tag `awsswf/v0.1.0\n` instead;
* `assemble-go-dist.mjs` refuses any module whose `version` file is not that exact string, in both
  its copy and `--verify` modes, and the `release_go` **dry run** now runs the same comparison and
  prints the count. The 0.1.0 dry run was green because it enumerated modules without reading them.

The stamp is asserted end to end on a real build of one group in
`tools/aws2cdk/test/go-version-stamp.test.ts` (including that the embedded tarball moved too, and
that the manifest came back). Note that a stamp with major ≥ 2 makes pacmak emit `/vN` module paths,
which `build-fleet.mjs` rejects against the manifest — see §4, it is its own PR.

**Two ways the stamp could still go wrong, both refused rather than documented**
(`tools/aws2cdk/test/fleet-build-safety.test.ts`):

* **`--pacmak-go` over a stale assembly.** The pacmak-only phase reuses an existing compile, and
  pacmak reads the version out of the `.jsii`, not out of the manifest this run stamps — so
  `PACKAGE_VERSION=Y node scripts/build-fleet.mjs --pacmak-go <group>` over an assembly compiled at
  X would pack at X. The assertion that caught it used to fire *after* `rmSync(dist/go)`, destroying
  the good output on the way. It is now a pre-flight over every selected group, before anything is
  deleted, and it exits 2 naming the command to run instead
  (`PACKAGE_VERSION=Y node scripts/build-fleet.mjs <group>` — compile and pack in one run). It does
  not silently recompile: `--pacmak-go` exists so each tool's wall time is a number on its own, and
  a phase flag that sometimes runs the other phase makes that and this recovery procedure lie.
* **Two builds of one group at once.** The restore writes back *the bytes the build snapshotted*, so
  an overlapping build snapshots the first one's stamp and restores a release version into the
  committed manifest — both builds succeeding, tree quietly wrong. CI shards are disjoint by
  construction, but the recovery procedure below is a human running `build-fleet.mjs` locally,
  possibly beside a build that has not finished. `scripts/build-lock.mjs` takes an atomic
  `mkdir`-based lock per group under `tmp/fleet-locks/` (gitignored) covering
  stamp → jsii → pacmak → restore; a second build exits 2 with the owner's pid and what to do, and a
  lock whose owner is gone is reclaimed with a warning. The header of that file records why building
  from a copy outside the repository is not the alternative it looks like: `generated/*` are pnpm
  workspace members and the compile resolves `cdktn`/`constructs` through the symlink farm that
  membership creates.

**Recovery procedure.** Re-dispatch `release.yml` with the release version and `dry_run=false`.
That was going to be the *same* number, `0.1.0`, until §7 found a second defect in what 0.1.0
published; the corrected release is **0.1.1**, at which no registry holds anything yet, so every
one of the checks below simply finds nothing and publishes. The skip logic still matters — it is
what makes a *second* failure of the Go half re-runnable.
Each of the five publish jobs first asks its registry whether that version is already there — npm
`npm view`, PyPI `/pypi/cdktn-aws/<v>/json`, Maven Central's `.pom` on `repo1.maven.org`, NuGet's
flat container, and `gh release view v<v>` — and on a hit logs "already … — this job has nothing to
do" and succeeds without publishing. Found means skip; not found means attempt, because an index can
lag a publish by minutes and every one of these registries refuses a true duplicate on its own.
`release_go` keeps its `needs:` unchanged: the registries still gate on the fleet building and
passing every gate, so a second failure of the Go half fails the run rather than shipping again.

## 7. What 0.1.0 shipped, and why the release is 0.1.1

The version conflict in §6 was not the only defect in 0.1.0. What reached npm, PyPI, Maven Central
and NuGet was **the whole monolith `src/` tree**, next to the `lib/` it was compiled into:

| | files | unpacked |
|---|---|---|
| `@cdktn/aws@0.1.0` | 7,990 | 550,672,898 B (525 MB) |
| 0.1.1, this branch | 5,327 | 461,985,456 B (441 MB) |

2,661 of the removed files are `.ts` sources that no consumer of a compiled jsii assembly can use.
The tarball is not only the npm artifact: `jsii-pacmak` embeds it verbatim as the jsii kernel
payload inside the Python wheel (`cdktn_aws/_jsii/`), the Java jar and the .NET package, so every
language downloaded and extracted the same 88 MB of dead TypeScript on install.

**Cause.** `jsii-pacmak` writes the `.npmignore` that excludes `src/` itself — but only on the
branch where the outdir comes from `package.json` (`lib/npm-modules.js#updateAllNpmIgnores`).
`scripts/package.mjs` passes `--outdir dist`, which takes the other branch and skips the step
entirely. That is why `generated/<group>/.npmignore` exists — the fleet build passes no `--outdir`,
so pacmak writes it there, which is also why the Go modules were never affected — and why
`monolith/` never had one.

**Fix.** `scripts/monolith-manifest.mjs` now emits `MONOLITH_NPMIGNORE` alongside the manifest
(pacmak's own default content, the same shape `@cdktn/provider-aws` publishes), `build-monolith.mjs`
writes it into `monolith/`, and `scripts/check-js-tarball.mjs` reads the *packed bytes* back after
`jsii-pacmak --targets js` and fails the build on any `.ts` outside `lib/**/*.d.ts`, on `tsconfig*`
or `*.tsbuildinfo`, or on a missing `LICENSE`, `NOTICE`, `README.md`, `.jsii` or `lib/`. It prints
the file count and unpacked size, so every release logs what it shipped. The allowlist is asserted
in `monolith-manifest.test.ts` and the check itself in `js-tarball-gate.test.ts`, against real
tarballs.

The first version of that gate read the tarball by interpolating its path into `/bin/sh -c` with
`JSON.stringify` — which is JSON quoting, not shell quoting, so a `$(…)` or a backtick in the
filename executed, in a script that runs inside the release pipeline. It now reads the archive
in-process: one streaming gunzip and a walk over the 512-byte tar headers
(`scripts/tar-list.mjs`), yielding both the entry list and the unpacked byte total with no shell
and no `tar` child at all. `js-tarball-gate.test.ts` packs fixtures whose names *are* those payloads
and asserts the side-effect file never appears.

**What the remaining 441 MB is** — and it is all load-bearing, which is why this stops here:
`.jsii` 150 MB (the assembly every non-JS target reads), `lib/**/*.js` 256 MB, `lib/**/*.d.ts`
42 MB. The `.js` figure is inflated by `inlineSourceMap` + `inlineSources`, which carry each
module's TypeScript back into its own `.js`; those two settings are jsii's generated-tsconfig
contract, enforced by `jsii --validate-tsconfig generated`, so dropping them is a change to the
compile shape and belongs in its own PR, not in a packaging fix.

**Follow-up for the account owner:** `npm deprecate '@cdktn/aws@0.1.0' "superseded by 0.1.1 —
0.1.0's tarball included the TypeScript sources"`. The version cannot be unpublished after 72 hours
and should not be; a deprecation notice is what tells an installer to move. The equivalent is worth
doing on PyPI (yank) once 0.1.1 is up.

## Addendum (0.3.0, 2026-09-07) — decision 1 was revisited, and the Go directories moved

§3 above records the `aws` + slug Go convention (`awslexv2models`, `awsprovider`) as a permanent
user decision. Community feedback on the 0.2.0 release reopened it: `awss3` in Go against `s3` in
TypeScript and Python is an inconsistency that doubles the stutter at every call site. The
convention is now **the bare slug with underscores removed** — `s3`, `acmpca`, `lexv2models`,
`provider` — and the 0.2.0 `aws<group>` paths are *abandoned, not renamed*, exactly as the
"can never be changed, only abandoned" sentence anticipated: their `v0.2.0` tags keep resolving
from history through `proxy.golang.org`, and no consumer already on them is broken.

Read every `aws<slug>` in this document as `<slug>` — §2's `awslexv2models`/`awsmsk` examples and
§4's `awsmsk/v2/` major-version paths included (`msk/v2/`, tags `msk/v2/v2.0.0`). Decisions 2 and 3
are untouched. The decision, the before/after table and what `publib-golang` does and does not
clean up: [`v030-naming.md`](./v030-naming.md).
