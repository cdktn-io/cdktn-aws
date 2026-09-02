// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M6 — the `@cdktn/provider-aws` side of `naming-map.json`.
 *
 * The map is the classic -> 0.2.0 rename table, so its classic column is only worth as much as its
 * agreement with the real classic library. Three layers here:
 *
 *  1. the derivation itself, run pure over the committed mini fixture;
 *  2. the rows of the worked-examples table in `docs/m6-tf-naming.md`, read off the committed map;
 *  3. every one of the 2,401 rows cross-checked against a `../ref-provider-aws` checkout — the
 *     only check that can catch the derivation and the map being consistently wrong together.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { miniSchema } from "./helpers";
import {
  CLASSIC_ROOTS,
  buildClassicNameIndex,
  goPackageForSubmodule,
  pythonModuleForSubmodule,
  submoduleForModule,
} from "../src/classic-naming";
import { NESTED_SUFFIX_RULES, readNamingMap } from "../src/naming-map";
import { NAME_GRAMMAR, fileNameForTerraformType } from "../src/naming";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const map = readNamingMap(repoRoot);

/** The classic checkout; overridable so CI can point at wherever it cloned it. */
const classicRepo = process.env.CDKTN_PROVIDER_AWS_ROOT ?? path.resolve(repoRoot, "..", "ref-provider-aws");

describe("the classic name derivation", () => {
  // Over the mini fixture, so this asserts the rule and not the committed map.
  const index = buildClassicNameIndex(miniSchema());

  it("names a resource after its terraform type with the provider prefix dropped", () => {
    expect(index["aws_lb"].identity).toEqual({
      module: "lb",
      className: "Lb",
      configClassName: "LbConfig",
      go: "lb",
      python: "lb",
    });
    expect(index["aws_lambda_function"].identity).toEqual({
      module: "lambda-function",
      className: "LambdaFunction",
      configClassName: "LambdaFunctionConfig",
      go: "lambdafunction",
      python: "lambda_function",
    });
  });

  it("keeps the surface marker AND the provider prefix on a data source and an ephemeral", () => {
    // The classic parser only strips `aws_` from a *leading* position, which `data_aws_lb` has not.
    expect(index["data_aws_lb"].identity.className).toBe("DataAwsLb");
    expect(index["ephemeral_aws_lambda_invocation"].identity.className).toBe(
      "EphemeralAwsLambdaInvocation",
    );
  });

  it("puts the provider block in `provider`, as `AwsProvider`", () => {
    expect(index["aws_provider"].identity).toEqual({
      module: "provider",
      className: "AwsProvider",
      configClassName: "AwsProviderConfig",
      go: "provider",
      python: "provider",
    });
  });

  it("keeps each resource's nested struct names, the config struct excluded", () => {
    // The vendored parser's flat, whole-provider names — `<resource><path>` — in its own struct
    // order, which is the key the map joins the two parses on.
    expect(index["aws_lambda_function"].nested).toContain("LambdaFunctionVpcConfig");
    expect(index["aws_provider"].nested).toContain("AwsProviderAssumeRole");
    // `LambdaFunctionConfig` is the resource's Config interface, not a nested type.
    expect(index["aws_lambda_function"].nested).not.toContain("LambdaFunctionConfig");
  });

  it("derives the Go and Python submodules by jsii-pacmak's own rules", () => {
    expect(submoduleForModule("s3-bucket-versioning")).toBe("s3BucketVersioning");
    // pacmak go/util.js#goPackageNameForAssembly, then python/type-name.js#getPackageName.
    expect(goPackageForSubmodule("s3BucketVersioning")).toBe("s3bucketversioning");
    expect(pythonModuleForSubmodule("s3BucketVersioning")).toBe("s3_bucket_versioning");
  });
});

describe("naming-map.json", () => {
  it("records the classic package roots once, not per entry", () => {
    expect(map.classicRoots).toEqual(CLASSIC_ROOTS);
    expect(map.classicRoots.npm).toBe("@cdktn/provider-aws");
  });

  it("is sorted, and covers every generated class", () => {
    expect(Object.keys(map.entries)).toEqual([...Object.keys(map.entries)].sort());
    expect(Object.keys(map.entries).length).toBe(2401);
  });

  // The worked-examples table in docs/m6-tf-naming.md, its classic column. A doc that promises a
  // migrating consumer "`s3.TfBucketVersioning` was `s3BucketVersioning.S3BucketVersioningA`" is
  // only true while these hold.
  it.each([
    ["aws_s3_bucket_versioning", "TfBucketVersioning", "S3BucketVersioningA", "s3-bucket-versioning"],
    ["data_aws_s3_bucket", "DataTfBucket", "DataAwsS3Bucket", "data-aws-s3-bucket"],
    ["aws_instance", "TfInstance", "Instance", "instance"],
    ["aws_ec2_capacity_reservation", "TfCapacityReservation", "Ec2CapacityReservation", "ec2-capacity-reservation"],
    ["aws_prometheus_workspace", "TfWorkspace", "PrometheusWorkspace", "prometheus-workspace"],
    ["aws_acmpca_certificate_authority", "TfCertificateAuthority", "AcmpcaCertificateAuthority", "acmpca-certificate-authority"],
    ["aws_vpc", "TfVpc", "Vpc", "vpc"],
    ["aws_ec2_transit_gateway", "TfTransitGateway", "Ec2TransitGateway", "ec2-transit-gateway"],
    ["aws_lb", "TfLb", "Lb", "lb"],
    ["aws_alb", "TfAlb", "Alb", "alb"],
    ["aws_lb_listener", "TfListener", "LbListener", "lb-listener"],
    ["aws_lambda_function", "TfFunction", "LambdaFunction", "lambda-function"],
    ["ephemeral_aws_lambda_invocation", "EphemeralTfInvocation", "EphemeralAwsLambdaInvocation", "ephemeral-aws-lambda-invocation"],
    ["data_aws_identitystore_user", "DataTfUser", "DataAwsIdentitystoreUser", "data-aws-identitystore-user"],
    ["aws_cloudwatch_log_group", "TfGroup", "CloudwatchLogGroup", "cloudwatch-log-group"],
    ["aws_provider", "AwsProvider", "AwsProvider", "provider"],
  ])("%s: %s was %s", (key, className, classicClass, classicModule) => {
    const entry = map.entries[key];
    expect(entry.className).toBe(className);
    expect(entry.classic.className).toBe(classicClass);
    expect(entry.classic.module).toBe(classicModule);
    expect(entry.classic.go).toBe(goPackageForSubmodule(submoduleForModule(classicModule)));
    expect(entry.classic.python).toBe(pythonModuleForSubmodule(submoduleForModule(classicModule)));
  });

  it("records the config interface's classic name, because one entry breaks the obvious rule", () => {
    // `<className>Config` is what 2,400 of them are called; the config struct competes for the same
    // `uniqueClassName` pool as the nested ones, so the map records the name instead of deriving it.
    const recorded = Object.entries(map.entries).filter(
      ([, e]) => e.classic.configClassName !== `${e.classic.className}Config`,
    );
    expect(recorded.map(([key, e]) => [key, e.classic.configClassName])).toEqual([
      ["aws_wafv2_web_acl_association", "Wafv2WebAclAssociationConfigA"],
    ]);
    expect(Object.values(map.entries).filter((e) => !e.classic.configClassName)).toEqual([]);
  });

  it("has a classic module for every entry, and no two entries share one", () => {
    const modules = Object.values(map.entries).map((e) => e.classic.module);
    expect(modules.filter((m) => !m)).toEqual([]);
    expect(new Set(modules).size).toBe(modules.length);
  });
});

describe("naming-map.json's nested section", () => {
  it("publishes the suffix rules it expects its readers to apply", () => {
    expect(map.nestedSuffixRules).toEqual(NESTED_SUFFIX_RULES);
    expect(map.nestedSuffixRules.suffixes).toContain("OutputReference");
  });

  it("carries one row per nested struct, path-keyed and sorted", () => {
    const rows = Object.values(map.entries).reduce(
      (n, e) => n + Object.keys(e.nested ?? {}).length,
      0,
    );
    // The generator's own count for the pinned schema — 9,856 nested types over 2,401 entries.
    expect(rows).toBe(9856);
    for (const entry of Object.values(map.entries)) {
      const paths = Object.keys(entry.nested ?? {});
      expect(paths).toEqual([...paths].sort());
      expect(paths.filter((p) => p === "")).toEqual([]);
    }
  });

  it("names every nested type `<leaf>Property`, or a full-path form when leaves collide", () => {
    const offGrammar = Object.entries(map.entries).flatMap(([key, e]) =>
      Object.entries(e.nested ?? {})
        .filter(([, n]) => !NAME_GRAMMAR.propertyInterface.test(n.className))
        .map(([p, n]) => `${key} ${p}: ${n.className}`),
    );
    expect(offGrammar).toEqual([]);
    expect(map.entries["aws_s3_bucket"].nested!["cors_rule"]).toEqual({
      className: "CorsRuleProperty",
      classic: "S3BucketCorsRule",
    });
  });

  it("records a mapperPrefix only where it is not the class name", () => {
    // `naming.mapperPrefixesForGroup`'s `Mapper` fallback, which only `s3` and `waf` need.
    const overridden = Object.entries(map.entries)
      .filter(([, e]) => e.mapperPrefix !== undefined)
      .map(([key, e]) => [key, e.group, e.mapperPrefix]);
    expect(overridden.map((r) => r[0])).toEqual([
      "aws_s3_bucket",
      "aws_s3_bucket_object_lock_configuration",
      "aws_s3_bucket_server_side_encryption_configuration",
      "aws_wafv2_web_acl",
      "aws_wafv2_web_acl_rule",
    ]);
    expect(new Set(overridden.map((r) => r[1]))).toEqual(new Set(["s3", "waf"]));
    expect(map.entries["aws_s3_bucket"].mapperPrefix).toBe("TfBucketMapper");
    expect(map.entries["aws_wafv2_web_acl"].mapperPrefix).toBe("TfWebAclMapper");
    expect(map.entries["aws_lambda_function"].mapperPrefix).toBeUndefined();
  });

  it("mounts the provider's own blocks on AwsProvider", () => {
    expect(map.entries["aws_provider"].nested!["assume_role"]).toEqual({
      className: "AssumeRoleProperty",
      classic: "AwsProviderAssumeRole",
    });
  });
});

// Locally, a missing ref-provider-aws checkout is an ordinary state — it is a sibling clone, not a
// submodule — so this reports as visibly skipped. In CI it is not: an absent checkout would turn
// 2,401 assertions into a green run that asserted nothing about the names the migration tool will
// rewrite. Same treatment as `manifests.test.ts`'s Go fleet — fail with the fix in the message.
const classicDeclaredAbsent = process.env.CDKTN_PROVIDER_AWS_ROOT === "none";
if (!classicDeclaredAbsent && !fs.existsSync(classicRepo) && process.env.CI) {
  throw new Error(
    `the classic provider library is not at ${classicRepo}, and this is a CI run, where skipping ` +
      "it would report 2,401 unrun assertions as green. Check out cdktn-io/cdktn-provider-aws as " +
      `a sibling of this repository (${path.resolve(repoRoot, "..", "ref-provider-aws")}), point ` +
      "CDKTN_PROVIDER_AWS_ROOT at it, or set CDKTN_PROVIDER_AWS_ROOT=none to declare in the " +
      "workflow that this runner has none.",
  );
}
const describeClassic =
  !classicDeclaredAbsent && fs.existsSync(classicRepo) ? describe : describe.skip;

describeClassic(`the classic library at ${classicRepo}`, () => {
  /** What each surface's class extends in the classic tree. */
  const BASE_CLASS: Record<string, string> = {
    resource: "TerraformResource",
    data_source: "TerraformDataSource",
    ephemeral_resource: "TerraformEphemeralResource",
    provider: "TerraformProvider",
  };

  it("declares the package roots the map records", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(classicRepo, "package.json"), "utf-8"));
    expect(pkg.name).toBe(CLASSIC_ROOTS.npm);
    expect(pkg.jsii.targets.python.module).toBe(CLASSIC_ROOTS.python);
    expect(pkg.jsii.targets.go.moduleName).toBe(CLASSIC_ROOTS.goModule);
    expect(pkg.jsii.targets.go.packageName).toBe(CLASSIC_ROOTS.goPackage);
  });

  it("exports every one of the map's classic classes from the module the map names", () => {
    const missing: string[] = [];
    for (const [key, entry] of Object.entries(map.entries)) {
      const file = path.join(classicRepo, "src", entry.classic.module, "index.ts");
      if (!fs.existsSync(file)) {
        missing.push(`${key}: no src/${entry.classic.module}/index.ts`);
        continue;
      }
      const declaration = `export class ${entry.classic.className} extends cdktn.${BASE_CLASS[entry.surface]}`;
      if (!fs.readFileSync(file, "utf-8").includes(declaration)) {
        missing.push(`${key}: src/${entry.classic.module}/index.ts has no "${declaration}"`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("declares every entry's Config interface under the name the map records", () => {
    // The migration tool keys `<class>Config` off this field for all 2,401 entries; a rule instead
    // of a record missed exactly one of them, and only a sweep this wide can see that.
    const missing: string[] = [];
    for (const [key, entry] of Object.entries(map.entries)) {
      const file = path.join(classicRepo, "src", entry.classic.module, "index.ts");
      if (!fs.existsSync(file)) continue; // reported by the class sweep above
      const declared = new RegExp(`^export interface ${entry.classic.configClassName}[ ]*(extends |\\{)`, "m");
      if (!declared.test(fs.readFileSync(file, "utf-8"))) {
        missing.push(`${key}: src/${entry.classic.module}/index.ts has no "${entry.classic.configClassName}"`);
      }
    }
    expect(missing).toEqual([]);
  });

  // The nested section is the migration tool's whole rewrite table for block types, and its claim
  // is not "these names exist" but "these names, plus five spellings derived from them by
  // NESTED_SUFFIX_RULES, are what @cdktn/provider-aws declares". Ten resources chosen to span every
  // shape that has ever surprised us: the `…A` quirk on both sides of the pair that causes it, the
  // two groups whose mappers carry the `Mapper` disambiguator, a data source, an ephemeral, an
  // alias resource, and the provider block (whose nested types get no wrapper classes at all).
  describe.each([
    ["aws_s3_bucket", "s3-bucket"],
    ["aws_s3_bucket_versioning", "s3-bucket-versioning"],
    ["aws_wafv2_web_acl", "wafv2-web-acl"],
    ["aws_lambda_function", "lambda-function"],
    ["aws_iam_role", "iam-role"],
    ["aws_lb_listener", "lb-listener"],
    ["aws_instance", "instance"],
    ["data_aws_iam_policy_document", "data-aws-iam-policy-document"],
    ["ephemeral_aws_kms_secrets", "ephemeral-aws-kms-secrets"],
    ["aws_provider", "provider"],
  ])("%s's nested types", (key, module) => {
    const entry = map.entries[key];
    const source = fs.readFileSync(path.join(classicRepo, "src", module, "index.ts"), "utf-8");
    const nested = Object.entries(entry.nested ?? {});

    it("declares every `classic` name as an interface, and its two mappers", () => {
      expect(nested.length).toBeGreaterThan(0);
      const missing = nested.flatMap(([p, n]) => {
        const camel = `${n.classic.charAt(0).toLowerCase()}${n.classic.slice(1)}`;
        return [
          `export interface ${n.classic} {`,
          `export function ${camel}ToTerraform(`,
          `export function ${camel}ToHclTerraform(`,
        ]
          .filter((decl) => !source.includes(decl))
          .map((decl) => `${p}: no "${decl}"`);
      });
      expect(missing).toEqual([]);
    });

    it("has the same wrapper classes there as `<className><suffix>` has here", () => {
      // The suffix rules are symmetric or they are useless: a consumer holding
      // `S3BucketCorsRuleList` has to land on `TfBucket.CorsRulePropertyList` and nowhere else.
      const ours = fs.readFileSync(
        path.join(repoRoot, "generated", entry.group, "src", `${fileNameForTerraformType(key)}.ts`),
        "utf-8",
      );
      const asymmetric = nested.flatMap(([p, n]) =>
        NESTED_SUFFIX_RULES.suffixes
          .filter((suffix) => suffix !== "")
          .filter(
            (suffix) =>
              source.includes(`export class ${n.classic}${suffix} extends`) !==
              ours.includes(`export class ${n.className}${suffix} extends`),
          )
          .map((suffix) => `${p}: ${n.classic}${suffix} / ${n.className}${suffix}`),
      );
      expect(asymmetric).toEqual([]);
    });
  });

  it("exports its whole submodule set through src/index.ts, and the map covers all of it", () => {
    // The classic index's `export * as <submodule> from './<module>/index'` lines ARE the jsii
    // submodules; the two the map does not carry are the ones that are not schema entries.
    const index = fs.readFileSync(path.join(classicRepo, "src", "index.ts"), "utf-8");
    const modules = [...index.matchAll(/^export \* as \w+ from '\.\/(.+)\/index';$/gm)].map((m) => m[1]);
    const mapped = new Set(Object.values(map.entries).map((e) => e.classic.module));
    expect(modules.filter((m) => !mapped.has(m))).toEqual(["provider-functions"]);
    expect([...mapped].filter((m) => !modules.includes(m))).toEqual([]);
  });
});
