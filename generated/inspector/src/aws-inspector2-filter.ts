// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfFilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#action TfFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#description TfFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#name TfFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#reason TfFilter#reason}
  */
  readonly reason?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#region TfFilter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#tags TfFilter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#filter_criteria TfFilter#filter_criteria}
  */
  readonly filterCriteria?: TfFilter.FilterCriteriaProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter aws_inspector2_filter}
*/
export class TfFilter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector2_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfFilter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfFilter to import
  * @param importFromId The id of the existing TfFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_inspector2_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter aws_inspector2_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfFilterConfig
  */
  public constructor(scope: Construct, id: string, config: TfFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector2_filter',
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
    this._action = config.action;
    this._description = config.description;
    this._name = config.name;
    this._reason = config.reason;
    this._region = config.region;
    this._tags = config.tags;
    this._filterCriteria.internalValue = config.filterCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new TfFilter.FilterCriteriaPropertyList(this, "filter_criteria", false);
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: TfFilter.FilterCriteriaProperty[] | cdktn.IResolvable) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktn.stringToTerraform(this._action),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      reason: cdktn.stringToTerraform(this._reason),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      filter_criteria: cdktn.listMapper(tfFilterFilterCriteriaPropertyToTerraform, true)(this._filterCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
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
      reason: {
        value: cdktn.stringToHclTerraform(this._reason),
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
      filter_criteria: {
        value: cdktn.listMapperHcl(tfFilterFilterCriteriaPropertyToHclTerraform, true)(this._filterCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFilter.FilterCriteriaPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfFilterAwsAccountIdPropertyToTerraform(struct?: TfFilter.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterAwsAccountIdPropertyToHclTerraform(struct?: TfFilter.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterCodeRepositoryProjectNamePropertyToTerraform(struct?: TfFilter.CodeRepositoryProjectNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterCodeRepositoryProjectNamePropertyToHclTerraform(struct?: TfFilter.CodeRepositoryProjectNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterCodeRepositoryProviderTypePropertyToTerraform(struct?: TfFilter.CodeRepositoryProviderTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterCodeRepositoryProviderTypePropertyToHclTerraform(struct?: TfFilter.CodeRepositoryProviderTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterCodeVulnerabilityDetectorNamePropertyToTerraform(struct?: TfFilter.CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterCodeVulnerabilityDetectorNamePropertyToHclTerraform(struct?: TfFilter.CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterCodeVulnerabilityDetectorTagsPropertyToTerraform(struct?: TfFilter.CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterCodeVulnerabilityDetectorTagsPropertyToHclTerraform(struct?: TfFilter.CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterCodeVulnerabilityFilePathPropertyToTerraform(struct?: TfFilter.CodeVulnerabilityFilePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterCodeVulnerabilityFilePathPropertyToHclTerraform(struct?: TfFilter.CodeVulnerabilityFilePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterComponentIdPropertyToTerraform(struct?: TfFilter.ComponentIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterComponentIdPropertyToHclTerraform(struct?: TfFilter.ComponentIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterComponentTypePropertyToTerraform(struct?: TfFilter.ComponentTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterComponentTypePropertyToHclTerraform(struct?: TfFilter.ComponentTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEc2InstanceImageIdPropertyToTerraform(struct?: TfFilter.Ec2InstanceImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEc2InstanceImageIdPropertyToHclTerraform(struct?: TfFilter.Ec2InstanceImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEc2InstanceSubnetIdPropertyToTerraform(struct?: TfFilter.Ec2InstanceSubnetIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEc2InstanceSubnetIdPropertyToHclTerraform(struct?: TfFilter.Ec2InstanceSubnetIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEc2InstanceVpcIdPropertyToTerraform(struct?: TfFilter.Ec2InstanceVpcIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEc2InstanceVpcIdPropertyToHclTerraform(struct?: TfFilter.Ec2InstanceVpcIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEcrImageArchitecturePropertyToTerraform(struct?: TfFilter.EcrImageArchitectureProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEcrImageArchitecturePropertyToHclTerraform(struct?: TfFilter.EcrImageArchitectureProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEcrImageHashPropertyToTerraform(struct?: TfFilter.EcrImageHashProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEcrImageHashPropertyToHclTerraform(struct?: TfFilter.EcrImageHashProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEcrImageInUseCountPropertyToTerraform(struct?: TfFilter.EcrImageInUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function tfFilterEcrImageInUseCountPropertyToHclTerraform(struct?: TfFilter.EcrImageInUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterEcrImageLastInUseAtPropertyToTerraform(struct?: TfFilter.EcrImageLastInUseAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterEcrImageLastInUseAtPropertyToHclTerraform(struct?: TfFilter.EcrImageLastInUseAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterEcrImagePushedAtPropertyToTerraform(struct?: TfFilter.EcrImagePushedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterEcrImagePushedAtPropertyToHclTerraform(struct?: TfFilter.EcrImagePushedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterEcrImageRegistryPropertyToTerraform(struct?: TfFilter.EcrImageRegistryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEcrImageRegistryPropertyToHclTerraform(struct?: TfFilter.EcrImageRegistryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEcrImageRepositoryNamePropertyToTerraform(struct?: TfFilter.EcrImageRepositoryNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEcrImageRepositoryNamePropertyToHclTerraform(struct?: TfFilter.EcrImageRepositoryNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEcrImageTagsPropertyToTerraform(struct?: TfFilter.EcrImageTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterEcrImageTagsPropertyToHclTerraform(struct?: TfFilter.EcrImageTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEpssScorePropertyToTerraform(struct?: TfFilter.EpssScoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function tfFilterEpssScorePropertyToHclTerraform(struct?: TfFilter.EpssScoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterExploitAvailablePropertyToTerraform(struct?: TfFilter.ExploitAvailableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterExploitAvailablePropertyToHclTerraform(struct?: TfFilter.ExploitAvailableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterFindingArnPropertyToTerraform(struct?: TfFilter.FindingArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterFindingArnPropertyToHclTerraform(struct?: TfFilter.FindingArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterFindingStatusPropertyToTerraform(struct?: TfFilter.FindingStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterFindingStatusPropertyToHclTerraform(struct?: TfFilter.FindingStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterFindingTypePropertyToTerraform(struct?: TfFilter.FindingTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterFindingTypePropertyToHclTerraform(struct?: TfFilter.FindingTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterFirstObservedAtPropertyToTerraform(struct?: TfFilter.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterFirstObservedAtPropertyToHclTerraform(struct?: TfFilter.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterFixAvailablePropertyToTerraform(struct?: TfFilter.FixAvailableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterFixAvailablePropertyToHclTerraform(struct?: TfFilter.FixAvailableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterInspectorScorePropertyToTerraform(struct?: TfFilter.InspectorScoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function tfFilterInspectorScorePropertyToHclTerraform(struct?: TfFilter.InspectorScoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterLambdaFunctionExecutionRoleArnPropertyToTerraform(struct?: TfFilter.LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterLambdaFunctionExecutionRoleArnPropertyToHclTerraform(struct?: TfFilter.LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterLambdaFunctionLastModifiedAtPropertyToTerraform(struct?: TfFilter.LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterLambdaFunctionLastModifiedAtPropertyToHclTerraform(struct?: TfFilter.LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterLambdaFunctionLayersPropertyToTerraform(struct?: TfFilter.LambdaFunctionLayersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterLambdaFunctionLayersPropertyToHclTerraform(struct?: TfFilter.LambdaFunctionLayersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterLambdaFunctionNamePropertyToTerraform(struct?: TfFilter.LambdaFunctionNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterLambdaFunctionNamePropertyToHclTerraform(struct?: TfFilter.LambdaFunctionNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterLambdaFunctionRuntimePropertyToTerraform(struct?: TfFilter.LambdaFunctionRuntimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterLambdaFunctionRuntimePropertyToHclTerraform(struct?: TfFilter.LambdaFunctionRuntimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterLastObservedAtPropertyToTerraform(struct?: TfFilter.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterLastObservedAtPropertyToHclTerraform(struct?: TfFilter.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterNetworkProtocolPropertyToTerraform(struct?: TfFilter.NetworkProtocolProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterNetworkProtocolPropertyToHclTerraform(struct?: TfFilter.NetworkProtocolProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterPortRangePropertyToTerraform(struct?: TfFilter.PortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    begin_inclusive: cdktn.numberToTerraform(struct!.beginInclusive),
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
  }
}


export function tfFilterPortRangePropertyToHclTerraform(struct?: TfFilter.PortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    begin_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.beginInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterRelatedVulnerabilitiesPropertyToTerraform(struct?: TfFilter.RelatedVulnerabilitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterRelatedVulnerabilitiesPropertyToHclTerraform(struct?: TfFilter.RelatedVulnerabilitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterResourceIdPropertyToTerraform(struct?: TfFilter.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterResourceIdPropertyToHclTerraform(struct?: TfFilter.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterResourceTagsPropertyToTerraform(struct?: TfFilter.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterResourceTagsPropertyToHclTerraform(struct?: TfFilter.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function tfFilterResourceTypePropertyToTerraform(struct?: TfFilter.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterResourceTypePropertyToHclTerraform(struct?: TfFilter.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterSeverityPropertyToTerraform(struct?: TfFilter.SeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterSeverityPropertyToHclTerraform(struct?: TfFilter.SeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterTitlePropertyToTerraform(struct?: TfFilter.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterTitlePropertyToHclTerraform(struct?: TfFilter.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterUpdatedAtPropertyToTerraform(struct?: TfFilter.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function tfFilterUpdatedAtPropertyToHclTerraform(struct?: TfFilter.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterVendorSeverityPropertyToTerraform(struct?: TfFilter.VendorSeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterVendorSeverityPropertyToHclTerraform(struct?: TfFilter.VendorSeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterVulnerabilityIdPropertyToTerraform(struct?: TfFilter.VulnerabilityIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterVulnerabilityIdPropertyToHclTerraform(struct?: TfFilter.VulnerabilityIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterVulnerabilitySourcePropertyToTerraform(struct?: TfFilter.VulnerabilitySourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterVulnerabilitySourcePropertyToHclTerraform(struct?: TfFilter.VulnerabilitySourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterArchitecturePropertyToTerraform(struct?: TfFilter.ArchitectureProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterArchitecturePropertyToHclTerraform(struct?: TfFilter.ArchitectureProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterEpochPropertyToTerraform(struct?: TfFilter.EpochProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function tfFilterEpochPropertyToHclTerraform(struct?: TfFilter.EpochProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterFilePathPropertyToTerraform(struct?: TfFilter.FilePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterFilePathPropertyToHclTerraform(struct?: TfFilter.FilePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterNamePropertyToTerraform(struct?: TfFilter.NameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterNamePropertyToHclTerraform(struct?: TfFilter.NameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterReleasePropertyToTerraform(struct?: TfFilter.ReleaseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterReleasePropertyToHclTerraform(struct?: TfFilter.ReleaseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterSourceLambdaLayerArnPropertyToTerraform(struct?: TfFilter.SourceLambdaLayerArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterSourceLambdaLayerArnPropertyToHclTerraform(struct?: TfFilter.SourceLambdaLayerArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterSourceLayerHashPropertyToTerraform(struct?: TfFilter.SourceLayerHashProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterSourceLayerHashPropertyToHclTerraform(struct?: TfFilter.SourceLayerHashProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterVersionPropertyToTerraform(struct?: TfFilter.VersionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfFilterVersionPropertyToHclTerraform(struct?: TfFilter.VersionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function tfFilterVulnerablePackagesPropertyToTerraform(struct?: TfFilter.VulnerablePackagesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture: cdktn.listMapper(tfFilterArchitecturePropertyToTerraform, true)(struct!.architecture),
    epoch: cdktn.listMapper(tfFilterEpochPropertyToTerraform, true)(struct!.epoch),
    file_path: cdktn.listMapper(tfFilterFilePathPropertyToTerraform, true)(struct!.filePath),
    name: cdktn.listMapper(tfFilterNamePropertyToTerraform, true)(struct!.name),
    release: cdktn.listMapper(tfFilterReleasePropertyToTerraform, true)(struct!.release),
    source_lambda_layer_arn: cdktn.listMapper(tfFilterSourceLambdaLayerArnPropertyToTerraform, true)(struct!.sourceLambdaLayerArn),
    source_layer_hash: cdktn.listMapper(tfFilterSourceLayerHashPropertyToTerraform, true)(struct!.sourceLayerHash),
    version: cdktn.listMapper(tfFilterVersionPropertyToTerraform, true)(struct!.version),
  }
}


export function tfFilterVulnerablePackagesPropertyToHclTerraform(struct?: TfFilter.VulnerablePackagesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture: {
      value: cdktn.listMapperHcl(tfFilterArchitecturePropertyToHclTerraform, true)(struct!.architecture),
      isBlock: true,
      type: "list",
      storageClassType: "ArchitecturePropertyList",
    },
    epoch: {
      value: cdktn.listMapperHcl(tfFilterEpochPropertyToHclTerraform, true)(struct!.epoch),
      isBlock: true,
      type: "list",
      storageClassType: "EpochPropertyList",
    },
    file_path: {
      value: cdktn.listMapperHcl(tfFilterFilePathPropertyToHclTerraform, true)(struct!.filePath),
      isBlock: true,
      type: "list",
      storageClassType: "FilePathPropertyList",
    },
    name: {
      value: cdktn.listMapperHcl(tfFilterNamePropertyToHclTerraform, true)(struct!.name),
      isBlock: true,
      type: "list",
      storageClassType: "NamePropertyList",
    },
    release: {
      value: cdktn.listMapperHcl(tfFilterReleasePropertyToHclTerraform, true)(struct!.release),
      isBlock: true,
      type: "list",
      storageClassType: "ReleasePropertyList",
    },
    source_lambda_layer_arn: {
      value: cdktn.listMapperHcl(tfFilterSourceLambdaLayerArnPropertyToHclTerraform, true)(struct!.sourceLambdaLayerArn),
      isBlock: true,
      type: "list",
      storageClassType: "SourceLambdaLayerArnPropertyList",
    },
    source_layer_hash: {
      value: cdktn.listMapperHcl(tfFilterSourceLayerHashPropertyToHclTerraform, true)(struct!.sourceLayerHash),
      isBlock: true,
      type: "list",
      storageClassType: "SourceLayerHashPropertyList",
    },
    version: {
      value: cdktn.listMapperHcl(tfFilterVersionPropertyToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "list",
      storageClassType: "VersionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFilterFilterCriteriaPropertyToTerraform(struct?: TfFilter.FilterCriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(tfFilterAwsAccountIdPropertyToTerraform, true)(struct!.awsAccountId),
    code_repository_project_name: cdktn.listMapper(tfFilterCodeRepositoryProjectNamePropertyToTerraform, true)(struct!.codeRepositoryProjectName),
    code_repository_provider_type: cdktn.listMapper(tfFilterCodeRepositoryProviderTypePropertyToTerraform, true)(struct!.codeRepositoryProviderType),
    code_vulnerability_detector_name: cdktn.listMapper(tfFilterCodeVulnerabilityDetectorNamePropertyToTerraform, true)(struct!.codeVulnerabilityDetectorName),
    code_vulnerability_detector_tags: cdktn.listMapper(tfFilterCodeVulnerabilityDetectorTagsPropertyToTerraform, true)(struct!.codeVulnerabilityDetectorTags),
    code_vulnerability_file_path: cdktn.listMapper(tfFilterCodeVulnerabilityFilePathPropertyToTerraform, true)(struct!.codeVulnerabilityFilePath),
    component_id: cdktn.listMapper(tfFilterComponentIdPropertyToTerraform, true)(struct!.componentId),
    component_type: cdktn.listMapper(tfFilterComponentTypePropertyToTerraform, true)(struct!.componentType),
    ec2_instance_image_id: cdktn.listMapper(tfFilterEc2InstanceImageIdPropertyToTerraform, true)(struct!.ec2InstanceImageId),
    ec2_instance_subnet_id: cdktn.listMapper(tfFilterEc2InstanceSubnetIdPropertyToTerraform, true)(struct!.ec2InstanceSubnetId),
    ec2_instance_vpc_id: cdktn.listMapper(tfFilterEc2InstanceVpcIdPropertyToTerraform, true)(struct!.ec2InstanceVpcId),
    ecr_image_architecture: cdktn.listMapper(tfFilterEcrImageArchitecturePropertyToTerraform, true)(struct!.ecrImageArchitecture),
    ecr_image_hash: cdktn.listMapper(tfFilterEcrImageHashPropertyToTerraform, true)(struct!.ecrImageHash),
    ecr_image_in_use_count: cdktn.listMapper(tfFilterEcrImageInUseCountPropertyToTerraform, true)(struct!.ecrImageInUseCount),
    ecr_image_last_in_use_at: cdktn.listMapper(tfFilterEcrImageLastInUseAtPropertyToTerraform, true)(struct!.ecrImageLastInUseAt),
    ecr_image_pushed_at: cdktn.listMapper(tfFilterEcrImagePushedAtPropertyToTerraform, true)(struct!.ecrImagePushedAt),
    ecr_image_registry: cdktn.listMapper(tfFilterEcrImageRegistryPropertyToTerraform, true)(struct!.ecrImageRegistry),
    ecr_image_repository_name: cdktn.listMapper(tfFilterEcrImageRepositoryNamePropertyToTerraform, true)(struct!.ecrImageRepositoryName),
    ecr_image_tags: cdktn.listMapper(tfFilterEcrImageTagsPropertyToTerraform, true)(struct!.ecrImageTags),
    epss_score: cdktn.listMapper(tfFilterEpssScorePropertyToTerraform, true)(struct!.epssScore),
    exploit_available: cdktn.listMapper(tfFilterExploitAvailablePropertyToTerraform, true)(struct!.exploitAvailable),
    finding_arn: cdktn.listMapper(tfFilterFindingArnPropertyToTerraform, true)(struct!.findingArn),
    finding_status: cdktn.listMapper(tfFilterFindingStatusPropertyToTerraform, true)(struct!.findingStatus),
    finding_type: cdktn.listMapper(tfFilterFindingTypePropertyToTerraform, true)(struct!.findingType),
    first_observed_at: cdktn.listMapper(tfFilterFirstObservedAtPropertyToTerraform, true)(struct!.firstObservedAt),
    fix_available: cdktn.listMapper(tfFilterFixAvailablePropertyToTerraform, true)(struct!.fixAvailable),
    inspector_score: cdktn.listMapper(tfFilterInspectorScorePropertyToTerraform, true)(struct!.inspectorScore),
    lambda_function_execution_role_arn: cdktn.listMapper(tfFilterLambdaFunctionExecutionRoleArnPropertyToTerraform, true)(struct!.lambdaFunctionExecutionRoleArn),
    lambda_function_last_modified_at: cdktn.listMapper(tfFilterLambdaFunctionLastModifiedAtPropertyToTerraform, true)(struct!.lambdaFunctionLastModifiedAt),
    lambda_function_layers: cdktn.listMapper(tfFilterLambdaFunctionLayersPropertyToTerraform, true)(struct!.lambdaFunctionLayers),
    lambda_function_name: cdktn.listMapper(tfFilterLambdaFunctionNamePropertyToTerraform, true)(struct!.lambdaFunctionName),
    lambda_function_runtime: cdktn.listMapper(tfFilterLambdaFunctionRuntimePropertyToTerraform, true)(struct!.lambdaFunctionRuntime),
    last_observed_at: cdktn.listMapper(tfFilterLastObservedAtPropertyToTerraform, true)(struct!.lastObservedAt),
    network_protocol: cdktn.listMapper(tfFilterNetworkProtocolPropertyToTerraform, true)(struct!.networkProtocol),
    port_range: cdktn.listMapper(tfFilterPortRangePropertyToTerraform, true)(struct!.portRange),
    related_vulnerabilities: cdktn.listMapper(tfFilterRelatedVulnerabilitiesPropertyToTerraform, true)(struct!.relatedVulnerabilities),
    resource_id: cdktn.listMapper(tfFilterResourceIdPropertyToTerraform, true)(struct!.resourceId),
    resource_tags: cdktn.listMapper(tfFilterResourceTagsPropertyToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(tfFilterResourceTypePropertyToTerraform, true)(struct!.resourceType),
    severity: cdktn.listMapper(tfFilterSeverityPropertyToTerraform, true)(struct!.severity),
    title: cdktn.listMapper(tfFilterTitlePropertyToTerraform, true)(struct!.title),
    updated_at: cdktn.listMapper(tfFilterUpdatedAtPropertyToTerraform, true)(struct!.updatedAt),
    vendor_severity: cdktn.listMapper(tfFilterVendorSeverityPropertyToTerraform, true)(struct!.vendorSeverity),
    vulnerability_id: cdktn.listMapper(tfFilterVulnerabilityIdPropertyToTerraform, true)(struct!.vulnerabilityId),
    vulnerability_source: cdktn.listMapper(tfFilterVulnerabilitySourcePropertyToTerraform, true)(struct!.vulnerabilitySource),
    vulnerable_packages: cdktn.listMapper(tfFilterVulnerablePackagesPropertyToTerraform, true)(struct!.vulnerablePackages),
  }
}


export function tfFilterFilterCriteriaPropertyToHclTerraform(struct?: TfFilter.FilterCriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(tfFilterAwsAccountIdPropertyToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "AwsAccountIdPropertyList",
    },
    code_repository_project_name: {
      value: cdktn.listMapperHcl(tfFilterCodeRepositoryProjectNamePropertyToHclTerraform, true)(struct!.codeRepositoryProjectName),
      isBlock: true,
      type: "set",
      storageClassType: "CodeRepositoryProjectNamePropertyList",
    },
    code_repository_provider_type: {
      value: cdktn.listMapperHcl(tfFilterCodeRepositoryProviderTypePropertyToHclTerraform, true)(struct!.codeRepositoryProviderType),
      isBlock: true,
      type: "set",
      storageClassType: "CodeRepositoryProviderTypePropertyList",
    },
    code_vulnerability_detector_name: {
      value: cdktn.listMapperHcl(tfFilterCodeVulnerabilityDetectorNamePropertyToHclTerraform, true)(struct!.codeVulnerabilityDetectorName),
      isBlock: true,
      type: "set",
      storageClassType: "CodeVulnerabilityDetectorNamePropertyList",
    },
    code_vulnerability_detector_tags: {
      value: cdktn.listMapperHcl(tfFilterCodeVulnerabilityDetectorTagsPropertyToHclTerraform, true)(struct!.codeVulnerabilityDetectorTags),
      isBlock: true,
      type: "set",
      storageClassType: "CodeVulnerabilityDetectorTagsPropertyList",
    },
    code_vulnerability_file_path: {
      value: cdktn.listMapperHcl(tfFilterCodeVulnerabilityFilePathPropertyToHclTerraform, true)(struct!.codeVulnerabilityFilePath),
      isBlock: true,
      type: "set",
      storageClassType: "CodeVulnerabilityFilePathPropertyList",
    },
    component_id: {
      value: cdktn.listMapperHcl(tfFilterComponentIdPropertyToHclTerraform, true)(struct!.componentId),
      isBlock: true,
      type: "set",
      storageClassType: "ComponentIdPropertyList",
    },
    component_type: {
      value: cdktn.listMapperHcl(tfFilterComponentTypePropertyToHclTerraform, true)(struct!.componentType),
      isBlock: true,
      type: "set",
      storageClassType: "ComponentTypePropertyList",
    },
    ec2_instance_image_id: {
      value: cdktn.listMapperHcl(tfFilterEc2InstanceImageIdPropertyToHclTerraform, true)(struct!.ec2InstanceImageId),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2InstanceImageIdPropertyList",
    },
    ec2_instance_subnet_id: {
      value: cdktn.listMapperHcl(tfFilterEc2InstanceSubnetIdPropertyToHclTerraform, true)(struct!.ec2InstanceSubnetId),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2InstanceSubnetIdPropertyList",
    },
    ec2_instance_vpc_id: {
      value: cdktn.listMapperHcl(tfFilterEc2InstanceVpcIdPropertyToHclTerraform, true)(struct!.ec2InstanceVpcId),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2InstanceVpcIdPropertyList",
    },
    ecr_image_architecture: {
      value: cdktn.listMapperHcl(tfFilterEcrImageArchitecturePropertyToHclTerraform, true)(struct!.ecrImageArchitecture),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageArchitecturePropertyList",
    },
    ecr_image_hash: {
      value: cdktn.listMapperHcl(tfFilterEcrImageHashPropertyToHclTerraform, true)(struct!.ecrImageHash),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageHashPropertyList",
    },
    ecr_image_in_use_count: {
      value: cdktn.listMapperHcl(tfFilterEcrImageInUseCountPropertyToHclTerraform, true)(struct!.ecrImageInUseCount),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageInUseCountPropertyList",
    },
    ecr_image_last_in_use_at: {
      value: cdktn.listMapperHcl(tfFilterEcrImageLastInUseAtPropertyToHclTerraform, true)(struct!.ecrImageLastInUseAt),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageLastInUseAtPropertyList",
    },
    ecr_image_pushed_at: {
      value: cdktn.listMapperHcl(tfFilterEcrImagePushedAtPropertyToHclTerraform, true)(struct!.ecrImagePushedAt),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImagePushedAtPropertyList",
    },
    ecr_image_registry: {
      value: cdktn.listMapperHcl(tfFilterEcrImageRegistryPropertyToHclTerraform, true)(struct!.ecrImageRegistry),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageRegistryPropertyList",
    },
    ecr_image_repository_name: {
      value: cdktn.listMapperHcl(tfFilterEcrImageRepositoryNamePropertyToHclTerraform, true)(struct!.ecrImageRepositoryName),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageRepositoryNamePropertyList",
    },
    ecr_image_tags: {
      value: cdktn.listMapperHcl(tfFilterEcrImageTagsPropertyToHclTerraform, true)(struct!.ecrImageTags),
      isBlock: true,
      type: "set",
      storageClassType: "EcrImageTagsPropertyList",
    },
    epss_score: {
      value: cdktn.listMapperHcl(tfFilterEpssScorePropertyToHclTerraform, true)(struct!.epssScore),
      isBlock: true,
      type: "set",
      storageClassType: "EpssScorePropertyList",
    },
    exploit_available: {
      value: cdktn.listMapperHcl(tfFilterExploitAvailablePropertyToHclTerraform, true)(struct!.exploitAvailable),
      isBlock: true,
      type: "set",
      storageClassType: "ExploitAvailablePropertyList",
    },
    finding_arn: {
      value: cdktn.listMapperHcl(tfFilterFindingArnPropertyToHclTerraform, true)(struct!.findingArn),
      isBlock: true,
      type: "set",
      storageClassType: "FindingArnPropertyList",
    },
    finding_status: {
      value: cdktn.listMapperHcl(tfFilterFindingStatusPropertyToHclTerraform, true)(struct!.findingStatus),
      isBlock: true,
      type: "set",
      storageClassType: "FindingStatusPropertyList",
    },
    finding_type: {
      value: cdktn.listMapperHcl(tfFilterFindingTypePropertyToHclTerraform, true)(struct!.findingType),
      isBlock: true,
      type: "set",
      storageClassType: "FindingTypePropertyList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(tfFilterFirstObservedAtPropertyToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "FirstObservedAtPropertyList",
    },
    fix_available: {
      value: cdktn.listMapperHcl(tfFilterFixAvailablePropertyToHclTerraform, true)(struct!.fixAvailable),
      isBlock: true,
      type: "set",
      storageClassType: "FixAvailablePropertyList",
    },
    inspector_score: {
      value: cdktn.listMapperHcl(tfFilterInspectorScorePropertyToHclTerraform, true)(struct!.inspectorScore),
      isBlock: true,
      type: "set",
      storageClassType: "InspectorScorePropertyList",
    },
    lambda_function_execution_role_arn: {
      value: cdktn.listMapperHcl(tfFilterLambdaFunctionExecutionRoleArnPropertyToHclTerraform, true)(struct!.lambdaFunctionExecutionRoleArn),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaFunctionExecutionRoleArnPropertyList",
    },
    lambda_function_last_modified_at: {
      value: cdktn.listMapperHcl(tfFilterLambdaFunctionLastModifiedAtPropertyToHclTerraform, true)(struct!.lambdaFunctionLastModifiedAt),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaFunctionLastModifiedAtPropertyList",
    },
    lambda_function_layers: {
      value: cdktn.listMapperHcl(tfFilterLambdaFunctionLayersPropertyToHclTerraform, true)(struct!.lambdaFunctionLayers),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaFunctionLayersPropertyList",
    },
    lambda_function_name: {
      value: cdktn.listMapperHcl(tfFilterLambdaFunctionNamePropertyToHclTerraform, true)(struct!.lambdaFunctionName),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaFunctionNamePropertyList",
    },
    lambda_function_runtime: {
      value: cdktn.listMapperHcl(tfFilterLambdaFunctionRuntimePropertyToHclTerraform, true)(struct!.lambdaFunctionRuntime),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaFunctionRuntimePropertyList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(tfFilterLastObservedAtPropertyToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "LastObservedAtPropertyList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(tfFilterNetworkProtocolPropertyToHclTerraform, true)(struct!.networkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkProtocolPropertyList",
    },
    port_range: {
      value: cdktn.listMapperHcl(tfFilterPortRangePropertyToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "set",
      storageClassType: "PortRangePropertyList",
    },
    related_vulnerabilities: {
      value: cdktn.listMapperHcl(tfFilterRelatedVulnerabilitiesPropertyToHclTerraform, true)(struct!.relatedVulnerabilities),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedVulnerabilitiesPropertyList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(tfFilterResourceIdPropertyToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceIdPropertyList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(tfFilterResourceTagsPropertyToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTagsPropertyList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(tfFilterResourceTypePropertyToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTypePropertyList",
    },
    severity: {
      value: cdktn.listMapperHcl(tfFilterSeverityPropertyToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "set",
      storageClassType: "SeverityPropertyList",
    },
    title: {
      value: cdktn.listMapperHcl(tfFilterTitlePropertyToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "TitlePropertyList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(tfFilterUpdatedAtPropertyToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "UpdatedAtPropertyList",
    },
    vendor_severity: {
      value: cdktn.listMapperHcl(tfFilterVendorSeverityPropertyToHclTerraform, true)(struct!.vendorSeverity),
      isBlock: true,
      type: "set",
      storageClassType: "VendorSeverityPropertyList",
    },
    vulnerability_id: {
      value: cdktn.listMapperHcl(tfFilterVulnerabilityIdPropertyToHclTerraform, true)(struct!.vulnerabilityId),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilityIdPropertyList",
    },
    vulnerability_source: {
      value: cdktn.listMapperHcl(tfFilterVulnerabilitySourcePropertyToHclTerraform, true)(struct!.vulnerabilitySource),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitySourcePropertyList",
    },
    vulnerable_packages: {
      value: cdktn.listMapperHcl(tfFilterVulnerablePackagesPropertyToHclTerraform, true)(struct!.vulnerablePackages),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerablePackagesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfFilter {
export interface AwsAccountIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class AwsAccountIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsAccountIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class AwsAccountIdPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsAccountIdProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsAccountIdPropertyOutputReference {
    return new AwsAccountIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeRepositoryProjectNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class CodeRepositoryProjectNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeRepositoryProjectNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeRepositoryProjectNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CodeRepositoryProjectNamePropertyList extends cdktn.ComplexList {
  public internalValue? : CodeRepositoryProjectNameProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeRepositoryProjectNamePropertyOutputReference {
    return new CodeRepositoryProjectNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeRepositoryProviderTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class CodeRepositoryProviderTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeRepositoryProviderTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeRepositoryProviderTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CodeRepositoryProviderTypePropertyList extends cdktn.ComplexList {
  public internalValue? : CodeRepositoryProviderTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeRepositoryProviderTypePropertyOutputReference {
    return new CodeRepositoryProviderTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeVulnerabilityDetectorNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class CodeVulnerabilityDetectorNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CodeVulnerabilityDetectorNamePropertyList extends cdktn.ComplexList {
  public internalValue? : CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeVulnerabilityDetectorNamePropertyOutputReference {
    return new CodeVulnerabilityDetectorNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeVulnerabilityDetectorTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class CodeVulnerabilityDetectorTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CodeVulnerabilityDetectorTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeVulnerabilityDetectorTagsPropertyOutputReference {
    return new CodeVulnerabilityDetectorTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeVulnerabilityFilePathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class CodeVulnerabilityFilePathPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeVulnerabilityFilePathProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeVulnerabilityFilePathProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CodeVulnerabilityFilePathPropertyList extends cdktn.ComplexList {
  public internalValue? : CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeVulnerabilityFilePathPropertyOutputReference {
    return new CodeVulnerabilityFilePathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComponentIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ComponentIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComponentIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComponentIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ComponentIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ComponentIdPropertyOutputReference {
    return new ComponentIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComponentTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ComponentTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComponentTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComponentTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ComponentTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ComponentTypePropertyOutputReference {
    return new ComponentTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceImageIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class Ec2InstanceImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceImageIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceImageIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Ec2InstanceImageIdPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceImageIdProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceImageIdPropertyOutputReference {
    return new Ec2InstanceImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceSubnetIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class Ec2InstanceSubnetIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceSubnetIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceSubnetIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Ec2InstanceSubnetIdPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceSubnetIdPropertyOutputReference {
    return new Ec2InstanceSubnetIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceVpcIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class Ec2InstanceVpcIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceVpcIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceVpcIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Ec2InstanceVpcIdPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceVpcIdProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceVpcIdPropertyOutputReference {
    return new Ec2InstanceVpcIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageArchitectureProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class EcrImageArchitecturePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageArchitectureProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageArchitectureProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class EcrImageArchitecturePropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageArchitectureProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageArchitecturePropertyOutputReference {
    return new EcrImageArchitecturePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageHashProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class EcrImageHashPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageHashProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageHashProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class EcrImageHashPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageHashProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageHashPropertyOutputReference {
    return new EcrImageHashPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageInUseCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lower_inclusive TfFilter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#upper_inclusive TfFilter#upper_inclusive}
  */
  readonly upperInclusive: number;
}
export class EcrImageInUseCountPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageInUseCountProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageInUseCountProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class EcrImageInUseCountPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageInUseCountProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageInUseCountPropertyOutputReference {
    return new EcrImageInUseCountPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageLastInUseAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class EcrImageLastInUseAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageLastInUseAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageLastInUseAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class EcrImageLastInUseAtPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageLastInUseAtProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageLastInUseAtPropertyOutputReference {
    return new EcrImageLastInUseAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImagePushedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class EcrImagePushedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImagePushedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImagePushedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class EcrImagePushedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImagePushedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImagePushedAtPropertyOutputReference {
    return new EcrImagePushedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageRegistryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class EcrImageRegistryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageRegistryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageRegistryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class EcrImageRegistryPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageRegistryProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageRegistryPropertyOutputReference {
    return new EcrImageRegistryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageRepositoryNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class EcrImageRepositoryNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageRepositoryNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageRepositoryNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class EcrImageRepositoryNamePropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageRepositoryNameProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageRepositoryNamePropertyOutputReference {
    return new EcrImageRepositoryNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrImageTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class EcrImageTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrImageTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrImageTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class EcrImageTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : EcrImageTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): EcrImageTagsPropertyOutputReference {
    return new EcrImageTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EpssScoreProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lower_inclusive TfFilter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#upper_inclusive TfFilter#upper_inclusive}
  */
  readonly upperInclusive: number;
}
export class EpssScorePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EpssScoreProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EpssScoreProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class EpssScorePropertyList extends cdktn.ComplexList {
  public internalValue? : EpssScoreProperty[] | cdktn.IResolvable

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
  public get(index: number): EpssScorePropertyOutputReference {
    return new EpssScorePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExploitAvailableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ExploitAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExploitAvailableProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExploitAvailableProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ExploitAvailablePropertyList extends cdktn.ComplexList {
  public internalValue? : ExploitAvailableProperty[] | cdktn.IResolvable

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
  public get(index: number): ExploitAvailablePropertyOutputReference {
    return new ExploitAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class FindingArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingArnPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingArnProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingArnPropertyOutputReference {
    return new FindingArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class FindingStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingStatusPropertyOutputReference {
    return new FindingStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class FindingTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingTypePropertyList extends cdktn.ComplexList {
  public internalValue? : FindingTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingTypePropertyOutputReference {
    return new FindingTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class FirstObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirstObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirstObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class FirstObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : FirstObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): FirstObservedAtPropertyOutputReference {
    return new FirstObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FixAvailableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class FixAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FixAvailableProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixAvailableProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FixAvailablePropertyList extends cdktn.ComplexList {
  public internalValue? : FixAvailableProperty[] | cdktn.IResolvable

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
  public get(index: number): FixAvailablePropertyOutputReference {
    return new FixAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectorScoreProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lower_inclusive TfFilter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#upper_inclusive TfFilter#upper_inclusive}
  */
  readonly upperInclusive: number;
}
export class InspectorScorePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InspectorScoreProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectorScoreProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class InspectorScorePropertyList extends cdktn.ComplexList {
  public internalValue? : InspectorScoreProperty[] | cdktn.IResolvable

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
  public get(index: number): InspectorScorePropertyOutputReference {
    return new InspectorScorePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionExecutionRoleArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class LambdaFunctionExecutionRoleArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class LambdaFunctionExecutionRoleArnPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionExecutionRoleArnPropertyOutputReference {
    return new LambdaFunctionExecutionRoleArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionLastModifiedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class LambdaFunctionLastModifiedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class LambdaFunctionLastModifiedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionLastModifiedAtPropertyOutputReference {
    return new LambdaFunctionLastModifiedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionLayersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class LambdaFunctionLayersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionLayersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionLayersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class LambdaFunctionLayersPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionLayersProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionLayersPropertyOutputReference {
    return new LambdaFunctionLayersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class LambdaFunctionNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class LambdaFunctionNamePropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionNameProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionNamePropertyOutputReference {
    return new LambdaFunctionNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionRuntimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class LambdaFunctionRuntimePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionRuntimeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionRuntimeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class LambdaFunctionRuntimePropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionRuntimeProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionRuntimePropertyOutputReference {
    return new LambdaFunctionRuntimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class LastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class LastObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : LastObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): LastObservedAtPropertyOutputReference {
    return new LastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkProtocolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class NetworkProtocolPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkProtocolProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkProtocolProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkProtocolPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkProtocolProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkProtocolPropertyOutputReference {
    return new NetworkProtocolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#begin_inclusive TfFilter#begin_inclusive}
  */
  readonly beginInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PortRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginInclusive = this._beginInclusive;
    }
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beginInclusive = undefined;
      this._endInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beginInclusive = value.beginInclusive;
      this._endInclusive = value.endInclusive;
    }
  }

  // begin_inclusive - computed: false, optional: false, required: true
  private _beginInclusive?: number; 
  public get beginInclusive() {
    return this.getNumberAttribute('begin_inclusive');
  }
  public set beginInclusive(value: number) {
    this._beginInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInclusiveInput() {
    return this._beginInclusive;
  }

  // end_inclusive - computed: false, optional: false, required: true
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }
}

export class PortRangePropertyList extends cdktn.ComplexList {
  public internalValue? : PortRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): PortRangePropertyOutputReference {
    return new PortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedVulnerabilitiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class RelatedVulnerabilitiesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedVulnerabilitiesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedVulnerabilitiesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RelatedVulnerabilitiesPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedVulnerabilitiesProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedVulnerabilitiesPropertyOutputReference {
    return new RelatedVulnerabilitiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ResourceIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceIdPropertyOutputReference {
    return new ResourceIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#key TfFilter#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTagsPropertyOutputReference {
    return new ResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTypePropertyOutputReference {
    return new ResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SeverityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class SeverityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SeverityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeverityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SeverityPropertyList extends cdktn.ComplexList {
  public internalValue? : SeverityProperty[] | cdktn.IResolvable

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
  public get(index: number): SeverityPropertyOutputReference {
    return new SeverityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TitleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class TitlePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TitleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TitleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class TitlePropertyList extends cdktn.ComplexList {
  public internalValue? : TitleProperty[] | cdktn.IResolvable

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
  public get(index: number): TitlePropertyOutputReference {
    return new TitlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpdatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#end_inclusive TfFilter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#start_inclusive TfFilter#start_inclusive}
  */
  readonly startInclusive?: string;
}
export class UpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UpdatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class UpdatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : UpdatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): UpdatedAtPropertyOutputReference {
    return new UpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VendorSeverityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class VendorSeverityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VendorSeverityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VendorSeverityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VendorSeverityPropertyList extends cdktn.ComplexList {
  public internalValue? : VendorSeverityProperty[] | cdktn.IResolvable

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
  public get(index: number): VendorSeverityPropertyOutputReference {
    return new VendorSeverityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilityIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class VulnerabilityIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VulnerabilityIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilityIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VulnerabilityIdPropertyList extends cdktn.ComplexList {
  public internalValue? : VulnerabilityIdProperty[] | cdktn.IResolvable

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
  public get(index: number): VulnerabilityIdPropertyOutputReference {
    return new VulnerabilityIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitySourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class VulnerabilitySourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VulnerabilitySourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitySourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VulnerabilitySourcePropertyList extends cdktn.ComplexList {
  public internalValue? : VulnerabilitySourceProperty[] | cdktn.IResolvable

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
  public get(index: number): VulnerabilitySourcePropertyOutputReference {
    return new VulnerabilitySourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArchitectureProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ArchitecturePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArchitectureProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchitectureProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ArchitecturePropertyList extends cdktn.ComplexList {
  public internalValue? : ArchitectureProperty[] | cdktn.IResolvable

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
  public get(index: number): ArchitecturePropertyOutputReference {
    return new ArchitecturePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EpochProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lower_inclusive TfFilter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#upper_inclusive TfFilter#upper_inclusive}
  */
  readonly upperInclusive: number;
}
export class EpochPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EpochProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EpochProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class EpochPropertyList extends cdktn.ComplexList {
  public internalValue? : EpochProperty[] | cdktn.IResolvable

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
  public get(index: number): EpochPropertyOutputReference {
    return new EpochPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilePathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class FilePathPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilePathProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilePathProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FilePathPropertyList extends cdktn.ComplexList {
  public internalValue? : FilePathProperty[] | cdktn.IResolvable

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
  public get(index: number): FilePathPropertyOutputReference {
    return new FilePathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class NamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NamePropertyList extends cdktn.ComplexList {
  public internalValue? : NameProperty[] | cdktn.IResolvable

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
  public get(index: number): NamePropertyOutputReference {
    return new NamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class ReleasePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReleaseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ReleasePropertyList extends cdktn.ComplexList {
  public internalValue? : ReleaseProperty[] | cdktn.IResolvable

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
  public get(index: number): ReleasePropertyOutputReference {
    return new ReleasePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceLambdaLayerArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class SourceLambdaLayerArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceLambdaLayerArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLambdaLayerArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SourceLambdaLayerArnPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceLambdaLayerArnProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceLambdaLayerArnPropertyOutputReference {
    return new SourceLambdaLayerArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceLayerHashProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class SourceLayerHashPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceLayerHashProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLayerHashProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SourceLayerHashPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceLayerHashProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceLayerHashPropertyOutputReference {
    return new SourceLayerHashPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VersionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#comparison TfFilter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#value TfFilter#value}
  */
  readonly value: string;
}
export class VersionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VersionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VersionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VersionPropertyList extends cdktn.ComplexList {
  public internalValue? : VersionProperty[] | cdktn.IResolvable

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
  public get(index: number): VersionPropertyOutputReference {
    return new VersionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerablePackagesProperty {
  /**
  * architecture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#architecture TfFilter#architecture}
  */
  readonly architecture?: ArchitectureProperty[] | cdktn.IResolvable;
  /**
  * epoch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#epoch TfFilter#epoch}
  */
  readonly epoch?: EpochProperty[] | cdktn.IResolvable;
  /**
  * file_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#file_path TfFilter#file_path}
  */
  readonly filePath?: FilePathProperty[] | cdktn.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#name TfFilter#name}
  */
  readonly name?: NameProperty[] | cdktn.IResolvable;
  /**
  * release block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#release TfFilter#release}
  */
  readonly release?: ReleaseProperty[] | cdktn.IResolvable;
  /**
  * source_lambda_layer_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#source_lambda_layer_arn TfFilter#source_lambda_layer_arn}
  */
  readonly sourceLambdaLayerArn?: SourceLambdaLayerArnProperty[] | cdktn.IResolvable;
  /**
  * source_layer_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#source_layer_hash TfFilter#source_layer_hash}
  */
  readonly sourceLayerHash?: SourceLayerHashProperty[] | cdktn.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#version TfFilter#version}
  */
  readonly version?: VersionProperty[] | cdktn.IResolvable;
}
export class VulnerablePackagesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VulnerablePackagesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture?.internalValue;
    }
    if (this._epoch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch?.internalValue;
    }
    if (this._filePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._release?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release?.internalValue;
    }
    if (this._sourceLambdaLayerArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLambdaLayerArn = this._sourceLambdaLayerArn?.internalValue;
    }
    if (this._sourceLayerHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLayerHash = this._sourceLayerHash?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerablePackagesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture.internalValue = undefined;
      this._epoch.internalValue = undefined;
      this._filePath.internalValue = undefined;
      this._name.internalValue = undefined;
      this._release.internalValue = undefined;
      this._sourceLambdaLayerArn.internalValue = undefined;
      this._sourceLayerHash.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture.internalValue = value.architecture;
      this._epoch.internalValue = value.epoch;
      this._filePath.internalValue = value.filePath;
      this._name.internalValue = value.name;
      this._release.internalValue = value.release;
      this._sourceLambdaLayerArn.internalValue = value.sourceLambdaLayerArn;
      this._sourceLayerHash.internalValue = value.sourceLayerHash;
      this._version.internalValue = value.version;
    }
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture = new ArchitecturePropertyList(this, "architecture", false);
  public get architecture() {
    return this._architecture;
  }
  public putArchitecture(value: ArchitectureProperty[] | cdktn.IResolvable) {
    this._architecture.internalValue = value;
  }
  public resetArchitecture() {
    this._architecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture.internalValue;
  }

  // epoch - computed: false, optional: true, required: false
  private _epoch = new EpochPropertyList(this, "epoch", false);
  public get epoch() {
    return this._epoch;
  }
  public putEpoch(value: EpochProperty[] | cdktn.IResolvable) {
    this._epoch.internalValue = value;
  }
  public resetEpoch() {
    this._epoch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch.internalValue;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath = new FilePathPropertyList(this, "file_path", false);
  public get filePath() {
    return this._filePath;
  }
  public putFilePath(value: FilePathProperty[] | cdktn.IResolvable) {
    this._filePath.internalValue = value;
  }
  public resetFilePath() {
    this._filePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new NamePropertyList(this, "name", false);
  public get name() {
    return this._name;
  }
  public putName(value: NameProperty[] | cdktn.IResolvable) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // release - computed: false, optional: true, required: false
  private _release = new ReleasePropertyList(this, "release", false);
  public get release() {
    return this._release;
  }
  public putRelease(value: ReleaseProperty[] | cdktn.IResolvable) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // source_lambda_layer_arn - computed: false, optional: true, required: false
  private _sourceLambdaLayerArn = new SourceLambdaLayerArnPropertyList(this, "source_lambda_layer_arn", false);
  public get sourceLambdaLayerArn() {
    return this._sourceLambdaLayerArn;
  }
  public putSourceLambdaLayerArn(value: SourceLambdaLayerArnProperty[] | cdktn.IResolvable) {
    this._sourceLambdaLayerArn.internalValue = value;
  }
  public resetSourceLambdaLayerArn() {
    this._sourceLambdaLayerArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLambdaLayerArnInput() {
    return this._sourceLambdaLayerArn.internalValue;
  }

  // source_layer_hash - computed: false, optional: true, required: false
  private _sourceLayerHash = new SourceLayerHashPropertyList(this, "source_layer_hash", false);
  public get sourceLayerHash() {
    return this._sourceLayerHash;
  }
  public putSourceLayerHash(value: SourceLayerHashProperty[] | cdktn.IResolvable) {
    this._sourceLayerHash.internalValue = value;
  }
  public resetSourceLayerHash() {
    this._sourceLayerHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLayerHashInput() {
    return this._sourceLayerHash.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new VersionPropertyList(this, "version", false);
  public get version() {
    return this._version;
  }
  public putVersion(value: VersionProperty[] | cdktn.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}

export class VulnerablePackagesPropertyList extends cdktn.ComplexList {
  public internalValue? : VulnerablePackagesProperty[] | cdktn.IResolvable

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
  public get(index: number): VulnerablePackagesPropertyOutputReference {
    return new VulnerablePackagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterCriteriaProperty {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#aws_account_id TfFilter#aws_account_id}
  */
  readonly awsAccountId?: AwsAccountIdProperty[] | cdktn.IResolvable;
  /**
  * code_repository_project_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#code_repository_project_name TfFilter#code_repository_project_name}
  */
  readonly codeRepositoryProjectName?: CodeRepositoryProjectNameProperty[] | cdktn.IResolvable;
  /**
  * code_repository_provider_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#code_repository_provider_type TfFilter#code_repository_provider_type}
  */
  readonly codeRepositoryProviderType?: CodeRepositoryProviderTypeProperty[] | cdktn.IResolvable;
  /**
  * code_vulnerability_detector_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#code_vulnerability_detector_name TfFilter#code_vulnerability_detector_name}
  */
  readonly codeVulnerabilityDetectorName?: CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable;
  /**
  * code_vulnerability_detector_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#code_vulnerability_detector_tags TfFilter#code_vulnerability_detector_tags}
  */
  readonly codeVulnerabilityDetectorTags?: CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable;
  /**
  * code_vulnerability_file_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#code_vulnerability_file_path TfFilter#code_vulnerability_file_path}
  */
  readonly codeVulnerabilityFilePath?: CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable;
  /**
  * component_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#component_id TfFilter#component_id}
  */
  readonly componentId?: ComponentIdProperty[] | cdktn.IResolvable;
  /**
  * component_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#component_type TfFilter#component_type}
  */
  readonly componentType?: ComponentTypeProperty[] | cdktn.IResolvable;
  /**
  * ec2_instance_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ec2_instance_image_id TfFilter#ec2_instance_image_id}
  */
  readonly ec2InstanceImageId?: Ec2InstanceImageIdProperty[] | cdktn.IResolvable;
  /**
  * ec2_instance_subnet_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ec2_instance_subnet_id TfFilter#ec2_instance_subnet_id}
  */
  readonly ec2InstanceSubnetId?: Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable;
  /**
  * ec2_instance_vpc_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ec2_instance_vpc_id TfFilter#ec2_instance_vpc_id}
  */
  readonly ec2InstanceVpcId?: Ec2InstanceVpcIdProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_architecture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_architecture TfFilter#ecr_image_architecture}
  */
  readonly ecrImageArchitecture?: EcrImageArchitectureProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_hash TfFilter#ecr_image_hash}
  */
  readonly ecrImageHash?: EcrImageHashProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_in_use_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_in_use_count TfFilter#ecr_image_in_use_count}
  */
  readonly ecrImageInUseCount?: EcrImageInUseCountProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_last_in_use_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_last_in_use_at TfFilter#ecr_image_last_in_use_at}
  */
  readonly ecrImageLastInUseAt?: EcrImageLastInUseAtProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_pushed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_pushed_at TfFilter#ecr_image_pushed_at}
  */
  readonly ecrImagePushedAt?: EcrImagePushedAtProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_registry TfFilter#ecr_image_registry}
  */
  readonly ecrImageRegistry?: EcrImageRegistryProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_repository_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_repository_name TfFilter#ecr_image_repository_name}
  */
  readonly ecrImageRepositoryName?: EcrImageRepositoryNameProperty[] | cdktn.IResolvable;
  /**
  * ecr_image_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#ecr_image_tags TfFilter#ecr_image_tags}
  */
  readonly ecrImageTags?: EcrImageTagsProperty[] | cdktn.IResolvable;
  /**
  * epss_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#epss_score TfFilter#epss_score}
  */
  readonly epssScore?: EpssScoreProperty[] | cdktn.IResolvable;
  /**
  * exploit_available block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#exploit_available TfFilter#exploit_available}
  */
  readonly exploitAvailable?: ExploitAvailableProperty[] | cdktn.IResolvable;
  /**
  * finding_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#finding_arn TfFilter#finding_arn}
  */
  readonly findingArn?: FindingArnProperty[] | cdktn.IResolvable;
  /**
  * finding_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#finding_status TfFilter#finding_status}
  */
  readonly findingStatus?: FindingStatusProperty[] | cdktn.IResolvable;
  /**
  * finding_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#finding_type TfFilter#finding_type}
  */
  readonly findingType?: FindingTypeProperty[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#first_observed_at TfFilter#first_observed_at}
  */
  readonly firstObservedAt?: FirstObservedAtProperty[] | cdktn.IResolvable;
  /**
  * fix_available block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#fix_available TfFilter#fix_available}
  */
  readonly fixAvailable?: FixAvailableProperty[] | cdktn.IResolvable;
  /**
  * inspector_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#inspector_score TfFilter#inspector_score}
  */
  readonly inspectorScore?: InspectorScoreProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_execution_role_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lambda_function_execution_role_arn TfFilter#lambda_function_execution_role_arn}
  */
  readonly lambdaFunctionExecutionRoleArn?: LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_last_modified_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lambda_function_last_modified_at TfFilter#lambda_function_last_modified_at}
  */
  readonly lambdaFunctionLastModifiedAt?: LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_layers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lambda_function_layers TfFilter#lambda_function_layers}
  */
  readonly lambdaFunctionLayers?: LambdaFunctionLayersProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lambda_function_name TfFilter#lambda_function_name}
  */
  readonly lambdaFunctionName?: LambdaFunctionNameProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#lambda_function_runtime TfFilter#lambda_function_runtime}
  */
  readonly lambdaFunctionRuntime?: LambdaFunctionRuntimeProperty[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#last_observed_at TfFilter#last_observed_at}
  */
  readonly lastObservedAt?: LastObservedAtProperty[] | cdktn.IResolvable;
  /**
  * network_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#network_protocol TfFilter#network_protocol}
  */
  readonly networkProtocol?: NetworkProtocolProperty[] | cdktn.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#port_range TfFilter#port_range}
  */
  readonly portRange?: PortRangeProperty[] | cdktn.IResolvable;
  /**
  * related_vulnerabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#related_vulnerabilities TfFilter#related_vulnerabilities}
  */
  readonly relatedVulnerabilities?: RelatedVulnerabilitiesProperty[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#resource_id TfFilter#resource_id}
  */
  readonly resourceId?: ResourceIdProperty[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#resource_tags TfFilter#resource_tags}
  */
  readonly resourceTags?: ResourceTagsProperty[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#resource_type TfFilter#resource_type}
  */
  readonly resourceType?: ResourceTypeProperty[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#severity TfFilter#severity}
  */
  readonly severity?: SeverityProperty[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#title TfFilter#title}
  */
  readonly title?: TitleProperty[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#updated_at TfFilter#updated_at}
  */
  readonly updatedAt?: UpdatedAtProperty[] | cdktn.IResolvable;
  /**
  * vendor_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#vendor_severity TfFilter#vendor_severity}
  */
  readonly vendorSeverity?: VendorSeverityProperty[] | cdktn.IResolvable;
  /**
  * vulnerability_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#vulnerability_id TfFilter#vulnerability_id}
  */
  readonly vulnerabilityId?: VulnerabilityIdProperty[] | cdktn.IResolvable;
  /**
  * vulnerability_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#vulnerability_source TfFilter#vulnerability_source}
  */
  readonly vulnerabilitySource?: VulnerabilitySourceProperty[] | cdktn.IResolvable;
  /**
  * vulnerable_packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_filter#vulnerable_packages TfFilter#vulnerable_packages}
  */
  readonly vulnerablePackages?: VulnerablePackagesProperty[] | cdktn.IResolvable;
}
export class FilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterCriteriaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._codeRepositoryProjectName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepositoryProjectName = this._codeRepositoryProjectName?.internalValue;
    }
    if (this._codeRepositoryProviderType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepositoryProviderType = this._codeRepositoryProviderType?.internalValue;
    }
    if (this._codeVulnerabilityDetectorName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorName = this._codeVulnerabilityDetectorName?.internalValue;
    }
    if (this._codeVulnerabilityDetectorTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorTags = this._codeVulnerabilityDetectorTags?.internalValue;
    }
    if (this._codeVulnerabilityFilePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityFilePath = this._codeVulnerabilityFilePath?.internalValue;
    }
    if (this._componentId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId?.internalValue;
    }
    if (this._componentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType?.internalValue;
    }
    if (this._ec2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceImageId = this._ec2InstanceImageId?.internalValue;
    }
    if (this._ec2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceSubnetId = this._ec2InstanceSubnetId?.internalValue;
    }
    if (this._ec2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceVpcId = this._ec2InstanceVpcId?.internalValue;
    }
    if (this._ecrImageArchitecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageArchitecture = this._ecrImageArchitecture?.internalValue;
    }
    if (this._ecrImageHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageHash = this._ecrImageHash?.internalValue;
    }
    if (this._ecrImageInUseCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageInUseCount = this._ecrImageInUseCount?.internalValue;
    }
    if (this._ecrImageLastInUseAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageLastInUseAt = this._ecrImageLastInUseAt?.internalValue;
    }
    if (this._ecrImagePushedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImagePushedAt = this._ecrImagePushedAt?.internalValue;
    }
    if (this._ecrImageRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRegistry = this._ecrImageRegistry?.internalValue;
    }
    if (this._ecrImageRepositoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRepositoryName = this._ecrImageRepositoryName?.internalValue;
    }
    if (this._ecrImageTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageTags = this._ecrImageTags?.internalValue;
    }
    if (this._epssScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epssScore = this._epssScore?.internalValue;
    }
    if (this._exploitAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploitAvailable = this._exploitAvailable?.internalValue;
    }
    if (this._findingArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingArn = this._findingArn?.internalValue;
    }
    if (this._findingStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingStatus = this._findingStatus?.internalValue;
    }
    if (this._findingType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingType = this._findingType?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._fixAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixAvailable = this._fixAvailable?.internalValue;
    }
    if (this._inspectorScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectorScore = this._inspectorScore?.internalValue;
    }
    if (this._lambdaFunctionExecutionRoleArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionExecutionRoleArn = this._lambdaFunctionExecutionRoleArn?.internalValue;
    }
    if (this._lambdaFunctionLastModifiedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLastModifiedAt = this._lambdaFunctionLastModifiedAt?.internalValue;
    }
    if (this._lambdaFunctionLayers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLayers = this._lambdaFunctionLayers?.internalValue;
    }
    if (this._lambdaFunctionName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionName = this._lambdaFunctionName?.internalValue;
    }
    if (this._lambdaFunctionRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionRuntime = this._lambdaFunctionRuntime?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._relatedVulnerabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedVulnerabilities = this._relatedVulnerabilities?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._vendorSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSeverity = this._vendorSeverity?.internalValue;
    }
    if (this._vulnerabilityId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityId = this._vulnerabilityId?.internalValue;
    }
    if (this._vulnerabilitySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilitySource = this._vulnerabilitySource?.internalValue;
    }
    if (this._vulnerablePackages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerablePackages = this._vulnerablePackages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterCriteriaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._codeRepositoryProjectName.internalValue = undefined;
      this._codeRepositoryProviderType.internalValue = undefined;
      this._codeVulnerabilityDetectorName.internalValue = undefined;
      this._codeVulnerabilityDetectorTags.internalValue = undefined;
      this._codeVulnerabilityFilePath.internalValue = undefined;
      this._componentId.internalValue = undefined;
      this._componentType.internalValue = undefined;
      this._ec2InstanceImageId.internalValue = undefined;
      this._ec2InstanceSubnetId.internalValue = undefined;
      this._ec2InstanceVpcId.internalValue = undefined;
      this._ecrImageArchitecture.internalValue = undefined;
      this._ecrImageHash.internalValue = undefined;
      this._ecrImageInUseCount.internalValue = undefined;
      this._ecrImageLastInUseAt.internalValue = undefined;
      this._ecrImagePushedAt.internalValue = undefined;
      this._ecrImageRegistry.internalValue = undefined;
      this._ecrImageRepositoryName.internalValue = undefined;
      this._ecrImageTags.internalValue = undefined;
      this._epssScore.internalValue = undefined;
      this._exploitAvailable.internalValue = undefined;
      this._findingArn.internalValue = undefined;
      this._findingStatus.internalValue = undefined;
      this._findingType.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._fixAvailable.internalValue = undefined;
      this._inspectorScore.internalValue = undefined;
      this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
      this._lambdaFunctionLastModifiedAt.internalValue = undefined;
      this._lambdaFunctionLayers.internalValue = undefined;
      this._lambdaFunctionName.internalValue = undefined;
      this._lambdaFunctionRuntime.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._portRange.internalValue = undefined;
      this._relatedVulnerabilities.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._title.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._vendorSeverity.internalValue = undefined;
      this._vulnerabilityId.internalValue = undefined;
      this._vulnerabilitySource.internalValue = undefined;
      this._vulnerablePackages.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._codeRepositoryProjectName.internalValue = value.codeRepositoryProjectName;
      this._codeRepositoryProviderType.internalValue = value.codeRepositoryProviderType;
      this._codeVulnerabilityDetectorName.internalValue = value.codeVulnerabilityDetectorName;
      this._codeVulnerabilityDetectorTags.internalValue = value.codeVulnerabilityDetectorTags;
      this._codeVulnerabilityFilePath.internalValue = value.codeVulnerabilityFilePath;
      this._componentId.internalValue = value.componentId;
      this._componentType.internalValue = value.componentType;
      this._ec2InstanceImageId.internalValue = value.ec2InstanceImageId;
      this._ec2InstanceSubnetId.internalValue = value.ec2InstanceSubnetId;
      this._ec2InstanceVpcId.internalValue = value.ec2InstanceVpcId;
      this._ecrImageArchitecture.internalValue = value.ecrImageArchitecture;
      this._ecrImageHash.internalValue = value.ecrImageHash;
      this._ecrImageInUseCount.internalValue = value.ecrImageInUseCount;
      this._ecrImageLastInUseAt.internalValue = value.ecrImageLastInUseAt;
      this._ecrImagePushedAt.internalValue = value.ecrImagePushedAt;
      this._ecrImageRegistry.internalValue = value.ecrImageRegistry;
      this._ecrImageRepositoryName.internalValue = value.ecrImageRepositoryName;
      this._ecrImageTags.internalValue = value.ecrImageTags;
      this._epssScore.internalValue = value.epssScore;
      this._exploitAvailable.internalValue = value.exploitAvailable;
      this._findingArn.internalValue = value.findingArn;
      this._findingStatus.internalValue = value.findingStatus;
      this._findingType.internalValue = value.findingType;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._fixAvailable.internalValue = value.fixAvailable;
      this._inspectorScore.internalValue = value.inspectorScore;
      this._lambdaFunctionExecutionRoleArn.internalValue = value.lambdaFunctionExecutionRoleArn;
      this._lambdaFunctionLastModifiedAt.internalValue = value.lambdaFunctionLastModifiedAt;
      this._lambdaFunctionLayers.internalValue = value.lambdaFunctionLayers;
      this._lambdaFunctionName.internalValue = value.lambdaFunctionName;
      this._lambdaFunctionRuntime.internalValue = value.lambdaFunctionRuntime;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._portRange.internalValue = value.portRange;
      this._relatedVulnerabilities.internalValue = value.relatedVulnerabilities;
      this._resourceId.internalValue = value.resourceId;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severity.internalValue = value.severity;
      this._title.internalValue = value.title;
      this._updatedAt.internalValue = value.updatedAt;
      this._vendorSeverity.internalValue = value.vendorSeverity;
      this._vulnerabilityId.internalValue = value.vulnerabilityId;
      this._vulnerabilitySource.internalValue = value.vulnerabilitySource;
      this._vulnerablePackages.internalValue = value.vulnerablePackages;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new AwsAccountIdPropertyList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: AwsAccountIdProperty[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // code_repository_project_name - computed: false, optional: true, required: false
  private _codeRepositoryProjectName = new CodeRepositoryProjectNamePropertyList(this, "code_repository_project_name", true);
  public get codeRepositoryProjectName() {
    return this._codeRepositoryProjectName;
  }
  public putCodeRepositoryProjectName(value: CodeRepositoryProjectNameProperty[] | cdktn.IResolvable) {
    this._codeRepositoryProjectName.internalValue = value;
  }
  public resetCodeRepositoryProjectName() {
    this._codeRepositoryProjectName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryProjectNameInput() {
    return this._codeRepositoryProjectName.internalValue;
  }

  // code_repository_provider_type - computed: false, optional: true, required: false
  private _codeRepositoryProviderType = new CodeRepositoryProviderTypePropertyList(this, "code_repository_provider_type", true);
  public get codeRepositoryProviderType() {
    return this._codeRepositoryProviderType;
  }
  public putCodeRepositoryProviderType(value: CodeRepositoryProviderTypeProperty[] | cdktn.IResolvable) {
    this._codeRepositoryProviderType.internalValue = value;
  }
  public resetCodeRepositoryProviderType() {
    this._codeRepositoryProviderType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryProviderTypeInput() {
    return this._codeRepositoryProviderType.internalValue;
  }

  // code_vulnerability_detector_name - computed: false, optional: true, required: false
  private _codeVulnerabilityDetectorName = new CodeVulnerabilityDetectorNamePropertyList(this, "code_vulnerability_detector_name", true);
  public get codeVulnerabilityDetectorName() {
    return this._codeVulnerabilityDetectorName;
  }
  public putCodeVulnerabilityDetectorName(value: CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorName.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorName() {
    this._codeVulnerabilityDetectorName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorNameInput() {
    return this._codeVulnerabilityDetectorName.internalValue;
  }

  // code_vulnerability_detector_tags - computed: false, optional: true, required: false
  private _codeVulnerabilityDetectorTags = new CodeVulnerabilityDetectorTagsPropertyList(this, "code_vulnerability_detector_tags", true);
  public get codeVulnerabilityDetectorTags() {
    return this._codeVulnerabilityDetectorTags;
  }
  public putCodeVulnerabilityDetectorTags(value: CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorTags.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorTags() {
    this._codeVulnerabilityDetectorTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorTagsInput() {
    return this._codeVulnerabilityDetectorTags.internalValue;
  }

  // code_vulnerability_file_path - computed: false, optional: true, required: false
  private _codeVulnerabilityFilePath = new CodeVulnerabilityFilePathPropertyList(this, "code_vulnerability_file_path", true);
  public get codeVulnerabilityFilePath() {
    return this._codeVulnerabilityFilePath;
  }
  public putCodeVulnerabilityFilePath(value: CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable) {
    this._codeVulnerabilityFilePath.internalValue = value;
  }
  public resetCodeVulnerabilityFilePath() {
    this._codeVulnerabilityFilePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityFilePathInput() {
    return this._codeVulnerabilityFilePath.internalValue;
  }

  // component_id - computed: false, optional: true, required: false
  private _componentId = new ComponentIdPropertyList(this, "component_id", true);
  public get componentId() {
    return this._componentId;
  }
  public putComponentId(value: ComponentIdProperty[] | cdktn.IResolvable) {
    this._componentId.internalValue = value;
  }
  public resetComponentId() {
    this._componentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId.internalValue;
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType = new ComponentTypePropertyList(this, "component_type", true);
  public get componentType() {
    return this._componentType;
  }
  public putComponentType(value: ComponentTypeProperty[] | cdktn.IResolvable) {
    this._componentType.internalValue = value;
  }
  public resetComponentType() {
    this._componentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType.internalValue;
  }

  // ec2_instance_image_id - computed: false, optional: true, required: false
  private _ec2InstanceImageId = new Ec2InstanceImageIdPropertyList(this, "ec2_instance_image_id", true);
  public get ec2InstanceImageId() {
    return this._ec2InstanceImageId;
  }
  public putEc2InstanceImageId(value: Ec2InstanceImageIdProperty[] | cdktn.IResolvable) {
    this._ec2InstanceImageId.internalValue = value;
  }
  public resetEc2InstanceImageId() {
    this._ec2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceImageIdInput() {
    return this._ec2InstanceImageId.internalValue;
  }

  // ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _ec2InstanceSubnetId = new Ec2InstanceSubnetIdPropertyList(this, "ec2_instance_subnet_id", true);
  public get ec2InstanceSubnetId() {
    return this._ec2InstanceSubnetId;
  }
  public putEc2InstanceSubnetId(value: Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable) {
    this._ec2InstanceSubnetId.internalValue = value;
  }
  public resetEc2InstanceSubnetId() {
    this._ec2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceSubnetIdInput() {
    return this._ec2InstanceSubnetId.internalValue;
  }

  // ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _ec2InstanceVpcId = new Ec2InstanceVpcIdPropertyList(this, "ec2_instance_vpc_id", true);
  public get ec2InstanceVpcId() {
    return this._ec2InstanceVpcId;
  }
  public putEc2InstanceVpcId(value: Ec2InstanceVpcIdProperty[] | cdktn.IResolvable) {
    this._ec2InstanceVpcId.internalValue = value;
  }
  public resetEc2InstanceVpcId() {
    this._ec2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceVpcIdInput() {
    return this._ec2InstanceVpcId.internalValue;
  }

  // ecr_image_architecture - computed: false, optional: true, required: false
  private _ecrImageArchitecture = new EcrImageArchitecturePropertyList(this, "ecr_image_architecture", true);
  public get ecrImageArchitecture() {
    return this._ecrImageArchitecture;
  }
  public putEcrImageArchitecture(value: EcrImageArchitectureProperty[] | cdktn.IResolvable) {
    this._ecrImageArchitecture.internalValue = value;
  }
  public resetEcrImageArchitecture() {
    this._ecrImageArchitecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageArchitectureInput() {
    return this._ecrImageArchitecture.internalValue;
  }

  // ecr_image_hash - computed: false, optional: true, required: false
  private _ecrImageHash = new EcrImageHashPropertyList(this, "ecr_image_hash", true);
  public get ecrImageHash() {
    return this._ecrImageHash;
  }
  public putEcrImageHash(value: EcrImageHashProperty[] | cdktn.IResolvable) {
    this._ecrImageHash.internalValue = value;
  }
  public resetEcrImageHash() {
    this._ecrImageHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageHashInput() {
    return this._ecrImageHash.internalValue;
  }

  // ecr_image_in_use_count - computed: false, optional: true, required: false
  private _ecrImageInUseCount = new EcrImageInUseCountPropertyList(this, "ecr_image_in_use_count", true);
  public get ecrImageInUseCount() {
    return this._ecrImageInUseCount;
  }
  public putEcrImageInUseCount(value: EcrImageInUseCountProperty[] | cdktn.IResolvable) {
    this._ecrImageInUseCount.internalValue = value;
  }
  public resetEcrImageInUseCount() {
    this._ecrImageInUseCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageInUseCountInput() {
    return this._ecrImageInUseCount.internalValue;
  }

  // ecr_image_last_in_use_at - computed: false, optional: true, required: false
  private _ecrImageLastInUseAt = new EcrImageLastInUseAtPropertyList(this, "ecr_image_last_in_use_at", true);
  public get ecrImageLastInUseAt() {
    return this._ecrImageLastInUseAt;
  }
  public putEcrImageLastInUseAt(value: EcrImageLastInUseAtProperty[] | cdktn.IResolvable) {
    this._ecrImageLastInUseAt.internalValue = value;
  }
  public resetEcrImageLastInUseAt() {
    this._ecrImageLastInUseAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageLastInUseAtInput() {
    return this._ecrImageLastInUseAt.internalValue;
  }

  // ecr_image_pushed_at - computed: false, optional: true, required: false
  private _ecrImagePushedAt = new EcrImagePushedAtPropertyList(this, "ecr_image_pushed_at", true);
  public get ecrImagePushedAt() {
    return this._ecrImagePushedAt;
  }
  public putEcrImagePushedAt(value: EcrImagePushedAtProperty[] | cdktn.IResolvable) {
    this._ecrImagePushedAt.internalValue = value;
  }
  public resetEcrImagePushedAt() {
    this._ecrImagePushedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImagePushedAtInput() {
    return this._ecrImagePushedAt.internalValue;
  }

  // ecr_image_registry - computed: false, optional: true, required: false
  private _ecrImageRegistry = new EcrImageRegistryPropertyList(this, "ecr_image_registry", true);
  public get ecrImageRegistry() {
    return this._ecrImageRegistry;
  }
  public putEcrImageRegistry(value: EcrImageRegistryProperty[] | cdktn.IResolvable) {
    this._ecrImageRegistry.internalValue = value;
  }
  public resetEcrImageRegistry() {
    this._ecrImageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRegistryInput() {
    return this._ecrImageRegistry.internalValue;
  }

  // ecr_image_repository_name - computed: false, optional: true, required: false
  private _ecrImageRepositoryName = new EcrImageRepositoryNamePropertyList(this, "ecr_image_repository_name", true);
  public get ecrImageRepositoryName() {
    return this._ecrImageRepositoryName;
  }
  public putEcrImageRepositoryName(value: EcrImageRepositoryNameProperty[] | cdktn.IResolvable) {
    this._ecrImageRepositoryName.internalValue = value;
  }
  public resetEcrImageRepositoryName() {
    this._ecrImageRepositoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRepositoryNameInput() {
    return this._ecrImageRepositoryName.internalValue;
  }

  // ecr_image_tags - computed: false, optional: true, required: false
  private _ecrImageTags = new EcrImageTagsPropertyList(this, "ecr_image_tags", true);
  public get ecrImageTags() {
    return this._ecrImageTags;
  }
  public putEcrImageTags(value: EcrImageTagsProperty[] | cdktn.IResolvable) {
    this._ecrImageTags.internalValue = value;
  }
  public resetEcrImageTags() {
    this._ecrImageTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageTagsInput() {
    return this._ecrImageTags.internalValue;
  }

  // epss_score - computed: false, optional: true, required: false
  private _epssScore = new EpssScorePropertyList(this, "epss_score", true);
  public get epssScore() {
    return this._epssScore;
  }
  public putEpssScore(value: EpssScoreProperty[] | cdktn.IResolvable) {
    this._epssScore.internalValue = value;
  }
  public resetEpssScore() {
    this._epssScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epssScoreInput() {
    return this._epssScore.internalValue;
  }

  // exploit_available - computed: false, optional: true, required: false
  private _exploitAvailable = new ExploitAvailablePropertyList(this, "exploit_available", true);
  public get exploitAvailable() {
    return this._exploitAvailable;
  }
  public putExploitAvailable(value: ExploitAvailableProperty[] | cdktn.IResolvable) {
    this._exploitAvailable.internalValue = value;
  }
  public resetExploitAvailable() {
    this._exploitAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exploitAvailableInput() {
    return this._exploitAvailable.internalValue;
  }

  // finding_arn - computed: false, optional: true, required: false
  private _findingArn = new FindingArnPropertyList(this, "finding_arn", true);
  public get findingArn() {
    return this._findingArn;
  }
  public putFindingArn(value: FindingArnProperty[] | cdktn.IResolvable) {
    this._findingArn.internalValue = value;
  }
  public resetFindingArn() {
    this._findingArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingArnInput() {
    return this._findingArn.internalValue;
  }

  // finding_status - computed: false, optional: true, required: false
  private _findingStatus = new FindingStatusPropertyList(this, "finding_status", true);
  public get findingStatus() {
    return this._findingStatus;
  }
  public putFindingStatus(value: FindingStatusProperty[] | cdktn.IResolvable) {
    this._findingStatus.internalValue = value;
  }
  public resetFindingStatus() {
    this._findingStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingStatusInput() {
    return this._findingStatus.internalValue;
  }

  // finding_type - computed: false, optional: true, required: false
  private _findingType = new FindingTypePropertyList(this, "finding_type", true);
  public get findingType() {
    return this._findingType;
  }
  public putFindingType(value: FindingTypeProperty[] | cdktn.IResolvable) {
    this._findingType.internalValue = value;
  }
  public resetFindingType() {
    this._findingType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypeInput() {
    return this._findingType.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new FirstObservedAtPropertyList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: FirstObservedAtProperty[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // fix_available - computed: false, optional: true, required: false
  private _fixAvailable = new FixAvailablePropertyList(this, "fix_available", true);
  public get fixAvailable() {
    return this._fixAvailable;
  }
  public putFixAvailable(value: FixAvailableProperty[] | cdktn.IResolvable) {
    this._fixAvailable.internalValue = value;
  }
  public resetFixAvailable() {
    this._fixAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixAvailableInput() {
    return this._fixAvailable.internalValue;
  }

  // inspector_score - computed: false, optional: true, required: false
  private _inspectorScore = new InspectorScorePropertyList(this, "inspector_score", true);
  public get inspectorScore() {
    return this._inspectorScore;
  }
  public putInspectorScore(value: InspectorScoreProperty[] | cdktn.IResolvable) {
    this._inspectorScore.internalValue = value;
  }
  public resetInspectorScore() {
    this._inspectorScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectorScoreInput() {
    return this._inspectorScore.internalValue;
  }

  // lambda_function_execution_role_arn - computed: false, optional: true, required: false
  private _lambdaFunctionExecutionRoleArn = new LambdaFunctionExecutionRoleArnPropertyList(this, "lambda_function_execution_role_arn", true);
  public get lambdaFunctionExecutionRoleArn() {
    return this._lambdaFunctionExecutionRoleArn;
  }
  public putLambdaFunctionExecutionRoleArn(value: LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionExecutionRoleArn.internalValue = value;
  }
  public resetLambdaFunctionExecutionRoleArn() {
    this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionExecutionRoleArnInput() {
    return this._lambdaFunctionExecutionRoleArn.internalValue;
  }

  // lambda_function_last_modified_at - computed: false, optional: true, required: false
  private _lambdaFunctionLastModifiedAt = new LambdaFunctionLastModifiedAtPropertyList(this, "lambda_function_last_modified_at", true);
  public get lambdaFunctionLastModifiedAt() {
    return this._lambdaFunctionLastModifiedAt;
  }
  public putLambdaFunctionLastModifiedAt(value: LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionLastModifiedAt.internalValue = value;
  }
  public resetLambdaFunctionLastModifiedAt() {
    this._lambdaFunctionLastModifiedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLastModifiedAtInput() {
    return this._lambdaFunctionLastModifiedAt.internalValue;
  }

  // lambda_function_layers - computed: false, optional: true, required: false
  private _lambdaFunctionLayers = new LambdaFunctionLayersPropertyList(this, "lambda_function_layers", true);
  public get lambdaFunctionLayers() {
    return this._lambdaFunctionLayers;
  }
  public putLambdaFunctionLayers(value: LambdaFunctionLayersProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionLayers.internalValue = value;
  }
  public resetLambdaFunctionLayers() {
    this._lambdaFunctionLayers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLayersInput() {
    return this._lambdaFunctionLayers.internalValue;
  }

  // lambda_function_name - computed: false, optional: true, required: false
  private _lambdaFunctionName = new LambdaFunctionNamePropertyList(this, "lambda_function_name", true);
  public get lambdaFunctionName() {
    return this._lambdaFunctionName;
  }
  public putLambdaFunctionName(value: LambdaFunctionNameProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionName.internalValue = value;
  }
  public resetLambdaFunctionName() {
    this._lambdaFunctionName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionNameInput() {
    return this._lambdaFunctionName.internalValue;
  }

  // lambda_function_runtime - computed: false, optional: true, required: false
  private _lambdaFunctionRuntime = new LambdaFunctionRuntimePropertyList(this, "lambda_function_runtime", true);
  public get lambdaFunctionRuntime() {
    return this._lambdaFunctionRuntime;
  }
  public putLambdaFunctionRuntime(value: LambdaFunctionRuntimeProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionRuntime.internalValue = value;
  }
  public resetLambdaFunctionRuntime() {
    this._lambdaFunctionRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionRuntimeInput() {
    return this._lambdaFunctionRuntime.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new LastObservedAtPropertyList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: LastObservedAtProperty[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol = new NetworkProtocolPropertyList(this, "network_protocol", true);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: NetworkProtocolProperty[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new PortRangePropertyList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: PortRangeProperty[] | cdktn.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // related_vulnerabilities - computed: false, optional: true, required: false
  private _relatedVulnerabilities = new RelatedVulnerabilitiesPropertyList(this, "related_vulnerabilities", true);
  public get relatedVulnerabilities() {
    return this._relatedVulnerabilities;
  }
  public putRelatedVulnerabilities(value: RelatedVulnerabilitiesProperty[] | cdktn.IResolvable) {
    this._relatedVulnerabilities.internalValue = value;
  }
  public resetRelatedVulnerabilities() {
    this._relatedVulnerabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedVulnerabilitiesInput() {
    return this._relatedVulnerabilities.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new ResourceIdPropertyList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: ResourceIdProperty[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ResourceTagsPropertyList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ResourceTagsProperty[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new ResourceTypePropertyList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: ResourceTypeProperty[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new SeverityPropertyList(this, "severity", true);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: SeverityProperty[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new TitlePropertyList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: TitleProperty[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new UpdatedAtPropertyList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: UpdatedAtProperty[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // vendor_severity - computed: false, optional: true, required: false
  private _vendorSeverity = new VendorSeverityPropertyList(this, "vendor_severity", true);
  public get vendorSeverity() {
    return this._vendorSeverity;
  }
  public putVendorSeverity(value: VendorSeverityProperty[] | cdktn.IResolvable) {
    this._vendorSeverity.internalValue = value;
  }
  public resetVendorSeverity() {
    this._vendorSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSeverityInput() {
    return this._vendorSeverity.internalValue;
  }

  // vulnerability_id - computed: false, optional: true, required: false
  private _vulnerabilityId = new VulnerabilityIdPropertyList(this, "vulnerability_id", true);
  public get vulnerabilityId() {
    return this._vulnerabilityId;
  }
  public putVulnerabilityId(value: VulnerabilityIdProperty[] | cdktn.IResolvable) {
    this._vulnerabilityId.internalValue = value;
  }
  public resetVulnerabilityId() {
    this._vulnerabilityId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityIdInput() {
    return this._vulnerabilityId.internalValue;
  }

  // vulnerability_source - computed: false, optional: true, required: false
  private _vulnerabilitySource = new VulnerabilitySourcePropertyList(this, "vulnerability_source", true);
  public get vulnerabilitySource() {
    return this._vulnerabilitySource;
  }
  public putVulnerabilitySource(value: VulnerabilitySourceProperty[] | cdktn.IResolvable) {
    this._vulnerabilitySource.internalValue = value;
  }
  public resetVulnerabilitySource() {
    this._vulnerabilitySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitySourceInput() {
    return this._vulnerabilitySource.internalValue;
  }

  // vulnerable_packages - computed: false, optional: true, required: false
  private _vulnerablePackages = new VulnerablePackagesPropertyList(this, "vulnerable_packages", true);
  public get vulnerablePackages() {
    return this._vulnerablePackages;
  }
  public putVulnerablePackages(value: VulnerablePackagesProperty[] | cdktn.IResolvable) {
    this._vulnerablePackages.internalValue = value;
  }
  public resetVulnerablePackages() {
    this._vulnerablePackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerablePackagesInput() {
    return this._vulnerablePackages.internalValue;
  }
}

export class FilterCriteriaPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterCriteriaProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterCriteriaPropertyOutputReference {
    return new FilterCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
