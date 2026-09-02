// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * groups.json is the ONLY source of grouping. Nothing here infers a group from a resource name.
 *
 * `tools/groups-core` already parses this file, but it is an ESM package with `.js` import
 * specifiers and this generator is CommonJS (the vendored cdk-terrain machinery has extensionless
 * relative imports), so the few fields aws2cdk needs are read directly. `check:groups` remains the
 * authority on the file's integrity; this module only reads it.
 */
import { readFileSync } from "node:fs";
import * as path from "node:path";
import { repoRoot } from "./schema";

export type SurfaceKind = "resources" | "dataSources" | "ephemeralResources";
export const SURFACES: readonly SurfaceKind[] = ["resources", "dataSources", "ephemeralResources"];

export interface Group {
  readonly title: string;
  /**
   * The service-name token prefixes this group's own title already conveys, stripped off a member's
   * terraform type before it is turned into a class name (`aws_s3_bucket` -> `TfBucket`). Curated,
   * never inferred — see docs/curation.md and `src/naming.ts#classNameForEntry`.
   */
  readonly stripPrefixes: string[];
  readonly resources: string[];
  readonly dataSources: string[];
  readonly ephemeralResources: string[];
}

export interface GroupsFile {
  readonly pinnedProviderVersion: string;
  readonly pinnedProviderTag: string;
  readonly groups: Record<string, Group>;
  readonly aliases: Record<string, string>;
}

export const groupsJsonPath = path.join(repoRoot, "groups.json");

export function readGroups(file = groupsJsonPath): GroupsFile {
  const parsed = JSON.parse(readFileSync(file, "utf-8"));
  if (!parsed.groups || typeof parsed.groups !== "object") {
    throw new Error(`${file}: missing "groups" object`);
  }
  // There is no implicit default for stripPrefixes: a missing list would silently name every class
  // in that group after its full terraform type again, which is exactly the 0.1.x spelling M6
  // replaced. `check:groups` is the authority on the list's content; this is the generator refusing
  // to guess.
  for (const [slug, group] of Object.entries(parsed.groups as Record<string, Group>)) {
    if (!Array.isArray(group.stripPrefixes) || group.stripPrefixes.length === 0) {
      throw new Error(`${file}: group "${slug}" has no "stripPrefixes" (see docs/curation.md)`);
    }
  }
  return {
    pinnedProviderVersion: parsed.pinnedProviderVersion ?? "",
    pinnedProviderTag: parsed.pinnedProviderTag ?? "",
    groups: parsed.groups,
    aliases: parsed.aliases ?? {},
  };
}

/**
 * The synthetic group that holds the generated `AwsProvider` construct. It is not in groups.json
 * (which maps *schema entries* to service groups, and the provider block is not one), but it is a
 * package exactly like any other: `@cdktn/aws-provider`, Go package `awsprovider`. Every consumer
 * needs it, because cdktn's default `ValidateProviderPresence` fails synth without a provider
 * construct in the stack.
 */
export const PROVIDER_GROUP = "provider";

/**
 * A group's members, aliases resolved. An alias (`aws_alb`) is a REAL resource type in the schema
 * with its own full block — it is never listed in any group's arrays, and it inherits the group of
 * its canonical target (`aws_lb`). So it is generated as its own class, in the target's group.
 * Alias chains are followed, with a cycle guard.
 *
 * An alias does not necessarily exist on every surface its target does: `aws_lb_listener_rule` is
 * both a resource and a data source, but `aws_alb_listener_rule` is a resource only. So the caller
 * supplies `existsInSchema`, and an alias is added to a surface only where the pinned schema
 * actually has it. (Non-alias members are never filtered — a listed name the schema does not have
 * is a groups.json bug for `check:groups` to catch, not something to silently drop.)
 */
export interface GroupMembers {
  readonly slug: string;
  readonly title: string;
  /** the group's curated class-name prefixes; empty for the synthetic provider group */
  readonly stripPrefixes: string[];
  readonly resources: string[];
  readonly dataSources: string[];
  readonly ephemeralResources: string[];
  /** the subset of the three arrays above that got there by alias resolution */
  readonly aliased: string[];
}

function canonicalTarget(aliases: Record<string, string>, name: string): string | undefined {
  const seen = new Set<string>();
  let cur = name;
  for (;;) {
    const next = aliases[cur];
    if (next === undefined) return cur === name ? undefined : cur;
    if (seen.has(cur)) return undefined;
    seen.add(cur);
    cur = next;
  }
}

export type SurfaceExists = (surface: SurfaceKind, name: string) => boolean;

export function membersOf(
  g: GroupsFile,
  slug: string,
  existsInSchema: SurfaceExists = () => true,
): GroupMembers {
  const group = g.groups[slug];
  if (!group) throw new Error(`groups.json has no group "${slug}"`);

  const buckets: Record<SurfaceKind, string[]> = {
    resources: [...group.resources],
    dataSources: [...group.dataSources],
    ephemeralResources: [...group.ephemeralResources],
  };
  const aliased: string[] = [];

  // Which surface an alias belongs to is decided by which surface its canonical target is listed
  // in — the alias itself appears in no array, by construction (docs/curation.md, "Alias
  // representation"). All six aws aliases today are resources, but nothing here assumes that.
  for (const alias of Object.keys(g.aliases).sort()) {
    const target = canonicalTarget(g.aliases, alias);
    if (target === undefined) continue;
    for (const surface of SURFACES) {
      if (group[surface].includes(target) && existsInSchema(surface, alias)) {
        buckets[surface].push(alias);
        aliased.push(alias);
      }
    }
  }

  return {
    slug,
    title: group.title,
    stripPrefixes: [...group.stripPrefixes],
    resources: [...new Set(buckets.resources)].sort(),
    dataSources: [...new Set(buckets.dataSources)].sort(),
    ephemeralResources: [...new Set(buckets.ephemeralResources)].sort(),
    aliased: aliased.sort(),
  };
}

/**
 * The one per-group Go knob (go-split-spike VERDICT §5): it becomes the directory name inside
 * `github.com/cdktn-io/cdktn-aws-go` and the prefix of that module's release tags. jsii requires
 * it to match `^[a-z][a-z0-9]*$`, so the slug's underscores are simply removed.
 *
 * Every group is prefixed with `aws` (`elb` -> `awselb`) so a Go import path names the provider it
 * binds, matching the spike's `awsdetective`/`awscloudfront`/`awsprovider`.
 */
export function goPackageName(slug: string): string {
  const name = `aws${slug.replace(/_/g, "")}`;
  if (!/^[a-z][a-z0-9]*$/.test(name)) {
    throw new Error(`group "${slug}" produces an illegal jsii Go packageName "${name}"`);
  }
  return name;
}

/**
 * npm package name. The slug's underscores become hyphens: `acm_pca` -> `@cdktn/aws-acm-pca`.
 * These packages are `private: true` and never published (the pacmak-embedded tarball is the
 * runtime), but jsii and pnpm both read the name, and kebab-case is what every sibling repo uses.
 */
export function npmPackageName(slug: string): string {
  return `@cdktn/aws-${slug.replace(/_/g, "-")}`;
}

/**
 * Asserts `goPackageName` is injective across every group in groups.json plus the synthetic
 * provider group. Two slugs differing only in underscore placement (`acm_pca` vs a hypothetical
 * `acmpca`) would collide into one Go directory and one tag prefix, which the release story
 * cannot express. Computed over ALL 257 groups even when only a few are being generated.
 */
export function assertUniqueGoPackageNames(g: GroupsFile): Map<string, string> {
  const byName = new Map<string, string>();
  const collisions: string[] = [];
  for (const slug of [PROVIDER_GROUP, ...Object.keys(g.groups)].sort()) {
    const name = goPackageName(slug);
    const existing = byName.get(name);
    if (existing !== undefined) collisions.push(`${name}: ${existing} + ${slug}`);
    else byName.set(name, slug);
  }
  if (collisions.length > 0) {
    throw new Error(`Go packageName collisions across groups.json:\n  ${collisions.join("\n  ")}`);
  }
  return byName;
}
