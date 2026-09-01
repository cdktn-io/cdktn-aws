// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The one emission point for `monolith/package.json` — the manifest of the single published
 * jsii assembly, `@cdktn/aws`.
 *
 * It lives here rather than inline in `scripts/build-monolith.mjs` for one reason: the manifest
 * carries decisions that are unrepairable after the first publish (the four registry names, and
 * the *absence* of a Go target), so they have to be assertable without a 40-second jsii compile
 * and a 12 GB heap. `tools/aws2cdk/test/monolith-manifest.test.ts` calls the CLI below.
 *
 * **There is deliberately no `targets.go` block.** The Go distribution comes exclusively from the
 * per-group fleet (258 sibling modules in cdktn-aws-go, `scripts/build-fleet.mjs` →
 * `jsii-pacmak --targets go`), because the monolith does not fit: one module carrying all 258
 * groups is far past `x/mod/zip`'s 500 MiB per-module source cap, so `go mod download` would
 * refuse it and the module path would be spent permanently (docs/m3-go.md, docs/m4-publishing.md).
 * A `targets.go` block here would be a loaded gun: `jsii-pacmak --targets go` on `monolith/` is
 * one command away from publishing a module that can never resolve. The per-group manifests
 * (`tools/aws2cdk/src/manifest.ts`) keep their Go targets — they are the ones that ship.
 *
 * Usage (the test's entry point; the build imports `monolithManifest` directly):
 *   node scripts/monolith-manifest.mjs --groups lambda,s3 --version 0.1.0 --provider-version 6.62.0
 */

/** The four targets a published `@cdktn/aws` has, and the one it must never have. */
export const MONOLITH_TARGETS = ["python", "java", "dotnet"];

/**
 * @param {{ groups: string[], version: string, providerVersion: string }} opts
 * @returns {object} the exact object written to `monolith/package.json`
 */
export function monolithManifest({ groups, version, providerVersion }) {
  return {
    name: "@cdktn/aws",
    version,
    description: `cdk-terrain bindings for terraform-provider-aws ${providerVersion}, in ${groups.length} service submodules`,
    license: "MPL-2.0",
    // Not `private: true`: this manifest ends up inside the npm tarball jsii-pacmak's js target
    // produces, and `npm publish` refuses a tarball marked private. The guard against an
    // accidental publish is that `monolith/` is generated and gitignored and that nothing but
    // release.yml ever runs `npm publish`, not a flag in an emitted file.
    private: false,
    author: { name: "cdktn-io", organization: true },
    repository: { type: "git", url: "https://github.com/cdktn-io/cdktn-aws.git" },
    stability: "experimental",
    main: "lib/index.js",
    types: "lib/index.d.ts",
    jsii: {
      outdir: "dist",
      versionFormat: "short",
      tsc: { outDir: "lib", rootDir: "src" },
      targets: {
        // Target naming follows @cdktn/provider-aws's own conventions verbatim, so the two are
        // directly comparable on every registry (its distName is "cdktn-provider-aws", module
        // "cdktn_provider_aws", java "io.cdktn.providers.aws"). These four strings are permanent
        // from the first publish onward — reviewed and signed off before v0.1.0.
        python: { distName: "cdktn-aws", module: "cdktn_aws" },
        java: {
          package: "io.cdktn.aws",
          maven: { groupId: "io.cdktn", artifactId: "cdktn-aws" },
        },
        dotnet: { namespace: "Io.Cdktn.Aws", packageId: "Io.Cdktn.Aws" },
        // NO `go:` HERE. See the file header. The fleet is the only source of Go.
      },
    },
    peerDependencies: { cdktn: "^0.24.0", constructs: "^10.7.0" },
    devDependencies: { cdktn: "0.24.0", constructs: "10.7.0" },
  };
}

// ------------------------------------------------------------------------------- CLI (for tests)

if (process.argv[1] && process.argv[1].endsWith("monolith-manifest.mjs")) {
  const arg = (name, fallback) => {
    const i = process.argv.indexOf(`--${name}`);
    return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : fallback;
  };
  const groups = arg("groups", "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  process.stdout.write(
    JSON.stringify(
      monolithManifest({
        groups,
        version: arg("version", "0.0.0"),
        providerVersion: arg("provider-version", "0.0.0"),
      }),
      null,
      2,
    ) + "\n",
  );
}
