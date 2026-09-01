import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { groupMovesPath, repoRoot } from "@cdktn-aws/groups-core";

/**
 * `git show HEAD:groups.json`, or undefined when there is no HEAD yet, no
 * groups.json at HEAD, or this is not a git work tree. A missing baseline
 * disables gate B rather than failing it — the first commit has nothing to
 * compare against.
 */
export function groupsAtHead(): string | undefined {
  try {
    return execFileSync("git", ["show", "HEAD:groups.json"], {
      cwd: repoRoot,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return undefined;
  }
}

/**
 * A move is acknowledged when docs/group-moves.md contains a line mentioning
 * the resource name AND the destination slug. The documented convention is one
 * markdown list item per move:
 *
 *   - `aws_foo_bar`: `old_slug` -> `new_slug` — why (provider vX.Y.Z)
 *
 * The match is deliberately loose (name + destination slug on one line) so the
 * prose around it can be edited freely without breaking the gate.
 */
export function readAcknowledgedMoves(): string[] {
  if (!existsSync(groupMovesPath)) return [];
  return readFileSync(groupMovesPath, "utf-8").split("\n");
}

/** Whole-token match, so `aws_lb` is not satisfied by a line about `aws_lb_listener`. */
function mentions(line: string, token: string): boolean {
  return new RegExp(`(^|[^A-Za-z0-9_])${token}([^A-Za-z0-9_]|$)`).test(line);
}

export function isAcknowledged(lines: string[], name: string, toSlug: string): boolean {
  return lines.some(
    (l) => !l.trimStart().startsWith("<!--") && mentions(l, name) && mentions(l, toSlug),
  );
}
