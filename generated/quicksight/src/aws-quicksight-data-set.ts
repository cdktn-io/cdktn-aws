// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsQuicksightDataSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#aws_account_id AwsQuicksightDataSet#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_set_id AwsQuicksightDataSet#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#id AwsQuicksightDataSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#import_mode AwsQuicksightDataSet#import_mode}
  */
  readonly importMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#region AwsQuicksightDataSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tags AwsQuicksightDataSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tags_all AwsQuicksightDataSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#use_as AwsQuicksightDataSet#use_as}
  */
  readonly useAs?: string;
  /**
  * column_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_groups AwsQuicksightDataSet#column_groups}
  */
  readonly columnGroups?: AwsQuicksightDataSet.ColumnGroupsProperty[] | cdktn.IResolvable;
  /**
  * column_level_permission_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_level_permission_rules AwsQuicksightDataSet#column_level_permission_rules}
  */
  readonly columnLevelPermissionRules?: AwsQuicksightDataSet.ColumnLevelPermissionRulesProperty[] | cdktn.IResolvable;
  /**
  * data_set_usage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_set_usage_configuration AwsQuicksightDataSet#data_set_usage_configuration}
  */
  readonly dataSetUsageConfiguration?: AwsQuicksightDataSet.DataSetUsageConfigurationProperty;
  /**
  * field_folders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#field_folders AwsQuicksightDataSet#field_folders}
  */
  readonly fieldFolders?: AwsQuicksightDataSet.FieldFoldersProperty[] | cdktn.IResolvable;
  /**
  * logical_table_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#logical_table_map AwsQuicksightDataSet#logical_table_map}
  */
  readonly logicalTableMap?: AwsQuicksightDataSet.LogicalTableMapProperty[] | cdktn.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#permissions AwsQuicksightDataSet#permissions}
  */
  readonly permissions?: AwsQuicksightDataSet.PermissionsProperty[] | cdktn.IResolvable;
  /**
  * physical_table_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#physical_table_map AwsQuicksightDataSet#physical_table_map}
  */
  readonly physicalTableMap?: AwsQuicksightDataSet.PhysicalTableMapProperty[] | cdktn.IResolvable;
  /**
  * refresh_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#refresh_properties AwsQuicksightDataSet#refresh_properties}
  */
  readonly refreshProperties?: AwsQuicksightDataSet.RefreshPropertiesProperty;
  /**
  * row_level_permission_data_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#row_level_permission_data_set AwsQuicksightDataSet#row_level_permission_data_set}
  */
  readonly rowLevelPermissionDataSet?: AwsQuicksightDataSet.RowLevelPermissionDataSetProperty;
  /**
  * row_level_permission_tag_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#row_level_permission_tag_configuration AwsQuicksightDataSet#row_level_permission_tag_configuration}
  */
  readonly rowLevelPermissionTagConfiguration?: AwsQuicksightDataSet.RowLevelPermissionTagConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set aws_quicksight_data_set}
*/
export class AwsQuicksightDataSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_data_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsQuicksightDataSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsQuicksightDataSet to import
  * @param importFromId The id of the existing AwsQuicksightDataSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsQuicksightDataSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_data_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set aws_quicksight_data_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsQuicksightDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsQuicksightDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_data_set',
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
    this._dataSetId = config.dataSetId;
    this._id = config.id;
    this._importMode = config.importMode;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._useAs = config.useAs;
    this._columnGroups.internalValue = config.columnGroups;
    this._columnLevelPermissionRules.internalValue = config.columnLevelPermissionRules;
    this._dataSetUsageConfiguration.internalValue = config.dataSetUsageConfiguration;
    this._fieldFolders.internalValue = config.fieldFolders;
    this._logicalTableMap.internalValue = config.logicalTableMap;
    this._permissions.internalValue = config.permissions;
    this._physicalTableMap.internalValue = config.physicalTableMap;
    this._refreshProperties.internalValue = config.refreshProperties;
    this._rowLevelPermissionDataSet.internalValue = config.rowLevelPermissionDataSet;
    this._rowLevelPermissionTagConfiguration.internalValue = config.rowLevelPermissionTagConfiguration;
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

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
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

  // import_mode - computed: false, optional: false, required: true
  private _importMode?: string; 
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }
  public set importMode(value: string) {
    this._importMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode;
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

  // output_columns - computed: true, optional: false, required: false
  private _outputColumns = new AwsQuicksightDataSet.OutputColumnsPropertyList(this, "output_columns", false);
  public get outputColumns() {
    return this._outputColumns;
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

  // use_as - computed: false, optional: true, required: false
  private _useAs?: string; 
  public get useAs() {
    return this.getStringAttribute('use_as');
  }
  public set useAs(value: string) {
    this._useAs = value;
  }
  public resetUseAs() {
    this._useAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsInput() {
    return this._useAs;
  }

  // column_groups - computed: false, optional: true, required: false
  private _columnGroups = new AwsQuicksightDataSet.ColumnGroupsPropertyList(this, "column_groups", false);
  public get columnGroups() {
    return this._columnGroups;
  }
  public putColumnGroups(value: AwsQuicksightDataSet.ColumnGroupsProperty[] | cdktn.IResolvable) {
    this._columnGroups.internalValue = value;
  }
  public resetColumnGroups() {
    this._columnGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupsInput() {
    return this._columnGroups.internalValue;
  }

  // column_level_permission_rules - computed: false, optional: true, required: false
  private _columnLevelPermissionRules = new AwsQuicksightDataSet.ColumnLevelPermissionRulesPropertyList(this, "column_level_permission_rules", false);
  public get columnLevelPermissionRules() {
    return this._columnLevelPermissionRules;
  }
  public putColumnLevelPermissionRules(value: AwsQuicksightDataSet.ColumnLevelPermissionRulesProperty[] | cdktn.IResolvable) {
    this._columnLevelPermissionRules.internalValue = value;
  }
  public resetColumnLevelPermissionRules() {
    this._columnLevelPermissionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnLevelPermissionRulesInput() {
    return this._columnLevelPermissionRules.internalValue;
  }

  // data_set_usage_configuration - computed: false, optional: true, required: false
  private _dataSetUsageConfiguration = new AwsQuicksightDataSet.DataSetUsageConfigurationPropertyOutputReference(this, "data_set_usage_configuration");
  public get dataSetUsageConfiguration() {
    return this._dataSetUsageConfiguration;
  }
  public putDataSetUsageConfiguration(value: AwsQuicksightDataSet.DataSetUsageConfigurationProperty) {
    this._dataSetUsageConfiguration.internalValue = value;
  }
  public resetDataSetUsageConfiguration() {
    this._dataSetUsageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetUsageConfigurationInput() {
    return this._dataSetUsageConfiguration.internalValue;
  }

  // field_folders - computed: false, optional: true, required: false
  private _fieldFolders = new AwsQuicksightDataSet.FieldFoldersPropertyList(this, "field_folders", true);
  public get fieldFolders() {
    return this._fieldFolders;
  }
  public putFieldFolders(value: AwsQuicksightDataSet.FieldFoldersProperty[] | cdktn.IResolvable) {
    this._fieldFolders.internalValue = value;
  }
  public resetFieldFolders() {
    this._fieldFolders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFoldersInput() {
    return this._fieldFolders.internalValue;
  }

  // logical_table_map - computed: false, optional: true, required: false
  private _logicalTableMap = new AwsQuicksightDataSet.LogicalTableMapPropertyList(this, "logical_table_map", true);
  public get logicalTableMap() {
    return this._logicalTableMap;
  }
  public putLogicalTableMap(value: AwsQuicksightDataSet.LogicalTableMapProperty[] | cdktn.IResolvable) {
    this._logicalTableMap.internalValue = value;
  }
  public resetLogicalTableMap() {
    this._logicalTableMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalTableMapInput() {
    return this._logicalTableMap.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new AwsQuicksightDataSet.PermissionsPropertyList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: AwsQuicksightDataSet.PermissionsProperty[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // physical_table_map - computed: false, optional: true, required: false
  private _physicalTableMap = new AwsQuicksightDataSet.PhysicalTableMapPropertyList(this, "physical_table_map", true);
  public get physicalTableMap() {
    return this._physicalTableMap;
  }
  public putPhysicalTableMap(value: AwsQuicksightDataSet.PhysicalTableMapProperty[] | cdktn.IResolvable) {
    this._physicalTableMap.internalValue = value;
  }
  public resetPhysicalTableMap() {
    this._physicalTableMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableMapInput() {
    return this._physicalTableMap.internalValue;
  }

  // refresh_properties - computed: false, optional: true, required: false
  private _refreshProperties = new AwsQuicksightDataSet.RefreshPropertiesPropertyOutputReference(this, "refresh_properties");
  public get refreshProperties() {
    return this._refreshProperties;
  }
  public putRefreshProperties(value: AwsQuicksightDataSet.RefreshPropertiesProperty) {
    this._refreshProperties.internalValue = value;
  }
  public resetRefreshProperties() {
    this._refreshProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPropertiesInput() {
    return this._refreshProperties.internalValue;
  }

  // row_level_permission_data_set - computed: false, optional: true, required: false
  private _rowLevelPermissionDataSet = new AwsQuicksightDataSet.RowLevelPermissionDataSetPropertyOutputReference(this, "row_level_permission_data_set");
  public get rowLevelPermissionDataSet() {
    return this._rowLevelPermissionDataSet;
  }
  public putRowLevelPermissionDataSet(value: AwsQuicksightDataSet.RowLevelPermissionDataSetProperty) {
    this._rowLevelPermissionDataSet.internalValue = value;
  }
  public resetRowLevelPermissionDataSet() {
    this._rowLevelPermissionDataSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelPermissionDataSetInput() {
    return this._rowLevelPermissionDataSet.internalValue;
  }

  // row_level_permission_tag_configuration - computed: false, optional: true, required: false
  private _rowLevelPermissionTagConfiguration = new AwsQuicksightDataSet.RowLevelPermissionTagConfigurationPropertyOutputReference(this, "row_level_permission_tag_configuration");
  public get rowLevelPermissionTagConfiguration() {
    return this._rowLevelPermissionTagConfiguration;
  }
  public putRowLevelPermissionTagConfiguration(value: AwsQuicksightDataSet.RowLevelPermissionTagConfigurationProperty) {
    this._rowLevelPermissionTagConfiguration.internalValue = value;
  }
  public resetRowLevelPermissionTagConfiguration() {
    this._rowLevelPermissionTagConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelPermissionTagConfigurationInput() {
    return this._rowLevelPermissionTagConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      data_set_id: cdktn.stringToTerraform(this._dataSetId),
      id: cdktn.stringToTerraform(this._id),
      import_mode: cdktn.stringToTerraform(this._importMode),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      use_as: cdktn.stringToTerraform(this._useAs),
      column_groups: cdktn.listMapper(awsQuicksightDataSetColumnGroupsPropertyToTerraform, true)(this._columnGroups.internalValue),
      column_level_permission_rules: cdktn.listMapper(awsQuicksightDataSetColumnLevelPermissionRulesPropertyToTerraform, true)(this._columnLevelPermissionRules.internalValue),
      data_set_usage_configuration: awsQuicksightDataSetDataSetUsageConfigurationPropertyToTerraform(this._dataSetUsageConfiguration.internalValue),
      field_folders: cdktn.listMapper(awsQuicksightDataSetFieldFoldersPropertyToTerraform, true)(this._fieldFolders.internalValue),
      logical_table_map: cdktn.listMapper(awsQuicksightDataSetLogicalTableMapPropertyToTerraform, true)(this._logicalTableMap.internalValue),
      permissions: cdktn.listMapper(awsQuicksightDataSetPermissionsPropertyToTerraform, true)(this._permissions.internalValue),
      physical_table_map: cdktn.listMapper(awsQuicksightDataSetPhysicalTableMapPropertyToTerraform, true)(this._physicalTableMap.internalValue),
      refresh_properties: awsQuicksightDataSetRefreshPropertiesPropertyToTerraform(this._refreshProperties.internalValue),
      row_level_permission_data_set: awsQuicksightDataSetRowLevelPermissionDataSetPropertyToTerraform(this._rowLevelPermissionDataSet.internalValue),
      row_level_permission_tag_configuration: awsQuicksightDataSetRowLevelPermissionTagConfigurationPropertyToTerraform(this._rowLevelPermissionTagConfiguration.internalValue),
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
      data_set_id: {
        value: cdktn.stringToHclTerraform(this._dataSetId),
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
      import_mode: {
        value: cdktn.stringToHclTerraform(this._importMode),
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
      use_as: {
        value: cdktn.stringToHclTerraform(this._useAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_groups: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetColumnGroupsPropertyToHclTerraform, true)(this._columnGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.ColumnGroupsPropertyList",
      },
      column_level_permission_rules: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetColumnLevelPermissionRulesPropertyToHclTerraform, true)(this._columnLevelPermissionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.ColumnLevelPermissionRulesPropertyList",
      },
      data_set_usage_configuration: {
        value: awsQuicksightDataSetDataSetUsageConfigurationPropertyToHclTerraform(this._dataSetUsageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.DataSetUsageConfigurationPropertyList",
      },
      field_folders: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetFieldFoldersPropertyToHclTerraform, true)(this._fieldFolders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightDataSet.FieldFoldersPropertyList",
      },
      logical_table_map: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetLogicalTableMapPropertyToHclTerraform, true)(this._logicalTableMap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightDataSet.LogicalTableMapPropertyList",
      },
      permissions: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetPermissionsPropertyToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightDataSet.PermissionsPropertyList",
      },
      physical_table_map: {
        value: cdktn.listMapperHcl(awsQuicksightDataSetPhysicalTableMapPropertyToHclTerraform, true)(this._physicalTableMap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightDataSet.PhysicalTableMapPropertyList",
      },
      refresh_properties: {
        value: awsQuicksightDataSetRefreshPropertiesPropertyToHclTerraform(this._refreshProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.RefreshPropertiesPropertyList",
      },
      row_level_permission_data_set: {
        value: awsQuicksightDataSetRowLevelPermissionDataSetPropertyToHclTerraform(this._rowLevelPermissionDataSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.RowLevelPermissionDataSetPropertyList",
      },
      row_level_permission_tag_configuration: {
        value: awsQuicksightDataSetRowLevelPermissionTagConfigurationPropertyToHclTerraform(this._rowLevelPermissionTagConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSet.RowLevelPermissionTagConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsQuicksightDataSetOutputColumnsPropertyToTerraform(struct?: AwsQuicksightDataSet.OutputColumnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsQuicksightDataSetOutputColumnsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.OutputColumnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsQuicksightDataSetGeoSpatialColumnGroupPropertyToTerraform(struct?: AwsQuicksightDataSet.GeoSpatialColumnGroupPropertyOutputReference | AwsQuicksightDataSet.GeoSpatialColumnGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsQuicksightDataSetGeoSpatialColumnGroupPropertyToHclTerraform(struct?: AwsQuicksightDataSet.GeoSpatialColumnGroupPropertyOutputReference | AwsQuicksightDataSet.GeoSpatialColumnGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
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


export function awsQuicksightDataSetColumnGroupsPropertyToTerraform(struct?: AwsQuicksightDataSet.ColumnGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_spatial_column_group: awsQuicksightDataSetGeoSpatialColumnGroupPropertyToTerraform(struct!.geoSpatialColumnGroup),
  }
}


export function awsQuicksightDataSetColumnGroupsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.ColumnGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_spatial_column_group: {
      value: awsQuicksightDataSetGeoSpatialColumnGroupPropertyToHclTerraform(struct!.geoSpatialColumnGroup),
      isBlock: true,
      type: "list",
      storageClassType: "GeoSpatialColumnGroupPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetColumnLevelPermissionRulesPropertyToTerraform(struct?: AwsQuicksightDataSet.ColumnLevelPermissionRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.principals),
  }
}


export function awsQuicksightDataSetColumnLevelPermissionRulesPropertyToHclTerraform(struct?: AwsQuicksightDataSet.ColumnLevelPermissionRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetDataSetUsageConfigurationPropertyToTerraform(struct?: AwsQuicksightDataSet.DataSetUsageConfigurationPropertyOutputReference | AwsQuicksightDataSet.DataSetUsageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_use_as_direct_query_source: cdktn.booleanToTerraform(struct!.disableUseAsDirectQuerySource),
    disable_use_as_imported_source: cdktn.booleanToTerraform(struct!.disableUseAsImportedSource),
  }
}


export function awsQuicksightDataSetDataSetUsageConfigurationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.DataSetUsageConfigurationPropertyOutputReference | AwsQuicksightDataSet.DataSetUsageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_use_as_direct_query_source: {
      value: cdktn.booleanToHclTerraform(struct!.disableUseAsDirectQuerySource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_use_as_imported_source: {
      value: cdktn.booleanToHclTerraform(struct!.disableUseAsImportedSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetFieldFoldersPropertyToTerraform(struct?: AwsQuicksightDataSet.FieldFoldersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    description: cdktn.stringToTerraform(struct!.description),
    field_folders_id: cdktn.stringToTerraform(struct!.fieldFoldersId),
  }
}


export function awsQuicksightDataSetFieldFoldersPropertyToHclTerraform(struct?: AwsQuicksightDataSet.FieldFoldersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_folders_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldFoldersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetCastColumnTypeOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.CastColumnTypeOperationPropertyOutputReference | AwsQuicksightDataSet.CastColumnTypeOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    format: cdktn.stringToTerraform(struct!.format),
    new_column_type: cdktn.stringToTerraform(struct!.newColumnType),
  }
}


export function awsQuicksightDataSetCastColumnTypeOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.CastColumnTypeOperationPropertyOutputReference | AwsQuicksightDataSet.CastColumnTypeOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_column_type: {
      value: cdktn.stringToHclTerraform(struct!.newColumnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyToTerraform(struct?: AwsQuicksightDataSet.LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_id: cdktn.stringToTerraform(struct!.columnId),
    column_name: cdktn.stringToTerraform(struct!.columnName),
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function awsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_id: {
      value: cdktn.stringToHclTerraform(struct!.columnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetCreateColumnsOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.CreateColumnsOperationPropertyOutputReference | AwsQuicksightDataSet.CreateColumnsOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(awsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyToTerraform, true)(struct!.columns),
  }
}


export function awsQuicksightDataSetCreateColumnsOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.CreateColumnsOperationPropertyOutputReference | AwsQuicksightDataSet.CreateColumnsOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetFilterOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.FilterOperationPropertyOutputReference | AwsQuicksightDataSet.FilterOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_expression: cdktn.stringToTerraform(struct!.conditionExpression),
  }
}


export function awsQuicksightDataSetFilterOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.FilterOperationPropertyOutputReference | AwsQuicksightDataSet.FilterOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_expression: {
      value: cdktn.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetProjectOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.ProjectOperationPropertyOutputReference | AwsQuicksightDataSet.ProjectOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    projected_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectedColumns),
  }
}


export function awsQuicksightDataSetProjectOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.ProjectOperationPropertyOutputReference | AwsQuicksightDataSet.ProjectOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    projected_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectedColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRenameColumnOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.RenameColumnOperationPropertyOutputReference | AwsQuicksightDataSet.RenameColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    new_column_name: cdktn.stringToTerraform(struct!.newColumnName),
  }
}


export function awsQuicksightDataSetRenameColumnOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RenameColumnOperationPropertyOutputReference | AwsQuicksightDataSet.RenameColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_column_name: {
      value: cdktn.stringToHclTerraform(struct!.newColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetColumnDescriptionPropertyToTerraform(struct?: AwsQuicksightDataSet.ColumnDescriptionPropertyOutputReference | AwsQuicksightDataSet.ColumnDescriptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function awsQuicksightDataSetColumnDescriptionPropertyToHclTerraform(struct?: AwsQuicksightDataSet.ColumnDescriptionPropertyOutputReference | AwsQuicksightDataSet.ColumnDescriptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetTagsPropertyToTerraform(struct?: AwsQuicksightDataSet.TagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_geographic_role: cdktn.stringToTerraform(struct!.columnGeographicRole),
    column_description: awsQuicksightDataSetColumnDescriptionPropertyToTerraform(struct!.columnDescription),
  }
}


export function awsQuicksightDataSetTagsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.TagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_geographic_role: {
      value: cdktn.stringToHclTerraform(struct!.columnGeographicRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_description: {
      value: awsQuicksightDataSetColumnDescriptionPropertyToHclTerraform(struct!.columnDescription),
      isBlock: true,
      type: "list",
      storageClassType: "ColumnDescriptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetTagColumnOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.TagColumnOperationPropertyOutputReference | AwsQuicksightDataSet.TagColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    tags: cdktn.listMapper(awsQuicksightDataSetTagsPropertyToTerraform, true)(struct!.tags),
  }
}


export function awsQuicksightDataSetTagColumnOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.TagColumnOperationPropertyOutputReference | AwsQuicksightDataSet.TagColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetTagsPropertyToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "TagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetUntagColumnOperationPropertyToTerraform(struct?: AwsQuicksightDataSet.UntagColumnOperationPropertyOutputReference | AwsQuicksightDataSet.UntagColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    tag_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagNames),
  }
}


export function awsQuicksightDataSetUntagColumnOperationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.UntagColumnOperationPropertyOutputReference | AwsQuicksightDataSet.UntagColumnOperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetDataTransformsPropertyToTerraform(struct?: AwsQuicksightDataSet.DataTransformsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cast_column_type_operation: awsQuicksightDataSetCastColumnTypeOperationPropertyToTerraform(struct!.castColumnTypeOperation),
    create_columns_operation: awsQuicksightDataSetCreateColumnsOperationPropertyToTerraform(struct!.createColumnsOperation),
    filter_operation: awsQuicksightDataSetFilterOperationPropertyToTerraform(struct!.filterOperation),
    project_operation: awsQuicksightDataSetProjectOperationPropertyToTerraform(struct!.projectOperation),
    rename_column_operation: awsQuicksightDataSetRenameColumnOperationPropertyToTerraform(struct!.renameColumnOperation),
    tag_column_operation: awsQuicksightDataSetTagColumnOperationPropertyToTerraform(struct!.tagColumnOperation),
    untag_column_operation: awsQuicksightDataSetUntagColumnOperationPropertyToTerraform(struct!.untagColumnOperation),
  }
}


export function awsQuicksightDataSetDataTransformsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.DataTransformsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cast_column_type_operation: {
      value: awsQuicksightDataSetCastColumnTypeOperationPropertyToHclTerraform(struct!.castColumnTypeOperation),
      isBlock: true,
      type: "list",
      storageClassType: "CastColumnTypeOperationPropertyList",
    },
    create_columns_operation: {
      value: awsQuicksightDataSetCreateColumnsOperationPropertyToHclTerraform(struct!.createColumnsOperation),
      isBlock: true,
      type: "list",
      storageClassType: "CreateColumnsOperationPropertyList",
    },
    filter_operation: {
      value: awsQuicksightDataSetFilterOperationPropertyToHclTerraform(struct!.filterOperation),
      isBlock: true,
      type: "list",
      storageClassType: "FilterOperationPropertyList",
    },
    project_operation: {
      value: awsQuicksightDataSetProjectOperationPropertyToHclTerraform(struct!.projectOperation),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectOperationPropertyList",
    },
    rename_column_operation: {
      value: awsQuicksightDataSetRenameColumnOperationPropertyToHclTerraform(struct!.renameColumnOperation),
      isBlock: true,
      type: "list",
      storageClassType: "RenameColumnOperationPropertyList",
    },
    tag_column_operation: {
      value: awsQuicksightDataSetTagColumnOperationPropertyToHclTerraform(struct!.tagColumnOperation),
      isBlock: true,
      type: "list",
      storageClassType: "TagColumnOperationPropertyList",
    },
    untag_column_operation: {
      value: awsQuicksightDataSetUntagColumnOperationPropertyToHclTerraform(struct!.untagColumnOperation),
      isBlock: true,
      type: "list",
      storageClassType: "UntagColumnOperationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetLeftJoinKeyPropertiesPropertyToTerraform(struct?: AwsQuicksightDataSet.LeftJoinKeyPropertiesPropertyOutputReference | AwsQuicksightDataSet.LeftJoinKeyPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unique_key: cdktn.booleanToTerraform(struct!.uniqueKey),
  }
}


export function awsQuicksightDataSetLeftJoinKeyPropertiesPropertyToHclTerraform(struct?: AwsQuicksightDataSet.LeftJoinKeyPropertiesPropertyOutputReference | AwsQuicksightDataSet.LeftJoinKeyPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unique_key: {
      value: cdktn.booleanToHclTerraform(struct!.uniqueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRightJoinKeyPropertiesPropertyToTerraform(struct?: AwsQuicksightDataSet.RightJoinKeyPropertiesPropertyOutputReference | AwsQuicksightDataSet.RightJoinKeyPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unique_key: cdktn.booleanToTerraform(struct!.uniqueKey),
  }
}


export function awsQuicksightDataSetRightJoinKeyPropertiesPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RightJoinKeyPropertiesPropertyOutputReference | AwsQuicksightDataSet.RightJoinKeyPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unique_key: {
      value: cdktn.booleanToHclTerraform(struct!.uniqueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetJoinInstructionPropertyToTerraform(struct?: AwsQuicksightDataSet.JoinInstructionPropertyOutputReference | AwsQuicksightDataSet.JoinInstructionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    left_operand: cdktn.stringToTerraform(struct!.leftOperand),
    on_clause: cdktn.stringToTerraform(struct!.onClause),
    right_operand: cdktn.stringToTerraform(struct!.rightOperand),
    type: cdktn.stringToTerraform(struct!.type),
    left_join_key_properties: awsQuicksightDataSetLeftJoinKeyPropertiesPropertyToTerraform(struct!.leftJoinKeyProperties),
    right_join_key_properties: awsQuicksightDataSetRightJoinKeyPropertiesPropertyToTerraform(struct!.rightJoinKeyProperties),
  }
}


export function awsQuicksightDataSetJoinInstructionPropertyToHclTerraform(struct?: AwsQuicksightDataSet.JoinInstructionPropertyOutputReference | AwsQuicksightDataSet.JoinInstructionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    left_operand: {
      value: cdktn.stringToHclTerraform(struct!.leftOperand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_clause: {
      value: cdktn.stringToHclTerraform(struct!.onClause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right_operand: {
      value: cdktn.stringToHclTerraform(struct!.rightOperand),
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
    left_join_key_properties: {
      value: awsQuicksightDataSetLeftJoinKeyPropertiesPropertyToHclTerraform(struct!.leftJoinKeyProperties),
      isBlock: true,
      type: "list",
      storageClassType: "LeftJoinKeyPropertiesPropertyList",
    },
    right_join_key_properties: {
      value: awsQuicksightDataSetRightJoinKeyPropertiesPropertyToHclTerraform(struct!.rightJoinKeyProperties),
      isBlock: true,
      type: "list",
      storageClassType: "RightJoinKeyPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetSourcePropertyToTerraform(struct?: AwsQuicksightDataSet.SourcePropertyOutputReference | AwsQuicksightDataSet.SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    physical_table_id: cdktn.stringToTerraform(struct!.physicalTableId),
    join_instruction: awsQuicksightDataSetJoinInstructionPropertyToTerraform(struct!.joinInstruction),
  }
}


export function awsQuicksightDataSetSourcePropertyToHclTerraform(struct?: AwsQuicksightDataSet.SourcePropertyOutputReference | AwsQuicksightDataSet.SourceProperty): any {
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
    physical_table_id: {
      value: cdktn.stringToHclTerraform(struct!.physicalTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_instruction: {
      value: awsQuicksightDataSetJoinInstructionPropertyToHclTerraform(struct!.joinInstruction),
      isBlock: true,
      type: "list",
      storageClassType: "JoinInstructionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetLogicalTableMapPropertyToTerraform(struct?: AwsQuicksightDataSet.LogicalTableMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    logical_table_map_id: cdktn.stringToTerraform(struct!.logicalTableMapId),
    data_transforms: cdktn.listMapper(awsQuicksightDataSetDataTransformsPropertyToTerraform, true)(struct!.dataTransforms),
    source: awsQuicksightDataSetSourcePropertyToTerraform(struct!.source),
  }
}


export function awsQuicksightDataSetLogicalTableMapPropertyToHclTerraform(struct?: AwsQuicksightDataSet.LogicalTableMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_table_map_id: {
      value: cdktn.stringToHclTerraform(struct!.logicalTableMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_transforms: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetDataTransformsPropertyToHclTerraform, true)(struct!.dataTransforms),
      isBlock: true,
      type: "list",
      storageClassType: "DataTransformsPropertyList",
    },
    source: {
      value: awsQuicksightDataSetSourcePropertyToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "SourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetPermissionsPropertyToTerraform(struct?: AwsQuicksightDataSet.PermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function awsQuicksightDataSetPermissionsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.PermissionsProperty | cdktn.IResolvable): any {
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


export function awsQuicksightDataSetPhysicalTableMapCustomSqlColumnsPropertyToTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapCustomSqlColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsQuicksightDataSetPhysicalTableMapCustomSqlColumnsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapCustomSqlColumnsProperty | cdktn.IResolvable): any {
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


export function awsQuicksightDataSetCustomSqlPropertyToTerraform(struct?: AwsQuicksightDataSet.CustomSqlPropertyOutputReference | AwsQuicksightDataSet.CustomSqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
    name: cdktn.stringToTerraform(struct!.name),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    columns: cdktn.listMapper(awsQuicksightDataSetPhysicalTableMapCustomSqlColumnsPropertyToTerraform, true)(struct!.columns),
  }
}


export function awsQuicksightDataSetCustomSqlPropertyToHclTerraform(struct?: AwsQuicksightDataSet.CustomSqlPropertyOutputReference | AwsQuicksightDataSet.CustomSqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
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
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetPhysicalTableMapCustomSqlColumnsPropertyToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "PhysicalTableMapCustomSqlColumnsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable): any {
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


export function awsQuicksightDataSetRelationalTablePropertyToTerraform(struct?: AwsQuicksightDataSet.RelationalTablePropertyOutputReference | AwsQuicksightDataSet.RelationalTableProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cdktn.stringToTerraform(struct!.schema),
    input_columns: cdktn.listMapper(awsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToTerraform, true)(struct!.inputColumns),
  }
}


export function awsQuicksightDataSetRelationalTablePropertyToHclTerraform(struct?: AwsQuicksightDataSet.RelationalTablePropertyOutputReference | AwsQuicksightDataSet.RelationalTableProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
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
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_columns: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToHclTerraform, true)(struct!.inputColumns),
      isBlock: true,
      type: "list",
      storageClassType: "PhysicalTableMapRelationalTableInputColumnsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsPropertyToTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable): any {
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


export function awsQuicksightDataSetUploadSettingsPropertyToTerraform(struct?: AwsQuicksightDataSet.UploadSettingsPropertyOutputReference | AwsQuicksightDataSet.UploadSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contains_header: cdktn.booleanToTerraform(struct!.containsHeader),
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    format: cdktn.stringToTerraform(struct!.format),
    start_from_row: cdktn.numberToTerraform(struct!.startFromRow),
    text_qualifier: cdktn.stringToTerraform(struct!.textQualifier),
  }
}


export function awsQuicksightDataSetUploadSettingsPropertyToHclTerraform(struct?: AwsQuicksightDataSet.UploadSettingsPropertyOutputReference | AwsQuicksightDataSet.UploadSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contains_header: {
      value: cdktn.booleanToHclTerraform(struct!.containsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_from_row: {
      value: cdktn.numberToHclTerraform(struct!.startFromRow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.textQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetS3SourcePropertyToTerraform(struct?: AwsQuicksightDataSet.S3SourcePropertyOutputReference | AwsQuicksightDataSet.S3SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktn.listMapper(awsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsPropertyToTerraform, true)(struct!.inputColumns),
    upload_settings: awsQuicksightDataSetUploadSettingsPropertyToTerraform(struct!.uploadSettings),
  }
}


export function awsQuicksightDataSetS3SourcePropertyToHclTerraform(struct?: AwsQuicksightDataSet.S3SourcePropertyOutputReference | AwsQuicksightDataSet.S3SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_columns: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsPropertyToHclTerraform, true)(struct!.inputColumns),
      isBlock: true,
      type: "list",
      storageClassType: "PhysicalTableMapS3SourceInputColumnsPropertyList",
    },
    upload_settings: {
      value: awsQuicksightDataSetUploadSettingsPropertyToHclTerraform(struct!.uploadSettings),
      isBlock: true,
      type: "list",
      storageClassType: "UploadSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetPhysicalTableMapPropertyToTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    physical_table_map_id: cdktn.stringToTerraform(struct!.physicalTableMapId),
    custom_sql: awsQuicksightDataSetCustomSqlPropertyToTerraform(struct!.customSql),
    relational_table: awsQuicksightDataSetRelationalTablePropertyToTerraform(struct!.relationalTable),
    s3_source: awsQuicksightDataSetS3SourcePropertyToTerraform(struct!.s3Source),
  }
}


export function awsQuicksightDataSetPhysicalTableMapPropertyToHclTerraform(struct?: AwsQuicksightDataSet.PhysicalTableMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    physical_table_map_id: {
      value: cdktn.stringToHclTerraform(struct!.physicalTableMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_sql: {
      value: awsQuicksightDataSetCustomSqlPropertyToHclTerraform(struct!.customSql),
      isBlock: true,
      type: "list",
      storageClassType: "CustomSqlPropertyList",
    },
    relational_table: {
      value: awsQuicksightDataSetRelationalTablePropertyToHclTerraform(struct!.relationalTable),
      isBlock: true,
      type: "list",
      storageClassType: "RelationalTablePropertyList",
    },
    s3_source: {
      value: awsQuicksightDataSetS3SourcePropertyToHclTerraform(struct!.s3Source),
      isBlock: true,
      type: "list",
      storageClassType: "S3SourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetLookbackWindowPropertyToTerraform(struct?: AwsQuicksightDataSet.LookbackWindowPropertyOutputReference | AwsQuicksightDataSet.LookbackWindowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    size: cdktn.numberToTerraform(struct!.size),
    size_unit: cdktn.stringToTerraform(struct!.sizeUnit),
  }
}


export function awsQuicksightDataSetLookbackWindowPropertyToHclTerraform(struct?: AwsQuicksightDataSet.LookbackWindowPropertyOutputReference | AwsQuicksightDataSet.LookbackWindowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_unit: {
      value: cdktn.stringToHclTerraform(struct!.sizeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetIncrementalRefreshPropertyToTerraform(struct?: AwsQuicksightDataSet.IncrementalRefreshPropertyOutputReference | AwsQuicksightDataSet.IncrementalRefreshProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lookback_window: awsQuicksightDataSetLookbackWindowPropertyToTerraform(struct!.lookbackWindow),
  }
}


export function awsQuicksightDataSetIncrementalRefreshPropertyToHclTerraform(struct?: AwsQuicksightDataSet.IncrementalRefreshPropertyOutputReference | AwsQuicksightDataSet.IncrementalRefreshProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lookback_window: {
      value: awsQuicksightDataSetLookbackWindowPropertyToHclTerraform(struct!.lookbackWindow),
      isBlock: true,
      type: "list",
      storageClassType: "LookbackWindowPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRefreshConfigurationPropertyToTerraform(struct?: AwsQuicksightDataSet.RefreshConfigurationPropertyOutputReference | AwsQuicksightDataSet.RefreshConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    incremental_refresh: awsQuicksightDataSetIncrementalRefreshPropertyToTerraform(struct!.incrementalRefresh),
  }
}


export function awsQuicksightDataSetRefreshConfigurationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RefreshConfigurationPropertyOutputReference | AwsQuicksightDataSet.RefreshConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    incremental_refresh: {
      value: awsQuicksightDataSetIncrementalRefreshPropertyToHclTerraform(struct!.incrementalRefresh),
      isBlock: true,
      type: "list",
      storageClassType: "IncrementalRefreshPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRefreshPropertiesPropertyToTerraform(struct?: AwsQuicksightDataSet.RefreshPropertiesPropertyOutputReference | AwsQuicksightDataSet.RefreshPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    refresh_configuration: awsQuicksightDataSetRefreshConfigurationPropertyToTerraform(struct!.refreshConfiguration),
  }
}


export function awsQuicksightDataSetRefreshPropertiesPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RefreshPropertiesPropertyOutputReference | AwsQuicksightDataSet.RefreshPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    refresh_configuration: {
      value: awsQuicksightDataSetRefreshConfigurationPropertyToHclTerraform(struct!.refreshConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RefreshConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRowLevelPermissionDataSetPropertyToTerraform(struct?: AwsQuicksightDataSet.RowLevelPermissionDataSetPropertyOutputReference | AwsQuicksightDataSet.RowLevelPermissionDataSetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    format_version: cdktn.stringToTerraform(struct!.formatVersion),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    permission_policy: cdktn.stringToTerraform(struct!.permissionPolicy),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsQuicksightDataSetRowLevelPermissionDataSetPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RowLevelPermissionDataSetPropertyOutputReference | AwsQuicksightDataSet.RowLevelPermissionDataSetProperty): any {
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
    format_version: {
      value: cdktn.stringToHclTerraform(struct!.formatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy: {
      value: cdktn.stringToHclTerraform(struct!.permissionPolicy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetTagRulesPropertyToTerraform(struct?: AwsQuicksightDataSet.TagRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    match_all_value: cdktn.stringToTerraform(struct!.matchAllValue),
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_multi_value_delimiter: cdktn.stringToTerraform(struct!.tagMultiValueDelimiter),
  }
}


export function awsQuicksightDataSetTagRulesPropertyToHclTerraform(struct?: AwsQuicksightDataSet.TagRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_all_value: {
      value: cdktn.stringToHclTerraform(struct!.matchAllValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_multi_value_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.tagMultiValueDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSetRowLevelPermissionTagConfigurationPropertyToTerraform(struct?: AwsQuicksightDataSet.RowLevelPermissionTagConfigurationPropertyOutputReference | AwsQuicksightDataSet.RowLevelPermissionTagConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
    tag_rules: cdktn.listMapper(awsQuicksightDataSetTagRulesPropertyToTerraform, true)(struct!.tagRules),
  }
}


export function awsQuicksightDataSetRowLevelPermissionTagConfigurationPropertyToHclTerraform(struct?: AwsQuicksightDataSet.RowLevelPermissionTagConfigurationPropertyOutputReference | AwsQuicksightDataSet.RowLevelPermissionTagConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_rules: {
      value: cdktn.listMapperHcl(awsQuicksightDataSetTagRulesPropertyToHclTerraform, true)(struct!.tagRules),
      isBlock: true,
      type: "list",
      storageClassType: "TagRulesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsQuicksightDataSet {
export interface OutputColumnsProperty {
}
export class OutputColumnsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OutputColumnsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputColumnsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class OutputColumnsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): OutputColumnsPropertyOutputReference {
    return new OutputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeoSpatialColumnGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#columns AwsQuicksightDataSet#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#country_code AwsQuicksightDataSet#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
}
export class GeoSpatialColumnGroupPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeoSpatialColumnGroupProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeoSpatialColumnGroupProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._countryCode = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._countryCode = value.countryCode;
      this._name = value.name;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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
export interface ColumnGroupsProperty {
  /**
  * geo_spatial_column_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#geo_spatial_column_group AwsQuicksightDataSet#geo_spatial_column_group}
  */
  readonly geoSpatialColumnGroup?: GeoSpatialColumnGroupProperty;
}
export class ColumnGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ColumnGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoSpatialColumnGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoSpatialColumnGroup = this._geoSpatialColumnGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColumnGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoSpatialColumnGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoSpatialColumnGroup.internalValue = value.geoSpatialColumnGroup;
    }
  }

  // geo_spatial_column_group - computed: false, optional: true, required: false
  private _geoSpatialColumnGroup = new GeoSpatialColumnGroupPropertyOutputReference(this, "geo_spatial_column_group");
  public get geoSpatialColumnGroup() {
    return this._geoSpatialColumnGroup;
  }
  public putGeoSpatialColumnGroup(value: GeoSpatialColumnGroupProperty) {
    this._geoSpatialColumnGroup.internalValue = value;
  }
  public resetGeoSpatialColumnGroup() {
    this._geoSpatialColumnGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoSpatialColumnGroupInput() {
    return this._geoSpatialColumnGroup.internalValue;
  }
}

export class ColumnGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : ColumnGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): ColumnGroupsPropertyOutputReference {
    return new ColumnGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ColumnLevelPermissionRulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_names AwsQuicksightDataSet#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#principals AwsQuicksightDataSet#principals}
  */
  readonly principals?: string[];
}
export class ColumnLevelPermissionRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ColumnLevelPermissionRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColumnLevelPermissionRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._principals = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._principals = value.principals;
    }
  }

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}

export class ColumnLevelPermissionRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : ColumnLevelPermissionRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): ColumnLevelPermissionRulesPropertyOutputReference {
    return new ColumnLevelPermissionRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSetUsageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source AwsQuicksightDataSet#disable_use_as_direct_query_source}
  */
  readonly disableUseAsDirectQuerySource?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#disable_use_as_imported_source AwsQuicksightDataSet#disable_use_as_imported_source}
  */
  readonly disableUseAsImportedSource?: boolean | cdktn.IResolvable;
}
export class DataSetUsageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSetUsageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUseAsDirectQuerySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseAsDirectQuerySource = this._disableUseAsDirectQuerySource;
    }
    if (this._disableUseAsImportedSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseAsImportedSource = this._disableUseAsImportedSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSetUsageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUseAsDirectQuerySource = undefined;
      this._disableUseAsImportedSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUseAsDirectQuerySource = value.disableUseAsDirectQuerySource;
      this._disableUseAsImportedSource = value.disableUseAsImportedSource;
    }
  }

  // disable_use_as_direct_query_source - computed: true, optional: true, required: false
  private _disableUseAsDirectQuerySource?: boolean | cdktn.IResolvable; 
  public get disableUseAsDirectQuerySource() {
    return this.getBooleanAttribute('disable_use_as_direct_query_source');
  }
  public set disableUseAsDirectQuerySource(value: boolean | cdktn.IResolvable) {
    this._disableUseAsDirectQuerySource = value;
  }
  public resetDisableUseAsDirectQuerySource() {
    this._disableUseAsDirectQuerySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseAsDirectQuerySourceInput() {
    return this._disableUseAsDirectQuerySource;
  }

  // disable_use_as_imported_source - computed: true, optional: true, required: false
  private _disableUseAsImportedSource?: boolean | cdktn.IResolvable; 
  public get disableUseAsImportedSource() {
    return this.getBooleanAttribute('disable_use_as_imported_source');
  }
  public set disableUseAsImportedSource(value: boolean | cdktn.IResolvable) {
    this._disableUseAsImportedSource = value;
  }
  public resetDisableUseAsImportedSource() {
    this._disableUseAsImportedSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseAsImportedSourceInput() {
    return this._disableUseAsImportedSource;
  }
}
export interface FieldFoldersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#columns AwsQuicksightDataSet#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#description AwsQuicksightDataSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#field_folders_id AwsQuicksightDataSet#field_folders_id}
  */
  readonly fieldFoldersId: string;
}
export class FieldFoldersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FieldFoldersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fieldFoldersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldFoldersId = this._fieldFoldersId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FieldFoldersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._description = undefined;
      this._fieldFoldersId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._description = value.description;
      this._fieldFoldersId = value.fieldFoldersId;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
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

  // field_folders_id - computed: false, optional: false, required: true
  private _fieldFoldersId?: string; 
  public get fieldFoldersId() {
    return this.getStringAttribute('field_folders_id');
  }
  public set fieldFoldersId(value: string) {
    this._fieldFoldersId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFoldersIdInput() {
    return this._fieldFoldersId;
  }
}

export class FieldFoldersPropertyList extends cdktn.ComplexList {
  public internalValue? : FieldFoldersProperty[] | cdktn.IResolvable

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
  public get(index: number): FieldFoldersPropertyOutputReference {
    return new FieldFoldersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CastColumnTypeOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#format AwsQuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#new_column_type AwsQuicksightDataSet#new_column_type}
  */
  readonly newColumnType: string;
}
export class CastColumnTypeOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CastColumnTypeOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._newColumnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColumnType = this._newColumnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CastColumnTypeOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._format = undefined;
      this._newColumnType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._format = value.format;
      this._newColumnType = value.newColumnType;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // new_column_type - computed: false, optional: false, required: true
  private _newColumnType?: string; 
  public get newColumnType() {
    return this.getStringAttribute('new_column_type');
  }
  public set newColumnType(value: string) {
    this._newColumnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newColumnTypeInput() {
    return this._newColumnType;
  }
}
export interface LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_id AwsQuicksightDataSet#column_id}
  */
  readonly columnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#expression AwsQuicksightDataSet#expression}
  */
  readonly expression: string;
}
export class LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnId = this._columnId;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnId = undefined;
      this._columnName = undefined;
      this._expression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnId = value.columnId;
      this._columnName = value.columnName;
      this._expression = value.expression;
    }
  }

  // column_id - computed: false, optional: false, required: true
  private _columnId?: string; 
  public get columnId() {
    return this.getStringAttribute('column_id');
  }
  public set columnId(value: string) {
    this._columnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIdInput() {
    return this._columnId;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyOutputReference {
    return new LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateColumnsOperationProperty {
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#columns AwsQuicksightDataSet#columns}
  */
  readonly columns: LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty[] | cdktn.IResolvable;
}
export class CreateColumnsOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CreateColumnsOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateColumnsOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new LogicalTableMapDataTransformsCreateColumnsOperationColumnsPropertyList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: LogicalTableMapDataTransformsCreateColumnsOperationColumnsProperty[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface FilterOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#condition_expression AwsQuicksightDataSet#condition_expression}
  */
  readonly conditionExpression: string;
}
export class FilterOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionExpression = value.conditionExpression;
    }
  }

  // condition_expression - computed: false, optional: false, required: true
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }
}
export interface ProjectOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#projected_columns AwsQuicksightDataSet#projected_columns}
  */
  readonly projectedColumns: string[];
}
export class ProjectOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectedColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectedColumns = this._projectedColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectedColumns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectedColumns = value.projectedColumns;
    }
  }

  // projected_columns - computed: false, optional: false, required: true
  private _projectedColumns?: string[]; 
  public get projectedColumns() {
    return this.getListAttribute('projected_columns');
  }
  public set projectedColumns(value: string[]) {
    this._projectedColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedColumnsInput() {
    return this._projectedColumns;
  }
}
export interface RenameColumnOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#new_column_name AwsQuicksightDataSet#new_column_name}
  */
  readonly newColumnName: string;
}
export class RenameColumnOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RenameColumnOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._newColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColumnName = this._newColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RenameColumnOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._newColumnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._newColumnName = value.newColumnName;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // new_column_name - computed: false, optional: false, required: true
  private _newColumnName?: string; 
  public get newColumnName() {
    return this.getStringAttribute('new_column_name');
  }
  public set newColumnName(value: string) {
    this._newColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newColumnNameInput() {
    return this._newColumnName;
  }
}
export interface ColumnDescriptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#text AwsQuicksightDataSet#text}
  */
  readonly text?: string;
}
export class ColumnDescriptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColumnDescriptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColumnDescriptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface TagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_geographic_role AwsQuicksightDataSet#column_geographic_role}
  */
  readonly columnGeographicRole?: string;
  /**
  * column_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_description AwsQuicksightDataSet#column_description}
  */
  readonly columnDescription?: ColumnDescriptionProperty;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnGeographicRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGeographicRole = this._columnGeographicRole;
    }
    if (this._columnDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescription = this._columnDescription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnGeographicRole = undefined;
      this._columnDescription.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnGeographicRole = value.columnGeographicRole;
      this._columnDescription.internalValue = value.columnDescription;
    }
  }

  // column_geographic_role - computed: true, optional: true, required: false
  private _columnGeographicRole?: string; 
  public get columnGeographicRole() {
    return this.getStringAttribute('column_geographic_role');
  }
  public set columnGeographicRole(value: string) {
    this._columnGeographicRole = value;
  }
  public resetColumnGeographicRole() {
    this._columnGeographicRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGeographicRoleInput() {
    return this._columnGeographicRole;
  }

  // column_description - computed: false, optional: true, required: false
  private _columnDescription = new ColumnDescriptionPropertyOutputReference(this, "column_description");
  public get columnDescription() {
    return this._columnDescription;
  }
  public putColumnDescription(value: ColumnDescriptionProperty) {
    this._columnDescription.internalValue = value;
  }
  public resetColumnDescription() {
    this._columnDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionInput() {
    return this._columnDescription.internalValue;
  }
}

export class TagsPropertyList extends cdktn.ComplexList {
  public internalValue? : TagsProperty[] | cdktn.IResolvable

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
  public get(index: number): TagsPropertyOutputReference {
    return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagColumnOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tags AwsQuicksightDataSet#tags}
  */
  readonly tags: TagsProperty[] | cdktn.IResolvable;
}
export class TagColumnOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TagColumnOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagColumnOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._tags.internalValue = value.tags;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // tags - computed: false, optional: false, required: true
  private _tags = new TagsPropertyList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TagsProperty[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface UntagColumnOperationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tag_names AwsQuicksightDataSet#tag_names}
  */
  readonly tagNames: string[];
}
export class UntagColumnOperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UntagColumnOperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._tagNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNames = this._tagNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UntagColumnOperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._tagNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._tagNames = value.tagNames;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // tag_names - computed: false, optional: false, required: true
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }
}
export interface DataTransformsProperty {
  /**
  * cast_column_type_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#cast_column_type_operation AwsQuicksightDataSet#cast_column_type_operation}
  */
  readonly castColumnTypeOperation?: CastColumnTypeOperationProperty;
  /**
  * create_columns_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#create_columns_operation AwsQuicksightDataSet#create_columns_operation}
  */
  readonly createColumnsOperation?: CreateColumnsOperationProperty;
  /**
  * filter_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#filter_operation AwsQuicksightDataSet#filter_operation}
  */
  readonly filterOperation?: FilterOperationProperty;
  /**
  * project_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#project_operation AwsQuicksightDataSet#project_operation}
  */
  readonly projectOperation?: ProjectOperationProperty;
  /**
  * rename_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#rename_column_operation AwsQuicksightDataSet#rename_column_operation}
  */
  readonly renameColumnOperation?: RenameColumnOperationProperty;
  /**
  * tag_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tag_column_operation AwsQuicksightDataSet#tag_column_operation}
  */
  readonly tagColumnOperation?: TagColumnOperationProperty;
  /**
  * untag_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#untag_column_operation AwsQuicksightDataSet#untag_column_operation}
  */
  readonly untagColumnOperation?: UntagColumnOperationProperty;
}
export class DataTransformsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataTransformsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._castColumnTypeOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.castColumnTypeOperation = this._castColumnTypeOperation?.internalValue;
    }
    if (this._createColumnsOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createColumnsOperation = this._createColumnsOperation?.internalValue;
    }
    if (this._filterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperation = this._filterOperation?.internalValue;
    }
    if (this._projectOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectOperation = this._projectOperation?.internalValue;
    }
    if (this._renameColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameColumnOperation = this._renameColumnOperation?.internalValue;
    }
    if (this._tagColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagColumnOperation = this._tagColumnOperation?.internalValue;
    }
    if (this._untagColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagColumnOperation = this._untagColumnOperation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTransformsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._castColumnTypeOperation.internalValue = undefined;
      this._createColumnsOperation.internalValue = undefined;
      this._filterOperation.internalValue = undefined;
      this._projectOperation.internalValue = undefined;
      this._renameColumnOperation.internalValue = undefined;
      this._tagColumnOperation.internalValue = undefined;
      this._untagColumnOperation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._castColumnTypeOperation.internalValue = value.castColumnTypeOperation;
      this._createColumnsOperation.internalValue = value.createColumnsOperation;
      this._filterOperation.internalValue = value.filterOperation;
      this._projectOperation.internalValue = value.projectOperation;
      this._renameColumnOperation.internalValue = value.renameColumnOperation;
      this._tagColumnOperation.internalValue = value.tagColumnOperation;
      this._untagColumnOperation.internalValue = value.untagColumnOperation;
    }
  }

  // cast_column_type_operation - computed: false, optional: true, required: false
  private _castColumnTypeOperation = new CastColumnTypeOperationPropertyOutputReference(this, "cast_column_type_operation");
  public get castColumnTypeOperation() {
    return this._castColumnTypeOperation;
  }
  public putCastColumnTypeOperation(value: CastColumnTypeOperationProperty) {
    this._castColumnTypeOperation.internalValue = value;
  }
  public resetCastColumnTypeOperation() {
    this._castColumnTypeOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castColumnTypeOperationInput() {
    return this._castColumnTypeOperation.internalValue;
  }

  // create_columns_operation - computed: false, optional: true, required: false
  private _createColumnsOperation = new CreateColumnsOperationPropertyOutputReference(this, "create_columns_operation");
  public get createColumnsOperation() {
    return this._createColumnsOperation;
  }
  public putCreateColumnsOperation(value: CreateColumnsOperationProperty) {
    this._createColumnsOperation.internalValue = value;
  }
  public resetCreateColumnsOperation() {
    this._createColumnsOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createColumnsOperationInput() {
    return this._createColumnsOperation.internalValue;
  }

  // filter_operation - computed: false, optional: true, required: false
  private _filterOperation = new FilterOperationPropertyOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: FilterOperationProperty) {
    this._filterOperation.internalValue = value;
  }
  public resetFilterOperation() {
    this._filterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperationInput() {
    return this._filterOperation.internalValue;
  }

  // project_operation - computed: false, optional: true, required: false
  private _projectOperation = new ProjectOperationPropertyOutputReference(this, "project_operation");
  public get projectOperation() {
    return this._projectOperation;
  }
  public putProjectOperation(value: ProjectOperationProperty) {
    this._projectOperation.internalValue = value;
  }
  public resetProjectOperation() {
    this._projectOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectOperationInput() {
    return this._projectOperation.internalValue;
  }

  // rename_column_operation - computed: false, optional: true, required: false
  private _renameColumnOperation = new RenameColumnOperationPropertyOutputReference(this, "rename_column_operation");
  public get renameColumnOperation() {
    return this._renameColumnOperation;
  }
  public putRenameColumnOperation(value: RenameColumnOperationProperty) {
    this._renameColumnOperation.internalValue = value;
  }
  public resetRenameColumnOperation() {
    this._renameColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameColumnOperationInput() {
    return this._renameColumnOperation.internalValue;
  }

  // tag_column_operation - computed: false, optional: true, required: false
  private _tagColumnOperation = new TagColumnOperationPropertyOutputReference(this, "tag_column_operation");
  public get tagColumnOperation() {
    return this._tagColumnOperation;
  }
  public putTagColumnOperation(value: TagColumnOperationProperty) {
    this._tagColumnOperation.internalValue = value;
  }
  public resetTagColumnOperation() {
    this._tagColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagColumnOperationInput() {
    return this._tagColumnOperation.internalValue;
  }

  // untag_column_operation - computed: false, optional: true, required: false
  private _untagColumnOperation = new UntagColumnOperationPropertyOutputReference(this, "untag_column_operation");
  public get untagColumnOperation() {
    return this._untagColumnOperation;
  }
  public putUntagColumnOperation(value: UntagColumnOperationProperty) {
    this._untagColumnOperation.internalValue = value;
  }
  public resetUntagColumnOperation() {
    this._untagColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untagColumnOperationInput() {
    return this._untagColumnOperation.internalValue;
  }
}

export class DataTransformsPropertyList extends cdktn.ComplexList {
  public internalValue? : DataTransformsProperty[] | cdktn.IResolvable

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
  public get(index: number): DataTransformsPropertyOutputReference {
    return new DataTransformsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LeftJoinKeyPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#unique_key AwsQuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktn.IResolvable;
}
export class LeftJoinKeyPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LeftJoinKeyPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniqueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKey = this._uniqueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LeftJoinKeyPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uniqueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uniqueKey = value.uniqueKey;
    }
  }

  // unique_key - computed: true, optional: true, required: false
  private _uniqueKey?: boolean | cdktn.IResolvable; 
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
  public set uniqueKey(value: boolean | cdktn.IResolvable) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }
}
export interface RightJoinKeyPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#unique_key AwsQuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktn.IResolvable;
}
export class RightJoinKeyPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RightJoinKeyPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniqueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKey = this._uniqueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RightJoinKeyPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uniqueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uniqueKey = value.uniqueKey;
    }
  }

  // unique_key - computed: true, optional: true, required: false
  private _uniqueKey?: boolean | cdktn.IResolvable; 
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
  public set uniqueKey(value: boolean | cdktn.IResolvable) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }
}
export interface JoinInstructionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#left_operand AwsQuicksightDataSet#left_operand}
  */
  readonly leftOperand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#on_clause AwsQuicksightDataSet#on_clause}
  */
  readonly onClause: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#right_operand AwsQuicksightDataSet#right_operand}
  */
  readonly rightOperand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#type AwsQuicksightDataSet#type}
  */
  readonly type: string;
  /**
  * left_join_key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#left_join_key_properties AwsQuicksightDataSet#left_join_key_properties}
  */
  readonly leftJoinKeyProperties?: LeftJoinKeyPropertiesProperty;
  /**
  * right_join_key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#right_join_key_properties AwsQuicksightDataSet#right_join_key_properties}
  */
  readonly rightJoinKeyProperties?: RightJoinKeyPropertiesProperty;
}
export class JoinInstructionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JoinInstructionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftOperand !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftOperand = this._leftOperand;
    }
    if (this._onClause !== undefined) {
      hasAnyValues = true;
      internalValueResult.onClause = this._onClause;
    }
    if (this._rightOperand !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightOperand = this._rightOperand;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._leftJoinKeyProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftJoinKeyProperties = this._leftJoinKeyProperties?.internalValue;
    }
    if (this._rightJoinKeyProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightJoinKeyProperties = this._rightJoinKeyProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JoinInstructionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftOperand = undefined;
      this._onClause = undefined;
      this._rightOperand = undefined;
      this._type = undefined;
      this._leftJoinKeyProperties.internalValue = undefined;
      this._rightJoinKeyProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftOperand = value.leftOperand;
      this._onClause = value.onClause;
      this._rightOperand = value.rightOperand;
      this._type = value.type;
      this._leftJoinKeyProperties.internalValue = value.leftJoinKeyProperties;
      this._rightJoinKeyProperties.internalValue = value.rightJoinKeyProperties;
    }
  }

  // left_operand - computed: false, optional: false, required: true
  private _leftOperand?: string; 
  public get leftOperand() {
    return this.getStringAttribute('left_operand');
  }
  public set leftOperand(value: string) {
    this._leftOperand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftOperandInput() {
    return this._leftOperand;
  }

  // on_clause - computed: false, optional: false, required: true
  private _onClause?: string; 
  public get onClause() {
    return this.getStringAttribute('on_clause');
  }
  public set onClause(value: string) {
    this._onClause = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onClauseInput() {
    return this._onClause;
  }

  // right_operand - computed: false, optional: false, required: true
  private _rightOperand?: string; 
  public get rightOperand() {
    return this.getStringAttribute('right_operand');
  }
  public set rightOperand(value: string) {
    this._rightOperand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightOperandInput() {
    return this._rightOperand;
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

  // left_join_key_properties - computed: false, optional: true, required: false
  private _leftJoinKeyProperties = new LeftJoinKeyPropertiesPropertyOutputReference(this, "left_join_key_properties");
  public get leftJoinKeyProperties() {
    return this._leftJoinKeyProperties;
  }
  public putLeftJoinKeyProperties(value: LeftJoinKeyPropertiesProperty) {
    this._leftJoinKeyProperties.internalValue = value;
  }
  public resetLeftJoinKeyProperties() {
    this._leftJoinKeyProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftJoinKeyPropertiesInput() {
    return this._leftJoinKeyProperties.internalValue;
  }

  // right_join_key_properties - computed: false, optional: true, required: false
  private _rightJoinKeyProperties = new RightJoinKeyPropertiesPropertyOutputReference(this, "right_join_key_properties");
  public get rightJoinKeyProperties() {
    return this._rightJoinKeyProperties;
  }
  public putRightJoinKeyProperties(value: RightJoinKeyPropertiesProperty) {
    this._rightJoinKeyProperties.internalValue = value;
  }
  public resetRightJoinKeyProperties() {
    this._rightJoinKeyProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightJoinKeyPropertiesInput() {
    return this._rightJoinKeyProperties.internalValue;
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_set_arn AwsQuicksightDataSet#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#physical_table_id AwsQuicksightDataSet#physical_table_id}
  */
  readonly physicalTableId?: string;
  /**
  * join_instruction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#join_instruction AwsQuicksightDataSet#join_instruction}
  */
  readonly joinInstruction?: JoinInstructionProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._physicalTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTableId = this._physicalTableId;
    }
    if (this._joinInstruction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinInstruction = this._joinInstruction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetArn = undefined;
      this._physicalTableId = undefined;
      this._joinInstruction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetArn = value.dataSetArn;
      this._physicalTableId = value.physicalTableId;
      this._joinInstruction.internalValue = value.joinInstruction;
    }
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // physical_table_id - computed: true, optional: true, required: false
  private _physicalTableId?: string; 
  public get physicalTableId() {
    return this.getStringAttribute('physical_table_id');
  }
  public set physicalTableId(value: string) {
    this._physicalTableId = value;
  }
  public resetPhysicalTableId() {
    this._physicalTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableIdInput() {
    return this._physicalTableId;
  }

  // join_instruction - computed: false, optional: true, required: false
  private _joinInstruction = new JoinInstructionPropertyOutputReference(this, "join_instruction");
  public get joinInstruction() {
    return this._joinInstruction;
  }
  public putJoinInstruction(value: JoinInstructionProperty) {
    this._joinInstruction.internalValue = value;
  }
  public resetJoinInstruction() {
    this._joinInstruction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinInstructionInput() {
    return this._joinInstruction.internalValue;
  }
}
export interface LogicalTableMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#alias AwsQuicksightDataSet#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#logical_table_map_id AwsQuicksightDataSet#logical_table_map_id}
  */
  readonly logicalTableMapId: string;
  /**
  * data_transforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_transforms AwsQuicksightDataSet#data_transforms}
  */
  readonly dataTransforms?: DataTransformsProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#source AwsQuicksightDataSet#source}
  */
  readonly source: SourceProperty;
}
export class LogicalTableMapPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogicalTableMapProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._logicalTableMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalTableMapId = this._logicalTableMapId;
    }
    if (this._dataTransforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransforms = this._dataTransforms?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalTableMapProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._logicalTableMapId = undefined;
      this._dataTransforms.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._logicalTableMapId = value.logicalTableMapId;
      this._dataTransforms.internalValue = value.dataTransforms;
      this._source.internalValue = value.source;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // logical_table_map_id - computed: false, optional: false, required: true
  private _logicalTableMapId?: string; 
  public get logicalTableMapId() {
    return this.getStringAttribute('logical_table_map_id');
  }
  public set logicalTableMapId(value: string) {
    this._logicalTableMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalTableMapIdInput() {
    return this._logicalTableMapId;
  }

  // data_transforms - computed: false, optional: true, required: false
  private _dataTransforms = new DataTransformsPropertyList(this, "data_transforms", false);
  public get dataTransforms() {
    return this._dataTransforms;
  }
  public putDataTransforms(value: DataTransformsProperty[] | cdktn.IResolvable) {
    this._dataTransforms.internalValue = value;
  }
  public resetDataTransforms() {
    this._dataTransforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransformsInput() {
    return this._dataTransforms.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new SourcePropertyOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SourceProperty) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class LogicalTableMapPropertyList extends cdktn.ComplexList {
  public internalValue? : LogicalTableMapProperty[] | cdktn.IResolvable

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
  public get(index: number): LogicalTableMapPropertyOutputReference {
    return new LogicalTableMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#actions AwsQuicksightDataSet#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#principal AwsQuicksightDataSet#principal}
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
export interface PhysicalTableMapCustomSqlColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#type AwsQuicksightDataSet#type}
  */
  readonly type: string;
}
export class PhysicalTableMapCustomSqlColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PhysicalTableMapCustomSqlColumnsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PhysicalTableMapCustomSqlColumnsProperty | cdktn.IResolvable | undefined) {
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
}

export class PhysicalTableMapCustomSqlColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : PhysicalTableMapCustomSqlColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): PhysicalTableMapCustomSqlColumnsPropertyOutputReference {
    return new PhysicalTableMapCustomSqlColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomSqlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_source_arn AwsQuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#sql_query AwsQuicksightDataSet#sql_query}
  */
  readonly sqlQuery: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#columns AwsQuicksightDataSet#columns}
  */
  readonly columns?: PhysicalTableMapCustomSqlColumnsProperty[] | cdktn.IResolvable;
}
export class CustomSqlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomSqlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSqlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceArn = undefined;
      this._name = undefined;
      this._sqlQuery = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceArn = value.dataSourceArn;
      this._name = value.name;
      this._sqlQuery = value.sqlQuery;
      this._columns.internalValue = value.columns;
    }
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
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

  // sql_query - computed: false, optional: false, required: true
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new PhysicalTableMapCustomSqlColumnsPropertyList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: PhysicalTableMapCustomSqlColumnsProperty[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface PhysicalTableMapRelationalTableInputColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#type AwsQuicksightDataSet#type}
  */
  readonly type: string;
}
export class PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable | undefined) {
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
}

export class PhysicalTableMapRelationalTableInputColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference {
    return new PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelationalTableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#catalog AwsQuicksightDataSet#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_source_arn AwsQuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#schema AwsQuicksightDataSet#schema}
  */
  readonly schema?: string;
  /**
  * input_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#input_columns AwsQuicksightDataSet#input_columns}
  */
  readonly inputColumns: PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable;
}
export class RelationalTablePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RelationalTableProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._inputColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumns = this._inputColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationalTableProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._dataSourceArn = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._inputColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._dataSourceArn = value.dataSourceArn;
      this._name = value.name;
      this._schema = value.schema;
      this._inputColumns.internalValue = value.inputColumns;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // input_columns - computed: false, optional: false, required: true
  private _inputColumns = new PhysicalTableMapRelationalTableInputColumnsPropertyList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }
  public putInputColumns(value: PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable) {
    this._inputColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnsInput() {
    return this._inputColumns.internalValue;
  }
}
export interface PhysicalTableMapS3SourceInputColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#name AwsQuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#type AwsQuicksightDataSet#type}
  */
  readonly type: string;
}
export class PhysicalTableMapS3SourceInputColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable | undefined) {
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
}

export class PhysicalTableMapS3SourceInputColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): PhysicalTableMapS3SourceInputColumnsPropertyOutputReference {
    return new PhysicalTableMapS3SourceInputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UploadSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#contains_header AwsQuicksightDataSet#contains_header}
  */
  readonly containsHeader?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#delimiter AwsQuicksightDataSet#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#format AwsQuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#start_from_row AwsQuicksightDataSet#start_from_row}
  */
  readonly startFromRow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#text_qualifier AwsQuicksightDataSet#text_qualifier}
  */
  readonly textQualifier?: string;
}
export class UploadSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UploadSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.containsHeader = this._containsHeader;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._startFromRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startFromRow = this._startFromRow;
    }
    if (this._textQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.textQualifier = this._textQualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UploadSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containsHeader = undefined;
      this._delimiter = undefined;
      this._format = undefined;
      this._startFromRow = undefined;
      this._textQualifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containsHeader = value.containsHeader;
      this._delimiter = value.delimiter;
      this._format = value.format;
      this._startFromRow = value.startFromRow;
      this._textQualifier = value.textQualifier;
    }
  }

  // contains_header - computed: true, optional: true, required: false
  private _containsHeader?: boolean | cdktn.IResolvable; 
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }
  public set containsHeader(value: boolean | cdktn.IResolvable) {
    this._containsHeader = value;
  }
  public resetContainsHeader() {
    this._containsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsHeaderInput() {
    return this._containsHeader;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // start_from_row - computed: true, optional: true, required: false
  private _startFromRow?: number; 
  public get startFromRow() {
    return this.getNumberAttribute('start_from_row');
  }
  public set startFromRow(value: number) {
    this._startFromRow = value;
  }
  public resetStartFromRow() {
    this._startFromRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startFromRowInput() {
    return this._startFromRow;
  }

  // text_qualifier - computed: true, optional: true, required: false
  private _textQualifier?: string; 
  public get textQualifier() {
    return this.getStringAttribute('text_qualifier');
  }
  public set textQualifier(value: string) {
    this._textQualifier = value;
  }
  public resetTextQualifier() {
    this._textQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textQualifierInput() {
    return this._textQualifier;
  }
}
export interface S3SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#data_source_arn AwsQuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * input_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#input_columns AwsQuicksightDataSet#input_columns}
  */
  readonly inputColumns: PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable;
  /**
  * upload_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#upload_settings AwsQuicksightDataSet#upload_settings}
  */
  readonly uploadSettings: UploadSettingsProperty;
}
export class S3SourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3SourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._inputColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumns = this._inputColumns?.internalValue;
    }
    if (this._uploadSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadSettings = this._uploadSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3SourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceArn = undefined;
      this._inputColumns.internalValue = undefined;
      this._uploadSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceArn = value.dataSourceArn;
      this._inputColumns.internalValue = value.inputColumns;
      this._uploadSettings.internalValue = value.uploadSettings;
    }
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
  }

  // input_columns - computed: false, optional: false, required: true
  private _inputColumns = new PhysicalTableMapS3SourceInputColumnsPropertyList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }
  public putInputColumns(value: PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable) {
    this._inputColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnsInput() {
    return this._inputColumns.internalValue;
  }

  // upload_settings - computed: false, optional: false, required: true
  private _uploadSettings = new UploadSettingsPropertyOutputReference(this, "upload_settings");
  public get uploadSettings() {
    return this._uploadSettings;
  }
  public putUploadSettings(value: UploadSettingsProperty) {
    this._uploadSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSettingsInput() {
    return this._uploadSettings.internalValue;
  }
}
export interface PhysicalTableMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#physical_table_map_id AwsQuicksightDataSet#physical_table_map_id}
  */
  readonly physicalTableMapId: string;
  /**
  * custom_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#custom_sql AwsQuicksightDataSet#custom_sql}
  */
  readonly customSql?: CustomSqlProperty;
  /**
  * relational_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#relational_table AwsQuicksightDataSet#relational_table}
  */
  readonly relationalTable?: RelationalTableProperty;
  /**
  * s3_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#s3_source AwsQuicksightDataSet#s3_source}
  */
  readonly s3Source?: S3SourceProperty;
}
export class PhysicalTableMapPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PhysicalTableMapProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._physicalTableMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTableMapId = this._physicalTableMapId;
    }
    if (this._customSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSql = this._customSql?.internalValue;
    }
    if (this._relationalTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationalTable = this._relationalTable?.internalValue;
    }
    if (this._s3Source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Source = this._s3Source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhysicalTableMapProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._physicalTableMapId = undefined;
      this._customSql.internalValue = undefined;
      this._relationalTable.internalValue = undefined;
      this._s3Source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._physicalTableMapId = value.physicalTableMapId;
      this._customSql.internalValue = value.customSql;
      this._relationalTable.internalValue = value.relationalTable;
      this._s3Source.internalValue = value.s3Source;
    }
  }

  // physical_table_map_id - computed: false, optional: false, required: true
  private _physicalTableMapId?: string; 
  public get physicalTableMapId() {
    return this.getStringAttribute('physical_table_map_id');
  }
  public set physicalTableMapId(value: string) {
    this._physicalTableMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableMapIdInput() {
    return this._physicalTableMapId;
  }

  // custom_sql - computed: false, optional: true, required: false
  private _customSql = new CustomSqlPropertyOutputReference(this, "custom_sql");
  public get customSql() {
    return this._customSql;
  }
  public putCustomSql(value: CustomSqlProperty) {
    this._customSql.internalValue = value;
  }
  public resetCustomSql() {
    this._customSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSqlInput() {
    return this._customSql.internalValue;
  }

  // relational_table - computed: false, optional: true, required: false
  private _relationalTable = new RelationalTablePropertyOutputReference(this, "relational_table");
  public get relationalTable() {
    return this._relationalTable;
  }
  public putRelationalTable(value: RelationalTableProperty) {
    this._relationalTable.internalValue = value;
  }
  public resetRelationalTable() {
    this._relationalTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalTableInput() {
    return this._relationalTable.internalValue;
  }

  // s3_source - computed: false, optional: true, required: false
  private _s3Source = new S3SourcePropertyOutputReference(this, "s3_source");
  public get s3Source() {
    return this._s3Source;
  }
  public putS3Source(value: S3SourceProperty) {
    this._s3Source.internalValue = value;
  }
  public resetS3Source() {
    this._s3Source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SourceInput() {
    return this._s3Source.internalValue;
  }
}

export class PhysicalTableMapPropertyList extends cdktn.ComplexList {
  public internalValue? : PhysicalTableMapProperty[] | cdktn.IResolvable

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
  public get(index: number): PhysicalTableMapPropertyOutputReference {
    return new PhysicalTableMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LookbackWindowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#size AwsQuicksightDataSet#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#size_unit AwsQuicksightDataSet#size_unit}
  */
  readonly sizeUnit: string;
}
export class LookbackWindowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookbackWindowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeUnit = this._sizeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookbackWindowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._size = undefined;
      this._sizeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._size = value.size;
      this._sizeUnit = value.sizeUnit;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: false, optional: false, required: true
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }
}
export interface IncrementalRefreshProperty {
  /**
  * lookback_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#lookback_window AwsQuicksightDataSet#lookback_window}
  */
  readonly lookbackWindow: LookbackWindowProperty;
}
export class IncrementalRefreshPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncrementalRefreshProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookbackWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackWindow = this._lookbackWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncrementalRefreshProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookbackWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookbackWindow.internalValue = value.lookbackWindow;
    }
  }

  // lookback_window - computed: false, optional: false, required: true
  private _lookbackWindow = new LookbackWindowPropertyOutputReference(this, "lookback_window");
  public get lookbackWindow() {
    return this._lookbackWindow;
  }
  public putLookbackWindow(value: LookbackWindowProperty) {
    this._lookbackWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackWindowInput() {
    return this._lookbackWindow.internalValue;
  }
}
export interface RefreshConfigurationProperty {
  /**
  * incremental_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#incremental_refresh AwsQuicksightDataSet#incremental_refresh}
  */
  readonly incrementalRefresh: IncrementalRefreshProperty;
}
export class RefreshConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RefreshConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incrementalRefresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalRefresh = this._incrementalRefresh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefreshConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incrementalRefresh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incrementalRefresh.internalValue = value.incrementalRefresh;
    }
  }

  // incremental_refresh - computed: false, optional: false, required: true
  private _incrementalRefresh = new IncrementalRefreshPropertyOutputReference(this, "incremental_refresh");
  public get incrementalRefresh() {
    return this._incrementalRefresh;
  }
  public putIncrementalRefresh(value: IncrementalRefreshProperty) {
    this._incrementalRefresh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalRefreshInput() {
    return this._incrementalRefresh.internalValue;
  }
}
export interface RefreshPropertiesProperty {
  /**
  * refresh_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#refresh_configuration AwsQuicksightDataSet#refresh_configuration}
  */
  readonly refreshConfiguration: RefreshConfigurationProperty;
}
export class RefreshPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RefreshPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshConfiguration = this._refreshConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefreshPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshConfiguration.internalValue = value.refreshConfiguration;
    }
  }

  // refresh_configuration - computed: false, optional: false, required: true
  private _refreshConfiguration = new RefreshConfigurationPropertyOutputReference(this, "refresh_configuration");
  public get refreshConfiguration() {
    return this._refreshConfiguration;
  }
  public putRefreshConfiguration(value: RefreshConfigurationProperty) {
    this._refreshConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshConfigurationInput() {
    return this._refreshConfiguration.internalValue;
  }
}
export interface RowLevelPermissionDataSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#arn AwsQuicksightDataSet#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#format_version AwsQuicksightDataSet#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#namespace AwsQuicksightDataSet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#permission_policy AwsQuicksightDataSet#permission_policy}
  */
  readonly permissionPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#status AwsQuicksightDataSet#status}
  */
  readonly status?: string;
}
export class RowLevelPermissionDataSetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RowLevelPermissionDataSetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._permissionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicy = this._permissionPolicy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RowLevelPermissionDataSetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._formatVersion = undefined;
      this._namespace = undefined;
      this._permissionPolicy = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._formatVersion = value.formatVersion;
      this._namespace = value.namespace;
      this._permissionPolicy = value.permissionPolicy;
      this._status = value.status;
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

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: string; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // permission_policy - computed: false, optional: false, required: true
  private _permissionPolicy?: string; 
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
  public set permissionPolicy(value: string) {
    this._permissionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyInput() {
    return this._permissionPolicy;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface TagRulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#column_name AwsQuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#match_all_value AwsQuicksightDataSet#match_all_value}
  */
  readonly matchAllValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tag_key AwsQuicksightDataSet#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tag_multi_value_delimiter AwsQuicksightDataSet#tag_multi_value_delimiter}
  */
  readonly tagMultiValueDelimiter?: string;
}
export class TagRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._matchAllValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllValue = this._matchAllValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagMultiValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMultiValueDelimiter = this._tagMultiValueDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._matchAllValue = undefined;
      this._tagKey = undefined;
      this._tagMultiValueDelimiter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._matchAllValue = value.matchAllValue;
      this._tagKey = value.tagKey;
      this._tagMultiValueDelimiter = value.tagMultiValueDelimiter;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // match_all_value - computed: false, optional: true, required: false
  private _matchAllValue?: string; 
  public get matchAllValue() {
    return this.getStringAttribute('match_all_value');
  }
  public set matchAllValue(value: string) {
    this._matchAllValue = value;
  }
  public resetMatchAllValue() {
    this._matchAllValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllValueInput() {
    return this._matchAllValue;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_multi_value_delimiter - computed: false, optional: true, required: false
  private _tagMultiValueDelimiter?: string; 
  public get tagMultiValueDelimiter() {
    return this.getStringAttribute('tag_multi_value_delimiter');
  }
  public set tagMultiValueDelimiter(value: string) {
    this._tagMultiValueDelimiter = value;
  }
  public resetTagMultiValueDelimiter() {
    this._tagMultiValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMultiValueDelimiterInput() {
    return this._tagMultiValueDelimiter;
  }
}

export class TagRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : TagRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): TagRulesPropertyOutputReference {
    return new TagRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RowLevelPermissionTagConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#status AwsQuicksightDataSet#status}
  */
  readonly status?: string;
  /**
  * tag_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_set#tag_rules AwsQuicksightDataSet#tag_rules}
  */
  readonly tagRules: TagRulesProperty[] | cdktn.IResolvable;
}
export class RowLevelPermissionTagConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RowLevelPermissionTagConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagRules = this._tagRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RowLevelPermissionTagConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._tagRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._tagRules.internalValue = value.tagRules;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_rules - computed: false, optional: false, required: true
  private _tagRules = new TagRulesPropertyList(this, "tag_rules", false);
  public get tagRules() {
    return this._tagRules;
  }
  public putTagRules(value: TagRulesProperty[] | cdktn.IResolvable) {
    this._tagRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRulesInput() {
    return this._tagRules.internalValue;
  }
}
}
