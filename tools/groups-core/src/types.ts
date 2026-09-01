/**
 * Shared shapes for groups.json and mine-config.json.
 *
 * The three schema surfaces we group. `list_resource_schemas`, `action_schemas`,
 * `functions` and `resource_identity_schemas` are deliberately NOT grouped in M0 —
 * see docs/curation.md ("Out of scope for M0").
 */
export type SurfaceKind = "resources" | "dataSources" | "ephemeralResources";

export const SURFACES: readonly SurfaceKind[] = [
  "resources",
  "dataSources",
  "ephemeralResources",
];

/** Which `provider_schemas.<aws>.<key>` each surface is joined against. */
export const SCHEMA_KEY_BY_SURFACE: Record<SurfaceKind, string> = {
  resources: "resource_schemas",
  dataSources: "data_source_schemas",
  ephemeralResources: "ephemeral_resource_schemas",
};

/** Which `website/docs/<dir>` each surface's frontmatter is mined from. */
export const DOC_DIR_BY_SURFACE: Record<SurfaceKind, string> = {
  resources: "r",
  dataSources: "d",
  ephemeralResources: "ephemeral-resources",
};

export interface Group {
  /** The upstream `subcategory:` frontmatter value, verbatim. */
  title: string;
  resources: string[];
  dataSources: string[];
  ephemeralResources: string[];
}

export interface GroupsFile {
  /** Version of the `aws` provider whose schema.json this was joined against. */
  pinnedProviderVersion: string;
  /** Git tag of hashicorp/terraform-provider-aws the docs were mined from. */
  pinnedProviderTag: string;
  /** slug -> group. Keys sorted; every array inside sorted. */
  groups: Record<string, Group>;
  /**
   * Deprecated-alias resource/data-source name -> canonical name.
   * An alias is NOT listed in any group's arrays; it inherits the group of its
   * canonical target. See docs/curation.md ("Alias representation").
   */
  aliases: Record<string, string>;
}

export interface MineConfig {
  pinnedProviderVersion: string;
  providerRepo: string;
  providerTag: string;
  /** Full `subcategory:` title -> handcrafted slug, overriding the derived one. */
  slugOverrides: Record<string, string>;
  /** Alias name -> canonical name, for schema entries with no doc file. */
  aliases: Record<string, string>;
  /** Per-surface: schema name -> slug, for entries the join cannot resolve. */
  manualAssignments: Record<SurfaceKind, Record<string, string>>;
}
