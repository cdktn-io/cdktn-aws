// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCognitoLogDeliveryConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#region AwsCognitoLogDeliveryConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#user_pool_id AwsCognitoLogDeliveryConfiguration#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * log_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#log_configurations AwsCognitoLogDeliveryConfiguration#log_configurations}
  */
  readonly logConfigurations?: AwsCognitoLogDeliveryConfiguration.LogConfigurationsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration aws_cognito_log_delivery_configuration}
*/
export class AwsCognitoLogDeliveryConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_log_delivery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCognitoLogDeliveryConfiguration to import
  * @param importFromId The id of the existing AwsCognitoLogDeliveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCognitoLogDeliveryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_log_delivery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration aws_cognito_log_delivery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCognitoLogDeliveryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCognitoLogDeliveryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_log_delivery_configuration',
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
    this._userPoolId = config.userPoolId;
    this._logConfigurations.internalValue = config.logConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // log_configurations - computed: false, optional: true, required: false
  private _logConfigurations = new AwsCognitoLogDeliveryConfiguration.LogConfigurationsPropertyList(this, "log_configurations", false);
  public get logConfigurations() {
    return this._logConfigurations;
  }
  public putLogConfigurations(value: AwsCognitoLogDeliveryConfiguration.LogConfigurationsProperty[] | cdktn.IResolvable) {
    this._logConfigurations.internalValue = value;
  }
  public resetLogConfigurations() {
    this._logConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationsInput() {
    return this._logConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
      log_configurations: cdktn.listMapper(awsCognitoLogDeliveryConfigurationLogConfigurationsPropertyToTerraform, true)(this._logConfigurations.internalValue),
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
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_configurations: {
        value: cdktn.listMapperHcl(awsCognitoLogDeliveryConfigurationLogConfigurationsPropertyToHclTerraform, true)(this._logConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCognitoLogDeliveryConfiguration.LogConfigurationsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCognitoLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToTerraform(struct?: AwsCognitoLogDeliveryConfiguration.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function awsCognitoLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToHclTerraform(struct?: AwsCognitoLogDeliveryConfiguration.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCognitoLogDeliveryConfigurationFirehoseConfigurationPropertyToTerraform(struct?: AwsCognitoLogDeliveryConfiguration.FirehoseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function awsCognitoLogDeliveryConfigurationFirehoseConfigurationPropertyToHclTerraform(struct?: AwsCognitoLogDeliveryConfiguration.FirehoseConfigurationProperty | cdktn.IResolvable): any {
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


export function awsCognitoLogDeliveryConfigurationS3ConfigurationPropertyToTerraform(struct?: AwsCognitoLogDeliveryConfiguration.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
  }
}


export function awsCognitoLogDeliveryConfigurationS3ConfigurationPropertyToHclTerraform(struct?: AwsCognitoLogDeliveryConfiguration.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCognitoLogDeliveryConfigurationLogConfigurationsPropertyToTerraform(struct?: AwsCognitoLogDeliveryConfiguration.LogConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_source: cdktn.stringToTerraform(struct!.eventSource),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    cloud_watch_logs_configuration: cdktn.listMapper(awsCognitoLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToTerraform, true)(struct!.cloudWatchLogsConfiguration),
    firehose_configuration: cdktn.listMapper(awsCognitoLogDeliveryConfigurationFirehoseConfigurationPropertyToTerraform, true)(struct!.firehoseConfiguration),
    s3_configuration: cdktn.listMapper(awsCognitoLogDeliveryConfigurationS3ConfigurationPropertyToTerraform, true)(struct!.s3Configuration),
  }
}


export function awsCognitoLogDeliveryConfigurationLogConfigurationsPropertyToHclTerraform(struct?: AwsCognitoLogDeliveryConfiguration.LogConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_source: {
      value: cdktn.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_watch_logs_configuration: {
      value: cdktn.listMapperHcl(awsCognitoLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToHclTerraform, true)(struct!.cloudWatchLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudWatchLogsConfigurationPropertyList",
    },
    firehose_configuration: {
      value: cdktn.listMapperHcl(awsCognitoLogDeliveryConfigurationFirehoseConfigurationPropertyToHclTerraform, true)(struct!.firehoseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FirehoseConfigurationPropertyList",
    },
    s3_configuration: {
      value: cdktn.listMapperHcl(awsCognitoLogDeliveryConfigurationS3ConfigurationPropertyToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCognitoLogDeliveryConfiguration {
export interface CloudWatchLogsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#log_group_arn AwsCognitoLogDeliveryConfiguration#log_group_arn}
  */
  readonly logGroupArn?: string;
}
export class CloudWatchLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}

export class CloudWatchLogsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudWatchLogsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudWatchLogsConfigurationPropertyOutputReference {
    return new CloudWatchLogsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirehoseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#stream_arn AwsCognitoLogDeliveryConfiguration#stream_arn}
  */
  readonly streamArn?: string;
}
export class FirehoseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirehoseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirehoseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamArn = value.streamArn;
    }
  }

  // stream_arn - computed: false, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}

export class FirehoseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : FirehoseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): FirehoseConfigurationPropertyOutputReference {
    return new FirehoseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#bucket_arn AwsCognitoLogDeliveryConfiguration#bucket_arn}
  */
  readonly bucketArn?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
    }
  }

  // bucket_arn - computed: false, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }
}

export class S3ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ConfigurationPropertyOutputReference {
    return new S3ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#event_source AwsCognitoLogDeliveryConfiguration#event_source}
  */
  readonly eventSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#log_level AwsCognitoLogDeliveryConfiguration#log_level}
  */
  readonly logLevel: string;
  /**
  * cloud_watch_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#cloud_watch_logs_configuration AwsCognitoLogDeliveryConfiguration#cloud_watch_logs_configuration}
  */
  readonly cloudWatchLogsConfiguration?: CloudWatchLogsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * firehose_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration AwsCognitoLogDeliveryConfiguration#firehose_configuration}
  */
  readonly firehoseConfiguration?: FirehoseConfigurationProperty[] | cdktn.IResolvable;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_log_delivery_configuration#s3_configuration AwsCognitoLogDeliveryConfiguration#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty[] | cdktn.IResolvable;
}
export class LogConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._cloudWatchLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsConfiguration = this._cloudWatchLogsConfiguration?.internalValue;
    }
    if (this._firehoseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseConfiguration = this._firehoseConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSource = undefined;
      this._logLevel = undefined;
      this._cloudWatchLogsConfiguration.internalValue = undefined;
      this._firehoseConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSource = value.eventSource;
      this._logLevel = value.logLevel;
      this._cloudWatchLogsConfiguration.internalValue = value.cloudWatchLogsConfiguration;
      this._firehoseConfiguration.internalValue = value.firehoseConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // event_source - computed: false, optional: false, required: true
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // cloud_watch_logs_configuration - computed: false, optional: true, required: false
  private _cloudWatchLogsConfiguration = new CloudWatchLogsConfigurationPropertyList(this, "cloud_watch_logs_configuration", false);
  public get cloudWatchLogsConfiguration() {
    return this._cloudWatchLogsConfiguration;
  }
  public putCloudWatchLogsConfiguration(value: CloudWatchLogsConfigurationProperty[] | cdktn.IResolvable) {
    this._cloudWatchLogsConfiguration.internalValue = value;
  }
  public resetCloudWatchLogsConfiguration() {
    this._cloudWatchLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsConfigurationInput() {
    return this._cloudWatchLogsConfiguration.internalValue;
  }

  // firehose_configuration - computed: false, optional: true, required: false
  private _firehoseConfiguration = new FirehoseConfigurationPropertyList(this, "firehose_configuration", false);
  public get firehoseConfiguration() {
    return this._firehoseConfiguration;
  }
  public putFirehoseConfiguration(value: FirehoseConfigurationProperty[] | cdktn.IResolvable) {
    this._firehoseConfiguration.internalValue = value;
  }
  public resetFirehoseConfiguration() {
    this._firehoseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseConfigurationInput() {
    return this._firehoseConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class LogConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : LogConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): LogConfigurationsPropertyOutputReference {
    return new LogConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
