# mine-groups

Proposes `groups.json`: joins the `subcategory:` frontmatter of the `terraform-provider-aws`
website docs against the resource / data-source / ephemeral names in a
`terraform providers schema -json` dump.

```bash
pnpm mine                # from the repo root; writes ../../groups.json
pnpm mine -- --dry-run   # join and report, write nothing
pnpm mine -- --refresh   # discard and re-clone the provider checkout
pnpm mine -- --stdout    # print the proposed file instead of writing it
```

## What it does

1. **Blobless sparse clone** of `hashicorp/terraform-provider-aws` at the tag in
   `mine-config.json` (`providerTag`) into `tmp/terraform-provider-aws`, `website/` only —
   `--filter=blob:none --no-checkout --depth 1` plus a cone sparse-checkout, so ~2 400 markdown
   files instead of a full working tree. `tmp/` is gitignored. An existing checkout already at the
   right tag is reused.
2. Parses `subcategory:` out of `website/docs/{r,d,ephemeral-resources}/*.html.markdown`. The
   basename is the terraform type minus the `aws_` prefix
   (`lambda_function.html.markdown` → `aws_lambda_function`).
3. Derives a **slug** per subcategory (text before `" ("`, lowercased, non-alphanumerics collapsed
   to `_`), applying `slugOverrides` from `mine-config.json`. Any remaining slug collision is a hard
   failure with the colliding titles printed — the tool never invents a tiebreaker.
4. Joins against the schema (path resolved from `$CDKTN_AWS_SCHEMA`, then `schemas/schema.json`,
   then `../cdktn-grouped-resources/schemas/schema.json`). A schema name with no doc file is
   resolved through `aliases` or `manualAssignments`; anything left over is a hard failure with the
   name printed. There is no misc bucket.
5. Writes `groups.json` **deterministically** — sorted slugs, sorted name arrays, fixed key order —
   so re-running over unchanged inputs is a no-op in `git diff`, and a summary + full report to
   `tmp/mine-report.json`.

Every human decision lives in `mine-config.json` (slug overrides, aliases, hand assignments), never
in this source, so a re-run preserves curation.

## This tool is one-time and unstable for automation

`groups.json` is **checked in and is the source of truth**. This tool only proposes a diff against
it, and its output must be read by a human before it is committed.

The reason is upstream: `subcategory:` values are hand-maintained prose in the provider repo. They
get renamed, split and merged between releases for editorial reasons that have nothing to do with
API stability — and a rename here is a *breaking change* for us, because the slug is the submodule
name. Wiring this tool into an automated provider-bump pipeline would silently relocate consumer
imports. So:

* run it by hand, per provider-bump PR;
* read the `groups.json` diff, not just the summary line;
* `pnpm check:groups` gate B fails on any resource that changed group unless
  `docs/group-moves.md` acknowledges it — that is the backstop that makes the manual step safe to
  forget once.

See `docs/curation.md` for the decisions already recorded and `docs/group-moves.md` for the
breaking-change convention.
