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
import { NAME_GRAMMAR, propertyTypeNamesForResource } from "../src/naming";
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
  it("names classes after the FULL terraform type, provider prefix kept", () => {
    const byName = new Map(
      result.groups.flatMap((g) => g.entries.map((e) => [`${g.slug}:${e.terraformName}:${e.schemaType}`, e])),
    );
    expect(byName.get("elb:aws_lb:resource")!.className).toBe("AwsLb");
    expect(byName.get("elb:aws_alb:resource")!.className).toBe("AwsAlb");
    expect(byName.get("lambda:aws_lambda_function:resource")!.className).toBe("AwsLambdaFunction");
    // decision 2, the load-bearing example: NOT AwsFunction.
    expect(byName.get("lambda:aws_lambda_function:resource")!.className).not.toBe("AwsFunction");
    expect(byName.get("elb:aws_lb:data_source")!.className).toBe("DataAwsLb");
    expect(byName.get("lambda:aws_lambda_invocation:ephemeral_resource")!.className).toBe(
      "EphemeralAwsLambdaInvocation",
    );
    expect(byName.get("provider:aws:provider")!.className).toBe("AwsProvider");
  });

  it("suffixes the config interface with Config, never Props", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    expect(text).toMatch(/^export interface AwsLambdaFunctionConfig extends cdktn\.TerraformMetaArguments/m);
    expect(text).not.toMatch(/^export interface \w+Props\b/m);
  });

  it("keeps every emitted export inside the name grammar", () => {
    for (const group of FIXTURE_GROUPS) {
      const srcDir = path.join(outDir, group, "src");
      for (const rel of listFiles(srcDir).filter((f) => f !== "index.ts")) {
        const text = fs.readFileSync(path.join(srcDir, rel), "utf-8");
        for (const { kind, name } of topLevelExports(text)) {
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

  it("keeps the classic cdktn file-name spelling", () => {
    expect(listFiles(path.join(outDir, "elb", "src"))).toEqual(
      expect.arrayContaining(["aws-lb.ts", "aws-alb.ts", "data-aws-lb.ts"]),
    );
    expect(listFiles(path.join(outDir, "lambda", "src"))).toContain("ephemeral-aws-lambda-invocation.ts");
  });
});

describe("namespace mount", () => {
  it("merges the nested types into a namespace on the resource class", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    expect(text).toMatch(/^export class AwsLambdaFunction extends cdktn\.TerraformResource/m);
    expect(text).toMatch(/^export namespace AwsLambdaFunction \{/m);
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
    expect(top).toContain("AwsLambdaFunction.VpcConfigProperty");
    // inside the namespace the sibling type resolves bare — never self-qualified
    expect(body).not.toContain("AwsLambdaFunction.VpcConfigProperty");
    expect(body).toMatch(/^export interface VpcConfigProperty \{/m);
  });

  it("keeps the mapper functions at module level, where jsii ignores them", () => {
    const text = read("lambda/src/aws-lambda-function.ts");
    const nsStart = text.indexOf("\nexport namespace ");
    expect(text.slice(0, nsStart)).toMatch(/^export function awsLambdaFunctionVpcConfigPropertyToTerraform\(/m);
    expect(text.slice(nsStart)).not.toMatch(/^export function /m);
  });

  it("prefixes mapper names with the owning class so two resources in one package cannot collide", () => {
    // `timeouts` exists on both fixture lambda resources; the mappers must not share a name.
    expect(read("lambda/src/aws-lambda-function.ts")).toContain(
      "export function awsLambdaFunctionTimeoutsPropertyToTerraform(",
    );
    expect(read("lambda/src/aws-lambda-permission.ts")).toContain(
      "export function awsLambdaPermissionTimeoutsPropertyToTerraform(",
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
    expect(text).toMatch(/^export class EphemeralAwsLambdaInvocation extends cdktn\.TerraformEphemeralResource/m);
    expect(text).toMatch(
      /^export interface EphemeralAwsLambdaInvocationConfig extends cdktn\.TerraformEphemeralMetaArguments/m,
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
    expect(pkg("provider").jsii.targets.go.packageName).toBe("awsprovider");
  });

  it("produces a unique Go packageName for every one of the real 257 groups", () => {
    const real = readGroups(groupsJsonPath);
    const byName = assertUniqueGoPackageNames(real);
    // 257 groups + the synthetic provider group
    expect(byName.size).toBe(Object.keys(real.groups).length + 1);
    for (const name of byName.keys()) expect(name).toMatch(/^[a-z][a-z0-9]*$/);
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
