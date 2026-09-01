/**
 * Slug derivation for a `subcategory:` title.
 *
 * Rule: take the text before the first " (" (the parenthetical in upstream
 * subcategories is an expansion of the acronym, e.g. "ACM (Certificate
 * Manager)"), lowercase it, and collapse every run of non-alphanumerics into a
 * single "_". The result is a valid identifier in every jsii target language,
 * which matters in M1 where the slug becomes the submodule name.
 *
 * The rule collides for four pairs of subcategories (ARC, VPN, Outposts, IVS);
 * those are resolved by handcrafted `slugOverrides` entries in mine-config.json,
 * NOT by special cases here. See docs/curation.md.
 */
export function baseTitle(subcategory: string): string {
  const i = subcategory.indexOf(" (");
  return i === -1 ? subcategory : subcategory.slice(0, i);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export function derivedSlug(subcategory: string): string {
  return slugify(baseTitle(subcategory));
}

/** A slug must be a non-empty, non-digit-initial identifier. */
export function assertUsableSlug(slug: string, subcategory: string): void {
  if (!/^[a-z][a-z0-9_]*$/.test(slug)) {
    throw new Error(
      `subcategory ${JSON.stringify(subcategory)} produced unusable slug ${JSON.stringify(slug)}; ` +
        `add a slugOverrides entry in mine-config.json`,
    );
  }
}
