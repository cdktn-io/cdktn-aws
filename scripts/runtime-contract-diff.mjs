#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M1 acceptance E — the runtime-contract check.
 *
 * cdktn-aws's only consumer contract is the classic cdktn runtime: the `*ToTerraform` /
 * `*ToHclTerraform` mapper functions and the `*OutputReference` / `*List` / `*Map` helper classes
 * must behave exactly as `@cdktn/provider-aws`'s do for the same schema. Grouping and renaming may
 * move those declarations and change what they are called; they may not change what they DO.
 *
 * ## Method
 *
 * Two files generated from the SAME provider schema at the SAME pin (aws 6.62.0) are compared:
 *
 *   ours  generated/<group>/src/aws-lb.ts       (aws2cdk, grouped + namespaced)
 *   ref   <ref>/src/lb/index.ts                 (@cdktn/provider-aws, flat)
 *
 * Each is rewritten into one common spelling by erasing exactly the two things the two naming
 * schemes disagree about, and nothing else:
 *
 *   ours: drop the `TfLb.` namespace qualifier; drop the `Property` infix from every type name
 *         and mapper-function name; `TfLb`/`TfLbConfig` -> `Resource`/`Config`.
 *   ref:  drop the `Lb`/`lb` resource-name prefix from every nested type and mapper-function
 *         name;                     `Lb`/`LbConfig`     -> `Resource`/`Config`.
 *
 * Both then declare the same set of names. Every top-level declaration is sliced out by name and
 * compared **verbatim, byte for byte** — no whitespace or comment normalization, so any real
 * difference in a mapper body or a helper class shows up.
 *
 * The bar is semantic equivalence, not byte equality of the files: the resource class itself and
 * its Config interface are NOT compared (they differ by design — different class name, different
 * nested-type references, and in cdktn-aws's case a `providerVersionConstraint` the reference
 * build also has). Everything the runtime actually calls into IS compared.
 *
 * ## Where the reference side comes from
 *
 * Three sources, tried in order, so `pnpm check:contract` is runnable on a fresh clone:
 *
 *  1. an explicitly passed `<refFile>`, or a `@cdktn/provider-aws` tree at `../ref-provider-aws`;
 *  2. otherwise **the repo's own baseline**: `bin/baseline.ts` drives the *unmodified* vendored
 *     cdk-terrain pipeline over the pinned schema and emits exactly the flat
 *     `providers/aws/<dir>/index.ts` shape `@cdktn/provider-aws` ships. That is what makes this
 *     check self-contained — no sibling clone, no network. It needs the (gitignored) 34 MB schema
 *     dump, which is the same input every other tool here needs;
 *  3. otherwise the check **skips with a warning and exit 0**, because with no schema dump and no
 *     reference tree there is nothing to compare and a hard failure would only teach CI to ignore
 *     it. Pass `--strict` to turn that skip into an exit-2 failure — what a release pipeline,
 *     which does have the dump, should do.
 *
 * Usage: node scripts/runtime-contract-diff.mjs <ourFile> <ourClass> <refFile> <refClass>
 *        node scripts/runtime-contract-diff.mjs                 (defaults to aws_lb)
 *        node scripts/runtime-contract-diff.mjs --strict        (a missing reference is a failure)
 *        node scripts/runtime-contract-diff.mjs --schema <dump> (pin the dump source 2 uses)
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/**
 * `--alias Ours=Ref` (repeatable) declares that our nested type `Ours` and the reference build's
 * `Ref` are the same type under the two naming schemes. It is needed wherever the two schemes
 * disambiguate a nested type differently: cdktn-aws names nested types after their terraform block
 * LEAF (`LambdaManagedInstancesCapacityProviderConfig`), while `@cdktn/provider-aws` prefixes the
 * whole parent path onto them (`CapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig`)
 * because its types all share one flat module scope. That is locked decision 4, not a contract
 * difference — but only a human can assert the two names denote the same type, so it is stated
 * explicitly on the command line rather than guessed.
 */
const rawArgs = process.argv.slice(2);
const aliases = [];
const positional = [];
let strict = false;
/** `--schema <path>` pins the dump the baseline reference is generated from, bypassing the search. */
let schemaArg;
for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === "--alias") {
    const [ours, ref] = (rawArgs[++i] ?? "").split("=");
    if (!ours || !ref) throw new Error("--alias expects Ours=Ref");
    aliases.push({ ours, ref });
  } else if (rawArgs[i] === "--strict") {
    strict = true;
  } else if (rawArgs[i] === "--schema") {
    schemaArg = rawArgs[++i];
  } else positional.push(rawArgs[i]);
}
const [ourFileArg, ourClassArg, refFileArg, refClassArg] = positional;
const ourFile = ourFileArg ?? path.join(repoRoot, "generated", "elb", "src", "aws-lb.ts");
/**
 * Our class name is READ OUT OF THE FILE, never derived from its name: since M6 the two disagree
 * on purpose (`aws-lb.ts` exports `TfLb`, `aws-s3-bucket-versioning.ts` exports
 * `TfBucketVersioning`), because the file is keyed on the terraform type and the class on the
 * group's stripPrefixes. The declaration line is the only place both are true at once.
 */
function ourClassNameIn(file) {
  const text = readFileSync(file, "utf-8");
  const m = text.match(
    /^export class ([A-Za-z0-9_]+) extends cdktn\.Terraform(?:Resource|DataSource|EphemeralResource)\b/m,
  );
  if (!m) {
    throw new Error(
      `${file}: no \`export class X extends cdktn.Terraform(Resource|DataSource|EphemeralResource)\` ` +
        `line — pass the class name explicitly as the second argument`,
    );
  }
  return m[1];
}
const ourClass = ourClassArg ?? ourClassNameIn(ourFile);
const refFileArgOrDefault =
  refFileArg ?? path.resolve(repoRoot, "..", "ref-provider-aws", "src", "lb", "index.ts");
const refClass = refClassArg ?? "Lb";

/** The same resolution order `tools/groups-core` and `tools/aws2cdk/src/schema.ts` use. */
function resolveSchemaPath() {
  if (schemaArg !== undefined) return existsSync(schemaArg) ? schemaArg : undefined;
  const candidates = [
    process.env.CDKTN_AWS_SCHEMA,
    path.join(repoRoot, "schemas", "schema.json"),
    path.resolve(repoRoot, "..", "cdktn-grouped-resources", "schemas", "schema.json"),
  ].filter(Boolean);
  return candidates.find((c) => existsSync(c));
}

/**
 * `.../src/lb/index.ts` -> `aws_lb`, `.../src/data-aws-lb/index.ts` -> `aws_lb`. Both the
 * reference build and our baseline runner name that directory with cdk-terrain's own convention,
 * because the baseline IS that generator, unmodified.
 */
function terraformTypeForRefDir(dir) {
  return dir.startsWith("data-aws-") ? `aws_${dir.slice("data-aws-".length)}` : `aws_${dir}`;
}

/**
 * Source 2: emit the reference side here, from the pinned schema, with the unmodified vendored
 * pipeline. Returns the path to the file corresponding to `refFile`, or undefined if there is no
 * schema dump to generate it from.
 */
function generateBaselineRef(refFile) {
  const schema = resolveSchemaPath();
  if (!schema) return undefined;
  const refDir = path.basename(path.dirname(refFile));
  const type = terraformTypeForRefDir(refDir);
  const outDir = mkdtempSync(path.join(os.tmpdir(), "aws2cdk-baseline-"));
  console.log(`  generating the reference side with bin/baseline.ts (${type}) -> ${outDir}`);
  execFileSync(
    "pnpm",
    ["--filter", "@cdktn-aws/aws2cdk", "exec", "tsx", "bin/baseline.ts", outDir, type],
    { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"], env: { ...process.env, CDKTN_AWS_SCHEMA: schema } },
  );
  const out = path.join(outDir, "providers", "aws", refDir, "index.ts");
  if (!existsSync(out)) {
    throw new Error(`baseline produced no ${path.relative(outDir, out)} for "${type}"`);
  }
  return out;
}

let refFile = refFileArgOrDefault;
if (!existsSync(refFile)) {
  refFile = generateBaselineRef(refFileArgOrDefault);
}
if (!refFile) {
  const message =
    `no reference build available.\n` +
    `  looked for a @cdktn/provider-aws tree at ${refFileArgOrDefault}\n` +
    `  and found no provider schema dump to regenerate one from with bin/baseline.ts\n` +
    `  (set $CDKTN_AWS_SCHEMA, or put one at schemas/schema.json — see schemas/main.tf).\n` +
    `  A reference tree can also be passed explicitly:\n` +
    `    node scripts/runtime-contract-diff.mjs <ourFile> <ourClass> <refFile> <refClass>`;
  if (strict) {
    console.error(`runtime-contract-diff: ${message}`);
    process.exit(2);
  }
  console.warn(`runtime-contract-diff: SKIPPED — ${message}`);
  process.exit(0);
}

const lcfirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

function normalizeOurs(text, cls) {
  const lower = lcfirst(cls);
  return (
    text
      // `TfLb.AccessLogsProperty` -> `AccessLogsProperty`
      .replaceAll(`${cls}.`, "")
      // `awsLbAccessLogsPropertyToTerraform` -> `accessLogsToTerraform`
      .replace(
        new RegExp(`\\b${lower}([A-Z][A-Za-z0-9]*?)PropertyTo(Hcl)?Terraform\\b`, "g"),
        (_m, name, hcl) => `${lcfirst(name)}To${hcl ?? ""}Terraform`,
      )
      // `AccessLogsPropertyOutputReference` -> `AccessLogsOutputReference`
      .replace(/\b([A-Z][A-Za-z0-9]*)Property(OutputReference|List|Map)\b/g, "$1$2")
      // `AccessLogsProperty` -> `AccessLogs`
      .replace(/\b([A-Z][A-Za-z0-9]*)Property\b/g, "$1")
      .replace(new RegExp(`\\b${cls}Config\\b`, "g"), "Config")
      .replace(new RegExp(`\\b${cls}\\b`, "g"), "Resource")
  );
}

function normalizeRef(text, cls) {
  const lower = lcfirst(cls);
  return (
    text
      // `lbAccessLogsToTerraform` -> `accessLogsToTerraform`
      .replace(
        new RegExp(`\\b${lower}([A-Z][A-Za-z0-9]*?)To(Hcl)?Terraform\\b`, "g"),
        (_m, name, hcl) => `${lcfirst(name)}To${hcl ?? ""}Terraform`,
      )
      .replace(new RegExp(`\\b${cls}Config\\b`, "g"), "Config")
      // `LbAccessLogsOutputReference` -> `AccessLogsOutputReference`
      .replace(new RegExp(`\\b${cls}([A-Z][A-Za-z0-9]*)\\b`, "g"), "$1")
      .replace(new RegExp(`\\b${cls}\\b`, "g"), "Resource")
  );
}

/** Applies the declared `--alias Ours=Ref` renames to the (already normalized) reference text. */
function applyAliases(text) {
  let out = text;
  for (const { ours, ref } of aliases) {
    // Word-START anchored only: these names appear both bare and with a `OutputReference` /
    // `List` / `Map` / `ToTerraform` suffix glued on, so a trailing \b would never match.
    out = out
      .replace(new RegExp(`\\b${ref}`, "g"), ours)
      .replace(new RegExp(`\\b${lcfirst(ref)}`, "g"), lcfirst(ours));
  }
  return out;
}

/** Every top-level `export function|class|interface Name`, sliced to the next one. */
function units(text) {
  const decl = /^export (function|class|interface|namespace) ([A-Za-z0-9_]+)/gm;
  const starts = [...text.matchAll(decl)].map((m) => ({
    kind: m[1],
    name: m[2],
    index: m.index,
  }));
  const out = new Map();
  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : text.length;
    // A declaration's doc comment sits ABOVE it, so slicing "to the next declaration" pulls the
    // NEXT unit's comment onto the end of this one. Trim a trailing block comment (and blank
    // lines) back off, or the last compared unit in a file always looks different.
    let body = text
      .slice(starts[i].index, end)
      .replace(/\n\/\*\*[\s\S]*$/, "")
      .replace(/\s+$/, "");
    // The LAST unit inside `export namespace TfLb { ... }` is followed by the namespace's own
    // closing brace, which the flat reference file has no counterpart for. Drop trailing lone
    // `}` lines while the slice has more closes than opens.
    const balance = (t) => (t.match(/\{/g) ?? []).length - (t.match(/\}/g) ?? []).length;
    while (balance(body) < 0 && /\n\}$/.test(body)) {
      body = body.replace(/\n\}$/, "");
    }
    out.set(`${starts[i].kind} ${starts[i].name}`, body);
  }
  return out;
}

const ours = units(normalizeOurs(readFileSync(ourFile, "utf-8"), ourClass));
const ref = units(applyAliases(normalizeRef(readFileSync(refFile, "utf-8"), refClass)));

/** The runtime contract surface: mappers + helper classes. Not the resource class or its Config. */
const isContractUnit = (key) =>
  /^function [a-z][A-Za-z0-9]*To(Hcl)?Terraform$/.test(key) ||
  /^class [A-Z][A-Za-z0-9]*(OutputReference|List|Map)$/.test(key);

const ourKeys = [...ours.keys()].filter(isContractUnit).sort();
const refKeys = [...ref.keys()].filter(isContractUnit).sort();

const onlyOurs = ourKeys.filter((k) => !ref.has(k));
const onlyRef = refKeys.filter((k) => !ours.has(k));
const shared = ourKeys.filter((k) => ref.has(k));
const differing = shared.filter((k) => ours.get(k) !== ref.get(k));

console.log(`runtime-contract-diff`);
console.log(`  ours : ${path.relative(repoRoot, ourFile)}  (class ${ourClass})`);
console.log(`  ref  : ${refFile}  (class ${refClass})`);
console.log(`  contract units: ${ourKeys.length} ours / ${refKeys.length} ref`);
for (const a of aliases) console.log(`  alias: ${a.ours} == ${a.ref}`);
console.log(`  identical after naming normalization: ${shared.length - differing.length}/${shared.length}`);

for (const k of onlyOurs) console.log(`  ONLY OURS: ${k}`);
for (const k of onlyRef) console.log(`  ONLY REF : ${k}`);
for (const k of differing) {
  console.log(`  DIFFERS  : ${k}`);
  const a = ours.get(k).split("\n");
  const b = ref.get(k).split("\n");
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) {
      console.log(`      ours[${i}]: ${a[i] ?? "<eof>"}`);
      console.log(`      ref [${i}]: ${b[i] ?? "<eof>"}`);
    }
  }
}

const ok = onlyOurs.length === 0 && onlyRef.length === 0 && differing.length === 0;
console.log(ok ? "  PASS — runtime contract is identical modulo the naming scheme" : "  FAIL");
process.exit(ok ? 0 : 1);
