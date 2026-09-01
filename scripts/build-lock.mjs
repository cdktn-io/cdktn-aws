// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * A per-group build lock, because `scripts/build-fleet.mjs` mutates a COMMITTED file.
 *
 * The fleet is packed at the release version, but `generated/<group>/package.json` is committed at
 * `0.0.0` and its bytes are hashed into `generated/hashes.json` — so build-fleet stamps the
 * manifest, builds, and restores the ORIGINAL BYTES IT SNAPSHOTTED (scripts/fleet-version.mjs
 * § stampManifests). Two builds of the same group overlap like this:
 *
 *     A: snapshot 0.0.0 → write 0.1.1 ────────────── build ─────── restore 0.0.0
 *     B:                    snapshot 0.1.1 ← wrong  → write 0.1.1 ── build ── restore 0.1.1  ✗
 *
 * B snapshots A's stamp and restores it. The tree is then dirty at a stamped version, `pnpm
 * generate` no longer leaves it clean, and the next commit ships a manifest at a release number —
 * silently, because both builds succeed.
 *
 * CI cannot hit this (each `--shard i/8` leg owns a disjoint set of groups on its own runner), but
 * the partial-release recovery in docs/m4-publishing.md §5 is a human re-running build-fleet
 * locally, possibly next to a build that is still going. That is exactly the overlap above.
 *
 * WHY A LOCK AND NOT A TEMP COPY. "Never mutate the committed manifest — build from a copy" is the
 * structurally better fix and it is not available here. `generated/*` are pnpm WORKSPACE MEMBERS
 * (pnpm-workspace.yaml, with the comment saying why: "pnpm links their cdktn/constructs
 * devDependency mirror, which is what `tsc --noEmit` and `jsii` both need to resolve"). The
 * resolution a group compiles against is `generated/<group>/node_modules`, a symlink farm into the
 * workspace store that only exists because the directory is a member. A copy at some other path is
 * not a member: it would need its own install per group — 258 of them — or a hand-built symlink
 * farm, and jsii's peer-dependency check (JSII6, one of the two bars this build enforces at zero)
 * is precisely what breaks first when that is got wrong. So the mutation stays in place and is made
 * exclusive instead, which is a dozen lines and no new failure mode in the compile itself.
 *
 * `mkdir` is the lock: it is atomic on every filesystem this runs on, needs no dependency, and
 * leaves a directory whose contents name the owner. Locks live under `tmp/` (gitignored), so a
 * crashed build never leaves anything git can see.
 */
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from "node:fs";
import * as path from "node:path";

/** A lock older than this whose owner is gone is scavenged: a full fleet build is ~10 minutes. */
const STALE_MS = 6 * 60 * 60 * 1000;

export const lockRoot = (repoRoot) => path.join(repoRoot, "tmp", "fleet-locks");

function ownerOf(lockDir) {
  try {
    return JSON.parse(readFileSync(path.join(lockDir, "owner.json"), "utf8"));
  } catch {
    return undefined;
  }
}

/** Is that pid still around? `kill(pid, 0)` signals nothing; ESRCH means the process is gone. */
function alive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return err.code === "EPERM"; // exists, owned by someone else
  }
}

/**
 * Take the lock for every one of `groups`, or take none and throw.
 *
 * @returns {() => void} the release, idempotent, safe to call from a `finally` AND from `exit`
 */
export function acquireGroupLocks(repoRoot, groups, { now = Date.now, pid = process.pid } = {}) {
  const root = lockRoot(repoRoot);
  mkdirSync(root, { recursive: true });
  /** @type {string[]} */
  const held = [];

  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    for (const dir of held) rmSync(dir, { recursive: true, force: true });
  };

  for (const group of [...groups].sort()) {
    const dir = path.join(root, `${group}.lock`);
    for (let attempt = 0; ; attempt++) {
      try {
        mkdirSync(dir); // atomic: fails with EEXIST if anyone else got there first
        writeFileSync(path.join(dir, "owner.json"), `${JSON.stringify({ group, pid, startedAt: now() }, null, 2)}\n`);
        held.push(dir);
        break;
      } catch (err) {
        if (err.code !== "EEXIST") {
          release();
          throw err;
        }
        const owner = ownerOf(dir);
        const ageMs = owner?.startedAt ? now() - owner.startedAt : undefined;
        const stale = !owner || (!alive(owner.pid) && (ageMs === undefined || ageMs > 0)) || (ageMs ?? 0) > STALE_MS;
        if (stale && attempt === 0) {
          // The owner is gone (crash, kill -9) or the lock is older than any real build. Its
          // manifest was restored by build-fleet's `exit` handler, or it was not, in which case the
          // reclaiming build stamps over whatever is there and restores THAT — which is why the
          // caller checks `git status` too, and why this only ever happens once per lock.
          console.warn(
            `[lock] reclaiming stale lock ${path.relative(repoRoot, dir)} ` +
              `(owner pid ${owner?.pid ?? "unknown"} is not running${ageMs === undefined ? "" : `, ${Math.round(ageMs / 1000)}s old`})`,
          );
          rmSync(dir, { recursive: true, force: true });
          continue;
        }
        release();
        throw new Error(
          `[lock] group "${group}" is already being built by pid ${owner?.pid ?? "?"}` +
            `${ageMs === undefined ? "" : ` (started ${Math.round(ageMs / 1000)}s ago)`}.\n` +
            "  Two builds of one group would snapshot each other's stamped package.json and restore\n" +
            "  a release version into the committed manifest — see scripts/build-lock.mjs.\n" +
            "  Wait for that build to finish, or build a different group. If you are certain that\n" +
            `  process is gone: rm -rf ${path.relative(repoRoot, dir)}`,
        );
      }
    }
  }

  return release;
}

/** Whether a group is currently locked — for tests and for a human wondering what is running. */
export function isLocked(repoRoot, group) {
  return existsSync(path.join(lockRoot(repoRoot), `${group}.lock`));
}
