// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0

// A consumer of the assembled `cdktn-aws-go` fleet, at realistic scale.
//
// This is the measurement VERDICT.md deferred: Option A's per-assembly consumer cost was
// extrapolated from a 3-module prototype (~90 ms bootstrap + ~1.4 ms + 0.019 ms/KB per
// assembly). Here it is exercised against the real fleet — 35 modules, tarballs up to 300x the
// prototype's — with cdktn's provider-presence validation ON.
//
// It is also a correctness proof: 35 independently compiled jsii assemblies load into one Go
// program, every one of them resolves the same `cdktn` core, and the synthesised cdk.tf.json
// names the real terraform types.
//
// Run it with `node scripts/go-consumer.mjs` from the repository root, which writes the `go.work`
// that points this at the local fleet checkout. Workspace mode is what makes it measure *this*
// tree rather than the last release. The names below are 0.3.0's, and 0.3.0 is published:
// `go get github.com/cdktn-io/cdktn-aws-go/s3@v0.3.0` resolves them. See README.md.
package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/aws/jsii-runtime-go"
	"github.com/open-constructs/cdk-terrain-go/cdktn"

	"github.com/cdktn-io/cdktn-aws-go/apigatewayv2"
	"github.com/cdktn-io/cdktn-aws-go/athena"
	"github.com/cdktn-io/cdktn-aws-go/cloudcontrolapi"
	"github.com/cdktn-io/cdktn-aws-go/cloudfront"
	"github.com/cdktn-io/cdktn-aws-go/cloudwatchlogs"
	"github.com/cdktn-io/cdktn-aws-go/detective"
	"github.com/cdktn-io/cdktn-aws-go/dynamodb"
	"github.com/cdktn-io/cdktn-aws-go/ec2"
	"github.com/cdktn-io/cdktn-aws-go/ecr"
	"github.com/cdktn-io/cdktn-aws-go/ecs"
	"github.com/cdktn-io/cdktn-aws-go/efs"
	"github.com/cdktn-io/cdktn-aws-go/eks"
	"github.com/cdktn-io/cdktn-aws-go/elasticache"
	"github.com/cdktn-io/cdktn-aws-go/elb"
	"github.com/cdktn-io/cdktn-aws-go/elementalmediastore"
	"github.com/cdktn-io/cdktn-aws-go/glue"
	"github.com/cdktn-io/cdktn-aws-go/iam"
	"github.com/cdktn-io/cdktn-aws-go/kinesis"
	"github.com/cdktn-io/cdktn-aws-go/kinesisvideo"
	"github.com/cdktn-io/cdktn-aws-go/kms"
	"github.com/cdktn-io/cdktn-aws-go/lambda"
	// aliased: with 0.3.0 dropping the `aws` prefix, the package name `provider` collides with the
	// obvious name for the construct this program builds from it.
	awsprovider "github.com/cdktn-io/cdktn-aws-go/provider"
	"github.com/cdktn-io/cdktn-aws-go/rds"
	"github.com/cdktn-io/cdktn-aws-go/route53"
	"github.com/cdktn-io/cdktn-aws-go/s3"
	"github.com/cdktn-io/cdktn-aws-go/s3glacier"
	"github.com/cdktn-io/cdktn-aws-go/secretsmanager"
	"github.com/cdktn-io/cdktn-aws-go/sfn"
	"github.com/cdktn-io/cdktn-aws-go/sns"
	"github.com/cdktn-io/cdktn-aws-go/sqs"
	"github.com/cdktn-io/cdktn-aws-go/ssm"
	"github.com/cdktn-io/cdktn-aws-go/sts"
	"github.com/cdktn-io/cdktn-aws-go/swf"
	"github.com/cdktn-io/cdktn-aws-go/usernotificationscontacts"
	"github.com/cdktn-io/cdktn-aws-go/wavelength"
	"github.com/cdktn-io/cdktn-aws-go/xray"
)

// One entry per fleet module the program imports. `awsType` is the terraform type the construct
// must land under in cdk.tf.json — asserted after synth, so a construct that silently changes
// its resource type fails the run rather than the review.
type sample struct {
	module  string
	awsType string
	isData  bool
	build   func(stack cdktn.TerraformStack)
	elapsed time.Duration
}

func samples() []*sample {
	return []*sample{
		{module: "apigatewayv2", awsType: "aws_apigatewayv2_deployment", build: func(s cdktn.TerraformStack) {
			apigatewayv2.NewAwsDeployment(s, jsii.String("apigwv2"), &apigatewayv2.AwsDeploymentConfig{ApiId: jsii.String("a1b2c3")})
		}},
		{module: "athena", awsType: "aws_athena_workgroup", build: func(s cdktn.TerraformStack) {
			athena.NewAwsWorkgroup(s, jsii.String("athena"), &athena.AwsWorkgroupConfig{Name: jsii.String("consumer-wg")})
		}},
		{module: "cloudcontrolapi", awsType: "aws_cloudcontrolapi_resource", build: func(s cdktn.TerraformStack) {
			cloudcontrolapi.NewAwsResource(s, jsii.String("ccapi"), &cloudcontrolapi.AwsResourceConfig{
				DesiredState: jsii.String(`{"LogGroupName":"consumer"}`),
				TypeName:     jsii.String("AWS::Logs::LogGroup"),
			})
		}},
		{module: "cloudfront", awsType: "aws_cloudfront_origin_access_identity", build: func(s cdktn.TerraformStack) {
			cloudfront.NewAwsOriginAccessIdentity(s, jsii.String("oai"), &cloudfront.AwsOriginAccessIdentityConfig{})
		}},
		{module: "cloudwatchlogs", awsType: "aws_cloudwatch_log_group", build: func(s cdktn.TerraformStack) {
			cloudwatchlogs.NewAwsGroup(s, jsii.String("logs"), &cloudwatchlogs.AwsGroupConfig{Name: jsii.String("/consumer/log")})
		}},
		{module: "detective", awsType: "aws_detective_graph", build: func(s cdktn.TerraformStack) {
			detective.NewAwsGraph(s, jsii.String("detective"), &detective.AwsGraphConfig{})
		}},
		{module: "dynamodb", awsType: "aws_dynamodb_table", build: func(s cdktn.TerraformStack) {
			dynamodb.NewAwsTable(s, jsii.String("ddb"), &dynamodb.AwsTableConfig{Name: jsii.String("consumer-table")})
		}},
		{module: "ec2", awsType: "aws_ec2_instance_metadata_defaults", build: func(s cdktn.TerraformStack) {
			ec2.NewAwsInstanceMetadataDefaults(s, jsii.String("imds"), &ec2.AwsInstanceMetadataDefaultsConfig{HttpTokens: jsii.String("required")})
		}},
		{module: "ecr", awsType: "aws_ecr_replication_configuration", build: func(s cdktn.TerraformStack) {
			ecr.NewAwsReplicationConfiguration(s, jsii.String("ecrrepl"), &ecr.AwsReplicationConfigurationConfig{})
		}},
		{module: "ecs", awsType: "aws_ecs_cluster", build: func(s cdktn.TerraformStack) {
			ecs.NewAwsCluster(s, jsii.String("ecs"), &ecs.AwsClusterConfig{Name: jsii.String("consumer-cluster")})
		}},
		{module: "efs", awsType: "aws_efs_file_system", build: func(s cdktn.TerraformStack) {
			efs.NewAwsFileSystem(s, jsii.String("efs"), &efs.AwsFileSystemConfig{Encrypted: jsii.Bool(true)})
		}},
		{module: "eks", awsType: "aws_eks_access_entry", build: func(s cdktn.TerraformStack) {
			eks.NewAwsAccessEntry(s, jsii.String("eks"), &eks.AwsAccessEntryConfig{
				ClusterName:  jsii.String("consumer-eks"),
				PrincipalArn: jsii.String("arn:aws:iam::123456789012:role/consumer"),
			})
		}},
		{module: "elasticache", awsType: "aws_elasticache_cluster", build: func(s cdktn.TerraformStack) {
			elasticache.NewAwsCluster(s, jsii.String("cache"), &elasticache.AwsClusterConfig{ClusterId: jsii.String("consumer-cache")})
		}},
		{module: "elb", awsType: "aws_alb", build: func(s cdktn.TerraformStack) {
			elb.NewAwsAlb(s, jsii.String("alb"), &elb.AwsAlbConfig{Name: jsii.String("consumer-alb"), Internal: jsii.Bool(true)})
		}},
		{module: "elementalmediastore", awsType: "aws_media_store_container", build: func(s cdktn.TerraformStack) {
			elementalmediastore.NewAwsContainer(s, jsii.String("mediastore"), &elementalmediastore.AwsContainerConfig{Name: jsii.String("consumercontainer")})
		}},
		{module: "glue", awsType: "aws_glue_workflow", build: func(s cdktn.TerraformStack) {
			glue.NewAwsWorkflow(s, jsii.String("glue"), &glue.AwsWorkflowConfig{Name: jsii.String("consumer-workflow")})
		}},
		{module: "iam", awsType: "aws_iam_account_password_policy", build: func(s cdktn.TerraformStack) {
			iam.NewAwsAccountPasswordPolicy(s, jsii.String("iampw"), &iam.AwsAccountPasswordPolicyConfig{MinimumPasswordLength: jsii.Number(24)})
		}},
		{module: "kinesis", awsType: "aws_kinesis_account_settings", build: func(s cdktn.TerraformStack) {
			kinesis.NewAwsAccountSettings(s, jsii.String("kinesisacct"), &kinesis.AwsAccountSettingsConfig{})
		}},
		{module: "kinesisvideo", awsType: "aws_kinesis_video_stream", build: func(s cdktn.TerraformStack) {
			kinesisvideo.NewAwsStream(s, jsii.String("kvs"), &kinesisvideo.AwsStreamConfig{Name: jsii.String("consumer-kvs")})
		}},
		{module: "kms", awsType: "aws_kms_external_key", build: func(s cdktn.TerraformStack) {
			kms.NewAwsExternalKey(s, jsii.String("kms"), &kms.AwsExternalKeyConfig{Description: jsii.String("consumer key")})
		}},
		{module: "lambda", awsType: "aws_lambda_capacity_provider", build: func(s cdktn.TerraformStack) {
			lambda.NewAwsCapacityProvider(s, jsii.String("lambdacap"), &lambda.AwsCapacityProviderConfig{Name: jsii.String("consumer-capacity")})
		}},
		{module: "rds", awsType: "aws_db_event_subscription", build: func(s cdktn.TerraformStack) {
			rds.NewAwsDbEventSubscription(s, jsii.String("rdsevents"), &rds.AwsDbEventSubscriptionConfig{SnsTopic: jsii.String("arn:aws:sns:eu-west-1:123456789012:consumer")})
		}},
		{module: "route53", awsType: "aws_route53_delegation_set", build: func(s cdktn.TerraformStack) {
			route53.NewAwsDelegationSet(s, jsii.String("r53ds"), &route53.AwsDelegationSetConfig{ReferenceName: jsii.String("consumer")})
		}},
		{module: "s3", awsType: "aws_s3_bucket", build: func(s cdktn.TerraformStack) {
			s3.NewAwsBucket(s, jsii.String("bucket"), &s3.AwsBucketConfig{Bucket: jsii.String("consumer-bucket")})
		}},
		{module: "s3glacier", awsType: "aws_glacier_vault", build: func(s cdktn.TerraformStack) {
			s3glacier.NewAwsVault(s, jsii.String("vault"), &s3glacier.AwsVaultConfig{Name: jsii.String("consumer-vault")})
		}},
		{module: "secretsmanager", awsType: "aws_secretsmanager_secret", build: func(s cdktn.TerraformStack) {
			secretsmanager.NewAwsSecret(s, jsii.String("secret"), &secretsmanager.AwsSecretConfig{Name: jsii.String("consumer-secret")})
		}},
		{module: "sfn", awsType: "aws_sfn_activity", build: func(s cdktn.TerraformStack) {
			sfn.NewAwsActivity(s, jsii.String("sfn"), &sfn.AwsActivityConfig{Name: jsii.String("consumer-activity")})
		}},
		{module: "sns", awsType: "aws_sns_sms_preferences", build: func(s cdktn.TerraformStack) {
			sns.NewAwsSmsPreferences(s, jsii.String("snsprefs"), &sns.AwsSmsPreferencesConfig{})
		}},
		{module: "sqs", awsType: "aws_sqs_queue", build: func(s cdktn.TerraformStack) {
			sqs.NewAwsQueue(s, jsii.String("queue"), &sqs.AwsQueueConfig{Name: jsii.String("consumer-queue")})
		}},
		{module: "ssm", awsType: "aws_ssm_activation", build: func(s cdktn.TerraformStack) {
			ssm.NewAwsActivation(s, jsii.String("ssm"), &ssm.AwsActivationConfig{IamRole: jsii.String("consumer-ssm-role")})
		}},
		{module: "sts", awsType: "aws_caller_identity", isData: true, build: func(s cdktn.TerraformStack) {
			sts.NewDataAwsCallerIdentity(s, jsii.String("caller"), &sts.DataAwsCallerIdentityConfig{})
		}},
		{module: "swf", awsType: "aws_swf_domain", build: func(s cdktn.TerraformStack) {
			swf.NewAwsDomain(s, jsii.String("swf"), &swf.AwsDomainConfig{WorkflowExecutionRetentionPeriodInDays: jsii.String("7")})
		}},
		{module: "usernotificationscontacts", awsType: "aws_notificationscontacts_email_contact", build: func(s cdktn.TerraformStack) {
			usernotificationscontacts.NewAwsEmailContact(s, jsii.String("contact"), &usernotificationscontacts.AwsEmailContactConfig{
				EmailAddress: jsii.String("ops@example.invalid"),
				Name:         jsii.String("consumer-ops"),
			})
		}},
		{module: "wavelength", awsType: "aws_ec2_carrier_gateway", build: func(s cdktn.TerraformStack) {
			wavelength.NewAwsCarrierGateway(s, jsii.String("carriergw"), &wavelength.AwsCarrierGatewayConfig{VpcId: jsii.String("vpc-0123456789abcdef0")})
		}},
		{module: "xray", awsType: "aws_xray_encryption_config", build: func(s cdktn.TerraformStack) {
			xray.NewAwsEncryptionConfig(s, jsii.String("xray"), &xray.AwsEncryptionConfigConfig{Type: jsii.String("NONE")})
		}},
	}
}

const (
	stackName        = "consumer"
	expectedProvider = "6.62.0"
)

func main() {
	outdir := "cdktn.out"
	if err := os.RemoveAll(outdir); err != nil {
		fail("could not clear %s: %v", outdir, err)
	}

	// (1) Kernel bootstrap. The first jsii call in the process starts the node child process and
	// loads the `cdktn` and `constructs` assemblies. Nothing from the fleet is touched yet, so
	// this is the one-time cost every consumer pays regardless of how many groups it imports.
	tBoot := time.Now()
	app := cdktn.NewApp(&cdktn.AppConfig{
		Outdir: jsii.String(outdir),
		// Provider-defined functions (step 5) are terraform >=1.8 / opentofu >=1.7 syntax, and
		// cdktn's default targets are the older baseline — so without this the run fails
		// validation rather than emitting an expression no supported binary can evaluate. Raising
		// the declared target is the fix; `skipValidation` would be the cover-up.
		Context: &map[string]interface{}{
			"targetVersions": map[string]interface{}{
				"terraform": ">=1.8.0",
				"opentofu":  ">=1.7.0",
			},
		},
	})
	stack := cdktn.NewTerraformStack(app, jsii.String(stackName))
	bootstrap := time.Since(tBoot)

	// (2) The provider module. Its own assembly, and the one cdktn's ValidateProviderPresence
	// needs: without it, Synth fails rather than silently emitting an unprovisioned stack.
	tProv := time.Now()
	provider := awsprovider.NewAwsProvider(stack, jsii.String("aws"), &awsprovider.AwsProviderConfig{
		Region: jsii.String("eu-west-1"),
	})
	providerLoad := time.Since(tProv)

	// (3) One resource from each group module. Every timing here is a *first touch* of that
	// module's assembly, so it is assembly load + construction.
	all := samples()
	tGroups := time.Now()
	for _, s := range all {
		t := time.Now()
		s.build(stack)
		s.elapsed = time.Since(t)
	}
	groupsTotal := time.Since(tGroups)

	// (4) A construct-only control: a second resource out of an assembly that is already loaded.
	// first-touch minus this is the part of the per-group cost that is really assembly load.
	tCtl := time.Now()
	s3.NewAwsBucketVersioning(stack, jsii.String("versioning"), &s3.AwsBucketVersioningConfig{
		Bucket:                  jsii.String("consumer-bucket"),
		VersioningConfiguration: &s3.AwsBucketVersioning_VersioningConfigurationProperty{Status: jsii.String("Enabled")},
	})
	construct := time.Since(tCtl)

	// (5) A provider-defined function, reached the way the design intends: off the provider
	// instance. `provider::aws::arn_build(...)` is a terraform 1.8+ expression the provider itself
	// implements; it has to survive the jsii round-trip and land in cdk.tf.json verbatim.
	// `Functions()` is lazy and hands the provider's own local name to the function namespace, so
	// the rendered call can never drift from the `required_providers` key this stack emits.
	// `awsprovider.NewAwsProviderFunctions(localName)` is the standalone form, for when you do not
	// hold the provider instance — that argument is the `required_providers` LOCAL NAME, never a
	// provider alias, because `provider::<name>::` namespaces by local name and aliases do not
	// change it.
	arn := provider.Functions().ArnBuild(jsii.String("aws"), jsii.String("s3"), jsii.String(""), jsii.String(""), jsii.String("consumer-bucket"))
	cdktn.NewTerraformOutput(stack, jsii.String("bucket_arn"), &cdktn.TerraformOutputConfig{Value: arn})

	// (6) Synth, with cdktn's default validations ON — no SkipValidation, no
	// `context: { skipValidation: true }`.
	tSynth := time.Now()
	app.Synth()
	synth := time.Since(tSynth)
	total := time.Since(tBoot)

	report(all, bootstrap, providerLoad, groupsTotal, construct, synth, total)
	assert(outdir, all, arn)
}

func report(all []*sample, bootstrap, providerLoad, groupsTotal, construct, synth, total time.Duration) {
	slowest := make([]*sample, len(all))
	copy(slowest, all)
	sort.Slice(slowest, func(i, j int) bool { return slowest[i].elapsed > slowest[j].elapsed })

	fmt.Printf("MEASURE modules_total=%d group_modules=%d\n", len(all)+1, len(all))
	fmt.Printf("MEASURE kernel_bootstrap_ms=%.1f\n", ms(bootstrap))
	fmt.Printf("MEASURE provider_assembly_ms=%.1f\n", ms(providerLoad))
	fmt.Printf("MEASURE group_assemblies_total_ms=%.1f\n", ms(groupsTotal))
	fmt.Printf("MEASURE per_assembly_avg_ms=%.2f\n", ms(groupsTotal)/float64(len(all)))
	fmt.Printf("MEASURE construct_only_ms=%.2f\n", ms(construct))
	fmt.Printf("MEASURE synth_ms=%.1f\n", ms(synth))
	fmt.Printf("MEASURE total_wall_ms=%.1f\n", ms(total))
	// Every module, slowest first: the per-assembly cost is supposed to track tarball size, and
	// only the full list lets that be checked against the VERDICT's model rather than asserted.
	for _, s := range slowest {
		fmt.Printf("MEASURE module=%s first_touch_ms=%.2f\n", s.module, ms(s.elapsed))
	}
}

func assert(outdir string, all []*sample, arn *string) {
	raw, err := os.ReadFile(filepath.Join(outdir, "stacks", stackName, "cdk.tf.json"))
	if err != nil {
		fail("no cdk.tf.json: %v", err)
	}
	var doc struct {
		Terraform struct {
			RequiredProviders map[string]struct {
				Source  string `json:"source"`
				Version string `json:"version"`
			} `json:"required_providers"`
		} `json:"terraform"`
		Provider map[string][]map[string]any `json:"provider"`
		Resource map[string]any              `json:"resource"`
		Data     map[string]any              `json:"data"`
		Output   map[string]struct {
			Value any `json:"value"`
		} `json:"output"`
	}
	if err := json.Unmarshal(raw, &doc); err != nil {
		fail("cdk.tf.json is not valid JSON: %v", err)
	}

	failures := 0
	check := func(ok bool, format string, args ...any) {
		if !ok {
			failures++
			fmt.Printf("ASSERT FAIL: "+format+"\n", args...)
		} else {
			fmt.Printf("ASSERT OK: "+format+"\n", args...)
		}
	}

	// every group's terraform type is present, under resource{} or data{} as appropriate
	missing := []string{}
	for _, s := range all {
		bag := doc.Resource
		if s.isData {
			bag = doc.Data
		}
		if _, ok := bag[s.awsType]; !ok {
			missing = append(missing, s.module+":"+s.awsType)
		}
	}
	check(len(missing) == 0, "all %d group terraform types present (missing: %v)", len(all), missing)

	rp, ok := doc.Terraform.RequiredProviders["aws"]
	check(ok && rp.Source == "hashicorp/aws", "required_providers.aws.source == hashicorp/aws (got %q)", rp.Source)
	check(rp.Version == expectedProvider, "required_providers.aws.version == %s (got %q)", expectedProvider, rp.Version)
	check(len(doc.Terraform.RequiredProviders) == 1, "exactly one required provider (got %d)", len(doc.Terraform.RequiredProviders))

	pb, ok := doc.Provider["aws"]
	check(ok && len(pb) == 1 && pb[0]["region"] == "eu-west-1", "provider.aws[0].region == eu-west-1")

	out, ok := doc.Output["bucket_arn"]
	rendered, _ := out.Value.(string)
	check(ok && strings.Contains(rendered, "provider::aws::arn_build("), "output.bucket_arn renders a provider:: function (got %q)", rendered)
	// ArnBuild hands back a cdktn token, not the rendered call — the call text above is what the
	// token resolves to at synth. Asserting the token shape here and the resolved text above is
	// what proves the round trip, from a Go string through the jsii kernel and back out as HCL.
	check(arn != nil && strings.HasPrefix(*arn, "${") && strings.HasSuffix(*arn, "}"),
		"ArnBuild returned an unresolved cdktn token (got %q)", deref(arn))

	if failures > 0 {
		fmt.Printf("FAILED: %d assertion(s)\n", failures)
		os.Exit(1)
	}
	fmt.Println("PASS: synth with validation ON, no SkipValidation anywhere")
}

func ms(d time.Duration) float64 { return float64(d.Microseconds()) / 1000.0 }

func deref(s *string) string {
	if s == nil {
		return "<nil>"
	}
	return *s
}

func fail(format string, args ...any) {
	fmt.Fprintf(os.Stderr, "go-consumer: "+format+"\n", args...)
	os.Exit(1)
}
