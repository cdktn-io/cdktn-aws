// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfUserHierarchyStructureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#id TfUserHierarchyStructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#instance_id TfUserHierarchyStructure#instance_id}
  */
  readonly instanceId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#region TfUserHierarchyStructure#region}
  */
  readonly region?: string;
  /**
  * hierarchy_structure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#hierarchy_structure TfUserHierarchyStructure#hierarchy_structure}
  */
  readonly hierarchyStructure: TfUserHierarchyStructure.HierarchyStructureProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}
*/
export class TfUserHierarchyStructure extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_user_hierarchy_structure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfUserHierarchyStructure resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfUserHierarchyStructure to import
  * @param importFromId The id of the existing TfUserHierarchyStructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfUserHierarchyStructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_user_hierarchy_structure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfUserHierarchyStructureConfig
  */
  public constructor(scope: Construct, id: string, config: TfUserHierarchyStructureConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_user_hierarchy_structure',
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
    this._hierarchyStructure.internalValue = config.hierarchyStructure;
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

  // hierarchy_structure - computed: false, optional: false, required: true
  private _hierarchyStructure = new TfUserHierarchyStructure.HierarchyStructurePropertyOutputReference(this, "hierarchy_structure");
  public get hierarchyStructure() {
    return this._hierarchyStructure;
  }
  public putHierarchyStructure(value: TfUserHierarchyStructure.HierarchyStructureProperty) {
    this._hierarchyStructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyStructureInput() {
    return this._hierarchyStructure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      region: cdktn.stringToTerraform(this._region),
      hierarchy_structure: tfUserHierarchyStructureHierarchyStructurePropertyToTerraform(this._hierarchyStructure.internalValue),
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
      hierarchy_structure: {
        value: tfUserHierarchyStructureHierarchyStructurePropertyToHclTerraform(this._hierarchyStructure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserHierarchyStructure.HierarchyStructurePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfUserHierarchyStructureLevelFivePropertyToTerraform(struct?: TfUserHierarchyStructure.LevelFivePropertyOutputReference | TfUserHierarchyStructure.LevelFiveProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfUserHierarchyStructureLevelFivePropertyToHclTerraform(struct?: TfUserHierarchyStructure.LevelFivePropertyOutputReference | TfUserHierarchyStructure.LevelFiveProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserHierarchyStructureLevelFourPropertyToTerraform(struct?: TfUserHierarchyStructure.LevelFourPropertyOutputReference | TfUserHierarchyStructure.LevelFourProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfUserHierarchyStructureLevelFourPropertyToHclTerraform(struct?: TfUserHierarchyStructure.LevelFourPropertyOutputReference | TfUserHierarchyStructure.LevelFourProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserHierarchyStructureLevelOnePropertyToTerraform(struct?: TfUserHierarchyStructure.LevelOnePropertyOutputReference | TfUserHierarchyStructure.LevelOneProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfUserHierarchyStructureLevelOnePropertyToHclTerraform(struct?: TfUserHierarchyStructure.LevelOnePropertyOutputReference | TfUserHierarchyStructure.LevelOneProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserHierarchyStructureLevelThreePropertyToTerraform(struct?: TfUserHierarchyStructure.LevelThreePropertyOutputReference | TfUserHierarchyStructure.LevelThreeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfUserHierarchyStructureLevelThreePropertyToHclTerraform(struct?: TfUserHierarchyStructure.LevelThreePropertyOutputReference | TfUserHierarchyStructure.LevelThreeProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserHierarchyStructureLevelTwoPropertyToTerraform(struct?: TfUserHierarchyStructure.LevelTwoPropertyOutputReference | TfUserHierarchyStructure.LevelTwoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfUserHierarchyStructureLevelTwoPropertyToHclTerraform(struct?: TfUserHierarchyStructure.LevelTwoPropertyOutputReference | TfUserHierarchyStructure.LevelTwoProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserHierarchyStructureHierarchyStructurePropertyToTerraform(struct?: TfUserHierarchyStructure.HierarchyStructurePropertyOutputReference | TfUserHierarchyStructure.HierarchyStructureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    level_five: tfUserHierarchyStructureLevelFivePropertyToTerraform(struct!.levelFive),
    level_four: tfUserHierarchyStructureLevelFourPropertyToTerraform(struct!.levelFour),
    level_one: tfUserHierarchyStructureLevelOnePropertyToTerraform(struct!.levelOne),
    level_three: tfUserHierarchyStructureLevelThreePropertyToTerraform(struct!.levelThree),
    level_two: tfUserHierarchyStructureLevelTwoPropertyToTerraform(struct!.levelTwo),
  }
}


export function tfUserHierarchyStructureHierarchyStructurePropertyToHclTerraform(struct?: TfUserHierarchyStructure.HierarchyStructurePropertyOutputReference | TfUserHierarchyStructure.HierarchyStructureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    level_five: {
      value: tfUserHierarchyStructureLevelFivePropertyToHclTerraform(struct!.levelFive),
      isBlock: true,
      type: "list",
      storageClassType: "LevelFivePropertyList",
    },
    level_four: {
      value: tfUserHierarchyStructureLevelFourPropertyToHclTerraform(struct!.levelFour),
      isBlock: true,
      type: "list",
      storageClassType: "LevelFourPropertyList",
    },
    level_one: {
      value: tfUserHierarchyStructureLevelOnePropertyToHclTerraform(struct!.levelOne),
      isBlock: true,
      type: "list",
      storageClassType: "LevelOnePropertyList",
    },
    level_three: {
      value: tfUserHierarchyStructureLevelThreePropertyToHclTerraform(struct!.levelThree),
      isBlock: true,
      type: "list",
      storageClassType: "LevelThreePropertyList",
    },
    level_two: {
      value: tfUserHierarchyStructureLevelTwoPropertyToHclTerraform(struct!.levelTwo),
      isBlock: true,
      type: "list",
      storageClassType: "LevelTwoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfUserHierarchyStructure {
export interface LevelFiveProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#name TfUserHierarchyStructure#name}
  */
  readonly name: string;
}
export class LevelFivePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LevelFiveProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelFiveProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface LevelFourProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#name TfUserHierarchyStructure#name}
  */
  readonly name: string;
}
export class LevelFourPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LevelFourProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelFourProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface LevelOneProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#name TfUserHierarchyStructure#name}
  */
  readonly name: string;
}
export class LevelOnePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LevelOneProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelOneProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface LevelThreeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#name TfUserHierarchyStructure#name}
  */
  readonly name: string;
}
export class LevelThreePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LevelThreeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelThreeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface LevelTwoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#name TfUserHierarchyStructure#name}
  */
  readonly name: string;
}
export class LevelTwoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LevelTwoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelTwoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface HierarchyStructureProperty {
  /**
  * level_five block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#level_five TfUserHierarchyStructure#level_five}
  */
  readonly levelFive?: LevelFiveProperty;
  /**
  * level_four block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#level_four TfUserHierarchyStructure#level_four}
  */
  readonly levelFour?: LevelFourProperty;
  /**
  * level_one block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#level_one TfUserHierarchyStructure#level_one}
  */
  readonly levelOne?: LevelOneProperty;
  /**
  * level_three block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#level_three TfUserHierarchyStructure#level_three}
  */
  readonly levelThree?: LevelThreeProperty;
  /**
  * level_two block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_user_hierarchy_structure#level_two TfUserHierarchyStructure#level_two}
  */
  readonly levelTwo?: LevelTwoProperty;
}
export class HierarchyStructurePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HierarchyStructureProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelFive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelFive = this._levelFive?.internalValue;
    }
    if (this._levelFour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelFour = this._levelFour?.internalValue;
    }
    if (this._levelOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelOne = this._levelOne?.internalValue;
    }
    if (this._levelThree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelThree = this._levelThree?.internalValue;
    }
    if (this._levelTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelTwo = this._levelTwo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyStructureProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._levelFive.internalValue = undefined;
      this._levelFour.internalValue = undefined;
      this._levelOne.internalValue = undefined;
      this._levelThree.internalValue = undefined;
      this._levelTwo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._levelFive.internalValue = value.levelFive;
      this._levelFour.internalValue = value.levelFour;
      this._levelOne.internalValue = value.levelOne;
      this._levelThree.internalValue = value.levelThree;
      this._levelTwo.internalValue = value.levelTwo;
    }
  }

  // level_five - computed: false, optional: true, required: false
  private _levelFive = new LevelFivePropertyOutputReference(this, "level_five");
  public get levelFive() {
    return this._levelFive;
  }
  public putLevelFive(value: LevelFiveProperty) {
    this._levelFive.internalValue = value;
  }
  public resetLevelFive() {
    this._levelFive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelFiveInput() {
    return this._levelFive.internalValue;
  }

  // level_four - computed: false, optional: true, required: false
  private _levelFour = new LevelFourPropertyOutputReference(this, "level_four");
  public get levelFour() {
    return this._levelFour;
  }
  public putLevelFour(value: LevelFourProperty) {
    this._levelFour.internalValue = value;
  }
  public resetLevelFour() {
    this._levelFour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelFourInput() {
    return this._levelFour.internalValue;
  }

  // level_one - computed: false, optional: true, required: false
  private _levelOne = new LevelOnePropertyOutputReference(this, "level_one");
  public get levelOne() {
    return this._levelOne;
  }
  public putLevelOne(value: LevelOneProperty) {
    this._levelOne.internalValue = value;
  }
  public resetLevelOne() {
    this._levelOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelOneInput() {
    return this._levelOne.internalValue;
  }

  // level_three - computed: false, optional: true, required: false
  private _levelThree = new LevelThreePropertyOutputReference(this, "level_three");
  public get levelThree() {
    return this._levelThree;
  }
  public putLevelThree(value: LevelThreeProperty) {
    this._levelThree.internalValue = value;
  }
  public resetLevelThree() {
    this._levelThree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelThreeInput() {
    return this._levelThree.internalValue;
  }

  // level_two - computed: false, optional: true, required: false
  private _levelTwo = new LevelTwoPropertyOutputReference(this, "level_two");
  public get levelTwo() {
    return this._levelTwo;
  }
  public putLevelTwo(value: LevelTwoProperty) {
    this._levelTwo.internalValue = value;
  }
  public resetLevelTwo() {
    this._levelTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTwoInput() {
    return this._levelTwo.internalValue;
  }
}
}
