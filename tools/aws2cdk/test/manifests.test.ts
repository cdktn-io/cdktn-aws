// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M3 acceptance — the emitted `package.json` manifests, and the inventory they describe.
 *
 * Two go-split-spike VERDICT risks live here.
 *
 * Risk #4, "258 machine-generated manifests to keep correct": Option A's accepted cost is that
 * every group carries its own jsii manifest, and each of those manifests contains three strings
 * that are permanent from the first Go tag onward — the npm name, `targets.go.moduleName`, and
 * `targets.go.packageName` (the directory in cdktn-aws-go, the tag prefix, and the last element of
 * every consumer's import path). Nothing downstream can repair one of these after a release. So
 * every one of the 258 is asserted, not sampled.
 *
 * Risk #5, inventory drift: four independent inventories have to describe the same group set —
 * `groups.json` (curated, the source of truth), `generated/` (what the generator wrote),
 * `generated/hashes.json` (what the release step tags off), and the module directories in the
 * assembled Go repo. Any pair falling out of step is silent: a group that vanishes from `hashes.json`
 * simply stops being tagged.
 *
 * The naming rules are restated here from `docs/m1-generator.md` rather than imported from
 * `../src/naming`, deliberately: a test that calls the generator's own function to check the
 * generator's output asserts only that the function is deterministic.
 */
import * as fs from "node:fs";
import * as path from "node:path";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const generatedDir = path.join(repoRoot, "generated");

/** The Go repository the fleet is assembled into; overridable so CI can point at its checkout. */
const goRepo = process.env.CDKTN_AWS_GO_ROOT ?? path.resolve(repoRoot, "..", "cdktn-aws-go");

const MODULE_NAME = "github.com/cdktn-io/cdktn-aws-go";
/** jsii's own constraint on `targets.go.packageName`. */
const JSII_GO_PACKAGE_NAME = /^[a-z][a-z0-9]*$/;

const groupDirs = fs
  .readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

interface Manifest {
  name: string;
  private?: boolean;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  jsii?: { targets?: { go?: { moduleName?: string; packageName?: string } } };
}

const manifests = new Map<string, Manifest>(
  groupDirs.map((g) => [g, JSON.parse(fs.readFileSync(path.join(generatedDir, g, "package.json"), "utf-8"))]),
);

describe("emitted package manifests", () => {
  it("has a manifest for every generated group, and there are 258 of them", () => {
    // 257 curated groups + the synthetic `provider` package (docs/m2-scale.md).
    expect(groupDirs.length).toBe(258);
    expect(manifests.size).toBe(groupDirs.length);
  });

  it.each(groupDirs)("%s: npm name is @cdktn/aws-<slug>", (group) => {
    expect(manifests.get(group)!.name).toBe(`@cdktn/aws-${group.replace(/_/g, "-")}`);
  });

  it.each(groupDirs)("%s: is private — these packages are never published to npm", (group) => {
    // The published npm artifact is the ONE monolithic `@cdktn/aws` assembly
    // (scripts/build-monolith.mjs). The per-group packages exist to be compiled and packed for Go;
    // publishing them would create 258 npm names nobody agreed to own.
    expect(manifests.get(group)!.private).toBe(true);
  });

  it.each(groupDirs)("%s: jsii go moduleName is the one repository", (group) => {
    expect(manifests.get(group)!.jsii?.targets?.go?.moduleName).toBe(MODULE_NAME);
  });

  it.each(groupDirs)("%s: jsii go packageName is aws + slug with underscores stripped", (group) => {
    const packageName = manifests.get(group)!.jsii?.targets?.go?.packageName;
    expect(packageName).toBe(`aws${group.replace(/_/g, "")}`);
    // Independently of the rule, jsii itself rejects anything else.
    expect(packageName).toMatch(JSII_GO_PACKAGE_NAME);
  });

  it("every Go package name is unique across the fleet", () => {
    // Stripping underscores is not injective on arbitrary slugs (`a_b` and `ab` would collide), and
    // a collision would mean two groups claiming one directory in cdktn-aws-go.
    const names = groupDirs.map((g) => manifests.get(g)!.jsii!.targets!.go!.packageName!);
    expect(new Set(names).size).toBe(names.length);
  });

  it.each(groupDirs)("%s: every peerDependency is mirrored in devDependencies at an exact version", (group) => {
    const m = manifests.get(group)!;
    const peers = m.peerDependencies ?? {};
    expect(Object.keys(peers).sort()).toEqual(["cdktn", "constructs"]);
    for (const [dep, range] of Object.entries(peers)) {
      // jsii's JSII6 is exactly this rule; the fleet build asserts JSII6 is 0, and this asserts the
      // manifest that makes it so — including that the dev version satisfies the peer range's
      // minimum, which JSII6 does not check.
      const dev = m.devDependencies?.[dep];
      expect(dev).toBeDefined();
      expect(dev).toMatch(/^\d+\.\d+\.\d+$/);
      expect(range).toBe(`^${dev}`);
    }
  });

  it.each(groupDirs)("%s: has a README (jsii JSII3 refuses a package without one)", (group) => {
    const readme = path.join(generatedDir, group, "README.md");
    expect(fs.existsSync(readme)).toBe(true);
    expect(fs.statSync(readme).size).toBeGreaterThan(0);
  });
});

describe("inventory drift", () => {
  const groupsJson = JSON.parse(fs.readFileSync(path.join(repoRoot, "groups.json"), "utf-8")) as {
    groups: Record<string, unknown>;
  };
  const hashes = JSON.parse(fs.readFileSync(path.join(generatedDir, "hashes.json"), "utf-8")) as {
    groups: Record<string, unknown>;
  };

  it("generated/ == groups.json + the synthetic provider package", () => {
    expect(groupDirs).toEqual([...Object.keys(groupsJson.groups), "provider"].sort());
  });

  it("generated/ == hashes.json", () => {
    // hashes.json is what the release step reads to decide which Go modules to tag. A group missing
    // from it is a group that silently stops being released.
    expect(Object.keys(hashes.groups).sort()).toEqual(groupDirs);
  });

  const describeGoRepo = fs.existsSync(goRepo) ? describe : describe.skip;
  describeGoRepo(`the assembled Go fleet at ${goRepo}`, () => {
    it("has exactly one module directory per group, named by targets.go.packageName", () => {
      const dirs = fs
        .readdirSync(goRepo, { withFileTypes: true })
        .filter((e) => e.isDirectory() && !e.name.startsWith(".") && fs.existsSync(path.join(goRepo, e.name, "go.mod")))
        .map((e) => e.name)
        .sort();
      const expected = groupDirs.map((g) => manifests.get(g)!.jsii!.targets!.go!.packageName!).sort();
      expect(dirs).toEqual(expected);
    });

    it("has no root go.mod — a parent module would put the whole fleet in one over-cap zip", () => {
      expect(fs.existsSync(path.join(goRepo, "go.mod"))).toBe(false);
    });

    it.each(groupDirs)("%s: the module declares the path its manifest promised", (group) => {
      const target = manifests.get(group)!.jsii!.targets!.go!;
      const goMod = path.join(goRepo, target.packageName!, "go.mod");
      expect(fs.readFileSync(goMod, "utf-8").split("\n")[0].trim()).toBe(
        `module ${target.moduleName}/${target.packageName}`,
      );
    });
  });
});
