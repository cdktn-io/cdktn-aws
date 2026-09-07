// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCatalogTableOptimizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#catalog_id AwsCatalogTableOptimizer#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#database_name AwsCatalogTableOptimizer#database_name}
  */
  readonly databaseName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#region AwsCatalogTableOptimizer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#table_name AwsCatalogTableOptimizer#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#type AwsCatalogTableOptimizer#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#configuration AwsCatalogTableOptimizer#configuration}
  */
  readonly configuration?: AwsCatalogTableOptimizer.ConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer}
*/
export class AwsCatalogTableOptimizer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog_table_optimizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCatalogTableOptimizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCatalogTableOptimizer to import
  * @param importFromId The id of the existing AwsCatalogTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCatalogTableOptimizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog_table_optimizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCatalogTableOptimizerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCatalogTableOptimizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table_optimizer',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._region = config.region;
    this._tableName = config.tableName;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsCatalogTableOptimizer.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsCatalogTableOptimizer.ConfigurationProperty[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      database_name: cdktn.stringToTerraform(this._databaseName),
      region: cdktn.stringToTerraform(this._region),
      table_name: cdktn.stringToTerraform(this._tableName),
      type: cdktn.stringToTerraform(this._type),
      configuration: cdktn.listMapper(awsCatalogTableOptimizerConfigurationPropertyToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
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
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.listMapperHcl(awsCatalogTableOptimizerConfigurationPropertyToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCatalogTableOptimizer.ConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCatalogTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationCompactionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_file_threshold: cdktn.numberToTerraform(struct!.deleteFileThreshold),
    min_input_files: cdktn.numberToTerraform(struct!.minInputFiles),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function awsCatalogTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationCompactionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_file_threshold: {
      value: cdktn.numberToHclTerraform(struct!.deleteFileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_input_files: {
      value: cdktn.numberToHclTerraform(struct!.minInputFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerCompactionConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.CompactionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: cdktn.listMapper(awsCatalogTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationPropertyToTerraform, true)(struct!.icebergConfiguration),
  }
}


export function awsCatalogTableOptimizerCompactionConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.CompactionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationPropertyToHclTerraform, true)(struct!.icebergConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationCompactionConfigurationIcebergConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    orphan_file_retention_period_in_days: cdktn.numberToTerraform(struct!.orphanFileRetentionPeriodInDays),
    run_rate_in_hours: cdktn.numberToTerraform(struct!.runRateInHours),
  }
}


export function awsCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_file_retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.orphanFileRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_rate_in_hours: {
      value: cdktn.numberToHclTerraform(struct!.runRateInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerOrphanFileDeletionConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.OrphanFileDeletionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: cdktn.listMapper(awsCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyToTerraform, true)(struct!.icebergConfiguration),
  }
}


export function awsCatalogTableOptimizerOrphanFileDeletionConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.OrphanFileDeletionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyToHclTerraform, true)(struct!.icebergConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationRetentionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clean_expired_files: cdktn.booleanToTerraform(struct!.cleanExpiredFiles),
    number_of_snapshots_to_retain: cdktn.numberToTerraform(struct!.numberOfSnapshotsToRetain),
    run_rate_in_hours: cdktn.numberToTerraform(struct!.runRateInHours),
    snapshot_retention_period_in_days: cdktn.numberToTerraform(struct!.snapshotRetentionPeriodInDays),
  }
}


export function awsCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationRetentionConfigurationIcebergConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clean_expired_files: {
      value: cdktn.booleanToHclTerraform(struct!.cleanExpiredFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_snapshots_to_retain: {
      value: cdktn.numberToHclTerraform(struct!.numberOfSnapshotsToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_rate_in_hours: {
      value: cdktn.numberToHclTerraform(struct!.runRateInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.snapshotRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerRetentionConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.RetentionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: cdktn.listMapper(awsCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationPropertyToTerraform, true)(struct!.icebergConfiguration),
  }
}


export function awsCatalogTableOptimizerRetentionConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.RetentionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationPropertyToHclTerraform, true)(struct!.icebergConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationRetentionConfigurationIcebergConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCatalogTableOptimizerConfigurationPropertyToTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    compaction_configuration: cdktn.listMapper(awsCatalogTableOptimizerCompactionConfigurationPropertyToTerraform, true)(struct!.compactionConfiguration),
    orphan_file_deletion_configuration: cdktn.listMapper(awsCatalogTableOptimizerOrphanFileDeletionConfigurationPropertyToTerraform, true)(struct!.orphanFileDeletionConfiguration),
    retention_configuration: cdktn.listMapper(awsCatalogTableOptimizerRetentionConfigurationPropertyToTerraform, true)(struct!.retentionConfiguration),
  }
}


export function awsCatalogTableOptimizerConfigurationPropertyToHclTerraform(struct?: AwsCatalogTableOptimizer.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compaction_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerCompactionConfigurationPropertyToHclTerraform, true)(struct!.compactionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CompactionConfigurationPropertyList",
    },
    orphan_file_deletion_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerOrphanFileDeletionConfigurationPropertyToHclTerraform, true)(struct!.orphanFileDeletionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OrphanFileDeletionConfigurationPropertyList",
    },
    retention_configuration: {
      value: cdktn.listMapperHcl(awsCatalogTableOptimizerRetentionConfigurationPropertyToHclTerraform, true)(struct!.retentionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RetentionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCatalogTableOptimizer {
export interface ConfigurationCompactionConfigurationIcebergConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#delete_file_threshold AwsCatalogTableOptimizer#delete_file_threshold}
  */
  readonly deleteFileThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#min_input_files AwsCatalogTableOptimizer#min_input_files}
  */
  readonly minInputFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#strategy AwsCatalogTableOptimizer#strategy}
  */
  readonly strategy?: string;
}
export class ConfigurationCompactionConfigurationIcebergConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationCompactionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteFileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteFileThreshold = this._deleteFileThreshold;
    }
    if (this._minInputFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInputFiles = this._minInputFiles;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationCompactionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteFileThreshold = undefined;
      this._minInputFiles = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteFileThreshold = value.deleteFileThreshold;
      this._minInputFiles = value.minInputFiles;
      this._strategy = value.strategy;
    }
  }

  // delete_file_threshold - computed: false, optional: true, required: false
  private _deleteFileThreshold?: number; 
  public get deleteFileThreshold() {
    return this.getNumberAttribute('delete_file_threshold');
  }
  public set deleteFileThreshold(value: number) {
    this._deleteFileThreshold = value;
  }
  public resetDeleteFileThreshold() {
    this._deleteFileThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFileThresholdInput() {
    return this._deleteFileThreshold;
  }

  // min_input_files - computed: false, optional: true, required: false
  private _minInputFiles?: number; 
  public get minInputFiles() {
    return this.getNumberAttribute('min_input_files');
  }
  public set minInputFiles(value: number) {
    this._minInputFiles = value;
  }
  public resetMinInputFiles() {
    this._minInputFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInputFilesInput() {
    return this._minInputFiles;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class ConfigurationCompactionConfigurationIcebergConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationCompactionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationCompactionConfigurationIcebergConfigurationPropertyOutputReference {
    return new ConfigurationCompactionConfigurationIcebergConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CompactionConfigurationProperty {
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration AwsCatalogTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: ConfigurationCompactionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable;
}
export class CompactionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CompactionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompactionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new ConfigurationCompactionConfigurationIcebergConfigurationPropertyList(this, "iceberg_configuration", false);
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: ConfigurationCompactionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}

export class CompactionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CompactionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CompactionConfigurationPropertyOutputReference {
    return new CompactionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#location AwsCatalogTableOptimizer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#orphan_file_retention_period_in_days AwsCatalogTableOptimizer#orphan_file_retention_period_in_days}
  */
  readonly orphanFileRetentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#run_rate_in_hours AwsCatalogTableOptimizer#run_rate_in_hours}
  */
  readonly runRateInHours?: number;
}
export class ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._orphanFileRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileRetentionPeriodInDays = this._orphanFileRetentionPeriodInDays;
    }
    if (this._runRateInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.runRateInHours = this._runRateInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._orphanFileRetentionPeriodInDays = undefined;
      this._runRateInHours = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._orphanFileRetentionPeriodInDays = value.orphanFileRetentionPeriodInDays;
      this._runRateInHours = value.runRateInHours;
    }
  }

  // location - computed: false, optional: true, required: false
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

  // orphan_file_retention_period_in_days - computed: false, optional: true, required: false
  private _orphanFileRetentionPeriodInDays?: number; 
  public get orphanFileRetentionPeriodInDays() {
    return this.getNumberAttribute('orphan_file_retention_period_in_days');
  }
  public set orphanFileRetentionPeriodInDays(value: number) {
    this._orphanFileRetentionPeriodInDays = value;
  }
  public resetOrphanFileRetentionPeriodInDays() {
    this._orphanFileRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileRetentionPeriodInDaysInput() {
    return this._orphanFileRetentionPeriodInDays;
  }

  // run_rate_in_hours - computed: true, optional: true, required: false
  private _runRateInHours?: number; 
  public get runRateInHours() {
    return this.getNumberAttribute('run_rate_in_hours');
  }
  public set runRateInHours(value: number) {
    this._runRateInHours = value;
  }
  public resetRunRateInHours() {
    this._runRateInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runRateInHoursInput() {
    return this._runRateInHours;
  }
}

export class ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyOutputReference {
    return new ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrphanFileDeletionConfigurationProperty {
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration AwsCatalogTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable;
}
export class OrphanFileDeletionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrphanFileDeletionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrphanFileDeletionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationPropertyList(this, "iceberg_configuration", false);
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: ConfigurationOrphanFileDeletionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}

export class OrphanFileDeletionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : OrphanFileDeletionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): OrphanFileDeletionConfigurationPropertyOutputReference {
    return new OrphanFileDeletionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationRetentionConfigurationIcebergConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#clean_expired_files AwsCatalogTableOptimizer#clean_expired_files}
  */
  readonly cleanExpiredFiles?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#number_of_snapshots_to_retain AwsCatalogTableOptimizer#number_of_snapshots_to_retain}
  */
  readonly numberOfSnapshotsToRetain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#run_rate_in_hours AwsCatalogTableOptimizer#run_rate_in_hours}
  */
  readonly runRateInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#snapshot_retention_period_in_days AwsCatalogTableOptimizer#snapshot_retention_period_in_days}
  */
  readonly snapshotRetentionPeriodInDays?: number;
}
export class ConfigurationRetentionConfigurationIcebergConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationRetentionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanExpiredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanExpiredFiles = this._cleanExpiredFiles;
    }
    if (this._numberOfSnapshotsToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfSnapshotsToRetain = this._numberOfSnapshotsToRetain;
    }
    if (this._runRateInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.runRateInHours = this._runRateInHours;
    }
    if (this._snapshotRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionPeriodInDays = this._snapshotRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationRetentionConfigurationIcebergConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = undefined;
      this._numberOfSnapshotsToRetain = undefined;
      this._runRateInHours = undefined;
      this._snapshotRetentionPeriodInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = value.cleanExpiredFiles;
      this._numberOfSnapshotsToRetain = value.numberOfSnapshotsToRetain;
      this._runRateInHours = value.runRateInHours;
      this._snapshotRetentionPeriodInDays = value.snapshotRetentionPeriodInDays;
    }
  }

  // clean_expired_files - computed: false, optional: true, required: false
  private _cleanExpiredFiles?: boolean | cdktn.IResolvable; 
  public get cleanExpiredFiles() {
    return this.getBooleanAttribute('clean_expired_files');
  }
  public set cleanExpiredFiles(value: boolean | cdktn.IResolvable) {
    this._cleanExpiredFiles = value;
  }
  public resetCleanExpiredFiles() {
    this._cleanExpiredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanExpiredFilesInput() {
    return this._cleanExpiredFiles;
  }

  // number_of_snapshots_to_retain - computed: false, optional: true, required: false
  private _numberOfSnapshotsToRetain?: number; 
  public get numberOfSnapshotsToRetain() {
    return this.getNumberAttribute('number_of_snapshots_to_retain');
  }
  public set numberOfSnapshotsToRetain(value: number) {
    this._numberOfSnapshotsToRetain = value;
  }
  public resetNumberOfSnapshotsToRetain() {
    this._numberOfSnapshotsToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSnapshotsToRetainInput() {
    return this._numberOfSnapshotsToRetain;
  }

  // run_rate_in_hours - computed: true, optional: true, required: false
  private _runRateInHours?: number; 
  public get runRateInHours() {
    return this.getNumberAttribute('run_rate_in_hours');
  }
  public set runRateInHours(value: number) {
    this._runRateInHours = value;
  }
  public resetRunRateInHours() {
    this._runRateInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runRateInHoursInput() {
    return this._runRateInHours;
  }

  // snapshot_retention_period_in_days - computed: false, optional: true, required: false
  private _snapshotRetentionPeriodInDays?: number; 
  public get snapshotRetentionPeriodInDays() {
    return this.getNumberAttribute('snapshot_retention_period_in_days');
  }
  public set snapshotRetentionPeriodInDays(value: number) {
    this._snapshotRetentionPeriodInDays = value;
  }
  public resetSnapshotRetentionPeriodInDays() {
    this._snapshotRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionPeriodInDaysInput() {
    return this._snapshotRetentionPeriodInDays;
  }
}

export class ConfigurationRetentionConfigurationIcebergConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationRetentionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationRetentionConfigurationIcebergConfigurationPropertyOutputReference {
    return new ConfigurationRetentionConfigurationIcebergConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetentionConfigurationProperty {
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration AwsCatalogTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: ConfigurationRetentionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable;
}
export class RetentionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetentionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new ConfigurationRetentionConfigurationIcebergConfigurationPropertyList(this, "iceberg_configuration", false);
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: ConfigurationRetentionConfigurationIcebergConfigurationProperty[] | cdktn.IResolvable) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}

export class RetentionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RetentionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RetentionConfigurationPropertyOutputReference {
    return new RetentionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#enabled AwsCatalogTableOptimizer#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#role_arn AwsCatalogTableOptimizer#role_arn}
  */
  readonly roleArn: string;
  /**
  * compaction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#compaction_configuration AwsCatalogTableOptimizer#compaction_configuration}
  */
  readonly compactionConfiguration?: CompactionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * orphan_file_deletion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#orphan_file_deletion_configuration AwsCatalogTableOptimizer#orphan_file_deletion_configuration}
  */
  readonly orphanFileDeletionConfiguration?: OrphanFileDeletionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * retention_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_catalog_table_optimizer#retention_configuration AwsCatalogTableOptimizer#retention_configuration}
  */
  readonly retentionConfiguration?: RetentionConfigurationProperty[] | cdktn.IResolvable;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._compactionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactionConfiguration = this._compactionConfiguration?.internalValue;
    }
    if (this._orphanFileDeletionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileDeletionConfiguration = this._orphanFileDeletionConfiguration?.internalValue;
    }
    if (this._retentionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionConfiguration = this._retentionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._compactionConfiguration.internalValue = undefined;
      this._orphanFileDeletionConfiguration.internalValue = undefined;
      this._retentionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._compactionConfiguration.internalValue = value.compactionConfiguration;
      this._orphanFileDeletionConfiguration.internalValue = value.orphanFileDeletionConfiguration;
      this._retentionConfiguration.internalValue = value.retentionConfiguration;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // compaction_configuration - computed: false, optional: true, required: false
  private _compactionConfiguration = new CompactionConfigurationPropertyList(this, "compaction_configuration", false);
  public get compactionConfiguration() {
    return this._compactionConfiguration;
  }
  public putCompactionConfiguration(value: CompactionConfigurationProperty[] | cdktn.IResolvable) {
    this._compactionConfiguration.internalValue = value;
  }
  public resetCompactionConfiguration() {
    this._compactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionConfigurationInput() {
    return this._compactionConfiguration.internalValue;
  }

  // orphan_file_deletion_configuration - computed: false, optional: true, required: false
  private _orphanFileDeletionConfiguration = new OrphanFileDeletionConfigurationPropertyList(this, "orphan_file_deletion_configuration", false);
  public get orphanFileDeletionConfiguration() {
    return this._orphanFileDeletionConfiguration;
  }
  public putOrphanFileDeletionConfiguration(value: OrphanFileDeletionConfigurationProperty[] | cdktn.IResolvable) {
    this._orphanFileDeletionConfiguration.internalValue = value;
  }
  public resetOrphanFileDeletionConfiguration() {
    this._orphanFileDeletionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileDeletionConfigurationInput() {
    return this._orphanFileDeletionConfiguration.internalValue;
  }

  // retention_configuration - computed: false, optional: true, required: false
  private _retentionConfiguration = new RetentionConfigurationPropertyList(this, "retention_configuration", false);
  public get retentionConfiguration() {
    return this._retentionConfiguration;
  }
  public putRetentionConfiguration(value: RetentionConfigurationProperty[] | cdktn.IResolvable) {
    this._retentionConfiguration.internalValue = value;
  }
  public resetRetentionConfiguration() {
    this._retentionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigurationInput() {
    return this._retentionConfiguration.internalValue;
  }
}

export class ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationPropertyOutputReference {
    return new ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
