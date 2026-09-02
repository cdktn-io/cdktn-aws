#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Synth smoke test with cdktn's validation **ON** — no `SkipValidation` anywhere.
 *
 * This is the check requirement 6 of the M1 brief asks for: the generated `AwsProvider`'s
 * `terraformGeneratorMetadata.providerName` has to satisfy
 * `cdktn/lib/validations/validate-provider-presence`, which walks a stack looking for a provider
 * construct whose metadata names the provider every resource in the stack declares. If the
 * generated provider construct is wrong in any way that matters, synth fails here rather than in
 * a consumer's project.
 *
 * It also proves two things nothing else in M1 does: the compiled `lib/` of two independent group
 * packages load into one program at the same time, and the resulting `cdk.tf.json` names the real
 * terraform types.
 *
 * Requires the compiled `lib/` of the groups it loads:
 *   node scripts/build-generated.mjs provider elb lambda
 * Usage: node scripts/synth-smoke.mjs
 */
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

// A clean checkout has sources but no `lib/`, and `require`ing one straight away dies with a bare
// MODULE_NOT_FOUND stack that says nothing about what to run. Name the command instead.
const BUILD_CMD = "node scripts/build-generated.mjs provider elb lambda";
const missing = ["provider", "elb"].filter(
  (group) => !existsSync(path.join(repoRoot, "generated", group, "lib", "index.js")),
);
if (missing.length > 0) {
  console.error(
    `synth-smoke: no compiled lib/ for ${missing.join(", ")} — run \`${BUILD_CMD}\` first.`,
  );
  process.exit(1);
}

// `cdktn` is a devDependency of each generated package, not of the repo root, so it is resolved
// through one of them — the same copy the compiled lib/ was type-checked and linked against.
const cdktn = require(path.join(repoRoot, "generated", "provider", "node_modules", "cdktn"));
const { AwsProvider } = require(path.join(repoRoot, "generated", "provider", "lib"));
const { TfLb, TfAlb } = require(path.join(repoRoot, "generated", "elb", "lib"));

const outdir = mkdtempSync(path.join(os.tmpdir(), "cdktn-aws-synth-"));

class SmokeStack extends cdktn.TerraformStack {
  constructor(scope, id) {
    super(scope, id);
    new AwsProvider(this, "aws", { region: "eu-west-1" });
    new TfLb(this, "lb", { name: "smoke-lb", internal: true });
    // the alias type, generated as its own class in the same group
    new TfAlb(this, "alb", { name: "smoke-alb" });
  }
}

// No `skipValidation`, no `context: { skipValidation: true }` — the default validations run.
const app = new cdktn.App({ outdir });
new SmokeStack(app, "smoke");
app.synth();

const manifest = JSON.parse(readFileSync(path.join(outdir, "manifest.json"), "utf-8"));
const stackDir = Object.values(manifest.stacks)[0].workingDirectory;
const cfg = JSON.parse(readFileSync(path.join(outdir, "stacks", "smoke", "cdk.tf.json"), "utf-8"));

console.log("synth-smoke: validation ON (no SkipValidation)");
console.log(`  stack dir          : ${stackDir}`);
console.log(`  required_providers : ${JSON.stringify(cfg.terraform.required_providers)}`);
console.log(`  provider block     : ${JSON.stringify(cfg.provider)}`);
console.log(`  resource types     : ${JSON.stringify(Object.keys(cfg.resource).sort())}`);

const types = Object.keys(cfg.resource).sort();
const ok =
  types.join(",") === "aws_alb,aws_lb" &&
  cfg.terraform.required_providers.aws.source === "hashicorp/aws" &&
  cfg.provider.aws[0].region === "eu-west-1";
console.log(ok ? "  PASS" : "  FAIL");
rmSync(outdir, { recursive: true, force: true });
process.exit(ok ? 0 : 1);
