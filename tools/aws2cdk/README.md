# aws2cdk

The cdktn-aws binding generator: reads the pinned `terraform-provider-aws` schema plus the
repo-root `groups.json` and emits one **standalone jsii package per service group**.

```
pnpm generate                     # all groups selected in bin/generate.ts's default set
pnpm --filter @cdktn-aws/aws2cdk exec tsx bin/generate.ts <outDir> <group> [group ...]
pnpm --filter @cdktn-aws/aws2cdk exec tsx bin/baseline.ts <outDir> [resource ...]
```

## Layout

| path | what it is |
| --- | --- |
| `src/vendored/cdktn/**` | the cdk-terrain provider generator, **verbatim**. Never edit. See `src/vendored/VENDORED.md`. |
| `src/grouped/**` | the adapted layer: same models/emitters, re-pointed at per-resource namespaces. Every file names its vendored origin. |
| `src/naming.ts` | class/interface/nested-type names. Pure, order-independent. `Aws` + the group-stripped stem — docs/m6-tf-naming.md, docs/v030-naming.md. |
| `src/naming-map.ts` | the repo-root `naming-map.json`: terraform type -> new name + `@cdktn/provider-aws` name, for the migration tool. |
| `src/classic-naming.ts` | the `@cdktn/provider-aws` identity of a terraform type, read off the vendored parser's own models. |
| `src/groups.ts` | `groups.json` loading, alias resolution, group slug -> Go package name. |
| `src/manifest.ts` | the per-group standalone jsii `package.json` / `README.md` / `tsconfig.json`. |
| `src/generate.ts` | the orchestrator. |
| `bin/baseline.ts` | the unmodified vendored pipeline, for the fork proof and the runtime-contract diff. |

## Fork provenance

The grouped machinery is a fork of `cdktn-io/cdktn-awscc`'s `tools/awscc2cdk` at commit
**`607943cf794d752a3d4f132bd6a25aa5bb0c0be3`** (2026-09-01; the grouped sources themselves were
last touched there in `7f149a551c69274e6b4d2baf14eafc32f4d69f8f`). Files taken from it:

| this repo | awscc2cdk origin | change |
| --- | --- | --- |
| `src/vendored/cdktn/**` | `src/vendored/cdktn/**` | verbatim |
| `src/grouped/namespace-context.ts` | `src/grouped/namespace-context.ts` | code verbatim; doc-comment examples retargeted from `CcVPC`/`CcVPCProps` to `AwsVpc`/`AwsVpcConfig`, SPDX header added |
| `src/grouped/loop-detection.ts` | `src/grouped/loop-detection.ts` | verbatim |
| `src/grouped/sanitized-comments.ts` | `src/grouped/sanitized-comments.ts` | verbatim |
| `src/grouped/util.ts` | `src/grouped/util.ts` | verbatim |
| `src/grouped/models/*` | `src/grouped/models/*` | CFN name-map fields dropped; provider / data-source / ephemeral-resource support restored from the vendored `ResourceModel` |
| `src/grouped/emitter/*` | `src/grouped/emitter/*` | `CFN_PROPERTY_NAME_MAP` / `CFN_ATTRIBUTE_NAME_MAP` emission dropped; provider / data-source / ephemeral-resource / write-only branches restored from the vendored emitters |
| `src/grouped/resource-parser.ts` | `src/grouped/resource-parser.ts` | provider-schema parsing restored (the awscc fork was managed-resources-only) |
| `src/naming.ts` | `src/naming.ts` | `propertyTypeNamesForResource`'s deterministic collision algorithm kept verbatim; every CFN-specific rule (definition-name recovery, `dedupeDefinitionNames`, `moduleNameFor`) removed. awscc's `Cc` prefix has an analogue here — `Aws`, over a stem the group's `stripPrefixes` decides |

**Not** forked, and deliberately absent: `cfn-map.ts`, `grouped/cfn-recovery.ts`,
`grouped/cfn-property-map.ts`, `grouped/cfn-attribute-map.ts`, `scope-map.ts`,
`vendored/scope-map.json`, `vendored/spec2cdk/**`, `grouped/jsiirc.ts`, and the
`@aws-cdk/aws-service-spec` / `@aws-cdk/service-spec-types` dependencies. cdktn-aws carries no
CloudFormation property or attribute map; its only consumer contract is the classic cdktn runtime.
