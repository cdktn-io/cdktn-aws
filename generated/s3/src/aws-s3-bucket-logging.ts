// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsS3BucketLoggingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#bucket AwsS3BucketLogging#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#expected_bucket_owner AwsS3BucketLogging#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#id AwsS3BucketLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#region AwsS3BucketLogging#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#target_bucket AwsS3BucketLogging#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#target_prefix AwsS3BucketLogging#target_prefix}
  */
  readonly targetPrefix: string;
  /**
  * target_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#target_grant AwsS3BucketLogging#target_grant}
  */
  readonly targetGrant?: AwsS3BucketLogging.TargetGrantProperty[] | cdktn.IResolvable;
  /**
  * target_object_key_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#target_object_key_format AwsS3BucketLogging#target_object_key_format}
  */
  readonly targetObjectKeyFormat?: AwsS3BucketLogging.TargetObjectKeyFormatProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}
*/
export class AwsS3BucketLogging extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsS3BucketLogging resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsS3BucketLogging to import
  * @param importFromId The id of the existing AwsS3BucketLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsS3BucketLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsS3BucketLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: AwsS3BucketLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_logging',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._region = config.region;
    this._targetBucket = config.targetBucket;
    this._targetPrefix = config.targetPrefix;
    this._targetGrant.internalValue = config.targetGrant;
    this._targetObjectKeyFormat.internalValue = config.targetObjectKeyFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
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

  // target_bucket - computed: false, optional: false, required: true
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_prefix - computed: false, optional: false, required: true
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }

  // target_grant - computed: false, optional: true, required: false
  private _targetGrant = new AwsS3BucketLogging.TargetGrantPropertyList(this, "target_grant", true);
  public get targetGrant() {
    return this._targetGrant;
  }
  public putTargetGrant(value: AwsS3BucketLogging.TargetGrantProperty[] | cdktn.IResolvable) {
    this._targetGrant.internalValue = value;
  }
  public resetTargetGrant() {
    this._targetGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGrantInput() {
    return this._targetGrant.internalValue;
  }

  // target_object_key_format - computed: false, optional: true, required: false
  private _targetObjectKeyFormat = new AwsS3BucketLogging.TargetObjectKeyFormatPropertyOutputReference(this, "target_object_key_format");
  public get targetObjectKeyFormat() {
    return this._targetObjectKeyFormat;
  }
  public putTargetObjectKeyFormat(value: AwsS3BucketLogging.TargetObjectKeyFormatProperty) {
    this._targetObjectKeyFormat.internalValue = value;
  }
  public resetTargetObjectKeyFormat() {
    this._targetObjectKeyFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectKeyFormatInput() {
    return this._targetObjectKeyFormat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      target_bucket: cdktn.stringToTerraform(this._targetBucket),
      target_prefix: cdktn.stringToTerraform(this._targetPrefix),
      target_grant: cdktn.listMapper(awsS3BucketLoggingTargetGrantPropertyToTerraform, true)(this._targetGrant.internalValue),
      target_object_key_format: awsS3BucketLoggingTargetObjectKeyFormatPropertyToTerraform(this._targetObjectKeyFormat.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_bucket_owner: {
        value: cdktn.stringToHclTerraform(this._expectedBucketOwner),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_bucket: {
        value: cdktn.stringToHclTerraform(this._targetBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_prefix: {
        value: cdktn.stringToHclTerraform(this._targetPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_grant: {
        value: cdktn.listMapperHcl(awsS3BucketLoggingTargetGrantPropertyToHclTerraform, true)(this._targetGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsS3BucketLogging.TargetGrantPropertyList",
      },
      target_object_key_format: {
        value: awsS3BucketLoggingTargetObjectKeyFormatPropertyToHclTerraform(this._targetObjectKeyFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3BucketLogging.TargetObjectKeyFormatPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsS3BucketLoggingGranteePropertyToTerraform(struct?: AwsS3BucketLogging.GranteePropertyOutputReference | AwsS3BucketLogging.GranteeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email_address: cdktn.stringToTerraform(struct!.emailAddress),
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsS3BucketLoggingGranteePropertyToHclTerraform(struct?: AwsS3BucketLogging.GranteePropertyOutputReference | AwsS3BucketLogging.GranteeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email_address: {
      value: cdktn.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketLoggingTargetGrantPropertyToTerraform(struct?: AwsS3BucketLogging.TargetGrantProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
    grantee: awsS3BucketLoggingGranteePropertyToTerraform(struct!.grantee),
  }
}


export function awsS3BucketLoggingTargetGrantPropertyToHclTerraform(struct?: AwsS3BucketLogging.TargetGrantProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grantee: {
      value: awsS3BucketLoggingGranteePropertyToHclTerraform(struct!.grantee),
      isBlock: true,
      type: "list",
      storageClassType: "GranteePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketLoggingPartitionedPrefixPropertyToTerraform(struct?: AwsS3BucketLogging.PartitionedPrefixPropertyOutputReference | AwsS3BucketLogging.PartitionedPrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_date_source: cdktn.stringToTerraform(struct!.partitionDateSource),
  }
}


export function awsS3BucketLoggingPartitionedPrefixPropertyToHclTerraform(struct?: AwsS3BucketLogging.PartitionedPrefixPropertyOutputReference | AwsS3BucketLogging.PartitionedPrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_date_source: {
      value: cdktn.stringToHclTerraform(struct!.partitionDateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketLoggingSimplePrefixPropertyToTerraform(struct?: AwsS3BucketLogging.SimplePrefixPropertyOutputReference | AwsS3BucketLogging.SimplePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsS3BucketLoggingSimplePrefixPropertyToHclTerraform(struct?: AwsS3BucketLogging.SimplePrefixPropertyOutputReference | AwsS3BucketLogging.SimplePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsS3BucketLoggingTargetObjectKeyFormatPropertyToTerraform(struct?: AwsS3BucketLogging.TargetObjectKeyFormatPropertyOutputReference | AwsS3BucketLogging.TargetObjectKeyFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partitioned_prefix: awsS3BucketLoggingPartitionedPrefixPropertyToTerraform(struct!.partitionedPrefix),
    simple_prefix: awsS3BucketLoggingSimplePrefixPropertyToTerraform(struct!.simplePrefix),
  }
}


export function awsS3BucketLoggingTargetObjectKeyFormatPropertyToHclTerraform(struct?: AwsS3BucketLogging.TargetObjectKeyFormatPropertyOutputReference | AwsS3BucketLogging.TargetObjectKeyFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partitioned_prefix: {
      value: awsS3BucketLoggingPartitionedPrefixPropertyToHclTerraform(struct!.partitionedPrefix),
      isBlock: true,
      type: "list",
      storageClassType: "PartitionedPrefixPropertyList",
    },
    simple_prefix: {
      value: awsS3BucketLoggingSimplePrefixPropertyToHclTerraform(struct!.simplePrefix),
      isBlock: true,
      type: "list",
      storageClassType: "SimplePrefixPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsS3BucketLogging {
export interface GranteeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#email_address AwsS3BucketLogging#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#id AwsS3BucketLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#type AwsS3BucketLogging#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#uri AwsS3BucketLogging#uri}
  */
  readonly uri?: string;
}
export class GranteePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GranteeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GranteeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailAddress = undefined;
      this._id = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailAddress = value.emailAddress;
      this._id = value.id;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TargetGrantProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#permission AwsS3BucketLogging#permission}
  */
  readonly permission: string;
  /**
  * grantee block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#grantee AwsS3BucketLogging#grantee}
  */
  readonly grantee: GranteeProperty;
}
export class TargetGrantPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetGrantProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._grantee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantee = this._grantee?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGrantProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._grantee.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._grantee.internalValue = value.grantee;
    }
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // grantee - computed: false, optional: false, required: true
  private _grantee = new GranteePropertyOutputReference(this, "grantee");
  public get grantee() {
    return this._grantee;
  }
  public putGrantee(value: GranteeProperty) {
    this._grantee.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee.internalValue;
  }
}

export class TargetGrantPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetGrantProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetGrantPropertyOutputReference {
    return new TargetGrantPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PartitionedPrefixProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#partition_date_source AwsS3BucketLogging#partition_date_source}
  */
  readonly partitionDateSource: string;
}
export class PartitionedPrefixPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PartitionedPrefixProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionDateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionDateSource = this._partitionDateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionedPrefixProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionDateSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionDateSource = value.partitionDateSource;
    }
  }

  // partition_date_source - computed: false, optional: false, required: true
  private _partitionDateSource?: string; 
  public get partitionDateSource() {
    return this.getStringAttribute('partition_date_source');
  }
  public set partitionDateSource(value: string) {
    this._partitionDateSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionDateSourceInput() {
    return this._partitionDateSource;
  }
}
export interface SimplePrefixProperty {
}
export class SimplePrefixPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SimplePrefixProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SimplePrefixProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TargetObjectKeyFormatProperty {
  /**
  * partitioned_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#partitioned_prefix AwsS3BucketLogging#partitioned_prefix}
  */
  readonly partitionedPrefix?: PartitionedPrefixProperty;
  /**
  * simple_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_logging#simple_prefix AwsS3BucketLogging#simple_prefix}
  */
  readonly simplePrefix?: SimplePrefixProperty;
}
export class TargetObjectKeyFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetObjectKeyFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionedPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionedPrefix = this._partitionedPrefix?.internalValue;
    }
    if (this._simplePrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simplePrefix = this._simplePrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetObjectKeyFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionedPrefix.internalValue = undefined;
      this._simplePrefix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionedPrefix.internalValue = value.partitionedPrefix;
      this._simplePrefix.internalValue = value.simplePrefix;
    }
  }

  // partitioned_prefix - computed: false, optional: true, required: false
  private _partitionedPrefix = new PartitionedPrefixPropertyOutputReference(this, "partitioned_prefix");
  public get partitionedPrefix() {
    return this._partitionedPrefix;
  }
  public putPartitionedPrefix(value: PartitionedPrefixProperty) {
    this._partitionedPrefix.internalValue = value;
  }
  public resetPartitionedPrefix() {
    this._partitionedPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionedPrefixInput() {
    return this._partitionedPrefix.internalValue;
  }

  // simple_prefix - computed: false, optional: true, required: false
  private _simplePrefix = new SimplePrefixPropertyOutputReference(this, "simple_prefix");
  public get simplePrefix() {
    return this._simplePrefix;
  }
  public putSimplePrefix(value: SimplePrefixProperty) {
    this._simplePrefix.internalValue = value;
  }
  public resetSimplePrefix() {
    this._simplePrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simplePrefixInput() {
    return this._simplePrefix.internalValue;
  }
}
}
