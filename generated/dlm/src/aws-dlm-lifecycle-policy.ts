// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsLifecyclePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#default_policy AwsLifecyclePolicy#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#description AwsLifecyclePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#execution_role_arn AwsLifecyclePolicy#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#id AwsLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#region AwsLifecyclePolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#state AwsLifecyclePolicy#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#tags AwsLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#tags_all AwsLifecyclePolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * policy_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#policy_details AwsLifecyclePolicy#policy_details}
  */
  readonly policyDetails: AwsLifecyclePolicy.PolicyDetailsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy}
*/
export class AwsLifecyclePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dlm_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsLifecyclePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLifecyclePolicy to import
  * @param importFromId The id of the existing AwsLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dlm_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dlm_lifecycle_policy',
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
    this._defaultPolicy = config.defaultPolicy;
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._region = config.region;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._policyDetails.internalValue = config.policyDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails = new AwsLifecyclePolicy.PolicyDetailsPropertyOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: AwsLifecyclePolicy.PolicyDetailsProperty) {
    this._policyDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policy: cdktn.stringToTerraform(this._defaultPolicy),
      description: cdktn.stringToTerraform(this._description),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      policy_details: awsLifecyclePolicyPolicyDetailsPropertyToTerraform(this._policyDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy: {
        value: cdktn.stringToHclTerraform(this._defaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      state: {
        value: cdktn.stringToHclTerraform(this._state),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      policy_details: {
        value: awsLifecyclePolicyPolicyDetailsPropertyToHclTerraform(this._policyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLifecyclePolicy.PolicyDetailsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsLifecyclePolicyEncryptionConfigurationPropertyToTerraform(struct?: AwsLifecyclePolicy.EncryptionConfigurationPropertyOutputReference | AwsLifecyclePolicy.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
  }
}


export function awsLifecyclePolicyEncryptionConfigurationPropertyToHclTerraform(struct?: AwsLifecyclePolicy.EncryptionConfigurationPropertyOutputReference | AwsLifecyclePolicy.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_arn: {
      value: cdktn.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRulePropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsActionCrossRegionCopyRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsActionCrossRegionCopyRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsActionCrossRegionCopyRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsActionCrossRegionCopyRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyCrossRegionCopyPropertyToTerraform(struct?: AwsLifecyclePolicy.CrossRegionCopyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cdktn.stringToTerraform(struct!.target),
    encryption_configuration: awsLifecyclePolicyEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
    retain_rule: awsLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRulePropertyToTerraform(struct!.retainRule),
  }
}


export function awsLifecyclePolicyCrossRegionCopyPropertyToHclTerraform(struct?: AwsLifecyclePolicy.CrossRegionCopyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: awsLifecyclePolicyEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EncryptionConfigurationPropertyList",
    },
    retain_rule: {
      value: awsLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRulePropertyToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsActionCrossRegionCopyRetainRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyActionPropertyToTerraform(struct?: AwsLifecyclePolicy.ActionPropertyOutputReference | AwsLifecyclePolicy.ActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    cross_region_copy: cdktn.listMapper(awsLifecyclePolicyCrossRegionCopyPropertyToTerraform, true)(struct!.crossRegionCopy),
  }
}


export function awsLifecyclePolicyActionPropertyToHclTerraform(struct?: AwsLifecyclePolicy.ActionPropertyOutputReference | AwsLifecyclePolicy.ActionProperty): any {
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
    cross_region_copy: {
      value: cdktn.listMapperHcl(awsLifecyclePolicyCrossRegionCopyPropertyToHclTerraform, true)(struct!.crossRegionCopy),
      isBlock: true,
      type: "set",
      storageClassType: "CrossRegionCopyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsEventSourceParametersPropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsEventSourceParametersPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsEventSourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description_regex: cdktn.stringToTerraform(struct!.descriptionRegex),
    event_type: cdktn.stringToTerraform(struct!.eventType),
    snapshot_owner: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.snapshotOwner),
  }
}


export function awsLifecyclePolicyPolicyDetailsEventSourceParametersPropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsEventSourceParametersPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsEventSourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description_regex: {
      value: cdktn.stringToHclTerraform(struct!.descriptionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_owner: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.snapshotOwner),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyEventSourcePropertyToTerraform(struct?: AwsLifecyclePolicy.EventSourcePropertyOutputReference | AwsLifecyclePolicy.EventSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: awsLifecyclePolicyPolicyDetailsEventSourceParametersPropertyToTerraform(struct!.parameters),
  }
}


export function awsLifecyclePolicyEventSourcePropertyToHclTerraform(struct?: AwsLifecyclePolicy.EventSourcePropertyOutputReference | AwsLifecyclePolicy.EventSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: awsLifecyclePolicyPolicyDetailsEventSourceParametersPropertyToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsEventSourceParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyExclusionsPropertyToTerraform(struct?: AwsLifecyclePolicy.ExclusionsPropertyOutputReference | AwsLifecyclePolicy.ExclusionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_boot_volumes: cdktn.booleanToTerraform(struct!.excludeBootVolumes),
    exclude_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.excludeTags),
    exclude_volume_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVolumeTypes),
  }
}


export function awsLifecyclePolicyExclusionsPropertyToHclTerraform(struct?: AwsLifecyclePolicy.ExclusionsPropertyOutputReference | AwsLifecyclePolicy.ExclusionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_boot_volumes: {
      value: cdktn.booleanToHclTerraform(struct!.excludeBootVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.excludeTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclude_volume_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsParametersPropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsParametersPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_boot_volume: cdktn.booleanToTerraform(struct!.excludeBootVolume),
    exclude_data_volume_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.excludeDataVolumeTags),
    no_reboot: cdktn.booleanToTerraform(struct!.noReboot),
  }
}


export function awsLifecyclePolicyPolicyDetailsParametersPropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsParametersPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_boot_volume: {
      value: cdktn.booleanToHclTerraform(struct!.excludeBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_data_volume_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.excludeDataVolumeTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_reboot: {
      value: cdktn.booleanToHclTerraform(struct!.noReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyRetentionArchiveTierPropertyToTerraform(struct?: AwsLifecyclePolicy.RetentionArchiveTierPropertyOutputReference | AwsLifecyclePolicy.RetentionArchiveTierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyRetentionArchiveTierPropertyToHclTerraform(struct?: AwsLifecyclePolicy.RetentionArchiveTierPropertyOutputReference | AwsLifecyclePolicy.RetentionArchiveTierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyArchiveRetainRulePropertyToTerraform(struct?: AwsLifecyclePolicy.ArchiveRetainRulePropertyOutputReference | AwsLifecyclePolicy.ArchiveRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_archive_tier: awsLifecyclePolicyRetentionArchiveTierPropertyToTerraform(struct!.retentionArchiveTier),
  }
}


export function awsLifecyclePolicyArchiveRetainRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.ArchiveRetainRulePropertyOutputReference | AwsLifecyclePolicy.ArchiveRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_archive_tier: {
      value: awsLifecyclePolicyRetentionArchiveTierPropertyToHclTerraform(struct!.retentionArchiveTier),
      isBlock: true,
      type: "list",
      storageClassType: "RetentionArchiveTierPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyArchiveRulePropertyToTerraform(struct?: AwsLifecyclePolicy.ArchiveRulePropertyOutputReference | AwsLifecyclePolicy.ArchiveRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    archive_retain_rule: awsLifecyclePolicyArchiveRetainRulePropertyToTerraform(struct!.archiveRetainRule),
  }
}


export function awsLifecyclePolicyArchiveRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.ArchiveRulePropertyOutputReference | AwsLifecyclePolicy.ArchiveRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    archive_retain_rule: {
      value: awsLifecyclePolicyArchiveRetainRulePropertyToHclTerraform(struct!.archiveRetainRule),
      isBlock: true,
      type: "list",
      storageClassType: "ArchiveRetainRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyScriptsPropertyToTerraform(struct?: AwsLifecyclePolicy.ScriptsPropertyOutputReference | AwsLifecyclePolicy.ScriptsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execute_operation_on_script_failure: cdktn.booleanToTerraform(struct!.executeOperationOnScriptFailure),
    execution_handler: cdktn.stringToTerraform(struct!.executionHandler),
    execution_handler_service: cdktn.stringToTerraform(struct!.executionHandlerService),
    execution_timeout: cdktn.numberToTerraform(struct!.executionTimeout),
    maximum_retry_count: cdktn.numberToTerraform(struct!.maximumRetryCount),
    stages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stages),
  }
}


export function awsLifecyclePolicyScriptsPropertyToHclTerraform(struct?: AwsLifecyclePolicy.ScriptsPropertyOutputReference | AwsLifecyclePolicy.ScriptsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execute_operation_on_script_failure: {
      value: cdktn.booleanToHclTerraform(struct!.executeOperationOnScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_handler: {
      value: cdktn.stringToHclTerraform(struct!.executionHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_handler_service: {
      value: cdktn.stringToHclTerraform(struct!.executionHandlerService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktn.numberToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_count: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyCreateRulePropertyToTerraform(struct?: AwsLifecyclePolicy.CreateRulePropertyOutputReference | AwsLifecyclePolicy.CreateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    location: cdktn.stringToTerraform(struct!.location),
    times: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.times),
    scripts: awsLifecyclePolicyScriptsPropertyToTerraform(struct!.scripts),
  }
}


export function awsLifecyclePolicyCreateRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.CreateRulePropertyOutputReference | AwsLifecyclePolicy.CreateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.times),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scripts: {
      value: awsLifecyclePolicyScriptsPropertyToHclTerraform(struct!.scripts),
      isBlock: true,
      type: "list",
      storageClassType: "ScriptsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyCrossRegionCopyRulePropertyToTerraform(struct?: AwsLifecyclePolicy.CrossRegionCopyRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    target: cdktn.stringToTerraform(struct!.target),
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
    deprecate_rule: awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyToTerraform(struct!.deprecateRule),
    retain_rule: awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyToTerraform(struct!.retainRule),
  }
}


export function awsLifecyclePolicyCrossRegionCopyRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.CrossRegionCopyRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_arn: {
      value: cdktn.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deprecate_rule: {
      value: awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyList",
    },
    retain_rule: {
      value: awsLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsScheduleDeprecateRulePropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleDeprecateRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleDeprecateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyPolicyDetailsScheduleDeprecateRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleDeprecateRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleDeprecateRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyFastRestoreRulePropertyToTerraform(struct?: AwsLifecyclePolicy.FastRestoreRulePropertyOutputReference | AwsLifecyclePolicy.FastRestoreRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyFastRestoreRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.FastRestoreRulePropertyOutputReference | AwsLifecyclePolicy.FastRestoreRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsScheduleRetainRulePropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function awsLifecyclePolicyPolicyDetailsScheduleRetainRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsScheduleRetainRulePropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsScheduleRetainRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyShareRulePropertyToTerraform(struct?: AwsLifecyclePolicy.ShareRulePropertyOutputReference | AwsLifecyclePolicy.ShareRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetAccounts),
    unshare_interval: cdktn.numberToTerraform(struct!.unshareInterval),
    unshare_interval_unit: cdktn.stringToTerraform(struct!.unshareIntervalUnit),
  }
}


export function awsLifecyclePolicyShareRulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.ShareRulePropertyOutputReference | AwsLifecyclePolicy.ShareRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unshare_interval: {
      value: cdktn.numberToHclTerraform(struct!.unshareInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unshare_interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.unshareIntervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicySchedulePropertyToTerraform(struct?: AwsLifecyclePolicy.ScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    name: cdktn.stringToTerraform(struct!.name),
    tags_to_add: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tagsToAdd),
    variable_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.variableTags),
    archive_rule: awsLifecyclePolicyArchiveRulePropertyToTerraform(struct!.archiveRule),
    create_rule: awsLifecyclePolicyCreateRulePropertyToTerraform(struct!.createRule),
    cross_region_copy_rule: cdktn.listMapper(awsLifecyclePolicyCrossRegionCopyRulePropertyToTerraform, true)(struct!.crossRegionCopyRule),
    deprecate_rule: awsLifecyclePolicyPolicyDetailsScheduleDeprecateRulePropertyToTerraform(struct!.deprecateRule),
    fast_restore_rule: awsLifecyclePolicyFastRestoreRulePropertyToTerraform(struct!.fastRestoreRule),
    retain_rule: awsLifecyclePolicyPolicyDetailsScheduleRetainRulePropertyToTerraform(struct!.retainRule),
    share_rule: awsLifecyclePolicyShareRulePropertyToTerraform(struct!.shareRule),
  }
}


export function awsLifecyclePolicySchedulePropertyToHclTerraform(struct?: AwsLifecyclePolicy.ScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_to_add: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tagsToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    variable_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.variableTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    archive_rule: {
      value: awsLifecyclePolicyArchiveRulePropertyToHclTerraform(struct!.archiveRule),
      isBlock: true,
      type: "list",
      storageClassType: "ArchiveRulePropertyList",
    },
    create_rule: {
      value: awsLifecyclePolicyCreateRulePropertyToHclTerraform(struct!.createRule),
      isBlock: true,
      type: "list",
      storageClassType: "CreateRulePropertyList",
    },
    cross_region_copy_rule: {
      value: cdktn.listMapperHcl(awsLifecyclePolicyCrossRegionCopyRulePropertyToHclTerraform, true)(struct!.crossRegionCopyRule),
      isBlock: true,
      type: "set",
      storageClassType: "CrossRegionCopyRulePropertyList",
    },
    deprecate_rule: {
      value: awsLifecyclePolicyPolicyDetailsScheduleDeprecateRulePropertyToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsScheduleDeprecateRulePropertyList",
    },
    fast_restore_rule: {
      value: awsLifecyclePolicyFastRestoreRulePropertyToHclTerraform(struct!.fastRestoreRule),
      isBlock: true,
      type: "list",
      storageClassType: "FastRestoreRulePropertyList",
    },
    retain_rule: {
      value: awsLifecyclePolicyPolicyDetailsScheduleRetainRulePropertyToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsScheduleRetainRulePropertyList",
    },
    share_rule: {
      value: awsLifecyclePolicyShareRulePropertyToHclTerraform(struct!.shareRule),
      isBlock: true,
      type: "list",
      storageClassType: "ShareRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLifecyclePolicyPolicyDetailsPropertyToTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    create_interval: cdktn.numberToTerraform(struct!.createInterval),
    extend_deletion: cdktn.booleanToTerraform(struct!.extendDeletion),
    policy_language: cdktn.stringToTerraform(struct!.policyLanguage),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
    resource_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceLocations),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    retain_interval: cdktn.numberToTerraform(struct!.retainInterval),
    target_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.targetTags),
    action: awsLifecyclePolicyActionPropertyToTerraform(struct!.action),
    event_source: awsLifecyclePolicyEventSourcePropertyToTerraform(struct!.eventSource),
    exclusions: awsLifecyclePolicyExclusionsPropertyToTerraform(struct!.exclusions),
    parameters: awsLifecyclePolicyPolicyDetailsParametersPropertyToTerraform(struct!.parameters),
    schedule: cdktn.listMapper(awsLifecyclePolicySchedulePropertyToTerraform, true)(struct!.schedule),
  }
}


export function awsLifecyclePolicyPolicyDetailsPropertyToHclTerraform(struct?: AwsLifecyclePolicy.PolicyDetailsPropertyOutputReference | AwsLifecyclePolicy.PolicyDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_interval: {
      value: cdktn.numberToHclTerraform(struct!.createInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extend_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.extendDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_language: {
      value: cdktn.stringToHclTerraform(struct!.policyLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retain_interval: {
      value: cdktn.numberToHclTerraform(struct!.retainInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.targetTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    action: {
      value: awsLifecyclePolicyActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ActionPropertyList",
    },
    event_source: {
      value: awsLifecyclePolicyEventSourcePropertyToHclTerraform(struct!.eventSource),
      isBlock: true,
      type: "list",
      storageClassType: "EventSourcePropertyList",
    },
    exclusions: {
      value: awsLifecyclePolicyExclusionsPropertyToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "ExclusionsPropertyList",
    },
    parameters: {
      value: awsLifecyclePolicyPolicyDetailsParametersPropertyToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDetailsParametersPropertyList",
    },
    schedule: {
      value: cdktn.listMapperHcl(awsLifecyclePolicySchedulePropertyToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "SchedulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsLifecyclePolicy {
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#cmk_arn AwsLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#encrypted AwsLifecyclePolicy#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmkArn = undefined;
      this._encrypted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmkArn = value.cmkArn;
      this._encrypted = value.encrypted;
    }
  }

  // cmk_arn - computed: false, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }
}
export interface PolicyDetailsActionCrossRegionCopyRetainRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}
export class PolicyDetailsActionCrossRegionCopyRetainRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsActionCrossRegionCopyRetainRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsActionCrossRegionCopyRetainRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface CrossRegionCopyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#target AwsLifecyclePolicy#target}
  */
  readonly target: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#encryption_configuration AwsLifecyclePolicy#encryption_configuration}
  */
  readonly encryptionConfiguration: EncryptionConfigurationProperty;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#retain_rule AwsLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: PolicyDetailsActionCrossRegionCopyRetainRuleProperty;
}
export class CrossRegionCopyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CrossRegionCopyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrossRegionCopyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration = new EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // retain_rule - computed: false, optional: true, required: false
  private _retainRule = new PolicyDetailsActionCrossRegionCopyRetainRulePropertyOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: PolicyDetailsActionCrossRegionCopyRetainRuleProperty) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}

export class CrossRegionCopyPropertyList extends cdktn.ComplexList {
  public internalValue? : CrossRegionCopyProperty[] | cdktn.IResolvable

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
  public get(index: number): CrossRegionCopyPropertyOutputReference {
    return new CrossRegionCopyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#name AwsLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * cross_region_copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#cross_region_copy AwsLifecyclePolicy#cross_region_copy}
  */
  readonly crossRegionCopy: CrossRegionCopyProperty[] | cdktn.IResolvable;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._crossRegionCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopy = this._crossRegionCopy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._crossRegionCopy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._crossRegionCopy.internalValue = value.crossRegionCopy;
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

  // cross_region_copy - computed: false, optional: false, required: true
  private _crossRegionCopy = new CrossRegionCopyPropertyList(this, "cross_region_copy", true);
  public get crossRegionCopy() {
    return this._crossRegionCopy;
  }
  public putCrossRegionCopy(value: CrossRegionCopyProperty[] | cdktn.IResolvable) {
    this._crossRegionCopy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyInput() {
    return this._crossRegionCopy.internalValue;
  }
}
export interface PolicyDetailsEventSourceParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#description_regex AwsLifecyclePolicy#description_regex}
  */
  readonly descriptionRegex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#event_type AwsLifecyclePolicy#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#snapshot_owner AwsLifecyclePolicy#snapshot_owner}
  */
  readonly snapshotOwner: string[];
}
export class PolicyDetailsEventSourceParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsEventSourceParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionRegex = this._descriptionRegex;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._snapshotOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotOwner = this._snapshotOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsEventSourceParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionRegex = undefined;
      this._eventType = undefined;
      this._snapshotOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionRegex = value.descriptionRegex;
      this._eventType = value.eventType;
      this._snapshotOwner = value.snapshotOwner;
    }
  }

  // description_regex - computed: false, optional: false, required: true
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // snapshot_owner - computed: false, optional: false, required: true
  private _snapshotOwner?: string[]; 
  public get snapshotOwner() {
    return cdktn.Fn.tolist(this.getListAttribute('snapshot_owner'));
  }
  public set snapshotOwner(value: string[]) {
    this._snapshotOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOwnerInput() {
    return this._snapshotOwner;
  }
}
export interface EventSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#type AwsLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#parameters AwsLifecyclePolicy#parameters}
  */
  readonly parameters: PolicyDetailsEventSourceParametersProperty;
}
export class EventSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PolicyDetailsEventSourceParametersPropertyOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PolicyDetailsEventSourceParametersProperty) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface ExclusionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes AwsLifecyclePolicy#exclude_boot_volumes}
  */
  readonly excludeBootVolumes?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclude_tags AwsLifecyclePolicy#exclude_tags}
  */
  readonly excludeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types AwsLifecyclePolicy#exclude_volume_types}
  */
  readonly excludeVolumeTypes?: string[];
}
export class ExclusionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExclusionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
    }
    if (this._excludeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags;
    }
    if (this._excludeVolumeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExclusionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeBootVolumes = undefined;
      this._excludeTags = undefined;
      this._excludeVolumeTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeBootVolumes = value.excludeBootVolumes;
      this._excludeTags = value.excludeTags;
      this._excludeVolumeTypes = value.excludeVolumeTypes;
    }
  }

  // exclude_boot_volumes - computed: false, optional: true, required: false
  private _excludeBootVolumes?: boolean | cdktn.IResolvable; 
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }
  public set excludeBootVolumes(value: boolean | cdktn.IResolvable) {
    this._excludeBootVolumes = value;
  }
  public resetExcludeBootVolumes() {
    this._excludeBootVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumesInput() {
    return this._excludeBootVolumes;
  }

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: { [key: string]: string }; 
  public get excludeTags() {
    return this.getStringMapAttribute('exclude_tags');
  }
  public set excludeTags(value: { [key: string]: string }) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // exclude_volume_types - computed: false, optional: true, required: false
  private _excludeVolumeTypes?: string[]; 
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
  public set excludeVolumeTypes(value: string[]) {
    this._excludeVolumeTypes = value;
  }
  public resetExcludeVolumeTypes() {
    this._excludeVolumeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVolumeTypesInput() {
    return this._excludeVolumeTypes;
  }
}
export interface PolicyDetailsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volume AwsLifecyclePolicy#exclude_boot_volume}
  */
  readonly excludeBootVolume?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclude_data_volume_tags AwsLifecyclePolicy#exclude_data_volume_tags}
  */
  readonly excludeDataVolumeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#no_reboot AwsLifecyclePolicy#no_reboot}
  */
  readonly noReboot?: boolean | cdktn.IResolvable;
}
export class PolicyDetailsParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolume = this._excludeBootVolume;
    }
    if (this._excludeDataVolumeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDataVolumeTags = this._excludeDataVolumeTags;
    }
    if (this._noReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReboot = this._noReboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeBootVolume = undefined;
      this._excludeDataVolumeTags = undefined;
      this._noReboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeBootVolume = value.excludeBootVolume;
      this._excludeDataVolumeTags = value.excludeDataVolumeTags;
      this._noReboot = value.noReboot;
    }
  }

  // exclude_boot_volume - computed: false, optional: true, required: false
  private _excludeBootVolume?: boolean | cdktn.IResolvable; 
  public get excludeBootVolume() {
    return this.getBooleanAttribute('exclude_boot_volume');
  }
  public set excludeBootVolume(value: boolean | cdktn.IResolvable) {
    this._excludeBootVolume = value;
  }
  public resetExcludeBootVolume() {
    this._excludeBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumeInput() {
    return this._excludeBootVolume;
  }

  // exclude_data_volume_tags - computed: false, optional: true, required: false
  private _excludeDataVolumeTags?: { [key: string]: string }; 
  public get excludeDataVolumeTags() {
    return this.getStringMapAttribute('exclude_data_volume_tags');
  }
  public set excludeDataVolumeTags(value: { [key: string]: string }) {
    this._excludeDataVolumeTags = value;
  }
  public resetExcludeDataVolumeTags() {
    this._excludeDataVolumeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDataVolumeTagsInput() {
    return this._excludeDataVolumeTags;
  }

  // no_reboot - computed: false, optional: true, required: false
  private _noReboot?: boolean | cdktn.IResolvable; 
  public get noReboot() {
    return this.getBooleanAttribute('no_reboot');
  }
  public set noReboot(value: boolean | cdktn.IResolvable) {
    this._noReboot = value;
  }
  public resetNoReboot() {
    this._noReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRebootInput() {
    return this._noReboot;
  }
}
export interface RetentionArchiveTierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#count AwsLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}
export class RetentionArchiveTierPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionArchiveTierProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionArchiveTierProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface ArchiveRetainRuleProperty {
  /**
  * retention_archive_tier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#retention_archive_tier AwsLifecyclePolicy#retention_archive_tier}
  */
  readonly retentionArchiveTier: RetentionArchiveTierProperty;
}
export class ArchiveRetainRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveRetainRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionArchiveTier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionArchiveTier = this._retentionArchiveTier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveRetainRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionArchiveTier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionArchiveTier.internalValue = value.retentionArchiveTier;
    }
  }

  // retention_archive_tier - computed: false, optional: false, required: true
  private _retentionArchiveTier = new RetentionArchiveTierPropertyOutputReference(this, "retention_archive_tier");
  public get retentionArchiveTier() {
    return this._retentionArchiveTier;
  }
  public putRetentionArchiveTier(value: RetentionArchiveTierProperty) {
    this._retentionArchiveTier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionArchiveTierInput() {
    return this._retentionArchiveTier.internalValue;
  }
}
export interface ArchiveRuleProperty {
  /**
  * archive_retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#archive_retain_rule AwsLifecyclePolicy#archive_retain_rule}
  */
  readonly archiveRetainRule: ArchiveRetainRuleProperty;
}
export class ArchiveRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetainRule = this._archiveRetainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetainRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetainRule.internalValue = value.archiveRetainRule;
    }
  }

  // archive_retain_rule - computed: false, optional: false, required: true
  private _archiveRetainRule = new ArchiveRetainRulePropertyOutputReference(this, "archive_retain_rule");
  public get archiveRetainRule() {
    return this._archiveRetainRule;
  }
  public putArchiveRetainRule(value: ArchiveRetainRuleProperty) {
    this._archiveRetainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetainRuleInput() {
    return this._archiveRetainRule.internalValue;
  }
}
export interface ScriptsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#execute_operation_on_script_failure AwsLifecyclePolicy#execute_operation_on_script_failure}
  */
  readonly executeOperationOnScriptFailure?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#execution_handler AwsLifecyclePolicy#execution_handler}
  */
  readonly executionHandler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#execution_handler_service AwsLifecyclePolicy#execution_handler_service}
  */
  readonly executionHandlerService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#execution_timeout AwsLifecyclePolicy#execution_timeout}
  */
  readonly executionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#maximum_retry_count AwsLifecyclePolicy#maximum_retry_count}
  */
  readonly maximumRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#stages AwsLifecyclePolicy#stages}
  */
  readonly stages?: string[];
}
export class ScriptsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScriptsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeOperationOnScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOperationOnScriptFailure = this._executeOperationOnScriptFailure;
    }
    if (this._executionHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandler = this._executionHandler;
    }
    if (this._executionHandlerService !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandlerService = this._executionHandlerService;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._maximumRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryCount = this._maximumRetryCount;
    }
    if (this._stages !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScriptsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeOperationOnScriptFailure = undefined;
      this._executionHandler = undefined;
      this._executionHandlerService = undefined;
      this._executionTimeout = undefined;
      this._maximumRetryCount = undefined;
      this._stages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeOperationOnScriptFailure = value.executeOperationOnScriptFailure;
      this._executionHandler = value.executionHandler;
      this._executionHandlerService = value.executionHandlerService;
      this._executionTimeout = value.executionTimeout;
      this._maximumRetryCount = value.maximumRetryCount;
      this._stages = value.stages;
    }
  }

  // execute_operation_on_script_failure - computed: true, optional: true, required: false
  private _executeOperationOnScriptFailure?: boolean | cdktn.IResolvable; 
  public get executeOperationOnScriptFailure() {
    return this.getBooleanAttribute('execute_operation_on_script_failure');
  }
  public set executeOperationOnScriptFailure(value: boolean | cdktn.IResolvable) {
    this._executeOperationOnScriptFailure = value;
  }
  public resetExecuteOperationOnScriptFailure() {
    this._executeOperationOnScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOperationOnScriptFailureInput() {
    return this._executeOperationOnScriptFailure;
  }

  // execution_handler - computed: false, optional: false, required: true
  private _executionHandler?: string; 
  public get executionHandler() {
    return this.getStringAttribute('execution_handler');
  }
  public set executionHandler(value: string) {
    this._executionHandler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerInput() {
    return this._executionHandler;
  }

  // execution_handler_service - computed: true, optional: true, required: false
  private _executionHandlerService?: string; 
  public get executionHandlerService() {
    return this.getStringAttribute('execution_handler_service');
  }
  public set executionHandlerService(value: string) {
    this._executionHandlerService = value;
  }
  public resetExecutionHandlerService() {
    this._executionHandlerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerServiceInput() {
    return this._executionHandlerService;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: number; 
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }
  public set executionTimeout(value: number) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // maximum_retry_count - computed: true, optional: true, required: false
  private _maximumRetryCount?: number; 
  public get maximumRetryCount() {
    return this.getNumberAttribute('maximum_retry_count');
  }
  public set maximumRetryCount(value: number) {
    this._maximumRetryCount = value;
  }
  public resetMaximumRetryCount() {
    this._maximumRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryCountInput() {
    return this._maximumRetryCount;
  }

  // stages - computed: false, optional: true, required: false
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }
}
export interface CreateRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#cron_expression AwsLifecyclePolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#location AwsLifecyclePolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#times AwsLifecyclePolicy#times}
  */
  readonly times?: string[];
  /**
  * scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#scripts AwsLifecyclePolicy#scripts}
  */
  readonly scripts?: ScriptsProperty;
}
export class CreateRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CreateRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    if (this._scripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
      this._location = undefined;
      this._times = undefined;
      this._scripts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
      this._location = value.location;
      this._times = value.times;
      this._scripts.internalValue = value.scripts;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // times - computed: true, optional: true, required: false
  private _times?: string[]; 
  public get times() {
    return this.getListAttribute('times');
  }
  public set times(value: string[]) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts = new ScriptsPropertyOutputReference(this, "scripts");
  public get scripts() {
    return this._scripts;
  }
  public putScripts(value: ScriptsProperty) {
    this._scripts.internalValue = value;
  }
  public resetScripts() {
    this._scripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts.internalValue;
  }
}
export interface PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}
export class PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}
export class PolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface CrossRegionCopyRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#cmk_arn AwsLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#copy_tags AwsLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#encrypted AwsLifecyclePolicy#encrypted}
  */
  readonly encrypted: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#target AwsLifecyclePolicy#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#target_region AwsLifecyclePolicy#target_region}
  */
  readonly targetRegion?: string;
  /**
  * deprecate_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#deprecate_rule AwsLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#retain_rule AwsLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty;
}
export class CrossRegionCopyRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CrossRegionCopyRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrossRegionCopyRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkArn = undefined;
      this._copyTags = undefined;
      this._encrypted = undefined;
      this._target = undefined;
      this._targetRegion = undefined;
      this._deprecateRule.internalValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkArn = value.cmkArn;
      this._copyTags = value.copyTags;
      this._encrypted = value.encrypted;
      this._target = value.target;
      this._targetRegion = value.targetRegion;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // cmk_arn - computed: false, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_region - computed: false, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // deprecate_rule - computed: false, optional: true, required: false
  private _deprecateRule = new PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRulePropertyOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: PolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleProperty) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
  }

  // retain_rule - computed: false, optional: true, required: false
  private _retainRule = new PolicyDetailsScheduleCrossRegionCopyRuleRetainRulePropertyOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: PolicyDetailsScheduleCrossRegionCopyRuleRetainRuleProperty) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}

export class CrossRegionCopyRulePropertyList extends cdktn.ComplexList {
  public internalValue? : CrossRegionCopyRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): CrossRegionCopyRulePropertyOutputReference {
    return new CrossRegionCopyRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsScheduleDeprecateRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#count AwsLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}
export class PolicyDetailsScheduleDeprecateRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsScheduleDeprecateRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsScheduleDeprecateRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface FastRestoreRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#availability_zones AwsLifecyclePolicy#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#count AwsLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}
export class FastRestoreRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastRestoreRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastRestoreRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface PolicyDetailsScheduleRetainRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#count AwsLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval AwsLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#interval_unit AwsLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}
export class PolicyDetailsScheduleRetainRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsScheduleRetainRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsScheduleRetainRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface ShareRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#target_accounts AwsLifecyclePolicy#target_accounts}
  */
  readonly targetAccounts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#unshare_interval AwsLifecyclePolicy#unshare_interval}
  */
  readonly unshareInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#unshare_interval_unit AwsLifecyclePolicy#unshare_interval_unit}
  */
  readonly unshareIntervalUnit?: string;
}
export class ShareRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShareRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccounts = this._targetAccounts;
    }
    if (this._unshareInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareInterval = this._unshareInterval;
    }
    if (this._unshareIntervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareIntervalUnit = this._unshareIntervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShareRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAccounts = undefined;
      this._unshareInterval = undefined;
      this._unshareIntervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAccounts = value.targetAccounts;
      this._unshareInterval = value.unshareInterval;
      this._unshareIntervalUnit = value.unshareIntervalUnit;
    }
  }

  // target_accounts - computed: false, optional: false, required: true
  private _targetAccounts?: string[]; 
  public get targetAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('target_accounts'));
  }
  public set targetAccounts(value: string[]) {
    this._targetAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountsInput() {
    return this._targetAccounts;
  }

  // unshare_interval - computed: false, optional: true, required: false
  private _unshareInterval?: number; 
  public get unshareInterval() {
    return this.getNumberAttribute('unshare_interval');
  }
  public set unshareInterval(value: number) {
    this._unshareInterval = value;
  }
  public resetUnshareInterval() {
    this._unshareInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalInput() {
    return this._unshareInterval;
  }

  // unshare_interval_unit - computed: false, optional: true, required: false
  private _unshareIntervalUnit?: string; 
  public get unshareIntervalUnit() {
    return this.getStringAttribute('unshare_interval_unit');
  }
  public set unshareIntervalUnit(value: string) {
    this._unshareIntervalUnit = value;
  }
  public resetUnshareIntervalUnit() {
    this._unshareIntervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalUnitInput() {
    return this._unshareIntervalUnit;
  }
}
export interface ScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#copy_tags AwsLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#name AwsLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#tags_to_add AwsLifecyclePolicy#tags_to_add}
  */
  readonly tagsToAdd?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#variable_tags AwsLifecyclePolicy#variable_tags}
  */
  readonly variableTags?: { [key: string]: string };
  /**
  * archive_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#archive_rule AwsLifecyclePolicy#archive_rule}
  */
  readonly archiveRule?: ArchiveRuleProperty;
  /**
  * create_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#create_rule AwsLifecyclePolicy#create_rule}
  */
  readonly createRule: CreateRuleProperty;
  /**
  * cross_region_copy_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_rule AwsLifecyclePolicy#cross_region_copy_rule}
  */
  readonly crossRegionCopyRule?: CrossRegionCopyRuleProperty[] | cdktn.IResolvable;
  /**
  * deprecate_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#deprecate_rule AwsLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: PolicyDetailsScheduleDeprecateRuleProperty;
  /**
  * fast_restore_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#fast_restore_rule AwsLifecyclePolicy#fast_restore_rule}
  */
  readonly fastRestoreRule?: FastRestoreRuleProperty;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#retain_rule AwsLifecyclePolicy#retain_rule}
  */
  readonly retainRule: PolicyDetailsScheduleRetainRuleProperty;
  /**
  * share_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#share_rule AwsLifecyclePolicy#share_rule}
  */
  readonly shareRule?: ShareRuleProperty;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagsToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToAdd = this._tagsToAdd;
    }
    if (this._variableTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableTags = this._variableTags;
    }
    if (this._archiveRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRule = this._archiveRule?.internalValue;
    }
    if (this._createRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRule = this._createRule?.internalValue;
    }
    if (this._crossRegionCopyRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopyRule = this._crossRegionCopyRule?.internalValue;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._fastRestoreRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastRestoreRule = this._fastRestoreRule?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    if (this._shareRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareRule = this._shareRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyTags = undefined;
      this._name = undefined;
      this._tagsToAdd = undefined;
      this._variableTags = undefined;
      this._archiveRule.internalValue = undefined;
      this._createRule.internalValue = undefined;
      this._crossRegionCopyRule.internalValue = undefined;
      this._deprecateRule.internalValue = undefined;
      this._fastRestoreRule.internalValue = undefined;
      this._retainRule.internalValue = undefined;
      this._shareRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyTags = value.copyTags;
      this._name = value.name;
      this._tagsToAdd = value.tagsToAdd;
      this._variableTags = value.variableTags;
      this._archiveRule.internalValue = value.archiveRule;
      this._createRule.internalValue = value.createRule;
      this._crossRegionCopyRule.internalValue = value.crossRegionCopyRule;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._fastRestoreRule.internalValue = value.fastRestoreRule;
      this._retainRule.internalValue = value.retainRule;
      this._shareRule.internalValue = value.shareRule;
    }
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
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

  // tags_to_add - computed: false, optional: true, required: false
  private _tagsToAdd?: { [key: string]: string }; 
  public get tagsToAdd() {
    return this.getStringMapAttribute('tags_to_add');
  }
  public set tagsToAdd(value: { [key: string]: string }) {
    this._tagsToAdd = value;
  }
  public resetTagsToAdd() {
    this._tagsToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToAddInput() {
    return this._tagsToAdd;
  }

  // variable_tags - computed: false, optional: true, required: false
  private _variableTags?: { [key: string]: string }; 
  public get variableTags() {
    return this.getStringMapAttribute('variable_tags');
  }
  public set variableTags(value: { [key: string]: string }) {
    this._variableTags = value;
  }
  public resetVariableTags() {
    this._variableTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTagsInput() {
    return this._variableTags;
  }

  // archive_rule - computed: false, optional: true, required: false
  private _archiveRule = new ArchiveRulePropertyOutputReference(this, "archive_rule");
  public get archiveRule() {
    return this._archiveRule;
  }
  public putArchiveRule(value: ArchiveRuleProperty) {
    this._archiveRule.internalValue = value;
  }
  public resetArchiveRule() {
    this._archiveRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRuleInput() {
    return this._archiveRule.internalValue;
  }

  // create_rule - computed: false, optional: false, required: true
  private _createRule = new CreateRulePropertyOutputReference(this, "create_rule");
  public get createRule() {
    return this._createRule;
  }
  public putCreateRule(value: CreateRuleProperty) {
    this._createRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createRuleInput() {
    return this._createRule.internalValue;
  }

  // cross_region_copy_rule - computed: false, optional: true, required: false
  private _crossRegionCopyRule = new CrossRegionCopyRulePropertyList(this, "cross_region_copy_rule", true);
  public get crossRegionCopyRule() {
    return this._crossRegionCopyRule;
  }
  public putCrossRegionCopyRule(value: CrossRegionCopyRuleProperty[] | cdktn.IResolvable) {
    this._crossRegionCopyRule.internalValue = value;
  }
  public resetCrossRegionCopyRule() {
    this._crossRegionCopyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyRuleInput() {
    return this._crossRegionCopyRule.internalValue;
  }

  // deprecate_rule - computed: false, optional: true, required: false
  private _deprecateRule = new PolicyDetailsScheduleDeprecateRulePropertyOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: PolicyDetailsScheduleDeprecateRuleProperty) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
  }

  // fast_restore_rule - computed: false, optional: true, required: false
  private _fastRestoreRule = new FastRestoreRulePropertyOutputReference(this, "fast_restore_rule");
  public get fastRestoreRule() {
    return this._fastRestoreRule;
  }
  public putFastRestoreRule(value: FastRestoreRuleProperty) {
    this._fastRestoreRule.internalValue = value;
  }
  public resetFastRestoreRule() {
    this._fastRestoreRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRestoreRuleInput() {
    return this._fastRestoreRule.internalValue;
  }

  // retain_rule - computed: false, optional: false, required: true
  private _retainRule = new PolicyDetailsScheduleRetainRulePropertyOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: PolicyDetailsScheduleRetainRuleProperty) {
    this._retainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // share_rule - computed: false, optional: true, required: false
  private _shareRule = new ShareRulePropertyOutputReference(this, "share_rule");
  public get shareRule() {
    return this._shareRule;
  }
  public putShareRule(value: ShareRuleProperty) {
    this._shareRule.internalValue = value;
  }
  public resetShareRule() {
    this._shareRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareRuleInput() {
    return this._shareRule.internalValue;
  }
}

export class SchedulePropertyList extends cdktn.ComplexList {
  public internalValue? : ScheduleProperty[] | cdktn.IResolvable

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
  public get(index: number): SchedulePropertyOutputReference {
    return new SchedulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#copy_tags AwsLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#create_interval AwsLifecyclePolicy#create_interval}
  */
  readonly createInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#extend_deletion AwsLifecyclePolicy#extend_deletion}
  */
  readonly extendDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#policy_language AwsLifecyclePolicy#policy_language}
  */
  readonly policyLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#policy_type AwsLifecyclePolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#resource_locations AwsLifecyclePolicy#resource_locations}
  */
  readonly resourceLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#resource_type AwsLifecyclePolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#resource_types AwsLifecyclePolicy#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#retain_interval AwsLifecyclePolicy#retain_interval}
  */
  readonly retainInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#target_tags AwsLifecyclePolicy#target_tags}
  */
  readonly targetTags?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#action AwsLifecyclePolicy#action}
  */
  readonly action?: ActionProperty;
  /**
  * event_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#event_source AwsLifecyclePolicy#event_source}
  */
  readonly eventSource?: EventSourceProperty;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#exclusions AwsLifecyclePolicy#exclusions}
  */
  readonly exclusions?: ExclusionsProperty;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#parameters AwsLifecyclePolicy#parameters}
  */
  readonly parameters?: PolicyDetailsParametersProperty;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dlm_lifecycle_policy#schedule AwsLifecyclePolicy#schedule}
  */
  readonly schedule?: ScheduleProperty[] | cdktn.IResolvable;
}
export class PolicyDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._createInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.createInterval = this._createInterval;
    }
    if (this._extendDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendDeletion = this._extendDeletion;
    }
    if (this._policyLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyLanguage = this._policyLanguage;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._resourceLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLocations = this._resourceLocations;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._retainInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainInterval = this._retainInterval;
    }
    if (this._targetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTags = this._targetTags;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._eventSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyTags = undefined;
      this._createInterval = undefined;
      this._extendDeletion = undefined;
      this._policyLanguage = undefined;
      this._policyType = undefined;
      this._resourceLocations = undefined;
      this._resourceType = undefined;
      this._resourceTypes = undefined;
      this._retainInterval = undefined;
      this._targetTags = undefined;
      this._action.internalValue = undefined;
      this._eventSource.internalValue = undefined;
      this._exclusions.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyTags = value.copyTags;
      this._createInterval = value.createInterval;
      this._extendDeletion = value.extendDeletion;
      this._policyLanguage = value.policyLanguage;
      this._policyType = value.policyType;
      this._resourceLocations = value.resourceLocations;
      this._resourceType = value.resourceType;
      this._resourceTypes = value.resourceTypes;
      this._retainInterval = value.retainInterval;
      this._targetTags = value.targetTags;
      this._action.internalValue = value.action;
      this._eventSource.internalValue = value.eventSource;
      this._exclusions.internalValue = value.exclusions;
      this._parameters.internalValue = value.parameters;
      this._schedule.internalValue = value.schedule;
    }
  }

  // copy_tags - computed: false, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // create_interval - computed: false, optional: true, required: false
  private _createInterval?: number; 
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }
  public set createInterval(value: number) {
    this._createInterval = value;
  }
  public resetCreateInterval() {
    this._createInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIntervalInput() {
    return this._createInterval;
  }

  // extend_deletion - computed: false, optional: true, required: false
  private _extendDeletion?: boolean | cdktn.IResolvable; 
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
  }
  public set extendDeletion(value: boolean | cdktn.IResolvable) {
    this._extendDeletion = value;
  }
  public resetExtendDeletion() {
    this._extendDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendDeletionInput() {
    return this._extendDeletion;
  }

  // policy_language - computed: true, optional: true, required: false
  private _policyLanguage?: string; 
  public get policyLanguage() {
    return this.getStringAttribute('policy_language');
  }
  public set policyLanguage(value: string) {
    this._policyLanguage = value;
  }
  public resetPolicyLanguage() {
    this._policyLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLanguageInput() {
    return this._policyLanguage;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // resource_locations - computed: true, optional: true, required: false
  private _resourceLocations?: string[]; 
  public get resourceLocations() {
    return this.getListAttribute('resource_locations');
  }
  public set resourceLocations(value: string[]) {
    this._resourceLocations = value;
  }
  public resetResourceLocations() {
    this._resourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLocationsInput() {
    return this._resourceLocations;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // retain_interval - computed: false, optional: true, required: false
  private _retainInterval?: number; 
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }
  public set retainInterval(value: number) {
    this._retainInterval = value;
  }
  public resetRetainInterval() {
    this._retainInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIntervalInput() {
    return this._retainInterval;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: { [key: string]: string }; 
  public get targetTags() {
    return this.getStringMapAttribute('target_tags');
  }
  public set targetTags(value: { [key: string]: string }) {
    this._targetTags = value;
  }
  public resetTargetTags() {
    this._targetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ActionProperty) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource = new EventSourcePropertyOutputReference(this, "event_source");
  public get eventSource() {
    return this._eventSource;
  }
  public putEventSource(value: EventSourceProperty) {
    this._eventSource.internalValue = value;
  }
  public resetEventSource() {
    this._eventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new ExclusionsPropertyOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: ExclusionsProperty) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PolicyDetailsParametersPropertyOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PolicyDetailsParametersProperty) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new SchedulePropertyList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ScheduleProperty[] | cdktn.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
}
