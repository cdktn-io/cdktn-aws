# Vendored sources

`src/vendored/cdktn/**` is the cdk-terrain provider generator, copied verbatim from
`@cdktn/provider-generator`. It is the *classic* cdktn pipeline: the one that produces
`@cdktn/provider-*` output, with full support for providers, managed resources, data sources,
ephemeral resources, provider-defined functions and write-only attributes.

**Do not edit anything under `src/vendored/`.** The adapted, grouped layer lives in
`src/grouped/`; every file there names the vendored file it was adapted from. `bin/baseline.ts`
drives this vendored tree unmodified, which is both the fork proof (M1 step 1) and the reference
side of the runtime-contract diff (M1 acceptance E).

Copied by way of `cdktn-io/cdktn-awscc`'s own vendored copy at
`tools/awscc2cdk/src/vendored/cdktn`, commit `607943cf794d752a3d4f132bd6a25aa5bb0c0be3`
(2026-09-01), which is byte-identical to the cdk-terrain origins below.

`cdktf`-named symbols inherited from cdk-terrain are deliberate migration-compat names and are
never renamed.

## Adaptations made beyond copying

Exactly one, inherited from the awscc copy and mechanical:

* `models/struct.ts`, `models/attribute-type-model.ts`, `models/supported-stored-classes.ts`,
  `emitter/struct-emitter.ts`: the import of the package-local `util.ts`
  (`downcaseFirst`/`uppercaseFirst`) was `../../../util` in cdk-terrain (three directories up from
  `src/get/generator/{models,emitter}`); this tree is two directories shallower
  (`src/vendored/cdktn/{models,emitter}` with `util.ts` alongside), so the import became
  `../util`.

## Not vendored

`@aws-cdk/aws-service-spec`, `@aws-cdk/service-spec-types` and the whole `spec2cdk` set
(`naming/conventions.ts`, `module-topology.ts`, `util/jsii.ts`) plus `scope-map.json`, all of
which awscc2cdk needed to recover CloudFormation definition names and aws-cdk-lib module scopes.
cdktn-aws groups from `groups.json` and names nested types from the terraform block/attribute
names, so none of it has a job here — see `docs/curation.md`, "What the awscc2cdk fork dropped".

## Origins

All rows: `packages/@cdktn/provider-generator` in
[`open-constructs/cdk-terrain`](https://github.com/open-constructs/cdk-terrain), commit
`358edc7c39b0b380ba89fd31881f0577fe9b6214`.

| vendored | origin path (below that package) |
| --- | --- |
| src/vendored/cdktn/resource-parser.ts | src/get/generator/resource-parser.ts |
| src/vendored/cdktn/provider-generator.ts | src/get/generator/provider-generator.ts |
| src/vendored/cdktn/custom-defaults.ts | src/get/generator/custom-defaults.ts |
| src/vendored/cdktn/loop-detection.ts | src/get/generator/loop-detection.ts |
| src/vendored/cdktn/sanitized-comments.ts | src/get/generator/sanitized-comments.ts |
| src/vendored/cdktn/skipped-attributes.ts | src/get/generator/skipped-attributes.ts |
| src/vendored/cdktn/util.ts | src/util.ts |
| src/vendored/cdktn/models/attribute-model.ts | src/get/generator/models/attribute-model.ts |
| src/vendored/cdktn/models/attribute-type-model.ts | src/get/generator/models/attribute-type-model.ts |
| src/vendored/cdktn/models/index.ts | src/get/generator/models/index.ts |
| src/vendored/cdktn/models/provider-function-model.ts | src/get/generator/models/provider-function-model.ts |
| src/vendored/cdktn/models/resource-model.ts | src/get/generator/models/resource-model.ts |
| src/vendored/cdktn/models/scope.ts | src/get/generator/models/scope.ts |
| src/vendored/cdktn/models/struct.ts | src/get/generator/models/struct.ts |
| src/vendored/cdktn/models/supported-stored-classes.ts | src/get/generator/models/supported-stored-classes.ts |
| src/vendored/cdktn/emitter/attributes-emitter.ts | src/get/generator/emitter/attributes-emitter.ts |
| src/vendored/cdktn/emitter/index.ts | src/get/generator/emitter/index.ts |
| src/vendored/cdktn/emitter/provider-functions-emitter.ts | src/get/generator/emitter/provider-functions-emitter.ts |
| src/vendored/cdktn/emitter/resource-emitter.ts | src/get/generator/emitter/resource-emitter.ts |
| src/vendored/cdktn/emitter/struct-emitter.ts | src/get/generator/emitter/struct-emitter.ts |
