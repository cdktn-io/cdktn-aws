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
// Run it with `node scripts/go-consumer.mjs` from the repository root, which writes the
// `go.work` this needs (the fleet is not published; see README.md).
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

	"github.com/cdktn-io/cdktn-aws-go/awsapigatewayv2"
	"github.com/cdktn-io/cdktn-aws-go/awsathena"
	"github.com/cdktn-io/cdktn-aws-go/awscloudcontrolapi"
	"github.com/cdktn-io/cdktn-aws-go/awscloudfront"
	"github.com/cdktn-io/cdktn-aws-go/awscloudwatchlogs"
	"github.com/cdktn-io/cdktn-aws-go/awsdetective"
	"github.com/cdktn-io/cdktn-aws-go/awsdynamodb"
	"github.com/cdktn-io/cdktn-aws-go/awsec2"
	"github.com/cdktn-io/cdktn-aws-go/awsecr"
	"github.com/cdktn-io/cdktn-aws-go/awsecs"
	"github.com/cdktn-io/cdktn-aws-go/awsefs"
	"github.com/cdktn-io/cdktn-aws-go/awseks"
	"github.com/cdktn-io/cdktn-aws-go/awselasticache"
	"github.com/cdktn-io/cdktn-aws-go/awselb"
	"github.com/cdktn-io/cdktn-aws-go/awselementalmediastore"
	"github.com/cdktn-io/cdktn-aws-go/awsglue"
	"github.com/cdktn-io/cdktn-aws-go/awsiam"
	"github.com/cdktn-io/cdktn-aws-go/awskinesis"
	"github.com/cdktn-io/cdktn-aws-go/awskinesisvideo"
	"github.com/cdktn-io/cdktn-aws-go/awskms"
	"github.com/cdktn-io/cdktn-aws-go/awslambda"
	"github.com/cdktn-io/cdktn-aws-go/awsprovider"
	"github.com/cdktn-io/cdktn-aws-go/awsrds"
	"github.com/cdktn-io/cdktn-aws-go/awsroute53"
	"github.com/cdktn-io/cdktn-aws-go/awss3"
	"github.com/cdktn-io/cdktn-aws-go/awss3glacier"
	"github.com/cdktn-io/cdktn-aws-go/awssecretsmanager"
	"github.com/cdktn-io/cdktn-aws-go/awssfn"
	"github.com/cdktn-io/cdktn-aws-go/awssns"
	"github.com/cdktn-io/cdktn-aws-go/awssqs"
	"github.com/cdktn-io/cdktn-aws-go/awsssm"
	"github.com/cdktn-io/cdktn-aws-go/awssts"
	"github.com/cdktn-io/cdktn-aws-go/awsswf"
	"github.com/cdktn-io/cdktn-aws-go/awsusernotificationscontacts"
	"github.com/cdktn-io/cdktn-aws-go/awswavelength"
	"github.com/cdktn-io/cdktn-aws-go/awsxray"
)

// One entry per fleet module the program imports. `tfType` is the terraform type the construct
// must land under in cdk.tf.json — asserted after synth, so a construct that silently changes
// its resource type fails the run rather than the review.
type sample struct {
	module  string
	tfType  string
	isData  bool
	build   func(stack cdktn.TerraformStack)
	elapsed time.Duration
}

func samples() []*sample {
	return []*sample{
		{module: "awsapigatewayv2", tfType: "aws_apigatewayv2_deployment", build: func(s cdktn.TerraformStack) {
			awsapigatewayv2.NewAwsApigatewayv2Deployment(s, jsii.String("apigwv2"), &awsapigatewayv2.AwsApigatewayv2DeploymentConfig{ApiId: jsii.String("a1b2c3")})
		}},
		{module: "awsathena", tfType: "aws_athena_workgroup", build: func(s cdktn.TerraformStack) {
			awsathena.NewAwsAthenaWorkgroup(s, jsii.String("athena"), &awsathena.AwsAthenaWorkgroupConfig{Name: jsii.String("consumer-wg")})
		}},
		{module: "awscloudcontrolapi", tfType: "aws_cloudcontrolapi_resource", build: func(s cdktn.TerraformStack) {
			awscloudcontrolapi.NewAwsCloudcontrolapiResource(s, jsii.String("ccapi"), &awscloudcontrolapi.AwsCloudcontrolapiResourceConfig{
				DesiredState: jsii.String(`{"LogGroupName":"consumer"}`),
				TypeName:     jsii.String("AWS::Logs::LogGroup"),
			})
		}},
		{module: "awscloudfront", tfType: "aws_cloudfront_origin_access_identity", build: func(s cdktn.TerraformStack) {
			awscloudfront.NewAwsCloudfrontOriginAccessIdentity(s, jsii.String("oai"), &awscloudfront.AwsCloudfrontOriginAccessIdentityConfig{})
		}},
		{module: "awscloudwatchlogs", tfType: "aws_cloudwatch_log_group", build: func(s cdktn.TerraformStack) {
			awscloudwatchlogs.NewAwsCloudwatchLogGroup(s, jsii.String("logs"), &awscloudwatchlogs.AwsCloudwatchLogGroupConfig{Name: jsii.String("/consumer/log")})
		}},
		{module: "awsdetective", tfType: "aws_detective_graph", build: func(s cdktn.TerraformStack) {
			awsdetective.NewAwsDetectiveGraph(s, jsii.String("detective"), &awsdetective.AwsDetectiveGraphConfig{})
		}},
		{module: "awsdynamodb", tfType: "aws_dynamodb_table", build: func(s cdktn.TerraformStack) {
			awsdynamodb.NewAwsDynamodbTable(s, jsii.String("ddb"), &awsdynamodb.AwsDynamodbTableConfig{Name: jsii.String("consumer-table")})
		}},
		{module: "awsec2", tfType: "aws_ec2_instance_metadata_defaults", build: func(s cdktn.TerraformStack) {
			awsec2.NewAwsEc2InstanceMetadataDefaults(s, jsii.String("imds"), &awsec2.AwsEc2InstanceMetadataDefaultsConfig{HttpTokens: jsii.String("required")})
		}},
		{module: "awsecr", tfType: "aws_ecr_replication_configuration", build: func(s cdktn.TerraformStack) {
			awsecr.NewAwsEcrReplicationConfiguration(s, jsii.String("ecrrepl"), &awsecr.AwsEcrReplicationConfigurationConfig{})
		}},
		{module: "awsecs", tfType: "aws_ecs_cluster", build: func(s cdktn.TerraformStack) {
			awsecs.NewAwsEcsCluster(s, jsii.String("ecs"), &awsecs.AwsEcsClusterConfig{Name: jsii.String("consumer-cluster")})
		}},
		{module: "awsefs", tfType: "aws_efs_file_system", build: func(s cdktn.TerraformStack) {
			awsefs.NewAwsEfsFileSystem(s, jsii.String("efs"), &awsefs.AwsEfsFileSystemConfig{Encrypted: jsii.Bool(true)})
		}},
		{module: "awseks", tfType: "aws_eks_access_entry", build: func(s cdktn.TerraformStack) {
			awseks.NewAwsEksAccessEntry(s, jsii.String("eks"), &awseks.AwsEksAccessEntryConfig{
				ClusterName:  jsii.String("consumer-eks"),
				PrincipalArn: jsii.String("arn:aws:iam::123456789012:role/consumer"),
			})
		}},
		{module: "awselasticache", tfType: "aws_elasticache_cluster", build: func(s cdktn.TerraformStack) {
			awselasticache.NewAwsElasticacheCluster(s, jsii.String("cache"), &awselasticache.AwsElasticacheClusterConfig{ClusterId: jsii.String("consumer-cache")})
		}},
		{module: "awselb", tfType: "aws_alb", build: func(s cdktn.TerraformStack) {
			awselb.NewAwsAlb(s, jsii.String("alb"), &awselb.AwsAlbConfig{Name: jsii.String("consumer-alb"), Internal: jsii.Bool(true)})
		}},
		{module: "awselementalmediastore", tfType: "aws_media_store_container", build: func(s cdktn.TerraformStack) {
			awselementalmediastore.NewAwsMediaStoreContainer(s, jsii.String("mediastore"), &awselementalmediastore.AwsMediaStoreContainerConfig{Name: jsii.String("consumercontainer")})
		}},
		{module: "awsglue", tfType: "aws_glue_workflow", build: func(s cdktn.TerraformStack) {
			awsglue.NewAwsGlueWorkflow(s, jsii.String("glue"), &awsglue.AwsGlueWorkflowConfig{Name: jsii.String("consumer-workflow")})
		}},
		{module: "awsiam", tfType: "aws_iam_account_password_policy", build: func(s cdktn.TerraformStack) {
			awsiam.NewAwsIamAccountPasswordPolicy(s, jsii.String("iampw"), &awsiam.AwsIamAccountPasswordPolicyConfig{MinimumPasswordLength: jsii.Number(24)})
		}},
		{module: "awskinesis", tfType: "aws_kinesis_account_settings", build: func(s cdktn.TerraformStack) {
			awskinesis.NewAwsKinesisAccountSettings(s, jsii.String("kinesisacct"), &awskinesis.AwsKinesisAccountSettingsConfig{})
		}},
		{module: "awskinesisvideo", tfType: "aws_kinesis_video_stream", build: func(s cdktn.TerraformStack) {
			awskinesisvideo.NewAwsKinesisVideoStream(s, jsii.String("kvs"), &awskinesisvideo.AwsKinesisVideoStreamConfig{Name: jsii.String("consumer-kvs")})
		}},
		{module: "awskms", tfType: "aws_kms_external_key", build: func(s cdktn.TerraformStack) {
			awskms.NewAwsKmsExternalKey(s, jsii.String("kms"), &awskms.AwsKmsExternalKeyConfig{Description: jsii.String("consumer key")})
		}},
		{module: "awslambda", tfType: "aws_lambda_capacity_provider", build: func(s cdktn.TerraformStack) {
			awslambda.NewAwsLambdaCapacityProvider(s, jsii.String("lambdacap"), &awslambda.AwsLambdaCapacityProviderConfig{Name: jsii.String("consumer-capacity")})
		}},
		{module: "awsrds", tfType: "aws_db_event_subscription", build: func(s cdktn.TerraformStack) {
			awsrds.NewAwsDbEventSubscription(s, jsii.String("rdsevents"), &awsrds.AwsDbEventSubscriptionConfig{SnsTopic: jsii.String("arn:aws:sns:eu-west-1:123456789012:consumer")})
		}},
		{module: "awsroute53", tfType: "aws_route53_delegation_set", build: func(s cdktn.TerraformStack) {
			awsroute53.NewAwsRoute53DelegationSet(s, jsii.String("r53ds"), &awsroute53.AwsRoute53DelegationSetConfig{ReferenceName: jsii.String("consumer")})
		}},
		{module: "awss3", tfType: "aws_s3_bucket", build: func(s cdktn.TerraformStack) {
			awss3.NewAwsS3Bucket(s, jsii.String("bucket"), &awss3.AwsS3BucketConfig{Bucket: jsii.String("consumer-bucket")})
		}},
		{module: "awss3glacier", tfType: "aws_glacier_vault", build: func(s cdktn.TerraformStack) {
			awss3glacier.NewAwsGlacierVault(s, jsii.String("vault"), &awss3glacier.AwsGlacierVaultConfig{Name: jsii.String("consumer-vault")})
		}},
		{module: "awssecretsmanager", tfType: "aws_secretsmanager_secret", build: func(s cdktn.TerraformStack) {
			awssecretsmanager.NewAwsSecretsmanagerSecret(s, jsii.String("secret"), &awssecretsmanager.AwsSecretsmanagerSecretConfig{Name: jsii.String("consumer-secret")})
		}},
		{module: "awssfn", tfType: "aws_sfn_activity", build: func(s cdktn.TerraformStack) {
			awssfn.NewAwsSfnActivity(s, jsii.String("sfn"), &awssfn.AwsSfnActivityConfig{Name: jsii.String("consumer-activity")})
		}},
		{module: "awssns", tfType: "aws_sns_sms_preferences", build: func(s cdktn.TerraformStack) {
			awssns.NewAwsSnsSmsPreferences(s, jsii.String("snsprefs"), &awssns.AwsSnsSmsPreferencesConfig{})
		}},
		{module: "awssqs", tfType: "aws_sqs_queue", build: func(s cdktn.TerraformStack) {
			awssqs.NewAwsSqsQueue(s, jsii.String("queue"), &awssqs.AwsSqsQueueConfig{Name: jsii.String("consumer-queue")})
		}},
		{module: "awsssm", tfType: "aws_ssm_activation", build: func(s cdktn.TerraformStack) {
			awsssm.NewAwsSsmActivation(s, jsii.String("ssm"), &awsssm.AwsSsmActivationConfig{IamRole: jsii.String("consumer-ssm-role")})
		}},
		{module: "awssts", tfType: "aws_caller_identity", isData: true, build: func(s cdktn.TerraformStack) {
			awssts.NewDataAwsCallerIdentity(s, jsii.String("caller"), &awssts.DataAwsCallerIdentityConfig{})
		}},
		{module: "awsswf", tfType: "aws_swf_domain", build: func(s cdktn.TerraformStack) {
			awsswf.NewAwsSwfDomain(s, jsii.String("swf"), &awsswf.AwsSwfDomainConfig{WorkflowExecutionRetentionPeriodInDays: jsii.String("7")})
		}},
		{module: "awsusernotificationscontacts", tfType: "aws_notificationscontacts_email_contact", build: func(s cdktn.TerraformStack) {
			awsusernotificationscontacts.NewAwsNotificationscontactsEmailContact(s, jsii.String("contact"), &awsusernotificationscontacts.AwsNotificationscontactsEmailContactConfig{
				EmailAddress: jsii.String("ops@example.invalid"),
				Name:         jsii.String("consumer-ops"),
			})
		}},
		{module: "awswavelength", tfType: "aws_ec2_carrier_gateway", build: func(s cdktn.TerraformStack) {
			awswavelength.NewAwsEc2CarrierGateway(s, jsii.String("carriergw"), &awswavelength.AwsEc2CarrierGatewayConfig{VpcId: jsii.String("vpc-0123456789abcdef0")})
		}},
		{module: "awsxray", tfType: "aws_xray_encryption_config", build: func(s cdktn.TerraformStack) {
			awsxray.NewAwsXrayEncryptionConfig(s, jsii.String("xray"), &awsxray.AwsXrayEncryptionConfigConfig{Type: jsii.String("NONE")})
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
	awsprovider.NewAwsProvider(stack, jsii.String("aws"), &awsprovider.AwsProviderConfig{
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
	awss3.NewAwsS3BucketVersioning(stack, jsii.String("versioning"), &awss3.AwsS3BucketVersioningConfig{
		Bucket:                jsii.String("consumer-bucket"),
		VersioningConfiguration: &awss3.AwsS3BucketVersioning_VersioningConfigurationProperty{Status: jsii.String("Enabled")},
	})
	construct := time.Since(tCtl)

	// (5) A provider-defined function. `provider::aws::arn_build(...)` is a terraform 1.8+
	// expression the provider itself implements; it has to survive the jsii round-trip and land
	// in cdk.tf.json verbatim.
	fns := awsprovider.NewAwsProviderFunctions(jsii.String("aws"))
	arn := fns.ArnBuild(jsii.String("aws"), jsii.String("s3"), jsii.String(""), jsii.String(""), jsii.String("consumer-bucket"))
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
		if _, ok := bag[s.tfType]; !ok {
			missing = append(missing, s.module+":"+s.tfType)
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
