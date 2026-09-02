import { readFileSync } from "node:fs";
import {
  SURFACES,
  groupsJsonPath,
  groupOf,
  indexGroups,
  parseGroupsFile,
  readGroupsFile,
  readSchemaNames,
  serializeGroupsFile,
  type SurfaceKind,
} from "@cdktn-aws/groups-core";
import { groupsAtHead, isAcknowledged, readAcknowledgedMoves } from "./moves.js";
// The generator's own class-name function, imported rather than re-implemented: a second copy of
// the algorithm here would let groups.json pass this gate and still emit a colliding tree.
import {
  STRIP_PREFIX_PATTERN,
  classNameForEntry,
  type EntrySurface,
} from "../../aws2cdk/src/naming.js";

const failures: string[] = [];
const fail = (msg: string) => failures.push(msg);

function main(): number {
  const groups = readGroupsFile();
  const index = indexGroups(groups);
  const schema = readSchemaNames();

  console.log("check-groups");
  console.log(`  groups.json   pinned provider ${groups.pinnedProviderVersion} (${groups.pinnedProviderTag})`);
  console.log(`  schema        ${schema.path}`);
  console.log("");

  // ---------------------------------------------------------------- gate A --
  // Every schema name is covered exactly once; nothing in groups.json is
  // invented. No misc bucket exists, so an unmapped name is a hard failure.
  const counts: Record<string, number> = {};
  // Per surface: how many schema names on that surface resolve via the alias
  // table. An alias name can exist on more than one surface (aws_alb and
  // friends are both a resource and a data source), so the sum of these is
  // larger than the alias table itself — see docs/curation.md (6 + 3).
  const aliasResolved: Record<string, number> = {};
  for (const surface of SURFACES) {
    const schemaNames = new Set(schema.names[surface]);
    const unmapped: string[] = [];

    for (const name of schema.names[surface]) {
      if (!groupOf(groups, index, surface, name)) unmapped.push(name);
    }
    for (const [name, slugs] of index.duplicates[surface]) {
      fail(`gate A: ${surface} "${name}" is listed in ${slugs.length} groups: ${slugs.join(", ")}`);
    }
    for (const name of unmapped) {
      fail(`gate A: ${surface} "${name}" is in the schema but in no group (and is not an alias)`);
    }
    for (const name of index.bySurface[surface].keys()) {
      if (!schemaNames.has(name)) {
        fail(
          `gate A: ${surface} "${name}" is grouped but not in the schema ` +
            `(stale entry, or it belongs to another surface)`,
        );
      }
    }
    const covered = schemaNames.size - unmapped.length;
    counts[surface] = schemaNames.size;
    aliasResolved[surface] = schema.names[surface].filter(
      (n) => groups.aliases[n] !== undefined,
    ).length;
    console.log(
      `  gate A  ${surface.padEnd(19)} ${String(covered).padStart(5)}/${String(schemaNames.size).padEnd(5)} ` +
        `covered  (${((100 * covered) / schemaNames.size).toFixed(2)}%)`,
    );
  }

  for (const [alias, canonical] of Object.entries(groups.aliases)) {
    const surfaces = SURFACES.filter((s) => schema.names[s].includes(alias));
    if (surfaces.length === 0) {
      fail(`gate A: alias "${alias}" is not present in the schema on any surface`);
    }
    for (const surface of surfaces) {
      if (!index.bySurface[surface].get(canonical) && !groups.aliases[canonical]) {
        fail(
          `gate A: alias "${alias}" -> "${canonical}", which is not grouped as a ${surface}`,
        );
      }
      if (index.bySurface[surface].has(alias)) {
        fail(
          `gate A: alias "${alias}" is ALSO listed in group "${index.bySurface[surface].get(alias)}"; ` +
            `aliases live only in the aliases table (docs/curation.md)`,
        );
      }
    }
  }

  const aliasTableSize = Object.keys(groups.aliases).length;
  const aliasResolvedTotal = SURFACES.reduce((n, s) => n + aliasResolved[s], 0);
  const aliasPerSurface = SURFACES.filter((s) => aliasResolved[s] > 0)
    .map((s) => `${s} ${aliasResolved[s]}`)
    .join(", ");
  console.log(
    `  gate A  ${"groups".padEnd(19)} ${String(Object.keys(groups.groups).length).padStart(5)}` +
      `        ${aliasTableSize}-entry alias table resolves ` +
      `${aliasResolvedTotal} schema name(s) (${aliasPerSurface})`,
  );

  // -------------------------------------------------------- determinism ----
  if (serializeGroupsFile(groups) !== readFileSync(groupsJsonPath, "utf-8")) {
    fail(
      "gate A: groups.json is not in canonical form (sorted keys / sorted arrays). " +
        "Re-run `pnpm mine`, or sort by hand.",
    );
  }

  // ---------------------------------------------------------------- gate B --
  const headText = groupsAtHead();
  if (!headText) {
    console.log("\n  gate B  no groups.json at HEAD — move detection skipped (first commit)");
  } else {
    const head = parseGroupsFile(headText, "HEAD:groups.json");
    const headIndex = indexGroups(head);
    const ack = readAcknowledgedMoves();
    const moves: { surface: SurfaceKind; name: string; from: string; to: string }[] = [];

    for (const surface of SURFACES) {
      for (const [name, from] of headIndex.bySurface[surface]) {
        const to = index.bySurface[surface].get(name);
        if (to && to !== from) moves.push({ surface, name, from, to });
      }
      // An alias whose canonical target changed group moves too.
      for (const [alias, canonical] of Object.entries(head.aliases)) {
        if (!schema.names[surface].includes(alias)) continue;
        const from = groupOf(head, headIndex, surface, canonical);
        const to = groupOf(groups, index, surface, alias);
        if (from && to && from !== to) moves.push({ surface, name: alias, from, to });
      }
    }

    const unacknowledged = moves.filter((m) => !isAcknowledged(ack, m.name, m.to));
    console.log(
      `\n  gate B  ${moves.length} group move(s) vs HEAD, ` +
        `${moves.length - unacknowledged.length} acknowledged in docs/group-moves.md`,
    );
    for (const m of unacknowledged) {
      fail(
        `gate B: ${m.surface} "${m.name}" moved ${m.from} -> ${m.to} without a marker.\n` +
          `          Add to docs/group-moves.md:  - \`${m.name}\`: \`${m.from}\` -> \`${m.to}\` — <why>`,
      );
    }
  }

  // ---------------------------------------------------------------- gate C --
  // stripPrefixes: the curated input to every generated class name. A wrong list here is not a
  // build failure — it is a silently misnamed public API — so all four properties are checked.
  const SURFACE_OF: Record<SurfaceKind, EntrySurface> = {
    resources: "resource",
    dataSources: "data_source",
    ephemeralResources: "ephemeral_resource",
  };
  const MARKER_OF: Record<SurfaceKind, string> = {
    resources: "",
    dataSources: "data_",
    ephemeralResources: "ephemeral_",
  };
  let prefixCount = 0;
  for (const slug of Object.keys(groups.groups).sort()) {
    const prefixes = groups.groups[slug].stripPrefixes ?? [];
    prefixCount += prefixes.length;
    if (prefixes.length === 0) {
      fail(`gate C: group "${slug}" has no stripPrefixes (see docs/curation.md)`);
      continue;
    }
    for (const p of prefixes) {
      if (!STRIP_PREFIX_PATTERN.test(p)) {
        fail(`gate C: group "${slug}" prefix "${p}" is not lowercase \`_\`-separated tokens`);
      }
    }
    const sortedUnique = [...new Set(prefixes)].sort();
    if (JSON.stringify(prefixes) !== JSON.stringify(sortedUnique)) {
      fail(`gate C: group "${slug}" stripPrefixes must be sorted and unique: ${JSON.stringify(sortedUnique)}`);
    }

    // A group's members are the names it lists plus the aliases that resolve into it — the
    // generator emits a class for each, so both class-name uniqueness and prefix usefulness are
    // judged over exactly that set.
    const membersBySurface = {} as Record<SurfaceKind, string[]>;
    for (const surface of SURFACES) {
      membersBySurface[surface] = schema.names[surface].filter(
        (name) => groupOf(groups, index, surface, name) === slug,
      );
    }
    const rawTypes = SURFACES.flatMap((s) => membersBySurface[s]).map((n) => n.replace(/^aws_/, ""));
    for (const p of prefixes) {
      if (!rawTypes.some((raw) => raw === p || raw.startsWith(`${p}_`))) {
        fail(`gate C: group "${slug}" prefix "${p}" matches no member — an unused prefix is a curation error`);
      }
    }

    // Case-insensitive, and across all three surfaces at once: jsii-pacmak's Go emitter writes one
    // file per type and `go build` rejects file names differing only in case.
    const owner = new Map<string, string>();
    for (const surface of SURFACES) {
      for (const name of membersBySurface[surface]) {
        const className = classNameForEntry({
          parserType: `${MARKER_OF[surface]}${name}`,
          surface: SURFACE_OF[surface],
          stripPrefixes: prefixes,
        });
        const key = className.toLowerCase();
        const previous = owner.get(key);
        if (previous !== undefined) {
          fail(`gate C: group "${slug}" derives ${className} from both "${previous}" and "${name}"`);
        } else {
          owner.set(key, name);
        }
      }
    }
  }
  console.log(
    `\n  gate C  ${"stripPrefixes".padEnd(19)} ${String(prefixCount).padStart(5)}` +
      `        prefixes over ${Object.keys(groups.groups).length} groups, ` +
      `every one used, no class-name collisions`,
  );

  // ------------------------------------------------------------------ report
  console.log("");
  if (failures.length > 0) {
    console.error(`FAIL (${failures.length}):`);
    for (const f of failures) console.error(`  - ${f}`);
    return 1;
  }
  console.log(
    `PASS  ${Object.keys(groups.groups).length} groups, ${counts.resources} resources, ` +
      `${counts.dataSources} data sources, ${counts.ephemeralResources} ephemeral resources, ` +
      `${aliasTableSize} aliases (${aliasResolvedTotal} schema names resolved) — ` +
      `100% of the schema mapped, 0 duplicates.`,
  );
  return 0;
}

process.exit(main());
