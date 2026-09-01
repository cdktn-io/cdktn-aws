# M2 — full generation at 257-group scale

What changed when `tools/aws2cdk` went from the three M1 pilot packages to every group in
`groups.json`, what the numbers are, and the two decisions M1 deferred to this milestone
(struct-file sharding, provider-defined functions). The M0 curation record is
[`curation.md`](./curation.md); the M1 record is [`m1-generator.md`](./m1-generator.md).

Everything below was measured on the pinned **aws 6.62.0** dump, on one machine (Apple silicon,
Node 24, pnpm 11), from a clean `generated/`.

## The numbers

| | |
| --- | ---: |
| groups emitted | **258** (257 from `groups.json` + the synthetic `provider`) |
| classes | 2,401 (1,711 resources, 679 data sources, 10 ephemeral, 1 provider) |
| nested property types | 9,856 |
| files written | **3,434** (2,660 `.ts` + 258 × `package.json`/`README.md`/`tsconfig.json` + `hashes.json`) |
| bytes written | **84.7 MiB** (88,766,714 B), 2,179,155 lines of TypeScript |
| `pnpm generate` wall time | **2.7 – 3.2 s**, single process, default heap |
| peak generator heap | under the default 4 GB ceiling — **no `--max-old-space-size` needed** |
| `pnpm typecheck` (root + generator + 258 packages) | **85 s** wall, 258/258 OK, default heap |
| `git` cost of the committed tree | ~7 MB compressed |

`generate` being three seconds is not a typo: the parse is one pass over an already-parsed 34 MB
JSON and the emitters are string builders. The expensive step at this scale is `tsc`, and even
that is 258 *separate* programs run sequentially by `scripts/typecheck-generated.mjs` — deliberately
so, because one program over all of them would let a group compile only because a sibling happened
to be in scope.

### Top 10 groups by emitted bytes

| group | bytes | classes | exports |
| --- | ---: | ---: | ---: |
| `lex_v2_models` | 8.10 MiB | 6 | 5,452 |
| `waf` | 4.85 MiB | 14 | 3,585 |
| `sagemaker_ai` | 3.52 MiB | 39 | 2,063 |
| `vpc` | 2.61 MiB | 96 | 1,852 |
| `bedrock_agentcore` | 2.22 MiB | 21 | 1,550 |
| `ec2` | 2.01 MiB | 52 | 1,150 |
| `app_mesh` | 1.78 MiB | 14 | 1,900 |
| `bedrock_agents` | 1.50 MiB | 10 | 1,057 |
| `elemental_medialive` | 1.41 MiB | 6 | 772 |
| `security_hub` | 1.38 MiB | 23 | 946 |

The M1 brief expected `ec2`, `sagemaker` and `quicksight` to be the giants. They are not. Size here
is driven by **nesting depth**, not by resource count: `lex_v2_models` has six classes and is the
largest package in the repo, while `vpc` has 96 classes and is a third its size. `quicksight` does
not even reach the top ten, because its worst attribute trees are on the vendored
`skipped-attributes.ts` list and collapse to `any`.

### Top 10 files

| file | bytes | exports | lines |
| --- | ---: | ---: | ---: |
| `lex_v2_models/src/aws-lexv2-models-intent.ts` | **6.87 MiB** | **4,647** | 147,496 |
| `waf/src/aws-wafv2-web-acl-rule.ts` | 3.80 MiB | 2,767 | 82,501 |
| `elemental_medialive/src/aws-medialive-channel.ts` | 1.25 MiB | 663 | 32,790 |
| `lex_v2_models/src/aws-lexv2-models-slot.ts` | 1.07 MiB | 702 | 22,461 |
| `kinesis_firehose/src/aws-kinesis-firehose-delivery-stream.ts` | 0.79 MiB | 399 | 19,661 |
| `security_hub/src/aws-securityhub-insight.ts` | 0.72 MiB | 516 | 18,733 |
| `arc_region_switch/src/aws-arcregionswitch-plan.ts` | 0.71 MiB | 407 | 17,052 |
| `sagemaker_ai/src/aws-sagemaker-hyper-parameter-tuning-job.ts` | 0.60 MiB | 357 | 14,140 |
| `sagemaker_ai/src/aws-sagemaker-domain.ts` | 0.47 MiB | 280 | 11,301 |
| `waf/src/aws-wafv2-web-acl-rule-group-association.ts` | 0.47 MiB | 327 | 10,257 |

Distribution: **2** files over 2 MiB, **4** over 1 MiB, **8** over the vendored generator's old
400-export sharding threshold. The M1 record's largest file was 85 exports; the tail here is three
orders of magnitude longer than M1 could see.

## Decision 1 — struct-file sharding: **not needed, keep the merged namespace files**

M1 dropped the vendored generator's `structs<N>.ts` sharding (which splits a resource's structs
once they pass 400 exports) because nested types live inside the resource's merged `namespace`, and
splitting a namespace across files would need cross-file namespace merging. M1 could not tell
whether that was safe at scale, and named this the M2 decision.

It is safe. Measured on the two pathological files, from cold (`lib/` removed first):

| | `lex_v2_models` (6.87 MiB / 4,647 exports in one file) | `waf` (3.80 MiB / 2,767) |
| --- | ---: | ---: |
| `tsc --noEmit` total | **1.23 s** | 0.89 s |
| `tsc` lines / memory | 174,105 lines, 540 MB | 107,799 lines, 330 MB |
| `jsii` (full compile + assembly) | **4.6 s**, JSII3 0, JSII6 0 | 2.5 s, JSII3 0, JSII6 0 |
| `.jsii` assembly | 14.6 MB | 8.7 MB |
| `jsii-pacmak --targets go` | **OK**, 24 s, 7,629 Go files, 76 MB | — |

No slowdown worth a mitigation, no jsii failure, no export-ceiling error, and the Go emitter — the
one target that writes a *file per type* and is therefore the most likely to break on a fat
namespace — produced a valid module. The longest Go filename it emitted is 204 characters
(`AwsLexv2ModelsSlot_SubSlotSetting…PropertyOutputReference__no_checks.go`), inside the usual
255-byte per-component limit but close enough to be worth watching on a future provider bump.

So: **no sharding, no threshold**. The merged-namespace form raises the ceiling enough that the
vendored 400-export rule has no work to do here — that rule exists to keep one *flat module* scope
under control, and there is no flat module scope in this layout. If a future bump does push a file
past what jsii tolerates, the fallback is still available (numbered namespace parts re-exported
from the barrel), but nothing in the 6.62.0 data justifies paying for it now.

## Decision 2 — provider-defined functions: on, attached to the provider construct

The four aws provider-defined functions (`arn_build`, `arn_parse`, `trim_iam_role_path`,
`user_agent`) are now emitted. Placement is option A of the design note — the same shape
`@cdktn/provider-aws` already ships:

* `generated/provider/src/provider-functions.ts` exports `AwsProviderFunctions`, one instance
  method per function, each body a single `cdktn.TerraformProviderFunction.invoke(...)` call;
* `AwsProvider` gains a memoized `public get functions(): AwsProviderFunctions`, constructed as
  `new AwsProviderFunctions(this.terraformResourceType)`;
* the call site is `new AwsProvider(this, "aws", {...}).functions.arnParse(arn)`.

Why in the `provider` package and not a group of its own: all four upstream doc pages carry
`subcategory: ""`, so there is no per-service signal to distribute them by; and a separate package
would have to either import the provider package (a cross-group import, which is banned and gated)
or take the provider's local name as a bare constructor string, which is a worse call site for no
gain. Inside the provider package, the class and its only consumer are the same jsii assembly.

The class body is emitted by the **unmodified vendored** `ProviderFunctionsEmitter`; the only
departure from upstream is the import path (`./provider-functions`, one flat `src/`, instead of
upstream's sibling `../provider-functions/index` directory).

Return types follow the vendored model, which matches the reference build byte for byte: the three
`string` returns are wrapped in `cdktn.Token.asString(...)`, and `arn_parse` — the only one whose
Terraform `return_type` is `object` — returns the invocation unwrapped as `cdktn.IResolvable`. jsii
has no anonymous-object type, so there is no struct to return; the five documented fields
(`account_id`, `partition`, `region`, `resource`, `service`) are reached through the resolved value.

Rendering goes through cdktn core's own path — `TerraformProviderFunction.invoke` builds the name
`provider::aws::<fn>` and `FunctionCall.resolve()` renders it — so both JSON and HCL synth produce
the interpolation form. `tools/aws2cdk/test/scale.test.ts` loads the committed
`generated/provider/src/provider-functions.ts` for real and asserts the synthesized `cdk.tf.json`
carries `${provider::aws::arn_parse("arn:aws:iam::1:role/x")}`.

## What only appeared at scale

**Mapper-function names were not unique.** M1 asserted that prefixing every mapper with its owning
class name kept them unique package-wide. That is false: string concatenation is not injective when
one class name is a prefix of another's.

```
AwsWafv2WebAcl  + RuleActionAllowProperty  ┐ both spell
AwsWafv2WebAclRule  + ActionAllowProperty  ┘ awsWafv2WebAclRuleActionAllowPropertyToTerraform
```

42 duplicate exports across `waf` and `s3`, surfacing as `TS2308` on those two barrels — i.e. one
mapper silently shadowing another, in a repo whose entire consumer contract *is* the mapper
functions. The fix (`naming.ts#mapperPrefixesForGroup`) computes mapper prefixes for a whole package
at once and appends `Mapper` at the class/struct boundary for every class in a colliding cluster,
iterated to a fixed point and then asserted unique. It touches only the classes actually in
conflict, which is why `elb`, `lambda` and `provider` emit byte-identically to their M1 output.

**The cross-group import gate had a false-positive regex.** Its specifier pattern matched a bare
`from` before any quote, so it fired on emitted code for a terraform attribute literally named
`from` (`this.getNumberAttribute('from')` — `aws_fms_policy` and six others): 38 phantom failures
that three groups could not produce. The pattern now anchors the `from` clause to a line that
actually starts with `import`/`export`.

Neither of these is a scale *limit* — both are M1 rules that were only ever exercised on 46 classes.

## Per-group content hashes

`generated/hashes.json`, written on every full `pnpm generate`:

```json
{ "algorithm": "sha256", "pinnedProviderVersion": "6.62.0",
  "groups": { "acm": { "hash": "7346f3f6…", "files": 7, "bytes": 68051 }, … } }
```

Design (`tools/aws2cdk/src/hashes.ts`):

* **Input** is exactly the group's own committed files — `package.json`, `README.md`,
  `tsconfig.json`, `src/**` — read back off disk after they are written, so the hash describes the
  committed tree rather than the generator's intent about it.
* **Framing** is `<relative posix path>\0<byte length>\0<bytes>\n` per file, files sorted by path.
  Path-and-length framing means neither a rename nor a moved file boundary can collide with a
  different tree. No mtime, no inode, no absolute path — so the hash is identical on any machine
  and from any directory (asserted by moving the tree and re-hashing).
* **Locality** falls straight out of the zero-cross-group-imports invariant: nothing is shared, so
  a change to one group's schema input can only move that group's hash.
* Only a **full** run writes the manifest; a partial run (`pnpm generate:m1`, or named groups)
  leaves it untouched rather than silently dropping 250-odd entries.
* `changedGroups(before, after)` is the M3 lever: the release step tags a Go module only when its
  group's hash moved.

`hashes.json` is the one file allowed at the `generated/` root. The rule
`scripts/check-no-cross-group-imports.mjs` enforces is "no shared *module* root"; a JSON side-car is
not importable, and the same script's rule 1 would reject the specifier if an emitted file ever
tried.

## Gates at 257 groups

| gate | result |
| --- | --- |
| `pnpm generate` twice into two trees, `diff -r` | **byte-identical** |
| `pnpm typecheck` | 258/258 OK, 85 s, default heap |
| `pnpm check:imports` | PASS — 2,660 files, 258 groups, 0 cross-group imports |
| `pnpm check:groups` | PASS — 257 groups, 100 % of the schema mapped |
| `pnpm check:contract` | PASS — `aws_lb` 22/22 units identical to the reference build |
| `pnpm test` | 308 tests, 2 suites |
| `pnpm synth:smoke` | PASS, validation ON |
| `pnpm jsii <group>` on the six largest | OK, JSII3 0 / JSII6 0 everywhere |

The naming-grammar sweep is now a **full** sweep, not a sample: `scale.test.ts` reads every `.ts`
file of every group and matches every top-level export and namespace member against
`NAME_GRAMMAR`, plus a per-package check that no two files export the same name. It costs about two
seconds over 2,660 files, so there was no reason to sample.

Full `jsii` over all 258 packages is not run in the default gate set — the six largest take 12 s
between them, so the whole tree is on the order of ten minutes, which belongs in CI rather than in
`pnpm test`.

## What is committed

All 258 packages' sources — `package.json`, `README.md`, `tsconfig.json`, `src/**` — plus
`hashes.json`. That is ~7 MB compressed, nowhere near a size that would justify committing a
representative subset and gitignoring the rest. Everything `jsii`/`jsii-pacmak` write (`lib/`,
`dist/`, `.jsii`, `.warnings.jsii.js`, `.npmignore`) stays gitignored, unchanged from M1.
