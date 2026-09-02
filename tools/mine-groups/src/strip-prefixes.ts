/**
 * The miner's mechanical `stripPrefixes` proposal.
 *
 * It is a proposal, not a decision: groups.json is the source of truth and
 * `mine-config.json#stripPrefixOverrides` is where a human overrules this, exactly the way
 * `slugOverrides` overrules the derived slug. The rule the proposal approximates is "strip the
 * service-name tokens the group title already conveys, never a token that names the resource
 * itself" — a machine cannot tell those apart, so the miner takes the cheapest defensible guess and
 * the curated table in docs/curation.md records every place it was wrong.
 */

/** `aws_s3_bucket` -> `s3_bucket`; the provider prefix is never part of a stem or a prefix. */
export function rawType(name: string): string {
  return name.startsWith("aws_") ? name.slice(4) : name;
}

const MAX_PREFIX_TOKENS = 3;

function covers(raw: string, prefix: string): boolean {
  return raw === prefix || raw.startsWith(`${prefix}_`);
}

/**
 * The proposal for one group:
 *
 *  1. the group SLUG, whenever it actually prefixes a member (`s3` for `aws_s3_bucket`) — it is the
 *     name the packaging already uses, so preferring it keeps the two spellings in step;
 *  2. otherwise the SHORTEST leading token-prefix (1–3 tokens) with maximal member coverage:
 *     `acm_pca` is not a prefix of `aws_acmpca_certificate`, but `acmpca` covers all seven members.
 *
 * Ties are broken by token count, then length, then alphabetically, so the result depends only on
 * the member set.
 */
export function proposeStripPrefixes(slug: string, members: readonly string[]): string[] {
  const raws = members.map(rawType);
  if (raws.length === 0) return [slug];
  if (raws.some((raw) => covers(raw, slug))) return [slug];

  const candidates = new Set<string>();
  for (const raw of raws) {
    const tokens = raw.split("_");
    for (let n = 1; n <= Math.min(MAX_PREFIX_TOKENS, tokens.length); n++) {
      candidates.add(tokens.slice(0, n).join("_"));
    }
  }

  const scored = [...candidates].map((prefix) => ({
    prefix,
    coverage: raws.filter((raw) => covers(raw, prefix)).length,
    tokens: prefix.split("_").length,
  }));
  scored.sort(
    (a, b) =>
      b.coverage - a.coverage ||
      a.tokens - b.tokens ||
      a.prefix.length - b.prefix.length ||
      (a.prefix < b.prefix ? -1 : 1),
  );
  return [scored[0].prefix];
}
