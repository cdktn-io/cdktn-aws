// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCleanroomsMembershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#collaboration_id AwsCleanroomsMembership#collaboration_id}
  */
  readonly collaborationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#query_log_status AwsCleanroomsMembership#query_log_status}
  */
  readonly queryLogStatus: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#region AwsCleanroomsMembership#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#tags AwsCleanroomsMembership#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * default_result_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#default_result_configuration AwsCleanroomsMembership#default_result_configuration}
  */
  readonly defaultResultConfiguration?: AwsCleanroomsMembership.DefaultResultConfigurationProperty[] | cdktn.IResolvable;
  /**
  * payment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#payment_configuration AwsCleanroomsMembership#payment_configuration}
  */
  readonly paymentConfiguration?: AwsCleanroomsMembership.PaymentConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership}
*/
export class AwsCleanroomsMembership extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cleanrooms_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCleanroomsMembership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCleanroomsMembership to import
  * @param importFromId The id of the existing AwsCleanroomsMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCleanroomsMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cleanrooms_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCleanroomsMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCleanroomsMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cleanrooms_membership',
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
    this._collaborationId = config.collaborationId;
    this._queryLogStatus = config.queryLogStatus;
    this._region = config.region;
    this._tags = config.tags;
    this._defaultResultConfiguration.internalValue = config.defaultResultConfiguration;
    this._paymentConfiguration.internalValue = config.paymentConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collaboration_arn - computed: true, optional: false, required: false
  public get collaborationArn() {
    return this.getStringAttribute('collaboration_arn');
  }

  // collaboration_creator_account_id - computed: true, optional: false, required: false
  public get collaborationCreatorAccountId() {
    return this.getStringAttribute('collaboration_creator_account_id');
  }

  // collaboration_creator_display_name - computed: true, optional: false, required: false
  public get collaborationCreatorDisplayName() {
    return this.getStringAttribute('collaboration_creator_display_name');
  }

  // collaboration_id - computed: false, optional: false, required: true
  private _collaborationId?: string; 
  public get collaborationId() {
    return this.getStringAttribute('collaboration_id');
  }
  public set collaborationId(value: string) {
    this._collaborationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationIdInput() {
    return this._collaborationId;
  }

  // collaboration_name - computed: true, optional: false, required: false
  public get collaborationName() {
    return this.getStringAttribute('collaboration_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_abilities - computed: true, optional: false, required: false
  public get memberAbilities() {
    return this.getListAttribute('member_abilities');
  }

  // query_log_status - computed: false, optional: false, required: true
  private _queryLogStatus?: string; 
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }
  public set queryLogStatus(value: string) {
    this._queryLogStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogStatusInput() {
    return this._queryLogStatus;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // default_result_configuration - computed: false, optional: true, required: false
  private _defaultResultConfiguration = new AwsCleanroomsMembership.DefaultResultConfigurationPropertyList(this, "default_result_configuration", false);
  public get defaultResultConfiguration() {
    return this._defaultResultConfiguration;
  }
  public putDefaultResultConfiguration(value: AwsCleanroomsMembership.DefaultResultConfigurationProperty[] | cdktn.IResolvable) {
    this._defaultResultConfiguration.internalValue = value;
  }
  public resetDefaultResultConfiguration() {
    this._defaultResultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultConfigurationInput() {
    return this._defaultResultConfiguration.internalValue;
  }

  // payment_configuration - computed: false, optional: true, required: false
  private _paymentConfiguration = new AwsCleanroomsMembership.PaymentConfigurationPropertyList(this, "payment_configuration", false);
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }
  public putPaymentConfiguration(value: AwsCleanroomsMembership.PaymentConfigurationProperty[] | cdktn.IResolvable) {
    this._paymentConfiguration.internalValue = value;
  }
  public resetPaymentConfiguration() {
    this._paymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentConfigurationInput() {
    return this._paymentConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collaboration_id: cdktn.stringToTerraform(this._collaborationId),
      query_log_status: cdktn.stringToTerraform(this._queryLogStatus),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      default_result_configuration: cdktn.listMapper(awsCleanroomsMembershipDefaultResultConfigurationPropertyToTerraform, true)(this._defaultResultConfiguration.internalValue),
      payment_configuration: cdktn.listMapper(awsCleanroomsMembershipPaymentConfigurationPropertyToTerraform, true)(this._paymentConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collaboration_id: {
        value: cdktn.stringToHclTerraform(this._collaborationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_log_status: {
        value: cdktn.stringToHclTerraform(this._queryLogStatus),
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
      default_result_configuration: {
        value: cdktn.listMapperHcl(awsCleanroomsMembershipDefaultResultConfigurationPropertyToHclTerraform, true)(this._defaultResultConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCleanroomsMembership.DefaultResultConfigurationPropertyList",
      },
      payment_configuration: {
        value: cdktn.listMapperHcl(awsCleanroomsMembershipPaymentConfigurationPropertyToHclTerraform, true)(this._paymentConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCleanroomsMembership.PaymentConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCleanroomsMembershipS3PropertyToTerraform(struct?: AwsCleanroomsMembership.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    result_format: cdktn.stringToTerraform(struct!.resultFormat),
  }
}


export function awsCleanroomsMembershipS3PropertyToHclTerraform(struct?: AwsCleanroomsMembership.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
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
    result_format: {
      value: cdktn.stringToHclTerraform(struct!.resultFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCleanroomsMembershipOutputConfigurationPropertyToTerraform(struct?: AwsCleanroomsMembership.OutputConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cdktn.listMapper(awsCleanroomsMembershipS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsCleanroomsMembershipOutputConfigurationPropertyToHclTerraform(struct?: AwsCleanroomsMembership.OutputConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cdktn.listMapperHcl(awsCleanroomsMembershipS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCleanroomsMembershipDefaultResultConfigurationPropertyToTerraform(struct?: AwsCleanroomsMembership.DefaultResultConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    output_configuration: cdktn.listMapper(awsCleanroomsMembershipOutputConfigurationPropertyToTerraform, true)(struct!.outputConfiguration),
  }
}


export function awsCleanroomsMembershipDefaultResultConfigurationPropertyToHclTerraform(struct?: AwsCleanroomsMembership.DefaultResultConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_configuration: {
      value: cdktn.listMapperHcl(awsCleanroomsMembershipOutputConfigurationPropertyToHclTerraform, true)(struct!.outputConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OutputConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCleanroomsMembershipQueryComputePropertyToTerraform(struct?: AwsCleanroomsMembership.QueryComputeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function awsCleanroomsMembershipQueryComputePropertyToHclTerraform(struct?: AwsCleanroomsMembership.QueryComputeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCleanroomsMembershipPaymentConfigurationPropertyToTerraform(struct?: AwsCleanroomsMembership.PaymentConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_compute: cdktn.listMapper(awsCleanroomsMembershipQueryComputePropertyToTerraform, true)(struct!.queryCompute),
  }
}


export function awsCleanroomsMembershipPaymentConfigurationPropertyToHclTerraform(struct?: AwsCleanroomsMembership.PaymentConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_compute: {
      value: cdktn.listMapperHcl(awsCleanroomsMembershipQueryComputePropertyToHclTerraform, true)(struct!.queryCompute),
      isBlock: true,
      type: "list",
      storageClassType: "QueryComputePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCleanroomsMembership {
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#bucket AwsCleanroomsMembership#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#key_prefix AwsCleanroomsMembership#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#result_format AwsCleanroomsMembership#result_format}
  */
  readonly resultFormat: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._resultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultFormat = this._resultFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._resultFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._resultFormat = value.resultFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // result_format - computed: false, optional: false, required: true
  private _resultFormat?: string; 
  public get resultFormat() {
    return this.getStringAttribute('result_format');
  }
  public set resultFormat(value: string) {
    this._resultFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFormatInput() {
    return this._resultFormat;
  }
}

export class S3PropertyList extends cdktn.ComplexList {
  public internalValue? : S3Property[] | cdktn.IResolvable

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
  public get(index: number): S3PropertyOutputReference {
    return new S3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputConfigurationProperty {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#s3 AwsCleanroomsMembership#s3}
  */
  readonly s3?: S3Property[] | cdktn.IResolvable;
}
export class OutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property[] | cdktn.IResolvable) {
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

export class OutputConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputConfigurationPropertyOutputReference {
    return new OutputConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultResultConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#role_arn AwsCleanroomsMembership#role_arn}
  */
  readonly roleArn?: string;
  /**
  * output_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#output_configuration AwsCleanroomsMembership#output_configuration}
  */
  readonly outputConfiguration?: OutputConfigurationProperty[] | cdktn.IResolvable;
}
export class DefaultResultConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultResultConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._outputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultResultConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._outputConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._outputConfiguration.internalValue = value.outputConfiguration;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // output_configuration - computed: false, optional: true, required: false
  private _outputConfiguration = new OutputConfigurationPropertyList(this, "output_configuration", false);
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
  public putOutputConfiguration(value: OutputConfigurationProperty[] | cdktn.IResolvable) {
    this._outputConfiguration.internalValue = value;
  }
  public resetOutputConfiguration() {
    this._outputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigurationInput() {
    return this._outputConfiguration.internalValue;
  }
}

export class DefaultResultConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultResultConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultResultConfigurationPropertyOutputReference {
    return new DefaultResultConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueryComputeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#is_responsible AwsCleanroomsMembership#is_responsible}
  */
  readonly isResponsible: boolean | cdktn.IResolvable;
}
export class QueryComputePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueryComputeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryComputeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: false, optional: false, required: true
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}

export class QueryComputePropertyList extends cdktn.ComplexList {
  public internalValue? : QueryComputeProperty[] | cdktn.IResolvable

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
  public get(index: number): QueryComputePropertyOutputReference {
    return new QueryComputePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaymentConfigurationProperty {
  /**
  * query_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cleanrooms_membership#query_compute AwsCleanroomsMembership#query_compute}
  */
  readonly queryCompute?: QueryComputeProperty[] | cdktn.IResolvable;
}
export class PaymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PaymentConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCompute = this._queryCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaymentConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryCompute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryCompute.internalValue = value.queryCompute;
    }
  }

  // query_compute - computed: false, optional: true, required: false
  private _queryCompute = new QueryComputePropertyList(this, "query_compute", false);
  public get queryCompute() {
    return this._queryCompute;
  }
  public putQueryCompute(value: QueryComputeProperty[] | cdktn.IResolvable) {
    this._queryCompute.internalValue = value;
  }
  public resetQueryCompute() {
    this._queryCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryComputeInput() {
    return this._queryCompute.internalValue;
  }
}

export class PaymentConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : PaymentConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): PaymentConfigurationPropertyOutputReference {
    return new PaymentConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
