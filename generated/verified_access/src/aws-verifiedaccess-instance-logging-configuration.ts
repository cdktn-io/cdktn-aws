// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsInstanceLoggingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#id AwsInstanceLoggingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#region AwsInstanceLoggingConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id AwsInstanceLoggingConfiguration#verifiedaccess_instance_id}
  */
  readonly verifiedaccessInstanceId: string;
  /**
  * access_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#access_logs AwsInstanceLoggingConfiguration#access_logs}
  */
  readonly accessLogs: AwsInstanceLoggingConfiguration.AccessLogsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration}
*/
export class AwsInstanceLoggingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_instance_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsInstanceLoggingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsInstanceLoggingConfiguration to import
  * @param importFromId The id of the existing AwsInstanceLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsInstanceLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_instance_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsInstanceLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsInstanceLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_instance_logging_configuration',
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
    this._region = config.region;
    this._verifiedaccessInstanceId = config.verifiedaccessInstanceId;
    this._accessLogs.internalValue = config.accessLogs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // verifiedaccess_instance_id - computed: false, optional: false, required: true
  private _verifiedaccessInstanceId?: string; 
  public get verifiedaccessInstanceId() {
    return this.getStringAttribute('verifiedaccess_instance_id');
  }
  public set verifiedaccessInstanceId(value: string) {
    this._verifiedaccessInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedaccessInstanceIdInput() {
    return this._verifiedaccessInstanceId;
  }

  // access_logs - computed: false, optional: false, required: true
  private _accessLogs = new AwsInstanceLoggingConfiguration.AccessLogsPropertyOutputReference(this, "access_logs");
  public get accessLogs() {
    return this._accessLogs;
  }
  public putAccessLogs(value: AwsInstanceLoggingConfiguration.AccessLogsProperty) {
    this._accessLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      verifiedaccess_instance_id: cdktn.stringToTerraform(this._verifiedaccessInstanceId),
      access_logs: awsInstanceLoggingConfigurationAccessLogsPropertyToTerraform(this._accessLogs.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifiedaccess_instance_id: {
        value: cdktn.stringToHclTerraform(this._verifiedaccessInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_logs: {
        value: awsInstanceLoggingConfigurationAccessLogsPropertyToHclTerraform(this._accessLogs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsInstanceLoggingConfiguration.AccessLogsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsInstanceLoggingConfigurationCloudwatchLogsPropertyToTerraform(struct?: AwsInstanceLoggingConfiguration.CloudwatchLogsPropertyOutputReference | AwsInstanceLoggingConfiguration.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function awsInstanceLoggingConfigurationCloudwatchLogsPropertyToHclTerraform(struct?: AwsInstanceLoggingConfiguration.CloudwatchLogsPropertyOutputReference | AwsInstanceLoggingConfiguration.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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


export function awsInstanceLoggingConfigurationKinesisDataFirehosePropertyToTerraform(struct?: AwsInstanceLoggingConfiguration.KinesisDataFirehosePropertyOutputReference | AwsInstanceLoggingConfiguration.KinesisDataFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsInstanceLoggingConfigurationKinesisDataFirehosePropertyToHclTerraform(struct?: AwsInstanceLoggingConfiguration.KinesisDataFirehosePropertyOutputReference | AwsInstanceLoggingConfiguration.KinesisDataFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceLoggingConfigurationS3PropertyToTerraform(struct?: AwsInstanceLoggingConfiguration.S3PropertyOutputReference | AwsInstanceLoggingConfiguration.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function awsInstanceLoggingConfigurationS3PropertyToHclTerraform(struct?: AwsInstanceLoggingConfiguration.S3PropertyOutputReference | AwsInstanceLoggingConfiguration.S3Property): any {
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
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInstanceLoggingConfigurationAccessLogsPropertyToTerraform(struct?: AwsInstanceLoggingConfiguration.AccessLogsPropertyOutputReference | AwsInstanceLoggingConfiguration.AccessLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_trust_context: cdktn.booleanToTerraform(struct!.includeTrustContext),
    log_version: cdktn.stringToTerraform(struct!.logVersion),
    cloudwatch_logs: awsInstanceLoggingConfigurationCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    kinesis_data_firehose: awsInstanceLoggingConfigurationKinesisDataFirehosePropertyToTerraform(struct!.kinesisDataFirehose),
    s3: awsInstanceLoggingConfigurationS3PropertyToTerraform(struct!.s3),
  }
}


export function awsInstanceLoggingConfigurationAccessLogsPropertyToHclTerraform(struct?: AwsInstanceLoggingConfiguration.AccessLogsPropertyOutputReference | AwsInstanceLoggingConfiguration.AccessLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_trust_context: {
      value: cdktn.booleanToHclTerraform(struct!.includeTrustContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_version: {
      value: cdktn.stringToHclTerraform(struct!.logVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logs: {
      value: awsInstanceLoggingConfigurationCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogsPropertyList",
    },
    kinesis_data_firehose: {
      value: awsInstanceLoggingConfigurationKinesisDataFirehosePropertyToHclTerraform(struct!.kinesisDataFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisDataFirehosePropertyList",
    },
    s3: {
      value: awsInstanceLoggingConfigurationS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsInstanceLoggingConfiguration {
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled AwsInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group AwsInstanceLoggingConfiguration#log_group}
  */
  readonly logGroup?: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface KinesisDataFirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream AwsInstanceLoggingConfiguration#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled AwsInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}
export class KinesisDataFirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisDataFirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisDataFirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name AwsInstanceLoggingConfiguration#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner AwsInstanceLoggingConfiguration#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled AwsInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix AwsInstanceLoggingConfiguration#prefix}
  */
  readonly prefix?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketOwner = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketOwner = value.bucketOwner;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AccessLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context AwsInstanceLoggingConfiguration#include_trust_context}
  */
  readonly includeTrustContext?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version AwsInstanceLoggingConfiguration#log_version}
  */
  readonly logVersion?: string;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#cloudwatch_logs AwsInstanceLoggingConfiguration#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CloudwatchLogsProperty;
  /**
  * kinesis_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#kinesis_data_firehose AwsInstanceLoggingConfiguration#kinesis_data_firehose}
  */
  readonly kinesisDataFirehose?: KinesisDataFirehoseProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedaccess_instance_logging_configuration#s3 AwsInstanceLoggingConfiguration#s3}
  */
  readonly s3?: S3Property;
}
export class AccessLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeTrustContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTrustContext = this._includeTrustContext;
    }
    if (this._logVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.logVersion = this._logVersion;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._kinesisDataFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataFirehose = this._kinesisDataFirehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeTrustContext = undefined;
      this._logVersion = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._kinesisDataFirehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeTrustContext = value.includeTrustContext;
      this._logVersion = value.logVersion;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._kinesisDataFirehose.internalValue = value.kinesisDataFirehose;
      this._s3.internalValue = value.s3;
    }
  }

  // include_trust_context - computed: true, optional: true, required: false
  private _includeTrustContext?: boolean | cdktn.IResolvable; 
  public get includeTrustContext() {
    return this.getBooleanAttribute('include_trust_context');
  }
  public set includeTrustContext(value: boolean | cdktn.IResolvable) {
    this._includeTrustContext = value;
  }
  public resetIncludeTrustContext() {
    this._includeTrustContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTrustContextInput() {
    return this._includeTrustContext;
  }

  // log_version - computed: true, optional: true, required: false
  private _logVersion?: string; 
  public get logVersion() {
    return this.getStringAttribute('log_version');
  }
  public set logVersion(value: string) {
    this._logVersion = value;
  }
  public resetLogVersion() {
    this._logVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logVersionInput() {
    return this._logVersion;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new CloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: CloudwatchLogsProperty) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // kinesis_data_firehose - computed: false, optional: true, required: false
  private _kinesisDataFirehose = new KinesisDataFirehosePropertyOutputReference(this, "kinesis_data_firehose");
  public get kinesisDataFirehose() {
    return this._kinesisDataFirehose;
  }
  public putKinesisDataFirehose(value: KinesisDataFirehoseProperty) {
    this._kinesisDataFirehose.internalValue = value;
  }
  public resetKinesisDataFirehose() {
    this._kinesisDataFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataFirehoseInput() {
    return this._kinesisDataFirehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
}
