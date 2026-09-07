// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#max_units AwsPipeline#max_units}
  */
  readonly maxUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#min_units AwsPipeline#min_units}
  */
  readonly minUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#pipeline_configuration_body AwsPipeline#pipeline_configuration_body}
  */
  readonly pipelineConfigurationBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#pipeline_name AwsPipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#pipeline_role_arn AwsPipeline#pipeline_role_arn}
  */
  readonly pipelineRoleArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#region AwsPipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#tags AwsPipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * buffer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#buffer_options AwsPipeline#buffer_options}
  */
  readonly bufferOptions?: AwsPipeline.BufferOptionsProperty[] | cdktn.IResolvable;
  /**
  * encryption_at_rest_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#encryption_at_rest_options AwsPipeline#encryption_at_rest_options}
  */
  readonly encryptionAtRestOptions?: AwsPipeline.EncryptionAtRestOptionsProperty[] | cdktn.IResolvable;
  /**
  * log_publishing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#log_publishing_options AwsPipeline#log_publishing_options}
  */
  readonly logPublishingOptions?: AwsPipeline.LogPublishingOptionsProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#timeouts AwsPipeline#timeouts}
  */
  readonly timeouts?: AwsPipeline.TimeoutsProperty;
  /**
  * vpc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#vpc_options AwsPipeline#vpc_options}
  */
  readonly vpcOptions?: AwsPipeline.VpcOptionsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline aws_osis_pipeline}
*/
export class AwsPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_osis_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPipeline to import
  * @param importFromId The id of the existing AwsPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_osis_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline aws_osis_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_osis_pipeline',
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
    this._maxUnits = config.maxUnits;
    this._minUnits = config.minUnits;
    this._pipelineConfigurationBody = config.pipelineConfigurationBody;
    this._pipelineName = config.pipelineName;
    this._pipelineRoleArn = config.pipelineRoleArn;
    this._region = config.region;
    this._tags = config.tags;
    this._bufferOptions.internalValue = config.bufferOptions;
    this._encryptionAtRestOptions.internalValue = config.encryptionAtRestOptions;
    this._logPublishingOptions.internalValue = config.logPublishingOptions;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingest_endpoint_urls - computed: true, optional: false, required: false
  public get ingestEndpointUrls() {
    return cdktn.Fn.tolist(this.getListAttribute('ingest_endpoint_urls'));
  }

  // max_units - computed: false, optional: false, required: true
  private _maxUnits?: number; 
  public get maxUnits() {
    return this.getNumberAttribute('max_units');
  }
  public set maxUnits(value: number) {
    this._maxUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnitsInput() {
    return this._maxUnits;
  }

  // min_units - computed: false, optional: false, required: true
  private _minUnits?: number; 
  public get minUnits() {
    return this.getNumberAttribute('min_units');
  }
  public set minUnits(value: number) {
    this._minUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnitsInput() {
    return this._minUnits;
  }

  // pipeline_arn - computed: true, optional: false, required: false
  public get pipelineArn() {
    return this.getStringAttribute('pipeline_arn');
  }

  // pipeline_configuration_body - computed: false, optional: false, required: true
  private _pipelineConfigurationBody?: string; 
  public get pipelineConfigurationBody() {
    return this.getStringAttribute('pipeline_configuration_body');
  }
  public set pipelineConfigurationBody(value: string) {
    this._pipelineConfigurationBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigurationBodyInput() {
    return this._pipelineConfigurationBody;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // pipeline_role_arn - computed: true, optional: true, required: false
  private _pipelineRoleArn?: string; 
  public get pipelineRoleArn() {
    return this.getStringAttribute('pipeline_role_arn');
  }
  public set pipelineRoleArn(value: string) {
    this._pipelineRoleArn = value;
  }
  public resetPipelineRoleArn() {
    this._pipelineRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineRoleArnInput() {
    return this._pipelineRoleArn;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // buffer_options - computed: false, optional: true, required: false
  private _bufferOptions = new AwsPipeline.BufferOptionsPropertyList(this, "buffer_options", false);
  public get bufferOptions() {
    return this._bufferOptions;
  }
  public putBufferOptions(value: AwsPipeline.BufferOptionsProperty[] | cdktn.IResolvable) {
    this._bufferOptions.internalValue = value;
  }
  public resetBufferOptions() {
    this._bufferOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferOptionsInput() {
    return this._bufferOptions.internalValue;
  }

  // encryption_at_rest_options - computed: false, optional: true, required: false
  private _encryptionAtRestOptions = new AwsPipeline.EncryptionAtRestOptionsPropertyList(this, "encryption_at_rest_options", false);
  public get encryptionAtRestOptions() {
    return this._encryptionAtRestOptions;
  }
  public putEncryptionAtRestOptions(value: AwsPipeline.EncryptionAtRestOptionsProperty[] | cdktn.IResolvable) {
    this._encryptionAtRestOptions.internalValue = value;
  }
  public resetEncryptionAtRestOptions() {
    this._encryptionAtRestOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestOptionsInput() {
    return this._encryptionAtRestOptions.internalValue;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions = new AwsPipeline.LogPublishingOptionsPropertyList(this, "log_publishing_options", false);
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public putLogPublishingOptions(value: AwsPipeline.LogPublishingOptionsProperty[] | cdktn.IResolvable) {
    this._logPublishingOptions.internalValue = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsPipeline.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsPipeline.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new AwsPipeline.VpcOptionsPropertyList(this, "vpc_options", false);
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: AwsPipeline.VpcOptionsProperty[] | cdktn.IResolvable) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_units: cdktn.numberToTerraform(this._maxUnits),
      min_units: cdktn.numberToTerraform(this._minUnits),
      pipeline_configuration_body: cdktn.stringToTerraform(this._pipelineConfigurationBody),
      pipeline_name: cdktn.stringToTerraform(this._pipelineName),
      pipeline_role_arn: cdktn.stringToTerraform(this._pipelineRoleArn),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      buffer_options: cdktn.listMapper(awsPipelineBufferOptionsPropertyToTerraform, true)(this._bufferOptions.internalValue),
      encryption_at_rest_options: cdktn.listMapper(awsPipelineEncryptionAtRestOptionsPropertyToTerraform, true)(this._encryptionAtRestOptions.internalValue),
      log_publishing_options: cdktn.listMapper(awsPipelineLogPublishingOptionsPropertyToTerraform, true)(this._logPublishingOptions.internalValue),
      timeouts: awsPipelineTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_options: cdktn.listMapper(awsPipelineVpcOptionsPropertyToTerraform, true)(this._vpcOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_units: {
        value: cdktn.numberToHclTerraform(this._maxUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_units: {
        value: cdktn.numberToHclTerraform(this._minUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pipeline_configuration_body: {
        value: cdktn.stringToHclTerraform(this._pipelineConfigurationBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_name: {
        value: cdktn.stringToHclTerraform(this._pipelineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_role_arn: {
        value: cdktn.stringToHclTerraform(this._pipelineRoleArn),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      buffer_options: {
        value: cdktn.listMapperHcl(awsPipelineBufferOptionsPropertyToHclTerraform, true)(this._bufferOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPipeline.BufferOptionsPropertyList",
      },
      encryption_at_rest_options: {
        value: cdktn.listMapperHcl(awsPipelineEncryptionAtRestOptionsPropertyToHclTerraform, true)(this._encryptionAtRestOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPipeline.EncryptionAtRestOptionsPropertyList",
      },
      log_publishing_options: {
        value: cdktn.listMapperHcl(awsPipelineLogPublishingOptionsPropertyToHclTerraform, true)(this._logPublishingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPipeline.LogPublishingOptionsPropertyList",
      },
      timeouts: {
        value: awsPipelineTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsPipeline.TimeoutsProperty",
      },
      vpc_options: {
        value: cdktn.listMapperHcl(awsPipelineVpcOptionsPropertyToHclTerraform, true)(this._vpcOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPipeline.VpcOptionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPipelineBufferOptionsPropertyToTerraform(struct?: AwsPipeline.BufferOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    persistent_buffer_enabled: cdktn.booleanToTerraform(struct!.persistentBufferEnabled),
  }
}


export function awsPipelineBufferOptionsPropertyToHclTerraform(struct?: AwsPipeline.BufferOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    persistent_buffer_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.persistentBufferEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPipelineEncryptionAtRestOptionsPropertyToTerraform(struct?: AwsPipeline.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function awsPipelineEncryptionAtRestOptionsPropertyToHclTerraform(struct?: AwsPipeline.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsPipelineCloudwatchLogDestinationPropertyToTerraform(struct?: AwsPipeline.CloudwatchLogDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function awsPipelineCloudwatchLogDestinationPropertyToHclTerraform(struct?: AwsPipeline.CloudwatchLogDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPipelineLogPublishingOptionsPropertyToTerraform(struct?: AwsPipeline.LogPublishingOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_logging_enabled: cdktn.booleanToTerraform(struct!.isLoggingEnabled),
    cloudwatch_log_destination: cdktn.listMapper(awsPipelineCloudwatchLogDestinationPropertyToTerraform, true)(struct!.cloudwatchLogDestination),
  }
}


export function awsPipelineLogPublishingOptionsPropertyToHclTerraform(struct?: AwsPipeline.LogPublishingOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_logging_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isLoggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloudwatch_log_destination: {
      value: cdktn.listMapperHcl(awsPipelineCloudwatchLogDestinationPropertyToHclTerraform, true)(struct!.cloudwatchLogDestination),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPipelineTimeoutsPropertyToTerraform(struct?: AwsPipeline.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsPipelineTimeoutsPropertyToHclTerraform(struct?: AwsPipeline.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPipelineVpcOptionsPropertyToTerraform(struct?: AwsPipeline.VpcOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    vpc_endpoint_management: cdktn.stringToTerraform(struct!.vpcEndpointManagement),
  }
}


export function awsPipelineVpcOptionsPropertyToHclTerraform(struct?: AwsPipeline.VpcOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    vpc_endpoint_management: {
      value: cdktn.stringToHclTerraform(struct!.vpcEndpointManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPipeline {
export interface BufferOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#persistent_buffer_enabled AwsPipeline#persistent_buffer_enabled}
  */
  readonly persistentBufferEnabled: boolean | cdktn.IResolvable;
}
export class BufferOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BufferOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentBufferEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentBufferEnabled = this._persistentBufferEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BufferOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentBufferEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentBufferEnabled = value.persistentBufferEnabled;
    }
  }

  // persistent_buffer_enabled - computed: false, optional: false, required: true
  private _persistentBufferEnabled?: boolean | cdktn.IResolvable; 
  public get persistentBufferEnabled() {
    return this.getBooleanAttribute('persistent_buffer_enabled');
  }
  public set persistentBufferEnabled(value: boolean | cdktn.IResolvable) {
    this._persistentBufferEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentBufferEnabledInput() {
    return this._persistentBufferEnabled;
  }
}

export class BufferOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : BufferOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): BufferOptionsPropertyOutputReference {
    return new BufferOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionAtRestOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#kms_key_arn AwsPipeline#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}
export class EncryptionAtRestOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class EncryptionAtRestOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : EncryptionAtRestOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): EncryptionAtRestOptionsPropertyOutputReference {
    return new EncryptionAtRestOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#log_group AwsPipeline#log_group}
  */
  readonly logGroup: string;
}
export class CloudwatchLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudwatchLogDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
    }
  }

  // log_group - computed: false, optional: false, required: true
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}

export class CloudwatchLogDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogDestinationPropertyOutputReference {
    return new CloudwatchLogDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogPublishingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#is_logging_enabled AwsPipeline#is_logging_enabled}
  */
  readonly isLoggingEnabled?: boolean | cdktn.IResolvable;
  /**
  * cloudwatch_log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#cloudwatch_log_destination AwsPipeline#cloudwatch_log_destination}
  */
  readonly cloudwatchLogDestination?: CloudwatchLogDestinationProperty[] | cdktn.IResolvable;
}
export class LogPublishingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogPublishingOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLoggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLoggingEnabled = this._isLoggingEnabled;
    }
    if (this._cloudwatchLogDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogDestination = this._cloudwatchLogDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogPublishingOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isLoggingEnabled = undefined;
      this._cloudwatchLogDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isLoggingEnabled = value.isLoggingEnabled;
      this._cloudwatchLogDestination.internalValue = value.cloudwatchLogDestination;
    }
  }

  // is_logging_enabled - computed: false, optional: true, required: false
  private _isLoggingEnabled?: boolean | cdktn.IResolvable; 
  public get isLoggingEnabled() {
    return this.getBooleanAttribute('is_logging_enabled');
  }
  public set isLoggingEnabled(value: boolean | cdktn.IResolvable) {
    this._isLoggingEnabled = value;
  }
  public resetIsLoggingEnabled() {
    this._isLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingEnabledInput() {
    return this._isLoggingEnabled;
  }

  // cloudwatch_log_destination - computed: false, optional: true, required: false
  private _cloudwatchLogDestination = new CloudwatchLogDestinationPropertyList(this, "cloudwatch_log_destination", false);
  public get cloudwatchLogDestination() {
    return this._cloudwatchLogDestination;
  }
  public putCloudwatchLogDestination(value: CloudwatchLogDestinationProperty[] | cdktn.IResolvable) {
    this._cloudwatchLogDestination.internalValue = value;
  }
  public resetCloudwatchLogDestination() {
    this._cloudwatchLogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogDestinationInput() {
    return this._cloudwatchLogDestination.internalValue;
  }
}

export class LogPublishingOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : LogPublishingOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): LogPublishingOptionsPropertyOutputReference {
    return new LogPublishingOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#create AwsPipeline#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#delete AwsPipeline#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#update AwsPipeline#update}
  */
  readonly update?: string;
}
export class TimeoutsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimeoutsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface VpcOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#security_group_ids AwsPipeline#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#subnet_ids AwsPipeline#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/osis_pipeline#vpc_endpoint_management AwsPipeline#vpc_endpoint_management}
  */
  readonly vpcEndpointManagement?: string;
}
export class VpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VpcOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcEndpointManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointManagement = this._vpcEndpointManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcEndpointManagement = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcEndpointManagement = value.vpcEndpointManagement;
    }
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_endpoint_management - computed: false, optional: true, required: false
  private _vpcEndpointManagement?: string; 
  public get vpcEndpointManagement() {
    return this.getStringAttribute('vpc_endpoint_management');
  }
  public set vpcEndpointManagement(value: string) {
    this._vpcEndpointManagement = value;
  }
  public resetVpcEndpointManagement() {
    this._vpcEndpointManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointManagementInput() {
    return this._vpcEndpointManagement;
  }
}

export class VpcOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcOptionsPropertyOutputReference {
    return new VpcOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
