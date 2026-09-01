// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsS3ControlMultiRegionAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#account_id AwsS3ControlMultiRegionAccessPoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#id AwsS3ControlMultiRegionAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#region AwsS3ControlMultiRegionAccessPoint#region}
  */
  readonly region?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#details AwsS3ControlMultiRegionAccessPoint#details}
  */
  readonly details: AwsS3ControlMultiRegionAccessPoint.DetailsProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#timeouts AwsS3ControlMultiRegionAccessPoint#timeouts}
  */
  readonly timeouts?: AwsS3ControlMultiRegionAccessPoint.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point}
*/
export class AwsS3ControlMultiRegionAccessPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_multi_region_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsS3ControlMultiRegionAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsS3ControlMultiRegionAccessPoint to import
  * @param importFromId The id of the existing AwsS3ControlMultiRegionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsS3ControlMultiRegionAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_multi_region_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsS3ControlMultiRegionAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: AwsS3ControlMultiRegionAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_multi_region_access_point',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._region = config.region;
    this._details.internalValue = config.details;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // details - computed: false, optional: false, required: true
  private _details = new AwsS3ControlMultiRegionAccessPoint.DetailsPropertyOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: AwsS3ControlMultiRegionAccessPoint.DetailsProperty) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsS3ControlMultiRegionAccessPoint.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsS3ControlMultiRegionAccessPoint.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      details: awsS3ControlMultiRegionAccessPointDetailsPropertyToTerraform(this._details.internalValue),
      timeouts: awsS3ControlMultiRegionAccessPointTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
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
      details: {
        value: awsS3ControlMultiRegionAccessPointDetailsPropertyToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3ControlMultiRegionAccessPoint.DetailsPropertyList",
      },
      timeouts: {
        value: awsS3ControlMultiRegionAccessPointTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsS3ControlMultiRegionAccessPoint.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsS3ControlMultiRegionAccessPointPublicAccessBlockPropertyToTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.PublicAccessBlockPropertyOutputReference | AwsS3ControlMultiRegionAccessPoint.PublicAccessBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_public_acls: cdktn.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktn.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktn.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktn.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


export function awsS3ControlMultiRegionAccessPointPublicAccessBlockPropertyToHclTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.PublicAccessBlockPropertyOutputReference | AwsS3ControlMultiRegionAccessPoint.PublicAccessBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_public_acls: {
      value: cdktn.booleanToHclTerraform(struct!.blockPublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_public_policy: {
      value: cdktn.booleanToHclTerraform(struct!.blockPublicPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_public_acls: {
      value: cdktn.booleanToHclTerraform(struct!.ignorePublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_public_buckets: {
      value: cdktn.booleanToHclTerraform(struct!.restrictPublicBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlMultiRegionAccessPointRegionPropertyToTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.RegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_account_id: cdktn.stringToTerraform(struct!.bucketAccountId),
  }
}


export function awsS3ControlMultiRegionAccessPointRegionPropertyToHclTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.RegionProperty | cdktn.IResolvable): any {
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
    bucket_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlMultiRegionAccessPointDetailsPropertyToTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.DetailsPropertyOutputReference | AwsS3ControlMultiRegionAccessPoint.DetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    public_access_block: awsS3ControlMultiRegionAccessPointPublicAccessBlockPropertyToTerraform(struct!.publicAccessBlock),
    region: cdktn.listMapper(awsS3ControlMultiRegionAccessPointRegionPropertyToTerraform, true)(struct!.region),
  }
}


export function awsS3ControlMultiRegionAccessPointDetailsPropertyToHclTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.DetailsPropertyOutputReference | AwsS3ControlMultiRegionAccessPoint.DetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access_block: {
      value: awsS3ControlMultiRegionAccessPointPublicAccessBlockPropertyToHclTerraform(struct!.publicAccessBlock),
      isBlock: true,
      type: "list",
      storageClassType: "PublicAccessBlockPropertyList",
    },
    region: {
      value: cdktn.listMapperHcl(awsS3ControlMultiRegionAccessPointRegionPropertyToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "set",
      storageClassType: "RegionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlMultiRegionAccessPointTimeoutsPropertyToTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsS3ControlMultiRegionAccessPointTimeoutsPropertyToHclTerraform(struct?: AwsS3ControlMultiRegionAccessPoint.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsS3ControlMultiRegionAccessPoint {
export interface PublicAccessBlockProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#block_public_acls AwsS3ControlMultiRegionAccessPoint#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#block_public_policy AwsS3ControlMultiRegionAccessPoint#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#ignore_public_acls AwsS3ControlMultiRegionAccessPoint#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#restrict_public_buckets AwsS3ControlMultiRegionAccessPoint#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktn.IResolvable;
}
export class PublicAccessBlockPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PublicAccessBlockProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicAcls = this._blockPublicAcls;
    }
    if (this._blockPublicPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
    }
    if (this._ignorePublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePublicAcls = this._ignorePublicAcls;
    }
    if (this._restrictPublicBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublicAccessBlockProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockPublicAcls = undefined;
      this._blockPublicPolicy = undefined;
      this._ignorePublicAcls = undefined;
      this._restrictPublicBuckets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockPublicAcls = value.blockPublicAcls;
      this._blockPublicPolicy = value.blockPublicPolicy;
      this._ignorePublicAcls = value.ignorePublicAcls;
      this._restrictPublicBuckets = value.restrictPublicBuckets;
    }
  }

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktn.IResolvable; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean | cdktn.IResolvable) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls;
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktn.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktn.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
  }

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktn.IResolvable; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean | cdktn.IResolvable) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls;
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktn.IResolvable; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktn.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets;
  }
}
export interface RegionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#bucket AwsS3ControlMultiRegionAccessPoint#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#bucket_account_id AwsS3ControlMultiRegionAccessPoint#bucket_account_id}
  */
  readonly bucketAccountId?: string;
}
export class RegionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RegionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccountId = this._bucketAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketAccountId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketAccountId = value.bucketAccountId;
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

  // bucket_account_id - computed: true, optional: true, required: false
  private _bucketAccountId?: string; 
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }
  public set bucketAccountId(value: string) {
    this._bucketAccountId = value;
  }
  public resetBucketAccountId() {
    this._bucketAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccountIdInput() {
    return this._bucketAccountId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class RegionPropertyList extends cdktn.ComplexList {
  public internalValue? : RegionProperty[] | cdktn.IResolvable

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
  public get(index: number): RegionPropertyOutputReference {
    return new RegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#name AwsS3ControlMultiRegionAccessPoint#name}
  */
  readonly name: string;
  /**
  * public_access_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#public_access_block AwsS3ControlMultiRegionAccessPoint#public_access_block}
  */
  readonly publicAccessBlock?: PublicAccessBlockProperty;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#region AwsS3ControlMultiRegionAccessPoint#region}
  */
  readonly region: RegionProperty[] | cdktn.IResolvable;
}
export class DetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicAccessBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessBlock = this._publicAccessBlock?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._publicAccessBlock.internalValue = undefined;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._publicAccessBlock.internalValue = value.publicAccessBlock;
      this._region.internalValue = value.region;
    }
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

  // public_access_block - computed: false, optional: true, required: false
  private _publicAccessBlock = new PublicAccessBlockPropertyOutputReference(this, "public_access_block");
  public get publicAccessBlock() {
    return this._publicAccessBlock;
  }
  public putPublicAccessBlock(value: PublicAccessBlockProperty) {
    this._publicAccessBlock.internalValue = value;
  }
  public resetPublicAccessBlock() {
    this._publicAccessBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockInput() {
    return this._publicAccessBlock.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region = new RegionPropertyList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: RegionProperty[] | cdktn.IResolvable) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#create AwsS3ControlMultiRegionAccessPoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_multi_region_access_point#delete AwsS3ControlMultiRegionAccessPoint#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
