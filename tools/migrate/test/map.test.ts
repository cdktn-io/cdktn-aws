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
import { classicModuleOfSpecifier, isClassicSpecifier } from "../src/map";
import { index } from "./helpers";
import { migrateManifest } from "../src/manifest";
import { renderReport } from "../src/report";

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
      member: "TfBucket.CorsRuleProperty",
    });
    expect(s3Bucket.symbols.get("S3BucketCorsRuleOutputReference")?.member).toBe(
      "TfBucket.CorsRulePropertyOutputReference",
    );
    expect(s3Bucket.symbols.get("S3BucketCorsRuleList")?.member).toBe("TfBucket.CorsRulePropertyList");
    expect(s3Bucket.symbols.get("s3BucketCorsRuleToTerraform")?.member).toBe(
      "tfBucketMapperCorsRulePropertyToTerraform",
    );
    expect(s3Bucket.symbols.get("s3BucketCorsRuleToHclTerraform")?.member).toBe(
      "tfBucketMapperCorsRulePropertyToHclTerraform",
    );
  });

  it("keys the config interface off the recorded name, not a `<className>Config` rule", () => {
    // The one entry where the rule is wrong: the config struct lost the pool race to a nested one.
    expect(
      index.byModule.get("wafv2-web-acl-association")!.symbols.get("Wafv2WebAclAssociationConfigA"),
    ).toEqual({ group: "waf", member: "TfWebAclAssociationConfig" });
    expect(index.byModule.get("s3-bucket")!.symbols.get("S3BucketConfig")).toEqual({
      group: "s3",
      member: "TfBucketConfig",
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
      member: "TfWebAclRule.ActionProperty",
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
      { file: "package.json", block: "dependencies", from: "^25.3.0", keptClassic: false },
    ]);
    expect(JSON.parse(result.after).dependencies).toEqual({
      "@cdktn/aws": "^0.2.0",
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
    expect(after.dependencies).toEqual({ "@cdktn/aws": "^0.2.0" });
    expect(after.peerDependencies).toEqual({ "@cdktn/aws": "^0.2.0", cdktn: "^0.24.0" });
  });

  it("keeps the classic dependency while the run has residual imports to install", () => {
    const file = write({ name: "example", dependencies: { "@cdktn/provider-aws": "^25.3.0" } });
    const result = migrateManifest(file, "package.json", true)!;
    expect(result.changes[0].keptClassic).toBe(true);
    expect(JSON.parse(result.after).dependencies).toEqual({
      "@cdktn/aws": "^0.2.0",
      "@cdktn/provider-aws": "^25.3.0",
    });
  });

  it("says nothing about a manifest that never depended on the classic library", () => {
    expect(migrateManifest(write({ name: "example", dependencies: { cdktn: "0.24.0" } }), "package.json")).toBeUndefined();
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
});
