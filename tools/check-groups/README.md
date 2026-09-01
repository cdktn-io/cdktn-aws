# check-groups

The CI gate over `groups.json`. Exits non-zero with a readable report on any failure.

```bash
pnpm check:groups
```

## Gate A — coverage, exactly once

* every `resource_schemas` / `data_source_schemas` / `ephemeral_resource_schemas` name in the
  schema dump resolves to exactly one group, directly or through the `aliases` table;
* a name listed in two groups fails (duplicate);
* a name grouped but absent from that surface of the schema fails (stale entry);
* an alias that is *also* listed in a group's array fails — aliases live only in the alias table
  (see `docs/curation.md`, "Alias representation");
* `groups.json` must be in canonical form (sorted slugs, sorted arrays), so the miner's output and
  a hand edit are byte-comparable.

There is deliberately **no misc bucket**: an unmapped name is a curation decision, and the gate is
where that decision is forced.

## Gate B — move detection

Compares `groups.json` against `git show HEAD:groups.json`. Any name whose group changed is a
breaking change for consumers and fails **unless** `docs/group-moves.md` carries a line mentioning
both the name and the destination slug as whole tokens. Aliases are followed, so a move of
`aws_lb` is reported for `aws_alb` too.

With no `groups.json` at HEAD (first commit, or a non-git checkout) gate B reports "skipped" rather
than failing — there is nothing to compare against.

The failure message prints the exact markdown line to paste. See `docs/group-moves.md` for the
convention.

## Schema location

Same resolution as the miner: `$CDKTN_AWS_SCHEMA`, then `schemas/schema.json`, then
`../cdktn-grouped-resources/schemas/schema.json`. The dump is ~34 MB and is never committed;
`schemas/main.tf` pins the provider version it must be produced from.
