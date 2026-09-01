import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { tmpDir } from "@cdktn-aws/groups-core";

const CHECKOUT = path.join(tmpDir, "terraform-provider-aws");

function git(args: string[], cwd?: string): string {
  return execFileSync("git", args, { cwd, encoding: "utf-8", stdio: ["ignore", "pipe", "inherit"] });
}

/**
 * Blobless sparse clone of hashicorp/terraform-provider-aws at the pinned tag,
 * `website/` only (~2 800 markdown files instead of a ~1 GB working tree).
 * Idempotent: an existing checkout already at the tag is reused; `--refresh`
 * (or a checkout at the wrong tag) forces a re-clone.
 */
export function ensureProviderCheckout(
  repo: string,
  tag: string,
  refresh = false,
): string {
  if (existsSync(CHECKOUT)) {
    let at = "";
    try {
      at = git(["describe", "--tags", "--exact-match"], CHECKOUT).trim();
    } catch {
      at = "";
    }
    if (!refresh && at === tag) {
      console.log(`  reusing existing checkout at ${tag}: ${CHECKOUT}`);
      return CHECKOUT;
    }
    console.log(`  removing stale checkout (at ${at || "unknown"}, want ${tag})`);
    rmSync(CHECKOUT, { recursive: true, force: true });
  }

  mkdirSync(tmpDir, { recursive: true });
  console.log(`  blobless sparse clone ${repo} @ ${tag} -> ${CHECKOUT}`);
  git([
    "clone",
    "--filter=blob:none",
    "--no-checkout",
    "--depth",
    "1",
    "--branch",
    tag,
    repo,
    CHECKOUT,
  ]);
  git(["sparse-checkout", "init", "--cone"], CHECKOUT);
  git(["sparse-checkout", "set", "website"], CHECKOUT);
  git(["checkout", tag], CHECKOUT);
  return CHECKOUT;
}

export const websiteDir = (checkout: string): string => path.join(checkout, "website");
