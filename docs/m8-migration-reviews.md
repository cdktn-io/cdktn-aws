# M8 (TypeScript) — review rounds

The per-round record of what adversarial review found in the migration slice and what was done
about it. Append-only: a new round is a new section at the end, and nothing above it is rewritten.
The milestone record itself is [`docs/m8-migration.md`](./m8-migration.md).

## Round 1 review fixes

Three defects an adversarial review found, all of them the same shape — the tool being *silent*
about something it had not decided:

* **`export { B }` where `B` is a classic import** was rewritten to `export { s3.TfBucket };`, which
  does not parse. An export clause takes names, not qualified names. It now joins the shorthand
  property assignment as a reported position (`rewrite.ts#resolve`).
* **`declaredNames` read the imported name of an import specifier**, so
  `import { readFileSync as s3 }` never marked `s3` as taken and the group barrel collided with it.
  It reads the local name now — the only one that is bound.
* **Import forms the tool does not model were passed over in silence** — `export … from`,
  `export *`, `import x = require(…)`, `import('…')`, and the `index-structs/` subpath where the
  large modules declare their structs. `package.json` had already dropped the classic dependency, so
  a green run could leave a project importing a package it no longer depends on. There is now a
  backstop that cannot be outgrown: after the edits, every classic specifier still in a
  module-specifier position that this run did not decide about is reported, and the exit code says
  so. `index-structs` is resolved properly (the module's index re-exports it), and a named import or
  namespace binding whose submodule has no map row is kept and reported rather than dropped.

Two cheaper follow-ons in the same pass: `package.json` keeps `@cdktn/provider-aws` beside
`@cdktn/aws` while anything is unmapped (a residual import still has to install), and
`migrate-verify`'s `includes("0 unmapped")` — which "10 unmapped" also satisfies — is anchored.
8 new tests, 35 in the tool's suite. Deferred: emitting `import type` when every merged binding came
from a type-only import; the behaviour is documented in the guide's limits table instead.

## Round 2 review fixes

Two more of the same shape, both on the paths round 1 opened:

* **A default import of the classic package was dropped, or retargeted.** `classicBindings` read
  the namespace and named bindings but never `getDefaultImport()`, so a sibling binding on the same
  statement marked it handled and the round-1 backstop skipped it: `import d, { iamRole } from '…'`
  lost `d` at exit 0, and `import d, * as ns from '…'` moved `d` onto `@cdktn/aws`, which has no
  member it could reach. The default binding is a reported binding now, `residualImport` spells the
  default slot back, and a statement that keeps ANY binding is never retargeted.
* **A name kept in a residual import had been freed for the group barrel**, because the alias search
  ran over every binding before knowing which ones the run would remove. `migrateFile` decides all
  of them first and only then assigns aliases, over the names actually removed.

3 new tests, 38 in the tool's suite. The evidence table's test row above is corrected to match.
Also softened: the guide's limits table claimed every limit was reported — three are silent
(JSDoc `@type`, `require(someVariable)`, `import type`), and they now say so.

## Round 3 review fixes

One blocker and five warnings. The blocker is the third of the family the first two rounds opened —
a rewrite that is *wrong on the page* rather than silent — so it is also the round that gave the
tool a way to catch the family itself.

* **A residual classic import spelled a held binding once per failing reference.** `keep()` pushed
  the same `Binding` into its statement's kept list for every unmapped occurrence, so a binding with
  two of them came back as `import { s3Bucket, s3Bucket } from '@cdktn/provider-aws';` — `TS2300`,
  on a file `--write` had already applied, and the exact opposite of the guarantee both docs make.
  One finding per occurrence, one clause per binding. No committed test had ever given one binding
  two failing references; three now do, one per binding form (barrel named, deep named, `require`
  destructuring).
* **The tool checks its own output now.** Every file the rewrite changes is re-parsed and its import
  bindings checked for a repeated local name before anything is diffed or written; a defect this run
  introduced — and not one the input already had — throws with the file name instead of being
  applied. Composed text edits can break a file without getting a single name wrong, which is what
  let this shape recur twice.
* **The classic `Config` interface's name is recorded, not derived.** The map published
  `<classic.className>Config` as a rule and it is false for one entry in 2,401: the config struct
  competes for the same `uniqueClassName` pool as the nested ones, so
  `aws_wafv2_web_acl_association`'s is `Wafv2WebAclAssociationConfigA` — the same quirk as the 11
  `…A` classes, and the one classic export of 50,425 the tool had no row for. Every entry carries
  `classic.configClassName` now, read off `model.structs[0]`, and `classic-naming.test.ts` asserts
  all 2,401 config interfaces against `../ref-provider-aws`.
* **`package.json` moved off the classic library in only the first block that declared it.** A
  library with it in `dependencies` *and* `peerDependencies` kept peer-depending on the library it
  had just migrated off, with no report row and exit 0. Every declaring block is rewritten now, one
  report row each.
* **A type-only import became a value import.** `import type { S3BucketConfig }` and
  `import { type IamRoleConfig }` collapsed into a value `import { … } from '@cdktn/aws'` — a
  runtime import the file never had, an error under `verbatimModuleSyntax`, and nothing in the
  report. `Binding` carries `typeOnly`; the merged group import is `import type` when every
  contributor was type-only and a value import as soon as one was not, and a residual classic import
  spells its `type` keyword back. This was round 1's documented deferral; the limits table loses it.
* **The example pinned its classic dependency with a caret**, so a golden refresh could install a
  different published build and rewrite the reference under a `VERSION` file that then recorded it.
  Exact pin, and the bump runbook's checklist line says the bump moves it. Refreshed against a real
  462 MB install of `@cdktn/provider-aws@25.3.0`: the golden comes back byte-identical.
* **This record was 165 lines against a 150 cap.** The round sections moved here, which is where
  this one went too — append-only, and the record stays a record.

11 new tests in the tool's suite (38 -> 49) and one more in the generator's, 2,304 across the
repository.

## Round 4 (review comment 5564708251)

Two P1s, both the same shape as round 1's: the tool reporting a clean run — 0 unmapped, exit 0 —
over a project that no longer installs or resolves.

* **The loader recognizer knew one form, and the backstop only checked the forms it knew.**
  `requiredSpecifier()` matched a bare `require('…')`; `module.require('…')` matched neither it nor
  `isModuleSpecifier()`, so the reviewer's file was neither rewritten nor reported — and
  `keepClassic` derives only from the unmapped findings, so `--write` dropped `@cdktn/provider-aws`
  from `package.json` while the source still loaded it. The backstop is conservative now: it scans
  EVERY string literal whose value is a classic specifier, not the positions the recognizer models,
  and reports each one the run did not decide about ("classic specifier left in place:
  `require.resolve(…)` — move it by hand"), which is what makes it a report row, an exit code of 1
  and a kept classic dependency. Alongside that, the two forms that are cheap and unambiguous are
  rewritten where the bare `require` already was: `module.require(…)`, which is the same call under
  CommonJS, and `const ns = await import('…')`, which binds the same namespace object — same
  identifier and destructuring patterns, and a residual spells its own callee back. An un-awaited
  `import('…')` binds a Promise, not a namespace, so it stays reported. The reviewer's case now
  migrates to `import { s3 } from '@cdktn/aws'; export const b = s3.TfBucket;`.
* **A pre-existing `@cdktn/aws` dependency was resolved by JSON key order, and the report lied about
  it.** The rebuild wrote `TARGET_RANGE` at the classic entry and let a later target entry overwrite
  it, so `{provider-aws, aws}` kept `~0.1.0` and `{aws, provider-aws}` replaced it — either way the
  "becomes" column printed the hardcoded `@cdktn/aws@^0.2.0` at exit 0. The policy is decided from
  the block as a whole before the rebuild, so key order cannot reach it: a range already inside
  `TARGET_RANGE` is kept and reported as itself; one that is not leaves the whole manifest untouched
  with a finding ("existing @cdktn/aws range ~0.1.0 conflicts with ^0.2.0: resolve by hand") that
  counts towards the unmapped total. Overwriting an intentional pin and keeping an incompatible one
  are both guesses. `satisfiesTarget` is narrow and deliberately not `semver` — a wrong yes pins a
  consumer to a library the rewritten source does not compile against.
* **The target range is one constant, and forgetting to bump it is now a red suite.**
  `map.ts#TARGET_RANGE` is the only spelling in `src/` (`report.ts` had a second), and a test
  asserts that plus the guide, the tool's README and the worked example's manifest all quoting it.
  It is not derived from this repository's `package.json`: that version is the next release's for a
  whole development cycle, so deriving would either publish a wrong range or forbid the skew.

13 new tests in the tool's suite (49 -> 62). The guide's limits table gains the three reported rows
this round added and the manifest-conflict row; the two silent limits are unchanged.
