import { readFileSync } from "node:fs";
import { mineConfigPath } from "./paths.js";
import { SURFACES, type MineConfig } from "./types.js";

/**
 * mine-config.json holds every human decision the miner must preserve across
 * re-runs (slug overrides, aliases, hand assignments). Nothing curated is ever
 * hardcoded in the miner's source.
 */
export function readMineConfig(file = mineConfigPath): MineConfig {
  const cfg = JSON.parse(readFileSync(file, "utf-8")) as Partial<MineConfig>;

  for (const key of ["pinnedProviderVersion", "providerRepo", "providerTag"] as const) {
    if (typeof cfg[key] !== "string" || !cfg[key]) {
      throw new Error(`${file}: missing string field "${key}"`);
    }
  }

  const manual = cfg.manualAssignments ?? ({} as MineConfig["manualAssignments"]);
  for (const surface of SURFACES) {
    manual[surface] ??= {};
  }

  return {
    pinnedProviderVersion: cfg.pinnedProviderVersion!,
    providerRepo: cfg.providerRepo!,
    providerTag: cfg.providerTag!,
    slugOverrides: cfg.slugOverrides ?? {},
    aliases: cfg.aliases ?? {},
    manualAssignments: manual,
  };
}
