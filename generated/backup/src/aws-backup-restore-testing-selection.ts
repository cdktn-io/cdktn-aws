// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRestoreTestingSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#iam_role_arn AwsRestoreTestingSelection#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#name AwsRestoreTestingSelection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#protected_resource_arns AwsRestoreTestingSelection#protected_resource_arns}
  */
  readonly protectedResourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#protected_resource_type AwsRestoreTestingSelection#protected_resource_type}
  */
  readonly protectedResourceType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#region AwsRestoreTestingSelection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides AwsRestoreTestingSelection#restore_metadata_overrides}
  */
  readonly restoreMetadataOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name AwsRestoreTestingSelection#restore_testing_plan_name}
  */
  readonly restoreTestingPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#validation_window_hours AwsRestoreTestingSelection#validation_window_hours}
  */
  readonly validationWindowHours?: number;
  /**
  * protected_resource_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions AwsRestoreTestingSelection#protected_resource_conditions}
  */
  readonly protectedResourceConditions?: AwsRestoreTestingSelection.ProtectedResourceConditionsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}
*/
export class AwsRestoreTestingSelection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_restore_testing_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRestoreTestingSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRestoreTestingSelection to import
  * @param importFromId The id of the existing AwsRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRestoreTestingSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_restore_testing_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRestoreTestingSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRestoreTestingSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_restore_testing_selection',
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
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._protectedResourceArns = config.protectedResourceArns;
    this._protectedResourceType = config.protectedResourceType;
    this._region = config.region;
    this._restoreMetadataOverrides = config.restoreMetadataOverrides;
    this._restoreTestingPlanName = config.restoreTestingPlanName;
    this._validationWindowHours = config.validationWindowHours;
    this._protectedResourceConditions.internalValue = config.protectedResourceConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // protected_resource_arns - computed: true, optional: true, required: false
  private _protectedResourceArns?: string[]; 
  public get protectedResourceArns() {
    return cdktn.Fn.tolist(this.getListAttribute('protected_resource_arns'));
  }
  public set protectedResourceArns(value: string[]) {
    this._protectedResourceArns = value;
  }
  public resetProtectedResourceArns() {
    this._protectedResourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceArnsInput() {
    return this._protectedResourceArns;
  }

  // protected_resource_type - computed: false, optional: false, required: true
  private _protectedResourceType?: string; 
  public get protectedResourceType() {
    return this.getStringAttribute('protected_resource_type');
  }
  public set protectedResourceType(value: string) {
    this._protectedResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceTypeInput() {
    return this._protectedResourceType;
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

  // restore_metadata_overrides - computed: true, optional: true, required: false
  private _restoreMetadataOverrides?: { [key: string]: string }; 
  public get restoreMetadataOverrides() {
    return this.getStringMapAttribute('restore_metadata_overrides');
  }
  public set restoreMetadataOverrides(value: { [key: string]: string }) {
    this._restoreMetadataOverrides = value;
  }
  public resetRestoreMetadataOverrides() {
    this._restoreMetadataOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreMetadataOverridesInput() {
    return this._restoreMetadataOverrides;
  }

  // restore_testing_plan_name - computed: false, optional: false, required: true
  private _restoreTestingPlanName?: string; 
  public get restoreTestingPlanName() {
    return this.getStringAttribute('restore_testing_plan_name');
  }
  public set restoreTestingPlanName(value: string) {
    this._restoreTestingPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTestingPlanNameInput() {
    return this._restoreTestingPlanName;
  }

  // validation_window_hours - computed: true, optional: true, required: false
  private _validationWindowHours?: number; 
  public get validationWindowHours() {
    return this.getNumberAttribute('validation_window_hours');
  }
  public set validationWindowHours(value: number) {
    this._validationWindowHours = value;
  }
  public resetValidationWindowHours() {
    this._validationWindowHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationWindowHoursInput() {
    return this._validationWindowHours;
  }

  // protected_resource_conditions - computed: false, optional: true, required: false
  private _protectedResourceConditions = new AwsRestoreTestingSelection.ProtectedResourceConditionsPropertyList(this, "protected_resource_conditions", false);
  public get protectedResourceConditions() {
    return this._protectedResourceConditions;
  }
  public putProtectedResourceConditions(value: AwsRestoreTestingSelection.ProtectedResourceConditionsProperty[] | cdktn.IResolvable) {
    this._protectedResourceConditions.internalValue = value;
  }
  public resetProtectedResourceConditions() {
    this._protectedResourceConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceConditionsInput() {
    return this._protectedResourceConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      name: cdktn.stringToTerraform(this._name),
      protected_resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protectedResourceArns),
      protected_resource_type: cdktn.stringToTerraform(this._protectedResourceType),
      region: cdktn.stringToTerraform(this._region),
      restore_metadata_overrides: cdktn.hashMapper(cdktn.stringToTerraform)(this._restoreMetadataOverrides),
      restore_testing_plan_name: cdktn.stringToTerraform(this._restoreTestingPlanName),
      validation_window_hours: cdktn.numberToTerraform(this._validationWindowHours),
      protected_resource_conditions: cdktn.listMapper(awsRestoreTestingSelectionProtectedResourceConditionsPropertyToTerraform, true)(this._protectedResourceConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
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
      protected_resource_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protectedResourceArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protected_resource_type: {
        value: cdktn.stringToHclTerraform(this._protectedResourceType),
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
      restore_metadata_overrides: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._restoreMetadataOverrides),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      restore_testing_plan_name: {
        value: cdktn.stringToHclTerraform(this._restoreTestingPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_window_hours: {
        value: cdktn.numberToHclTerraform(this._validationWindowHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_resource_conditions: {
        value: cdktn.listMapperHcl(awsRestoreTestingSelectionProtectedResourceConditionsPropertyToHclTerraform, true)(this._protectedResourceConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRestoreTestingSelection.ProtectedResourceConditionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRestoreTestingSelectionStringEqualsPropertyToTerraform(struct?: AwsRestoreTestingSelection.StringEqualsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsRestoreTestingSelectionStringEqualsPropertyToHclTerraform(struct?: AwsRestoreTestingSelection.StringEqualsProperty | cdktn.IResolvable): any {
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


export function awsRestoreTestingSelectionStringNotEqualsPropertyToTerraform(struct?: AwsRestoreTestingSelection.StringNotEqualsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsRestoreTestingSelectionStringNotEqualsPropertyToHclTerraform(struct?: AwsRestoreTestingSelection.StringNotEqualsProperty | cdktn.IResolvable): any {
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


export function awsRestoreTestingSelectionProtectedResourceConditionsPropertyToTerraform(struct?: AwsRestoreTestingSelection.ProtectedResourceConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_equals: cdktn.listMapper(awsRestoreTestingSelectionStringEqualsPropertyToTerraform, true)(struct!.stringEquals),
    string_not_equals: cdktn.listMapper(awsRestoreTestingSelectionStringNotEqualsPropertyToTerraform, true)(struct!.stringNotEquals),
  }
}


export function awsRestoreTestingSelectionProtectedResourceConditionsPropertyToHclTerraform(struct?: AwsRestoreTestingSelection.ProtectedResourceConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_equals: {
      value: cdktn.listMapperHcl(awsRestoreTestingSelectionStringEqualsPropertyToHclTerraform, true)(struct!.stringEquals),
      isBlock: true,
      type: "list",
      storageClassType: "StringEqualsPropertyList",
    },
    string_not_equals: {
      value: cdktn.listMapperHcl(awsRestoreTestingSelectionStringNotEqualsPropertyToHclTerraform, true)(struct!.stringNotEquals),
      isBlock: true,
      type: "list",
      storageClassType: "StringNotEqualsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRestoreTestingSelection {
export interface StringEqualsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#key AwsRestoreTestingSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#value AwsRestoreTestingSelection#value}
  */
  readonly value: string;
}
export class StringEqualsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringEqualsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StringEqualsProperty | cdktn.IResolvable | undefined) {
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

export class StringEqualsPropertyList extends cdktn.ComplexList {
  public internalValue? : StringEqualsProperty[] | cdktn.IResolvable

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
  public get(index: number): StringEqualsPropertyOutputReference {
    return new StringEqualsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringNotEqualsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#key AwsRestoreTestingSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#value AwsRestoreTestingSelection#value}
  */
  readonly value: string;
}
export class StringNotEqualsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringNotEqualsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StringNotEqualsProperty | cdktn.IResolvable | undefined) {
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

export class StringNotEqualsPropertyList extends cdktn.ComplexList {
  public internalValue? : StringNotEqualsProperty[] | cdktn.IResolvable

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
  public get(index: number): StringNotEqualsPropertyOutputReference {
    return new StringNotEqualsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedResourceConditionsProperty {
  /**
  * string_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#string_equals AwsRestoreTestingSelection#string_equals}
  */
  readonly stringEquals?: StringEqualsProperty[] | cdktn.IResolvable;
  /**
  * string_not_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_restore_testing_selection#string_not_equals AwsRestoreTestingSelection#string_not_equals}
  */
  readonly stringNotEquals?: StringNotEqualsProperty[] | cdktn.IResolvable;
}
export class ProtectedResourceConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProtectedResourceConditionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEquals = this._stringEquals?.internalValue;
    }
    if (this._stringNotEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedResourceConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = undefined;
      this._stringNotEquals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = value.stringEquals;
      this._stringNotEquals.internalValue = value.stringNotEquals;
    }
  }

  // string_equals - computed: false, optional: true, required: false
  private _stringEquals = new StringEqualsPropertyList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }
  public putStringEquals(value: StringEqualsProperty[] | cdktn.IResolvable) {
    this._stringEquals.internalValue = value;
  }
  public resetStringEquals() {
    this._stringEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEqualsInput() {
    return this._stringEquals.internalValue;
  }

  // string_not_equals - computed: false, optional: true, required: false
  private _stringNotEquals = new StringNotEqualsPropertyList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
  public putStringNotEquals(value: StringNotEqualsProperty[] | cdktn.IResolvable) {
    this._stringNotEquals.internalValue = value;
  }
  public resetStringNotEquals() {
    this._stringNotEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEqualsInput() {
    return this._stringNotEquals.internalValue;
  }
}

export class ProtectedResourceConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : ProtectedResourceConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): ProtectedResourceConditionsPropertyOutputReference {
    return new ProtectedResourceConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
