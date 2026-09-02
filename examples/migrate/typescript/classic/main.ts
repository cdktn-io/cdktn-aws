// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
//
// The worked example of the `@cdktn/provider-aws` -> `@cdktn/aws` migration. This same file lives
// twice: under `classic/` as a consumer writes it today, and under `migrated/` exactly as
// `@cdktn/aws-migrate` rewrites it. Its comments are written to be true of both — the README says
// which is which.
//
// The stack is small but deliberately covers every shape the rename has to get right: a provider
// with a nested `assume_role` block, an S3 bucket with `cors_rule` and `versioning` blocks, the
// `aws_s3_bucket_versioning` resource whose classic name carried the `A` suffix, a lambda with
// `vpc_config`, an IAM role, a data source, an alias resource, an OutputReference read and two
// outputs. The classic side writes it in three import styles at once, because a real project does.
import { App, LocalBackend, TerraformOutput, TerraformStack } from 'cdktn';
import { Construct } from 'constructs';
import { AwsProvider, AwsProviderAssumeRole } from '@cdktn/provider-aws/lib/provider';
import { S3Bucket, S3BucketCorsRule } from '@cdktn/provider-aws/lib/s3-bucket';
import * as s3BucketVersioning from '@cdktn/provider-aws/lib/s3-bucket-versioning';
import { dataAwsCallerIdentity, iamRole, lambdaFunction, alb } from '@cdktn/provider-aws';

/** A nested provider block, held as its own value so the rename has a type position to move. */
const ASSUME_ROLE: AwsProviderAssumeRole = {
  roleArn: 'arn:aws:iam::123456789012:role/deployer',
  sessionName: 'cdktn-aws-migrate-example',
};

const CORS: S3BucketCorsRule[] = [
  { allowedMethods: ['GET'], allowedOrigins: ['https://example.com'], maxAgeSeconds: 3000 },
];

export class ExampleStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Pinned so the synthesised `terraform.backend` is a fixed string rather than this checkout's
    // absolute path — `golden/cdk.tf.json` is compared byte for byte.
    new LocalBackend(this, { path: 'terraform.tfstate' });

    new AwsProvider(this, 'aws', {
      region: 'eu-west-1',
      assumeRole: [ASSUME_ROLE],
    });

    const identity = new dataAwsCallerIdentity.DataAwsCallerIdentity(this, 'identity', {});

    const bucket = new S3Bucket(this, 'assets', {
      bucket: 'cdktn-aws-migrate-example-assets',
      corsRule: CORS,
      versioning: { enabled: true },
      tags: { example: 'migrate' },
    });

    // `aws_s3_bucket_versioning`. The classic library called it `S3BucketVersioningA` — not a typo:
    // `aws_s3_bucket`'s own `versioning` block had taken `S3BucketVersioning` first.
    new s3BucketVersioning.S3BucketVersioningA(this, 'assets-versioning', {
      bucket: bucket.bucket!,
      versioningConfiguration: { status: 'Enabled' },
    });

    const role = new iamRole.IamRole(this, 'handler-role', {
      name: 'cdktn-aws-migrate-example',
      assumeRolePolicy: JSON.stringify({
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: { Service: 'lambda.amazonaws.com' },
            Action: 'sts:AssumeRole',
          },
        ],
      }),
    });

    new lambdaFunction.LambdaFunction(this, 'handler', {
      functionName: 'cdktn-aws-migrate-example',
      role: role.arn,
      runtime: 'nodejs22.x',
      handler: 'index.handler',
      filename: 'handler.zip',
      vpcConfig: {
        subnetIds: ['subnet-0123456789abcdef0'],
        securityGroupIds: ['sg-0123456789abcdef0'],
      },
    });

    // `aws_alb` is an alias of `aws_lb`, and both libraries give it a class of its own.
    new alb.Alb(this, 'edge', {
      name: 'cdktn-aws-migrate-example',
      internal: true,
      subnets: ['subnet-0123456789abcdef0'],
    });

    // Reading back through an OutputReference — `versioning` is a single-item block, so the getter
    // returns the reference class rather than the interface.
    new TerraformOutput(this, 'versioning-enabled', {
      value: bucket.versioning.enabled,
    });
    new TerraformOutput(this, 'account-id', { value: identity.accountId });
  }
}

const app = new App();
new ExampleStack(app, 'migrate-example');
app.synth();
