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
