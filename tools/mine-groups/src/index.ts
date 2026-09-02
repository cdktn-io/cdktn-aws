import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  DOC_DIR_BY_SURFACE,
  SURFACES,
  assertUsableSlug,
  derivedSlug,
  groupsJsonPath,
  readMineConfig,
  readSchemaNames,
  serializeGroupsFile,
  tmpDir,
  type Group,
  type GroupsFile,
  type SurfaceKind,
} from "@cdktn-aws/groups-core";
import { ensureProviderCheckout, websiteDir } from "./clone.js";
import { readAllowedSubcategories, readDocSubcategories } from "./frontmatter.js";
import { proposeStripPrefixes } from "./strip-prefixes.js";
// The generator's own class-name function, so the example spelling this report prints is the one
// the generator will actually emit rather than a second implementation of the rule.
import { STRIP_PREFIX_PATTERN, classNameForEntry } from "../../aws2cdk/src/naming.js";

const argv = new Set(process.argv.slice(2));
const refresh = argv.has("--refresh");
const dryRun = argv.has("--dry-run");
const out = argv.has("--stdout") ? undefined : groupsJsonPath;

function main(): number {
  const cfg = readMineConfig();
  console.log(`mine-groups: provider ${cfg.providerTag} (schema ${cfg.pinnedProviderVersion})`);

  const checkout = ensureProviderCheckout(cfg.providerRepo, cfg.providerTag, refresh);
  const website = websiteDir(checkout);
  const schema = readSchemaNames();
  console.log(`  schema: ${schema.path}`);

  // --- slug table: every subcategory in use, plus its slug -----------------
  const docsBySurface = {} as Record<SurfaceKind, ReturnType<typeof readDocSubcategories>>;
  const subcategoriesUsed = new Set<string>();
  for (const surface of SURFACES) {
    const entries = readDocSubcategories(path.join(website, "docs", DOC_DIR_BY_SURFACE[surface]));
    docsBySurface[surface] = entries;
    for (const e of entries) subcategoriesUsed.add(e.subcategory);
  }

  const slugOf = new Map<string, string>();
  const claimedBy = new Map<string, string[]>();
  for (const sub of [...subcategoriesUsed].sort()) {
    const slug = cfg.slugOverrides[sub] ?? derivedSlug(sub);
    assertUsableSlug(slug, sub);
    slugOf.set(sub, slug);
    claimedBy.set(slug, [...(claimedBy.get(slug) ?? []), sub]);
  }

  const collisions = [...claimedBy].filter(([, subs]) => subs.length > 1);
  if (collisions.length > 0) {
    console.error("\nFAIL: slug collisions — add slugOverrides entries in mine-config.json:");
    for (const [slug, subs] of collisions.sort()) {
      console.error(`  ${slug} <- ${subs.map((s) => JSON.stringify(s)).join(", ")}`);
    }
    return 1;
  }

  // --- join docs against schema -------------------------------------------
  const groups = new Map<string, Group>();
  const group = (slug: string, title: string): Group => {
    let g = groups.get(slug);
    if (!g) {
      // stripPrefixes is filled in below, once the group's whole member set is known.
      g = { title, stripPrefixes: [], resources: [], dataSources: [], ephemeralResources: [] };
      groups.set(slug, g);
    }
    return g;
  };

  const unmapped: { surface: SurfaceKind; name: string }[] = [];
  const undocumentedAliases: string[] = [];
  const handAssigned: { surface: SurfaceKind; name: string; slug: string }[] = [];
  const docsWithoutSchema: { surface: SurfaceKind; name: string }[] = [];

  for (const surface of SURFACES) {
    const subOf = new Map(docsBySurface[surface].map((e) => [e.name, e.subcategory]));
    const schemaNames = new Set(schema.names[surface]);
    for (const name of subOf.keys()) {
      if (!schemaNames.has(name)) docsWithoutSchema.push({ surface, name });
    }

    for (const name of schema.names[surface]) {
      const sub = subOf.get(name);
      if (sub) {
        group(slugOf.get(sub)!, sub)[surface].push(name);
        continue;
      }
      // No doc file. Either a known deprecated alias of a documented resource
      // (recorded in the aliases table, never listed in a group), or a hand
      // assignment, or a genuine gap the human has to resolve.
      if (cfg.aliases[name]) {
        undocumentedAliases.push(name);
        continue;
      }
      const manual = cfg.manualAssignments[surface][name];
      if (manual) {
        const title = [...slugOf].find(([, s]) => s === manual)?.[0];
        if (!title) {
          console.error(
            `FAIL: manualAssignments.${surface}.${name} points at slug "${manual}", ` +
              `which no subcategory maps to`,
          );
          return 1;
        }
        group(manual, title)[surface].push(name);
        handAssigned.push({ surface, name, slug: manual });
        continue;
      }
      unmapped.push({ surface, name });
    }
  }

  // --- verify aliases ------------------------------------------------------
  const allSchemaNames = new Set(SURFACES.flatMap((s) => schema.names[s]));
  const aliasProblems: string[] = [];
  for (const [alias, canonical] of Object.entries(cfg.aliases)) {
    if (!allSchemaNames.has(alias)) {
      aliasProblems.push(`alias "${alias}" is not in the schema at all`);
    }
    if (!allSchemaNames.has(canonical)) {
      aliasProblems.push(`alias "${alias}" -> "${canonical}", which is not in the schema`);
    }
  }

  if (unmapped.length > 0 || aliasProblems.length > 0) {
    console.error("\nFAIL: the join left names unresolved.\n");
    for (const p of aliasProblems) console.error(`  alias: ${p}`);
    for (const u of unmapped) {
      console.error(
        `  unmapped ${u.surface}: ${u.name} — add an aliases or manualAssignments entry in mine-config.json`,
      );
    }
    return 1;
  }

  // --- stripPrefixes: propose, then let the curated overrides win ----------
  const unknownOverrides = Object.keys(cfg.stripPrefixOverrides).filter((s) => !groups.has(s));
  if (unknownOverrides.length > 0) {
    console.error(
      `\nFAIL: stripPrefixOverrides names ${unknownOverrides.length} slug(s) no subcategory maps to: ` +
        unknownOverrides.sort().join(", "),
    );
    return 1;
  }
  const prefixReport: Record<string, { proposed: string[]; final: string[]; overridden: boolean; example: string }> = {};
  for (const [slug, g] of groups) {
    const members = [...g.resources, ...g.dataSources, ...g.ephemeralResources].sort();
    const proposed = proposeStripPrefixes(slug, members);
    const override = cfg.stripPrefixOverrides[slug];
    const final = [...new Set(override ?? proposed)].sort();
    for (const p of final) {
      if (!STRIP_PREFIX_PATTERN.test(p)) {
        console.error(`\nFAIL: stripPrefixOverrides.${slug} has a malformed prefix ${JSON.stringify(p)}`);
        return 1;
      }
    }
    g.stripPrefixes = final;
    // One worked example per group, so the proposal is reviewable as names rather than as tokens.
    const sample = g.resources.length > 0
      ? { parserType: g.resources[0], surface: "resource" as const }
      : g.dataSources.length > 0
        ? { parserType: `data_${g.dataSources[0]}`, surface: "data_source" as const }
        : g.ephemeralResources.length > 0
          ? { parserType: `ephemeral_${g.ephemeralResources[0]}`, surface: "ephemeral_resource" as const }
          : undefined;
    prefixReport[slug] = {
      proposed,
      final,
      overridden: override !== undefined,
      example: sample
        ? `${sample.parserType} -> ${classNameForEntry({ ...sample, stripPrefixes: final })}`
        : "",
    };
  }

  // --- emit ----------------------------------------------------------------
  const file: GroupsFile = {
    pinnedProviderVersion: cfg.pinnedProviderVersion,
    pinnedProviderTag: cfg.providerTag,
    groups: Object.fromEntries(groups),
    aliases: cfg.aliases,
  };
  const text = serializeGroupsFile(file);

  const counts: Record<string, number> = {
    groups: groups.size,
    ...Object.fromEntries(SURFACES.map((s) => [s, schema.names[s].length])),
  };
  const allowed = readAllowedSubcategories(website);
  const allowedUnused = allowed.filter((s) => !subcategoriesUsed.has(s)).sort();
  const usedNotAllowed = [...subcategoriesUsed].filter((s) => !allowed.includes(s)).sort();

  const report = {
    pinnedProviderTag: cfg.providerTag,
    pinnedProviderVersion: cfg.pinnedProviderVersion,
    counts,
    subcategoriesUsed: subcategoriesUsed.size,
    allowedSubcategories: allowed.length,
    allowedButUnused: allowedUnused,
    usedButNotAllowed: usedNotAllowed,
    aliases: Object.keys(cfg.aliases).sort(),
    undocumentedAliasesSeen: undocumentedAliases.sort(),
    handAssigned,
    docsWithoutSchemaEntry: docsWithoutSchema,
    slugOverrides: cfg.slugOverrides,
    stripPrefixOverrides: cfg.stripPrefixOverrides,
    stripPrefixes: prefixReport,
  };
  mkdirSync(tmpDir, { recursive: true });
  const reportPath = path.join(tmpDir, "mine-report.json");
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);

  console.log(
    `\n  ${counts.groups} groups | ${counts.resources} resources | ${counts.dataSources} data sources | ` +
      `${counts.ephemeralResources} ephemeral resources`,
  );
  console.log(
    `  ${subcategoriesUsed.size}/${allowed.length} allowed subcategories in use ` +
      `(${allowedUnused.length} declared but unused)`,
  );
  console.log(
    `  ${Object.keys(cfg.aliases).length} aliases | ${handAssigned.length} hand assignments | ` +
      `${Object.keys(cfg.slugOverrides).length} slug overrides | ` +
      `${Object.keys(cfg.stripPrefixOverrides).length} stripPrefix overrides`,
  );
  console.log(`  report: ${reportPath}`);

  if (dryRun) {
    console.log("  --dry-run: groups.json not written");
  } else if (out) {
    writeFileSync(out, text);
    console.log(`  wrote ${out}`);
  } else {
    process.stdout.write(text);
  }
  return 0;
}

process.exit(main());
