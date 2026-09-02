// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The properties that make the rewrite safe to run unattended: it resolves through symbols rather
 * than text, it never collides with a name the file already uses, it reports what it does not know
 * instead of guessing, and running it twice does nothing the second time.
 */
import { migrate, migrated } from "./helpers";

describe("type positions", () => {
  it("rewrites a type reference, a typeof, a generic argument and a satisfies", () => {
    expect(
      migrated(
        [
          "import { S3Bucket, S3BucketConfig } from '@cdktn/provider-aws/lib/s3-bucket';",
          "",
          "type Ctor = typeof S3Bucket;",
          "declare const buckets: Array<S3Bucket>;",
          "const config = { bucket: 'x' } satisfies S3BucketConfig;",
          "export class Wrapper extends S3Bucket {}",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { s3 } from '@cdktn/aws';",
        "",
        "type Ctor = typeof s3.TfBucket;",
        "declare const buckets: Array<s3.TfBucket>;",
        "const config = { bucket: 'x' } satisfies s3.TfBucketConfig;",
        "export class Wrapper extends s3.TfBucket {}",
      ].join("\n"),
    );
  });
});

describe("aliasing", () => {
  it("aliases the group when the file already binds that name", () => {
    expect(
      migrated(
        [
          "import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket';",
          "const s3 = new AWS.S3();",
          "export const b = new S3Bucket(this, 'b', { bucket: s3.name });",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { s3 as s3_ } from '@cdktn/aws';",
        "const s3 = new AWS.S3();",
        "export const b = new s3_.TfBucket(this, 'b', { bucket: s3.name });",
      ].join("\n"),
    );
  });

  it("aliases around a name an import ALIAS bound — the local name, not the imported one", () => {
    expect(
      migrated(
        [
          "import { readFileSync as s3 } from 'node:fs';",
          "import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket';",
          "export const a = (scope: any) => { s3('x'); return new S3Bucket(scope, 'x', {}); };",
        ].join("\n"),
      ),
    ).toBe(
      [
        "import { readFileSync as s3 } from 'node:fs';",
        "import { s3 as s3_ } from '@cdktn/aws';",
        "export const a = (scope: any) => { s3('x'); return new s3_.TfBucket(scope, 'x', {}); };",
      ].join("\n"),
    );
  });

  it("keeps aliasing deterministically when the obvious alias is taken too", () => {
    expect(
      migrated(
        [
          "import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket';",
          "declare const s3: unknown;",
          "declare const s3_: unknown;",
          "export const b = new S3Bucket(this, 'b', {});",
        ].join("\n"),
      ),
    ).toContain("import { s3 as s3_2 } from '@cdktn/aws';");
  });

  it("leaves a same-named local alone — the rewrite resolves symbols, not text", () => {
    const source = [
      "import { S3Bucket } from '@cdktn/provider-aws/lib/s3-bucket';",
      "",
      "export function build() {",
      "  const S3Bucket = 'a local that shadows the import';",
      "  return S3Bucket;",
      "}",
      "export const real = new S3Bucket(this, 'b', {});",
    ].join("\n");
    const after = migrated(source);
    expect(after).toContain("  const S3Bucket = 'a local that shadows the import';");
    expect(after).toContain("  return S3Bucket;");
    expect(after).toContain("export const real = new s3.TfBucket(this, 'b', {});");
  });
});

describe("what it refuses to guess", () => {
  it("reports an unknown classic export and leaves its import in place", () => {
    const result = migrate(
      [
        "import { S3Bucket, S3BucketInvented } from '@cdktn/provider-aws/lib/s3-bucket';",
        "new S3Bucket(this, 'b', {});",
        "new S3BucketInvented(this, 'x', {});",
      ].join("\n"),
    );
    expect(result.unmapped).toEqual([
      {
        file: "main.ts",
        line: 1,
        symbol: "s3-bucket.S3BucketInvented",
        reason: "no naming-map row for this classic export",
      },
    ]);
    expect(result.after).toContain("import { s3 } from '@cdktn/aws';");
    expect(result.after).toContain(
      "import { S3BucketInvented } from '@cdktn/provider-aws/lib/s3-bucket';",
    );
    expect(result.after).toContain("new s3.TfBucket(this, 'b', {});");
    expect(result.after).toContain("new S3BucketInvented(this, 'x', {});");
  });

  it("reports a re-exported binding rather than emitting `export { s3.TfBucket }`", () => {
    // An export clause takes names, not qualified names: rewriting there produces text that does
    // not parse, which is the one failure a migration tool must never ship.
    const result = migrate(
      [
        "import { S3Bucket as B } from '@cdktn/provider-aws/lib/s3-bucket';",
        "export { B };",
      ].join("\n"),
    );
    expect(result.unmapped).toEqual([
      {
        file: "main.ts",
        line: 2,
        symbol: "S3Bucket",
        reason: "export specifier — a qualified name is not valid there; re-export it by hand",
      },
    ]);
    expect(result.after).toBe(result.before);
  });

  const DEFAULT_IMPORT =
    "default import of the classic package — there is no default export to move; move it by hand";

  it("reports a default import that shares its statement with a named one, and keeps it bound", () => {
    // The sibling binding is what makes this dangerous: it marks the statement handled, so without
    // its own row the default would leave with the statement — silently, at exit 0.
    const result = migrate(
      [
        "import d, { iamRole } from '@cdktn/provider-aws';",
        "export function build(scope: any) {",
        "  new iamRole.IamRole(scope, 'r', {});",
        "  new d.s3Bucket.S3Bucket(scope, 'b', {});",
        "}",
      ].join("\n"),
    );
    expect(result.unmapped).toEqual([
      { file: "main.ts", line: 1, symbol: "d", reason: DEFAULT_IMPORT },
    ]);
    expect(result.after).toContain("import { iam } from '@cdktn/aws';");
    expect(result.after).toContain("import d from '@cdktn/provider-aws';");
    expect(result.after).toContain("new d.s3Bucket.S3Bucket(scope, 'b', {});");
  });

  it("will not retarget a `* as` barrel whose statement also carries a default import", () => {
    const result = migrate(
      [
        "import d, * as ns from '@cdktn/provider-aws';",
        "export const x = (s: any) => [new ns.iamRole.IamRole(s, 'r', {}), d.s3Bucket.S3Bucket];",
      ].join("\n"),
    );
    expect(result.unmapped.map((u) => [u.symbol, u.reason])).toEqual([
      ["d", DEFAULT_IMPORT],
      [
        "ns",
        "another binding on this classic import could not move, so the package cannot be retargeted",
      ],
    ]);
    expect(result.after).toBe(result.before);
  });

  it("reports a classic submodule used as a value rather than as a namespace", () => {
    const result = migrate(
      [
        "import * as s3Bucket from '@cdktn/provider-aws/lib/s3-bucket';",
        "export const everything = s3Bucket;",
      ].join("\n"),
    );
    expect(result.unmapped.map((u) => u.reason)).toEqual([
      "the classic submodule is used as a value, not as `<submodule>.<Symbol>`",
    ]);
    expect(result.after).toBe(result.before);
  });
});

describe("idempotence", () => {
  it("does nothing at all on its own output", () => {
    const source = [
      "import { s3Bucket, provider } from '@cdktn/provider-aws';",
      "import { LambdaFunction } from '@cdktn/provider-aws/lib/lambda-function';",
      "",
      "new provider.AwsProvider(this, 'aws', { region: 'eu-west-1' });",
      "new s3Bucket.S3Bucket(this, 'b', { bucket: 'x' });",
      "new LambdaFunction(this, 'f', {});",
    ].join("\n");
    const once = migrated(source);
    expect(once).not.toBe(source);
    const twice = migrate(once);
    expect(twice.after).toBe(once);
    expect(twice.rewrites).toBe(0);
    expect(twice.unmapped).toEqual([]);
  });
});
