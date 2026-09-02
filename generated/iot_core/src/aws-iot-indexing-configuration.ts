// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfIndexingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#id TfIndexingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#region TfIndexingConfiguration#region}
  */
  readonly region?: string;
  /**
  * thing_group_indexing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#thing_group_indexing_configuration TfIndexingConfiguration#thing_group_indexing_configuration}
  */
  readonly thingGroupIndexingConfiguration?: TfIndexingConfiguration.ThingGroupIndexingConfigurationProperty;
  /**
  * thing_indexing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#thing_indexing_configuration TfIndexingConfiguration#thing_indexing_configuration}
  */
  readonly thingIndexingConfiguration?: TfIndexingConfiguration.ThingIndexingConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration}
*/
export class TfIndexingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_indexing_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfIndexingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfIndexingConfiguration to import
  * @param importFromId The id of the existing TfIndexingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfIndexingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_indexing_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfIndexingConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfIndexingConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_indexing_configuration',
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
    this._thingGroupIndexingConfiguration.internalValue = config.thingGroupIndexingConfiguration;
    this._thingIndexingConfiguration.internalValue = config.thingIndexingConfiguration;
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

  // thing_group_indexing_configuration - computed: false, optional: true, required: false
  private _thingGroupIndexingConfiguration = new TfIndexingConfiguration.ThingGroupIndexingConfigurationPropertyOutputReference(this, "thing_group_indexing_configuration");
  public get thingGroupIndexingConfiguration() {
    return this._thingGroupIndexingConfiguration;
  }
  public putThingGroupIndexingConfiguration(value: TfIndexingConfiguration.ThingGroupIndexingConfigurationProperty) {
    this._thingGroupIndexingConfiguration.internalValue = value;
  }
  public resetThingGroupIndexingConfiguration() {
    this._thingGroupIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingConfigurationInput() {
    return this._thingGroupIndexingConfiguration.internalValue;
  }

  // thing_indexing_configuration - computed: false, optional: true, required: false
  private _thingIndexingConfiguration = new TfIndexingConfiguration.ThingIndexingConfigurationPropertyOutputReference(this, "thing_indexing_configuration");
  public get thingIndexingConfiguration() {
    return this._thingIndexingConfiguration;
  }
  public putThingIndexingConfiguration(value: TfIndexingConfiguration.ThingIndexingConfigurationProperty) {
    this._thingIndexingConfiguration.internalValue = value;
  }
  public resetThingIndexingConfiguration() {
    this._thingIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingConfigurationInput() {
    return this._thingIndexingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      thing_group_indexing_configuration: tfIndexingConfigurationThingGroupIndexingConfigurationPropertyToTerraform(this._thingGroupIndexingConfiguration.internalValue),
      thing_indexing_configuration: tfIndexingConfigurationThingIndexingConfigurationPropertyToTerraform(this._thingIndexingConfiguration.internalValue),
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
      thing_group_indexing_configuration: {
        value: tfIndexingConfigurationThingGroupIndexingConfigurationPropertyToHclTerraform(this._thingGroupIndexingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIndexingConfiguration.ThingGroupIndexingConfigurationPropertyList",
      },
      thing_indexing_configuration: {
        value: tfIndexingConfigurationThingIndexingConfigurationPropertyToHclTerraform(this._thingIndexingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIndexingConfiguration.ThingIndexingConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfIndexingConfigurationThingGroupIndexingConfigurationCustomFieldPropertyToTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationCustomFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfIndexingConfigurationThingGroupIndexingConfigurationCustomFieldPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationCustomFieldProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationThingGroupIndexingConfigurationManagedFieldPropertyToTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationManagedFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfIndexingConfigurationThingGroupIndexingConfigurationManagedFieldPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationManagedFieldProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationThingGroupIndexingConfigurationPropertyToTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationPropertyOutputReference | TfIndexingConfiguration.ThingGroupIndexingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    thing_group_indexing_mode: cdktn.stringToTerraform(struct!.thingGroupIndexingMode),
    custom_field: cdktn.listMapper(tfIndexingConfigurationThingGroupIndexingConfigurationCustomFieldPropertyToTerraform, true)(struct!.customField),
    managed_field: cdktn.listMapper(tfIndexingConfigurationThingGroupIndexingConfigurationManagedFieldPropertyToTerraform, true)(struct!.managedField),
  }
}


export function tfIndexingConfigurationThingGroupIndexingConfigurationPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingGroupIndexingConfigurationPropertyOutputReference | TfIndexingConfiguration.ThingGroupIndexingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    thing_group_indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.thingGroupIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_field: {
      value: cdktn.listMapperHcl(tfIndexingConfigurationThingGroupIndexingConfigurationCustomFieldPropertyToHclTerraform, true)(struct!.customField),
      isBlock: true,
      type: "set",
      storageClassType: "ThingGroupIndexingConfigurationCustomFieldPropertyList",
    },
    managed_field: {
      value: cdktn.listMapperHcl(tfIndexingConfigurationThingGroupIndexingConfigurationManagedFieldPropertyToHclTerraform, true)(struct!.managedField),
      isBlock: true,
      type: "set",
      storageClassType: "ThingGroupIndexingConfigurationManagedFieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationThingIndexingConfigurationCustomFieldPropertyToTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationCustomFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfIndexingConfigurationThingIndexingConfigurationCustomFieldPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationCustomFieldProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationFilterPropertyToTerraform(struct?: TfIndexingConfiguration.FilterPropertyOutputReference | TfIndexingConfiguration.FilterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    named_shadow_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namedShadowNames),
  }
}


export function tfIndexingConfigurationFilterPropertyToHclTerraform(struct?: TfIndexingConfiguration.FilterPropertyOutputReference | TfIndexingConfiguration.FilterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    named_shadow_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namedShadowNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationThingIndexingConfigurationManagedFieldPropertyToTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationManagedFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfIndexingConfigurationThingIndexingConfigurationManagedFieldPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationManagedFieldProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIndexingConfigurationThingIndexingConfigurationPropertyToTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationPropertyOutputReference | TfIndexingConfiguration.ThingIndexingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_defender_indexing_mode: cdktn.stringToTerraform(struct!.deviceDefenderIndexingMode),
    named_shadow_indexing_mode: cdktn.stringToTerraform(struct!.namedShadowIndexingMode),
    thing_connectivity_indexing_mode: cdktn.stringToTerraform(struct!.thingConnectivityIndexingMode),
    thing_indexing_mode: cdktn.stringToTerraform(struct!.thingIndexingMode),
    custom_field: cdktn.listMapper(tfIndexingConfigurationThingIndexingConfigurationCustomFieldPropertyToTerraform, true)(struct!.customField),
    filter: tfIndexingConfigurationFilterPropertyToTerraform(struct!.filter),
    managed_field: cdktn.listMapper(tfIndexingConfigurationThingIndexingConfigurationManagedFieldPropertyToTerraform, true)(struct!.managedField),
  }
}


export function tfIndexingConfigurationThingIndexingConfigurationPropertyToHclTerraform(struct?: TfIndexingConfiguration.ThingIndexingConfigurationPropertyOutputReference | TfIndexingConfiguration.ThingIndexingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_defender_indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.deviceDefenderIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_shadow_indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.namedShadowIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_connectivity_indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.thingConnectivityIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.thingIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_field: {
      value: cdktn.listMapperHcl(tfIndexingConfigurationThingIndexingConfigurationCustomFieldPropertyToHclTerraform, true)(struct!.customField),
      isBlock: true,
      type: "set",
      storageClassType: "ThingIndexingConfigurationCustomFieldPropertyList",
    },
    filter: {
      value: tfIndexingConfigurationFilterPropertyToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "FilterPropertyList",
    },
    managed_field: {
      value: cdktn.listMapperHcl(tfIndexingConfigurationThingIndexingConfigurationManagedFieldPropertyToHclTerraform, true)(struct!.managedField),
      isBlock: true,
      type: "set",
      storageClassType: "ThingIndexingConfigurationManagedFieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfIndexingConfiguration {
export interface ThingGroupIndexingConfigurationCustomFieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#name TfIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#type TfIndexingConfiguration#type}
  */
  readonly type?: string;
}
export class ThingGroupIndexingConfigurationCustomFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThingGroupIndexingConfigurationCustomFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingGroupIndexingConfigurationCustomFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ThingGroupIndexingConfigurationCustomFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ThingGroupIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ThingGroupIndexingConfigurationCustomFieldPropertyOutputReference {
    return new ThingGroupIndexingConfigurationCustomFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThingGroupIndexingConfigurationManagedFieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#name TfIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#type TfIndexingConfiguration#type}
  */
  readonly type?: string;
}
export class ThingGroupIndexingConfigurationManagedFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThingGroupIndexingConfigurationManagedFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingGroupIndexingConfigurationManagedFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ThingGroupIndexingConfigurationManagedFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ThingGroupIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ThingGroupIndexingConfigurationManagedFieldPropertyOutputReference {
    return new ThingGroupIndexingConfigurationManagedFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThingGroupIndexingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#thing_group_indexing_mode TfIndexingConfiguration#thing_group_indexing_mode}
  */
  readonly thingGroupIndexingMode: string;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#custom_field TfIndexingConfiguration#custom_field}
  */
  readonly customField?: ThingGroupIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable;
  /**
  * managed_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#managed_field TfIndexingConfiguration#managed_field}
  */
  readonly managedField?: ThingGroupIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable;
}
export class ThingGroupIndexingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThingGroupIndexingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thingGroupIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingGroupIndexingMode = this._thingGroupIndexingMode;
    }
    if (this._customField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField?.internalValue;
    }
    if (this._managedField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingGroupIndexingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thingGroupIndexingMode = undefined;
      this._customField.internalValue = undefined;
      this._managedField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thingGroupIndexingMode = value.thingGroupIndexingMode;
      this._customField.internalValue = value.customField;
      this._managedField.internalValue = value.managedField;
    }
  }

  // thing_group_indexing_mode - computed: false, optional: false, required: true
  private _thingGroupIndexingMode?: string; 
  public get thingGroupIndexingMode() {
    return this.getStringAttribute('thing_group_indexing_mode');
  }
  public set thingGroupIndexingMode(value: string) {
    this._thingGroupIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingModeInput() {
    return this._thingGroupIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new ThingGroupIndexingConfigurationCustomFieldPropertyList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: ThingGroupIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField = new ThingGroupIndexingConfigurationManagedFieldPropertyList(this, "managed_field", true);
  public get managedField() {
    return this._managedField;
  }
  public putManagedField(value: ThingGroupIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable) {
    this._managedField.internalValue = value;
  }
  public resetManagedField() {
    this._managedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField.internalValue;
  }
}
export interface ThingIndexingConfigurationCustomFieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#name TfIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#type TfIndexingConfiguration#type}
  */
  readonly type?: string;
}
export class ThingIndexingConfigurationCustomFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThingIndexingConfigurationCustomFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingIndexingConfigurationCustomFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ThingIndexingConfigurationCustomFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ThingIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ThingIndexingConfigurationCustomFieldPropertyOutputReference {
    return new ThingIndexingConfigurationCustomFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#named_shadow_names TfIndexingConfiguration#named_shadow_names}
  */
  readonly namedShadowNames?: string[];
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namedShadowNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedShadowNames = this._namedShadowNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namedShadowNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namedShadowNames = value.namedShadowNames;
    }
  }

  // named_shadow_names - computed: false, optional: true, required: false
  private _namedShadowNames?: string[]; 
  public get namedShadowNames() {
    return cdktn.Fn.tolist(this.getListAttribute('named_shadow_names'));
  }
  public set namedShadowNames(value: string[]) {
    this._namedShadowNames = value;
  }
  public resetNamedShadowNames() {
    this._namedShadowNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedShadowNamesInput() {
    return this._namedShadowNames;
  }
}
export interface ThingIndexingConfigurationManagedFieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#name TfIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#type TfIndexingConfiguration#type}
  */
  readonly type?: string;
}
export class ThingIndexingConfigurationManagedFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThingIndexingConfigurationManagedFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingIndexingConfigurationManagedFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ThingIndexingConfigurationManagedFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ThingIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ThingIndexingConfigurationManagedFieldPropertyOutputReference {
    return new ThingIndexingConfigurationManagedFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThingIndexingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#device_defender_indexing_mode TfIndexingConfiguration#device_defender_indexing_mode}
  */
  readonly deviceDefenderIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#named_shadow_indexing_mode TfIndexingConfiguration#named_shadow_indexing_mode}
  */
  readonly namedShadowIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#thing_connectivity_indexing_mode TfIndexingConfiguration#thing_connectivity_indexing_mode}
  */
  readonly thingConnectivityIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#thing_indexing_mode TfIndexingConfiguration#thing_indexing_mode}
  */
  readonly thingIndexingMode: string;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#custom_field TfIndexingConfiguration#custom_field}
  */
  readonly customField?: ThingIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#filter TfIndexingConfiguration#filter}
  */
  readonly filter?: FilterProperty;
  /**
  * managed_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_indexing_configuration#managed_field TfIndexingConfiguration#managed_field}
  */
  readonly managedField?: ThingIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable;
}
export class ThingIndexingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThingIndexingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceDefenderIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefenderIndexingMode = this._deviceDefenderIndexingMode;
    }
    if (this._namedShadowIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedShadowIndexingMode = this._namedShadowIndexingMode;
    }
    if (this._thingConnectivityIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingConnectivityIndexingMode = this._thingConnectivityIndexingMode;
    }
    if (this._thingIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingIndexingMode = this._thingIndexingMode;
    }
    if (this._customField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._managedField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThingIndexingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceDefenderIndexingMode = undefined;
      this._namedShadowIndexingMode = undefined;
      this._thingConnectivityIndexingMode = undefined;
      this._thingIndexingMode = undefined;
      this._customField.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._managedField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceDefenderIndexingMode = value.deviceDefenderIndexingMode;
      this._namedShadowIndexingMode = value.namedShadowIndexingMode;
      this._thingConnectivityIndexingMode = value.thingConnectivityIndexingMode;
      this._thingIndexingMode = value.thingIndexingMode;
      this._customField.internalValue = value.customField;
      this._filter.internalValue = value.filter;
      this._managedField.internalValue = value.managedField;
    }
  }

  // device_defender_indexing_mode - computed: false, optional: true, required: false
  private _deviceDefenderIndexingMode?: string; 
  public get deviceDefenderIndexingMode() {
    return this.getStringAttribute('device_defender_indexing_mode');
  }
  public set deviceDefenderIndexingMode(value: string) {
    this._deviceDefenderIndexingMode = value;
  }
  public resetDeviceDefenderIndexingMode() {
    this._deviceDefenderIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefenderIndexingModeInput() {
    return this._deviceDefenderIndexingMode;
  }

  // named_shadow_indexing_mode - computed: false, optional: true, required: false
  private _namedShadowIndexingMode?: string; 
  public get namedShadowIndexingMode() {
    return this.getStringAttribute('named_shadow_indexing_mode');
  }
  public set namedShadowIndexingMode(value: string) {
    this._namedShadowIndexingMode = value;
  }
  public resetNamedShadowIndexingMode() {
    this._namedShadowIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedShadowIndexingModeInput() {
    return this._namedShadowIndexingMode;
  }

  // thing_connectivity_indexing_mode - computed: false, optional: true, required: false
  private _thingConnectivityIndexingMode?: string; 
  public get thingConnectivityIndexingMode() {
    return this.getStringAttribute('thing_connectivity_indexing_mode');
  }
  public set thingConnectivityIndexingMode(value: string) {
    this._thingConnectivityIndexingMode = value;
  }
  public resetThingConnectivityIndexingMode() {
    this._thingConnectivityIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingConnectivityIndexingModeInput() {
    return this._thingConnectivityIndexingMode;
  }

  // thing_indexing_mode - computed: false, optional: false, required: true
  private _thingIndexingMode?: string; 
  public get thingIndexingMode() {
    return this.getStringAttribute('thing_indexing_mode');
  }
  public set thingIndexingMode(value: string) {
    this._thingIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingModeInput() {
    return this._thingIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new ThingIndexingConfigurationCustomFieldPropertyList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: ThingIndexingConfigurationCustomFieldProperty[] | cdktn.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new FilterPropertyOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: FilterProperty) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField = new ThingIndexingConfigurationManagedFieldPropertyList(this, "managed_field", true);
  public get managedField() {
    return this._managedField;
  }
  public putManagedField(value: ThingIndexingConfigurationManagedFieldProperty[] | cdktn.IResolvable) {
    this._managedField.internalValue = value;
  }
  public resetManagedField() {
    this._managedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField.internalValue;
  }
}
}
