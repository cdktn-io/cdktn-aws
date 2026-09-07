// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCanaryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#artifact_s3_location AwsCanary#artifact_s3_location}
  */
  readonly artifactS3Location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#delete_lambda AwsCanary#delete_lambda}
  */
  readonly deleteLambda?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#execution_role_arn AwsCanary#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#failure_retention_period AwsCanary#failure_retention_period}
  */
  readonly failureRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#handler AwsCanary#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#id AwsCanary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#name AwsCanary#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#region AwsCanary#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#runtime_version AwsCanary#runtime_version}
  */
  readonly runtimeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#s3_bucket AwsCanary#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#s3_key AwsCanary#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#s3_version AwsCanary#s3_version}
  */
  readonly s3Version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#start_canary AwsCanary#start_canary}
  */
  readonly startCanary?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#success_retention_period AwsCanary#success_retention_period}
  */
  readonly successRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#tags AwsCanary#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#tags_all AwsCanary#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#zip_file AwsCanary#zip_file}
  */
  readonly zipFile?: string;
  /**
  * artifact_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#artifact_config AwsCanary#artifact_config}
  */
  readonly artifactConfig?: AwsCanary.ArtifactConfigProperty;
  /**
  * run_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#run_config AwsCanary#run_config}
  */
  readonly runConfig?: AwsCanary.RunConfigProperty;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#schedule AwsCanary#schedule}
  */
  readonly schedule: AwsCanary.ScheduleProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#vpc_config AwsCanary#vpc_config}
  */
  readonly vpcConfig?: AwsCanary.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary aws_synthetics_canary}
*/
export class AwsCanary extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_synthetics_canary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCanary resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCanary to import
  * @param importFromId The id of the existing AwsCanary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCanary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_synthetics_canary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary aws_synthetics_canary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCanaryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCanaryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_synthetics_canary',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactS3Location = config.artifactS3Location;
    this._deleteLambda = config.deleteLambda;
    this._executionRoleArn = config.executionRoleArn;
    this._failureRetentionPeriod = config.failureRetentionPeriod;
    this._handler = config.handler;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._runtimeVersion = config.runtimeVersion;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3Version = config.s3Version;
    this._startCanary = config.startCanary;
    this._successRetentionPeriod = config.successRetentionPeriod;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._zipFile = config.zipFile;
    this._artifactConfig.internalValue = config.artifactConfig;
    this._runConfig.internalValue = config.runConfig;
    this._schedule.internalValue = config.schedule;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // artifact_s3_location - computed: false, optional: false, required: true
  private _artifactS3Location?: string; 
  public get artifactS3Location() {
    return this.getStringAttribute('artifact_s3_location');
  }
  public set artifactS3Location(value: string) {
    this._artifactS3Location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactS3LocationInput() {
    return this._artifactS3Location;
  }

  // delete_lambda - computed: false, optional: true, required: false
  private _deleteLambda?: boolean | cdktn.IResolvable; 
  public get deleteLambda() {
    return this.getBooleanAttribute('delete_lambda');
  }
  public set deleteLambda(value: boolean | cdktn.IResolvable) {
    this._deleteLambda = value;
  }
  public resetDeleteLambda() {
    this._deleteLambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLambdaInput() {
    return this._deleteLambda;
  }

  // engine_arn - computed: true, optional: false, required: false
  public get engineArn() {
    return this.getStringAttribute('engine_arn');
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // failure_retention_period - computed: false, optional: true, required: false
  private _failureRetentionPeriod?: number; 
  public get failureRetentionPeriod() {
    return this.getNumberAttribute('failure_retention_period');
  }
  public set failureRetentionPeriod(value: number) {
    this._failureRetentionPeriod = value;
  }
  public resetFailureRetentionPeriod() {
    this._failureRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRetentionPeriodInput() {
    return this._failureRetentionPeriod;
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_version - computed: false, optional: true, required: false
  private _s3Version?: string; 
  public get s3Version() {
    return this.getStringAttribute('s3_version');
  }
  public set s3Version(value: string) {
    this._s3Version = value;
  }
  public resetS3Version() {
    this._s3Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VersionInput() {
    return this._s3Version;
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }

  // start_canary - computed: false, optional: true, required: false
  private _startCanary?: boolean | cdktn.IResolvable; 
  public get startCanary() {
    return this.getBooleanAttribute('start_canary');
  }
  public set startCanary(value: boolean | cdktn.IResolvable) {
    this._startCanary = value;
  }
  public resetStartCanary() {
    this._startCanary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCanaryInput() {
    return this._startCanary;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // success_retention_period - computed: false, optional: true, required: false
  private _successRetentionPeriod?: number; 
  public get successRetentionPeriod() {
    return this.getNumberAttribute('success_retention_period');
  }
  public set successRetentionPeriod(value: number) {
    this._successRetentionPeriod = value;
  }
  public resetSuccessRetentionPeriod() {
    this._successRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRetentionPeriodInput() {
    return this._successRetentionPeriod;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeline - computed: true, optional: false, required: false
  private _timeline = new AwsCanary.TimelinePropertyList(this, "timeline", false);
  public get timeline() {
    return this._timeline;
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }

  // artifact_config - computed: false, optional: true, required: false
  private _artifactConfig = new AwsCanary.ArtifactConfigPropertyOutputReference(this, "artifact_config");
  public get artifactConfig() {
    return this._artifactConfig;
  }
  public putArtifactConfig(value: AwsCanary.ArtifactConfigProperty) {
    this._artifactConfig.internalValue = value;
  }
  public resetArtifactConfig() {
    this._artifactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactConfigInput() {
    return this._artifactConfig.internalValue;
  }

  // run_config - computed: false, optional: true, required: false
  private _runConfig = new AwsCanary.RunConfigPropertyOutputReference(this, "run_config");
  public get runConfig() {
    return this._runConfig;
  }
  public putRunConfig(value: AwsCanary.RunConfigProperty) {
    this._runConfig.internalValue = value;
  }
  public resetRunConfig() {
    this._runConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigInput() {
    return this._runConfig.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new AwsCanary.SchedulePropertyOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AwsCanary.ScheduleProperty) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsCanary.VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsCanary.VpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_s3_location: cdktn.stringToTerraform(this._artifactS3Location),
      delete_lambda: cdktn.booleanToTerraform(this._deleteLambda),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      failure_retention_period: cdktn.numberToTerraform(this._failureRetentionPeriod),
      handler: cdktn.stringToTerraform(this._handler),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      runtime_version: cdktn.stringToTerraform(this._runtimeVersion),
      s3_bucket: cdktn.stringToTerraform(this._s3Bucket),
      s3_key: cdktn.stringToTerraform(this._s3Key),
      s3_version: cdktn.stringToTerraform(this._s3Version),
      start_canary: cdktn.booleanToTerraform(this._startCanary),
      success_retention_period: cdktn.numberToTerraform(this._successRetentionPeriod),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      zip_file: cdktn.stringToTerraform(this._zipFile),
      artifact_config: awsCanaryArtifactConfigPropertyToTerraform(this._artifactConfig.internalValue),
      run_config: awsCanaryRunConfigPropertyToTerraform(this._runConfig.internalValue),
      schedule: awsCanarySchedulePropertyToTerraform(this._schedule.internalValue),
      vpc_config: awsCanaryVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_s3_location: {
        value: cdktn.stringToHclTerraform(this._artifactS3Location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_lambda: {
        value: cdktn.booleanToHclTerraform(this._deleteLambda),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_retention_period: {
        value: cdktn.numberToHclTerraform(this._failureRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handler: {
        value: cdktn.stringToHclTerraform(this._handler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version: {
        value: cdktn.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktn.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key: {
        value: cdktn.stringToHclTerraform(this._s3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_version: {
        value: cdktn.stringToHclTerraform(this._s3Version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_canary: {
        value: cdktn.booleanToHclTerraform(this._startCanary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      success_retention_period: {
        value: cdktn.numberToHclTerraform(this._successRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zip_file: {
        value: cdktn.stringToHclTerraform(this._zipFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_config: {
        value: awsCanaryArtifactConfigPropertyToHclTerraform(this._artifactConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCanary.ArtifactConfigPropertyList",
      },
      run_config: {
        value: awsCanaryRunConfigPropertyToHclTerraform(this._runConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCanary.RunConfigPropertyList",
      },
      schedule: {
        value: awsCanarySchedulePropertyToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCanary.SchedulePropertyList",
      },
      vpc_config: {
        value: awsCanaryVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCanary.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCanaryTimelinePropertyToTerraform(struct?: AwsCanary.TimelineProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsCanaryTimelinePropertyToHclTerraform(struct?: AwsCanary.TimelineProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsCanaryS3EncryptionPropertyToTerraform(struct?: AwsCanary.S3EncryptionPropertyOutputReference | AwsCanary.S3EncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_mode: cdktn.stringToTerraform(struct!.encryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function awsCanaryS3EncryptionPropertyToHclTerraform(struct?: AwsCanary.S3EncryptionPropertyOutputReference | AwsCanary.S3EncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.encryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCanaryArtifactConfigPropertyToTerraform(struct?: AwsCanary.ArtifactConfigPropertyOutputReference | AwsCanary.ArtifactConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_encryption: awsCanaryS3EncryptionPropertyToTerraform(struct!.s3Encryption),
  }
}


export function awsCanaryArtifactConfigPropertyToHclTerraform(struct?: AwsCanary.ArtifactConfigPropertyOutputReference | AwsCanary.ArtifactConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_encryption: {
      value: awsCanaryS3EncryptionPropertyToHclTerraform(struct!.s3Encryption),
      isBlock: true,
      type: "list",
      storageClassType: "S3EncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCanaryRunConfigPropertyToTerraform(struct?: AwsCanary.RunConfigPropertyOutputReference | AwsCanary.RunConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active_tracing: cdktn.booleanToTerraform(struct!.activeTracing),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    ephemeral_storage: cdktn.numberToTerraform(struct!.ephemeralStorage),
    memory_in_mb: cdktn.numberToTerraform(struct!.memoryInMb),
    timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function awsCanaryRunConfigPropertyToHclTerraform(struct?: AwsCanary.RunConfigPropertyOutputReference | AwsCanary.RunConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active_tracing: {
      value: cdktn.booleanToHclTerraform(struct!.activeTracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ephemeral_storage: {
      value: cdktn.numberToHclTerraform(struct!.ephemeralStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.memoryInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCanaryRetryConfigPropertyToTerraform(struct?: AwsCanary.RetryConfigPropertyOutputReference | AwsCanary.RetryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
  }
}


export function awsCanaryRetryConfigPropertyToHclTerraform(struct?: AwsCanary.RetryConfigPropertyOutputReference | AwsCanary.RetryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCanarySchedulePropertyToTerraform(struct?: AwsCanary.SchedulePropertyOutputReference | AwsCanary.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_in_seconds: cdktn.numberToTerraform(struct!.durationInSeconds),
    expression: cdktn.stringToTerraform(struct!.expression),
    retry_config: awsCanaryRetryConfigPropertyToTerraform(struct!.retryConfig),
  }
}


export function awsCanarySchedulePropertyToHclTerraform(struct?: AwsCanary.SchedulePropertyOutputReference | AwsCanary.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.durationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_config: {
      value: awsCanaryRetryConfigPropertyToHclTerraform(struct!.retryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RetryConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCanaryVpcConfigPropertyToTerraform(struct?: AwsCanary.VpcConfigPropertyOutputReference | AwsCanary.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ipv6_allowed_for_dual_stack: cdktn.booleanToTerraform(struct!.ipv6AllowedForDualStack),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsCanaryVpcConfigPropertyToHclTerraform(struct?: AwsCanary.VpcConfigPropertyOutputReference | AwsCanary.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ipv6_allowed_for_dual_stack: {
      value: cdktn.booleanToHclTerraform(struct!.ipv6AllowedForDualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCanary {
export interface TimelineProperty {
}
export class TimelinePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TimelineProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimelineProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_started - computed: true, optional: false, required: false
  public get lastStarted() {
    return this.getStringAttribute('last_started');
  }

  // last_stopped - computed: true, optional: false, required: false
  public get lastStopped() {
    return this.getStringAttribute('last_stopped');
  }
}

export class TimelinePropertyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TimelinePropertyOutputReference {
    return new TimelinePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3EncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#encryption_mode AwsCanary#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#kms_key_arn AwsCanary#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class S3EncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3EncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3EncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionMode = value.encryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface ArtifactConfigProperty {
  /**
  * s3_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#s3_encryption AwsCanary#s3_encryption}
  */
  readonly s3Encryption?: S3EncryptionProperty;
}
export class ArtifactConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Encryption.internalValue = value.s3Encryption;
    }
  }

  // s3_encryption - computed: false, optional: true, required: false
  private _s3Encryption = new S3EncryptionPropertyOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: S3EncryptionProperty) {
    this._s3Encryption.internalValue = value;
  }
  public resetS3Encryption() {
    this._s3Encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }
}
export interface RunConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#active_tracing AwsCanary#active_tracing}
  */
  readonly activeTracing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#environment_variables AwsCanary#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#ephemeral_storage AwsCanary#ephemeral_storage}
  */
  readonly ephemeralStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#memory_in_mb AwsCanary#memory_in_mb}
  */
  readonly memoryInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#timeout_in_seconds AwsCanary#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}
export class RunConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RunConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTracing = this._activeTracing;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._ephemeralStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage;
    }
    if (this._memoryInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMb = this._memoryInMb;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTracing = undefined;
      this._environmentVariables = undefined;
      this._ephemeralStorage = undefined;
      this._memoryInMb = undefined;
      this._timeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTracing = value.activeTracing;
      this._environmentVariables = value.environmentVariables;
      this._ephemeralStorage = value.ephemeralStorage;
      this._memoryInMb = value.memoryInMb;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // active_tracing - computed: false, optional: true, required: false
  private _activeTracing?: boolean | cdktn.IResolvable; 
  public get activeTracing() {
    return this.getBooleanAttribute('active_tracing');
  }
  public set activeTracing(value: boolean | cdktn.IResolvable) {
    this._activeTracing = value;
  }
  public resetActiveTracing() {
    this._activeTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTracingInput() {
    return this._activeTracing;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // ephemeral_storage - computed: true, optional: true, required: false
  private _ephemeralStorage?: number; 
  public get ephemeralStorage() {
    return this.getNumberAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: number) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // memory_in_mb - computed: true, optional: true, required: false
  private _memoryInMb?: number; 
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }
  public set memoryInMb(value: number) {
    this._memoryInMb = value;
  }
  public resetMemoryInMb() {
    this._memoryInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbInput() {
    return this._memoryInMb;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface RetryConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#max_retries AwsCanary#max_retries}
  */
  readonly maxRetries: number;
}
export class RetryConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetryConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }
}
export interface ScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#duration_in_seconds AwsCanary#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#expression AwsCanary#expression}
  */
  readonly expression: string;
  /**
  * retry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#retry_config AwsCanary#retry_config}
  */
  readonly retryConfig?: RetryConfigProperty;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInSeconds = this._durationInSeconds;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._retryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConfig = this._retryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInSeconds = undefined;
      this._expression = undefined;
      this._retryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInSeconds = value.durationInSeconds;
      this._expression = value.expression;
      this._retryConfig.internalValue = value.retryConfig;
    }
  }

  // duration_in_seconds - computed: false, optional: true, required: false
  private _durationInSeconds?: number; 
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
  public set durationInSeconds(value: number) {
    this._durationInSeconds = value;
  }
  public resetDurationInSeconds() {
    this._durationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInSecondsInput() {
    return this._durationInSeconds;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig = new RetryConfigPropertyOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: RetryConfigProperty) {
    this._retryConfig.internalValue = value;
  }
  public resetRetryConfig() {
    this._retryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#ipv6_allowed_for_dual_stack AwsCanary#ipv6_allowed_for_dual_stack}
  */
  readonly ipv6AllowedForDualStack?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#security_group_ids AwsCanary#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/synthetics_canary#subnet_ids AwsCanary#subnet_ids}
  */
  readonly subnetIds?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AllowedForDualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AllowedForDualStack = this._ipv6AllowedForDualStack;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AllowedForDualStack = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AllowedForDualStack = value.ipv6AllowedForDualStack;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // ipv6_allowed_for_dual_stack - computed: false, optional: true, required: false
  private _ipv6AllowedForDualStack?: boolean | cdktn.IResolvable; 
  public get ipv6AllowedForDualStack() {
    return this.getBooleanAttribute('ipv6_allowed_for_dual_stack');
  }
  public set ipv6AllowedForDualStack(value: boolean | cdktn.IResolvable) {
    this._ipv6AllowedForDualStack = value;
  }
  public resetIpv6AllowedForDualStack() {
    this._ipv6AllowedForDualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowedForDualStackInput() {
    return this._ipv6AllowedForDualStack;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
}
