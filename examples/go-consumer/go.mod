// This example is built in WORKSPACE MODE, against a local checkout of the fleet: the requires
// below carry a placeholder v0.0.0 that is never resolved, and `node scripts/go-consumer.mjs`
// writes the go.work whose `replace` directives supply the real directories. That is deliberate —
// the example measures and proves the fleet as it stands in this repository, not the last release.
//
// A real consumer does not need any of that — but the import paths below are 0.3.0's, and 0.3.0 is
// NOT published yet. What proxy.golang.org serves today is v0.2.0 under the old directory names
// (.../awsprovider, .../awss3), at the old `NewTfBucket` spelling. When 0.3.0 ships, requiring
// `.../provider v0.3.0` and dropping the workspace is all it takes. See README.md.
module github.com/cdktn-io/cdktn-aws/examples/go-consumer

go 1.25.0

require (
	github.com/aws/jsii-runtime-go v1.140.0
	github.com/cdktn-io/cdktn-aws-go/apigatewayv2 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/athena v0.0.0
	github.com/cdktn-io/cdktn-aws-go/cloudcontrolapi v0.0.0
	github.com/cdktn-io/cdktn-aws-go/cloudfront v0.0.0
	github.com/cdktn-io/cdktn-aws-go/cloudwatchlogs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/detective v0.0.0
	github.com/cdktn-io/cdktn-aws-go/dynamodb v0.0.0
	github.com/cdktn-io/cdktn-aws-go/ec2 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/ecr v0.0.0
	github.com/cdktn-io/cdktn-aws-go/ecs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/efs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/eks v0.0.0
	github.com/cdktn-io/cdktn-aws-go/elasticache v0.0.0
	github.com/cdktn-io/cdktn-aws-go/elb v0.0.0
	github.com/cdktn-io/cdktn-aws-go/elementalmediastore v0.0.0
	github.com/cdktn-io/cdktn-aws-go/glue v0.0.0
	github.com/cdktn-io/cdktn-aws-go/iam v0.0.0
	github.com/cdktn-io/cdktn-aws-go/kinesis v0.0.0
	github.com/cdktn-io/cdktn-aws-go/kinesisvideo v0.0.0
	github.com/cdktn-io/cdktn-aws-go/kms v0.0.0
	github.com/cdktn-io/cdktn-aws-go/lambda v0.0.0
	github.com/cdktn-io/cdktn-aws-go/provider v0.0.0
	github.com/cdktn-io/cdktn-aws-go/rds v0.0.0
	github.com/cdktn-io/cdktn-aws-go/route53 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/s3 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/s3glacier v0.0.0
	github.com/cdktn-io/cdktn-aws-go/secretsmanager v0.0.0
	github.com/cdktn-io/cdktn-aws-go/sfn v0.0.0
	github.com/cdktn-io/cdktn-aws-go/sns v0.0.0
	github.com/cdktn-io/cdktn-aws-go/sqs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/ssm v0.0.0
	github.com/cdktn-io/cdktn-aws-go/sts v0.0.0
	github.com/cdktn-io/cdktn-aws-go/swf v0.0.0
	github.com/cdktn-io/cdktn-aws-go/usernotificationscontacts v0.0.0
	github.com/cdktn-io/cdktn-aws-go/wavelength v0.0.0
	github.com/cdktn-io/cdktn-aws-go/xray v0.0.0
	github.com/open-constructs/cdk-terrain-go/cdktn v0.24.0
)

require (
	github.com/Masterminds/semver/v3 v3.5.0 // indirect
	github.com/aws/constructs-go/constructs/v10 v10.7.0 // indirect
)
