import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const SUBCATEGORY = /^subcategory:\s*"?(.*?)"?\s*$/m;

/**
 * Returns the body of the leading `---`-delimited YAML frontmatter block, or
 * `undefined` when the file does not open with one (or never closes it).
 * Scoping the key match to this block keeps a `subcategory:` line in the prose
 * body — a fenced example, say — from being mistaken for frontmatter.
 */
export function frontmatterBlock(text: string): string | undefined {
  // Tolerate a UTF-8 BOM and trailing whitespace on the delimiter lines.
  const body = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const open = /^---[ \t]*\r?\n/.exec(body);
  if (!open || open.index !== 0) return undefined;
  const rest = body.slice(open[0].length);
  const close = /^---[ \t]*(\r?\n|$)/m.exec(rest);
  if (!close) return undefined;
  return rest.slice(0, close.index);
}

export interface DocEntry {
  /** Terraform type name, e.g. "aws_lambda_function". */
  name: string;
  /** Verbatim `subcategory:` value. */
  subcategory: string;
  /** Path relative to the checkout, for error messages. */
  file: string;
}

/**
 * Parses `subcategory:` out of the YAML frontmatter of every
 * `<dir>/*.html.markdown`. The doc file's basename minus `.html.markdown` is
 * the terraform type name without the `aws_` prefix
 * (`lambda_function.html.markdown` -> `aws_lambda_function`).
 */
export function readDocSubcategories(docDir: string): DocEntry[] {
  const files = readdirSync(docDir)
    .filter((f) => f.endsWith(".html.markdown"))
    .sort();

  return files.map((f) => {
    const full = path.join(docDir, f);
    // Frontmatter is the first block of the file; 8 KB is far more than enough
    // to contain it, and bounds the regex work on multi-hundred-KB doc pages.
    const head = readFileSync(full, "utf-8").slice(0, 8192);
    const block = frontmatterBlock(head);
    const m = block === undefined ? null : SUBCATEGORY.exec(block);
    if (!m || !m[1]) {
      throw new Error(`${full}: no "subcategory:" in frontmatter`);
    }
    return {
      name: `aws_${f.slice(0, -".html.markdown".length)}`,
      subcategory: m[1],
      file: full,
    };
  });
}

/** website/allowed-subcategories.txt — the upstream list of legal values. */
export function readAllowedSubcategories(websiteDir: string): string[] {
  return readFileSync(path.join(websiteDir, "allowed-subcategories.txt"), "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}
