# `examples/go-consumer`

A Go program that consumes 36 modules of the assembled fleet — `awsprovider` plus 35 group
modules — and synthesises a `cdk.tf.json` with cdktn's validations **on**.

It exists to answer the one question `VERDICT.md` left open (risk #2): Option A's per-assembly
consumer cost was extrapolated from a three-module prototype, and the real fleet's tarballs are up
to 300× that prototype's. The measurements it prints are the subject of
[`docs/m3-go.md` § "Consumer cost at scale"](../../docs/m3-go.md).

## Running it

The example is built in **workspace mode**, against a local checkout of the fleet, so that it
measures and proves the tree in *this* repository rather than the last release:

```console
node scripts/go-consumer.mjs             # writes go.work, then go build + go run
node scripts/go-consumer.mjs --runs 3    # three runs, for the spread on the kernel bootstrap
node scripts/go-consumer.mjs --root /elsewhere/cdktn-aws-go
```

The fleet root defaults to `../cdktn-aws-go` and honours `CDKTN_AWS_GO_ROOT`, the same convention
`scripts/check-go-size.mjs` and the manifest tests use.

A *consumer* needs none of this. The fleet is published: every module under
`github.com/cdktn-io/cdktn-aws-go` resolves at **v0.1.1** through `proxy.golang.org` — verified
against the proxy directly (`.../awsprovider/@latest` → `v0.1.1`, tag `awsprovider/v0.1.1`). Outside
this repository, `go get github.com/cdktn-io/cdktn-aws-go/awss3@v0.1.1` and no workspace at all is
the whole story.

## Why `go.work` is generated and not committed

`go.work` names directories on the machine it was written on. Committing one would bake this
checkout's layout into the repository and break every other clone, so the script writes it and
`.gitignore` keeps it out — the same reason `generated/*/lib/` is not committed. What *is*
committed is `go.mod`, `main.go` and this file: the parts that are the proof artifact.

The generated workspace uses `replace`, not `use`, for the fleet modules. Go rejects a module that
is both a workspace module and a replacement target, and without a replacement the placeholder
`v0.0.0` in `go.mod` would be resolved against the proxy — which is to say against the *last
release*, not against the checkout this example is here to measure.

`go.mod` therefore requires each fleet module at `v0.0.0`. That version is a placeholder and is
never resolved: the `replace` directives answer every one of those requires from disk. A consumer
outside this repository writes the published version instead (**v0.1.1**) and has no `go.work` at
all.

## What it asserts

Every assertion runs on the synthesised `cdk.tf.json`, so a construct that silently changes shape
fails the run rather than the review:

* all 35 sampled terraform types are present, under `resource` or `data` as appropriate;
* `required_providers.aws` is `hashicorp/aws` pinned at **6.62.0**, and is the *only* required
  provider — 36 assemblies must still describe one provider;
* `provider.aws[0].region` is the region the `AwsProvider` construct was given;
* `output.bucket_arn` renders `provider::aws::arn_build(…)`, i.e. a provider-defined function
  survives the Go → jsii → HCL round trip. The example reaches it through the mounted accessor on
  the provider instance, which is the front door:

  ```go
  provider := awsprovider.NewAwsProvider(stack, jsii.String("aws"), &awsprovider.AwsProviderConfig{
      Region: jsii.String("eu-west-1"),
  })
  arn := provider.Functions().ArnBuild(jsii.String("aws"), jsii.String("s3"), jsii.String(""), jsii.String(""), jsii.String("consumer-bucket"))
  ```

  `Functions()` is lazy and passes the provider's own local name down, so the rendered
  `provider::<name>::` namespace can never drift from the `required_providers` key. The standalone
  `awsprovider.NewAwsProviderFunctions(localName)` is there for when you do not hold the instance —
  its argument is the `required_providers` **local name**, not a provider alias;
* synth ran with no `SkipValidation` and no `skipValidation` context — `ValidateProviderPresence`
  really did walk the stack.

The app raises its declared `targetVersions` to terraform >=1.8 / opentofu >=1.7, because
provider-defined functions do not exist below that. That is the fix cdktn's validation asks for;
`skipValidation` would have been the cover-up.
