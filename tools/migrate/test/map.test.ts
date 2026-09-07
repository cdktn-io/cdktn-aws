// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The rewrite table itself — the tool's only input, and the only thing standing between a consumer
 * and a wrong rename.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { toCamelCase } from "codemaker";
import { TARGET_RANGE, classicModuleOfSpecifier, isClassicSpecifier } from "../src/map";
import { index } from "./helpers";
import { migrateManifest, satisfiesTarget } from "../src/manifest";
import { renderReport, unmappedOf } from "../src/report";

describe("the symbol index", () => {
  it("covers every classic submodule the library exports", () => {
    // 2,401 schema entries plus `provider-functions`, which has no schema entry behind it.
    expect(index.byModule.size).toBe(2402);
    expect(index.byModule.has("provider-functions")).toBe(true);
  });

  it("keys the barrel by codemaker's camelCase, digit boundaries included", () => {
    // A dash-eating lookalike would spell these `lexv2modelsBot` and miss 60 modules.
    expect(index.bySubmodule.get("lexv2ModelsBot")?.module).toBe("lexv2models-bot");
    expect(toCamelCase("lexv2models-bot")).toBe("lexv2ModelsBot");
    expect(index.bySubmodule.get("s3BucketVersioning")?.module).toBe("s3-bucket-versioning");
  });

  it("expands one nested row into its interface, wrappers and both mappers", () => {
    const s3Bucket = index.byModule.get("s3-bucket")!;
    expect(s3Bucket.symbols.get("S3BucketCorsRule")).toEqual({
      group: "s3",
      member: "AwsBucket.CorsRuleProperty",
    });
    expect(s3Bucket.symbols.get("S3BucketCorsRuleOutputReference")?.member).toBe(
      "AwsBucket.CorsRulePropertyOutputReference",
    );
    expect(s3Bucket.symbols.get("S3BucketCorsRuleList")?.member).toBe("AwsBucket.CorsRulePropertyList");
    expect(s3Bucket.symbols.get("s3BucketCorsRuleToTerraform")?.member).toBe(
      "awsBucketMapperCorsRulePropertyToTerraform",
    );
    expect(s3Bucket.symbols.get("s3BucketCorsRuleToHclTerraform")?.member).toBe(
      "awsBucketMapperCorsRulePropertyToHclTerraform",
    );
  });

  it("keys the config interface off the recorded name, not a `<className>Config` rule", () => {
    // The one entry where the rule is wrong: the config struct lost the pool race to a nested one.
    expect(
      index.byModule.get("wafv2-web-acl-association")!.symbols.get("Wafv2WebAclAssociationConfigA"),
    ).toEqual({ group: "waf", member: "AwsWebAclAssociationConfig" });
    expect(index.byModule.get("s3-bucket")!.symbols.get("S3BucketConfig")).toEqual({
      group: "s3",
      member: "AwsBucketConfig",
    });
  });

  it("recognises every spelling of the classic package specifier", () => {
    expect(isClassicSpecifier("@cdktn/provider-aws")).toBe(true);
    expect(isClassicSpecifier("@cdktn/provider-aws/lib/s3-bucket")).toBe(true);
    expect(isClassicSpecifier("@cdktn/provider-awscc")).toBe(false);
    expect(classicModuleOfSpecifier("@cdktn/provider-aws")).toBeUndefined();
    expect(classicModuleOfSpecifier("@cdktn/provider-aws/lib/s3-bucket")).toBe("s3-bucket");
    expect(classicModuleOfSpecifier("@cdktn/provider-aws/src/s3-bucket/index")).toBe("s3-bucket");
  });

  it("reads a big module's split-out structs as the module itself", () => {
    // `src/wafv2-web-acl-rule/index.ts` is `export * from './index-structs/index'`, so the subpath
    // names the same submodule — and it is where every nested struct is actually declared.
    expect(classicModuleOfSpecifier("@cdktn/provider-aws/lib/wafv2-web-acl-rule/index-structs")).toBe(
      "wafv2-web-acl-rule",
    );
    expect(
      classicModuleOfSpecifier("@cdktn/provider-aws/lib/wafv2-web-acl-rule/index-structs/structs0"),
    ).toBe("wafv2-web-acl-rule");
    expect(index.byModule.get("wafv2-web-acl-rule")?.symbols.get("Wafv2WebAclRuleActionA")).toEqual({
      group: "waf",
      member: "AwsWebAclRule.ActionProperty",
    });
  });
});

describe("package.json", () => {
  const write = (manifest: unknown): string => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "migrate-manifest-"));
    const file = path.join(dir, "package.json");
    fs.writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
    return file;
  };

  it("swaps the dependency, in whichever block declared it", () => {
    const file = write({
      name: "example",
      dependencies: { cdktn: "0.24.0", "@cdktn/provider-aws": "^25.3.0", constructs: "^10.7.0" },
    });
    const result = migrateManifest(file, "package.json")!;
    expect(result.changes).toEqual([
      { file: "package.json", block: "dependencies", from: "^25.3.0", to: TARGET_RANGE, keptClassic: false },
    ]);
    expect(JSON.parse(result.after).dependencies).toEqual({
      "@cdktn/aws": TARGET_RANGE,
      cdktn: "0.24.0",
      constructs: "^10.7.0",
    });
  });

  it("swaps it in EVERY block that declared it — a library declares two", () => {
    // Taking only the first block left the project peer-depending on the library it migrated off,
    // with nothing in the report and a zero exit code to say so.
    const file = write({
      name: "example",
      dependencies: { "@cdktn/provider-aws": "^25.3.0" },
      peerDependencies: { "@cdktn/provider-aws": "^25.0.0", cdktn: "^0.24.0" },
    });
    const result = migrateManifest(file, "package.json")!;
    expect(result.changes.map((c) => [c.block, c.from])).toEqual([
      ["dependencies", "^25.3.0"],
      ["peerDependencies", "^25.0.0"],
    ]);
    const after = JSON.parse(result.after);
    expect(after.dependencies).toEqual({ "@cdktn/aws": TARGET_RANGE });
    expect(after.peerDependencies).toEqual({ "@cdktn/aws": TARGET_RANGE, cdktn: "^0.24.0" });
  });

  it("keeps the classic dependency while the run has residual imports to install", () => {
    const file = write({ name: "example", dependencies: { "@cdktn/provider-aws": "^25.3.0" } });
    const result = migrateManifest(file, "package.json", true)!;
    expect(result.changes[0].keptClassic).toBe(true);
    expect(JSON.parse(result.after).dependencies).toEqual({
      "@cdktn/aws": TARGET_RANGE,
      "@cdktn/provider-aws": "^25.3.0",
    });
  });

  // Round 4: the rebuild wrote TARGET_RANGE when it met the classic entry and a later pre-existing
  // `@cdktn/aws` entry overwrote it, so which range survived fell out of JSON key order — and the
  // report printed the constant either way.
  describe("a manifest that already names @cdktn/aws", () => {
    const partiallyMigrated = (deps: Record<string, string>) =>
      migrateManifest(write({ name: "example", dependencies: deps }), "package.json")!;

    it.each([
      ["classic first", { "@cdktn/provider-aws": "25.3.0", "@cdktn/aws": "~0.1.0" }],
      ["target first", { "@cdktn/aws": "~0.1.0", "@cdktn/provider-aws": "25.3.0" }],
    ])("refuses an incompatible range in either key order (%s)", (_name, deps) => {
      const result = partiallyMigrated(deps);
      expect(result.after).toBe(result.before);
      expect(result.changes).toEqual([]);
      expect(result.unmapped.map((u) => u.reason)).toEqual([
        `existing @cdktn/aws range ~0.1.0 conflicts with ${TARGET_RANGE}: resolve by hand`,
      ]);
    });

    it.each([
      ["classic first", { "@cdktn/provider-aws": "25.3.0", "@cdktn/aws": "~0.3.1" }],
      ["target first", { "@cdktn/aws": "~0.3.1", "@cdktn/provider-aws": "25.3.0" }],
    ])("keeps a compatible range as it is, in either key order (%s)", (_name, deps) => {
      const result = partiallyMigrated(deps);
      expect(result.unmapped).toEqual([]);
      expect(result.changes[0].to).toBe("~0.3.1");
      expect(JSON.parse(result.after).dependencies).toEqual({ "@cdktn/aws": "~0.3.1" });
    });

    it("answers the range question narrowly, and never with a guess", () => {
      // Yes only for the set TARGET_RANGE itself allows. A wrong yes pins a consumer to a library
      // the rewritten source does not compile against, so anything else is a human's problem.
      expect(satisfiesTarget("^0.3.0")).toBe(true);
      expect(satisfiesTarget("~0.3.0")).toBe(true);
      expect(satisfiesTarget("0.3.5")).toBe(true);
      expect(satisfiesTarget("~0.2.0")).toBe(false);
      expect(satisfiesTarget("^0.4.0")).toBe(false);
      expect(satisfiesTarget("0.3.0 || 0.4.0")).toBe(false);
      expect(satisfiesTarget(">=0.3.0")).toBe(false);
      expect(satisfiesTarget("workspace:*")).toBe(false);
      // …and it moves with the constant, which is what a TARGET_RANGE bump has to be able to rely on.
      expect(satisfiesTarget("^0.4.0", "^0.4.0")).toBe(true);
    });
  });

  it("says nothing about a manifest that never depended on the classic library", () => {
    expect(migrateManifest(write({ name: "example", dependencies: { cdktn: "0.24.0" } }), "package.json")).toBeUndefined();
  });
});

describe("the target range", () => {
  const repo = path.resolve(__dirname, "..", "..", "..");
  const src = path.join(repo, "tools", "migrate", "src");
  const read = (...parts: string[]) => fs.readFileSync(path.join(repo, ...parts), "utf-8");

  it("is spelled out in exactly one place in the tool", () => {
    // `report.ts` hardcoded the range in its "becomes" column and printed it whatever the
    // manifest actually got. One constant, and this is what keeps it one.
    const others = fs
      .readdirSync(src)
      .filter((f) => f.endsWith(".ts") && f !== "map.ts")
      .filter((f) => fs.readFileSync(path.join(src, f), "utf-8").includes(TARGET_RANGE));
    expect(others).toEqual([]);
  });

  it("is the range the guide, the README and the worked example all quote", () => {
    // The next bump is `^0.3.0` on a follow-up branch. It is one line in `map.ts` — and this test is
    // what makes leaving the prose or the golden example behind a red suite rather than a surprise.
    const version = TARGET_RANGE.replace(/^[~^]/, "");
    // Every `@cdktn/aws@…` these three name — the guide also states the bare version in prose — is
    // the target's, and the two that tell a consumer what to install name the range itself.
    for (const file of [
      ["docs", "migrating-from-provider-aws.md"],
      ["tools", "migrate", "README.md"],
      ["examples", "migrate", "typescript", "migrated", "package.json"],
    ]) {
      const text = read(...file);
      const named = [...text.matchAll(/@cdktn\/aws(?:@|":\s*")([~^]?\d+\.\d+\.\d+)/g)].map((m) =>
        m[1].replace(/^[~^]/, ""),
      );
      expect([file.join("/"), [...new Set(named)]]).toEqual([file.join("/"), [version]]);
      expect([file.join("/"), text.includes(TARGET_RANGE)]).toEqual([file.join("/"), true]);
    }
  });
});

describe("the report", () => {
  it("says zero unmapped in so many words, so a green run is readable", () => {
    const report = renderReport({
      files: [{ file: "main.ts", before: "a", after: "b", rewrites: 7, unmapped: [] }],
      manifests: [],
      wrote: false,
    });
    expect(report).toContain("| **total** | **7** | **0** |");
    expect(report).toContain("None — every `@cdktn/provider-aws` symbol this project uses has a naming-map row.");
  });

  it("tables what it left alone", () => {
    const report = renderReport({
      files: [
        {
          file: "main.ts",
          before: "a",
          after: "a",
          rewrites: 0,
          unmapped: [{ file: "main.ts", line: 3, symbol: "s3Bucket.Invented", reason: "no naming-map row for this classic export" }],
        },
      ],
      manifests: [],
      wrote: false,
    });
    expect(report).toContain("| main.ts | 3 | `s3Bucket.Invented` | no naming-map row for this classic export |");
  });

  it("prints the range the manifest actually ends up with, not the constant", () => {
    // The column was hardcoded to the constant whatever the manifest got.
    const report = renderReport({
      files: [],
      manifests: [
        { file: "package.json", block: "dependencies", from: "25.3.0", to: "~0.3.1", keptClassic: false },
      ],
      wrote: true,
    });
    expect(report).toContain("| package.json | dependencies | `@cdktn/provider-aws@25.3.0` | `@cdktn/aws@~0.3.1` |");
  });

  it("counts a manifest finding towards the unmapped total, which is the exit code", () => {
    const finding = {
      file: "package.json",
      line: 4,
      symbol: "@cdktn/aws (dependencies)",
      reason: `existing @cdktn/aws range ~0.1.0 conflicts with ${TARGET_RANGE}: resolve by hand`,
    };
    const report = renderReport({ files: [], manifests: [], manifestFindings: [finding], wrote: false });
    expect(unmappedOf({ files: [], manifests: [], manifestFindings: [finding], wrote: false })).toHaveLength(1);
    expect(report).toContain("| package.json | 0 | 1 |");
    expect(report).toContain("| **total** | **0** | **1** |");
    expect(report).toContain(`| package.json | 4 | \`@cdktn/aws (dependencies)\` | ${finding.reason} |`);
  });
});
