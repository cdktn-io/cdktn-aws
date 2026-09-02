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
import { readNamingMap } from "../src/naming-map";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const map = readNamingMap(repoRoot);

/** The classic checkout; overridable so CI can point at wherever it cloned it. */
const classicRepo = process.env.CDKTN_PROVIDER_AWS_ROOT ?? path.resolve(repoRoot, "..", "ref-provider-aws");

describe("the classic name derivation", () => {
  // Over the mini fixture, so this asserts the rule and not the committed map.
  const index = buildClassicNameIndex(miniSchema());

  it("names a resource after its terraform type with the provider prefix dropped", () => {
    expect(index["aws_lb"]).toEqual({ module: "lb", className: "Lb", go: "lb", python: "lb" });
    expect(index["aws_lambda_function"]).toEqual({
      module: "lambda-function",
      className: "LambdaFunction",
      go: "lambdafunction",
      python: "lambda_function",
    });
  });

  it("keeps the surface marker AND the provider prefix on a data source and an ephemeral", () => {
    // The classic parser only strips `aws_` from a *leading* position, which `data_aws_lb` has not.
    expect(index["data_aws_lb"].className).toBe("DataAwsLb");
    expect(index["ephemeral_aws_lambda_invocation"].className).toBe("EphemeralAwsLambdaInvocation");
  });

  it("puts the provider block in `provider`, as `AwsProvider`", () => {
    expect(index["aws_provider"]).toEqual({
      module: "provider",
      className: "AwsProvider",
      go: "provider",
      python: "provider",
    });
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

  it("has a classic module for every entry, and no two entries share one", () => {
    const modules = Object.values(map.entries).map((e) => e.classic.module);
    expect(modules.filter((m) => !m)).toEqual([]);
    expect(new Set(modules).size).toBe(modules.length);
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
