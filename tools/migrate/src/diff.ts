// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * A unified diff, so the default (dry) run shows exactly what `--write` would do.
 *
 * Myers' greedy algorithm over lines — the same shape `git diff` reports, self-contained rather
 * than shelling out to `diff`, which is not a given on every runner and whose output format is
 * a platform detail.
 */
type Op = { readonly kind: "=" | "-" | "+"; readonly line: string };

function myers(a: readonly string[], b: readonly string[]): Op[] {
  const max = a.length + b.length;
  const trace: Map<number, number>[] = [];
  let v = new Map<number, number>([[1, 0]]);

  for (let d = 0; d <= max; d++) {
    trace.push(new Map(v));
    const next = new Map<number, number>();
    for (let k = -d; k <= d; k += 2) {
      const down = k === -d || (k !== d && (v.get(k - 1) ?? 0) < (v.get(k + 1) ?? 0));
      let x = down ? (v.get(k + 1) ?? 0) : (v.get(k - 1) ?? 0) + 1;
      let y = x - k;
      while (x < a.length && y < b.length && a[x] === b[y]) {
        x++;
        y++;
      }
      next.set(k, x);
      if (x >= a.length && y >= b.length) {
        return backtrack(a, b, trace, d, k);
      }
    }
    v = next;
  }
  throw new Error("myers: no path");
}

function backtrack(
  a: readonly string[],
  b: readonly string[],
  trace: Map<number, number>[],
  d: number,
  k: number,
): Op[] {
  const ops: Op[] = [];
  let x = a.length;
  let y = b.length;
  for (let depth = d; depth > 0; depth--) {
    const v = trace[depth];
    const down = k === -depth || (k !== depth && (v.get(k - 1) ?? 0) < (v.get(k + 1) ?? 0));
    const prevK = down ? k + 1 : k - 1;
    const prevX = v.get(prevK) ?? 0;
    const prevY = prevX - prevK;
    while (x > prevX && y > prevY) ops.push({ kind: "=", line: a[--x] }), y--;
    if (down) ops.push({ kind: "+", line: b[--y] });
    else ops.push({ kind: "-", line: a[--x] });
    k = prevK;
  }
  while (x > 0 && y > 0) ops.push({ kind: "=", line: a[--x] }), y--;
  return ops.reverse();
}

const CONTEXT = 3;

/** Unified diff of two texts, `''` when they are equal. */
export function unifiedDiff(path: string, before: string, after: string): string {
  if (before === after) return "";
  const a = before.split("\n");
  const b = after.split("\n");
  const ops = myers(a, b);

  const hunks: { aStart: number; bStart: number; lines: string[] }[] = [];
  let ai = 0;
  let bi = 0;
  let current: { aStart: number; bStart: number; lines: string[] } | undefined;
  let trailing = 0;

  const pending: string[] = [];
  for (const op of ops) {
    if (op.kind === "=") {
      if (current && trailing < CONTEXT) {
        current.lines.push(` ${op.line}`);
        trailing++;
      } else {
        if (current) {
          hunks.push(current);
          current = undefined;
        }
        pending.push(` ${op.line}`);
        if (pending.length > CONTEXT) pending.shift();
      }
      ai++;
      bi++;
      continue;
    }
    if (!current) {
      current = { aStart: ai - pending.length + 1, bStart: bi - pending.length + 1, lines: [...pending] };
      pending.length = 0;
    }
    trailing = 0;
    current.lines.push(`${op.kind === "-" ? "-" : "+"}${op.line}`);
    if (op.kind === "-") ai++;
    else bi++;
  }
  if (current) hunks.push(current);

  const out = [`--- a/${path}`, `+++ b/${path}`];
  for (const hunk of hunks) {
    const aCount = hunk.lines.filter((l) => l[0] !== "+").length;
    const bCount = hunk.lines.filter((l) => l[0] !== "-").length;
    out.push(`@@ -${hunk.aStart},${aCount} +${hunk.bStart},${bCount} @@`);
    out.push(...hunk.lines);
  }
  return `${out.join("\n")}\n`;
}
