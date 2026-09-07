// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M1 acceptance C — the generator's contract tests, over the committed mini fixture.
 *
 * The fixture (`fixtures/extract-fixture.mjs`) is a deterministic slice of the pinned schema
 * chosen to hit every rule this file asserts: an aliased resource, a reserved-word-ish resource,
 * a deeply nested resource, a data source, an ephemeral resource, and the provider block.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  FIXTURE_GROUPS,
  emit,
  fileBytes,
  listFiles,
  miniGroups,
  miniSchema,
  namespaceMembers,
  shuffleSchemaKeys,
  topLevelExports,
} from "./helpers";
import {
  NAME_GRAMMAR,
  classNameForEntry,
  fileNameForTerraformType,
  isProviderExport,
  propertyTypeNamesForResource,
} from "../src/naming";
import { buildNamingMap } from "../src/naming-map";
import { CLASSIC_ROOTS, buildClassicNameIndex } from "../src/classic-naming";
import { assertUniqueGoPackageNames, goPackageName, membersOf, npmPackageName, readGroups } from "../src/groups";
import { groupsJsonPath } from "../src/groups";

let outDir: string;
let result: ReturnType<typeof emit>["result"];

const read = (rel: string) => fs.readFileSync(path.join(outDir, rel), "utf-8");

beforeAll(() => {
  const emitted = emit();
  outDir = emitted.outDir;
  result = emitted.result;
});

afterAll(() => {
  if (outDir) fs.rmSync(outDir, { recursive: true, force: true });
});

describe("layout", () => {
  it("emits one standalone package directory per requested group and nothing at the root", () => {
    const top = fs.readdirSync(outDir, { withFileTypes: true });
    expect(top.filter((e) => !e.isDirectory())).toEqual([]);
    expect(top.map((e) => e.name).sort()).toEqual([...FIXTURE_GROUPS].sort());
  });

  it("gives every package the four standalone-jsii files", () => {
    for (const group of FIXTURE_GROUPS) {
      const files = listFiles(path.join(outDir, group));
      expect(files).toContain("package.json");
      expect(files).toContain("README.md");
      expect(files).toContain("tsconfig.json");
      expect(files).toContain("src/index.ts");
    }
  });

  it("imports nothing but cdktn and constructs, and never escapes its own src/", () => {
    const spec = /(?:\bfrom\s*|\brequire\s*\(\s*)["']([^"']+)["']/g;
    for (const group of FIXTURE_GROUPS) {
      const srcDir = path.join(outDir, group, "src");
      for (const rel of listFiles(srcDir)) {
        const text = fs.readFileSync(path.join(srcDir, rel), "utf-8");
        for (const m of text.matchAll(spec)) {
          const s = m[1];
          if (s.startsWith(".")) {
            expect(path.relative(srcDir, path.resolve(srcDir, s)).startsWith("..")).toBe(false);
          } else {
            expect(["cdktn", "constructs"]).toContain(s);
          }
        }
      }
    }
  });
});

describe("naming", () => {
  /**
   * The M6 table (docs/m6-tf-naming.md), asserted on the pure function so that groups the fixture
   * does not contain — and cannot, without carrying their schemas — are covered too. The fixture's
   * own two groups are then checked on real emitted output below.
   */
  it.each([
    ["aws_s3_bucket_versioning", "resource", ["s3"], "AwsBucketVersioning"],
    ["data_aws_s3_bucket", "data_source", ["s3"], "DataAwsBucket"],
    ["aws_instance", "resource", ["ec2"], "AwsInstance"],
    ["aws_ec2_capacity_reservation", "resource", ["ec2"], "AwsCapacityReservation"],
    // group `amp`, whose curated prefix is the terraform spelling `prometheus` -> `amp.AwsWorkspace`
    ["aws_prometheus_workspace", "resource", ["prometheus"], "AwsWorkspace"],
    // group `acm_pca`, curated prefix `acmpca` -> `acm_pca.AwsCertificateAuthority`
    ["aws_acmpca_certificate_authority", "resource", ["acmpca"], "AwsCertificateAuthority"],
    // the type IS the prefix: nothing left to name the class after, so the raw type is kept
    ["aws_vpc", "resource", ["vpc"], "AwsVpc"],
    ["aws_lb", "resource", ["lb"], "AwsLb"],
    ["aws_alb", "resource", ["lb"], "AwsAlb"],
    ["aws_lb_listener", "resource", ["lb"], "AwsListener"],
    ["aws_lambda_function", "resource", ["lambda"], "AwsFunction"],
    ["ephemeral_aws_lambda_invocation", "ephemeral_resource", ["lambda"], "EphemeralAwsInvocation"],
    ["data_aws_identitystore_user", "data_source", ["identitystore"], "DataAwsUser"],
    // the surface marker leads and the stem is unchanged, so one terraform name can still produce
    // two classes: `quicksight.AwsDataSet` beside `quicksight.DataAwsDataSet`
    ["aws_quicksight_data_set", "resource", ["quicksight"], "AwsDataSet"],
    ["data_aws_quicksight_data_set", "data_source", ["quicksight"], "DataAwsDataSet"],
    // longest match wins, so the group's two prefixes do not fight over cloudwatch_log_*
    ["aws_cloudwatch_log_group", "resource", ["cloudwatch_log", "cloudwatch"], "AwsGroup"],
    ["aws_cloudwatch_query_definition", "resource", ["cloudwatch_log", "cloudwatch"], "AwsQueryDefinition"],
    // an exact match empties the stem, so the next-longest prefix gets its turn
    ["aws_ec2_transit_gateway", "resource", ["ec2", "ec2_transit_gateway"], "AwsTransitGateway"],
    ["aws_ec2_transit_gateway_route", "resource", ["ec2", "ec2_transit_gateway"], "AwsRoute"],
    // …and when the shorter prefix does not match either, the raw type is kept
    ["aws_vpc", "resource", ["ec2", "vpc"], "AwsVpc"],
    // an EMPTY list is legal and strips nothing — the provider's own meta data sources
    ["data_aws_arn", "data_source", [], "DataAwsArn"],
    ["data_aws_service_principal", "data_source", [], "DataAwsServicePrincipal"],
  ] as const)("names %s (%s) %s -> %s", (parserType, surface, stripPrefixes, expected) => {
    expect(classNameForEntry({ parserType, surface, stripPrefixes: [...stripPrefixes] })).toBe(expected);
  });

  it("refuses a group that omits stripPrefixes, and accepts one that declares it empty", () => {
    // Absence means "nobody decided" and would silently restore the un-stripped spelling; `[]` is a
    // decision. Probed on a copy of groups.json so the real file stays the fixture it is.
    const real = JSON.parse(fs.readFileSync(groupsJsonPath, "utf-8"));
    const probe = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "groups-")), "groups.json");
    const write = (mutate: (g: Record<string, { stripPrefixes?: string[] }>) => void) => {
      const copy = JSON.parse(JSON.stringify(real));
      mutate(copy.groups);
      fs.writeFileSync(probe, JSON.stringify(copy));
    };

    write((groups) => delete groups.s3.stripPrefixes);
    expect(() => readGroups(probe)).toThrow(/group "s3" has no "stripPrefixes"/);

    write((groups) => (groups.s3.stripPrefixes = []));
    expect(readGroups(probe).groups.s3.stripPrefixes).toEqual([]);
  });

  it("strips the group's own service prefix from the emitted class names", () => {
    const byName = new Map(
      result.groups.flatMap((g) => g.entries.map((e) => [`${g.slug}:${e.terraformName}:${e.schemaType}`, e])),
    );
    expect(byName.get("elb:aws_lb:resource")!.className).toBe("AwsLb");
    expect(byName.get("elb:aws_alb:resource")!.className).toBe("AwsAlb");
    expect(byName.get("lambda:aws_lambda_function:resource")!.className).toBe("AwsFunction");
    // decision 2, the load-bearing example: the group already says "lambda".
    expect(byName.get("lambda:aws_lambda_function:resource")!.className).not.toBe("AwsLambdaFunction");
    expect(byName.get("elb:aws_lb:data_source")!.className).toBe("DataAwsLb");
    expect(byName.get("lambda:aws_lambda_invocation:ephemeral_resource")!.className).toBe(
      "EphemeralAwsInvocation",
    );
    // the provider construct is not an L1 resource and keeps its `@cdktn/provider-aws` name
    expect(byName.get("provider:aws:provider")!.className).toBe("AwsProvider");
  });

  it("builds a naming map keyed by the surface-marked terraform type", () => {
    // Two classes, one terraform name: the key has to carry the surface or the migration tool
    // cannot tell `Lb` from `DataAwsLb`.
    const map = buildNamingMap(result, buildClassicNameIndex(miniSchema()));
    expect(map.classicRoots).toBe(CLASSIC_ROOTS);
    expect(map.entries["aws_lb"]).toEqual({
      surface: "resource",
      group: "elb",
      className: "AwsLb",
      classic: { module: "lb", className: "Lb", configClassName: "LbConfig", go: "lb", python: "lb" },
      // one row per nested struct; the four wrapper spellings and the two mappers are derived from
      // it by `NESTED_SUFFIX_RULES` rather than repeated four times over
      nested: {
        access_logs: { className: "AccessLogsProperty", classic: "LbAccessLogs" },
        connection_logs: { className: "ConnectionLogsProperty", classic: "LbConnectionLogs" },
        health_check_logs: { className: "HealthCheckLogsProperty", classic: "LbHealthCheckLogs" },
        ipam_pools: { className: "IpamPoolsProperty", classic: "LbIpamPools" },
        minimum_load_balancer_capacity: {
          className: "MinimumLoadBalancerCapacityProperty",
          classic: "LbMinimumLoadBalancerCapacity",
        },
        subnet_mapping: { className: "SubnetMappingProperty", classic: "LbSubnetMapping" },
        timeouts: { className: "TimeoutsProperty", classic: "LbTimeouts" },
      },
    });
    expect(map.entries["data_aws_lb"].className).toBe("DataAwsLb");
    expect(map.entries["aws_provider"]).toEqual({
      surface: "provider",
      group: "provider",
      className: "AwsProvider",
      classic: {
        module: "provider",
        className: "AwsProvider",
        configClassName: "AwsProviderConfig",
        go: "provider",
        python: "provider",
      },
      nested: {
        assume_role: { className: "AssumeRoleProperty", classic: "AwsProviderAssumeRole" },
        assume_role_with_web_identity: {
          className: "AssumeRoleWithWebIdentityProperty",
          classic: "AwsProviderAssumeRoleWithWebIdentity",
        },
        default_tags: { className: "DefaultTagsProperty", classic: "AwsProviderDefaultTags" },
        endpoints: { className: "EndpointsProperty", classic: "AwsProviderEndpoints" },
        ignore_tags: { className: "IgnoreTagsProperty", classic: "AwsProviderIgnoreTags" },
      },
    });
    expect(Object.keys(map.entries)).toEqual([...Object.keys(map.entries)].sort());
  });

  it("refuses to write a nested row whose two parses have drifted apart", () => {
    // The nested join is positional — the two parsers walk one schema block the same way — so the
    // one thing it must never do is line rows up silently when they no longer correspond.
    const drifted = buildClassicNameIndex(miniSchema());
    drifted["aws_lb"] = { ...drifted["aws_lb"], nested: ["LbAccessLogs", "LbTimeouts"] };
    expect(() => buildNamingMap(result, drifted)).toThrow(
      /"aws_lb" parses to 7 nested types here and 2 in @cdktn\/provider-aws/,
    );

    // Same length, one adjacent pair swapped — the case a length check alone would wave through.
    const misaligned = buildClassicNameIndex(miniSchema());
    const swapped = [...misaligned["aws_lb"].nested];
    [swapped[5], swapped[6]] = [swapped[6], swapped[5]];
    misaligned["aws_lb"] = { ...misaligned["aws_lb"], nested: swapped };
    expect(() => buildNamingMap(result, misaligned)).toThrow(
      /lines up with the classic class "LbTimeouts", which does not end in "SubnetMapping"/,
    );
  });

  it("refuses to write a map row it has no @cdktn/provider-aws identity for", () => {
    // A missing classic side is the migration tool losing a rename silently, so it aborts the run.
    const holed = buildClassicNameIndex(miniSchema());
    delete holed["aws_lb"];
    expect(() => buildNamingMap(result, holed)).toThrow(/no @cdktn\/provider-aws identity for "aws_lb"/);
  });

  it("suffixes the config interface with Config, never Props", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    expect(text).toMatch(/^export interface AwsFunctionConfig extends cdktn\.TerraformMetaArguments/m);
    expect(text).not.toMatch(/^export interface \w+Props\b/m);
  });

  it("keeps every emitted export inside the name grammar", () => {
    for (const group of FIXTURE_GROUPS) {
      const srcDir = path.join(outDir, group, "src");
      for (const rel of listFiles(srcDir).filter((f) => f !== "index.ts")) {
        const text = fs.readFileSync(path.join(srcDir, rel), "utf-8");
        for (const { kind, name } of topLevelExports(text)) {
          if (isProviderExport(name)) continue;
          if (kind === "function") {
            expect(name).toMatch(NAME_GRAMMAR.mapperFunction);
          } else if (kind === "class") {
            expect(name).toMatch(NAME_GRAMMAR.resourceClass);
          } else {
            expect(name).toMatch(NAME_GRAMMAR.configInterface);
          }
        }
        for (const member of namespaceMembers(text)) {
          expect(
            [
              NAME_GRAMMAR.propertyInterface,
              NAME_GRAMMAR.propertyOutputReference,
              NAME_GRAMMAR.propertyList,
              NAME_GRAMMAR.propertyMap,
            ].some((re) => re.test(member)),
          ).toBe(true);
        }
      }
    }
  });

  it("keeps the classic cdktn file-name spelling, keyed on the terraform type not the class", () => {
    expect(listFiles(path.join(outDir, "elb", "src"))).toEqual(
      expect.arrayContaining(["aws-lb.ts", "aws-alb.ts", "data-aws-lb.ts"]),
    );
    expect(listFiles(path.join(outDir, "lambda", "src"))).toContain("ephemeral-aws-lambda-invocation.ts");
    // `AwsFunction` lives in `aws-lambda-function.ts`: neither rename moved a file, which is what
    // keeps hashes.json keyed on the same tree it was in 0.1.x.
    expect(fileNameForTerraformType("aws_lambda_function")).toBe("aws-lambda-function");
    expect(fileNameForTerraformType("data_aws_s3_bucket")).toBe("data-aws-s3-bucket");
    expect(read("lambda/src/aws-lambda-function.ts")).toContain("export class AwsFunction ");
  });
});

describe("namespace mount", () => {
  it("merges the nested types into a namespace on the resource class", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    expect(text).toMatch(/^export class AwsFunction extends cdktn\.TerraformResource/m);
    expect(text).toMatch(/^export namespace AwsFunction \{/m);
    const members = namespaceMembers(text);
    expect(members).toContain("VpcConfigProperty");
    expect(members).toContain("VpcConfigPropertyOutputReference");
    // deep nesting: the fixture's deepest resource has many nested blocks
    expect(members.filter((m) => m.endsWith("Property")).length).toBeGreaterThan(10);
  });

  it("references nested types qualified from outside the namespace and bare from inside", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    const nsStart = text.indexOf("\nexport namespace ");
    const top = text.slice(0, nsStart);
    const body = text.slice(nsStart);
    expect(top).toContain("AwsFunction.VpcConfigProperty");
    // inside the namespace the sibling type resolves bare — never self-qualified
    expect(body).not.toContain("AwsFunction.VpcConfigProperty");
    expect(body).toMatch(/^export interface VpcConfigProperty \{/m);
  });

  it("keeps the mapper functions at module level, where jsii ignores them", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    const nsStart = text.indexOf("\nexport namespace ");
    expect(text.slice(0, nsStart)).toMatch(/^export function awsFunctionVpcConfigPropertyToTerraform\(/m);
    expect(text.slice(nsStart)).not.toMatch(/^export function /m);
  });

  it("prefixes mapper names with the owning class so two resources in one package cannot collide", () => {
    // `timeouts` exists on both fixture lambda resources; the mappers must not share a name.
    expect(read("lambda/src/aws-lambda-function.ts")).toContain(
      "export function awsFunctionTimeoutsPropertyToTerraform(",
    );
    expect(read("lambda/src/aws-lambda-permission.ts")).toContain(
      "export function awsPermissionTimeoutsPropertyToTerraform(",
    );
  });
});

describe("surfaces", () => {
  it("emits a data source against TerraformDataSource", () => {
    expect(read("elb/src/data-aws-lb.ts")).toMatch(
      /^export class DataAwsLb extends cdktn\.TerraformDataSource/m,
    );
  });

  it("emits an ephemeral resource against TerraformEphemeralResource, with no import helper", () => {
    const text = read("lambda/src/ephemeral-aws-lambda-invocation.ts");
    expect(text).toMatch(/^export class EphemeralAwsInvocation extends cdktn\.TerraformEphemeralResource/m);
    expect(text).toMatch(
      /^export interface EphemeralAwsInvocationConfig extends cdktn\.TerraformEphemeralMetaArguments/m,
    );
    // an ephemeral resource has no state to import into
    expect(text).not.toContain("generateConfigForImport");
  });

  it("emits a provider whose terraformGeneratorMetadata satisfies validate-provider-presence", () => {
    const text = read("provider/src/aws-provider.ts");
    expect(text).toMatch(/^export class AwsProvider extends cdktn\.TerraformProvider/m);
    expect(text).toContain("providerName: 'aws'");
    expect(text).toContain("terraformProviderSource: 'hashicorp/aws'");
    expect(text).toContain(`public static readonly tfResourceType = "aws";`);
    // a provider block takes no count/dependsOn/lifecycle
    expect(text).toMatch(/^export interface AwsProviderConfig \{/m);
    // the alias attribute the provider schema omits
    expect(text).toContain("readonly alias?: string;");
  });

  it("carries reserved-word-ish attributes through verbatim", () => {
    // `delete` is a Go keyword; jsii warns (JSII5018) but must still see the member.
    expect(read("lambda/src/aws-lambda-permission.ts")).toContain("readonly delete?: string;");
    // `internal` is a C# keyword, and `type` a Go one.
    const dataLb = read("elb/src/data-aws-lb.ts");
    expect(dataLb).toContain("public get internal()");
  });
});

describe("provider version", () => {
  const AWS_FQPN = "registry.terraform.io/hashicorp/aws";
  const pinned = fs
    .readFileSync(path.join(__dirname, "..", "..", "..", "schemas", "PROVIDER_VERSION"), "utf-8")
    .trim();

  it("carries the pin in the fixture rather than falling back to 'latest'", () => {
    // `terraform providers schema -json` records no version; src/schema.ts synthesizes
    // provider_versions from schemas/PROVIDER_VERSION for every real run, and the fixture has to
    // do the same or these snapshots pin output `pnpm generate` never produces.
    expect(pinned).toBe("6.62.0");
    expect(miniSchema().provider_versions?.[AWS_FQPN]).toBe(pinned);
  });

  it("stamps the pinned version into every doc link and into the generator metadata", () => {
    // Only links the generator itself writes: a file-header `// <url>`, or a `{@link <url>}` on a
    // member. A registry URL sitting inside an upstream *description* (the `region` attribute
    // links to `/aws/latest/docs#aws-configuration-reference`) is upstream prose carried through
    // verbatim and is deliberately not rewritten.
    const emittedLink = /(?:^\/\/ |\{@link )https:\/\/registry\.terraform\.io\/providers\/hashicorp\/aws\/([^/]+)\/docs/gm;
    const files = fileBytes(outDir);
    const versions = new Set(
      Object.values(files).flatMap((text) => [...text.matchAll(emittedLink)].map((m) => m[1])),
    );
    expect(versions.size).toBeGreaterThan(0);
    expect([...versions]).toEqual([pinned]);
    expect(read("provider/src/aws-provider.ts")).toContain(`providerVersion: '${pinned}'`);
    expect(read("provider/src/aws-provider.ts")).not.toContain("providerVersion: 'latest'");
  });
});

describe("aliases", () => {
  it("generates an alias as its own class inside its canonical target's group", () => {
    const elb = result.groups.find((g) => g.slug === "elb")!;
    const names = elb.entries.map((e) => e.className);
    expect(names).toContain("AwsAlb");
    expect(names).toContain("AwsLb");
    expect(read("elb/src/index.ts")).toContain("export * from './aws-alb';");
    // and it is a real, independent class — not a re-export of AwsLb
    expect(read("elb/src/aws-alb.ts")).toMatch(/^export class AwsAlb extends cdktn\.TerraformResource/m);
    expect(read("elb/src/aws-alb.ts")).toContain(`public static readonly tfResourceType = "aws_alb";`);
  });

  it("adds an alias only to the surfaces the schema actually has it on", () => {
    const members = membersOf(miniGroups(), "elb", (surface) => surface === "resources");
    expect(members.resources).toContain("aws_alb");
    expect(members.dataSources).not.toContain("aws_alb");
  });
});

describe("determinism", () => {
  it("is byte-identical when the schema-entry key order is shuffled", () => {
    const a = emit();
    const b = emit(shuffleSchemaKeys(miniSchema(), "entries"));
    try {
      expect(fileBytes(b.outDir)).toEqual(fileBytes(a.outDir));
    } finally {
      fs.rmSync(a.outDir, { recursive: true, force: true });
      fs.rmSync(b.outDir, { recursive: true, force: true });
    }
  });

  it("assigns the same nested-type names when every block key order is shuffled", () => {
    const a = emit();
    const b = emit(shuffleSchemaKeys(miniSchema(), "deep"));
    try {
      for (const group of FIXTURE_GROUPS) {
        for (const rel of listFiles(path.join(a.outDir, group, "src"))) {
          const ta = fs.readFileSync(path.join(a.outDir, group, "src", rel), "utf-8");
          const tb = fs.readFileSync(path.join(b.outDir, group, "src", rel), "utf-8");
          expect(namespaceMembers(tb)).toEqual(namespaceMembers(ta));
          expect(topLevelExports(tb).map((e) => e.name).sort()).toEqual(
            topLevelExports(ta).map((e) => e.name).sort(),
          );
        }
      }
    } finally {
      fs.rmSync(a.outDir, { recursive: true, force: true });
      fs.rmSync(b.outDir, { recursive: true, force: true });
    }
  });

  it("resolves nested-type names independently of entry order, including the collision fallback", () => {
    // Two paths whose LEAVES collide: the fallback must re-derive both from their full path, and
    // must do so identically whichever order they arrive in.
    const entries = [{ path: ["listener", "rule"] }, { path: ["default", "rule"] }, { path: ["target"] }];
    const forward = propertyTypeNamesForResource(entries);
    const reversed = propertyTypeNamesForResource([...entries].reverse());
    expect(reversed).toEqual(forward);
    expect(forward["listener.rule"]).toBe("ListenerRuleProperty");
    expect(forward["default.rule"]).toBe("DefaultRuleProperty");
    expect(forward["target"]).toBe("TargetProperty");
  });

  it("breaks a still-colliding tie by sorted path key, not first-seen order", () => {
    // ['a_b','c'] and ['a','b_c'] PascalCase to the same full-path name.
    const entries = [{ path: ["a_b", "c"] }, { path: ["a", "b_c"] }];
    const forward = propertyTypeNamesForResource(entries);
    expect(propertyTypeNamesForResource([...entries].reverse())).toEqual(forward);
    expect(new Set(Object.values(forward)).size).toBe(2);
    expect(forward["a.b_c"]).toBe("ABCProperty");
    expect(forward["a_b.c"]).toBe("ABCProperty2");
  });
});

describe("package manifests", () => {
  const pkg = (group: string) => JSON.parse(read(`${group}/package.json`));

  it("is a standalone, never-published jsii package", () => {
    for (const group of FIXTURE_GROUPS) {
      const p = pkg(group);
      expect(p.name).toBe(npmPackageName(group));
      expect(p.private).toBe(true);
      expect(p.license).toBe("MPL-2.0");
      expect(p.main).toBe("lib/index.js");
      expect(p.types).toBe("lib/index.d.ts");
      expect(p.stability).toBe("experimental");
      expect(p.author).toEqual({ name: "cdktn-io", organization: true });
      expect(p.repository.url).toBe("https://github.com/cdktn-io/cdktn-aws.git");
      expect(p.dependencies).toBeUndefined();
    }
  });

  it("mirrors the peerDependencies into devDependencies (kills JSII6)", () => {
    for (const group of FIXTURE_GROUPS) {
      const p = pkg(group);
      expect(Object.keys(p.peerDependencies).sort()).toEqual(["cdktn", "constructs"]);
      expect(Object.keys(p.devDependencies).sort()).toEqual(["cdktn", "constructs"]);
    }
  });

  it("names one Go module root and one per-group package (kills JSII3 too, via README)", () => {
    for (const group of FIXTURE_GROUPS) {
      const p = pkg(group);
      expect(p.jsii.targets.go.moduleName).toBe("github.com/cdktn-io/cdktn-aws-go");
      expect(p.jsii.targets.go.packageName).toBe(goPackageName(group));
      expect(p.jsii.targets.go.packageName).toMatch(/^[a-z][a-z0-9]*$/);
      expect(read(`${group}/README.md`).length).toBeGreaterThan(0);
    }
    expect(pkg("provider").jsii.targets.go.packageName).toBe("provider");
  });

  it("produces a unique, legal, non-keyword Go packageName for every one of the real 257 groups", () => {
    const real = readGroups(groupsJsonPath);
    const byName = assertUniqueGoPackageNames(real);
    // 257 groups + the synthetic provider group. Injectivity matters more since 0.3.0 dropped the
    // `aws` prefix: the names are shorter, so two slugs have less to differ by.
    expect(byName.size).toBe(Object.keys(real.groups).length + 1);
    for (const name of byName.keys()) expect(name).toMatch(/^[a-z][a-z0-9]*$/);
    expect(byName.get("provider")).toBe("provider");
    expect(byName.get("acmpca")).toBe("acm_pca");
    expect(byName.get("s3")).toBe("s3");
  });

  it("refuses a slug that would name a Go keyword, which no import of could compile", () => {
    // Not reachable from aws 6.62.0, and the point is that a future group named `map` or `range`
    // fails here rather than in a consumer's `go build`.
    for (const kw of ["map", "range", "type", "select"]) {
      expect(() => goPackageName(kw)).toThrow(/produces the Go keyword/);
    }
    // a predeclared identifier is shadowable and stays legal
    expect(goPackageName("string")).toBe("string");
  });
});

describe("snapshots", () => {
  it("emits a stable data source", () => {
    expect(read("elb/src/data-aws-lb.ts")).toMatchSnapshot();
  });

  it("emits a stable ephemeral resource", () => {
    expect(read("lambda/src/ephemeral-aws-lambda-invocation.ts")).toMatchSnapshot();
  });

  it("emits a stable alias resource", () => {
    expect(read("elb/src/aws-alb.ts")).toMatchSnapshot();
  });

  it("emits stable package manifests", () => {
    for (const group of FIXTURE_GROUPS) {
      expect(read(`${group}/package.json`)).toMatchSnapshot(`${group}/package.json`);
      expect(read(`${group}/README.md`)).toMatchSnapshot(`${group}/README.md`);
    }
  });
});
