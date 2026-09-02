// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfResiliencyPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a high-level geographical location constraint for where resilience policy data can be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint TfResiliencyPolicy#data_location_constraint}
  */
  readonly dataLocationConstraint?: string;
  /**
  * The description for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#description TfResiliencyPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#name TfResiliencyPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#region TfResiliencyPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#tags TfResiliencyPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#tier TfResiliencyPolicy#tier}
  */
  readonly tier: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#policy TfResiliencyPolicy#policy}
  */
  readonly policy?: TfResiliencyPolicy.PolicyProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#timeouts TfResiliencyPolicy#timeouts}
  */
  readonly timeouts?: TfResiliencyPolicy.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy}
*/
export class TfResiliencyPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resiliencehub_resiliency_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfResiliencyPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfResiliencyPolicy to import
  * @param importFromId The id of the existing TfResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfResiliencyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resiliencehub_resiliency_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfResiliencyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TfResiliencyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resiliencehub_resiliency_policy',
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
    this._dataLocationConstraint = config.dataLocationConstraint;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tier = config.tier;
    this._policy.internalValue = config.policy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_location_constraint - computed: true, optional: true, required: false
  private _dataLocationConstraint?: string; 
  public get dataLocationConstraint() {
    return this.getStringAttribute('data_location_constraint');
  }
  public set dataLocationConstraint(value: string) {
    this._dataLocationConstraint = value;
  }
  public resetDataLocationConstraint() {
    this._dataLocationConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationConstraintInput() {
    return this._dataLocationConstraint;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // estimated_cost_tier - computed: true, optional: false, required: false
  public get estimatedCostTier() {
    return this.getStringAttribute('estimated_cost_tier');
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new TfResiliencyPolicy.PolicyPropertyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: TfResiliencyPolicy.PolicyProperty[] | cdktn.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfResiliencyPolicy.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfResiliencyPolicy.TimeoutsProperty) {
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
      data_location_constraint: cdktn.stringToTerraform(this._dataLocationConstraint),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tier: cdktn.stringToTerraform(this._tier),
      policy: cdktn.listMapper(tfResiliencyPolicyPolicyPropertyToTerraform, true)(this._policy.internalValue),
      timeouts: tfResiliencyPolicyTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_location_constraint: {
        value: cdktn.stringToHclTerraform(this._dataLocationConstraint),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktn.listMapperHcl(tfResiliencyPolicyPolicyPropertyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfResiliencyPolicy.PolicyPropertyList",
      },
      timeouts: {
        value: tfResiliencyPolicyTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfResiliencyPolicy.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfResiliencyPolicyAzPropertyToTerraform(struct?: TfResiliencyPolicy.AzProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo: cdktn.stringToTerraform(struct!.rpo),
    rto: cdktn.stringToTerraform(struct!.rto),
  }
}


export function tfResiliencyPolicyAzPropertyToHclTerraform(struct?: TfResiliencyPolicy.AzProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo: {
      value: cdktn.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktn.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfResiliencyPolicyHardwarePropertyToTerraform(struct?: TfResiliencyPolicy.HardwareProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo: cdktn.stringToTerraform(struct!.rpo),
    rto: cdktn.stringToTerraform(struct!.rto),
  }
}


export function tfResiliencyPolicyHardwarePropertyToHclTerraform(struct?: TfResiliencyPolicy.HardwareProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo: {
      value: cdktn.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktn.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfResiliencyPolicyRegionPropertyToTerraform(struct?: TfResiliencyPolicy.RegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo: cdktn.stringToTerraform(struct!.rpo),
    rto: cdktn.stringToTerraform(struct!.rto),
  }
}


export function tfResiliencyPolicyRegionPropertyToHclTerraform(struct?: TfResiliencyPolicy.RegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo: {
      value: cdktn.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktn.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfResiliencyPolicySoftwarePropertyToTerraform(struct?: TfResiliencyPolicy.SoftwareProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo: cdktn.stringToTerraform(struct!.rpo),
    rto: cdktn.stringToTerraform(struct!.rto),
  }
}


export function tfResiliencyPolicySoftwarePropertyToHclTerraform(struct?: TfResiliencyPolicy.SoftwareProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo: {
      value: cdktn.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktn.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfResiliencyPolicyPolicyPropertyToTerraform(struct?: TfResiliencyPolicy.PolicyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    az: cdktn.listMapper(tfResiliencyPolicyAzPropertyToTerraform, true)(struct!.az),
    hardware: cdktn.listMapper(tfResiliencyPolicyHardwarePropertyToTerraform, true)(struct!.hardware),
    region: cdktn.listMapper(tfResiliencyPolicyRegionPropertyToTerraform, true)(struct!.region),
    software: cdktn.listMapper(tfResiliencyPolicySoftwarePropertyToTerraform, true)(struct!.softwareAttribute),
  }
}


export function tfResiliencyPolicyPolicyPropertyToHclTerraform(struct?: TfResiliencyPolicy.PolicyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    az: {
      value: cdktn.listMapperHcl(tfResiliencyPolicyAzPropertyToHclTerraform, true)(struct!.az),
      isBlock: true,
      type: "list",
      storageClassType: "AzPropertyList",
    },
    hardware: {
      value: cdktn.listMapperHcl(tfResiliencyPolicyHardwarePropertyToHclTerraform, true)(struct!.hardware),
      isBlock: true,
      type: "list",
      storageClassType: "HardwarePropertyList",
    },
    region: {
      value: cdktn.listMapperHcl(tfResiliencyPolicyRegionPropertyToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "list",
      storageClassType: "RegionPropertyList",
    },
    software: {
      value: cdktn.listMapperHcl(tfResiliencyPolicySoftwarePropertyToHclTerraform, true)(struct!.softwareAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "SoftwarePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfResiliencyPolicyTimeoutsPropertyToTerraform(struct?: TfResiliencyPolicy.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfResiliencyPolicyTimeoutsPropertyToHclTerraform(struct?: TfResiliencyPolicy.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfResiliencyPolicy {
export interface AzProperty {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rpo TfResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rto TfResiliencyPolicy#rto}
  */
  readonly rto: string;
}
export class AzPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AzProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}

export class AzPropertyList extends cdktn.ComplexList {
  public internalValue? : AzProperty[] | cdktn.IResolvable

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
  public get(index: number): AzPropertyOutputReference {
    return new AzPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwareProperty {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rpo TfResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rto TfResiliencyPolicy#rto}
  */
  readonly rto: string;
}
export class HardwarePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HardwareProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwareProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}

export class HardwarePropertyList extends cdktn.ComplexList {
  public internalValue? : HardwareProperty[] | cdktn.IResolvable

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
  public get(index: number): HardwarePropertyOutputReference {
    return new HardwarePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegionProperty {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rpo TfResiliencyPolicy#rpo}
  */
  readonly rpo?: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rto TfResiliencyPolicy#rto}
  */
  readonly rto?: string;
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
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: true, required: false
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: true, required: false
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  public resetRto() {
    this._rto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
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
export interface SoftwareProperty {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rpo TfResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#rto TfResiliencyPolicy#rto}
  */
  readonly rto: string;
}
export class SoftwarePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SoftwareProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SoftwareProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}

export class SoftwarePropertyList extends cdktn.ComplexList {
  public internalValue? : SoftwareProperty[] | cdktn.IResolvable

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
  public get(index: number): SoftwarePropertyOutputReference {
    return new SoftwarePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyProperty {
  /**
  * az block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#az TfResiliencyPolicy#az}
  */
  readonly az?: AzProperty[] | cdktn.IResolvable;
  /**
  * hardware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#hardware TfResiliencyPolicy#hardware}
  */
  readonly hardware?: HardwareProperty[] | cdktn.IResolvable;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#region TfResiliencyPolicy#region}
  */
  readonly region?: RegionProperty[] | cdktn.IResolvable;
  /**
  * software block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#software TfResiliencyPolicy#software}
  */
  readonly softwareAttribute?: SoftwareProperty[] | cdktn.IResolvable;
}
export class PolicyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az?.internalValue;
    }
    if (this._hardware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._software?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAttribute = this._software?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az.internalValue = undefined;
      this._hardware.internalValue = undefined;
      this._region.internalValue = undefined;
      this._software.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az.internalValue = value.az;
      this._hardware.internalValue = value.hardware;
      this._region.internalValue = value.region;
      this._software.internalValue = value.softwareAttribute;
    }
  }

  // az - computed: false, optional: true, required: false
  private _az = new AzPropertyList(this, "az", false);
  public get az() {
    return this._az;
  }
  public putAz(value: AzProperty[] | cdktn.IResolvable) {
    this._az.internalValue = value;
  }
  public resetAz() {
    this._az.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az.internalValue;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware = new HardwarePropertyList(this, "hardware", false);
  public get hardware() {
    return this._hardware;
  }
  public putHardware(value: HardwareProperty[] | cdktn.IResolvable) {
    this._hardware.internalValue = value;
  }
  public resetHardware() {
    this._hardware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new RegionPropertyList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: RegionProperty[] | cdktn.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // software - computed: false, optional: true, required: false
  private _software = new SoftwarePropertyList(this, "software", false);
  public get softwareAttribute() {
    return this._software;
  }
  public putSoftwareAttribute(value: SoftwareProperty[] | cdktn.IResolvable) {
    this._software.internalValue = value;
  }
  public resetSoftwareAttribute() {
    this._software.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software.internalValue;
  }
}

export class PolicyPropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyPropertyOutputReference {
    return new PolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#create TfResiliencyPolicy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#delete TfResiliencyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehub_resiliency_policy#update TfResiliencyPolicy#update}
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
}
