#!/usr/bin/env tsx
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Usage:
 *   cdktn-aws-migrate ts [--project tsconfig.json | <glob> ...] [--write] [--report <file>]
 *
 * A dry run by default: it prints the unified diff it would apply and the report, and changes
 * nothing. `--write` applies it. The exit code is 1 while anything is left unmapped, so a CI job
 * can gate on the tool instead of on someone reading its output.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { reportOf, run, unmappedCount } from "../src/index";

const USAGE =
  "usage: cdktn-aws-migrate ts [--project tsconfig.json | <glob> ...] [--write] [--report <file>]";

function main(argv: readonly string[]): number {
  const [command, ...rest] = argv;
  if (command !== "ts") {
    console.error(
      command === undefined || command === "--help" || command === "-h"
        ? USAGE
        : `unknown command "${command}" — TypeScript is the only target so far (Go and Python are ` +
            `planned; see docs/migrating-from-provider-aws.md).\n${USAGE}`,
    );
    return command === "--help" || command === "-h" ? 0 : 2;
  }

  let tsconfig: string | undefined;
  let reportFile: string | undefined;
  let write = false;
  const globs: string[] = [];
  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (arg === "--write") write = true;
    else if (arg === "--project" || arg === "-p") tsconfig = path.resolve(rest[++i]);
    else if (arg === "--report") reportFile = path.resolve(rest[++i]);
    else if (arg.startsWith("-")) {
      console.error(`unknown option "${arg}"\n${USAGE}`);
      return 2;
    } else globs.push(arg);
  }

  if (!tsconfig && globs.length === 0) {
    const found = path.resolve("tsconfig.json");
    if (!fs.existsSync(found)) {
      console.error(`no --project and no globs, and there is no tsconfig.json here\n${USAGE}`);
      return 2;
    }
    tsconfig = found;
  }
  const root = tsconfig ? path.dirname(tsconfig) : process.cwd();

  const result = run({ tsconfig, files: globs, root, write });
  if (result.diff) process.stdout.write(result.diff);
  const report = reportOf(result);
  process.stdout.write(`\n${report}`);
  if (reportFile) fs.writeFileSync(reportFile, report);

  const unmapped = unmappedCount(result);
  if (!write && result.diff) {
    console.error("dry run — nothing was written. Re-run with --write to apply.");
  }
  return unmapped === 0 ? 0 : 1;
}

process.exitCode = main(process.argv.slice(2));
