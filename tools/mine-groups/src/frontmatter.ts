import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const SUBCATEGORY = /^subcategory:\s*"?(.*?)"?\s*$/m;

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
    // Frontmatter is the first block of the file; 8 KB is far more than enough.
    const head = readFileSync(full, "utf-8").slice(0, 8192);
    const m = SUBCATEGORY.exec(head);
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
