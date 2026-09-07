// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBucketLifecycleConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#bucket AwsBucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#expected_bucket_owner AwsBucketLifecycleConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#region AwsBucketLifecycleConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#transition_default_minimum_object_size AwsBucketLifecycleConfiguration#transition_default_minimum_object_size}
  */
  readonly transitionDefaultMinimumObjectSize?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#rule AwsBucketLifecycleConfiguration#rule}
  */
  readonly rule?: AwsBucketLifecycleConfiguration.RuleProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#timeouts AwsBucketLifecycleConfiguration#timeouts}
  */
  readonly timeouts?: AwsBucketLifecycleConfiguration.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration}
*/
export class AwsBucketLifecycleConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_lifecycle_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBucketLifecycleConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBucketLifecycleConfiguration to import
  * @param importFromId The id of the existing AwsBucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBucketLifecycleConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_lifecycle_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_lifecycle_configuration',
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
    this._region = config.region;
    this._transitionDefaultMinimumObjectSize = config.transitionDefaultMinimumObjectSize;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
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

  // expected_bucket_owner - computed: true, optional: true, required: false
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

  // transition_default_minimum_object_size - computed: true, optional: true, required: false
  private _transitionDefaultMinimumObjectSize?: string; 
  public get transitionDefaultMinimumObjectSize() {
    return this.getStringAttribute('transition_default_minimum_object_size');
  }
  public set transitionDefaultMinimumObjectSize(value: string) {
    this._transitionDefaultMinimumObjectSize = value;
  }
  public resetTransitionDefaultMinimumObjectSize() {
    this._transitionDefaultMinimumObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionDefaultMinimumObjectSizeInput() {
    return this._transitionDefaultMinimumObjectSize;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new AwsBucketLifecycleConfiguration.RulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AwsBucketLifecycleConfiguration.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBucketLifecycleConfiguration.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBucketLifecycleConfiguration.TimeoutsProperty) {
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
      bucket: cdktn.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
      region: cdktn.stringToTerraform(this._region),
      transition_default_minimum_object_size: cdktn.stringToTerraform(this._transitionDefaultMinimumObjectSize),
      rule: cdktn.listMapper(awsBucketLifecycleConfigurationRulePropertyToTerraform, true)(this._rule.internalValue),
      timeouts: awsBucketLifecycleConfigurationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transition_default_minimum_object_size: {
        value: cdktn.stringToHclTerraform(this._transitionDefaultMinimumObjectSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBucketLifecycleConfiguration.RulePropertyList",
      },
      timeouts: {
        value: awsBucketLifecycleConfigurationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBucketLifecycleConfiguration.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBucketLifecycleConfigurationAbortIncompleteMultipartUploadPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function awsBucketLifecycleConfigurationAbortIncompleteMultipartUploadPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktn.numberToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationExpirationPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.ExpirationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date: cdktn.stringToTerraform(struct!.date),
    days: cdktn.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktn.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}


export function awsBucketLifecycleConfigurationExpirationPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.ExpirationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date: {
      value: cdktn.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktn.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expired_object_delete_marker: {
      value: cdktn.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationAndPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.AndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_size_greater_than: cdktn.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktn.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
  }
}


export function awsBucketLifecycleConfigurationAndPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.AndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_size_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size_less_than: {
      value: cdktn.numberToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationTagPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.TagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsBucketLifecycleConfigurationTagPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.TagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationFilterPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.FilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_size_greater_than: cdktn.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktn.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    and: cdktn.listMapper(awsBucketLifecycleConfigurationAndPropertyToTerraform, true)(struct!.and),
    tag: cdktn.listMapper(awsBucketLifecycleConfigurationTagPropertyToTerraform, true)(struct!.tag),
  }
}


export function awsBucketLifecycleConfigurationFilterPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.FilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_size_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size_less_than: {
      value: cdktn.numberToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    and: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AndPropertyList",
    },
    tag: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationTagPropertyToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "TagPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationNoncurrentVersionExpirationPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.NoncurrentVersionExpirationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
  }
}


export function awsBucketLifecycleConfigurationNoncurrentVersionExpirationPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.NoncurrentVersionExpirationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationNoncurrentVersionTransitionPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.NoncurrentVersionTransitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function awsBucketLifecycleConfigurationNoncurrentVersionTransitionPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.NoncurrentVersionTransitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationTransitionPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.TransitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date: cdktn.stringToTerraform(struct!.date),
    days: cdktn.numberToTerraform(struct!.days),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function awsBucketLifecycleConfigurationTransitionPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.TransitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date: {
      value: cdktn.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktn.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationRulePropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    status: cdktn.stringToTerraform(struct!.status),
    abort_incomplete_multipart_upload: cdktn.listMapper(awsBucketLifecycleConfigurationAbortIncompleteMultipartUploadPropertyToTerraform, true)(struct!.abortIncompleteMultipartUpload),
    expiration: cdktn.listMapper(awsBucketLifecycleConfigurationExpirationPropertyToTerraform, true)(struct!.expiration),
    filter: cdktn.listMapper(awsBucketLifecycleConfigurationFilterPropertyToTerraform, true)(struct!.filter),
    noncurrent_version_expiration: cdktn.listMapper(awsBucketLifecycleConfigurationNoncurrentVersionExpirationPropertyToTerraform, true)(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktn.listMapper(awsBucketLifecycleConfigurationNoncurrentVersionTransitionPropertyToTerraform, true)(struct!.noncurrentVersionTransition),
    transition: cdktn.listMapper(awsBucketLifecycleConfigurationTransitionPropertyToTerraform, true)(struct!.transition),
  }
}


export function awsBucketLifecycleConfigurationRulePropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    abort_incomplete_multipart_upload: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationAbortIncompleteMultipartUploadPropertyToHclTerraform, true)(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "list",
      storageClassType: "AbortIncompleteMultipartUploadPropertyList",
    },
    expiration: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationExpirationPropertyToHclTerraform, true)(struct!.expiration),
      isBlock: true,
      type: "list",
      storageClassType: "ExpirationPropertyList",
    },
    filter: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationFilterPropertyToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "FilterPropertyList",
    },
    noncurrent_version_expiration: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationNoncurrentVersionExpirationPropertyToHclTerraform, true)(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "list",
      storageClassType: "NoncurrentVersionExpirationPropertyList",
    },
    noncurrent_version_transition: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationNoncurrentVersionTransitionPropertyToHclTerraform, true)(struct!.noncurrentVersionTransition),
      isBlock: true,
      type: "set",
      storageClassType: "NoncurrentVersionTransitionPropertyList",
    },
    transition: {
      value: cdktn.listMapperHcl(awsBucketLifecycleConfigurationTransitionPropertyToHclTerraform, true)(struct!.transition),
      isBlock: true,
      type: "set",
      storageClassType: "TransitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketLifecycleConfigurationTimeoutsPropertyToTerraform(struct?: AwsBucketLifecycleConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsBucketLifecycleConfigurationTimeoutsPropertyToHclTerraform(struct?: AwsBucketLifecycleConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsBucketLifecycleConfiguration {
export interface AbortIncompleteMultipartUploadProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#days_after_initiation AwsBucketLifecycleConfiguration#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}
export class AbortIncompleteMultipartUploadPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AbortIncompleteMultipartUploadProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AbortIncompleteMultipartUploadProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: true, required: false
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}

export class AbortIncompleteMultipartUploadPropertyList extends cdktn.ComplexList {
  public internalValue? : AbortIncompleteMultipartUploadProperty[] | cdktn.IResolvable

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
  public get(index: number): AbortIncompleteMultipartUploadPropertyOutputReference {
    return new AbortIncompleteMultipartUploadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExpirationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#date AwsBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#days AwsBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#expired_object_delete_marker AwsBucketLifecycleConfiguration#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktn.IResolvable;
}
export class ExpirationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExpirationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpirationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._expiredObjectDeleteMarker = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // expired_object_delete_marker - computed: true, optional: true, required: false
  private _expiredObjectDeleteMarker?: boolean | cdktn.IResolvable; 
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
  public set expiredObjectDeleteMarker(value: boolean | cdktn.IResolvable) {
    this._expiredObjectDeleteMarker = value;
  }
  public resetExpiredObjectDeleteMarker() {
    this._expiredObjectDeleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredObjectDeleteMarkerInput() {
    return this._expiredObjectDeleteMarker;
  }
}

export class ExpirationPropertyList extends cdktn.ComplexList {
  public internalValue? : ExpirationProperty[] | cdktn.IResolvable

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
  public get(index: number): ExpirationPropertyOutputReference {
    return new ExpirationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AndProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_greater_than AwsBucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_less_than AwsBucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#prefix AwsBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#tags AwsBucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class AndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
  }

  // object_size_greater_than - computed: true, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: true, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: true, optional: true, required: false
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
}

export class AndPropertyList extends cdktn.ComplexList {
  public internalValue? : AndProperty[] | cdktn.IResolvable

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
  public get(index: number): AndPropertyOutputReference {
    return new AndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#key AwsBucketLifecycleConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#value AwsBucketLifecycleConfiguration#value}
  */
  readonly value: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TagPropertyList extends cdktn.ComplexList {
  public internalValue? : TagProperty[] | cdktn.IResolvable

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
  public get(index: number): TagPropertyOutputReference {
    return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_greater_than AwsBucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_less_than AwsBucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#prefix AwsBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#and AwsBucketLifecycleConfiguration#and}
  */
  readonly and?: AndProperty[] | cdktn.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#tag AwsBucketLifecycleConfiguration#tag}
  */
  readonly tag?: TagProperty[] | cdktn.IResolvable;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._and.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._and.internalValue = value.and;
      this._tag.internalValue = value.tag;
    }
  }

  // object_size_greater_than - computed: true, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: true, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: true, optional: true, required: false
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

  // and - computed: false, optional: true, required: false
  private _and = new AndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new TagPropertyList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: TagProperty[] | cdktn.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class FilterPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterPropertyOutputReference {
    return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoncurrentVersionExpirationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#newer_noncurrent_versions AwsBucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_days AwsBucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays: number;
}
export class NoncurrentVersionExpirationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoncurrentVersionExpirationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoncurrentVersionExpirationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: false, required: true
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }
}

export class NoncurrentVersionExpirationPropertyList extends cdktn.ComplexList {
  public internalValue? : NoncurrentVersionExpirationProperty[] | cdktn.IResolvable

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
  public get(index: number): NoncurrentVersionExpirationPropertyOutputReference {
    return new NoncurrentVersionExpirationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoncurrentVersionTransitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#newer_noncurrent_versions AwsBucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_days AwsBucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#storage_class AwsBucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}
export class NoncurrentVersionTransitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoncurrentVersionTransitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoncurrentVersionTransitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
      this._storageClass = value.storageClass;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: false, required: true
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class NoncurrentVersionTransitionPropertyList extends cdktn.ComplexList {
  public internalValue? : NoncurrentVersionTransitionProperty[] | cdktn.IResolvable

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
  public get(index: number): NoncurrentVersionTransitionPropertyOutputReference {
    return new NoncurrentVersionTransitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#date AwsBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#days AwsBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#storage_class AwsBucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}
export class TransitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._storageClass = value.storageClass;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class TransitionPropertyList extends cdktn.ComplexList {
  public internalValue? : TransitionProperty[] | cdktn.IResolvable

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
  public get(index: number): TransitionPropertyOutputReference {
    return new TransitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#id AwsBucketLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#prefix AwsBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#status AwsBucketLifecycleConfiguration#status}
  */
  readonly status: string;
  /**
  * abort_incomplete_multipart_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#abort_incomplete_multipart_upload AwsBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadProperty[] | cdktn.IResolvable;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#expiration AwsBucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: ExpirationProperty[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#filter AwsBucketLifecycleConfiguration#filter}
  */
  readonly filter?: FilterProperty[] | cdktn.IResolvable;
  /**
  * noncurrent_version_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_version_expiration AwsBucketLifecycleConfiguration#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: NoncurrentVersionExpirationProperty[] | cdktn.IResolvable;
  /**
  * noncurrent_version_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_version_transition AwsBucketLifecycleConfiguration#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: NoncurrentVersionTransitionProperty[] | cdktn.IResolvable;
  /**
  * transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#transition AwsBucketLifecycleConfiguration#transition}
  */
  readonly transition?: TransitionProperty[] | cdktn.IResolvable;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
    }
    if (this._noncurrentVersionTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._status = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionTransition.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._status = value.status;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
      this._transition.internalValue = value.transition;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new AbortIncompleteMultipartUploadPropertyList(this, "abort_incomplete_multipart_upload", false);
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: AbortIncompleteMultipartUploadProperty[] | cdktn.IResolvable) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new ExpirationPropertyList(this, "expiration", false);
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: ExpirationProperty[] | cdktn.IResolvable) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new FilterPropertyList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: FilterProperty[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // noncurrent_version_expiration - computed: false, optional: true, required: false
  private _noncurrentVersionExpiration = new NoncurrentVersionExpirationPropertyList(this, "noncurrent_version_expiration", false);
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: NoncurrentVersionExpirationProperty[] | cdktn.IResolvable) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }

  // noncurrent_version_transition - computed: false, optional: true, required: false
  private _noncurrentVersionTransition = new NoncurrentVersionTransitionPropertyList(this, "noncurrent_version_transition", true);
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }
  public putNoncurrentVersionTransition(value: NoncurrentVersionTransitionProperty[] | cdktn.IResolvable) {
    this._noncurrentVersionTransition.internalValue = value;
  }
  public resetNoncurrentVersionTransition() {
    this._noncurrentVersionTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionInput() {
    return this._noncurrentVersionTransition.internalValue;
  }

  // transition - computed: false, optional: true, required: false
  private _transition = new TransitionPropertyList(this, "transition", true);
  public get transition() {
    return this._transition;
  }
  public putTransition(value: TransitionProperty[] | cdktn.IResolvable) {
    this._transition.internalValue = value;
  }
  public resetTransition() {
    this._transition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition.internalValue;
  }
}

export class RulePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleProperty[] | cdktn.IResolvable

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
  public get(index: number): RulePropertyOutputReference {
    return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#create AwsBucketLifecycleConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_lifecycle_configuration#update AwsBucketLifecycleConfiguration#update}
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
}
