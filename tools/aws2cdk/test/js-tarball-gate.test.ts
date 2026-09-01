// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The gate that stands between `jsii-pacmak --targets js` and every registry.
 *
 * `@cdktn/aws@0.1.0` was published as 7,990 files / 550,672,898 B unpacked, because `monolith/` had
 * no `.npmignore` and `scripts/package.mjs`'s `--outdir` makes jsii-pacmak skip writing one. The
 * allowlist is asserted in `monolith-manifest.test.ts`; this file asserts the *check* — an allowlist
 * nothing reads back is a comment, and the failure mode is silent (npm publishes a fat tarball
 * happily, and pacmak embeds that same tarball in the wheel, the jar and the nupkg as the jsii
 * kernel payload, so the bloat is paid once per language).
 *
 * The fixtures are real gzipped tarballs built with the system `tar` — the same bytes the real check
 * reads — because a mocked file list would only prove that the mock was shaped like the assertion.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const script = path.join(repoRoot, "scripts", "check-js-tarball.mjs");

let workDir: string;

/** Build `<name>.tgz` from a `package/` tree of the given relative-path → contents map. */
function tarball(name: string, files: Record<string, string>): string {
  const stage = fs.mkdtempSync(path.join(workDir, "stage-"));
  for (const [rel, contents] of Object.entries(files)) {
    const target = path.join(stage, "package", rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
  }
  const tgz = path.join(workDir, `${name}.tgz`);
  execFileSync("tar", ["-czf", tgz, "-C", stage, "package"]);
  return tgz;
}

/** A tarball shaped the way a correct `@cdktn/aws` is. */
const WELL_FORMED: Record<string, string> = {
  "package.json": JSON.stringify({ name: "@cdktn/aws", version: "0.1.1" }),
  ".jsii": JSON.stringify({ name: "@cdktn/aws" }),
  "README.md": "# @cdktn/aws\n",
  LICENSE: "MPL-2.0\n",
  NOTICE: "attribution\n",
  "lib/index.js": 'exports.s3 = require("./s3");\n',
  "lib/index.d.ts": "export * as s3 from './s3';\n",
};

/** Run the gate; return `null` on pass, or the message it failed with. */
function check(tgz: string): string | null {
  try {
    execFileSync(process.execPath, [script, tgz], { encoding: "utf-8", stdio: "pipe" });
    return null;
  } catch (err: any) {
    return `${err.stdout ?? ""}${err.stderr ?? ""}`;
  }
}

beforeAll(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktn-tarball-gate-"));
});
afterAll(() => {
  fs.rmSync(workDir, { recursive: true, force: true });
});

describe("the js tarball gate", () => {
  it("passes a tarball carrying only lib/, .jsii and the metadata files", () => {
    expect(check(tarball("good", WELL_FORMED))).toBeNull();
  });

  it("reports the file count and the unpacked size, so a release logs what it shipped", () => {
    const out = execFileSync(process.execPath, [script, tarball("sized", WELL_FORMED)], { encoding: "utf-8" });
    expect(out).toMatch(/7 files/);
    // The exact byte total of the fixture contents — this is the number that was 550,672,898.
    const bytes = Object.values(WELL_FORMED).reduce((n, s) => n + Buffer.byteLength(s), 0);
    expect(out).toContain(`${bytes} B unpacked`);
  });

  it("FAILS on a src/ tree — the 0.1.0 bug, exactly", () => {
    const failure = check(tarball("fat", { ...WELL_FORMED, "src/index.ts": "export * as s3 from './s3';\n" }));
    expect(failure).toMatch(/TypeScript source/);
    expect(failure).toContain("package/src/index.ts");
  });

  it("FAILS on a stray .ts outside lib/, wherever it hides", () => {
    expect(check(tarball("stray", { ...WELL_FORMED, "scripts/build.ts": "//\n" }))).toMatch(/TypeScript source/);
  });

  it("allows .d.ts under lib/ — that is the type surface every consumer needs", () => {
    expect(check(tarball("decls", { ...WELL_FORMED, "lib/s3/index.d.ts": "export {};\n" }))).toBeNull();
  });

  it("FAILS on build config a consumer cannot use", () => {
    expect(check(tarball("cfg", { ...WELL_FORMED, "tsconfig.json": "{}\n" }))).toMatch(/build config/);
    expect(check(tarball("tsbi", { ...WELL_FORMED, "lib/tsconfig.tsbuildinfo": "{}\n" }))).toMatch(/build config/);
  });

  it("FAILS when the licence or the attribution map is missing — MPL-2.0 §3.1", () => {
    for (const required of ["LICENSE", "NOTICE", "README.md", ".jsii", "package.json"]) {
      const files = { ...WELL_FORMED };
      delete files[required];
      const failure = check(tarball(`no-${required.replace(/\W/g, "")}`, files));
      expect(failure).toContain("missing required file(s)");
      expect(failure).toContain(`package/${required}`);
    }
  });

  it("FAILS when there is no compiled code to ship at all", () => {
    const files = { ...WELL_FORMED };
    delete files["lib/index.js"];
    expect(check(tarball("nojs", files))).toMatch(/no package\/lib\/\*\*\/\*\.js/);
  });
});
