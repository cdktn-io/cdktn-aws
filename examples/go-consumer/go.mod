// The fleet is not published: nothing under github.com/cdktn-io/cdktn-aws-go resolves through
// the module proxy yet, and the requires below carry a placeholder version on purpose. The
// program is built in workspace mode against a local checkout — `node scripts/go-consumer.mjs`
// writes the go.work that supplies it. See README.md.
module github.com/cdktn-io/cdktn-aws/examples/go-consumer

go 1.25.0

require (
	github.com/aws/jsii-runtime-go v1.140.0
	github.com/cdktn-io/cdktn-aws-go/awsapigatewayv2 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsathena v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awscloudcontrolapi v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awscloudfront v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awscloudwatchlogs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsdetective v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsdynamodb v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsec2 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsecr v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsecs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsefs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awseks v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awselasticache v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awselb v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awselementalmediastore v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsglue v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsiam v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awskinesis v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awskinesisvideo v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awskms v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awslambda v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsprovider v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsrds v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsroute53 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awss3 v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awss3glacier v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awssecretsmanager v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awssfn v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awssns v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awssqs v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsssm v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awssts v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsswf v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsusernotificationscontacts v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awswavelength v0.0.0
	github.com/cdktn-io/cdktn-aws-go/awsxray v0.0.0
	github.com/open-constructs/cdk-terrain-go/cdktn v0.24.0
)

require (
	github.com/Masterminds/semver/v3 v3.5.0 // indirect
	github.com/aws/constructs-go/constructs/v10 v10.7.0 // indirect
)
