// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/models/index.ts — see tools/aws2cdk/README.md.
// provider-function-model is not re-exported: M1 does not emit the provider's four
// provider-defined functions (`ProviderFunctionsEmitter`, a second top-level class the provider
// class memoizes). See docs/curation.md, "Provider-defined functions" — an M2 item.
export * from "./attribute-model";
export * from "./attribute-type-model";
export * from "./resource-model";
export * from "./scope";
export * from "./struct";
