# Group moves — the breaking-change marker file

A resource that changes group changes its import path, its submodule and (in M1) its class's
namespace. That is a **breaking change** for every consumer, so `pnpm check:groups` (gate B) fails
on any move it finds between `git show HEAD:groups.json` and the working `groups.json` unless the
move is acknowledged here.

## Convention

One markdown list item per moved name, in a `## <provider version>` section:

```
- `aws_foo_bar`: `old_slug` -> `new_slug` — why it moved
```

Gate B accepts a move when **some line in this file mentions both the terraform type name and the
destination slug as whole tokens** (HTML-comment lines are ignored). The match is intentionally
loose so the surrounding prose can be edited freely; it is intentionally whole-token so a line about
`aws_lb_listener` never silently acknowledges a move of `aws_lb`.

When the gate fails it prints the exact line to paste, e.g.:

```
gate B: resources "aws_foo_bar" moved old_slug -> new_slug without a marker.
          Add to docs/group-moves.md:  - `aws_foo_bar`: `old_slug` -> `new_slug` — <why>
```

This file is append-only: entries are a permanent record of what broke and when, and they are what a
release note is written from. Do not delete old sections when they stop being needed by the gate —
the gate only ever looks at moves it detects *now*, so stale entries cost nothing.

Adding a resource to a group, removing one, or adding a whole new group is **not** a move and needs
no entry here.

## v6.62.0 — initial mine

No moves. This is the baseline: `groups.json` was created at this provider version, so there is
nothing to move from.
