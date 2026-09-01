# Curation record — groups.json at provider v6.62.0

The human half of `groups.json`. Everything the miner cannot decide on its own lives in
`mine-config.json`; this file records *why* each of those entries is what it is.

Mined 2026-09-01 from `hashicorp/terraform-provider-aws` at tag **v6.62.0**, joined against a
`terraform providers schema -json` dump of **aws 6.62.0**.

## Counts

| | count | note |
| --- | ---: | --- |
| groups (slugs) | 257 | one per `subcategory:` value in use |
| resources | 1,711 | 1,705 via doc frontmatter + 6 via the alias table |
| data sources | 679 | 676 via doc frontmatter + 3 via the alias table |
| ephemeral resources | 10 | all via doc frontmatter |
| aliases | 6 | all `aws_alb*` |
| slug overrides | 8 | the four collision pairs |
| hand assignments | 0 | none were needed |
| unmapped after curation | **0** | the gate has no misc bucket |

Coverage of the raw doc join, before curation: resources 1,705/1,711 = **99.65 %**, data sources
676/679 = **99.56 %**, ephemeral resources 10/10 = **100 %**; overall 2,391/2,400 = **99.63 %**.
After the alias table: **100 %** on all three surfaces. Zero doc files reference a resource that is
absent from the schema, and zero doc files are missing a `subcategory:` key — the frontmatter is
fully populated at this tag.

## Slug derivation and the four collisions

Slug = the subcategory text **before the first `" ("`**, lowercased, with every run of
non-alphanumerics collapsed to `_`. The parenthetical in upstream subcategories is almost always an
expansion of an acronym (`ACM (Certificate Manager)` → `acm`), so dropping it yields the short,
familiar name; collapsing to `_` yields a valid identifier in every jsii target language, which
matters in M1 where the slug becomes the submodule name.

That rule collides for exactly four pairs. Each is resolved by a handcrafted `slugOverrides` entry
keyed on the full subcategory title (the miner hardcodes no special cases — it fails loudly on any
collision it has no override for):

| subcategory | slug | why |
| --- | --- | --- |
| `ARC (Application Recovery Controller) Region Switch` | `arc_region_switch` | Two distinct services share the `ARC` prefix. The disambiguating words sit *after* the parenthetical, so both are appended to the acronym rather than spelling out "application recovery controller", which would make both slugs unusably long. |
| `ARC (Application Recovery Controller) Zonal Shift` | `arc_zonal_shift` | as above |
| `VPN (Client)` | `vpn_client` | Here the parenthetical *is* the discriminator, so it is appended: `vpn_client` / `vpn_site_to_site` match how AWS names the two products ("AWS Client VPN", "AWS Site-to-Site VPN"). Neither gets the bare `vpn` slug — there is no default VPN. |
| `VPN (Site-to-Site)` | `vpn_site_to_site` | as above |
| `Outposts` | `outposts` | The unqualified subcategory keeps the bare slug (it is the Outposts control-plane API); the EC2-flavoured one takes the parenthetical as a suffix. |
| `Outposts (EC2)` | `outposts_ec2` | as above |
| `IVS (Interactive Video)` | `ivs` | Here the parenthetical is a pure acronym expansion, so the base rule's answer (`ivs`) is right for the primary service; only the sibling needs the trailing word. |
| `IVS (Interactive Video) Chat` | `ivs_chat` | as above |

The principle across all four: **the more general / primary service keeps the short slug, the
qualified sibling carries the qualifier as a suffix**, and the qualifier is taken from whichever
position upstream put it in (inside the parentheses for VPN and Outposts, after them for ARC and
IVS). All eight slugs are stable identifiers we intend to keep across provider bumps; renaming one
later is a breaking change and goes through `docs/group-moves.md`.

## The `aws_alb*` aliases

Six resources and three data sources exist in the schema with **no doc file at all**:

```
resources    aws_alb, aws_alb_listener, aws_alb_listener_certificate,
             aws_alb_listener_rule, aws_alb_target_group, aws_alb_target_group_attachment
data sources aws_alb, aws_alb_listener, aws_alb_target_group
```

These are the provider's long-standing deprecated aliases of the corresponding `aws_lb*` types —
same schema, same implementation, kept for compatibility with pre-`aws_lb` configurations. They are
undocumented upstream precisely because they are aliases, so the frontmatter join can never resolve
them; nothing is wrong with the join.

They are recorded in `mine-config.json`'s `aliases` map, alias → canonical (`aws_alb` → `aws_lb`,
etc.), which the miner copies verbatim into `groups.json`. The `aws_lb*` targets all live in
`elb` (`ELB (Elastic Load Balancing)`), so the aliases land there too.

### Alias representation (the decision)

Of the two representations allowed by the slice spec, we picked: **an alias is listed only in the
`aliases` table, never in any group's `resources` / `dataSources` array.** Consumers resolve an
alias's group by following `aliases[name]` to the canonical name and looking *that* up
(`groupOf()` in `tools/groups-core` does this, following chains with a cycle guard).

Why this and not "list the alias in the target group's arrays too":

* the group arrays stay a faithful mirror of what the provider documents, so a diff of
  `groups.json` after a provider bump reads as a diff of upstream docs;
* an alias appearing in an array would be indistinguishable from a real resource, and M1's
  generator would emit a duplicate class for it — with the table, the generator can decide
  deliberately (emit nothing, or emit a deprecated re-export);
* the "exactly once" invariant in gate A stays literal: a name is in exactly one array **or** is an
  alias, never both. The gate fails if an alias also appears in an array.

The single cost is that every consumer has to do the alias hop; that is one shared helper.

## Hand-assigned resources / data sources / ephemerals

**None.** The prior sweep at provider HEAD suggested ~3 data sources might not resolve; at the
pinned v6.62.0 tag those three turned out to be exactly the `aws_alb`, `aws_alb_listener` and
`aws_alb_target_group` data sources, i.e. the same alias story as the resources, so they are covered
by the alias table and `manualAssignments` is empty on all three surfaces.

The mechanism still exists and is exercised by the miner (`manualAssignments.<surface>.<name>` →
slug, validated against the slug table), because the next provider bump is likely to need it.

## Subcategories declared but unused

`website/allowed-subcategories.txt` lists 281 subcategories at this tag; 257 are actually used by a
doc file, so **24 are declared with no resource, data source or ephemeral resource behind them**.
They produce no group. Informational only — they are the upstream team's placeholders for services
that exist in the provider's internal service list but have no published surface yet:

```
Account Access                       Agent Registry
Application Migration (Mgn)          Application Signals
Connect Cases                        DevOps Agent
Directory Service Data               Elastic VMware
Elemental MediaConnect               Elemental MediaPackage VOD
Glue DataBrew                        Ground Station
HealthLake                           Interconnect
IoT Greengrass                       Launch Wizard
MWAA (Managed Workflows for Apache Airflow) Serverless
Multi-party Approval                 Parallel Computing Service
Private CA Connector for Active Directory
RDS Data                             Systems Manager for SAP
Tax Settings                         Well-Architected Tool
```

Zero subcategories are used *without* being allowed, so upstream's own lint is green and our slug
table is derived entirely from vetted values.

## Out of scope for M0 (M1 decision items)

The schema dump has four more top-level surfaces that `groups.json` deliberately does **not** cover
in this slice. Each needs its own decision in M1 before it can be generated:

| surface | count | why deferred |
| --- | ---: | --- |
| `list_resource_schemas` | 210 | Terraform's new list-resource surface. Documented under `website/docs/list-resources/`, so the same frontmatter join would work — but whether cdktn emits bindings for list resources at all is unsettled upstream. |
| `action_schemas` | 12 | Terraform actions; no construct shape decided yet. Docs live in `website/docs/actions/`. |
| `functions` | 4 | Provider functions are not per-resource and do not belong to a service group in any obvious way; they are a provider-level surface. |
| `resource_identity_schemas` | 501 | Not a separate API surface — identity metadata attached to resources we already group. Nothing to group. |

If M1 decides to generate any of them, they join the *existing* group of their service (the doc
directories carry the same `subcategory:` frontmatter), which means adding a fourth/fifth array to
each group rather than new groups — a `groups.json` schema change, gated by `check-groups`.

Also explicitly out of scope for this repo entirely (it is `cdktn-awscc`'s bridge concern, not
ours): any CloudFormation property/attribute maps.

## Notes for the next provider bump

`groups.json` is the source of truth; the miner only *proposes*. On a provider bump:

1. update `mine-config.json` (`providerTag`, `pinnedProviderVersion`), `schemas/PROVIDER_VERSION`
   and `schemas/main.tf`, refresh the schema dump;
2. `pnpm mine` (add `--refresh` to force a fresh clone) and read the diff, not just the summary;
3. anything the miner reports as unmapped is a curation decision — an alias, or a
   `manualAssignments` entry, never a misc bucket;
4. a subcategory rename upstream shows up as a *group move* for every one of its resources. That is
   a breaking change for consumers; record it in `docs/group-moves.md` (which is what unblocks
   gate B) and consider a `slugOverrides` entry pinning the old slug to the new title instead, if
   the rename is cosmetic.

## M1 curation

Decisions taken while building the generator — group selection, the naming choices the spec left
open, what the awscc2cdk fork dropped and what it had to put back, and what is deferred to M2 —
live in [`m1-generator.md`](./m1-generator.md), so this file stays the M0 record.
