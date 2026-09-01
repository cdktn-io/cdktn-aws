// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Per-group content hashes — the M3 lever.
 *
 * The Go distribution is one module per group under `github.com/cdktn-io/cdktn-aws-go`, each with
 * its own tag prefix (go-split-spike VERDICT §5). On a provider bump most groups do not change at
 * all, and re-tagging 258 modules for a change in `ec2` is both noise and a lie about what moved.
 * So every group carries a hash of its own generated sources; the release step tags a group only
 * when its hash differs from the previous release's.
 *
 * Properties this file is responsible for, both asserted by the contract tests:
 *
 *  1. **Stable across runs.** The hash is computed from the file's *path and bytes* only — never
 *     mtime, inode, order of iteration, or absolute location — so two generate runs of the same
 *     inputs produce the same hash, on any machine and in any directory.
 *  2. **Local.** A change to one group's schema input changes that group's hash and no other's.
 *     That follows from the input set: a group's hash covers exactly the files inside its own
 *     package directory, and nothing shared exists (the zero-cross-group-imports invariant).
 *
 * The manifest lives at `generated/hashes.json`. It is the one file allowed at the generated root
 * — `scripts/check-no-cross-group-imports.mjs` still bans everything else there, because the rule
 * it enforces is "no shared *module* root"; a JSON side-car is not importable and carries no code.
 */
import { createHash } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

export const HASHES_FILE = "hashes.json";
export const HASH_ALGORITHM = "sha256";

/**
 * Hash of one group's committed files.
 *
 * Framing matters: each record is fed as `<relative posix path>\0<byte length>\0<bytes>\n`, so
 * neither a rename that shuffles bytes between files nor a file boundary moving can produce the
 * same digest as a different tree. Paths are relative to the package directory and always use `/`,
 * so a Windows checkout hashes identically to a POSIX one.
 */
export function hashGroupFiles(pkgDir: string, relFiles: readonly string[]): string {
  const hash = createHash(HASH_ALGORITHM);
  for (const rel of [...relFiles].sort()) {
    const bytes = fs.readFileSync(path.join(pkgDir, ...rel.split("/")));
    hash.update(rel, "utf-8");
    hash.update("\0");
    hash.update(String(bytes.length));
    hash.update("\0");
    hash.update(bytes);
    hash.update("\n");
  }
  return hash.digest("hex");
}

export interface GroupHash {
  readonly hash: string;
  readonly files: number;
  readonly bytes: number;
}

export interface HashesManifest {
  readonly algorithm: string;
  readonly pinnedProviderVersion: string;
  readonly groups: Record<string, GroupHash>;
}

export function buildHashesManifest(
  pinnedProviderVersion: string,
  groups: readonly { slug: string; hash: string; files: number; bytes: number }[],
): HashesManifest {
  const out: Record<string, GroupHash> = {};
  for (const g of [...groups].sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0))) {
    out[g.slug] = { hash: g.hash, files: g.files, bytes: g.bytes };
  }
  return { algorithm: HASH_ALGORITHM, pinnedProviderVersion, groups: out };
}

export function writeHashesManifest(outDir: string, manifest: HashesManifest): string {
  const file = path.join(outDir, HASHES_FILE);
  fs.writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
  return file;
}

export function readHashesManifest(outDir: string): HashesManifest | undefined {
  const file = path.join(outDir, HASHES_FILE);
  if (!fs.existsSync(file)) return undefined;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as HashesManifest;
}

/** Slugs whose hash differs between two manifests, plus added/removed ones. Sorted. */
export function changedGroups(before: HashesManifest, after: HashesManifest): string[] {
  const slugs = new Set([...Object.keys(before.groups), ...Object.keys(after.groups)]);
  return [...slugs].filter((s) => before.groups[s]?.hash !== after.groups[s]?.hash).sort();
}
