// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsGuarddutyOrganizationConfigurationFeatureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#auto_enable AwsGuarddutyOrganizationConfigurationFeature#auto_enable}
  */
  readonly autoEnable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#detector_id AwsGuarddutyOrganizationConfigurationFeature#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#id AwsGuarddutyOrganizationConfigurationFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#name AwsGuarddutyOrganizationConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#region AwsGuarddutyOrganizationConfigurationFeature#region}
  */
  readonly region?: string;
  /**
  * additional_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#additional_configuration AwsGuarddutyOrganizationConfigurationFeature#additional_configuration}
  */
  readonly additionalConfiguration?: AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature}
*/
export class AwsGuarddutyOrganizationConfigurationFeature extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_configuration_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsGuarddutyOrganizationConfigurationFeature resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsGuarddutyOrganizationConfigurationFeature to import
  * @param importFromId The id of the existing AwsGuarddutyOrganizationConfigurationFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsGuarddutyOrganizationConfigurationFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_organization_configuration_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsGuarddutyOrganizationConfigurationFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: AwsGuarddutyOrganizationConfigurationFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration_feature',
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
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._additionalConfiguration.internalValue = config.additionalConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: string; 
  public get autoEnable() {
    return this.getStringAttribute('auto_enable');
  }
  public set autoEnable(value: string) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
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

  // additional_configuration - computed: false, optional: true, required: false
  private _additionalConfiguration = new AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationPropertyList(this, "additional_configuration", false);
  public get additionalConfiguration() {
    return this._additionalConfiguration;
  }
  public putAdditionalConfiguration(value: AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationProperty[] | cdktn.IResolvable) {
    this._additionalConfiguration.internalValue = value;
  }
  public resetAdditionalConfiguration() {
    this._additionalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationInput() {
    return this._additionalConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktn.stringToTerraform(this._autoEnable),
      detector_id: cdktn.stringToTerraform(this._detectorId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      additional_configuration: cdktn.listMapper(awsGuarddutyOrganizationConfigurationFeatureAdditionalConfigurationPropertyToTerraform, true)(this._additionalConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable: {
        value: cdktn.stringToHclTerraform(this._autoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_id: {
        value: cdktn.stringToHclTerraform(this._detectorId),
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
      additional_configuration: {
        value: cdktn.listMapperHcl(awsGuarddutyOrganizationConfigurationFeatureAdditionalConfigurationPropertyToHclTerraform, true)(this._additionalConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsGuarddutyOrganizationConfigurationFeatureAdditionalConfigurationPropertyToTerraform(struct?: AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enable: cdktn.stringToTerraform(struct!.autoEnable),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsGuarddutyOrganizationConfigurationFeatureAdditionalConfigurationPropertyToHclTerraform(struct?: AwsGuarddutyOrganizationConfigurationFeature.AdditionalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enable: {
      value: cdktn.stringToHclTerraform(struct!.autoEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export namespace AwsGuarddutyOrganizationConfigurationFeature {
export interface AdditionalConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#auto_enable AwsGuarddutyOrganizationConfigurationFeature#auto_enable}
  */
  readonly autoEnable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration_feature#name AwsGuarddutyOrganizationConfigurationFeature#name}
  */
  readonly name: string;
}
export class AdditionalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AdditionalConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdditionalConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnable = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnable = value.autoEnable;
      this._name = value.name;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: string; 
  public get autoEnable() {
    return this.getStringAttribute('auto_enable');
  }
  public set autoEnable(value: string) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
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

export class AdditionalConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AdditionalConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AdditionalConfigurationPropertyOutputReference {
    return new AdditionalConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
