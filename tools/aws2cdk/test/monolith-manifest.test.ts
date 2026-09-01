// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M4 acceptance — the manifest of the ONE published assembly, `@cdktn/aws`.
 *
 * The point of this file is the *absence* of a Go target. `monolith/package.json` is generated and
 * gitignored, so nothing else in the repository can hold that absence still: a stray
 * `go: { moduleName: ... }` block would be invisible in review, and the first
 * `jsii-pacmak --targets go` run against the monolith would publish
 * `github.com/cdktn-io/cdktn-aws-go` as a single module — one module carrying all 258 groups, far
 * past `x/mod/zip`'s 500 MiB per-module source cap, so `go mod download` refuses it and the module
 * path is spent permanently (docs/m3-go.md, docs/m4-publishing.md §1(a)). Go comes from the fleet
 * and only from the fleet.
 *
 * The manifest is read out of `scripts/monolith-manifest.mjs` (the single emission point, imported
 * by `scripts/build-monolith.mjs`) through its CLI rather than by importing it: the build scripts
 * are ESM `.mjs` and this suite is CommonJS ts-jest, and spawning the real file is a stronger
 * assertion than a duplicated object anyway.
 *
 * The per-group manifests' Go targets — the ones that DO ship — are asserted for all 258 in
 * `manifests.test.ts` ("jsii go moduleName is the one repository" / "jsii go packageName is aws +
 * slug with underscores stripped"); one cross-check is repeated here so the two halves of the
 * decision are readable in one place.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const script = path.join(repoRoot, "scripts", "monolith-manifest.mjs");

function manifest(version = "0.1.0"): any {
  const out = execFileSync(
    process.execPath,
    [script, "--groups", "lambda,s3,provider", "--version", version, "--provider-version", "6.62.0"],
    { encoding: "utf-8" },
  );
  return JSON.parse(out);
}

describe("the monolith manifest", () => {
  const m = manifest();

  it("is @cdktn/aws", () => {
    expect(m.name).toBe("@cdktn/aws");
  });

  it("declares exactly python, java and dotnet as jsii targets", () => {
    expect(Object.keys(m.jsii.targets).sort()).toEqual(["dotnet", "java", "python"]);
  });

  it("declares NO go target — the fleet is the only source of Go", () => {
    expect(m.jsii.targets.go).toBeUndefined();
    // Belt and braces: no nesting anywhere in the manifest mentions the Go repository.
    expect(JSON.stringify(m)).not.toContain("cdktn-aws-go");
  });

  it("keeps the four user-approved registry names byte-for-byte", () => {
    // Permanent from the first publish onward; reviewed and signed off before v0.1.0. Changing any
    // one of these is a rename on a public registry, not an edit.
    expect(m.jsii.targets.python).toEqual({ distName: "cdktn-aws", module: "cdktn_aws" });
    expect(m.jsii.targets.java).toEqual({
      package: "io.cdktn.aws",
      maven: { groupId: "io.cdktn", artifactId: "cdktn-aws" },
    });
    expect(m.jsii.targets.dotnet).toEqual({ namespace: "Io.Cdktn.Aws", packageId: "Io.Cdktn.Aws" });
  });

  it("is not private — npm publish refuses a tarball marked private", () => {
    expect(m.private).toBe(false);
  });

  it("takes the version it is given, and it is not the 0.0.0 placeholder by default", () => {
    expect(manifest("1.2.3-rc.1").version).toBe("1.2.3-rc.1");
    // The default the build uses is the root manifest's own semver (the fleet scheme).
    const root = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf-8"));
    expect(root.version).toMatch(/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/);
    expect(root.version).not.toBe("0.0.0");
  });

  it("mirrors every peerDependency in devDependencies at an exact version (jsii JSII6)", () => {
    for (const [dep, range] of Object.entries(m.peerDependencies as Record<string, string>)) {
      expect(m.devDependencies[dep]).toMatch(/^\d+\.\d+\.\d+$/);
      expect(range).toBe(`^${m.devDependencies[dep]}`);
    }
  });
});

describe("the .npmignore emitted beside it", () => {
  // `@cdktn/aws@0.1.0` unpacked to 7,990 files / 550,672,898 B: the entire monolith `src/` tree
  // alongside `lib/`, because `monolith/` had no allowlist. jsii-pacmak writes one itself — but only
  // when the outdir comes from package.json, and `scripts/package.mjs` passes `--outdir`. So the
  // file is emitted by hand, and `monolith/` is gitignored, which leaves this the only place the
  // rule can be asserted without a 40-second jsii compile.
  const npmignore = execFileSync(process.execPath, [script, "--npmignore"], { encoding: "utf-8" });
  const lines = npmignore.split("\n").map((l) => l.trim());

  it("excludes TypeScript sources and the src/ tree", () => {
    expect(lines).toContain("*.ts");
    expect(lines).toContain("/src/");
  });

  it("excludes build config that no consumer can use", () => {
    expect(lines).toContain("tsconfig.json");
    expect(lines).toContain("*.tsbuildinfo");
  });

  it("keeps the compiled output, the declarations and the assembly", () => {
    expect(lines).toContain("!*.js");
    expect(lines).toContain("!*.d.ts");
    expect(lines).toContain("!.jsii");
  });

  it("never excludes the licence or the attribution map — MPL-2.0 §3.1", () => {
    for (const required of ["LICENSE", "NOTICE", "README.md", "package.json"]) {
      expect(lines).not.toContain(required);
    }
  });
});

describe("the per-group manifests still carry their Go targets", () => {
  // The other half of the same decision (all 258 asserted in manifests.test.ts).
  it("generated/lambda ships to cdktn-aws-go", () => {
    const p = path.join(repoRoot, "generated", "lambda", "package.json");
    const group = JSON.parse(fs.readFileSync(p, "utf-8"));
    expect(group.jsii.targets.go).toEqual({
      moduleName: "github.com/cdktn-io/cdktn-aws-go",
      packageName: "awslambda",
    });
  });
});
