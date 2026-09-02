// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDashboardConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#aws_account_id TfDashboard#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#dashboard_id TfDashboard#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#id TfDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#name TfDashboard#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#region TfDashboard#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#tags TfDashboard#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#tags_all TfDashboard#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#theme_arn TfDashboard#theme_arn}
  */
  readonly themeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#version_description TfDashboard#version_description}
  */
  readonly versionDescription: string;
  /**
  * dashboard_publish_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#dashboard_publish_options TfDashboard#dashboard_publish_options}
  */
  readonly dashboardPublishOptions?: TfDashboard.DashboardPublishOptionsProperty;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#definition TfDashboard#definition}
  */
  readonly definition?: any;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#parameters TfDashboard#parameters}
  */
  readonly parameters?: TfDashboard.ParametersProperty;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#permissions TfDashboard#permissions}
  */
  readonly permissions?: TfDashboard.PermissionsProperty[] | cdktn.IResolvable;
  /**
  * source_entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#source_entity TfDashboard#source_entity}
  */
  readonly sourceEntity?: TfDashboard.SourceEntityProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#timeouts TfDashboard#timeouts}
  */
  readonly timeouts?: TfDashboard.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard aws_quicksight_dashboard}
*/
export class TfDashboard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDashboard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDashboard to import
  * @param importFromId The id of the existing TfDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard aws_quicksight_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: TfDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_dashboard',
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
    this._awsAccountId = config.awsAccountId;
    this._dashboardId = config.dashboardId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._themeArn = config.themeArn;
    this._versionDescription = config.versionDescription;
    this._dashboardPublishOptions.internalValue = config.dashboardPublishOptions;
    this._definition = config.definition;
    this._parameters.internalValue = config.parameters;
    this._permissions.internalValue = config.permissions;
    this._sourceEntity.internalValue = config.sourceEntity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // last_published_time - computed: true, optional: false, required: false
  public get lastPublishedTime() {
    return this.getStringAttribute('last_published_time');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // source_entity_arn - computed: true, optional: false, required: false
  public get sourceEntityArn() {
    return this.getStringAttribute('source_entity_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // theme_arn - computed: false, optional: true, required: false
  private _themeArn?: string; 
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }
  public set themeArn(value: string) {
    this._themeArn = value;
  }
  public resetThemeArn() {
    this._themeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeArnInput() {
    return this._themeArn;
  }

  // version_description - computed: false, optional: false, required: true
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // dashboard_publish_options - computed: false, optional: true, required: false
  private _dashboardPublishOptions = new TfDashboard.DashboardPublishOptionsPropertyOutputReference(this, "dashboard_publish_options");
  public get dashboardPublishOptions() {
    return this._dashboardPublishOptions;
  }
  public putDashboardPublishOptions(value: TfDashboard.DashboardPublishOptionsProperty) {
    this._dashboardPublishOptions.internalValue = value;
  }
  public resetDashboardPublishOptions() {
    this._dashboardPublishOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPublishOptionsInput() {
    return this._dashboardPublishOptions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: any; 
  public get definition() {
    return this.interpolationForAttribute('definition');
  }
  public set definition(value: any) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new TfDashboard.ParametersPropertyOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TfDashboard.ParametersProperty) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new TfDashboard.PermissionsPropertyList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: TfDashboard.PermissionsProperty[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // source_entity - computed: false, optional: true, required: false
  private _sourceEntity = new TfDashboard.SourceEntityPropertyOutputReference(this, "source_entity");
  public get sourceEntity() {
    return this._sourceEntity;
  }
  public putSourceEntity(value: TfDashboard.SourceEntityProperty) {
    this._sourceEntity.internalValue = value;
  }
  public resetSourceEntity() {
    this._sourceEntity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfDashboard.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfDashboard.TimeoutsProperty) {
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
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      dashboard_id: cdktn.stringToTerraform(this._dashboardId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      theme_arn: cdktn.stringToTerraform(this._themeArn),
      version_description: cdktn.stringToTerraform(this._versionDescription),
      dashboard_publish_options: tfDashboardDashboardPublishOptionsPropertyToTerraform(this._dashboardPublishOptions.internalValue),
      definition: cdktn.anyToTerraform(this._definition),
      parameters: tfDashboardParametersPropertyToTerraform(this._parameters.internalValue),
      permissions: cdktn.listMapper(tfDashboardPermissionsPropertyToTerraform, true)(this._permissions.internalValue),
      source_entity: tfDashboardSourceEntityPropertyToTerraform(this._sourceEntity.internalValue),
      timeouts: tfDashboardTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_id: {
        value: cdktn.stringToHclTerraform(this._dashboardId),
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
      theme_arn: {
        value: cdktn.stringToHclTerraform(this._themeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_publish_options: {
        value: tfDashboardDashboardPublishOptionsPropertyToHclTerraform(this._dashboardPublishOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDashboard.DashboardPublishOptionsPropertyList",
      },
      definition: {
        value: cdktn.anyToHclTerraform(this._definition),
        isBlock: false,
        type: "simple",
        storageClassType: "any",
      },
      parameters: {
        value: tfDashboardParametersPropertyToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDashboard.ParametersPropertyList",
      },
      permissions: {
        value: cdktn.listMapperHcl(tfDashboardPermissionsPropertyToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfDashboard.PermissionsPropertyList",
      },
      source_entity: {
        value: tfDashboardSourceEntityPropertyToHclTerraform(this._sourceEntity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDashboard.SourceEntityPropertyList",
      },
      timeouts: {
        value: tfDashboardTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfDashboard.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDashboardAdHocFilteringOptionPropertyToTerraform(struct?: TfDashboard.AdHocFilteringOptionPropertyOutputReference | TfDashboard.AdHocFilteringOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardAdHocFilteringOptionPropertyToHclTerraform(struct?: TfDashboard.AdHocFilteringOptionPropertyOutputReference | TfDashboard.AdHocFilteringOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDataPointDrillUpDownOptionPropertyToTerraform(struct?: TfDashboard.DataPointDrillUpDownOptionPropertyOutputReference | TfDashboard.DataPointDrillUpDownOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardDataPointDrillUpDownOptionPropertyToHclTerraform(struct?: TfDashboard.DataPointDrillUpDownOptionPropertyOutputReference | TfDashboard.DataPointDrillUpDownOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDataPointMenuLabelOptionPropertyToTerraform(struct?: TfDashboard.DataPointMenuLabelOptionPropertyOutputReference | TfDashboard.DataPointMenuLabelOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardDataPointMenuLabelOptionPropertyToHclTerraform(struct?: TfDashboard.DataPointMenuLabelOptionPropertyOutputReference | TfDashboard.DataPointMenuLabelOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDataPointTooltipOptionPropertyToTerraform(struct?: TfDashboard.DataPointTooltipOptionPropertyOutputReference | TfDashboard.DataPointTooltipOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardDataPointTooltipOptionPropertyToHclTerraform(struct?: TfDashboard.DataPointTooltipOptionPropertyOutputReference | TfDashboard.DataPointTooltipOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardExportToCsvOptionPropertyToTerraform(struct?: TfDashboard.ExportToCsvOptionPropertyOutputReference | TfDashboard.ExportToCsvOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardExportToCsvOptionPropertyToHclTerraform(struct?: TfDashboard.ExportToCsvOptionPropertyOutputReference | TfDashboard.ExportToCsvOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardExportWithHiddenFieldsOptionPropertyToTerraform(struct?: TfDashboard.ExportWithHiddenFieldsOptionPropertyOutputReference | TfDashboard.ExportWithHiddenFieldsOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardExportWithHiddenFieldsOptionPropertyToHclTerraform(struct?: TfDashboard.ExportWithHiddenFieldsOptionPropertyOutputReference | TfDashboard.ExportWithHiddenFieldsOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardSheetControlsOptionPropertyToTerraform(struct?: TfDashboard.SheetControlsOptionPropertyOutputReference | TfDashboard.SheetControlsOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    visibility_state: cdktn.stringToTerraform(struct!.visibilityState),
  }
}


export function tfDashboardSheetControlsOptionPropertyToHclTerraform(struct?: TfDashboard.SheetControlsOptionPropertyOutputReference | TfDashboard.SheetControlsOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    visibility_state: {
      value: cdktn.stringToHclTerraform(struct!.visibilityState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardSheetLayoutElementMaximizationOptionPropertyToTerraform(struct?: TfDashboard.SheetLayoutElementMaximizationOptionPropertyOutputReference | TfDashboard.SheetLayoutElementMaximizationOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardSheetLayoutElementMaximizationOptionPropertyToHclTerraform(struct?: TfDashboard.SheetLayoutElementMaximizationOptionPropertyOutputReference | TfDashboard.SheetLayoutElementMaximizationOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardVisualAxisSortOptionPropertyToTerraform(struct?: TfDashboard.VisualAxisSortOptionPropertyOutputReference | TfDashboard.VisualAxisSortOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardVisualAxisSortOptionPropertyToHclTerraform(struct?: TfDashboard.VisualAxisSortOptionPropertyOutputReference | TfDashboard.VisualAxisSortOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardVisualMenuOptionPropertyToTerraform(struct?: TfDashboard.VisualMenuOptionPropertyOutputReference | TfDashboard.VisualMenuOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function tfDashboardVisualMenuOptionPropertyToHclTerraform(struct?: TfDashboard.VisualMenuOptionPropertyOutputReference | TfDashboard.VisualMenuOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDashboardPublishOptionsPropertyToTerraform(struct?: TfDashboard.DashboardPublishOptionsPropertyOutputReference | TfDashboard.DashboardPublishOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_hoc_filtering_option: tfDashboardAdHocFilteringOptionPropertyToTerraform(struct!.adHocFilteringOption),
    data_point_drill_up_down_option: tfDashboardDataPointDrillUpDownOptionPropertyToTerraform(struct!.dataPointDrillUpDownOption),
    data_point_menu_label_option: tfDashboardDataPointMenuLabelOptionPropertyToTerraform(struct!.dataPointMenuLabelOption),
    data_point_tooltip_option: tfDashboardDataPointTooltipOptionPropertyToTerraform(struct!.dataPointTooltipOption),
    export_to_csv_option: tfDashboardExportToCsvOptionPropertyToTerraform(struct!.exportToCsvOption),
    export_with_hidden_fields_option: tfDashboardExportWithHiddenFieldsOptionPropertyToTerraform(struct!.exportWithHiddenFieldsOption),
    sheet_controls_option: tfDashboardSheetControlsOptionPropertyToTerraform(struct!.sheetControlsOption),
    sheet_layout_element_maximization_option: tfDashboardSheetLayoutElementMaximizationOptionPropertyToTerraform(struct!.sheetLayoutElementMaximizationOption),
    visual_axis_sort_option: tfDashboardVisualAxisSortOptionPropertyToTerraform(struct!.visualAxisSortOption),
    visual_menu_option: tfDashboardVisualMenuOptionPropertyToTerraform(struct!.visualMenuOption),
  }
}


export function tfDashboardDashboardPublishOptionsPropertyToHclTerraform(struct?: TfDashboard.DashboardPublishOptionsPropertyOutputReference | TfDashboard.DashboardPublishOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_hoc_filtering_option: {
      value: tfDashboardAdHocFilteringOptionPropertyToHclTerraform(struct!.adHocFilteringOption),
      isBlock: true,
      type: "list",
      storageClassType: "AdHocFilteringOptionPropertyList",
    },
    data_point_drill_up_down_option: {
      value: tfDashboardDataPointDrillUpDownOptionPropertyToHclTerraform(struct!.dataPointDrillUpDownOption),
      isBlock: true,
      type: "list",
      storageClassType: "DataPointDrillUpDownOptionPropertyList",
    },
    data_point_menu_label_option: {
      value: tfDashboardDataPointMenuLabelOptionPropertyToHclTerraform(struct!.dataPointMenuLabelOption),
      isBlock: true,
      type: "list",
      storageClassType: "DataPointMenuLabelOptionPropertyList",
    },
    data_point_tooltip_option: {
      value: tfDashboardDataPointTooltipOptionPropertyToHclTerraform(struct!.dataPointTooltipOption),
      isBlock: true,
      type: "list",
      storageClassType: "DataPointTooltipOptionPropertyList",
    },
    export_to_csv_option: {
      value: tfDashboardExportToCsvOptionPropertyToHclTerraform(struct!.exportToCsvOption),
      isBlock: true,
      type: "list",
      storageClassType: "ExportToCsvOptionPropertyList",
    },
    export_with_hidden_fields_option: {
      value: tfDashboardExportWithHiddenFieldsOptionPropertyToHclTerraform(struct!.exportWithHiddenFieldsOption),
      isBlock: true,
      type: "list",
      storageClassType: "ExportWithHiddenFieldsOptionPropertyList",
    },
    sheet_controls_option: {
      value: tfDashboardSheetControlsOptionPropertyToHclTerraform(struct!.sheetControlsOption),
      isBlock: true,
      type: "list",
      storageClassType: "SheetControlsOptionPropertyList",
    },
    sheet_layout_element_maximization_option: {
      value: tfDashboardSheetLayoutElementMaximizationOptionPropertyToHclTerraform(struct!.sheetLayoutElementMaximizationOption),
      isBlock: true,
      type: "list",
      storageClassType: "SheetLayoutElementMaximizationOptionPropertyList",
    },
    visual_axis_sort_option: {
      value: tfDashboardVisualAxisSortOptionPropertyToHclTerraform(struct!.visualAxisSortOption),
      isBlock: true,
      type: "list",
      storageClassType: "VisualAxisSortOptionPropertyList",
    },
    visual_menu_option: {
      value: tfDashboardVisualMenuOptionPropertyToHclTerraform(struct!.visualMenuOption),
      isBlock: true,
      type: "list",
      storageClassType: "VisualMenuOptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDateTimeParametersPropertyToTerraform(struct?: TfDashboard.DateTimeParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfDashboardDateTimeParametersPropertyToHclTerraform(struct?: TfDashboard.DateTimeParametersProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDecimalParametersPropertyToTerraform(struct?: TfDashboard.DecimalParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function tfDashboardDecimalParametersPropertyToHclTerraform(struct?: TfDashboard.DecimalParametersProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardIntegerParametersPropertyToTerraform(struct?: TfDashboard.IntegerParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function tfDashboardIntegerParametersPropertyToHclTerraform(struct?: TfDashboard.IntegerParametersProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardStringParametersPropertyToTerraform(struct?: TfDashboard.StringParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfDashboardStringParametersPropertyToHclTerraform(struct?: TfDashboard.StringParametersProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardParametersPropertyToTerraform(struct?: TfDashboard.ParametersPropertyOutputReference | TfDashboard.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_time_parameters: cdktn.listMapper(tfDashboardDateTimeParametersPropertyToTerraform, true)(struct!.dateTimeParameters),
    decimal_parameters: cdktn.listMapper(tfDashboardDecimalParametersPropertyToTerraform, true)(struct!.decimalParameters),
    integer_parameters: cdktn.listMapper(tfDashboardIntegerParametersPropertyToTerraform, true)(struct!.integerParameters),
    string_parameters: cdktn.listMapper(tfDashboardStringParametersPropertyToTerraform, true)(struct!.stringParameters),
  }
}


export function tfDashboardParametersPropertyToHclTerraform(struct?: TfDashboard.ParametersPropertyOutputReference | TfDashboard.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_time_parameters: {
      value: cdktn.listMapperHcl(tfDashboardDateTimeParametersPropertyToHclTerraform, true)(struct!.dateTimeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DateTimeParametersPropertyList",
    },
    decimal_parameters: {
      value: cdktn.listMapperHcl(tfDashboardDecimalParametersPropertyToHclTerraform, true)(struct!.decimalParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DecimalParametersPropertyList",
    },
    integer_parameters: {
      value: cdktn.listMapperHcl(tfDashboardIntegerParametersPropertyToHclTerraform, true)(struct!.integerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "IntegerParametersPropertyList",
    },
    string_parameters: {
      value: cdktn.listMapperHcl(tfDashboardStringParametersPropertyToHclTerraform, true)(struct!.stringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "StringParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardPermissionsPropertyToTerraform(struct?: TfDashboard.PermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function tfDashboardPermissionsPropertyToHclTerraform(struct?: TfDashboard.PermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardDataSetReferencesPropertyToTerraform(struct?: TfDashboard.DataSetReferencesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
  }
}


export function tfDashboardDataSetReferencesPropertyToHclTerraform(struct?: TfDashboard.DataSetReferencesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_set_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_set_placeholder: {
      value: cdktn.stringToHclTerraform(struct!.dataSetPlaceholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardSourceTemplatePropertyToTerraform(struct?: TfDashboard.SourceTemplatePropertyOutputReference | TfDashboard.SourceTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    data_set_references: cdktn.listMapper(tfDashboardDataSetReferencesPropertyToTerraform, true)(struct!.dataSetReferences),
  }
}


export function tfDashboardSourceTemplatePropertyToHclTerraform(struct?: TfDashboard.SourceTemplatePropertyOutputReference | TfDashboard.SourceTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_set_references: {
      value: cdktn.listMapperHcl(tfDashboardDataSetReferencesPropertyToHclTerraform, true)(struct!.dataSetReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataSetReferencesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardSourceEntityPropertyToTerraform(struct?: TfDashboard.SourceEntityPropertyOutputReference | TfDashboard.SourceEntityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_template: tfDashboardSourceTemplatePropertyToTerraform(struct!.sourceTemplate),
  }
}


export function tfDashboardSourceEntityPropertyToHclTerraform(struct?: TfDashboard.SourceEntityPropertyOutputReference | TfDashboard.SourceEntityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_template: {
      value: tfDashboardSourceTemplatePropertyToHclTerraform(struct!.sourceTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "SourceTemplatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDashboardTimeoutsPropertyToTerraform(struct?: TfDashboard.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfDashboardTimeoutsPropertyToHclTerraform(struct?: TfDashboard.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfDashboard {
export interface AdHocFilteringOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class AdHocFilteringOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdHocFilteringOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdHocFilteringOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface DataPointDrillUpDownOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class DataPointDrillUpDownOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPointDrillUpDownOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPointDrillUpDownOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface DataPointMenuLabelOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class DataPointMenuLabelOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPointMenuLabelOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPointMenuLabelOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface DataPointTooltipOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class DataPointTooltipOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPointTooltipOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPointTooltipOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface ExportToCsvOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class ExportToCsvOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExportToCsvOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExportToCsvOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface ExportWithHiddenFieldsOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class ExportWithHiddenFieldsOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExportWithHiddenFieldsOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExportWithHiddenFieldsOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface SheetControlsOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#visibility_state TfDashboard#visibility_state}
  */
  readonly visibilityState?: string;
}
export class SheetControlsOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SheetControlsOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibilityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityState = this._visibilityState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SheetControlsOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibilityState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibilityState = value.visibilityState;
    }
  }

  // visibility_state - computed: false, optional: true, required: false
  private _visibilityState?: string; 
  public get visibilityState() {
    return this.getStringAttribute('visibility_state');
  }
  public set visibilityState(value: string) {
    this._visibilityState = value;
  }
  public resetVisibilityState() {
    this._visibilityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityStateInput() {
    return this._visibilityState;
  }
}
export interface SheetLayoutElementMaximizationOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class SheetLayoutElementMaximizationOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SheetLayoutElementMaximizationOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SheetLayoutElementMaximizationOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface VisualAxisSortOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class VisualAxisSortOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisualAxisSortOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualAxisSortOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface VisualMenuOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#availability_status TfDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}
export class VisualMenuOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisualMenuOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualMenuOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface DashboardPublishOptionsProperty {
  /**
  * ad_hoc_filtering_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option TfDashboard#ad_hoc_filtering_option}
  */
  readonly adHocFilteringOption?: AdHocFilteringOptionProperty;
  /**
  * data_point_drill_up_down_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_point_drill_up_down_option TfDashboard#data_point_drill_up_down_option}
  */
  readonly dataPointDrillUpDownOption?: DataPointDrillUpDownOptionProperty;
  /**
  * data_point_menu_label_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_point_menu_label_option TfDashboard#data_point_menu_label_option}
  */
  readonly dataPointMenuLabelOption?: DataPointMenuLabelOptionProperty;
  /**
  * data_point_tooltip_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_point_tooltip_option TfDashboard#data_point_tooltip_option}
  */
  readonly dataPointTooltipOption?: DataPointTooltipOptionProperty;
  /**
  * export_to_csv_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#export_to_csv_option TfDashboard#export_to_csv_option}
  */
  readonly exportToCsvOption?: ExportToCsvOptionProperty;
  /**
  * export_with_hidden_fields_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#export_with_hidden_fields_option TfDashboard#export_with_hidden_fields_option}
  */
  readonly exportWithHiddenFieldsOption?: ExportWithHiddenFieldsOptionProperty;
  /**
  * sheet_controls_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#sheet_controls_option TfDashboard#sheet_controls_option}
  */
  readonly sheetControlsOption?: SheetControlsOptionProperty;
  /**
  * sheet_layout_element_maximization_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option TfDashboard#sheet_layout_element_maximization_option}
  */
  readonly sheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOptionProperty;
  /**
  * visual_axis_sort_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#visual_axis_sort_option TfDashboard#visual_axis_sort_option}
  */
  readonly visualAxisSortOption?: VisualAxisSortOptionProperty;
  /**
  * visual_menu_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#visual_menu_option TfDashboard#visual_menu_option}
  */
  readonly visualMenuOption?: VisualMenuOptionProperty;
}
export class DashboardPublishOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPublishOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adHocFilteringOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adHocFilteringOption = this._adHocFilteringOption?.internalValue;
    }
    if (this._dataPointDrillUpDownOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointDrillUpDownOption = this._dataPointDrillUpDownOption?.internalValue;
    }
    if (this._dataPointMenuLabelOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointMenuLabelOption = this._dataPointMenuLabelOption?.internalValue;
    }
    if (this._dataPointTooltipOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointTooltipOption = this._dataPointTooltipOption?.internalValue;
    }
    if (this._exportToCsvOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToCsvOption = this._exportToCsvOption?.internalValue;
    }
    if (this._exportWithHiddenFieldsOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWithHiddenFieldsOption = this._exportWithHiddenFieldsOption?.internalValue;
    }
    if (this._sheetControlsOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetControlsOption = this._sheetControlsOption?.internalValue;
    }
    if (this._sheetLayoutElementMaximizationOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetLayoutElementMaximizationOption = this._sheetLayoutElementMaximizationOption?.internalValue;
    }
    if (this._visualAxisSortOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualAxisSortOption = this._visualAxisSortOption?.internalValue;
    }
    if (this._visualMenuOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMenuOption = this._visualMenuOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPublishOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adHocFilteringOption.internalValue = undefined;
      this._dataPointDrillUpDownOption.internalValue = undefined;
      this._dataPointMenuLabelOption.internalValue = undefined;
      this._dataPointTooltipOption.internalValue = undefined;
      this._exportToCsvOption.internalValue = undefined;
      this._exportWithHiddenFieldsOption.internalValue = undefined;
      this._sheetControlsOption.internalValue = undefined;
      this._sheetLayoutElementMaximizationOption.internalValue = undefined;
      this._visualAxisSortOption.internalValue = undefined;
      this._visualMenuOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adHocFilteringOption.internalValue = value.adHocFilteringOption;
      this._dataPointDrillUpDownOption.internalValue = value.dataPointDrillUpDownOption;
      this._dataPointMenuLabelOption.internalValue = value.dataPointMenuLabelOption;
      this._dataPointTooltipOption.internalValue = value.dataPointTooltipOption;
      this._exportToCsvOption.internalValue = value.exportToCsvOption;
      this._exportWithHiddenFieldsOption.internalValue = value.exportWithHiddenFieldsOption;
      this._sheetControlsOption.internalValue = value.sheetControlsOption;
      this._sheetLayoutElementMaximizationOption.internalValue = value.sheetLayoutElementMaximizationOption;
      this._visualAxisSortOption.internalValue = value.visualAxisSortOption;
      this._visualMenuOption.internalValue = value.visualMenuOption;
    }
  }

  // ad_hoc_filtering_option - computed: false, optional: true, required: false
  private _adHocFilteringOption = new AdHocFilteringOptionPropertyOutputReference(this, "ad_hoc_filtering_option");
  public get adHocFilteringOption() {
    return this._adHocFilteringOption;
  }
  public putAdHocFilteringOption(value: AdHocFilteringOptionProperty) {
    this._adHocFilteringOption.internalValue = value;
  }
  public resetAdHocFilteringOption() {
    this._adHocFilteringOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adHocFilteringOptionInput() {
    return this._adHocFilteringOption.internalValue;
  }

  // data_point_drill_up_down_option - computed: false, optional: true, required: false
  private _dataPointDrillUpDownOption = new DataPointDrillUpDownOptionPropertyOutputReference(this, "data_point_drill_up_down_option");
  public get dataPointDrillUpDownOption() {
    return this._dataPointDrillUpDownOption;
  }
  public putDataPointDrillUpDownOption(value: DataPointDrillUpDownOptionProperty) {
    this._dataPointDrillUpDownOption.internalValue = value;
  }
  public resetDataPointDrillUpDownOption() {
    this._dataPointDrillUpDownOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointDrillUpDownOptionInput() {
    return this._dataPointDrillUpDownOption.internalValue;
  }

  // data_point_menu_label_option - computed: false, optional: true, required: false
  private _dataPointMenuLabelOption = new DataPointMenuLabelOptionPropertyOutputReference(this, "data_point_menu_label_option");
  public get dataPointMenuLabelOption() {
    return this._dataPointMenuLabelOption;
  }
  public putDataPointMenuLabelOption(value: DataPointMenuLabelOptionProperty) {
    this._dataPointMenuLabelOption.internalValue = value;
  }
  public resetDataPointMenuLabelOption() {
    this._dataPointMenuLabelOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointMenuLabelOptionInput() {
    return this._dataPointMenuLabelOption.internalValue;
  }

  // data_point_tooltip_option - computed: false, optional: true, required: false
  private _dataPointTooltipOption = new DataPointTooltipOptionPropertyOutputReference(this, "data_point_tooltip_option");
  public get dataPointTooltipOption() {
    return this._dataPointTooltipOption;
  }
  public putDataPointTooltipOption(value: DataPointTooltipOptionProperty) {
    this._dataPointTooltipOption.internalValue = value;
  }
  public resetDataPointTooltipOption() {
    this._dataPointTooltipOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointTooltipOptionInput() {
    return this._dataPointTooltipOption.internalValue;
  }

  // export_to_csv_option - computed: false, optional: true, required: false
  private _exportToCsvOption = new ExportToCsvOptionPropertyOutputReference(this, "export_to_csv_option");
  public get exportToCsvOption() {
    return this._exportToCsvOption;
  }
  public putExportToCsvOption(value: ExportToCsvOptionProperty) {
    this._exportToCsvOption.internalValue = value;
  }
  public resetExportToCsvOption() {
    this._exportToCsvOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToCsvOptionInput() {
    return this._exportToCsvOption.internalValue;
  }

  // export_with_hidden_fields_option - computed: false, optional: true, required: false
  private _exportWithHiddenFieldsOption = new ExportWithHiddenFieldsOptionPropertyOutputReference(this, "export_with_hidden_fields_option");
  public get exportWithHiddenFieldsOption() {
    return this._exportWithHiddenFieldsOption;
  }
  public putExportWithHiddenFieldsOption(value: ExportWithHiddenFieldsOptionProperty) {
    this._exportWithHiddenFieldsOption.internalValue = value;
  }
  public resetExportWithHiddenFieldsOption() {
    this._exportWithHiddenFieldsOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWithHiddenFieldsOptionInput() {
    return this._exportWithHiddenFieldsOption.internalValue;
  }

  // sheet_controls_option - computed: false, optional: true, required: false
  private _sheetControlsOption = new SheetControlsOptionPropertyOutputReference(this, "sheet_controls_option");
  public get sheetControlsOption() {
    return this._sheetControlsOption;
  }
  public putSheetControlsOption(value: SheetControlsOptionProperty) {
    this._sheetControlsOption.internalValue = value;
  }
  public resetSheetControlsOption() {
    this._sheetControlsOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetControlsOptionInput() {
    return this._sheetControlsOption.internalValue;
  }

  // sheet_layout_element_maximization_option - computed: false, optional: true, required: false
  private _sheetLayoutElementMaximizationOption = new SheetLayoutElementMaximizationOptionPropertyOutputReference(this, "sheet_layout_element_maximization_option");
  public get sheetLayoutElementMaximizationOption() {
    return this._sheetLayoutElementMaximizationOption;
  }
  public putSheetLayoutElementMaximizationOption(value: SheetLayoutElementMaximizationOptionProperty) {
    this._sheetLayoutElementMaximizationOption.internalValue = value;
  }
  public resetSheetLayoutElementMaximizationOption() {
    this._sheetLayoutElementMaximizationOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetLayoutElementMaximizationOptionInput() {
    return this._sheetLayoutElementMaximizationOption.internalValue;
  }

  // visual_axis_sort_option - computed: false, optional: true, required: false
  private _visualAxisSortOption = new VisualAxisSortOptionPropertyOutputReference(this, "visual_axis_sort_option");
  public get visualAxisSortOption() {
    return this._visualAxisSortOption;
  }
  public putVisualAxisSortOption(value: VisualAxisSortOptionProperty) {
    this._visualAxisSortOption.internalValue = value;
  }
  public resetVisualAxisSortOption() {
    this._visualAxisSortOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualAxisSortOptionInput() {
    return this._visualAxisSortOption.internalValue;
  }

  // visual_menu_option - computed: false, optional: true, required: false
  private _visualMenuOption = new VisualMenuOptionPropertyOutputReference(this, "visual_menu_option");
  public get visualMenuOption() {
    return this._visualMenuOption;
  }
  public putVisualMenuOption(value: VisualMenuOptionProperty) {
    this._visualMenuOption.internalValue = value;
  }
  public resetVisualMenuOption() {
    this._visualMenuOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMenuOptionInput() {
    return this._visualMenuOption.internalValue;
  }
}
export interface DateTimeParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#name TfDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#values TfDashboard#values}
  */
  readonly values: string[];
}
export class DateTimeParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DateTimeParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DateTimeParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DateTimeParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : DateTimeParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): DateTimeParametersPropertyOutputReference {
    return new DateTimeParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DecimalParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#name TfDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#values TfDashboard#values}
  */
  readonly values: number[];
}
export class DecimalParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DecimalParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecimalParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DecimalParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : DecimalParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): DecimalParametersPropertyOutputReference {
    return new DecimalParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegerParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#name TfDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#values TfDashboard#values}
  */
  readonly values: number[];
}
export class IntegerParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IntegerParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegerParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class IntegerParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : IntegerParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): IntegerParametersPropertyOutputReference {
    return new IntegerParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#name TfDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#values TfDashboard#values}
  */
  readonly values: string[];
}
export class StringParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class StringParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : StringParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): StringParametersPropertyOutputReference {
    return new StringParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParametersProperty {
  /**
  * date_time_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#date_time_parameters TfDashboard#date_time_parameters}
  */
  readonly dateTimeParameters?: DateTimeParametersProperty[] | cdktn.IResolvable;
  /**
  * decimal_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#decimal_parameters TfDashboard#decimal_parameters}
  */
  readonly decimalParameters?: DecimalParametersProperty[] | cdktn.IResolvable;
  /**
  * integer_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#integer_parameters TfDashboard#integer_parameters}
  */
  readonly integerParameters?: IntegerParametersProperty[] | cdktn.IResolvable;
  /**
  * string_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#string_parameters TfDashboard#string_parameters}
  */
  readonly stringParameters?: StringParametersProperty[] | cdktn.IResolvable;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeParameters = this._dateTimeParameters?.internalValue;
    }
    if (this._decimalParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalParameters = this._decimalParameters?.internalValue;
    }
    if (this._integerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameters = this._integerParameters?.internalValue;
    }
    if (this._stringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringParameters = this._stringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeParameters.internalValue = undefined;
      this._decimalParameters.internalValue = undefined;
      this._integerParameters.internalValue = undefined;
      this._stringParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeParameters.internalValue = value.dateTimeParameters;
      this._decimalParameters.internalValue = value.decimalParameters;
      this._integerParameters.internalValue = value.integerParameters;
      this._stringParameters.internalValue = value.stringParameters;
    }
  }

  // date_time_parameters - computed: false, optional: true, required: false
  private _dateTimeParameters = new DateTimeParametersPropertyList(this, "date_time_parameters", false);
  public get dateTimeParameters() {
    return this._dateTimeParameters;
  }
  public putDateTimeParameters(value: DateTimeParametersProperty[] | cdktn.IResolvable) {
    this._dateTimeParameters.internalValue = value;
  }
  public resetDateTimeParameters() {
    this._dateTimeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeParametersInput() {
    return this._dateTimeParameters.internalValue;
  }

  // decimal_parameters - computed: false, optional: true, required: false
  private _decimalParameters = new DecimalParametersPropertyList(this, "decimal_parameters", false);
  public get decimalParameters() {
    return this._decimalParameters;
  }
  public putDecimalParameters(value: DecimalParametersProperty[] | cdktn.IResolvable) {
    this._decimalParameters.internalValue = value;
  }
  public resetDecimalParameters() {
    this._decimalParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalParametersInput() {
    return this._decimalParameters.internalValue;
  }

  // integer_parameters - computed: false, optional: true, required: false
  private _integerParameters = new IntegerParametersPropertyList(this, "integer_parameters", false);
  public get integerParameters() {
    return this._integerParameters;
  }
  public putIntegerParameters(value: IntegerParametersProperty[] | cdktn.IResolvable) {
    this._integerParameters.internalValue = value;
  }
  public resetIntegerParameters() {
    this._integerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParametersInput() {
    return this._integerParameters.internalValue;
  }

  // string_parameters - computed: false, optional: true, required: false
  private _stringParameters = new StringParametersPropertyList(this, "string_parameters", false);
  public get stringParameters() {
    return this._stringParameters;
  }
  public putStringParameters(value: StringParametersProperty[] | cdktn.IResolvable) {
    this._stringParameters.internalValue = value;
  }
  public resetStringParameters() {
    this._stringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringParametersInput() {
    return this._stringParameters.internalValue;
  }
}
export interface PermissionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#actions TfDashboard#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#principal TfDashboard#principal}
  */
  readonly principal: string;
}
export class PermissionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PermissionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class PermissionsPropertyList extends cdktn.ComplexList {
  public internalValue? : PermissionsProperty[] | cdktn.IResolvable

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
  public get(index: number): PermissionsPropertyOutputReference {
    return new PermissionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSetReferencesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_set_arn TfDashboard#data_set_arn}
  */
  readonly dataSetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_set_placeholder TfDashboard#data_set_placeholder}
  */
  readonly dataSetPlaceholder: string;
}
export class DataSetReferencesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSetReferencesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._dataSetPlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetPlaceholder = this._dataSetPlaceholder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSetReferencesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetArn = undefined;
      this._dataSetPlaceholder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetArn = value.dataSetArn;
      this._dataSetPlaceholder = value.dataSetPlaceholder;
    }
  }

  // data_set_arn - computed: false, optional: false, required: true
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // data_set_placeholder - computed: false, optional: false, required: true
  private _dataSetPlaceholder?: string; 
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
  public set dataSetPlaceholder(value: string) {
    this._dataSetPlaceholder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetPlaceholderInput() {
    return this._dataSetPlaceholder;
  }
}

export class DataSetReferencesPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSetReferencesProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSetReferencesPropertyOutputReference {
    return new DataSetReferencesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#arn TfDashboard#arn}
  */
  readonly arn: string;
  /**
  * data_set_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#data_set_references TfDashboard#data_set_references}
  */
  readonly dataSetReferences: DataSetReferencesProperty[] | cdktn.IResolvable;
}
export class SourceTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._dataSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetReferences = this._dataSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._dataSetReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._dataSetReferences.internalValue = value.dataSetReferences;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // data_set_references - computed: false, optional: false, required: true
  private _dataSetReferences = new DataSetReferencesPropertyList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: DataSetReferencesProperty[] | cdktn.IResolvable) {
    this._dataSetReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetReferencesInput() {
    return this._dataSetReferences.internalValue;
  }
}
export interface SourceEntityProperty {
  /**
  * source_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#source_template TfDashboard#source_template}
  */
  readonly sourceTemplate?: SourceTemplateProperty;
}
export class SourceEntityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceEntityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceEntityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceTemplate.internalValue = value.sourceTemplate;
    }
  }

  // source_template - computed: false, optional: true, required: false
  private _sourceTemplate = new SourceTemplatePropertyOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: SourceTemplateProperty) {
    this._sourceTemplate.internalValue = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#create TfDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#delete TfDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_dashboard#update TfDashboard#update}
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
