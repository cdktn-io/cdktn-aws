// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBedrockModelInvocationLoggingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#region AwsBedrockModelInvocationLoggingConfiguration#region}
  */
  readonly region?: string;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#logging_config AwsBedrockModelInvocationLoggingConfiguration#logging_config}
  */
  readonly loggingConfig?: AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration}
*/
export class AwsBedrockModelInvocationLoggingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_model_invocation_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBedrockModelInvocationLoggingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBedrockModelInvocationLoggingConfiguration to import
  * @param importFromId The id of the existing AwsBedrockModelInvocationLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBedrockModelInvocationLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_model_invocation_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBedrockModelInvocationLoggingConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsBedrockModelInvocationLoggingConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_model_invocation_logging_configuration',
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
    this._region = config.region;
    this._loggingConfig.internalValue = config.loggingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigPropertyList(this, "logging_config", false);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigProperty[] | cdktn.IResolvable) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      logging_config: cdktn.listMapper(awsBedrockModelInvocationLoggingConfigurationLoggingConfigPropertyToTerraform, true)(this._loggingConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_config: {
        value: cdktn.listMapperHcl(awsBedrockModelInvocationLoggingConfigurationLoggingConfigPropertyToHclTerraform, true)(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBedrockModelInvocationLoggingConfigurationLargeDataDeliveryS3ConfigPropertyToTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.LargeDataDeliveryS3ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function awsBedrockModelInvocationLoggingConfigurationLargeDataDeliveryS3ConfigPropertyToHclTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.LargeDataDeliveryS3ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockModelInvocationLoggingConfigurationCloudwatchConfigPropertyToTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.CloudwatchConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    large_data_delivery_s3_config: cdktn.listMapper(awsBedrockModelInvocationLoggingConfigurationLargeDataDeliveryS3ConfigPropertyToTerraform, true)(struct!.largeDataDeliveryS3Config),
  }
}


export function awsBedrockModelInvocationLoggingConfigurationCloudwatchConfigPropertyToHclTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.CloudwatchConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_data_delivery_s3_config: {
      value: cdktn.listMapperHcl(awsBedrockModelInvocationLoggingConfigurationLargeDataDeliveryS3ConfigPropertyToHclTerraform, true)(struct!.largeDataDeliveryS3Config),
      isBlock: true,
      type: "list",
      storageClassType: "LargeDataDeliveryS3ConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockModelInvocationLoggingConfigurationS3ConfigPropertyToTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.S3ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function awsBedrockModelInvocationLoggingConfigurationS3ConfigPropertyToHclTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.S3ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockModelInvocationLoggingConfigurationLoggingConfigPropertyToTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_data_delivery_enabled: cdktn.booleanToTerraform(struct!.embeddingDataDeliveryEnabled),
    image_data_delivery_enabled: cdktn.booleanToTerraform(struct!.imageDataDeliveryEnabled),
    text_data_delivery_enabled: cdktn.booleanToTerraform(struct!.textDataDeliveryEnabled),
    video_data_delivery_enabled: cdktn.booleanToTerraform(struct!.videoDataDeliveryEnabled),
    cloudwatch_config: cdktn.listMapper(awsBedrockModelInvocationLoggingConfigurationCloudwatchConfigPropertyToTerraform, true)(struct!.cloudwatchConfig),
    s3_config: cdktn.listMapper(awsBedrockModelInvocationLoggingConfigurationS3ConfigPropertyToTerraform, true)(struct!.s3Config),
  }
}


export function awsBedrockModelInvocationLoggingConfigurationLoggingConfigPropertyToHclTerraform(struct?: AwsBedrockModelInvocationLoggingConfiguration.LoggingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_data_delivery_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.embeddingDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_data_delivery_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.imageDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_data_delivery_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.textDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    video_data_delivery_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.videoDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloudwatch_config: {
      value: cdktn.listMapperHcl(awsBedrockModelInvocationLoggingConfigurationCloudwatchConfigPropertyToHclTerraform, true)(struct!.cloudwatchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchConfigPropertyList",
    },
    s3_config: {
      value: cdktn.listMapperHcl(awsBedrockModelInvocationLoggingConfigurationS3ConfigPropertyToHclTerraform, true)(struct!.s3Config),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBedrockModelInvocationLoggingConfiguration {
export interface LargeDataDeliveryS3ConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name AwsBedrockModelInvocationLoggingConfiguration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix AwsBedrockModelInvocationLoggingConfiguration#key_prefix}
  */
  readonly keyPrefix?: string;
}
export class LargeDataDeliveryS3ConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LargeDataDeliveryS3ConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LargeDataDeliveryS3ConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}

export class LargeDataDeliveryS3ConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LargeDataDeliveryS3ConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LargeDataDeliveryS3ConfigPropertyOutputReference {
    return new LargeDataDeliveryS3ConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#log_group_name AwsBedrockModelInvocationLoggingConfiguration#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#role_arn AwsBedrockModelInvocationLoggingConfiguration#role_arn}
  */
  readonly roleArn: string;
  /**
  * large_data_delivery_s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#large_data_delivery_s3_config AwsBedrockModelInvocationLoggingConfiguration#large_data_delivery_s3_config}
  */
  readonly largeDataDeliveryS3Config?: LargeDataDeliveryS3ConfigProperty[] | cdktn.IResolvable;
}
export class CloudwatchConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._largeDataDeliveryS3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeDataDeliveryS3Config = this._largeDataDeliveryS3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
      this._largeDataDeliveryS3Config.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
      this._largeDataDeliveryS3Config.internalValue = value.largeDataDeliveryS3Config;
    }
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // large_data_delivery_s3_config - computed: false, optional: true, required: false
  private _largeDataDeliveryS3Config = new LargeDataDeliveryS3ConfigPropertyList(this, "large_data_delivery_s3_config", false);
  public get largeDataDeliveryS3Config() {
    return this._largeDataDeliveryS3Config;
  }
  public putLargeDataDeliveryS3Config(value: LargeDataDeliveryS3ConfigProperty[] | cdktn.IResolvable) {
    this._largeDataDeliveryS3Config.internalValue = value;
  }
  public resetLargeDataDeliveryS3Config() {
    this._largeDataDeliveryS3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeDataDeliveryS3ConfigInput() {
    return this._largeDataDeliveryS3Config.internalValue;
  }
}

export class CloudwatchConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchConfigPropertyOutputReference {
    return new CloudwatchConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name AwsBedrockModelInvocationLoggingConfiguration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix AwsBedrockModelInvocationLoggingConfiguration#key_prefix}
  */
  readonly keyPrefix?: string;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}

export class S3ConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ConfigPropertyOutputReference {
    return new S3ConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#embedding_data_delivery_enabled AwsBedrockModelInvocationLoggingConfiguration#embedding_data_delivery_enabled}
  */
  readonly embeddingDataDeliveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#image_data_delivery_enabled AwsBedrockModelInvocationLoggingConfiguration#image_data_delivery_enabled}
  */
  readonly imageDataDeliveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#text_data_delivery_enabled AwsBedrockModelInvocationLoggingConfiguration#text_data_delivery_enabled}
  */
  readonly textDataDeliveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#video_data_delivery_enabled AwsBedrockModelInvocationLoggingConfiguration#video_data_delivery_enabled}
  */
  readonly videoDataDeliveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * cloudwatch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#cloudwatch_config AwsBedrockModelInvocationLoggingConfiguration#cloudwatch_config}
  */
  readonly cloudwatchConfig?: CloudwatchConfigProperty[] | cdktn.IResolvable;
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_model_invocation_logging_configuration#s3_config AwsBedrockModelInvocationLoggingConfiguration#s3_config}
  */
  readonly s3Config?: S3ConfigProperty[] | cdktn.IResolvable;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDataDeliveryEnabled = this._embeddingDataDeliveryEnabled;
    }
    if (this._imageDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDataDeliveryEnabled = this._imageDataDeliveryEnabled;
    }
    if (this._textDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDataDeliveryEnabled = this._textDataDeliveryEnabled;
    }
    if (this._videoDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoDataDeliveryEnabled = this._videoDataDeliveryEnabled;
    }
    if (this._cloudwatchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchConfig = this._cloudwatchConfig?.internalValue;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDataDeliveryEnabled = undefined;
      this._imageDataDeliveryEnabled = undefined;
      this._textDataDeliveryEnabled = undefined;
      this._videoDataDeliveryEnabled = undefined;
      this._cloudwatchConfig.internalValue = undefined;
      this._s3Config.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDataDeliveryEnabled = value.embeddingDataDeliveryEnabled;
      this._imageDataDeliveryEnabled = value.imageDataDeliveryEnabled;
      this._textDataDeliveryEnabled = value.textDataDeliveryEnabled;
      this._videoDataDeliveryEnabled = value.videoDataDeliveryEnabled;
      this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // embedding_data_delivery_enabled - computed: true, optional: true, required: false
  private _embeddingDataDeliveryEnabled?: boolean | cdktn.IResolvable; 
  public get embeddingDataDeliveryEnabled() {
    return this.getBooleanAttribute('embedding_data_delivery_enabled');
  }
  public set embeddingDataDeliveryEnabled(value: boolean | cdktn.IResolvable) {
    this._embeddingDataDeliveryEnabled = value;
  }
  public resetEmbeddingDataDeliveryEnabled() {
    this._embeddingDataDeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDataDeliveryEnabledInput() {
    return this._embeddingDataDeliveryEnabled;
  }

  // image_data_delivery_enabled - computed: true, optional: true, required: false
  private _imageDataDeliveryEnabled?: boolean | cdktn.IResolvable; 
  public get imageDataDeliveryEnabled() {
    return this.getBooleanAttribute('image_data_delivery_enabled');
  }
  public set imageDataDeliveryEnabled(value: boolean | cdktn.IResolvable) {
    this._imageDataDeliveryEnabled = value;
  }
  public resetImageDataDeliveryEnabled() {
    this._imageDataDeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDataDeliveryEnabledInput() {
    return this._imageDataDeliveryEnabled;
  }

  // text_data_delivery_enabled - computed: true, optional: true, required: false
  private _textDataDeliveryEnabled?: boolean | cdktn.IResolvable; 
  public get textDataDeliveryEnabled() {
    return this.getBooleanAttribute('text_data_delivery_enabled');
  }
  public set textDataDeliveryEnabled(value: boolean | cdktn.IResolvable) {
    this._textDataDeliveryEnabled = value;
  }
  public resetTextDataDeliveryEnabled() {
    this._textDataDeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDataDeliveryEnabledInput() {
    return this._textDataDeliveryEnabled;
  }

  // video_data_delivery_enabled - computed: true, optional: true, required: false
  private _videoDataDeliveryEnabled?: boolean | cdktn.IResolvable; 
  public get videoDataDeliveryEnabled() {
    return this.getBooleanAttribute('video_data_delivery_enabled');
  }
  public set videoDataDeliveryEnabled(value: boolean | cdktn.IResolvable) {
    this._videoDataDeliveryEnabled = value;
  }
  public resetVideoDataDeliveryEnabled() {
    this._videoDataDeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoDataDeliveryEnabledInput() {
    return this._videoDataDeliveryEnabled;
  }

  // cloudwatch_config - computed: false, optional: true, required: false
  private _cloudwatchConfig = new CloudwatchConfigPropertyList(this, "cloudwatch_config", false);
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
  public putCloudwatchConfig(value: CloudwatchConfigProperty[] | cdktn.IResolvable) {
    this._cloudwatchConfig.internalValue = value;
  }
  public resetCloudwatchConfig() {
    this._cloudwatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigInput() {
    return this._cloudwatchConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new S3ConfigPropertyList(this, "s3_config", false);
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: S3ConfigProperty[] | cdktn.IResolvable) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}

export class LoggingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LoggingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LoggingConfigPropertyOutputReference {
    return new LoggingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
