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

## v6.62.0 — slug shortening to established service codes

Not a provider bump: the provider pin is unchanged. Six group **keys** were renamed to the
established AWS service code for the service (`docs/curation.md`, "Slug shortening"). A group-key
rename is indistinguishable from a move as far as gate B is concerned — it reports **every member
of the group** as `old_slug -> new_slug`, on every surface the member appears on — so all 28 names
below are listed. Nothing changed group in the sense of "was regrouped": the members are exactly
the same, the box they sit in has a shorter name.

Free of consumer cost *this time only*: no `@cdktn/aws-*` package has been published or tagged yet,
so no import path exists to break. After the first release these renames become breaking (a new Go
module path and tag prefix, a new jsii submodule) and must not be done casually — see
[`provider-bump-runbook.md`](./provider-bump-runbook.md) §(e).

- `aws_dax_cluster`: `dynamodb_accelerator` -> `dax`
- `aws_dax_parameter_group`: `dynamodb_accelerator` -> `dax`
- `aws_dax_subnet_group`: `dynamodb_accelerator` -> `dax`
- `aws_msk_bootstrap_brokers`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_broker_nodes`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_cluster`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_cluster_policy`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_configuration`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_kafka_version`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_replicator`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_scram_secret_association`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_serverless_cluster`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_single_scram_secret_association`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_topic`: `managed_streaming_for_kafka` -> `msk`
- `aws_msk_vpc_connection`: `managed_streaming_for_kafka` -> `msk`
- `aws_mskconnect_connector`: `managed_streaming_for_kafka_connect` -> `mskconnect`
- `aws_mskconnect_custom_plugin`: `managed_streaming_for_kafka_connect` -> `mskconnect`
- `aws_mskconnect_worker_configuration`: `managed_streaming_for_kafka_connect` -> `mskconnect`
- `aws_oam_link`: `cloudwatch_observability_access_manager` -> `oam`
- `aws_oam_links`: `cloudwatch_observability_access_manager` -> `oam`
- `aws_oam_sink`: `cloudwatch_observability_access_manager` -> `oam`
- `aws_oam_sink_policy`: `cloudwatch_observability_access_manager` -> `oam`
- `aws_oam_sinks`: `cloudwatch_observability_access_manager` -> `oam`
- `aws_osis_pipeline`: `opensearch_ingestion` -> `osis`
- `aws_osis_pipeline_endpoint`: `opensearch_ingestion` -> `osis`
- `aws_osis_resource_policy`: `opensearch_ingestion` -> `osis`
- `aws_serverlessapplicationrepository_application`: `serverless_application_repository` -> `serverlessrepo`
- `aws_serverlessapplicationrepository_cloudformation_stack`: `serverless_application_repository` -> `serverlessrepo`
