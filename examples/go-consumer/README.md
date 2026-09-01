# `examples/go-consumer`

A Go program that consumes 36 modules of the assembled fleet — `awsprovider` plus 35 group
modules — and synthesises a `cdk.tf.json` with cdktn's validations **on**.

It exists to answer the one question `VERDICT.md` left open (risk #2): Option A's per-assembly
consumer cost was extrapolated from a three-module prototype, and the real fleet's tarballs are up
to 300× that prototype's. The measurements it prints are the subject of
[`docs/m3-go.md` § "Consumer cost at scale"](../../docs/m3-go.md).

## Running it

The fleet is **not published** — nothing under `github.com/cdktn-io/cdktn-aws-go` resolves through
the module proxy — so the example is built in workspace mode against a local checkout:

```console
node scripts/go-consumer.mjs             # writes go.work, then go build + go run
node scripts/go-consumer.mjs --runs 3    # three runs, for the spread on the kernel bootstrap
node scripts/go-consumer.mjs --root /elsewhere/cdktn-aws-go
```

The fleet root defaults to `../cdktn-aws-go` and honours `CDKTN_AWS_GO_ROOT`, the same convention
`scripts/check-go-size.mjs` and the manifest tests use.

## Why `go.work` is generated and not committed

`go.work` names directories on the machine it was written on. Committing one would bake this
checkout's layout into the repository and break every other clone, so the script writes it and
`.gitignore` keeps it out — the same reason `generated/*/lib/` is not committed. What *is*
committed is `go.mod`, `main.go` and this file: the parts that are the proof artifact.

The generated workspace uses `replace`, not `use`, for the fleet modules. Go rejects a module that
is both a workspace module and a replacement target, and without a replacement the placeholder
`v0.0.0` in `go.mod` is resolved against a repository that does not exist yet. `replace` is also
what a real consumer of an unpublished module writes, and the single line they delete once the
fleet is tagged.

`go.mod` requires each fleet module at `v0.0.0`. That version is a placeholder and is never
resolved; when the fleet is tagged, the requires become real versions and the workspace goes away.

## What it asserts

Every assertion runs on the synthesised `cdk.tf.json`, so a construct that silently changes shape
fails the run rather than the review:

* all 35 sampled terraform types are present, under `resource` or `data` as appropriate;
* `required_providers.aws` is `hashicorp/aws` pinned at **6.62.0**, and is the *only* required
  provider — 36 assemblies must still describe one provider;
* `provider.aws[0].region` is the region the `AwsProvider` construct was given;
* `output.bucket_arn` renders `provider::aws::arn_build(…)`, i.e. a provider-defined function
  survives the Go → jsii → HCL round trip;
* synth ran with no `SkipValidation` and no `skipValidation` context — `ValidateProviderPresence`
  really did walk the stack.

The app raises its declared `targetVersions` to terraform >=1.8 / opentofu >=1.7, because
provider-defined functions do not exist below that. That is the fix cdktn's validation asks for;
`skipValidation` would have been the cover-up.
