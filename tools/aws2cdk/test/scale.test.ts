// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M2 acceptance — the things that only appear once the generator runs at 257-group scale:
 * group-wide mapper-name collisions, provider-defined functions, and the per-group content hashes
 * the Go release story tags off.
 *
 * Everything here runs against the committed mini fixture or the committed `generated/` tree, so
 * none of it needs the 34 MB pinned schema.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { emit, listFiles, miniSchema, namespaceMembers, topLevelExports } from "./helpers";
import { MAPPER_DISAMBIGUATOR, NAME_GRAMMAR, mapperPrefixesForGroup } from "../src/naming";
import { PROVIDER_FUNCTIONS_FILE_BASE } from "../src/generate";
import { HASHES_FILE, changedGroups, hashGroupFiles, readHashesManifest } from "../src/hashes";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const generatedDir = path.join(repoRoot, "generated");

let outDir: string;
const read = (rel: string) => fs.readFileSync(path.join(outDir, rel), "utf-8");

beforeAll(() => {
  outDir = emit().outDir;
});

afterAll(() => {
  if (outDir) fs.rmSync(outDir, { recursive: true, force: true });
});

describe("mapper-name collisions across a package", () => {
  // The two real aws 6.62.0 cases, reduced to the naming inputs that produce them. Both are a
  // class name that is a strict prefix of a sibling's, which makes plain concatenation ambiguous.
  const waf = [
    { className: "AwsWafv2WebAcl", structNames: ["RuleActionAllowProperty", "TagsProperty"] },
    { className: "AwsWafv2WebAclRule", structNames: ["ActionAllowProperty"] },
  ];

  it("detects that plain class-name prefixing is not injective", () => {
    const plain = (e: { className: string; structNames: string[] }) =>
      e.structNames.map((s) => `${e.className[0].toLowerCase()}${e.className.slice(1)}${s}`);
    expect(plain(waf[0])).toContain("awsWafv2WebAclRuleActionAllowProperty");
    expect(plain(waf[1])).toContain("awsWafv2WebAclRuleActionAllowProperty");
  });

  it("disambiguates the whole colliding cluster, and only that cluster", () => {
    const prefixes = mapperPrefixesForGroup([
      ...waf,
      { className: "AwsWafv2IpSet", structNames: ["TagsProperty"] },
    ]);
    expect(prefixes.AwsWafv2WebAcl).toBe(`AwsWafv2WebAcl${MAPPER_DISAMBIGUATOR}`);
    expect(prefixes.AwsWafv2WebAclRule).toBe(`AwsWafv2WebAclRule${MAPPER_DISAMBIGUATOR}`);
    // untouched — a class outside the cluster keeps the plain prefix, which is why the three M1
    // groups still emit byte-identically to their M1 output.
    expect(prefixes.AwsWafv2IpSet).toBe("AwsWafv2IpSet");
  });

  it("does not depend on the order the classes are presented in", () => {
    expect(mapperPrefixesForGroup([...waf].reverse())).toEqual(mapperPrefixesForGroup(waf));
  });

  it("re-runs the fallback when disambiguating walks a name onto a third class", () => {
    // Contrived, but the shape is real: `AwsA` and `AwsAZz` collide, so both gain `Mapper` — and
    // `AwsAMapperZz`, which collided with nobody, is then in the way. One more round fixes it.
    const prefixes = mapperPrefixesForGroup([
      { className: "AwsA", structNames: ["ZzProperty"] },
      { className: "AwsAZz", structNames: ["Property"] },
      { className: "AwsAMapperZz", structNames: ["Property"] },
    ]);
    const names = [
      `awsA${prefixes.AwsA.slice("AwsA".length)}ZzProperty`,
      `${prefixes.AwsAZz[0].toLowerCase()}${prefixes.AwsAZz.slice(1)}Property`,
      `${prefixes.AwsAMapperZz[0].toLowerCase()}${prefixes.AwsAMapperZz.slice(1)}Property`,
    ];
    expect(new Set(names).size).toBe(3);
  });

  it("leaves the fixture's own packages on plain class-name prefixes", () => {
    expect(read("lambda/src/aws-lambda-function.ts")).toContain(
      "export function awsLambdaFunctionEnvironmentPropertyToTerraform(",
    );
    const mapperNames = [...read("lambda/src/aws-lambda-function.ts").matchAll(
      /^export function (\w+)To(?:Hcl)?Terraform\(/gm,
    )].map((m) => m[1]);
    expect(mapperNames.length).toBeGreaterThan(0);
    for (const name of mapperNames) expect(name).not.toContain(MAPPER_DISAMBIGUATOR);
  });
});

describe("provider-defined functions", () => {
  const fnFile = `provider/src/${PROVIDER_FUNCTIONS_FILE_BASE}.ts`;

  it("emits AwsProviderFunctions into the provider package and barrels it", () => {
    expect(listFiles(path.join(outDir, "provider", "src")).sort()).toEqual([
      "aws-provider.ts",
      "index.ts",
      "provider-functions.ts",
    ]);
    expect(read(fnFile)).toMatch(/^export class AwsProviderFunctions/m);
    expect(read("provider/src/index.ts")).toContain(`export * from './${PROVIDER_FUNCTIONS_FILE_BASE}';`);
  });

  it("hangs them off the provider construct through a memoized getter", () => {
    const provider = read("provider/src/aws-provider.ts");
    expect(provider).toContain(`import { AwsProviderFunctions } from './${PROVIDER_FUNCTIONS_FILE_BASE}';`);
    expect(provider).toMatch(/public get functions\(\): AwsProviderFunctions/);
    // The local name is the instance's own terraformResourceType, never a baked-in constant, so a
    // provider declared under a different local name still invokes under the right namespace.
    expect(provider).toContain("new AwsProviderFunctions(this.terraformResourceType)");
  });

  it("emits all four aws 6.62.0 functions, camelCased, with the schema's terraform names", () => {
    const text = read(fnFile);
    for (const [method, terraform] of [
      ["arnBuild", "arn_build"],
      ["arnParse", "arn_parse"],
      ["trimIamRolePath", "trim_iam_role_path"],
      ["userAgent", "user_agent"],
    ]) {
      expect(text).toContain(`public ${method}(`);
      expect(text).toContain(`cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "${terraform}", [`);
    }
  });

  it("types arn_parse's object return as a resolvable, and the other three as strings", () => {
    const text = read(fnFile);
    // arn_parse is the only one of the four whose Terraform return_type is `object`. jsii has no
    // anonymous-object type, so the vendored model returns the invocation unwrapped as an
    // IResolvable — identical to the reference `@cdktn/provider-aws` build. The five documented
    // fields (account_id, partition, region, resource, service) are reached through the resolved
    // value, which is why the *string* returns get a Token.asString wrapper and this one does not.
    expect(text).toMatch(/public arnParse\(arn: string\): cdktn\.IResolvable/);
    expect(text).toMatch(/return cdktn\.TerraformProviderFunction\.invoke\(this\.providerLocalName, "arn_parse", \[arn\]\);/);
    expect(text).toMatch(/public arnBuild\([^)]*\): string/);
    expect(text).toMatch(/public trimIamRolePath\(arn: string\): string/);
    expect(text).toMatch(/public userAgent\([^)]*\): string/);
    expect(text).toContain('cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "arn_build"');
  });

  it("renders provider::aws::<fn>(...) through cdktn's own FunctionCall path", () => {
    // The committed provider package is a real, resolvable TypeScript module with cdktn linked
    // into its own node_modules, so this exercises the emitted code end to end rather than
    // re-asserting the emitter's string output.
    const generated = path.join(generatedDir, "provider", "src", `${PROVIDER_FUNCTIONS_FILE_BASE}.ts`);
    if (!fs.existsSync(generated)) return; // fresh tree without `pnpm generate` — nothing to load
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { AwsProviderFunctions } = require(generated);
    const cdktn = require(path.join(generatedDir, "provider", "node_modules", "cdktn"));

    const functions = new AwsProviderFunctions("aws");
    const app = cdktn.Testing.app();
    const stack = new cdktn.TerraformStack(app, "fns");
    new cdktn.TerraformOutput(stack, "parsed", { value: functions.arnParse("arn:aws:iam::1:role/x") });
    new cdktn.TerraformOutput(stack, "built", {
      value: functions.arnBuild("aws", "iam", "", "1", "role/x"),
    });
    const synthesized = cdktn.Testing.synth(stack);

    // `cdk.tf.json` holds the call as an interpolated string, so the inner quotes are escaped —
    // there is no JSON-native function-call shape, for provider functions or for any `Fn.*` call.
    expect(JSON.parse(synthesized).output.parsed.value).toBe(
      '${provider::aws::arn_parse("arn:aws:iam::1:role/x")}',
    );
    expect(JSON.parse(synthesized).output.built.value).toBe(
      '${provider::aws::arn_build("aws", "iam", "", "1", "role/x")}',
    );
  });

  it("keeps the functions class inside the emitted name grammar", () => {
    const text = read(fnFile);
    for (const { name } of topLevelExports(text)) expect(name).toMatch(NAME_GRAMMAR.resourceClass);
    expect(namespaceMembers(text)).toEqual([]);
  });
});

describe("per-group content hashes", () => {
  it("is stable across two runs of the same inputs", () => {
    const a = emit();
    const b = emit();
    try {
      expect(hashes(b)).toEqual(hashes(a));
      // and not an artifact of hashing nothing
      for (const h of Object.values(hashes(a))) expect(h).toMatch(/^[0-9a-f]{64}$/);
    } finally {
      fs.rmSync(a.outDir, { recursive: true, force: true });
      fs.rmSync(b.outDir, { recursive: true, force: true });
    }
  });

  it("moves only the changed group's hash when one group's schema input changes", () => {
    const before = emit();
    const mutated = miniSchema();
    const fn = mutated.provider_schemas["registry.terraform.io/hashicorp/aws"].resource_schemas
      .aws_lambda_function;
    fn.block.attributes.description.description = "changed for the hash-locality test";
    const after = emit(mutated);
    try {
      const b = hashes(before);
      const a = hashes(after);
      expect(a.lambda).not.toEqual(b.lambda);
      expect(a.elb).toEqual(b.elb);
      expect(a.provider).toEqual(b.provider);
    } finally {
      fs.rmSync(before.outDir, { recursive: true, force: true });
      fs.rmSync(after.outDir, { recursive: true, force: true });
    }
  });

  it("does not depend on where the tree happens to live on disk", () => {
    const a = emit();
    const moved = `${a.outDir}-moved`;
    try {
      fs.renameSync(a.outDir, moved);
      for (const group of a.result.groups) {
        const files = group.files.map((f) => f.slice(group.slug.length + 1));
        expect(hashGroupFiles(path.join(moved, group.slug), files)).toEqual(group.hash);
      }
    } finally {
      fs.rmSync(moved, { recursive: true, force: true });
      fs.rmSync(a.outDir, { recursive: true, force: true });
    }
  });

  it("reports exactly the moved groups when two manifests are compared", () => {
    const manifest = (entries: Record<string, string>) => ({
      algorithm: "sha256",
      pinnedProviderVersion: "6.62.0",
      groups: Object.fromEntries(
        Object.entries(entries).map(([k, v]) => [k, { hash: v, files: 1, bytes: 1 }]),
      ),
    });
    expect(
      changedGroups(manifest({ a: "1", b: "2", c: "3" }), manifest({ a: "1", b: "9", d: "4" })),
    ).toEqual(["b", "c", "d"]);
  });

  it("has a committed manifest covering every generated group", () => {
    const manifest = readHashesManifest(generatedDir);
    if (!manifest) return; // fresh tree without `pnpm generate`
    const dirs = fs
      .readdirSync(generatedDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(Object.keys(manifest.groups).sort()).toEqual(dirs);
    expect(fs.readdirSync(generatedDir).filter((n) => !n.startsWith("."))).toContain(HASHES_FILE);
  });

  it("matches the bytes actually committed under generated/", () => {
    const manifest = readHashesManifest(generatedDir);
    if (!manifest) return;
    // A spot check over a handful of groups rather than all 258: this reads and hashes real files,
    // and the full sweep is what `pnpm generate` + `git diff --exit-code` already proves in CI.
    for (const slug of ["elb", "lambda", "provider", "s3", "waf"]) {
      const pkgDir = path.join(generatedDir, slug);
      if (!fs.existsSync(pkgDir)) continue;
      const files = [
        "package.json",
        "README.md",
        "tsconfig.json",
        ...listFiles(path.join(pkgDir, "src")).map((f) => `src/${f}`),
      ];
      expect(hashGroupFiles(pkgDir, files)).toEqual(manifest.groups[slug].hash);
    }
  });
});

describe("naming grammar over the whole generated tree", () => {
  const groups = fs.existsSync(generatedDir)
    ? fs
        .readdirSync(generatedDir, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name)
        .sort()
    : [];

  it("has all 258 packages present", () => {
    if (groups.length === 0) return;
    expect(groups.length).toBeGreaterThanOrEqual(258);
  });

  // A FULL sweep, not a per-group sample: every `.ts` file of every group is read and every
  // top-level export and namespace member is matched against the grammar. It costs a few seconds
  // over ~2,700 files / ~93 MB, which is cheap enough not to trade away the coverage.
  it.each(groups)("keeps every export in %s inside the grammar", (group) => {
    const srcDir = path.join(generatedDir, group, "src");
    for (const rel of listFiles(srcDir)) {
      if (rel === "index.ts") continue;
      const text = fs.readFileSync(path.join(srcDir, rel), "utf-8");
      for (const { kind, name } of topLevelExports(text)) {
        if (kind === "function") expect(name).toMatch(NAME_GRAMMAR.mapperFunction);
        else if (kind === "class") expect(name).toMatch(NAME_GRAMMAR.resourceClass);
        else expect(name).toMatch(NAME_GRAMMAR.configInterface);
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
  });

  it("never lets two files in one package export the same name", () => {
    for (const group of groups) {
      const srcDir = path.join(generatedDir, group, "src");
      const owner = new Map<string, string>();
      for (const rel of listFiles(srcDir)) {
        if (rel === "index.ts") continue;
        const text = fs.readFileSync(path.join(srcDir, rel), "utf-8");
        for (const { name } of topLevelExports(text)) {
          const previous = owner.get(name);
          expect(previous === undefined || previous === rel).toBe(true);
          owner.set(name, rel);
        }
      }
    }
  });
});

function hashes(e: ReturnType<typeof emit>): Record<string, string> {
  return Object.fromEntries(e.result.groups.map((g) => [g.slug, g.hash]));
}
