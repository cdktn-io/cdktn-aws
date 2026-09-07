// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The release plan — pure functions over two `hashes.json` manifests.
 *
 * This is the anti-tag-growth lever the go-split-spike VERDICT (§5) names as the single biggest
 * operational argument for Option A: 258 sibling Go modules in one repository means 258 tags per
 * release if every release tags everything, ~13k tags a year at a weekly cadence, and every
 * consumer's `git ls-remote` and every full clone pays for them forever. Option A can tag *only
 * the groups that changed* — Option B could not, because its one shared `core` forces lockstep.
 *
 * Nothing here touches git, the filesystem, or the network. The CLI (`bin/release.ts`) reads two
 * refs and prints; this file decides. That split is what makes the decision testable against a
 * fixture of two refs' manifests rather than against a live repository.
 */
import type { HashesManifest } from "./hashes";

/** `github.com/cdktn-io/cdktn-aws-go` — the one repository every module lives in. */
export const GO_MODULE_ROOT = "github.com/cdktn-io/cdktn-aws-go";

export interface GroupChange {
  readonly slug: string;
  /** The Go directory / tag prefix: the slug with underscores stripped. */
  readonly packageName: string;
  readonly kind: "added" | "changed" | "removed";
  readonly beforeHash?: string;
  readonly afterHash?: string;
}

export interface ReleasePlan {
  readonly version: string;
  readonly beforeRef: string;
  readonly afterRef: string;
  readonly providerVersionBefore: string;
  readonly providerVersionAfter: string;
  readonly totalGroups: number;
  readonly changes: readonly GroupChange[];
  /** Tags to create, `detective/v1.2.3`, sorted. Removed groups are never tagged. */
  readonly tags: readonly string[];
  /** Loud warnings the operator must clear before any tag is pushed. */
  readonly warnings: readonly string[];
}

/**
 * The slug with underscores stripped — the jsii `targets.go.packageName`, which is also the
 * directory in `cdktn-aws-go` and the tag prefix. Restated here rather than imported from
 * `groups.ts` on purpose: a release must not be able to change the name of a published module
 * because the generator's idea of a name moved. If these two ever disagree, the manifest tests
 * (which assert the real `package.json` against this same rule) fail first.
 */
export function goPackageName(slug: string): string {
  return slug.replace(/_/g, "");
}

/**
 * The lockstep fleet version.
 *
 * Every module in a release carries the same version. Under Option A mixed versions are *safe* —
 * each group is its own jsii assembly, so there is no shared `core` to skew against — but lockstep
 * keeps the support matrix explainable and lets one pinned `jsii-pacmak` pack the whole release
 * (pacmak stamps its own `jsii-runtime-go` version into every `go.mod`).
 *
 * The number is **this repository's own semver**, read from the root `package.json` — the
 * generator's version, not the provider's. See `docs/m3-go.md` § "Versioning" for the full
 * argument; the short form is that the Go API surface is a function of the generator and the
 * pinned jsii/pacmak as much as of the provider schema, and that `aws 6.62.0` → `v6.62.0` would
 * put every one of the 258 import paths behind a `/v6` suffix on day one.
 */
export function fleetVersion(rootPackageJsonVersion: string): string {
  const v = rootPackageJsonVersion.trim();
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(v)) {
    throw new Error(
      `fleet version must be a plain semver in the root package.json "version" field, got ${JSON.stringify(v)}`,
    );
  }
  return v;
}

/** The `/vN` import-path suffix Go requires at major >= 2, or "" below it. */
export function majorSuffix(version: string): string {
  const major = Number(version.split(".")[0]);
  return major >= 2 ? `/v${major}` : "";
}

export interface PlanInput {
  readonly before: HashesManifest;
  readonly after: HashesManifest;
  readonly version: string;
  readonly beforeRef: string;
  readonly afterRef: string;
}

/**
 * Which groups moved, and therefore which tags this release creates.
 *
 * Three sanity checks are folded in as warnings rather than left to the operator's eye, because
 * each one is a way this plan can be catastrophically right-looking and wrong:
 *
 *  - **Every group changed.** M2 flagged this: struct members are emitted in the schema dump's key
 *    order, so a differently key-ordered `terraform providers schema -json` moves all 258 hashes at
 *    once. That looks exactly like "the provider changed everything" and would re-tag the entire
 *    fleet for nothing.
 *  - **Nothing changed.** A release that tags nothing is usually a mistake about the refs, not a
 *    quiet provider bump.
 *  - **A group disappeared.** Its module and tags stay on the proxy forever; that is a curation
 *    decision (`docs/group-moves.md`), never a silent consequence of a diff.
 */
export function planRelease(input: PlanInput): ReleasePlan {
  const { before, after, version, beforeRef, afterRef } = input;
  const slugs = [...new Set([...Object.keys(before.groups), ...Object.keys(after.groups)])].sort();

  const changes: GroupChange[] = [];
  for (const slug of slugs) {
    const b = before.groups[slug]?.hash;
    const a = after.groups[slug]?.hash;
    if (b === a) continue;
    changes.push({
      slug,
      packageName: goPackageName(slug),
      kind: b === undefined ? "added" : a === undefined ? "removed" : "changed",
      beforeHash: b,
      afterHash: a,
    });
  }

  const suffix = majorSuffix(version);
  const tags = changes
    .filter((c) => c.kind !== "removed")
    .map((c) => `${c.packageName}${suffix}/v${version}`)
    .sort();

  const totalGroups = Object.keys(after.groups).length;
  const warnings: string[] = [];
  if (version === "0.0.0") {
    warnings.push(
      'PLACEHOLDER VERSION — the root package.json is still at "0.0.0", so this plan tags every ' +
        'module as `<packageName>/v0.0.0`. That is legal semver and the proxy would accept it, ' +
        "but it is a non-version: bump package.json (or pass --version X.Y.Z) before a real " +
        "release. A v0.0.0 tag is permanent on the module proxy and cannot be recalled.",
    );
  }
  const moved = changes.filter((c) => c.kind === "changed").length;
  if (totalGroups > 0 && moved === totalGroups) {
    warnings.push(
      `all ${totalGroups} groups changed — check the schema dump is key-sorted before tagging: a ` +
        "differently-ordered `terraform providers schema -json` moves every hash at once " +
        "(docs/m2-scale.md, hash design). Compare this against the provider diff.",
    );
  }
  if (changes.length === 0) {
    warnings.push(
      `no group changed between ${beforeRef} and ${afterRef} — this release would create no tags. ` +
        "Check the refs.",
    );
  }
  for (const c of changes.filter((c) => c.kind === "removed")) {
    warnings.push(
      `group "${c.slug}" (${c.packageName}) disappeared — its module and every tag it ever had stay ` +
        "on the module proxy forever. Removing a group is a curation decision; record it in " +
        "docs/group-moves.md before releasing.",
    );
  }
  if (before.algorithm !== after.algorithm) {
    warnings.push(
      `hash algorithm changed (${before.algorithm} → ${after.algorithm}) — every hash moves for a ` +
        "reason that has nothing to do with the provider. This diff means nothing until both " +
        "manifests are rebuilt under one algorithm.",
    );
  }
  if (suffix !== "") {
    warnings.push(
      `major version ${version.split(".")[0]} — every module path gains a "${suffix}" suffix and ` +
        "every module needs a matching subdirectory in cdktn-aws-go. This is a deliberate, " +
        "repo-wide event; see the release section of docs/provider-bump-runbook.md.",
    );
  }

  return {
    version,
    beforeRef,
    afterRef,
    providerVersionBefore: before.pinnedProviderVersion,
    providerVersionAfter: after.pinnedProviderVersion,
    totalGroups,
    changes,
    tags,
    warnings,
  };
}

/**
 * The commands a release would run, in order, as text. They are printed and never executed:
 * `--dry-run` is this tool's default *and* its only mode, so there is no code path in this
 * repository that can create or push a tag.
 */
export function planCommands(plan: ReleasePlan, goRoot: string): string[] {
  if (plan.tags.length === 0) return [];
  const suffix = majorSuffix(plan.version);
  const out: string[] = [];

  out.push("# 1. build and pack the changed groups (one pinned jsii, one pinned jsii-pacmak)");
  out.push(
    `node scripts/build-fleet.mjs ${plan.changes
      .filter((c) => c.kind !== "removed")
      .map((c) => c.slug)
      .join(" ")}`,
  );

  out.push("");
  out.push("# 2. copy each packed module into the Go repository, verbatim");
  for (const c of plan.changes) {
    if (c.kind === "removed") continue;
    const dest = `${goRoot}/${c.packageName}${suffix}`;
    out.push(`rm -rf ${dest} && mkdir -p ${dest}`);
    out.push(`cp -R generated/${c.slug}/dist/go/${c.packageName}/. ${dest}/`);
  }

  out.push("");
  out.push("# 3. go mod tidy — pacmak emits no go.sum, and a tag without one is unverifiable");
  out.push(`node scripts/go-tidy-build.mjs --root ${goRoot}`);

  out.push("");
  out.push("# 4. gates, against the assembled repository");
  out.push(`node scripts/check-go-module-isolation.mjs --root ${goRoot}`);
  out.push(`node scripts/check-go-size.mjs --root ${goRoot}`);

  out.push("");
  out.push(`# 5. commit, then tag ONLY the ${plan.tags.length} changed module(s)`);
  out.push(`git -C ${goRoot} add -A`);
  out.push(
    `git -C ${goRoot} commit -S -m ${JSON.stringify(`release ${plan.version} — ${plan.tags.length} module(s), aws ${plan.providerVersionAfter}`)}`,
  );
  for (const tag of plan.tags) out.push(`git -C ${goRoot} tag -s ${tag} -m ${JSON.stringify(tag)}`);

  out.push("");
  out.push("# 6. publish, then smoke-test the proxy before announcing anything");
  out.push(`git -C ${goRoot} push origin HEAD --tags`);
  out.push(
    "# forces the public proxy and the checksum database — the two things a local `go build` never",
    "# exercises. Every FIRST publish is checked (a path that never resolves is unrepairable: the",
    "# proxy caches the 404 and the name is spent), plus one already-published module to prove the",
    "# new tag is what the proxy serves.",
  );
  const added = plan.changes.filter((c) => c.kind === "added").map((c) => c.packageName);
  const changed = plan.changes.filter((c) => c.kind === "changed").map((c) => c.packageName);
  const suffixed = (pkg: string) => `${pkg}${suffix}`;
  const smoke = [...added.map(suffixed), ...changed.slice(0, 1).map(suffixed)];
  for (const modPath of smoke.length > 0 ? smoke : [splitTag(plan.tags[0])[0]]) {
    out.push(
      `GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org GOFLAGS=-mod=mod ` +
        `go mod download ${GO_MODULE_ROOT}/${modPath}@v${plan.version}`,
    );
  }

  return out;
}

/** `detective/v0.1.0` → `["detective", "v0.1.0"]`; `ec2/v2/v2.0.0` keeps the `/v2`. */
export function splitTag(tag: string): [string, string] {
  const i = tag.lastIndexOf("/v");
  return [tag.slice(0, i), tag.slice(i + 1)];
}
