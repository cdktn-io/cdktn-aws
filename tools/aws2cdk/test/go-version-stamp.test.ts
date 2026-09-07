// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The version a packed Go module declares, end to end.
 *
 * Release 0.1.0 published npm, PyPI, Maven, NuGet and the GitHub Release, then `publib-golang`
 * refused the fleet: "Repo version (0.1.0) conflicts with module version (0.0.0\n)". Two facts made
 * that possible and both are asserted here on a real `jsii` + `jsii-pacmak --targets go` build of
 * the smallest group in the fleet (~2 s):
 *
 *   1. the packed version comes from `generated/<group>/package.json`, which is committed at 0.0.0
 *      and must stay there — so `scripts/build-fleet.mjs` stamps it for the build and restores it;
 *   2. publib compares the `version` file's RAW bytes to `$VERSION`, and pacmak writes a trailing
 *      newline — so the packed file must be the version and nothing else.
 *
 * This is the gate the dry run did not have: a fleet built at X has every module's `version` file
 * equal to exactly X.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
/** The smallest group in the fleet — one resource, so this is a build and not a wait. */
const GROUP = "swf";
const MODULE = "swf";
const moduleDir = path.join(repoRoot, "generated", GROUP, "dist", "go", MODULE);
const manifestFile = path.join(repoRoot, "generated", GROUP, "package.json");

const repoVersion = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf-8")).version as string;
const committedVersion = JSON.parse(fs.readFileSync(manifestFile, "utf-8")).version as string;

function buildFleet(version?: string): void {
  execFileSync(process.execPath, [path.join(repoRoot, "scripts", "build-fleet.mjs"), GROUP], {
    cwd: repoRoot,
    encoding: "utf-8",
    env: version ? { ...process.env, PACKAGE_VERSION: version } : process.env,
  });
}

describe("packed Go module version", () => {
  // Major 0, deliberately: from major 2 on, a Go module path gains a `/vN` suffix, which
  // build-fleet's go.mod assertion rejects against the manifest's declared module name. That is a
  // real constraint on a future 2.0.0 (docs/m4-publishing.md), not something to fake past here.
  const stamped = "0.9.9";

  beforeAll(() => {
    buildFleet(stamped);
  }, 300000);

  afterAll(() => {
    // Leave the tree as an ordinary build would: at the repository's own version, not the stamp.
    buildFleet();
  }, 300000);

  it("is exactly PACKAGE_VERSION — no trailing newline, which publib compares byte-for-byte", () => {
    expect(fs.readFileSync(path.join(moduleDir, "version"), "utf-8")).toBe(stamped);
  });

  it("reaches the embedded jsii tarball too, not just the version file", () => {
    // The tarball's name carries the version and `jsii/jsii.go` embeds it by that name, so a module
    // whose `version` file was patched after packing would still ship a 0.0.0 assembly.
    expect(fs.readdirSync(path.join(moduleDir, "jsii")).sort()).toEqual([
      `cdktn-aws-${GROUP}-${stamped}.tgz`,
      "jsii.go",
    ]);
  });

  it("leaves the committed manifest untouched — generate determinism depends on it", () => {
    expect(JSON.parse(fs.readFileSync(manifestFile, "utf-8")).version).toBe(committedVersion);
    expect(committedVersion).toBe("0.0.0");
  });

  it("defaults to this repository's own semver when PACKAGE_VERSION is unset", () => {
    buildFleet();
    expect(fs.readFileSync(path.join(moduleDir, "version"), "utf-8")).toBe(repoVersion);
  }, 300000);
});
