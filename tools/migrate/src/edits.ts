// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Text edits over the ORIGINAL source, applied in one pass at the end.
 *
 * ts-morph can rewrite a node in place, but every such rewrite reparses the file and forgets every
 * node captured before it — and this tool captures all of a file's references before it decides
 * anything. Collecting `[start, end) -> text` ranges and splicing them once keeps every offset
 * valid for the whole run, and makes overlapping edits an assertion rather than a silent
 * last-writer-wins.
 */
export interface Edit {
  readonly start: number;
  readonly end: number;
  readonly text: string;
}

export function applyEdits(source: string, edits: readonly Edit[]): string {
  const sorted = [...edits].sort((a, b) => a.start - b.start || a.end - b.end);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start < sorted[i - 1].end) {
      throw new Error(
        `overlapping edits at ${sorted[i - 1].start}..${sorted[i - 1].end} and ` +
          `${sorted[i].start}..${sorted[i].end}`,
      );
    }
  }
  let out = source;
  for (let i = sorted.length - 1; i >= 0; i--) {
    out = out.slice(0, sorted[i].start) + sorted[i].text + out.slice(sorted[i].end);
  }
  return out;
}

/**
 * Widens a statement's range to the whole line when the statement is alone on it, so deleting an
 * import does not leave a blank line where it stood.
 */
export function wholeLine(source: string, start: number, end: number): { start: number; end: number } {
  let from = start;
  while (from > 0 && (source[from - 1] === " " || source[from - 1] === "\t")) from--;
  const atLineStart = from === 0 || source[from - 1] === "\n";
  const trailing = /^[ \t]*\r?\n/.exec(source.slice(end));
  if (atLineStart && trailing) return { start: from, end: end + trailing[0].length };
  return { start, end };
}
