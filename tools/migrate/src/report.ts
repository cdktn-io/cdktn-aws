// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The report: what moved, and — the part that decides the exit code — what did not.
 *
 * A migration that quietly left half a project on the old library is worse than one that refuses,
 * so the unmapped table is the headline and any row in it is a non-zero exit, which is what lets a
 * CI job gate on the tool rather than on someone reading its output.
 */
import { ManifestChange } from "./manifest";
import { FileResult, Unmapped } from "./rewrite";

export interface Report {
  readonly files: readonly FileResult[];
  readonly manifests: readonly ManifestChange[];
  readonly wrote: boolean;
}

const table = (headers: readonly string[], rows: readonly (readonly string[])[]): string[] => [
  `| ${headers.join(" | ")} |`,
  `| ${headers.map(() => "---").join(" | ")} |`,
  ...rows.map((r) => `| ${r.join(" | ")} |`),
];

export function unmappedOf(report: Report): Unmapped[] {
  return report.files.flatMap((f) => f.unmapped);
}

export function renderReport(report: Report): string {
  const changed = report.files.filter((f) => f.before !== f.after);
  const rewrites = report.files.reduce((n, f) => n + f.rewrites, 0);
  const unmapped = unmappedOf(report);

  const out: string[] = [
    `# @cdktn/provider-aws -> @cdktn/aws (${report.wrote ? "written" : "dry run"})`,
    "",
    ...table(
      ["file", "references rewritten", "unmapped"],
      [
        ...report.files.map((f) => [f.file, String(f.rewrites), String(f.unmapped.length)]),
        ["**total**", `**${rewrites}**`, `**${unmapped.length}**`],
      ],
    ),
    "",
  ];

  if (report.manifests.length > 0) {
    out.push(
      "## package.json",
      "",
      ...table(
        ["file", "block", "was", "becomes"],
        report.manifests.map((m) => [
          m.file,
          m.block,
          `\`@cdktn/provider-aws@${m.from}\``,
          m.keptClassic
            ? "`@cdktn/aws@^0.2.0`, classic kept — the residual imports still need it"
            : "`@cdktn/aws@^0.2.0`",
        ]),
      ),
      "",
    );
  }

  out.push("## unmapped symbols", "");
  if (unmapped.length === 0) {
    out.push("None — every `@cdktn/provider-aws` symbol this project uses has a naming-map row.", "");
  } else {
    out.push(
      ...table(
        ["file", "line", "symbol", "why it was left alone"],
        unmapped.map((u) => [u.file, String(u.line), `\`${u.symbol}\``, u.reason]),
      ),
      "",
      `${unmapped.length} symbol(s) left untouched, with the import they come through. Nothing here `,
      "was guessed at; decide each one by hand.",
      "",
    );
  }

  out.push(
    `${changed.length} file(s) ${report.wrote ? "rewritten" : "would change"}, ${rewrites} reference(s), ` +
      `${report.manifests.length} manifest(s), ${unmapped.length} unmapped.`,
  );
  return `${out.join("\n")}\n`;
}
