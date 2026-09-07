// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsInstanceStorageConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#id AwsInstanceStorageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#instance_id AwsInstanceStorageConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#region AwsInstanceStorageConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#resource_type AwsInstanceStorageConfig#resource_type}
  */
  readonly resourceType: string;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#storage_config AwsInstanceStorageConfig#storage_config}
  */
  readonly storageConfig: AwsInstanceStorageConfig.StorageConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config aws_connect_instance_storage_config}
*/
export class AwsInstanceStorageConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_instance_storage_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsInstanceStorageConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsInstanceStorageConfig to import
  * @param importFromId The id of the existing AwsInstanceStorageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsInstanceStorageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_instance_storage_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config aws_connect_instance_storage_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsInstanceStorageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsInstanceStorageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_instance_storage_config',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
    this._resourceType = config.resourceType;
    this._storageConfig.internalValue = config.storageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new AwsInstanceStorageConfig.StorageConfigPropertyOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: AwsInstanceStorageConfig.StorageConfigProperty) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      region: cdktn.stringToTerraform(this._region),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      storage_config: awsInstanceStorageConfigStorageConfigPropertyToTerraform(this._storageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
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
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_config: {
        value: awsInstanceStorageConfigStorageConfigPropertyToHclTerraform(this._storageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsInstanceStorageConfig.StorageConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsInstanceStorageConfigKinesisFirehoseConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.KinesisFirehoseConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisFirehoseConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firehose_arn: cdktn.stringToTerraform(struct!.firehoseArn),
  }
}


export function awsInstanceStorageConfigKinesisFirehoseConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.KinesisFirehoseConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisFirehoseConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firehose_arn: {
      value: cdktn.stringToHclTerraform(struct!.firehoseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigKinesisStreamConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.KinesisStreamConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisStreamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function awsInstanceStorageConfigKinesisStreamConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.KinesisStreamConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisStreamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.StorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.StorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigKinesisVideoStreamConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.KinesisVideoStreamConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisVideoStreamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    retention_period_hours: cdktn.numberToTerraform(struct!.retentionPeriodHours),
    encryption_config: awsInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyToTerraform(struct!.encryptionConfig),
  }
}


export function awsInstanceStorageConfigKinesisVideoStreamConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.KinesisVideoStreamConfigPropertyOutputReference | AwsInstanceStorageConfig.KinesisVideoStreamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_hours: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriodHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_config: {
      value: awsInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.StorageConfigS3ConfigEncryptionConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigS3ConfigEncryptionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.StorageConfigS3ConfigEncryptionConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigS3ConfigEncryptionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigS3ConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.S3ConfigPropertyOutputReference | AwsInstanceStorageConfig.S3ConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    encryption_config: awsInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigPropertyToTerraform(struct!.encryptionConfig),
  }
}


export function awsInstanceStorageConfigS3ConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.S3ConfigPropertyOutputReference | AwsInstanceStorageConfig.S3ConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: awsInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigPropertyToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigS3ConfigEncryptionConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceStorageConfigStorageConfigPropertyToTerraform(struct?: AwsInstanceStorageConfig.StorageConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_type: cdktn.stringToTerraform(struct!.storageType),
    kinesis_firehose_config: awsInstanceStorageConfigKinesisFirehoseConfigPropertyToTerraform(struct!.kinesisFirehoseConfig),
    kinesis_stream_config: awsInstanceStorageConfigKinesisStreamConfigPropertyToTerraform(struct!.kinesisStreamConfig),
    kinesis_video_stream_config: awsInstanceStorageConfigKinesisVideoStreamConfigPropertyToTerraform(struct!.kinesisVideoStreamConfig),
    s3_config: awsInstanceStorageConfigS3ConfigPropertyToTerraform(struct!.s3Config),
  }
}


export function awsInstanceStorageConfigStorageConfigPropertyToHclTerraform(struct?: AwsInstanceStorageConfig.StorageConfigPropertyOutputReference | AwsInstanceStorageConfig.StorageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_type: {
      value: cdktn.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_firehose_config: {
      value: awsInstanceStorageConfigKinesisFirehoseConfigPropertyToHclTerraform(struct!.kinesisFirehoseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseConfigPropertyList",
    },
    kinesis_stream_config: {
      value: awsInstanceStorageConfigKinesisStreamConfigPropertyToHclTerraform(struct!.kinesisStreamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisStreamConfigPropertyList",
    },
    kinesis_video_stream_config: {
      value: awsInstanceStorageConfigKinesisVideoStreamConfigPropertyToHclTerraform(struct!.kinesisVideoStreamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisVideoStreamConfigPropertyList",
    },
    s3_config: {
      value: awsInstanceStorageConfigS3ConfigPropertyToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsInstanceStorageConfig {
export interface KinesisFirehoseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#firehose_arn AwsInstanceStorageConfig#firehose_arn}
  */
  readonly firehoseArn: string;
}
export class KinesisFirehoseConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firehoseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseArn = this._firehoseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firehoseArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firehoseArn = value.firehoseArn;
    }
  }

  // firehose_arn - computed: false, optional: false, required: true
  private _firehoseArn?: string; 
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn;
  }
}
export interface KinesisStreamConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#stream_arn AwsInstanceStorageConfig#stream_arn}
  */
  readonly streamArn: string;
}
export class KinesisStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisStreamConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisStreamConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamArn = value.streamArn;
    }
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#encryption_type AwsInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#key_id AwsInstanceStorageConfig#key_id}
  */
  readonly keyId: string;
}
export class StorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
    }
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface KinesisVideoStreamConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#prefix AwsInstanceStorageConfig#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#retention_period_hours AwsInstanceStorageConfig#retention_period_hours}
  */
  readonly retentionPeriodHours: number;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#encryption_config AwsInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig: StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty;
}
export class KinesisVideoStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisVideoStreamConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._retentionPeriodHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodHours = this._retentionPeriodHours;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisVideoStreamConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._retentionPeriodHours = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._retentionPeriodHours = value.retentionPeriodHours;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // retention_period_hours - computed: false, optional: false, required: true
  private _retentionPeriodHours?: number; 
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number) {
    this._retentionPeriodHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours;
  }

  // encryption_config - computed: false, optional: false, required: true
  private _encryptionConfig = new StorageConfigKinesisVideoStreamConfigEncryptionConfigPropertyOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: StorageConfigKinesisVideoStreamConfigEncryptionConfigProperty) {
    this._encryptionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface StorageConfigS3ConfigEncryptionConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#encryption_type AwsInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#key_id AwsInstanceStorageConfig#key_id}
  */
  readonly keyId: string;
}
export class StorageConfigS3ConfigEncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageConfigS3ConfigEncryptionConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigS3ConfigEncryptionConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
    }
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3ConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#bucket_name AwsInstanceStorageConfig#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#bucket_prefix AwsInstanceStorageConfig#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#encryption_config AwsInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig?: StorageConfigS3ConfigEncryptionConfigProperty;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._encryptionConfig.internalValue = value.encryptionConfig;
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

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new StorageConfigS3ConfigEncryptionConfigPropertyOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: StorageConfigS3ConfigEncryptionConfigProperty) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface StorageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#storage_type AwsInstanceStorageConfig#storage_type}
  */
  readonly storageType: string;
  /**
  * kinesis_firehose_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config AwsInstanceStorageConfig#kinesis_firehose_config}
  */
  readonly kinesisFirehoseConfig?: KinesisFirehoseConfigProperty;
  /**
  * kinesis_stream_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#kinesis_stream_config AwsInstanceStorageConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig?: KinesisStreamConfigProperty;
  /**
  * kinesis_video_stream_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config AwsInstanceStorageConfig#kinesis_video_stream_config}
  */
  readonly kinesisVideoStreamConfig?: KinesisVideoStreamConfigProperty;
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_instance_storage_config#s3_config AwsInstanceStorageConfig#s3_config}
  */
  readonly s3Config?: S3ConfigProperty;
}
export class StorageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._kinesisFirehoseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseConfig = this._kinesisFirehoseConfig?.internalValue;
    }
    if (this._kinesisStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamConfig = this._kinesisStreamConfig?.internalValue;
    }
    if (this._kinesisVideoStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisVideoStreamConfig = this._kinesisVideoStreamConfig?.internalValue;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageType = undefined;
      this._kinesisFirehoseConfig.internalValue = undefined;
      this._kinesisStreamConfig.internalValue = undefined;
      this._kinesisVideoStreamConfig.internalValue = undefined;
      this._s3Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageType = value.storageType;
      this._kinesisFirehoseConfig.internalValue = value.kinesisFirehoseConfig;
      this._kinesisStreamConfig.internalValue = value.kinesisStreamConfig;
      this._kinesisVideoStreamConfig.internalValue = value.kinesisVideoStreamConfig;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // kinesis_firehose_config - computed: false, optional: true, required: false
  private _kinesisFirehoseConfig = new KinesisFirehoseConfigPropertyOutputReference(this, "kinesis_firehose_config");
  public get kinesisFirehoseConfig() {
    return this._kinesisFirehoseConfig;
  }
  public putKinesisFirehoseConfig(value: KinesisFirehoseConfigProperty) {
    this._kinesisFirehoseConfig.internalValue = value;
  }
  public resetKinesisFirehoseConfig() {
    this._kinesisFirehoseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseConfigInput() {
    return this._kinesisFirehoseConfig.internalValue;
  }

  // kinesis_stream_config - computed: false, optional: true, required: false
  private _kinesisStreamConfig = new KinesisStreamConfigPropertyOutputReference(this, "kinesis_stream_config");
  public get kinesisStreamConfig() {
    return this._kinesisStreamConfig;
  }
  public putKinesisStreamConfig(value: KinesisStreamConfigProperty) {
    this._kinesisStreamConfig.internalValue = value;
  }
  public resetKinesisStreamConfig() {
    this._kinesisStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamConfigInput() {
    return this._kinesisStreamConfig.internalValue;
  }

  // kinesis_video_stream_config - computed: false, optional: true, required: false
  private _kinesisVideoStreamConfig = new KinesisVideoStreamConfigPropertyOutputReference(this, "kinesis_video_stream_config");
  public get kinesisVideoStreamConfig() {
    return this._kinesisVideoStreamConfig;
  }
  public putKinesisVideoStreamConfig(value: KinesisVideoStreamConfigProperty) {
    this._kinesisVideoStreamConfig.internalValue = value;
  }
  public resetKinesisVideoStreamConfig() {
    this._kinesisVideoStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisVideoStreamConfigInput() {
    return this._kinesisVideoStreamConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new S3ConfigPropertyOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: S3ConfigProperty) {
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
}
