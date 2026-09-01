# Options: grouping cdktn provider bindings closer to the aws-cdk-lib layout

Phase 1 execution plan: [awscdk-compat-plan.md](awscdk-compat-plan.md).

Context and evidence: [schema-sweep.md](schema-sweep.md), [aws-cdk-codegen.md](aws-cdk-codegen.md),
[cdk-terrain-generator.md](cdk-terrain-generator.md), [awscc-package-today.md](awscc-package-today.md).

## What we are comparing

| | aws-cdk-lib (L1) | `@cdktn/provider-awscc` today |
|---|---|---|
| grouping unit | CFN service namespace → `aws-ecs` (292 modules, `scope-map.json`) | Terraform resource type → `accessanalyzerAnalyzer` (4,116 submodules) |
| grouping source | service-spec DB + checked-in `scope-map.json` (auto-extended) | none (`terraform providers schema -json` has no grouping metadata) |
| class name | `CfnService` (+ optional per-namespace suffix) | `EcsService` (service prefix is part of the name) |
| nested types | `CfnService.LoadBalancerProperty`, nested under the class, names from CFN `definitions` | `EcsServiceLoadBalancers`, flat, full attribute path, anonymous `nested_type` (definition names are lost by the provider) |
| lazy loading | `lazify` post-build rewrite (JS) + jsii submodules | `lazy-index.ts` emitted but unused in prebuilt packages |
| import | `import { aws_ecs } from 'aws-cdk-lib'` / `from aws_cdk import aws_ecs` | `import { ecsService } from '@cdktn/provider-awscc'` / `from cdktn_provider_awscc import ecs_service` |

Key facts that shape the options:

1. For **awscc the grouping key is already in the name**: `awscc_<lower(CFN service)>_<snake(resource)>` — 276 services,
   264 of which map 1:1 to an `aws-cdk-lib/aws-<x>` module. No external file is needed for awscc.
2. For **aws** the first token is *not* a service (`ec2`/`vpc`/`lb`/`alb`/`db`/`api`…); grouping needs an external map
   (the registry sidebar comes from hand-maintained `subcategory:` front-matter in the provider repo docs).
3. Grouping resources per service **does not by itself create struct collisions** (0 if struct names keep the resource prefix).
   Collisions only appear when struct names are shortened: 141 (per-resource namespace + leaf name), 277 (per-service + leaf).
4. Python lazy loading: per the jsii team this is automatic with the latest `jsii-pacmak`; provider-project pins `^1.114.1`
   and awscc `^1.139.0`, so a fresh install already floats to 1.140.0. **To prove**: measure `import cdktn_provider_awscc` and
   `from cdktn_provider_awscc import x` wall-time on the current package vs. a rebuild with 1.140.0 — before attributing
   any Python win to regrouping.

---

## Option 0 — Status quo + toolchain hygiene (baseline)

Keep one submodule per resource. Only: bump/pin `jsii-pacmak` to latest for Python lazy submodules, and wire the already
generated `lazy-index.ts` into the prebuilt package (`package.json` `exports`: `import → index.js`, `require → lazy-index.js`,
mirroring what `constructs-maker.ts:643-650` does for in-project `cdktn get`).

**Flow**: provider-project change only; no generator change; non-breaking.
**Pros**: zero API break; isolates the Python/JS import-time question so later options are measured against a fair baseline.
**Cons**: does nothing for discoverability / CDK parity; 4,116 submodules stay (docs 20k files, jsii assembly size unchanged).

## Option A — Service-grouped submodules, resource-prefixed names kept (mechanical regroup)

Layout (jsii submodule = service, one file per resource inside it, exactly the aws-cdk-lib shape with `ecs.generated.ts`
replaced by per-resource files to keep TS files ≤ 28k lines):

```
src/ec2/index.ts              export * from './vpc'; export * from './subnet'; … export * from './data-vpc'; …
src/ec2/vpc.ts                class Ec2Vpc, interface Ec2VpcConfig, Ec2VpcTags…      (unchanged identifiers)
src/ec2/data-vpc.ts           class DataAwsccEc2Vpc …
src/index.ts                  export * as ec2 from './ec2'; export * as ecs from './ecs'; … export * as provider …
```
Consumer: `import { ec2 } from '@cdktn/provider-awscc'; new ec2.Ec2Vpc(...)` / `from cdktn_provider_awscc import ec2`.

**Method**: in `provider-generator.ts`, give `ResourceModel` a `group` (default: the resource itself → today's behaviour);
`emitIndexFile()` emits one `export * as <group>` per group and a per-group barrel; `getFileName()` becomes
`<group>/<resource>.ts`. Group resolution = pluggable `GroupingStrategy`: `perResource` (default), `prefixToken` (awscc), or
`configFile` (Option C). Data sources and list/ephemeral resources join the resource's group. `uniqueBaseName()` folder dedup
moves to (group, file) level. Sharded structs go to `<group>/<resource>-structs/`.

**Pros**
* Smallest generator diff that yields the CDK shape; all type names, and therefore all struct collision handling, unchanged (0 collisions proved).
* 276 submodules instead of 4,116: fewer jsii submodules, ~15× fewer doc files, `from cdktn_provider_awscc import ec2` is one lazy import (once pacmak is current).
* Name parity with `aws_cdk.aws_ec2` makes it easy to document "cdktn-awscc `ec2` ≙ aws-cdk `aws_ec2`".
* Works for any provider with a trivially derivable prefix (google, azurerm are also `<provider>_<service>_…` heavy).

**Cons**
* Breaking change for every consumer import path → major version of the provider package; no jsii-safe alias (a type cannot be
  exported from two submodules), so a transition would need a parallel package name or a long deprecation of the old package.
* Class names stay redundant inside the namespace (`ec2.Ec2Vpc`); struct names stay ≤ 200+ chars.
* Per-service files can get huge in *Go* (jsii-pacmak Go emits one package per submodule; `ec2` with 109 resources × their structs
  in one Go package — compile time to be measured; today `awscc` already exceeds the Go proxy 500 MB limit, see memory).
* For the `aws` provider this option alone gives a poor grouping (needs Option C's map).

## Option B — Service-grouped + CDK-style naming (strip service prefix, nest property types under the resource)

Same layout as A, plus renaming:

* class `ec2.Vpc` (strip `Ec2`), config `ec2.VpcConfig`, data source `ec2.DataVpc` (or keep `DataAwsccEc2Vpc`).
* nested structs nested under the class via TS declaration merging, as spec2cdk does (`typedefinition-struct.ts` uses the resource
  class as typewriter scope): `ec2.Vpc.TagsProperty`, `KinesisfirehoseDeliveryStream.OpenXJsonSerDeProperty`.

**Method**: B1 — name the nested struct after the *leaf attribute* and fall back to the full path only on collision (141 in-resource
collisions → `…DeserializerOpenXJsonSerDe` style fallback, deterministic and stable across releases only if we key the fallback on
schema shape, not on first-seen order). B2 — recover the real CFN `definitions` names by reading the CloudFormation registry
schemas that the awscc provider itself is generated from (`terraform-provider-awscc/internal/service/cloudformation/schemas/*.json`,
or `aws cloudformation describe-type`) and use them like spec2cdk (unique per resource by construction). B2 needs an extra input
next to the Terraform schema (schema-augmentation file), only available for awscc.

Reserved/awkward stripped class names to sanitize (from `scripts/sweep_stripped_names.py`): `Application` ×19 (fine in a namespace),
`Function` (cloudfront, lambda, mediatailor), `Map`, `Index` ×4, `List`, `Object`-like: `Config`, `Configuration`, `Resource`,
`Stack`, `Tag`, `Type`, `Version`, `License` — each collides with jsii/TS reserved names or existing generator conventions
(`*Config` suffix, `*List` suffix, `license`/`version` namespace ban) and needs a suffix rule (`FunctionResource` or keep prefix
for those 40 cases).

**Pros**
* Closest to aws-cdk-lib ergonomics; identifiers shrink dramatically (161-char names become `OpenXJsonSerDeProperty`); nested
  namespacing mirrors CDK docs so people can transfer knowledge 1:1.
* B2 gives *stable* names (CFN definition names) rather than attribute-derived ones.

**Cons**
* Doubly breaking (paths + every identifier); the `*OutputReference` / `*List` helper classes must also move under the class namespace, which
  jsii supports for interfaces/classes but which is untested in the generator (`struct-emitter.ts` assumes flat names).
* jsii nested types in Python/Go become `Vpc.TagsProperty` / `Vpc_TagsProperty` — Go gets *longer* names via flattening.
* B1 collision fallback makes some names path-based and some leaf-based — inconsistent; B2 depends on a second data source and
  CFN↔Terraform attribute name mapping (awscc snake_cases attribute names; `LoRaWAN` → `lo_ra_wan` shows the round trip is lossy).
* Highest generator change (naming + emitter + all snapshot tests listed in cdk-terrain-generator.md).

## Option C — Generic grouping configuration file (scope-map equivalent), grouping strategy pluggable

A checked-in `groups.json` per provider (in the provider repo, consumed by `cdktn get` via `cdktf.json`
`terraformProviders[].grouping` or a `CDKTF_PROVIDER_GROUPING_FILE`-style option), same spirit as `scope-map.json`:

```json
{ "strategy": "prefixToken",              // default rule; "perResource" | "prefixToken" | "explicit"
  "groups": {
    "ec2": { "match": ["^ec2_", "^vpc_", "^default_vpc", "^default_subnet", "^ami", "^eip", "^key_pair"] },
    "elasticloadbalancingv2": { "match": ["^lb_", "^alb_"], "aliases": ["elbv2"] },
    "kinesisanalytics": { "match": ["^kinesisanalytics_"], "suffix": "" },
    "kinesisanalyticsv2": { "match": ["^kinesisanalyticsv2_"] }
  },
  "targets": { "ec2": { "java": "io.cdktn.providers.aws.ec2" } } }
```
The generator auto-extends the file with new prefixes on each `fetch` (as `generateAll()` does for scope-map) so unmapped resources
never silently fall into a "misc" bucket; CI fails on unmapped resources for providers that opted into `explicit`.

**Method**: implement the `GroupingStrategy` seam from Option A once; awscc uses `prefixToken` with no file; aws ships a file seeded
from the provider repo's docs `subcategory:` front-matter (scriptable: `website/docs/r/*.html.markdown`), then curated.

**Pros**: one mechanism serves awscc (zero config), aws (curated map ≈ registry sidebar), and any other provider; overrides for
naming quirks (`suffix`, `targets`) mirror scope-map so the concept is familiar to CDK contributors; the map is reviewable in PRs.
**Cons**: a curated file is an ongoing maintenance duty for aws (1,711 resources, new ones every week; auto-extend reduces but
doesn't remove it); grouping quality for aws is opinion-driven and will attract bike-shedding; still the same breaking change as A.

## Option D — Two-level submodules (service → resource), names unchanged

`src/ec2/vpc/index.ts` with `export * as vpc` inside `export * as ec2`: `ec2.vpc.Ec2Vpc`. Keeps today's per-resource module granularity
(and lazy-loading granularity) while adding the service level for navigation.

**Pros**: purely additive layout; per-resource lazy loading stays maximal; docs can be grouped per service.
**Cons**: jsii nested submodules are supported but rare — Python `cdktn_provider_awscc.ec2.vpc`, Go nested package paths, Java
`io.cdktn.providers.awscc.ec2.vpc` need validation; consumer ergonomics are worse than A (three hops); still breaking.

## Option E — Separate package per service (aws-cdk v1 style) — not recommended

276 npm/PyPI/Maven/NuGet/Go packages for awscc; multiplies the publishing problems already known (placeholder publishes, Go
proxy limits) and is the model aws-cdk abandoned in v2. Listed for completeness only.

---

## Comparison

| | 0 baseline | A regroup | B CDK naming | C config file | D two-level |
|---|---|---|---|---|---|
| CDK-parity of import path | – | ✔ | ✔ | ✔ | ~ |
| CDK-parity of type names | – | – | ✔ | – | – |
| breaking | no | major | major×2 | major | major |
| generator diff | none | small (index/file layout + strategy seam) | large (naming + emitters) | small + config plumbing | small |
| struct collisions | 0 | 0 | 141 to resolve (B1) / 0 (B2, needs CFN schemas) | 0 | 0 |
| jsii submodules (awscc) | 4,116 | 276 | 276 | 276 | 276 + 4,116 nested |
| works for `aws` provider | n/a | poorly | poorly | ✔ with curated map | poorly |
| Python import cost | fixed by pacmak bump | + fewer submodules | same as A | same as A | same as 0 |

## Recommendation for the PoC

1. **Do Option 0 first, and measure** (Python `import` time, `.jsii` size, `pnpm compile` time/memory, Go build time) — that is the
   control group for both concerns raised (collisions, Python performance). If lazy loading from the pacmak bump alone fixes Python,
   grouping is justified on ergonomics/docs, not performance, and should be pitched that way.
2. **Prototype Option A with the strategy seam of C** (`perResource` default, `prefixToken` for awscc) on the generator, against the
   34 MB schema in `schemas/schema.json`, and rebuild awscc in a scratch repo. Compare the four metrics again; also check Go (109-resource
   `ec2` package) and jsii-docgen output.
3. Decide on B only after A numbers are in; if pursued, prefer **B2** (CFN definition names) over B1 — the collision data shows
   attribute-leaf naming is not stable enough on its own.

## Things to prove (tracked from the concerns raised)

* Interface name collisions: numbers above; reproduce with `python3 scripts/sweep_collisions.py` (change scheme functions to test variants).
* Python performance: benchmark script to write in `scripts/bench_python_import.py` — time `import cdktn_provider_awscc`,
  `from cdktn_provider_awscc import ec2_vpc`, and first construct instantiation, for (a) current PyPI release, (b) rebuilt with
  jsii-pacmak 1.140.0, (c) Option A build.
* Whether the `terraform providers schema -json` alone is sufficient: yes for awscc (name rule verified on 1,078 resources), no for aws.
