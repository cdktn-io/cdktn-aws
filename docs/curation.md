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
| slug overrides | 14 | 8 for the four collision pairs, 6 for slug shortening |
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

## Slug shortening — six overrides beyond the collision pairs

The base rule derives the slug from upstream's *prose* subcategory, which is sometimes a full
service name where AWS itself uses a short code everywhere else (`aws_oam_link` lives in a group
called `cloudwatch_observability_access_manager`). The slug is the submodule name in every target
language, and in Go it is a permanent import-path segment, so it is worth fixing **before** the
first publish and not worth touching after.

### The test

A slug is renamed only when **all three** hold. If any is uncertain, the slug is left alone — an
awkward-but-honest slug costs less than a made-up abbreviation nobody can guess.

1. **It is egregiously long**: 20 characters or more. Below that there is nothing to fix.
2. **The short form is attested, not invented**: it is the terraform resource prefix used
   consistently by *every* member of the group, and/or the acronym upstream itself puts in the
   subcategory title's parentheses, and/or the AWS service code (the IAM prefix / CFN namespace,
   lowercased). We never coin an abbreviation.
3. **The result is genuinely short**: ≤ 14 characters and materially shorter than the original.
   This is what separates a service code from a mere respelling — dropping the underscores out of
   `route_53_recovery_control_config` to get `route53recoverycontrolconfig` buys nothing.

Criterion 3 also rules out *brand-prefix dropping*: `elemental_medialive` → `medialive` or
`cloudwatch_synthetics` → `synthetics` is not a shortening to a code, it is a rename to a different
name, and it would break up families that currently sort together.

### Applied

| subcategory | slug was | slug is | attestation |
| --- | --- | --- | --- |
| `CloudWatch Observability Access Manager` | `cloudwatch_observability_access_manager` (39) | `oam` | all 7 members are `aws_oam_*`; IAM prefix `oam:`; CFN `AWS::Oam` |
| `Managed Streaming for Kafka Connect` | `managed_streaming_for_kafka_connect` (35) | `mskconnect` | all 6 members are `aws_mskconnect_*`; IAM prefix `kafkaconnect:` is spelled `mskconnect` by the provider and the console |
| `Serverless Application Repository` | `serverless_application_repository` (33) | `serverlessrepo` | IAM prefix `serverlessrepo:`; CFN `AWS::ServerlessRepo`. The terraform prefix here is the *long* spelling (`aws_serverlessapplicationrepository_*`), so the service code is the attestation, not the prefix |
| `Managed Streaming for Kafka` | `managed_streaming_for_kafka` (27) | `msk` | all 16 members are `aws_msk_*`; the product is branded "Amazon MSK" |
| `DynamoDB Accelerator (DAX)` | `dynamodb_accelerator` (20) | `dax` | upstream's own title parenthetical is the acronym; all 3 members are `aws_dax_*`; IAM prefix `dax:` |
| `OpenSearch Ingestion (OSIS)` | `opensearch_ingestion` (20) | `osis` | upstream's own title parenthetical is the acronym; all 3 members are `aws_osis_*`; IAM prefix `osis:` |

The first four are the set the sweep started from; `dax` and `osis` are what the sweep of all 257
slugs added, on the strongest possible evidence — upstream writes the acronym in the title itself,
and the base rule discards it only because it sits in parentheses.

Every one of the 28 affected names is recorded in [`group-moves.md`](./group-moves.md): a group-key
rename is reported by gate B as a move of every member. None of the six touches `elb`, `lambda` or
`provider`, so the committed `generated/` tree is unaffected.

### Considered, kept

The remaining 36 slugs of 20+ characters, and why each one stays. (Slugs under 20 characters were not
candidates at all; the two notable ones are `recycle_bin` — upstream title `Recycle Bin (RBin)`,
members `aws_rbin_*`, so it would pass criterion 2 but has nothing to gain — and `documentdb`,
whose members are `aws_docdb_*`.)

| slug | short form that exists | why kept |
| --- | --- | --- |
| `payment_cryptography_control_plane` | `paymentcryptography` (19) | respelling, not a code; fails criterion 3 |
| `elemental_mediapackage_version_2` | `mediapackagev2` | brand-prefix drop; would split the `elemental_*` family |
| `route_53_recovery_control_config` | `route53recoverycontrolconfig` (28) | respelling; fails criterion 3 |
| `cloudwatch_application_insights` | `applicationinsights` (19) | respelling + brand-prefix drop |
| `cloudwatch_networkflow_monitor` | `networkflowmonitor` (18) | brand-prefix drop; `cloudwatch_*` family stays together |
| `cloudwatch_observability_admin` | `observabilityadmin` (18) | as above |
| `ssm_incident_manager_incidents` | `ssmincidents` (12) | passes 1 and 3, but `ssmincidents` is a namespace spelling (CFN `AWS::SSMIncidents`, IAM `ssm-incidents:`) rather than a code anyone says out loud, and it splits the `ssm_*` family. Borderline — revisit before first publish |
| `user_experience_customization` | `uxc` (3) | `aws_uxc_*` is consistent, but the service is brand new and `uxc` is not established anywhere a reader would recognise it. Borderline — revisit before first publish |
| `cloudwatch_internet_monitor` | `internetmonitor` (15) | brand-prefix drop |
| `route_53_recovery_readiness` | `route53recoveryreadiness` (24) | respelling |
| `service_catalog_appregistry` | `servicecatalogappregistry` (25) | respelling |
| `user_notifications_contacts` | `notificationscontacts` (21) | respelling; fails criterion 3 |
| `cloudwatch_network_monitor` | `networkmonitor` (14) | brand-prefix drop; would sit confusingly next to `network_manager`/`network_firewall` |
| `chime_sdk_media_pipelines` | `chimesdkmediapipelines` (22) | respelling |
| `connect_customer_profiles` | `customerprofiles` (16) | brand-prefix drop; loses the Connect family |
| `application_auto_scaling` | `appautoscaling` (14) | `app` for `application` is the provider's own contraction, not an AWS service code (CFN is `AWS::ApplicationAutoScaling`); the long form is unambiguous next to `auto_scaling` / `auto_scaling_plans` |
| `cloudfront_keyvaluestore` | `cloudfrontkeyvaluestore` (23) | respelling |
| `cloudwatch_evidently` | `evidently` (9) | brand-prefix drop (family) |
| `cloudwatch_synthetics` | `synthetics` (10) | brand-prefix drop (family) |
| `codestar_connections` | `codestarconnections` (19) | respelling |
| `codestar_notifications` | `codestarnotifications` (21) | respelling |
| `cost_and_usage_report` | `cur` (3) | `aws_cur_*` and IAM `cur:` both attest it, but `cur` reads as an English word fragment and the group is a single resource — the clarity loss outweighs 18 characters. Borderline |
| `cost_optimization_hub` | `costoptimizationhub` (19) | respelling |
| `elemental_mediaconvert` | `mediaconvert` | brand-prefix drop (family) |
| `elemental_mediapackage` | `mediapackage` | brand-prefix drop (family) |
| `elemental_mediastore` | `mediastore` | brand-prefix drop (family) |
| `end_user_messaging_sms` | `pinpointsmsvoicev2` (18) | the terraform prefix is the *old* product name; following it would pin us to a deprecated brand |
| `eventbridge_scheduler` | `scheduler` (9) | brand-prefix drop, and a bare `scheduler` is meaninglessly generic |
| `kinesis_analytics_v2` | `kinesisanalyticsv2` (18) | respelling |
| `mainframe_modernization` | `m2` (2) | `m2` is the real service code (CFN `AWS::M2`, `aws_m2_*`), but a two-letter slug is unguessable and unsearchable; AWS's own UI never says "M2". Deliberately kept long |
| `opensearch_serverless` | `opensearchserverless` (20) | respelling |
| `resource_groups_tagging` | `resourcegroupstaggingapi` (24) | longer, not shorter |
| `timestream_for_influxdb` | `timestreaminfluxdb` (18) | respelling |
| `verified_permissions` | `verifiedpermissions` (19) | respelling |
| `waf_classic_regional` | `wafregional` (11) | drops "classic", which is the load-bearing word distinguishing it from `wafv2` |
| `web_services_budgets` | `budgets` (7) | tempting — the title is just "AWS Budgets" with the brand mangled — but this is a brand-prefix drop, not a service code, and the base rule's output is at least traceable to upstream. Borderline; the cleaner fix is upstream renaming the subcategory |

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

The step-by-step procedure, including what to do when each gate fails, lives in
[`provider-bump-runbook.md`](./provider-bump-runbook.md). In outline:

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

## `stripPrefixes` (M6)

Every group carries a `stripPrefixes` list: the service-name tokens the group title already conveys,
removed from a member's terraform type before it becomes a class name (`aws_s3_bucket` in `s3` →
`TfBucket`). The rule, the algorithm and the empty-stem back-off are in
[`m6-tf-naming.md`](./m6-tf-naming.md); this section is the curation record.

`tools/mine-groups` proposes one list per group — the slug when it actually prefixes a member,
otherwise the shortest leading 1–3-token prefix with maximal member coverage — and
`mine-config.json#stripPrefixOverrides` overrules it, exactly the way `slugOverrides` overrules a
derived slug. `groups.json` stays the source of truth; `pnpm mine` must propose no diff against it.

The curation rule: **strip exactly the service-name tokens the group title already conveys, never a
token that names the resource itself.** Nine of the 257 proposals broke it.

| slug | proposed | curated | why |
| --- | --- | --- | --- |
| `cloud_map` | `service` | `service_discovery` | the service is "service discovery"; the proposal split it and left `aws_service_discovery_http_namespace` as `TfDiscoveryHttpNamespace` |
| `cloudhsm` | `cloudhsm` | `cloudhsm`, `cloudhsm_v2` | `v2` is part of the service's terraform prefix, not of the resource: `TfV2Cluster` → `TfCluster` |
| `cloudwatch_logs` | `cloudwatch` | `cloudwatch`, `cloudwatch_log` | the group is CloudWatch **Logs**: `aws_cloudwatch_log_group` → `TfGroup`, while the one non-`log` member (`aws_cloudwatch_query_definition`) still sheds `cloudwatch` |
| `elemental_mediaconvert` | `media` | `media_convert` | `convert` names the service, not the queue: `TfConvertQueue` → `TfQueue` |
| `elemental_mediapackage` | `media` | `media_package` | same, for MediaPackage |
| `elemental_mediapackage_version_2` | `media` | `media_packagev2` | same, for MediaPackage v2 — the version token travels with the service name |
| `elemental_mediastore` | `media` | `media_store` | same, for MediaStore |
| `eventbridge` | `cloudwatch` | `cloudwatch_event` | EventBridge's types are still spelled `aws_cloudwatch_event_*`: `TfEventApiDestination` → `TfApiDestination` |
| `meta_data_sources` | `service` | `arn` | this group is the provider's own meta data sources (`aws_arn`, `aws_partition`, `aws_region`…) and shares no service name at all. `arn` matches exactly one member *exactly*, so the empty-stem back-off makes the list inert and every name is kept whole — where the proposed `service` would have turned `aws_service_principal` into `TfDataPrincipal` |

Eight groups the M6 brief expected to need an override did not, because the mechanical proposal
already produces the curated value: `auto_scaling_plans`, `chime_sdk_media_pipelines`,
`codeguru_profiler`, `codeguru_reviewer`, `codestar_notifications`, `cost_and_usage_report`
(`cur`), `elb_classic` (`elb`), `lambda_core` and `resilience_hub`. An override equal to its
proposal is dead configuration, so none was written.

One deviation from the brief: `elb` is `[lb]`, not `[elb, lb]`. The `elb` group holds only
`aws_lb_*` (the `aws_elb*` types are in `elb_classic`), so listing `elb` would fail gate C's
"every prefix matches a member" check. The class names the brief specifies are unaffected —
`aws_lb` → `TfLb`, `aws_lb_listener` → `TfListener`, `aws_alb` → `TfAlb`.
