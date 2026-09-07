// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The changed-group diff — the decision that keeps 258 tags per release from becoming the default.
 *
 * The fixtures are two refs' `generated/hashes.json`: `hashes-ref-a.json` is "the previous
 * release" and `hashes-ref-b.json` is "this one". Between them one group changed, one changed and
 * grew, one was added, one was removed, and three did not move at all — every case the planner has
 * to tell apart, in one diff, so that a regression in any of them fails here rather than on the
 * module proxy where a tag is permanent.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type { HashesManifest } from "../src/hashes";
import {
  fleetVersion,
  goPackageName,
  majorSuffix,
  planCommands,
  planRelease,
  splitTag,
} from "../src/release-plan";

const fixture = (name: string): HashesManifest =>
  JSON.parse(fs.readFileSync(path.join(__dirname, "fixtures", name), "utf-8"));

const refA = () => fixture("hashes-ref-a.json");
const refB = () => fixture("hashes-ref-b.json");

const plan = (over: Partial<Parameters<typeof planRelease>[0]> = {}) =>
  planRelease({
    before: refA(),
    after: refB(),
    version: "0.1.0",
    beforeRef: "v0.0.9",
    afterRef: "HEAD",
    ...over,
  });

describe("planRelease — which groups moved", () => {
  it("classifies every group in the diff, and only the ones that moved", () => {
    const p = plan();
    expect(p.changes.map((c) => [c.slug, c.kind])).toEqual([
      ["ec2", "changed"],
      ["msk_connect", "removed"],
      ["s3_vectors", "added"],
      ["swf", "changed"],
    ]);
  });

  it("leaves an unchanged group entirely out of the plan", () => {
    const slugs = plan().changes.map((c) => c.slug);
    for (const untouched of ["detective", "lex_v2_models", "provider"]) {
      expect(slugs).not.toContain(untouched);
    }
  });

  it("tags only changed and added groups — a removed group is never tagged", () => {
    expect(plan().tags).toEqual(["ec2/v0.1.0", "s3vectors/v0.1.0", "swf/v0.1.0"]);
  });

  it("tags three of six modules, not all six", () => {
    const p = plan();
    expect(p.totalGroups).toBe(6);
    expect(p.tags).toHaveLength(3);
  });

  it("carries the provider pin from both refs, so a bump is visible in the plan", () => {
    const p = plan();
    expect(p.providerVersionBefore).toBe("6.62.0");
    expect(p.providerVersionAfter).toBe("6.63.0");
  });

  it("records the hash on each side of a change", () => {
    const ec2 = plan().changes.find((c) => c.slug === "ec2")!;
    expect(ec2.beforeHash).toBe(refA().groups.ec2.hash);
    expect(ec2.afterHash).toBe(refB().groups.ec2.hash);
    const added = plan().changes.find((c) => c.slug === "s3_vectors")!;
    expect(added.beforeHash).toBeUndefined();
    const removed = plan().changes.find((c) => c.slug === "msk_connect")!;
    expect(removed.afterHash).toBeUndefined();
  });

  it("is a no-op against itself", () => {
    const p = plan({ before: refB() });
    expect(p.changes).toEqual([]);
    expect(p.tags).toEqual([]);
  });
});

describe("planRelease — the warnings that stop a wrong release", () => {
  it("warns loudly when every group moved (the key-order hazard)", () => {
    // A differently key-ordered `terraform providers schema -json` moves every hash at once and
    // looks exactly like a real provider-wide change. M2 flagged it; the plan has to say so.
    const before = refB();
    const after: HashesManifest = {
      ...before,
      groups: Object.fromEntries(
        Object.entries(before.groups).map(([slug, g]) => [slug, { ...g, hash: `x${g.hash.slice(1)}` }]),
      ),
    };
    const p = plan({ before, after });
    expect(p.changes).toHaveLength(6);
    expect(p.warnings.join("\n")).toMatch(/all 6 groups changed/);
    expect(p.warnings.join("\n")).toMatch(/key-sorted/);
  });

  it("warns when a group disappeared, because its tags outlive the decision", () => {
    expect(plan().warnings.join("\n")).toMatch(/"msk_connect" \(mskconnect\) disappeared/);
  });

  it("warns when nothing changed at all", () => {
    expect(plan({ before: refB() }).warnings.join("\n")).toMatch(/would create no tags/);
  });

  it("warns when the hash algorithm itself moved", () => {
    const p = plan({ after: { ...refB(), algorithm: "sha512" } });
    expect(p.warnings.join("\n")).toMatch(/hash algorithm changed \(sha256 → sha512\)/);
  });

  it("warns about the repo-wide /vN event at major >= 2", () => {
    expect(plan({ version: "2.0.0" }).warnings.join("\n")).toMatch(/every module path gains a "\/v2"/);
  });

  it("says nothing about /vN below major 2", () => {
    expect(plan({ version: "1.9.9" }).warnings.join("\n")).not.toMatch(/\/vN|gains a/);
  });

  it("warns that 0.0.0 is the un-bumped placeholder, not a version", () => {
    // The root package.json ships at 0.0.0, so this is what every dry run prints today. It is
    // valid semver, which is exactly why `fleetVersion` cannot reject it — the guard has to be a
    // warning, and a v0.0.0 tag on the module proxy is permanent.
    expect(plan({ version: "0.0.0" }).warnings.join("\n")).toMatch(/PLACEHOLDER VERSION/);
    expect(plan({ version: "0.1.0" }).warnings.join("\n")).not.toMatch(/PLACEHOLDER VERSION/);
  });
});

describe("tag and module naming", () => {
  it("derives the Go package name by stripping underscores, not by casing", () => {
    expect(goPackageName("msk_connect")).toBe("mskconnect");
    expect(goPackageName("lex_v2_models")).toBe("lexv2models");
    expect(goPackageName("s3")).toBe("s3");
  });

  it("puts the /vN suffix in the module path, so the tag is <dir>/v2/vX.Y.Z", () => {
    expect(majorSuffix("1.4.0")).toBe("");
    expect(majorSuffix("2.0.0")).toBe("/v2");
    expect(plan({ version: "2.0.0" }).tags).toEqual([
      "ec2/v2/v2.0.0",
      "s3vectors/v2/v2.0.0",
      "swf/v2/v2.0.0",
    ]);
  });

  it("splits a tag back into module path and version, /vN included", () => {
    expect(splitTag("detective/v0.1.0")).toEqual(["detective", "v0.1.0"]);
    expect(splitTag("ec2/v2/v2.0.0")).toEqual(["ec2/v2", "v2.0.0"]);
  });
});

describe("fleetVersion", () => {
  it("accepts a plain semver and a prerelease", () => {
    expect(fleetVersion("0.1.0")).toBe("0.1.0");
    expect(fleetVersion(" 1.2.3-rc.1 ")).toBe("1.2.3-rc.1");
  });

  it("refuses anything that is not one, rather than tagging 258 modules with it", () => {
    for (const bad of ["", "v1.2.3", "1.2", "latest", "6.62.0.1"]) {
      expect(() => fleetVersion(bad)).toThrow(/plain semver/);
    }
  });
});

describe("planCommands", () => {
  it("names only the changed groups, and tags exactly the planned list", () => {
    const p = plan();
    const script = planCommands(p, "../cdktn-aws-go").join("\n");
    expect(script).toMatch(/build-fleet\.mjs ec2 s3_vectors swf$/m);
    expect(script).not.toMatch(/detective|lex_v2_models/);
    for (const tag of p.tags) expect(script).toContain(`git tag -s ${tag}`.replace("git ", "git -C ../cdktn-aws-go "));
    expect(script).not.toContain("mskconnect");
  });

  it("tidies before tagging — pacmak emits no go.sum", () => {
    const script = planCommands(plan(), "../cdktn-aws-go").join("\n");
    const tidyAt = script.indexOf("go-tidy-build.mjs");
    const tagAt = script.indexOf("git -C ../cdktn-aws-go tag");
    expect(tidyAt).toBeGreaterThan(-1);
    expect(tagAt).toBeGreaterThan(tidyAt);
  });

  it("ends with the proxy smoke test, after the push", () => {
    const script = planCommands(plan(), "../cdktn-aws-go").join("\n");
    expect(script.indexOf("go mod download")).toBeGreaterThan(script.indexOf("push origin"));
    expect(script).toMatch(/GOPROXY=https:\/\/proxy\.golang\.org/);
    expect(script).toMatch(/go mod download github\.com\/cdktn-io\/cdktn-aws-go\/ec2@v0\.1\.0/);
  });

  it("emits nothing at all when nothing changed", () => {
    expect(planCommands(plan({ before: refB() }), "../cdktn-aws-go")).toEqual([]);
  });
});
