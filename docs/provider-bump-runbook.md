# Provider bump runbook

The human-intervention playbook for moving `cdktn-aws` from one `terraform-provider-aws` version to
the next.

The premise, restated because everything below follows from it: **`groups.json` is the source of
truth and `tools/mine-groups` only proposes a diff against it.** Upstream's `subcategory:`
frontmatter is hand-maintained prose that gets renamed, split and merged for editorial reasons with
no relation to API stability, and a subcategory rename lands on us as a *submodule* rename. So the
miner is never wired into automation; it is run by hand, per bump PR, and its diff is read.

Everything the gates enforce is described in `tools/check-groups`; everything the human decides is
described in [`curation.md`](./curation.md). This file is the order to do it in.

## (a) The routine bump

1. **Re-pin.** Three places, kept in lockstep — the miner and the gate both read them and
   `check:groups` prints the pin it used:
   * `mine-config.json` → `providerTag` (`v6.63.0`) and `pinnedProviderVersion` (`6.63.0`)
   * `schemas/PROVIDER_VERSION`
   * `schemas/main.tf` → `required_providers.aws.version`
2. **Regenerate the schema dump.** ~34 MB, gitignored, never committed:

   ```bash
   cd schemas && rm -rf .terraform .terraform.lock.hcl \
     && terraform init && terraform providers schema -json > schema.json
   ```

   Or point `$CDKTN_AWS_SCHEMA` at a dump produced elsewhere. `pnpm check:groups` prints the path it
   resolved, so a stale dump is visible in the log rather than silent. Check the dump is key-sorted
   (it is, out of `terraform`'s own `encoding/json`) — struct members are emitted in the schema's
   key order, so a differently-ordered dump moves *all* 258 group hashes at once and falsely re-tags
   every Go module; see the hash-design note in [`m2-scale.md`](./m2-scale.md).
3. **Run the miner as a proposal.**

   ```bash
   pnpm mine -- --refresh    # --refresh forces a re-clone at the new tag
   ```

   `--dry-run` writes nothing if you want to read `tmp/mine-report.json` first. The miner is
   deterministic: re-running it over unchanged inputs is a no-op in `git diff`.
4. **Read the `groups.json` diff, not the summary line.** The summary only says how many resources
   exist; the diff says which group each one is in. What to look for, in the order it matters:
   moved names (see (d)), renamed group titles (see (c)), new groups, new names in old groups.
5. **Run the gates.**

   ```bash
   pnpm check:groups   # gate A coverage, gate B moves, canonical-form check
   pnpm typecheck
   pnpm test
   pnpm generate       # regenerates the committed generated/ tree
   git status          # must be clean unless the schema really changed
   ```
6. **Commit `groups.json` together with the config re-pin and any curation change.** A bump PR whose
   `groups.json` diff is not explained by its `mine-config.json` diff plus its
   `docs/group-moves.md` diff is not reviewable.

If the miner cannot run (no network for the provider clone), the bump can still be done by hand:
`groups.json` is a plain, canonically-sorted file and `check:groups` validates it against the schema
either way. The miner is a convenience, not a dependency.

## (b) Gate A fails: a new resource is in the schema but in no group

```
gate A: resources "aws_foo_bar" is in the schema but in no group (and is not an alias)
```

There is no misc bucket, by design: an unmapped name is a curation decision, never a default.

1. Find its doc page in the provider checkout the miner made:
   `tmp/terraform-provider-aws/website/docs/r/foo_bar.html.markdown` (`d/` for a data source,
   `ephemeral-resources/` for an ephemeral resource) and read its `subcategory:` frontmatter.
2. **The subcategory already exists** → nothing to do. The miner assigns from frontmatter
   automatically; if you are seeing gate A fail, the resource has no doc page at all. That means one
   of:
   * it is an **undocumented alias** of an existing type (the `aws_alb*` story) → add
     `aliases["aws_foo_bar"] = "aws_canonical"` in `mine-config.json`. An alias is listed *only* in
     the alias table, never in a group's arrays; gate A fails if it is in both.
   * upstream simply has not written the page yet → add
     `manualAssignments.resources["aws_foo_bar"] = "<slug>"`. The miner validates the slug against
     the live slug table, so a typo fails loudly. Record why in `docs/curation.md` and delete the
     entry at the bump where the doc page appears.
3. **The subcategory is new** → a new group appears on its own, with a slug derived by the base rule
   (text before the first `" ("`, lowercased, non-alphanumerics collapsed to `_`). Decide whether to
   keep that slug or override it, **now** — see (e); this is the only free moment. Apply the
   curation test in [`curation.md`](./curation.md) ("Slug shortening — the test"): rename only if the
   derived slug is 20+ characters, a short form is *attested* (consistent terraform resource prefix,
   upstream's own title acronym, or the AWS service code) and the result is genuinely short.
   Never coin an abbreviation. Record the decision either way — a considered-and-kept row is as
   valuable as an override.
4. If two subcategories derive the same slug, the miner refuses to run and prints both titles. That
   is a mandatory `slugOverrides` decision; it never invents a tiebreaker. The existing four
   collision pairs and the principle behind them are in `curation.md`.

## (b2) Gate C fails: the class-name prefixes no longer fit

`stripPrefixes` is per group and curated, so a bump can invalidate it in three ways. All three are
gate C failures, and all three are decided in `mine-config.json#stripPrefixOverrides` — never by
loosening the gate.

```
gate C: group "foo" has no stripPrefixes (see docs/curation.md)
gate C: group "foo" prefix "bar" matches no member — an unused prefix is a curation error
gate C: group "foo" derives AwsThing from both "aws_foo_thing" and "aws_thing"
```

1. **A new group** arrives with a mechanically proposed list. Read it against the rule — strip
   exactly the service-name tokens the group title already conveys, never a token that names the
   resource itself — and override it if it is wrong. This is the same "only free moment" as the
   slug decision in (b): the class names become someone's import the day the group is published.
2. **A new type stops a prefix from matching** — rare, but a prefix whose only member was removed
   upstream must be removed too, or gate C fails on the unused entry.
3. **A new type collides** with an existing class name (case-insensitively, across all three
   surfaces of that group). Either the group's list is too aggressive — shorten it and accept the
   longer names — or the two types genuinely want different prefixes; add the longer one, since the
   longest match wins. A collision is never resolved by renaming a class by hand: the rule is a
   pure function of (type, surface, prefixes) and must stay one.

A prefix change renames every class it touches, which is a breaking change for consumers exactly
like a group move. Say so in the release notes, and check `naming-map.json`'s diff — it is the
review table for any renaming (`git diff naming-map.json` after `pnpm generate`). Its `classic`
column is the `@cdktn/provider-aws` side of the same bump, so a sibling `../ref-provider-aws`
checkout at the SAME provider version is what makes `pnpm test`'s 2,401-row cross-check meaningful;
without one the check skips locally and fails under `CI`. CI checks that tree out itself
(`ci.yml`, the `actions/checkout` step pinned to a cdktn-provider-aws commit) — move that `ref:` to
the classic library's commit for the same provider version as part of the bump.

The migration example is pinned to the same library. `examples/migrate/typescript/golden/cdk.tf.json`
is the synth of the classic project against a PUBLISHED `@cdktn/provider-aws`, and
`scripts/migrate-golden.mjs` refuses to write it when that build's `cdktn.provider.version` does not
match `schemas/PROVIDER_VERSION` — so a bump needs the classic library to have published the new
provider version first (`npm view @cdktn/provider-aws versions`), the example's EXACT pin moved to
it, and `pnpm migrate:golden:refresh` re-run. The pin is exact (`"@cdktn/provider-aws": "25.3.0"`,
no caret) precisely so that a refresh cannot quietly install a different published build under a
`golden/VERSION` that then records it: the golden moves when someone moves the pin, never
otherwise. The refreshed golden's diff is worth reading: it is the same rename, seen as terraform.

## (c) Upstream renames a subcategory

**Slugs are our API; titles are display.** So the default is: keep our slug, take the new title.

The miner keys `slugOverrides` on the **full subcategory title**, so a rename silently detaches any
existing override and the base rule takes over — which is exactly a group-key rename (see (e)) and
shows up as a mass move under gate B. To keep the slug:

```jsonc
"slugOverrides": {
  "New Upstream Title": "our_existing_slug"   // was "Old Upstream Title"
}
```

Update the key, keep the value. The group's `title` field in `groups.json` follows upstream and
changes on its own — that is intended; it is the human-readable label in the generated package's
`description` and README, and it is not part of anyone's import path.

Only accept a slug change when upstream's rename reflects a real service rename that we want to
follow, and only if nothing has been published yet. Otherwise it is a breaking change for zero
benefit.

## (d) Upstream moves a resource between subcategories

Gate B catches it:

```
gate B: resources "aws_foo_bar" moved old_slug -> new_slug without a marker.
          Add to docs/group-moves.md:  - `aws_foo_bar`: `old_slug` -> `new_slug` — <why>
```

This is a deliberate choice, not a formality. Two options:

* **Accept the move** — the resource really did change service, or upstream's new grouping is
  better. It is a **breaking change**: the import path, the submodule and the class's namespace all
  change. Paste the printed marker line into `docs/group-moves.md` under a
  `## v<provider version>` section with a real reason after the em dash, and put it in the release
  notes. Gate B accepts a move when some non-comment line mentions both the type name and the
  *destination* slug as whole tokens.
* **Pin it to the old group** — the move is editorial churn and not worth breaking consumers over.
  Add `manualAssignments.<surface>["aws_foo_bar"] = "old_slug"`. This wins over frontmatter, so the
  resource stays put and gate B sees no move. Record why in `curation.md`; revisit at the next bump,
  because a pin that outlives upstream's reason for the move becomes a lie about where the resource
  belongs.

A whole subcategory being split or merged upstream is the same decision taken N times; do it as one
decision and write one paragraph, not N marker lines with N reasons.

## (e) Slug renames: free now, breaking forever after

A slug is the jsii submodule name, the npm package name (`@cdktn/aws-<slug with hyphens>`), the Go
package directory and the Go release-tag prefix. Renaming one is free **only until the first
publish/tag of that package**. After that it is a breaking change for every consumer in every
language, and in Go specifically the old import path can never be reused.

So: do slug curation at the moment a group is *born* (a new subcategory, or the initial mine), and
treat any later rename as a release-notes-worthy break.

### What a group-key rename looks like in gate B

Gate B compares `git show HEAD:groups.json` against the working file **by name**, per surface. It
has no concept of a group being renamed — a member of `old_slug` that is now a member of `new_slug`
is a move, full stop. So renaming one group key reports **every member of that group, on every
surface it appears on**, as an unacknowledged move:

```
gate B: resources   "aws_msk_cluster" moved managed_streaming_for_kafka -> msk without a marker.
gate B: dataSources "aws_msk_cluster" moved managed_streaming_for_kafka -> msk without a marker.
```

That is not a bug and there is no `--i-renamed-a-group` flag: the whole point is that a key rename
*is* as breaking as a real move, so it costs the same paperwork. Acknowledge it the same way — one
marker line per name, with a short section header explaining that it was a rename rather than a
regrouping, so a reader of the file later can tell the two apart. The 6.62.0 slug-shortening entry
in [`group-moves.md`](./group-moves.md) is the worked example: six group keys renamed, 28 marker
lines. A single name that appears on two surfaces needs only one line — the match is per line, not
per surface.

Mechanically:

```bash
pnpm mine                                     # apply the override, regenerate groups.json
pnpm check:groups 2>&1 | grep 'gate B'        # the gate prints the exact lines to paste
# paste them into docs/group-moves.md under a new "## v<version> — <what happened>" section
pnpm check:groups                             # PASS, with "N acknowledged"
```

`group-moves.md` is **append-only**. Stale entries cost nothing (the gate only looks at moves it
detects now) and they are what release notes get written from.

Finally, check the rename against the group it lands next to: `goPackageName` strips underscores,
so `msk_connect` and `mskconnect` are the *same* Go package. Since 0.3.0 the name carries no `aws`
prefix, so it must also not be a Go keyword (`map`, `range`, `type`) — a package name is a bare
identifier at every call site. `assertUniqueGoPackageNames` runs over all 257 groups on every
generate and `goPackageName` throws on either fault, but it is cheaper to notice while choosing the
slug.

## (f) The Go note

```
slug            msk
npm             @cdktn/aws-msk
jsii submodule  msk
Go packageName  msk                                    (goPackageName: the slug, "_" stripped)
Go import path  github.com/cdktn-io/cdktn-aws-go/msk    (GO_MODULE_ROOT + "/" + packageName)
Go release tag  msk/vX.Y.Z
```

The Go import path and the tag prefix are **permanent after the first release**: the module proxy
and sumdb keep them forever, and Go's import-path-is-identity rule means a renamed package is a
different package, not the same package under a new name. A consumer gets no automatic migration —
they edit imports.

Two consequences for slug decisions:

* underscore placement is invisible in Go, so it can never be the only thing distinguishing two
  slugs (see the collision check at the end of (e));
* "we can tidy the names up later" is false for Go in a way it is only *awkward* for JS and Python.
  A slug that reads badly is worth fixing before the first release and worth living with after it.

## (g) The release

A bump PR is not a release. Once it has merged, the Go fleet is cut with
`scripts/release.mjs`, which is **dry-run only**: it prints the plan and the commands and never
runs `git tag` or `git push`. The full argument is in [`m3-go.md`](./m3-go.md) § "Versioning and
release"; this is the order to do it in.

```bash
node scripts/release.mjs --from <previous release ref>     # --to defaults to HEAD
```

1. **Read the plan before the commands.** The version is the root `package.json` semver (lockstep,
   every module the same), and the tag list covers *only* the groups whose `hashes.json` entry
   moved. That is the whole point: 258 tags per release is ~13k a year, and every consumer's
   `git ls-remote` pays for them forever.
2. **Clear every warning it prints.** Each one is a way the plan can be right-looking and wrong:
   * *all N groups changed* — almost always a differently key-ordered schema dump, not the
     provider. Compare the count against the `groups.json` diff before tagging anything.
   * *a group disappeared* — its module and every tag it ever had stay on the module proxy
     forever. Record the decision in `group-moves.md` first.
   * *nothing changed* — check the refs.
3. **Run the printed commands yourself.** They build and pack only the changed groups, copy each
   `generated/<slug>/dist/go/<packageName>/` into `cdktn-aws-go` verbatim, `go mod tidy` (pacmak
   emits no `go.sum`, and a tag without one is unverifiable), re-run the isolation and size gates,
   then commit, tag and push.
4. **Smoke-test the proxy before announcing anything.**

   ```bash
   GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org GOFLAGS=-mod=mod \
     go mod download github.com/cdktn-io/cdktn-aws-go/<packageName>@vX.Y.Z
   ```

   A local `go build` never touches `proxy.golang.org` or `sum.golang.org`. Every **first** publish
   of a module path must be checked here: a path that fails to resolve is close to unrepairable,
   because the proxy caches the outcome and the name is spent. The plan lists one command per newly
   added group plus one already-published module.

### The `/vN` event — major >= 2

At semver major 2 and above, `jsii-pacmak` appends `/vN` to every module path
(`determineMajorVersionSuffix`, verified in its source). This is not a per-module decision:

* all 258 import paths change **at once** — `.../msk` becomes `.../msk/v2`;
* the repository needs `msk/v2/` directories beside the v1 ones;
* tags become `msk/v2/v2.0.0`;
* consumers edit their imports by hand. Go's import-path-is-identity rule means `msk/v2` is a
  *different package*, not the same package at a new version, so there is no automatic migration and
  a program can legally hold both.

`scripts/release.mjs` warns whenever the plan's major is >= 2 and emits the suffixed paths and tags,
but the decision is a deliberate, rare, repo-wide event and belongs in its own PR — never folded
into a provider bump.

## Checklist

```
[ ] mine-config.json providerTag + pinnedProviderVersion
[ ] schemas/PROVIDER_VERSION
[ ] schemas/main.tf version
[ ] schema.json regenerated at the new version
[ ] pnpm mine -- --refresh    (proposal; groups.json diff read line by line)
[ ] every new subcategory has a deliberate slug, recorded in docs/curation.md
[ ] every new group has a deliberate stripPrefixes list, recorded in docs/curation.md
[ ] naming-map.json diff read: every rename is intended and listed in the release notes
    (including its nested section — see docs/m8-migration.md)
[ ] ../ref-provider-aws checked out at the same provider version (the classic cross-check), and
    ci.yml's cdktn-provider-aws checkout `ref:` moved to that commit
[ ] every gate B move is either acknowledged in docs/group-moves.md or pinned via manualAssignments
[ ] pnpm check:groups PASS
[ ] pnpm typecheck && pnpm test
[ ] pnpm generate leaves git status clean
[ ] examples/migrate/typescript/classic/package.json's EXACT pin ("@cdktn/provider-aws": "25.3.0"
    today, no caret) moved to the @cdktn/provider-aws release that pins the new provider version,
    pnpm migrate:golden:refresh re-run, pnpm migrate:verify PASS
[ ] release notes list every acknowledged move as a breaking change
```

Then, after the bump PR merges (see (g)):

```
[ ] node scripts/release.mjs --from <previous release ref>   (dry run; it has no other mode)
[ ] every warning it printed is cleared, not skimmed
[ ] changed-group count reconciles with the groups.json diff
[ ] go mod tidy ran before any tag was created
[ ] proxy smoke test passes for every newly added module path
```
