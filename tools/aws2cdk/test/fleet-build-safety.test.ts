// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The two ways `scripts/build-fleet.mjs` could publish or commit the wrong version number.
 *
 * Both come from the same root: the fleet is packed at the release version, but the manifests are
 * committed at 0.0.0, so the build STAMPS a committed file and restores it (scripts/fleet-version.mjs).
 *
 *   1. `--pacmak-go` reuses an existing compile, and pacmak takes the version from the `.jsii`
 *      assembly — not from the manifest this run stamped. Packing at a version the assembly was not
 *      compiled at used to fail *after* `rmSync(dist/go)`, i.e. it destroyed the good output on its
 *      way to reporting the mismatch.
 *   2. Two builds of one group overlap, the second snapshots the first's stamp, and the "restore"
 *      writes a release version into the committed manifest. Both builds succeed; the tree is
 *      quietly wrong. CI shards are disjoint, but the partial-release recovery in
 *      docs/m4-publishing.md §5 is a human re-running this locally.
 *
 * Real builds of two of the smallest groups in the fleet (~2 s each), on different groups from
 * `go-version-stamp.test.ts` so the suites can run in parallel without contending for the very lock
 * this file is testing.
 */
import { execFileSync, spawn, spawnSync, type ChildProcess } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const buildFleet = path.join(repoRoot, "scripts", "build-fleet.mjs");
const lockModule = path.join(repoRoot, "scripts", "build-lock.mjs");

const repoVersion = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf-8")).version as string;

/** Run build-fleet; return the exit status and the combined output rather than throwing. */
function run(args: string[], version?: string): { status: number; output: string } {
  // spawnSync, not execFileSync: the refusals and the stale-lock warning are on stderr, and
  // execFileSync hands back only stdout when the command succeeds.
  const r = spawnSync(process.execPath, [buildFleet, ...args], {
    cwd: repoRoot,
    encoding: "utf-8",
    env: version ? { ...process.env, PACKAGE_VERSION: version } : process.env,
  });
  return { status: r.status ?? -1, output: `${r.stdout ?? ""}${r.stderr ?? ""}` };
}

/** The committed bytes of a group's manifest, straight out of git. */
function committedManifest(group: string): string {
  return execFileSync("git", ["show", `HEAD:generated/${group}/package.json`], { cwd: repoRoot, encoding: "utf-8" });
}

function workingManifest(group: string): string {
  return fs.readFileSync(path.join(repoRoot, "generated", group, "package.json"), "utf-8");
}

describe("--pacmak-go over a stale assembly", () => {
  const GROUP = "sts";
  const MODULE = "awssts";
  const moduleDir = path.join(repoRoot, "generated", GROUP, "dist", "go", MODULE);
  const versionFile = path.join(moduleDir, "version");
  const COMPILED = "0.7.7";
  const REQUESTED = "0.8.8";

  beforeAll(() => {
    expect(run([GROUP], COMPILED).status).toBe(0);
  }, 300000);

  afterAll(() => {
    // Leave the tree as an ordinary build would, at this repository's own version.
    run([GROUP]);
  }, 300000);

  it("refuses, names the rerun command, and does NOT delete the output it cannot replace", () => {
    expect(fs.readFileSync(versionFile, "utf-8")).toBe(COMPILED);
    const before = fs.readdirSync(moduleDir).sort();

    const { status, output } = run(["--pacmak-go", GROUP], REQUESTED);

    expect(status).toBe(2);
    expect(output).toContain(`.jsii was compiled at ${COMPILED}, this run packs ${REQUESTED}`);
    expect(output).toContain(`PACKAGE_VERSION=${REQUESTED} node scripts/build-fleet.mjs ${GROUP}`);

    // The whole point: the previous, correct output survives a refused re-pack.
    expect(fs.readdirSync(moduleDir).sort()).toEqual(before);
    expect(fs.readFileSync(versionFile, "utf-8")).toBe(COMPILED);
  }, 300000);

  it("packs happily when the requested version is the one the assembly was compiled at", () => {
    const { status, output } = run(["--pacmak-go", GROUP], COMPILED);
    expect(status).toBe(0);
    expect(output).toContain(`1/1 OK`);
    expect(fs.readFileSync(versionFile, "utf-8")).toBe(COMPILED);
  }, 300000);

  it("leaves the committed manifest byte-identical through every one of those paths", () => {
    expect(workingManifest(GROUP)).toBe(committedManifest(GROUP));
  });
});

describe("the per-group build lock", () => {
  const GROUP = "wavelength";
  const lockDir = path.join(repoRoot, "tmp", "fleet-locks", `${GROUP}.lock`);
  let holder: ChildProcess | undefined;
  let holderExited: Promise<void> | undefined;

  /** A separate process that takes the lock and then does nothing — the concurrent build. */
  function startHolder(): Promise<void> {
    const source = `
      import { acquireGroupLocks } from ${JSON.stringify(lockModule)};
      acquireGroupLocks(${JSON.stringify(repoRoot)}, [${JSON.stringify(GROUP)}]);
      process.stdout.write("locked\\n");
      setInterval(() => {}, 60000);
    `;
    holder = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    let locked = false;
    holderExited = new Promise((resolve) => holder!.on("exit", () => resolve()));
    return new Promise((resolve, reject) => {
      holder!.stdout!.on("data", (d) => {
        if (String(d).includes("locked")) {
          locked = true;
          resolve();
        }
      });
      holder!.on("exit", (code) => !locked && reject(new Error(`lock holder exited early (${code})`)));
    });
  }

  afterAll(() => {
    holder?.kill("SIGKILL");
    fs.rmSync(lockDir, { recursive: true, force: true });
    run([GROUP]);
  }, 300000);

  it("makes the second build of a group refuse, with an actionable message", async () => {
    await startHolder();
    expect(fs.existsSync(lockDir)).toBe(true);
    expect(JSON.parse(fs.readFileSync(path.join(lockDir, "owner.json"), "utf-8")).pid).toBe(holder!.pid);

    const { status, output } = run([GROUP]);

    expect(status).toBe(2);
    expect(output).toContain(`group "${GROUP}" is already being built by pid ${holder!.pid}`);
    expect(output).toContain("restore\n  a release version into the committed manifest");
    expect(output).toContain(`rm -rf tmp/fleet-locks/${GROUP}.lock`);
  }, 300000);

  it("leaves the committed manifest byte-identical after the refusal — the whole point", () => {
    expect(workingManifest(GROUP)).toBe(committedManifest(GROUP));
    expect(JSON.parse(workingManifest(GROUP)).version).toBe("0.0.0");
  });

  it("reclaims the lock once its owner is gone, so a crashed build does not wedge the fleet", async () => {
    holder!.kill("SIGKILL");
    // Wait for the real reap: until Node collects the child, its pid is still a (zombie) entry in
    // the process table and `kill(pid, 0)` succeeds, so the lock would not read as stale yet.
    await holderExited;
    expect(fs.existsSync(lockDir)).toBe(true); // SIGKILL runs no exit handler: the lock is orphaned

    const { status, output } = run([GROUP], repoVersion);
    expect(status).toBe(0);
    expect(output).toContain("reclaiming stale lock");
    expect(fs.existsSync(lockDir)).toBe(false);
    expect(workingManifest(GROUP)).toBe(committedManifest(GROUP));
  }, 300000);
});
