// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The one place that knows what version the FLEET is built at, and what a Go module's `version`
 * file has to contain for `publib-golang` to accept it.
 *
 * Why this file exists at all: `generated/<group>/package.json` is committed at `0.0.0` and stays
 * there (its bytes are hashed into `generated/hashes.json`, and `pnpm generate` must leave the tree
 * clean). But `jsii-pacmak --targets go` takes the module version from that manifest — via the
 * `.jsii` assembly jsii compiled from it — and writes it into three places in the packed module:
 * `version`, the embedded `jsii/<name>-<version>.tgz`, and the reference to that tarball in
 * `jsii/jsii.go`. So the release version has to be stamped into the manifest *before* the compile
 * and taken back out afterwards; nothing downstream can repair a module packed at 0.0.0.
 *
 * The first real release (run 33531108440) failed exactly here: five registries published 0.1.0 and
 * `publib-golang` refused the fleet with "Repo version (0.1.0) conflicts with module version
 * (0.0.0\n)".
 *
 * The trailing newline in that message is the second half of the bug. `publib`'s
 * `GoReleaser.extractVersion` compares the file's RAW contents against `$VERSION` — no trim — and
 * uses the result to build the tag name. pacmak writes `0.0.0\n` (`VersionFile` emits a `code.line`),
 * so a `version` file with a newline either conflicts with `$VERSION` or, if `$VERSION` is unset,
 * produces a tag called `awsswf/v0.1.0\n`. Hence `writeGoVersionFile`: exactly the version, no
 * newline, which is the only content that both matches `$VERSION` and tags correctly.
 */
import { readFileSync, writeFileSync } from "node:fs";
import * as path from "node:path";

/** Same shape release.yml validates its dispatch input against. */
export const SEMVER = /^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$/;

/** The name of the file publib reads out of every module directory. */
export const GO_VERSION_FILE = "version";

/**
 * The version the fleet is built at: `PACKAGE_VERSION` if set, else this repository's own semver
 * from the root `package.json` — the same rule `scripts/build-monolith.mjs` follows, so the
 * monolith and the 258 Go modules cannot be built at two different numbers by accident.
 */
export function fleetVersion(repoRoot, env = process.env) {
  const fromEnv = env.PACKAGE_VERSION;
  const version =
    fromEnv ?? JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8")).version;
  if (typeof version !== "string" || !SEMVER.test(version)) {
    throw new Error(
      `invalid fleet version ${JSON.stringify(version)} from ${fromEnv ? "PACKAGE_VERSION" : "package.json"} ` +
        "(expected MAJOR.MINOR.PATCH[-prerelease], no leading v)",
    );
  }
  return version;
}

/**
 * Set `version` in each of the given package directories' manifests, and return the function that
 * puts the original bytes back — byte-for-byte, so a stamped build leaves `git status` clean.
 *
 * The caller must run the restore in a `finally` AND on process exit: pacmak reads the manifest
 * (it `npm pack`s the package to embed), so the stamp has to outlive the compile phase, and a
 * crash between the two must not leave 258 dirty manifests behind.
 */
export function stampManifests(packageDirs, version) {
  const originals = new Map();
  try {
    for (const dir of packageDirs) {
      const file = path.join(dir, "package.json");
      const before = readFileSync(file, "utf8");
      const manifest = JSON.parse(before);
      if (manifest.version === version) continue;
      originals.set(file, before);
      manifest.version = version;
      // The generator writes these manifests with 2-space indent and a trailing newline
      // (tools/aws2cdk/src/manifest.ts); restoring is byte-exact anyway, but a stamped tree that
      // differs only in `version` keeps `git diff` readable while a build is in flight.
      writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
    }
  } catch (err) {
    // A throw partway through (unreadable manifest, full disk) would otherwise leave the manifests
    // it had already stamped dirty, with no restore function ever reaching the caller.
    for (const [file, before] of originals) writeFileSync(file, before);
    throw err;
  }
  let restored = false;
  return function restore() {
    if (restored) return;
    restored = true;
    for (const [file, before] of originals) writeFileSync(file, before);
  };
}

/**
 * Write a packed Go module's `version` file in the only form publib accepts: exactly the version,
 * no trailing newline. See the header for why the newline pacmak writes is not survivable.
 */
export function writeGoVersionFile(moduleDir, version) {
  writeFileSync(path.join(moduleDir, GO_VERSION_FILE), version);
}

/** The raw bytes of a packed module's `version` file — raw, because that is what publib compares. */
export function readGoVersionFile(moduleDir) {
  return readFileSync(path.join(moduleDir, GO_VERSION_FILE), "utf8");
}
