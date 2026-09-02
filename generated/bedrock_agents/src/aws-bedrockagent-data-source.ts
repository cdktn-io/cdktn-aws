// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#data_deletion_policy TfDataSource#data_deletion_policy}
  */
  readonly dataDeletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#description TfDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#knowledge_base_id TfDataSource#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#name TfDataSource#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#region TfDataSource#region}
  */
  readonly region?: string;
  /**
  * data_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#data_source_configuration TfDataSource#data_source_configuration}
  */
  readonly dataSourceConfiguration?: TfDataSource.DataSourceConfigurationProperty[] | cdktn.IResolvable;
  /**
  * server_side_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#server_side_encryption_configuration TfDataSource#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: TfDataSource.ServerSideEncryptionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#timeouts TfDataSource#timeouts}
  */
  readonly timeouts?: TfDataSource.TimeoutsProperty;
  /**
  * vector_ingestion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#vector_ingestion_configuration TfDataSource#vector_ingestion_configuration}
  */
  readonly vectorIngestionConfiguration?: TfDataSource.VectorIngestionConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source}
*/
export class TfDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDataSource to import
  * @param importFromId The id of the existing TfDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: TfDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_data_source',
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
    this._dataDeletionPolicy = config.dataDeletionPolicy;
    this._description = config.description;
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._name = config.name;
    this._region = config.region;
    this._dataSourceConfiguration.internalValue = config.dataSourceConfiguration;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_deletion_policy - computed: true, optional: true, required: false
  private _dataDeletionPolicy?: string; 
  public get dataDeletionPolicy() {
    return this.getStringAttribute('data_deletion_policy');
  }
  public set dataDeletionPolicy(value: string) {
    this._dataDeletionPolicy = value;
  }
  public resetDataDeletionPolicy() {
    this._dataDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDeletionPolicyInput() {
    return this._dataDeletionPolicy;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
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

  // data_source_configuration - computed: false, optional: true, required: false
  private _dataSourceConfiguration = new TfDataSource.DataSourceConfigurationPropertyList(this, "data_source_configuration", false);
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }
  public putDataSourceConfiguration(value: TfDataSource.DataSourceConfigurationProperty[] | cdktn.IResolvable) {
    this._dataSourceConfiguration.internalValue = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new TfDataSource.ServerSideEncryptionConfigurationPropertyList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: TfDataSource.ServerSideEncryptionConfigurationProperty[] | cdktn.IResolvable) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfDataSource.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfDataSource.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_ingestion_configuration - computed: false, optional: true, required: false
  private _vectorIngestionConfiguration = new TfDataSource.VectorIngestionConfigurationPropertyList(this, "vector_ingestion_configuration", false);
  public get vectorIngestionConfiguration() {
    return this._vectorIngestionConfiguration;
  }
  public putVectorIngestionConfiguration(value: TfDataSource.VectorIngestionConfigurationProperty[] | cdktn.IResolvable) {
    this._vectorIngestionConfiguration.internalValue = value;
  }
  public resetVectorIngestionConfiguration() {
    this._vectorIngestionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIngestionConfigurationInput() {
    return this._vectorIngestionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_deletion_policy: cdktn.stringToTerraform(this._dataDeletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      data_source_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationPropertyToTerraform, true)(this._dataSourceConfiguration.internalValue),
      server_side_encryption_configuration: cdktn.listMapper(tfDataSourceServerSideEncryptionConfigurationPropertyToTerraform, true)(this._serverSideEncryptionConfiguration.internalValue),
      timeouts: tfDataSourceTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vector_ingestion_configuration: cdktn.listMapper(tfDataSourceVectorIngestionConfigurationPropertyToTerraform, true)(this._vectorIngestionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_deletion_policy: {
        value: cdktn.stringToHclTerraform(this._dataDeletionPolicy),
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
      knowledge_base_id: {
        value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
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
      data_source_configuration: {
        value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationPropertyToHclTerraform, true)(this._dataSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataSource.DataSourceConfigurationPropertyList",
      },
      server_side_encryption_configuration: {
        value: cdktn.listMapperHcl(tfDataSourceServerSideEncryptionConfigurationPropertyToHclTerraform, true)(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataSource.ServerSideEncryptionConfigurationPropertyList",
      },
      timeouts: {
        value: tfDataSourceTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfDataSource.TimeoutsProperty",
      },
      vector_ingestion_configuration: {
        value: cdktn.listMapperHcl(tfDataSourceVectorIngestionConfigurationPropertyToHclTerraform, true)(this._vectorIngestionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataSource.VectorIngestionConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform, true)(struct!.filters),
  }
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    pattern_object_filter: cdktn.listMapper(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
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
    pattern_object_filter: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform, true)(struct!.filterConfiguration),
  }
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    host_type: cdktn.stringToTerraform(struct!.hostType),
    host_url: cdktn.stringToTerraform(struct!.hostUrl),
  }
}


export function tfDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktn.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktn.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceConfluenceConfigurationPropertyToTerraform(struct?: TfDataSource.ConfluenceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function tfDataSourceConfluenceConfigurationPropertyToHclTerraform(struct?: TfDataSource.ConfluenceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyList",
    },
    source_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDeletionProtectionConfigurationPropertyToTerraform(struct?: TfDataSource.DeletionProtectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deletion_protection_status: cdktn.stringToTerraform(struct!.deletionProtectionStatus),
    deletion_protection_threshold: cdktn.numberToTerraform(struct!.deletionProtectionThreshold),
  }
}


export function tfDataSourceDeletionProtectionConfigurationPropertyToHclTerraform(struct?: TfDataSource.DeletionProtectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deletion_protection_status: {
      value: cdktn.stringToHclTerraform(struct!.deletionProtectionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection_threshold: {
      value: cdktn.numberToHclTerraform(struct!.deletionProtectionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceAudioExtractionConfigurationPropertyToTerraform(struct?: TfDataSource.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_status: cdktn.stringToTerraform(struct!.audioExtractionStatus),
  }
}


export function tfDataSourceAudioExtractionConfigurationPropertyToHclTerraform(struct?: TfDataSource.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.audioExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceImageExtractionConfigurationPropertyToTerraform(struct?: TfDataSource.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_extraction_status: cdktn.stringToTerraform(struct!.imageExtractionStatus),
  }
}


export function tfDataSourceImageExtractionConfigurationPropertyToHclTerraform(struct?: TfDataSource.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.imageExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceVideoExtractionConfigurationPropertyToTerraform(struct?: TfDataSource.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    video_extraction_status: cdktn.stringToTerraform(struct!.videoExtractionStatus),
  }
}


export function tfDataSourceVideoExtractionConfigurationPropertyToHclTerraform(struct?: TfDataSource.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    video_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.videoExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceMediaExtractionConfigurationPropertyToTerraform(struct?: TfDataSource.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_configuration: cdktn.listMapper(tfDataSourceAudioExtractionConfigurationPropertyToTerraform, true)(struct!.audioExtractionConfiguration),
    image_extraction_configuration: cdktn.listMapper(tfDataSourceImageExtractionConfigurationPropertyToTerraform, true)(struct!.imageExtractionConfiguration),
    video_extraction_configuration: cdktn.listMapper(tfDataSourceVideoExtractionConfigurationPropertyToTerraform, true)(struct!.videoExtractionConfiguration),
  }
}


export function tfDataSourceMediaExtractionConfigurationPropertyToHclTerraform(struct?: TfDataSource.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceAudioExtractionConfigurationPropertyToHclTerraform, true)(struct!.audioExtractionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AudioExtractionConfigurationPropertyList",
    },
    image_extraction_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceImageExtractionConfigurationPropertyToHclTerraform, true)(struct!.imageExtractionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ImageExtractionConfigurationPropertyList",
    },
    video_extraction_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceVideoExtractionConfigurationPropertyToHclTerraform, true)(struct!.videoExtractionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VideoExtractionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToTerraform(struct?: TfDataSource.ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_parameters: cdktn.stringToTerraform(struct!.connectorParameters),
    deletion_protection_configuration: cdktn.listMapper(tfDataSourceDeletionProtectionConfigurationPropertyToTerraform, true)(struct!.deletionProtectionConfiguration),
    media_extraction_configuration: cdktn.listMapper(tfDataSourceMediaExtractionConfigurationPropertyToTerraform, true)(struct!.mediaExtractionConfiguration),
  }
}


export function tfDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToHclTerraform(struct?: TfDataSource.ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_parameters: {
      value: cdktn.stringToHclTerraform(struct!.connectorParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDeletionProtectionConfigurationPropertyToHclTerraform, true)(struct!.deletionProtectionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DeletionProtectionConfigurationPropertyList",
    },
    media_extraction_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceMediaExtractionConfigurationPropertyToHclTerraform, true)(struct!.mediaExtractionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MediaExtractionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceS3ConfigurationPropertyToTerraform(struct?: TfDataSource.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    inclusion_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPrefixes),
  }
}


export function tfDataSourceS3ConfigurationPropertyToHclTerraform(struct?: TfDataSource.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusion_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform, true)(struct!.filters),
  }
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    pattern_object_filter: cdktn.listMapper(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
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
    pattern_object_filter: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform, true)(struct!.filterConfiguration),
  }
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    host_url: cdktn.stringToTerraform(struct!.hostUrl),
  }
}


export function tfDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktn.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSalesforceConfigurationPropertyToTerraform(struct?: TfDataSource.SalesforceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function tfDataSourceSalesforceConfigurationPropertyToHclTerraform(struct?: TfDataSource.SalesforceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyList",
    },
    source_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform, true)(struct!.filters),
  }
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    pattern_object_filter: cdktn.listMapper(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
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
    pattern_object_filter: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform, true)(struct!.filterConfiguration),
  }
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    domain: cdktn.stringToTerraform(struct!.domain),
    host_type: cdktn.stringToTerraform(struct!.hostType),
    site_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.siteUrls),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function tfDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktn.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.siteUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSharePointConfigurationPropertyToTerraform(struct?: TfDataSource.SharePointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function tfDataSourceSharePointConfigurationPropertyToHclTerraform(struct?: TfDataSource.SharePointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyList",
    },
    source_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCrawlerLimitsPropertyToTerraform(struct?: TfDataSource.CrawlerLimitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pages: cdktn.numberToTerraform(struct!.maxPages),
    rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
  }
}


export function tfDataSourceCrawlerLimitsPropertyToHclTerraform(struct?: TfDataSource.CrawlerLimitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pages: {
      value: cdktn.numberToHclTerraform(struct!.maxPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktn.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    scope: cdktn.stringToTerraform(struct!.scope),
    user_agent: cdktn.stringToTerraform(struct!.userAgent),
    crawler_limits: cdktn.listMapper(tfDataSourceCrawlerLimitsPropertyToTerraform, true)(struct!.crawlerLimits),
  }
}


export function tfDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent: {
      value: cdktn.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crawler_limits: {
      value: cdktn.listMapperHcl(tfDataSourceCrawlerLimitsPropertyToHclTerraform, true)(struct!.crawlerLimits),
      isBlock: true,
      type: "list",
      storageClassType: "CrawlerLimitsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSeedUrlsPropertyToTerraform(struct?: TfDataSource.SeedUrlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function tfDataSourceSeedUrlsPropertyToHclTerraform(struct?: TfDataSource.SeedUrlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceUrlConfigurationPropertyToTerraform(struct?: TfDataSource.UrlConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_urls: cdktn.listMapper(tfDataSourceSeedUrlsPropertyToTerraform, true)(struct!.seedUrls),
  }
}


export function tfDataSourceUrlConfigurationPropertyToHclTerraform(struct?: TfDataSource.UrlConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_urls: {
      value: cdktn.listMapperHcl(tfDataSourceSeedUrlsPropertyToHclTerraform, true)(struct!.seedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "SeedUrlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationWebConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url_configuration: cdktn.listMapper(tfDataSourceUrlConfigurationPropertyToTerraform, true)(struct!.urlConfiguration),
  }
}


export function tfDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationWebConfigurationSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceUrlConfigurationPropertyToHclTerraform, true)(struct!.urlConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "UrlConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceWebConfigurationPropertyToTerraform(struct?: TfDataSource.WebConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktn.listMapper(tfDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationPropertyToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function tfDataSourceWebConfigurationPropertyToHclTerraform(struct?: TfDataSource.WebConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyList",
    },
    source_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationPropertyToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourceConfigurationWebConfigurationSourceConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDataSourceConfigurationPropertyToTerraform(struct?: TfDataSource.DataSourceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    confluence_configuration: cdktn.listMapper(tfDataSourceConfluenceConfigurationPropertyToTerraform, true)(struct!.confluenceConfiguration),
    managed_knowledge_base_connector_configuration: cdktn.listMapper(tfDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToTerraform, true)(struct!.managedKnowledgeBaseConnectorConfiguration),
    s3_configuration: cdktn.listMapper(tfDataSourceS3ConfigurationPropertyToTerraform, true)(struct!.s3Configuration),
    salesforce_configuration: cdktn.listMapper(tfDataSourceSalesforceConfigurationPropertyToTerraform, true)(struct!.salesforceConfiguration),
    share_point_configuration: cdktn.listMapper(tfDataSourceSharePointConfigurationPropertyToTerraform, true)(struct!.sharePointConfiguration),
    web_configuration: cdktn.listMapper(tfDataSourceWebConfigurationPropertyToTerraform, true)(struct!.webConfiguration),
  }
}


export function tfDataSourceDataSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.DataSourceConfigurationProperty | cdktn.IResolvable): any {
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
    confluence_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceConfluenceConfigurationPropertyToHclTerraform, true)(struct!.confluenceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfluenceConfigurationPropertyList",
    },
    managed_knowledge_base_connector_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToHclTerraform, true)(struct!.managedKnowledgeBaseConnectorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedKnowledgeBaseConnectorConfigurationPropertyList",
    },
    s3_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceS3ConfigurationPropertyToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
    salesforce_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceSalesforceConfigurationPropertyToHclTerraform, true)(struct!.salesforceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SalesforceConfigurationPropertyList",
    },
    share_point_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceSharePointConfigurationPropertyToHclTerraform, true)(struct!.sharePointConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SharePointConfigurationPropertyList",
    },
    web_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceWebConfigurationPropertyToHclTerraform, true)(struct!.webConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WebConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceServerSideEncryptionConfigurationPropertyToTerraform(struct?: TfDataSource.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfDataSourceServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: TfDataSource.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTimeoutsPropertyToTerraform(struct?: TfDataSource.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfDataSourceTimeoutsPropertyToHclTerraform(struct?: TfDataSource.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfDataSourceFixedSizeChunkingConfigurationPropertyToTerraform(struct?: TfDataSource.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    overlap_percentage: cdktn.numberToTerraform(struct!.overlapPercentage),
  }
}


export function tfDataSourceFixedSizeChunkingConfigurationPropertyToHclTerraform(struct?: TfDataSource.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overlap_percentage: {
      value: cdktn.numberToHclTerraform(struct!.overlapPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceLevelConfigurationPropertyToTerraform(struct?: TfDataSource.LevelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
  }
}


export function tfDataSourceLevelConfigurationPropertyToHclTerraform(struct?: TfDataSource.LevelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceHierarchicalChunkingConfigurationPropertyToTerraform(struct?: TfDataSource.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overlap_tokens: cdktn.numberToTerraform(struct!.overlapTokens),
    level_configuration: cdktn.listMapper(tfDataSourceLevelConfigurationPropertyToTerraform, true)(struct!.levelConfiguration),
  }
}


export function tfDataSourceHierarchicalChunkingConfigurationPropertyToHclTerraform(struct?: TfDataSource.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overlap_tokens: {
      value: cdktn.numberToHclTerraform(struct!.overlapTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceLevelConfigurationPropertyToHclTerraform, true)(struct!.levelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LevelConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSemanticChunkingConfigurationPropertyToTerraform(struct?: TfDataSource.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    breakpoint_percentile_threshold: cdktn.numberToTerraform(struct!.breakpointPercentileThreshold),
    buffer_size: cdktn.numberToTerraform(struct!.bufferSize),
    max_token: cdktn.numberToTerraform(struct!.maxToken),
  }
}


export function tfDataSourceSemanticChunkingConfigurationPropertyToHclTerraform(struct?: TfDataSource.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    breakpoint_percentile_threshold: {
      value: cdktn.numberToHclTerraform(struct!.breakpointPercentileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_token: {
      value: cdktn.numberToHclTerraform(struct!.maxToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceChunkingConfigurationPropertyToTerraform(struct?: TfDataSource.ChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_strategy: cdktn.stringToTerraform(struct!.chunkingStrategy),
    fixed_size_chunking_configuration: cdktn.listMapper(tfDataSourceFixedSizeChunkingConfigurationPropertyToTerraform, true)(struct!.fixedSizeChunkingConfiguration),
    hierarchical_chunking_configuration: cdktn.listMapper(tfDataSourceHierarchicalChunkingConfigurationPropertyToTerraform, true)(struct!.hierarchicalChunkingConfiguration),
    semantic_chunking_configuration: cdktn.listMapper(tfDataSourceSemanticChunkingConfigurationPropertyToTerraform, true)(struct!.semanticChunkingConfiguration),
  }
}


export function tfDataSourceChunkingConfigurationPropertyToHclTerraform(struct?: TfDataSource.ChunkingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunking_strategy: {
      value: cdktn.stringToHclTerraform(struct!.chunkingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_size_chunking_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceFixedSizeChunkingConfigurationPropertyToHclTerraform, true)(struct!.fixedSizeChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FixedSizeChunkingConfigurationPropertyList",
    },
    hierarchical_chunking_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceHierarchicalChunkingConfigurationPropertyToHclTerraform, true)(struct!.hierarchicalChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchicalChunkingConfigurationPropertyList",
    },
    semantic_chunking_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceSemanticChunkingConfigurationPropertyToHclTerraform, true)(struct!.semanticChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticChunkingConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceS3LocationPropertyToTerraform(struct?: TfDataSource.S3LocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfDataSourceS3LocationPropertyToHclTerraform(struct?: TfDataSource.S3LocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceIntermediateStoragePropertyToTerraform(struct?: TfDataSource.IntermediateStorageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_location: cdktn.listMapper(tfDataSourceS3LocationPropertyToTerraform, true)(struct!.s3Location),
  }
}


export function tfDataSourceIntermediateStoragePropertyToHclTerraform(struct?: TfDataSource.IntermediateStorageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_location: {
      value: cdktn.listMapperHcl(tfDataSourceS3LocationPropertyToHclTerraform, true)(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "S3LocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTransformationLambdaConfigurationPropertyToTerraform(struct?: TfDataSource.TransformationLambdaConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function tfDataSourceTransformationLambdaConfigurationPropertyToHclTerraform(struct?: TfDataSource.TransformationLambdaConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTransformationFunctionPropertyToTerraform(struct?: TfDataSource.TransformationFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transformation_lambda_configuration: cdktn.listMapper(tfDataSourceTransformationLambdaConfigurationPropertyToTerraform, true)(struct!.transformationLambdaConfiguration),
  }
}


export function tfDataSourceTransformationFunctionPropertyToHclTerraform(struct?: TfDataSource.TransformationFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transformation_lambda_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceTransformationLambdaConfigurationPropertyToHclTerraform, true)(struct!.transformationLambdaConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TransformationLambdaConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTransformationPropertyToTerraform(struct?: TfDataSource.TransformationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step_to_apply: cdktn.stringToTerraform(struct!.stepToApply),
    transformation_function: cdktn.listMapper(tfDataSourceTransformationFunctionPropertyToTerraform, true)(struct!.transformationFunction),
  }
}


export function tfDataSourceTransformationPropertyToHclTerraform(struct?: TfDataSource.TransformationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step_to_apply: {
      value: cdktn.stringToHclTerraform(struct!.stepToApply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_function: {
      value: cdktn.listMapperHcl(tfDataSourceTransformationFunctionPropertyToHclTerraform, true)(struct!.transformationFunction),
      isBlock: true,
      type: "list",
      storageClassType: "TransformationFunctionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomTransformationConfigurationPropertyToTerraform(struct?: TfDataSource.CustomTransformationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intermediate_storage: cdktn.listMapper(tfDataSourceIntermediateStoragePropertyToTerraform, true)(struct!.intermediateStorage),
    transformation: cdktn.listMapper(tfDataSourceTransformationPropertyToTerraform, true)(struct!.transformation),
  }
}


export function tfDataSourceCustomTransformationConfigurationPropertyToHclTerraform(struct?: TfDataSource.CustomTransformationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intermediate_storage: {
      value: cdktn.listMapperHcl(tfDataSourceIntermediateStoragePropertyToHclTerraform, true)(struct!.intermediateStorage),
      isBlock: true,
      type: "list",
      storageClassType: "IntermediateStoragePropertyList",
    },
    transformation: {
      value: cdktn.listMapperHcl(tfDataSourceTransformationPropertyToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "TransformationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceBedrockDataAutomationConfigurationPropertyToTerraform(struct?: TfDataSource.BedrockDataAutomationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
  }
}


export function tfDataSourceBedrockDataAutomationConfigurationPropertyToHclTerraform(struct?: TfDataSource.BedrockDataAutomationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parsing_modality: {
      value: cdktn.stringToHclTerraform(struct!.parsingModality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceParsingPromptPropertyToTerraform(struct?: TfDataSource.ParsingPromptProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_prompt_string: cdktn.stringToTerraform(struct!.parsingPromptString),
  }
}


export function tfDataSourceParsingPromptPropertyToHclTerraform(struct?: TfDataSource.ParsingPromptProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parsing_prompt_string: {
      value: cdktn.stringToHclTerraform(struct!.parsingPromptString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceBedrockFoundationModelConfigurationPropertyToTerraform(struct?: TfDataSource.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
    parsing_prompt: cdktn.listMapper(tfDataSourceParsingPromptPropertyToTerraform, true)(struct!.parsingPrompt),
  }
}


export function tfDataSourceBedrockFoundationModelConfigurationPropertyToHclTerraform(struct?: TfDataSource.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsing_modality: {
      value: cdktn.stringToHclTerraform(struct!.parsingModality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsing_prompt: {
      value: cdktn.listMapperHcl(tfDataSourceParsingPromptPropertyToHclTerraform, true)(struct!.parsingPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "ParsingPromptPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceParsingConfigurationPropertyToTerraform(struct?: TfDataSource.ParsingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_strategy: cdktn.stringToTerraform(struct!.parsingStrategy),
    bedrock_data_automation_configuration: cdktn.listMapper(tfDataSourceBedrockDataAutomationConfigurationPropertyToTerraform, true)(struct!.bedrockDataAutomationConfiguration),
    bedrock_foundation_model_configuration: cdktn.listMapper(tfDataSourceBedrockFoundationModelConfigurationPropertyToTerraform, true)(struct!.bedrockFoundationModelConfiguration),
  }
}


export function tfDataSourceParsingConfigurationPropertyToHclTerraform(struct?: TfDataSource.ParsingConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parsing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.parsingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock_data_automation_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceBedrockDataAutomationConfigurationPropertyToHclTerraform, true)(struct!.bedrockDataAutomationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataAutomationConfigurationPropertyList",
    },
    bedrock_foundation_model_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceBedrockFoundationModelConfigurationPropertyToHclTerraform, true)(struct!.bedrockFoundationModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockFoundationModelConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceVectorIngestionConfigurationPropertyToTerraform(struct?: TfDataSource.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_configuration: cdktn.listMapper(tfDataSourceChunkingConfigurationPropertyToTerraform, true)(struct!.chunkingConfiguration),
    custom_transformation_configuration: cdktn.listMapper(tfDataSourceCustomTransformationConfigurationPropertyToTerraform, true)(struct!.customTransformationConfiguration),
    parsing_configuration: cdktn.listMapper(tfDataSourceParsingConfigurationPropertyToTerraform, true)(struct!.parsingConfiguration),
  }
}


export function tfDataSourceVectorIngestionConfigurationPropertyToHclTerraform(struct?: TfDataSource.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunking_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceChunkingConfigurationPropertyToHclTerraform, true)(struct!.chunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ChunkingConfigurationPropertyList",
    },
    custom_transformation_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceCustomTransformationConfigurationPropertyToHclTerraform, true)(struct!.customTransformationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTransformationConfigurationPropertyList",
    },
    parsing_configuration: {
      value: cdktn.listMapperHcl(tfDataSourceParsingConfigurationPropertyToHclTerraform, true)(struct!.parsingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ParsingConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfDataSource {
export interface DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#exclusion_filters TfDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#inclusion_filters TfDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#object_type TfDataSource#object_type}
  */
  readonly objectType: string;
}
export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference {
    return new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filters TfDataSource#filters}
  */
  readonly filters?: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference {
    return new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#type TfDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#pattern_object_filter TfDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference {
    return new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filter_configuration TfDataSource#filter_configuration}
  */
  readonly filterConfiguration?: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPropertyList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyOutputReference {
    return new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#auth_type TfDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#credentials_secret_arn TfDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#host_type TfDataSource#host_type}
  */
  readonly hostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#host_url TfDataSource#host_url}
  */
  readonly hostUrl: string;
}
export class DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostType = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostType = value.hostType;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_type - computed: false, optional: false, required: true
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // host_url - computed: false, optional: false, required: true
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}

export class DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyOutputReference {
    return new DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfluenceConfigurationProperty {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#crawler_configuration TfDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#source_configuration TfDataSource#source_configuration}
  */
  readonly sourceConfiguration?: DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable;
}
export class ConfluenceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfluenceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfluenceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationPropertyList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: DataSourceConfigurationConfluenceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new DataSourceConfigurationConfluenceConfigurationSourceConfigurationPropertyList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: DataSourceConfigurationConfluenceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class ConfluenceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfluenceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfluenceConfigurationPropertyOutputReference {
    return new ConfluenceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeletionProtectionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#deletion_protection_status TfDataSource#deletion_protection_status}
  */
  readonly deletionProtectionStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#deletion_protection_threshold TfDataSource#deletion_protection_threshold}
  */
  readonly deletionProtectionThreshold?: number;
}
export class DeletionProtectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeletionProtectionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionProtectionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionStatus = this._deletionProtectionStatus;
    }
    if (this._deletionProtectionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionThreshold = this._deletionProtectionThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeletionProtectionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionProtectionStatus = undefined;
      this._deletionProtectionThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionProtectionStatus = value.deletionProtectionStatus;
      this._deletionProtectionThreshold = value.deletionProtectionThreshold;
    }
  }

  // deletion_protection_status - computed: false, optional: false, required: true
  private _deletionProtectionStatus?: string; 
  public get deletionProtectionStatus() {
    return this.getStringAttribute('deletion_protection_status');
  }
  public set deletionProtectionStatus(value: string) {
    this._deletionProtectionStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionStatusInput() {
    return this._deletionProtectionStatus;
  }

  // deletion_protection_threshold - computed: false, optional: true, required: false
  private _deletionProtectionThreshold?: number; 
  public get deletionProtectionThreshold() {
    return this.getNumberAttribute('deletion_protection_threshold');
  }
  public set deletionProtectionThreshold(value: number) {
    this._deletionProtectionThreshold = value;
  }
  public resetDeletionProtectionThreshold() {
    this._deletionProtectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionThresholdInput() {
    return this._deletionProtectionThreshold;
  }
}

export class DeletionProtectionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DeletionProtectionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DeletionProtectionConfigurationPropertyOutputReference {
    return new DeletionProtectionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AudioExtractionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#audio_extraction_status TfDataSource#audio_extraction_status}
  */
  readonly audioExtractionStatus: string;
}
export class AudioExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionStatus = this._audioExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = value.audioExtractionStatus;
    }
  }

  // audio_extraction_status - computed: false, optional: false, required: true
  private _audioExtractionStatus?: string; 
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
  public set audioExtractionStatus(value: string) {
    this._audioExtractionStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionStatusInput() {
    return this._audioExtractionStatus;
  }
}

export class AudioExtractionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AudioExtractionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AudioExtractionConfigurationPropertyOutputReference {
    return new AudioExtractionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageExtractionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#image_extraction_status TfDataSource#image_extraction_status}
  */
  readonly imageExtractionStatus: string;
}
export class ImageExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionStatus = this._imageExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = value.imageExtractionStatus;
    }
  }

  // image_extraction_status - computed: false, optional: false, required: true
  private _imageExtractionStatus?: string; 
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
  public set imageExtractionStatus(value: string) {
    this._imageExtractionStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionStatusInput() {
    return this._imageExtractionStatus;
  }
}

export class ImageExtractionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ImageExtractionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ImageExtractionConfigurationPropertyOutputReference {
    return new ImageExtractionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VideoExtractionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#video_extraction_status TfDataSource#video_extraction_status}
  */
  readonly videoExtractionStatus: string;
}
export class VideoExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._videoExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionStatus = this._videoExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = value.videoExtractionStatus;
    }
  }

  // video_extraction_status - computed: false, optional: false, required: true
  private _videoExtractionStatus?: string; 
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }
  public set videoExtractionStatus(value: string) {
    this._videoExtractionStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionStatusInput() {
    return this._videoExtractionStatus;
  }
}

export class VideoExtractionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : VideoExtractionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): VideoExtractionConfigurationPropertyOutputReference {
    return new VideoExtractionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaExtractionConfigurationProperty {
  /**
  * audio_extraction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#audio_extraction_configuration TfDataSource#audio_extraction_configuration}
  */
  readonly audioExtractionConfiguration?: AudioExtractionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * image_extraction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#image_extraction_configuration TfDataSource#image_extraction_configuration}
  */
  readonly imageExtractionConfiguration?: ImageExtractionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * video_extraction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#video_extraction_configuration TfDataSource#video_extraction_configuration}
  */
  readonly videoExtractionConfiguration?: VideoExtractionConfigurationProperty[] | cdktn.IResolvable;
}
export class MediaExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionConfiguration = this._audioExtractionConfiguration?.internalValue;
    }
    if (this._imageExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionConfiguration = this._imageExtractionConfiguration?.internalValue;
    }
    if (this._videoExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionConfiguration = this._videoExtractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = undefined;
      this._imageExtractionConfiguration.internalValue = undefined;
      this._videoExtractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = value.audioExtractionConfiguration;
      this._imageExtractionConfiguration.internalValue = value.imageExtractionConfiguration;
      this._videoExtractionConfiguration.internalValue = value.videoExtractionConfiguration;
    }
  }

  // audio_extraction_configuration - computed: false, optional: true, required: false
  private _audioExtractionConfiguration = new AudioExtractionConfigurationPropertyList(this, "audio_extraction_configuration", false);
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }
  public putAudioExtractionConfiguration(value: AudioExtractionConfigurationProperty[] | cdktn.IResolvable) {
    this._audioExtractionConfiguration.internalValue = value;
  }
  public resetAudioExtractionConfiguration() {
    this._audioExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionConfigurationInput() {
    return this._audioExtractionConfiguration.internalValue;
  }

  // image_extraction_configuration - computed: false, optional: true, required: false
  private _imageExtractionConfiguration = new ImageExtractionConfigurationPropertyList(this, "image_extraction_configuration", false);
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }
  public putImageExtractionConfiguration(value: ImageExtractionConfigurationProperty[] | cdktn.IResolvable) {
    this._imageExtractionConfiguration.internalValue = value;
  }
  public resetImageExtractionConfiguration() {
    this._imageExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionConfigurationInput() {
    return this._imageExtractionConfiguration.internalValue;
  }

  // video_extraction_configuration - computed: false, optional: true, required: false
  private _videoExtractionConfiguration = new VideoExtractionConfigurationPropertyList(this, "video_extraction_configuration", false);
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
  public putVideoExtractionConfiguration(value: VideoExtractionConfigurationProperty[] | cdktn.IResolvable) {
    this._videoExtractionConfiguration.internalValue = value;
  }
  public resetVideoExtractionConfiguration() {
    this._videoExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionConfigurationInput() {
    return this._videoExtractionConfiguration.internalValue;
  }
}

export class MediaExtractionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : MediaExtractionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): MediaExtractionConfigurationPropertyOutputReference {
    return new MediaExtractionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKnowledgeBaseConnectorConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#connector_parameters TfDataSource#connector_parameters}
  */
  readonly connectorParameters?: string;
  /**
  * deletion_protection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#deletion_protection_configuration TfDataSource#deletion_protection_configuration}
  */
  readonly deletionProtectionConfiguration?: DeletionProtectionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * media_extraction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#media_extraction_configuration TfDataSource#media_extraction_configuration}
  */
  readonly mediaExtractionConfiguration?: MediaExtractionConfigurationProperty[] | cdktn.IResolvable;
}
export class ManagedKnowledgeBaseConnectorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorParameters = this._connectorParameters;
    }
    if (this._deletionProtectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionConfiguration = this._deletionProtectionConfiguration?.internalValue;
    }
    if (this._mediaExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaExtractionConfiguration = this._mediaExtractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorParameters = undefined;
      this._deletionProtectionConfiguration.internalValue = undefined;
      this._mediaExtractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorParameters = value.connectorParameters;
      this._deletionProtectionConfiguration.internalValue = value.deletionProtectionConfiguration;
      this._mediaExtractionConfiguration.internalValue = value.mediaExtractionConfiguration;
    }
  }

  // connector_parameters - computed: false, optional: true, required: false
  private _connectorParameters?: string; 
  public get connectorParameters() {
    return this.getStringAttribute('connector_parameters');
  }
  public set connectorParameters(value: string) {
    this._connectorParameters = value;
  }
  public resetConnectorParameters() {
    this._connectorParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorParametersInput() {
    return this._connectorParameters;
  }

  // deletion_protection_configuration - computed: false, optional: true, required: false
  private _deletionProtectionConfiguration = new DeletionProtectionConfigurationPropertyList(this, "deletion_protection_configuration", false);
  public get deletionProtectionConfiguration() {
    return this._deletionProtectionConfiguration;
  }
  public putDeletionProtectionConfiguration(value: DeletionProtectionConfigurationProperty[] | cdktn.IResolvable) {
    this._deletionProtectionConfiguration.internalValue = value;
  }
  public resetDeletionProtectionConfiguration() {
    this._deletionProtectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionConfigurationInput() {
    return this._deletionProtectionConfiguration.internalValue;
  }

  // media_extraction_configuration - computed: false, optional: true, required: false
  private _mediaExtractionConfiguration = new MediaExtractionConfigurationPropertyList(this, "media_extraction_configuration", false);
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }
  public putMediaExtractionConfiguration(value: MediaExtractionConfigurationProperty[] | cdktn.IResolvable) {
    this._mediaExtractionConfiguration.internalValue = value;
  }
  public resetMediaExtractionConfiguration() {
    this._mediaExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaExtractionConfigurationInput() {
    return this._mediaExtractionConfiguration.internalValue;
  }
}

export class ManagedKnowledgeBaseConnectorConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedKnowledgeBaseConnectorConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedKnowledgeBaseConnectorConfigurationPropertyOutputReference {
    return new ManagedKnowledgeBaseConnectorConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#bucket_arn TfDataSource#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#bucket_owner_account_id TfDataSource#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#inclusion_prefixes TfDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._bucketOwnerAccountId = undefined;
      this._inclusionPrefixes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._inclusionPrefixes = value.inclusionPrefixes;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // inclusion_prefixes - computed: false, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_prefixes'));
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }
}

export class S3ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ConfigurationPropertyOutputReference {
    return new S3ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#exclusion_filters TfDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#inclusion_filters TfDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#object_type TfDataSource#object_type}
  */
  readonly objectType: string;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference {
    return new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filters TfDataSource#filters}
  */
  readonly filters?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference {
    return new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#type TfDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#pattern_object_filter TfDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filter_configuration TfDataSource#filter_configuration}
  */
  readonly filterConfiguration?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#auth_type TfDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#credentials_secret_arn TfDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#host_url TfDataSource#host_url}
  */
  readonly hostUrl: string;
}
export class DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_url - computed: false, optional: false, required: true
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}

export class DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SalesforceConfigurationProperty {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#crawler_configuration TfDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#source_configuration TfDataSource#source_configuration}
  */
  readonly sourceConfiguration?: DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable;
}
export class SalesforceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SalesforceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SalesforceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationPropertyList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new DataSourceConfigurationSalesforceConfigurationSourceConfigurationPropertyList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: DataSourceConfigurationSalesforceConfigurationSourceConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class SalesforceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SalesforceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SalesforceConfigurationPropertyOutputReference {
    return new SalesforceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#exclusion_filters TfDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#inclusion_filters TfDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#object_type TfDataSource#object_type}
  */
  readonly objectType: string;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference {
    return new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filters TfDataSource#filters}
  */
  readonly filters?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference {
    return new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#type TfDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#pattern_object_filter TfDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty[] | cdktn.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#filter_configuration TfDataSource#filter_configuration}
  */
  readonly filterConfiguration?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty[] | cdktn.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#auth_type TfDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#credentials_secret_arn TfDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#domain TfDataSource#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#host_type TfDataSource#host_type}
  */
  readonly hostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#site_urls TfDataSource#site_urls}
  */
  readonly siteUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#tenant_id TfDataSource#tenant_id}
  */
  readonly tenantId?: string;
}
export class DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._siteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUrls = this._siteUrls;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._domain = undefined;
      this._hostType = undefined;
      this._siteUrls = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._domain = value.domain;
      this._hostType = value.hostType;
      this._siteUrls = value.siteUrls;
      this._tenantId = value.tenantId;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host_type - computed: false, optional: false, required: true
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // site_urls - computed: false, optional: false, required: true
  private _siteUrls?: string[]; 
  public get siteUrls() {
    return cdktn.Fn.tolist(this.getListAttribute('site_urls'));
  }
  public set siteUrls(value: string[]) {
    this._siteUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlsInput() {
    return this._siteUrls;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyOutputReference {
    return new DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharePointConfigurationProperty {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#crawler_configuration TfDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#source_configuration TfDataSource#source_configuration}
  */
  readonly sourceConfiguration?: DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty[] | cdktn.IResolvable;
}
export class SharePointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharePointConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharePointConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationPropertyList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new DataSourceConfigurationSharePointConfigurationSourceConfigurationPropertyList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: DataSourceConfigurationSharePointConfigurationSourceConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class SharePointConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SharePointConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SharePointConfigurationPropertyOutputReference {
    return new SharePointConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrawlerLimitsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#max_pages TfDataSource#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#rate_limit TfDataSource#rate_limit}
  */
  readonly rateLimit?: number;
}
export class CrawlerLimitsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CrawlerLimitsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPages = this._maxPages;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrawlerLimitsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPages = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPages = value.maxPages;
      this._rateLimit = value.rateLimit;
    }
  }

  // max_pages - computed: false, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}

export class CrawlerLimitsPropertyList extends cdktn.ComplexList {
  public internalValue? : CrawlerLimitsProperty[] | cdktn.IResolvable

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
  public get(index: number): CrawlerLimitsPropertyOutputReference {
    return new CrawlerLimitsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#exclusion_filters TfDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#inclusion_filters TfDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#scope TfDataSource#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#user_agent TfDataSource#user_agent}
  */
  readonly userAgent?: string;
  /**
  * crawler_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#crawler_limits TfDataSource#crawler_limits}
  */
  readonly crawlerLimits?: CrawlerLimitsProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._crawlerLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerLimits = this._crawlerLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._scope = undefined;
      this._userAgent = undefined;
      this._crawlerLimits.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._scope = value.scope;
      this._userAgent = value.userAgent;
      this._crawlerLimits.internalValue = value.crawlerLimits;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // crawler_limits - computed: false, optional: true, required: false
  private _crawlerLimits = new CrawlerLimitsPropertyList(this, "crawler_limits", false);
  public get crawlerLimits() {
    return this._crawlerLimits;
  }
  public putCrawlerLimits(value: CrawlerLimitsProperty[] | cdktn.IResolvable) {
    this._crawlerLimits.internalValue = value;
  }
  public resetCrawlerLimits() {
    this._crawlerLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerLimitsInput() {
    return this._crawlerLimits.internalValue;
  }
}

export class DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyOutputReference {
    return new DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SeedUrlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#url TfDataSource#url}
  */
  readonly url?: string;
}
export class SeedUrlsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SeedUrlsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeedUrlsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SeedUrlsPropertyList extends cdktn.ComplexList {
  public internalValue? : SeedUrlsProperty[] | cdktn.IResolvable

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
  public get(index: number): SeedUrlsPropertyOutputReference {
    return new SeedUrlsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlConfigurationProperty {
  /**
  * seed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#seed_urls TfDataSource#seed_urls}
  */
  readonly seedUrls?: SeedUrlsProperty[] | cdktn.IResolvable;
}
export class UrlConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UrlConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = value.seedUrls;
    }
  }

  // seed_urls - computed: false, optional: true, required: false
  private _seedUrls = new SeedUrlsPropertyList(this, "seed_urls", false);
  public get seedUrls() {
    return this._seedUrls;
  }
  public putSeedUrls(value: SeedUrlsProperty[] | cdktn.IResolvable) {
    this._seedUrls.internalValue = value;
  }
  public resetSeedUrls() {
    this._seedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls.internalValue;
  }
}

export class UrlConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : UrlConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): UrlConfigurationPropertyOutputReference {
    return new UrlConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationWebConfigurationSourceConfigurationProperty {
  /**
  * url_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#url_configuration TfDataSource#url_configuration}
  */
  readonly urlConfiguration?: UrlConfigurationProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationWebConfigurationSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationWebConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationWebConfigurationSourceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = value.urlConfiguration;
    }
  }

  // url_configuration - computed: false, optional: true, required: false
  private _urlConfiguration = new UrlConfigurationPropertyList(this, "url_configuration", false);
  public get urlConfiguration() {
    return this._urlConfiguration;
  }
  public putUrlConfiguration(value: UrlConfigurationProperty[] | cdktn.IResolvable) {
    this._urlConfiguration.internalValue = value;
  }
  public resetUrlConfiguration() {
    this._urlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConfigurationInput() {
    return this._urlConfiguration.internalValue;
  }
}

export class DataSourceConfigurationWebConfigurationSourceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationWebConfigurationSourceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationWebConfigurationSourceConfigurationPropertyOutputReference {
    return new DataSourceConfigurationWebConfigurationSourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebConfigurationProperty {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#crawler_configuration TfDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#source_configuration TfDataSource#source_configuration}
  */
  readonly sourceConfiguration?: DataSourceConfigurationWebConfigurationSourceConfigurationProperty[] | cdktn.IResolvable;
}
export class WebConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new DataSourceConfigurationWebConfigurationCrawlerConfigurationPropertyList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: DataSourceConfigurationWebConfigurationCrawlerConfigurationProperty[] | cdktn.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new DataSourceConfigurationWebConfigurationSourceConfigurationPropertyList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: DataSourceConfigurationWebConfigurationSourceConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class WebConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : WebConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): WebConfigurationPropertyOutputReference {
    return new WebConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#type TfDataSource#type}
  */
  readonly type: string;
  /**
  * confluence_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#confluence_configuration TfDataSource#confluence_configuration}
  */
  readonly confluenceConfiguration?: ConfluenceConfigurationProperty[] | cdktn.IResolvable;
  /**
  * managed_knowledge_base_connector_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#managed_knowledge_base_connector_configuration TfDataSource#managed_knowledge_base_connector_configuration}
  */
  readonly managedKnowledgeBaseConnectorConfiguration?: ManagedKnowledgeBaseConnectorConfigurationProperty[] | cdktn.IResolvable;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#s3_configuration TfDataSource#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty[] | cdktn.IResolvable;
  /**
  * salesforce_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#salesforce_configuration TfDataSource#salesforce_configuration}
  */
  readonly salesforceConfiguration?: SalesforceConfigurationProperty[] | cdktn.IResolvable;
  /**
  * share_point_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#share_point_configuration TfDataSource#share_point_configuration}
  */
  readonly sharePointConfiguration?: SharePointConfigurationProperty[] | cdktn.IResolvable;
  /**
  * web_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#web_configuration TfDataSource#web_configuration}
  */
  readonly webConfiguration?: WebConfigurationProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._confluenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluenceConfiguration = this._confluenceConfiguration?.internalValue;
    }
    if (this._managedKnowledgeBaseConnectorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedKnowledgeBaseConnectorConfiguration = this._managedKnowledgeBaseConnectorConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._salesforceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceConfiguration = this._salesforceConfiguration?.internalValue;
    }
    if (this._sharePointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePointConfiguration = this._sharePointConfiguration?.internalValue;
    }
    if (this._webConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webConfiguration = this._webConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._confluenceConfiguration.internalValue = undefined;
      this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._salesforceConfiguration.internalValue = undefined;
      this._sharePointConfiguration.internalValue = undefined;
      this._webConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._confluenceConfiguration.internalValue = value.confluenceConfiguration;
      this._managedKnowledgeBaseConnectorConfiguration.internalValue = value.managedKnowledgeBaseConnectorConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._salesforceConfiguration.internalValue = value.salesforceConfiguration;
      this._sharePointConfiguration.internalValue = value.sharePointConfiguration;
      this._webConfiguration.internalValue = value.webConfiguration;
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

  // confluence_configuration - computed: false, optional: true, required: false
  private _confluenceConfiguration = new ConfluenceConfigurationPropertyList(this, "confluence_configuration", false);
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }
  public putConfluenceConfiguration(value: ConfluenceConfigurationProperty[] | cdktn.IResolvable) {
    this._confluenceConfiguration.internalValue = value;
  }
  public resetConfluenceConfiguration() {
    this._confluenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluenceConfigurationInput() {
    return this._confluenceConfiguration.internalValue;
  }

  // managed_knowledge_base_connector_configuration - computed: false, optional: true, required: false
  private _managedKnowledgeBaseConnectorConfiguration = new ManagedKnowledgeBaseConnectorConfigurationPropertyList(this, "managed_knowledge_base_connector_configuration", false);
  public get managedKnowledgeBaseConnectorConfiguration() {
    return this._managedKnowledgeBaseConnectorConfiguration;
  }
  public putManagedKnowledgeBaseConnectorConfiguration(value: ManagedKnowledgeBaseConnectorConfigurationProperty[] | cdktn.IResolvable) {
    this._managedKnowledgeBaseConnectorConfiguration.internalValue = value;
  }
  public resetManagedKnowledgeBaseConnectorConfiguration() {
    this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKnowledgeBaseConnectorConfigurationInput() {
    return this._managedKnowledgeBaseConnectorConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // salesforce_configuration - computed: false, optional: true, required: false
  private _salesforceConfiguration = new SalesforceConfigurationPropertyList(this, "salesforce_configuration", false);
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }
  public putSalesforceConfiguration(value: SalesforceConfigurationProperty[] | cdktn.IResolvable) {
    this._salesforceConfiguration.internalValue = value;
  }
  public resetSalesforceConfiguration() {
    this._salesforceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceConfigurationInput() {
    return this._salesforceConfiguration.internalValue;
  }

  // share_point_configuration - computed: false, optional: true, required: false
  private _sharePointConfiguration = new SharePointConfigurationPropertyList(this, "share_point_configuration", false);
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }
  public putSharePointConfiguration(value: SharePointConfigurationProperty[] | cdktn.IResolvable) {
    this._sharePointConfiguration.internalValue = value;
  }
  public resetSharePointConfiguration() {
    this._sharePointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePointConfigurationInput() {
    return this._sharePointConfiguration.internalValue;
  }

  // web_configuration - computed: false, optional: true, required: false
  private _webConfiguration = new WebConfigurationPropertyList(this, "web_configuration", false);
  public get webConfiguration() {
    return this._webConfiguration;
  }
  public putWebConfiguration(value: WebConfigurationProperty[] | cdktn.IResolvable) {
    this._webConfiguration.internalValue = value;
  }
  public resetWebConfiguration() {
    this._webConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webConfigurationInput() {
    return this._webConfiguration.internalValue;
  }
}

export class DataSourceConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourceConfigurationPropertyOutputReference {
    return new DataSourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSideEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#kms_key_arn TfDataSource#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class ServerSideEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class ServerSideEncryptionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ServerSideEncryptionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ServerSideEncryptionConfigurationPropertyOutputReference {
    return new ServerSideEncryptionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#create TfDataSource#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#delete TfDataSource#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#update TfDataSource#update}
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
export interface FixedSizeChunkingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#max_tokens TfDataSource#max_tokens}
  */
  readonly maxTokens: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#overlap_percentage TfDataSource#overlap_percentage}
  */
  readonly overlapPercentage: number;
}
export class FixedSizeChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FixedSizeChunkingConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._overlapPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapPercentage = this._overlapPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedSizeChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._overlapPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._overlapPercentage = value.overlapPercentage;
    }
  }

  // max_tokens - computed: false, optional: false, required: true
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // overlap_percentage - computed: false, optional: false, required: true
  private _overlapPercentage?: number; 
  public get overlapPercentage() {
    return this.getNumberAttribute('overlap_percentage');
  }
  public set overlapPercentage(value: number) {
    this._overlapPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapPercentageInput() {
    return this._overlapPercentage;
  }
}

export class FixedSizeChunkingConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : FixedSizeChunkingConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): FixedSizeChunkingConfigurationPropertyOutputReference {
    return new FixedSizeChunkingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LevelConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#max_tokens TfDataSource#max_tokens}
  */
  readonly maxTokens: number;
}
export class LevelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LevelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LevelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
    }
  }

  // max_tokens - computed: false, optional: false, required: true
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }
}

export class LevelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : LevelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): LevelConfigurationPropertyOutputReference {
    return new LevelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HierarchicalChunkingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#overlap_tokens TfDataSource#overlap_tokens}
  */
  readonly overlapTokens: number;
  /**
  * level_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#level_configuration TfDataSource#level_configuration}
  */
  readonly levelConfiguration?: LevelConfigurationProperty[] | cdktn.IResolvable;
}
export class HierarchicalChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HierarchicalChunkingConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overlapTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapTokens = this._overlapTokens;
    }
    if (this._levelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelConfiguration = this._levelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchicalChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overlapTokens = undefined;
      this._levelConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overlapTokens = value.overlapTokens;
      this._levelConfiguration.internalValue = value.levelConfiguration;
    }
  }

  // overlap_tokens - computed: false, optional: false, required: true
  private _overlapTokens?: number; 
  public get overlapTokens() {
    return this.getNumberAttribute('overlap_tokens');
  }
  public set overlapTokens(value: number) {
    this._overlapTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapTokensInput() {
    return this._overlapTokens;
  }

  // level_configuration - computed: false, optional: true, required: false
  private _levelConfiguration = new LevelConfigurationPropertyList(this, "level_configuration", false);
  public get levelConfiguration() {
    return this._levelConfiguration;
  }
  public putLevelConfiguration(value: LevelConfigurationProperty[] | cdktn.IResolvable) {
    this._levelConfiguration.internalValue = value;
  }
  public resetLevelConfiguration() {
    this._levelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelConfigurationInput() {
    return this._levelConfiguration.internalValue;
  }
}

export class HierarchicalChunkingConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : HierarchicalChunkingConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): HierarchicalChunkingConfigurationPropertyOutputReference {
    return new HierarchicalChunkingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticChunkingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#breakpoint_percentile_threshold TfDataSource#breakpoint_percentile_threshold}
  */
  readonly breakpointPercentileThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#buffer_size TfDataSource#buffer_size}
  */
  readonly bufferSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#max_token TfDataSource#max_token}
  */
  readonly maxToken: number;
}
export class SemanticChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SemanticChunkingConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakpointPercentileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakpointPercentileThreshold = this._breakpointPercentileThreshold;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._maxToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxToken = this._maxToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = undefined;
      this._bufferSize = undefined;
      this._maxToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = value.breakpointPercentileThreshold;
      this._bufferSize = value.bufferSize;
      this._maxToken = value.maxToken;
    }
  }

  // breakpoint_percentile_threshold - computed: false, optional: false, required: true
  private _breakpointPercentileThreshold?: number; 
  public get breakpointPercentileThreshold() {
    return this.getNumberAttribute('breakpoint_percentile_threshold');
  }
  public set breakpointPercentileThreshold(value: number) {
    this._breakpointPercentileThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get breakpointPercentileThresholdInput() {
    return this._breakpointPercentileThreshold;
  }

  // buffer_size - computed: false, optional: false, required: true
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // max_token - computed: false, optional: false, required: true
  private _maxToken?: number; 
  public get maxToken() {
    return this.getNumberAttribute('max_token');
  }
  public set maxToken(value: number) {
    this._maxToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenInput() {
    return this._maxToken;
  }
}

export class SemanticChunkingConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SemanticChunkingConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SemanticChunkingConfigurationPropertyOutputReference {
    return new SemanticChunkingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChunkingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#chunking_strategy TfDataSource#chunking_strategy}
  */
  readonly chunkingStrategy: string;
  /**
  * fixed_size_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#fixed_size_chunking_configuration TfDataSource#fixed_size_chunking_configuration}
  */
  readonly fixedSizeChunkingConfiguration?: FixedSizeChunkingConfigurationProperty[] | cdktn.IResolvable;
  /**
  * hierarchical_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#hierarchical_chunking_configuration TfDataSource#hierarchical_chunking_configuration}
  */
  readonly hierarchicalChunkingConfiguration?: HierarchicalChunkingConfigurationProperty[] | cdktn.IResolvable;
  /**
  * semantic_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#semantic_chunking_configuration TfDataSource#semantic_chunking_configuration}
  */
  readonly semanticChunkingConfiguration?: SemanticChunkingConfigurationProperty[] | cdktn.IResolvable;
}
export class ChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChunkingConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingStrategy = this._chunkingStrategy;
    }
    if (this._fixedSizeChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeChunkingConfiguration = this._fixedSizeChunkingConfiguration?.internalValue;
    }
    if (this._hierarchicalChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchicalChunkingConfiguration = this._hierarchicalChunkingConfiguration?.internalValue;
    }
    if (this._semanticChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticChunkingConfiguration = this._semanticChunkingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingStrategy = undefined;
      this._fixedSizeChunkingConfiguration.internalValue = undefined;
      this._hierarchicalChunkingConfiguration.internalValue = undefined;
      this._semanticChunkingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingStrategy = value.chunkingStrategy;
      this._fixedSizeChunkingConfiguration.internalValue = value.fixedSizeChunkingConfiguration;
      this._hierarchicalChunkingConfiguration.internalValue = value.hierarchicalChunkingConfiguration;
      this._semanticChunkingConfiguration.internalValue = value.semanticChunkingConfiguration;
    }
  }

  // chunking_strategy - computed: false, optional: false, required: true
  private _chunkingStrategy?: string; 
  public get chunkingStrategy() {
    return this.getStringAttribute('chunking_strategy');
  }
  public set chunkingStrategy(value: string) {
    this._chunkingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingStrategyInput() {
    return this._chunkingStrategy;
  }

  // fixed_size_chunking_configuration - computed: false, optional: true, required: false
  private _fixedSizeChunkingConfiguration = new FixedSizeChunkingConfigurationPropertyList(this, "fixed_size_chunking_configuration", false);
  public get fixedSizeChunkingConfiguration() {
    return this._fixedSizeChunkingConfiguration;
  }
  public putFixedSizeChunkingConfiguration(value: FixedSizeChunkingConfigurationProperty[] | cdktn.IResolvable) {
    this._fixedSizeChunkingConfiguration.internalValue = value;
  }
  public resetFixedSizeChunkingConfiguration() {
    this._fixedSizeChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeChunkingConfigurationInput() {
    return this._fixedSizeChunkingConfiguration.internalValue;
  }

  // hierarchical_chunking_configuration - computed: false, optional: true, required: false
  private _hierarchicalChunkingConfiguration = new HierarchicalChunkingConfigurationPropertyList(this, "hierarchical_chunking_configuration", false);
  public get hierarchicalChunkingConfiguration() {
    return this._hierarchicalChunkingConfiguration;
  }
  public putHierarchicalChunkingConfiguration(value: HierarchicalChunkingConfigurationProperty[] | cdktn.IResolvable) {
    this._hierarchicalChunkingConfiguration.internalValue = value;
  }
  public resetHierarchicalChunkingConfiguration() {
    this._hierarchicalChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalChunkingConfigurationInput() {
    return this._hierarchicalChunkingConfiguration.internalValue;
  }

  // semantic_chunking_configuration - computed: false, optional: true, required: false
  private _semanticChunkingConfiguration = new SemanticChunkingConfigurationPropertyList(this, "semantic_chunking_configuration", false);
  public get semanticChunkingConfiguration() {
    return this._semanticChunkingConfiguration;
  }
  public putSemanticChunkingConfiguration(value: SemanticChunkingConfigurationProperty[] | cdktn.IResolvable) {
    this._semanticChunkingConfiguration.internalValue = value;
  }
  public resetSemanticChunkingConfiguration() {
    this._semanticChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticChunkingConfigurationInput() {
    return this._semanticChunkingConfiguration.internalValue;
  }
}

export class ChunkingConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ChunkingConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ChunkingConfigurationPropertyOutputReference {
    return new ChunkingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3LocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#uri TfDataSource#uri}
  */
  readonly uri: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class S3LocationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3LocationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3LocationPropertyOutputReference {
    return new S3LocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntermediateStorageProperty {
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#s3_location TfDataSource#s3_location}
  */
  readonly s3Location?: S3LocationProperty[] | cdktn.IResolvable;
}
export class IntermediateStoragePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IntermediateStorageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntermediateStorageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new S3LocationPropertyList(this, "s3_location", false);
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: S3LocationProperty[] | cdktn.IResolvable) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

export class IntermediateStoragePropertyList extends cdktn.ComplexList {
  public internalValue? : IntermediateStorageProperty[] | cdktn.IResolvable

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
  public get(index: number): IntermediateStoragePropertyOutputReference {
    return new IntermediateStoragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationLambdaConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#lambda_arn TfDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
}
export class TransformationLambdaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformationLambdaConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationLambdaConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class TransformationLambdaConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformationLambdaConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformationLambdaConfigurationPropertyOutputReference {
    return new TransformationLambdaConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationFunctionProperty {
  /**
  * transformation_lambda_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#transformation_lambda_configuration TfDataSource#transformation_lambda_configuration}
  */
  readonly transformationLambdaConfiguration?: TransformationLambdaConfigurationProperty[] | cdktn.IResolvable;
}
export class TransformationFunctionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformationFunctionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationLambdaConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationLambdaConfiguration = this._transformationLambdaConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationFunctionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = value.transformationLambdaConfiguration;
    }
  }

  // transformation_lambda_configuration - computed: false, optional: true, required: false
  private _transformationLambdaConfiguration = new TransformationLambdaConfigurationPropertyList(this, "transformation_lambda_configuration", false);
  public get transformationLambdaConfiguration() {
    return this._transformationLambdaConfiguration;
  }
  public putTransformationLambdaConfiguration(value: TransformationLambdaConfigurationProperty[] | cdktn.IResolvable) {
    this._transformationLambdaConfiguration.internalValue = value;
  }
  public resetTransformationLambdaConfiguration() {
    this._transformationLambdaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationLambdaConfigurationInput() {
    return this._transformationLambdaConfiguration.internalValue;
  }
}

export class TransformationFunctionPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformationFunctionProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformationFunctionPropertyOutputReference {
    return new TransformationFunctionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#step_to_apply TfDataSource#step_to_apply}
  */
  readonly stepToApply: string;
  /**
  * transformation_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#transformation_function TfDataSource#transformation_function}
  */
  readonly transformationFunction?: TransformationFunctionProperty[] | cdktn.IResolvable;
}
export class TransformationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepToApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepToApply = this._stepToApply;
    }
    if (this._transformationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationFunction = this._transformationFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepToApply = undefined;
      this._transformationFunction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepToApply = value.stepToApply;
      this._transformationFunction.internalValue = value.transformationFunction;
    }
  }

  // step_to_apply - computed: false, optional: false, required: true
  private _stepToApply?: string; 
  public get stepToApply() {
    return this.getStringAttribute('step_to_apply');
  }
  public set stepToApply(value: string) {
    this._stepToApply = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepToApplyInput() {
    return this._stepToApply;
  }

  // transformation_function - computed: false, optional: true, required: false
  private _transformationFunction = new TransformationFunctionPropertyList(this, "transformation_function", false);
  public get transformationFunction() {
    return this._transformationFunction;
  }
  public putTransformationFunction(value: TransformationFunctionProperty[] | cdktn.IResolvable) {
    this._transformationFunction.internalValue = value;
  }
  public resetTransformationFunction() {
    this._transformationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationFunctionInput() {
    return this._transformationFunction.internalValue;
  }
}

export class TransformationPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformationProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformationPropertyOutputReference {
    return new TransformationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomTransformationConfigurationProperty {
  /**
  * intermediate_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#intermediate_storage TfDataSource#intermediate_storage}
  */
  readonly intermediateStorage?: IntermediateStorageProperty[] | cdktn.IResolvable;
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#transformation TfDataSource#transformation}
  */
  readonly transformation?: TransformationProperty[] | cdktn.IResolvable;
}
export class CustomTransformationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomTransformationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateStorage = this._intermediateStorage?.internalValue;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomTransformationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = value.intermediateStorage;
      this._transformation.internalValue = value.transformation;
    }
  }

  // intermediate_storage - computed: false, optional: true, required: false
  private _intermediateStorage = new IntermediateStoragePropertyList(this, "intermediate_storage", false);
  public get intermediateStorage() {
    return this._intermediateStorage;
  }
  public putIntermediateStorage(value: IntermediateStorageProperty[] | cdktn.IResolvable) {
    this._intermediateStorage.internalValue = value;
  }
  public resetIntermediateStorage() {
    this._intermediateStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateStorageInput() {
    return this._intermediateStorage.internalValue;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new TransformationPropertyList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: TransformationProperty[] | cdktn.IResolvable) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class CustomTransformationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomTransformationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomTransformationConfigurationPropertyOutputReference {
    return new CustomTransformationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataAutomationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_modality TfDataSource#parsing_modality}
  */
  readonly parsingModality?: string;
}
export class BedrockDataAutomationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataAutomationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingModality !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingModality = this._parsingModality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingModality = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingModality = value.parsingModality;
    }
  }

  // parsing_modality - computed: false, optional: true, required: false
  private _parsingModality?: string; 
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }
  public set parsingModality(value: string) {
    this._parsingModality = value;
  }
  public resetParsingModality() {
    this._parsingModality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModalityInput() {
    return this._parsingModality;
  }
}

export class BedrockDataAutomationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : BedrockDataAutomationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataAutomationConfigurationPropertyOutputReference {
    return new BedrockDataAutomationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParsingPromptProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_prompt_string TfDataSource#parsing_prompt_string}
  */
  readonly parsingPromptString: string;
}
export class ParsingPromptPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParsingPromptProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingPromptString !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPromptString = this._parsingPromptString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParsingPromptProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingPromptString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingPromptString = value.parsingPromptString;
    }
  }

  // parsing_prompt_string - computed: false, optional: false, required: true
  private _parsingPromptString?: string; 
  public get parsingPromptString() {
    return this.getStringAttribute('parsing_prompt_string');
  }
  public set parsingPromptString(value: string) {
    this._parsingPromptString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptStringInput() {
    return this._parsingPromptString;
  }
}

export class ParsingPromptPropertyList extends cdktn.ComplexList {
  public internalValue? : ParsingPromptProperty[] | cdktn.IResolvable

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
  public get(index: number): ParsingPromptPropertyOutputReference {
    return new ParsingPromptPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFoundationModelConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#model_arn TfDataSource#model_arn}
  */
  readonly modelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_modality TfDataSource#parsing_modality}
  */
  readonly parsingModality?: string;
  /**
  * parsing_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_prompt TfDataSource#parsing_prompt}
  */
  readonly parsingPrompt?: ParsingPromptProperty[] | cdktn.IResolvable;
}
export class BedrockFoundationModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFoundationModelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._parsingModality !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingModality = this._parsingModality;
    }
    if (this._parsingPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPrompt = this._parsingPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFoundationModelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelArn = undefined;
      this._parsingModality = undefined;
      this._parsingPrompt.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelArn = value.modelArn;
      this._parsingModality = value.parsingModality;
      this._parsingPrompt.internalValue = value.parsingPrompt;
    }
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // parsing_modality - computed: false, optional: true, required: false
  private _parsingModality?: string; 
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }
  public set parsingModality(value: string) {
    this._parsingModality = value;
  }
  public resetParsingModality() {
    this._parsingModality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModalityInput() {
    return this._parsingModality;
  }

  // parsing_prompt - computed: false, optional: true, required: false
  private _parsingPrompt = new ParsingPromptPropertyList(this, "parsing_prompt", false);
  public get parsingPrompt() {
    return this._parsingPrompt;
  }
  public putParsingPrompt(value: ParsingPromptProperty[] | cdktn.IResolvable) {
    this._parsingPrompt.internalValue = value;
  }
  public resetParsingPrompt() {
    this._parsingPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptInput() {
    return this._parsingPrompt.internalValue;
  }
}

export class BedrockFoundationModelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : BedrockFoundationModelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): BedrockFoundationModelConfigurationPropertyOutputReference {
    return new BedrockFoundationModelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParsingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_strategy TfDataSource#parsing_strategy}
  */
  readonly parsingStrategy: string;
  /**
  * bedrock_data_automation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#bedrock_data_automation_configuration TfDataSource#bedrock_data_automation_configuration}
  */
  readonly bedrockDataAutomationConfiguration?: BedrockDataAutomationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * bedrock_foundation_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#bedrock_foundation_model_configuration TfDataSource#bedrock_foundation_model_configuration}
  */
  readonly bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationProperty[] | cdktn.IResolvable;
}
export class ParsingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParsingConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingStrategy = this._parsingStrategy;
    }
    if (this._bedrockDataAutomationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockDataAutomationConfiguration = this._bedrockDataAutomationConfiguration?.internalValue;
    }
    if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParsingConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingStrategy = undefined;
      this._bedrockDataAutomationConfiguration.internalValue = undefined;
      this._bedrockFoundationModelConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingStrategy = value.parsingStrategy;
      this._bedrockDataAutomationConfiguration.internalValue = value.bedrockDataAutomationConfiguration;
      this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
    }
  }

  // parsing_strategy - computed: false, optional: false, required: true
  private _parsingStrategy?: string; 
  public get parsingStrategy() {
    return this.getStringAttribute('parsing_strategy');
  }
  public set parsingStrategy(value: string) {
    this._parsingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingStrategyInput() {
    return this._parsingStrategy;
  }

  // bedrock_data_automation_configuration - computed: false, optional: true, required: false
  private _bedrockDataAutomationConfiguration = new BedrockDataAutomationConfigurationPropertyList(this, "bedrock_data_automation_configuration", false);
  public get bedrockDataAutomationConfiguration() {
    return this._bedrockDataAutomationConfiguration;
  }
  public putBedrockDataAutomationConfiguration(value: BedrockDataAutomationConfigurationProperty[] | cdktn.IResolvable) {
    this._bedrockDataAutomationConfiguration.internalValue = value;
  }
  public resetBedrockDataAutomationConfiguration() {
    this._bedrockDataAutomationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockDataAutomationConfigurationInput() {
    return this._bedrockDataAutomationConfiguration.internalValue;
  }

  // bedrock_foundation_model_configuration - computed: false, optional: true, required: false
  private _bedrockFoundationModelConfiguration = new BedrockFoundationModelConfigurationPropertyList(this, "bedrock_foundation_model_configuration", false);
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }
  public putBedrockFoundationModelConfiguration(value: BedrockFoundationModelConfigurationProperty[] | cdktn.IResolvable) {
    this._bedrockFoundationModelConfiguration.internalValue = value;
  }
  public resetBedrockFoundationModelConfiguration() {
    this._bedrockFoundationModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockFoundationModelConfigurationInput() {
    return this._bedrockFoundationModelConfiguration.internalValue;
  }
}

export class ParsingConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ParsingConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ParsingConfigurationPropertyOutputReference {
    return new ParsingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorIngestionConfigurationProperty {
  /**
  * chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#chunking_configuration TfDataSource#chunking_configuration}
  */
  readonly chunkingConfiguration?: ChunkingConfigurationProperty[] | cdktn.IResolvable;
  /**
  * custom_transformation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#custom_transformation_configuration TfDataSource#custom_transformation_configuration}
  */
  readonly customTransformationConfiguration?: CustomTransformationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * parsing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_data_source#parsing_configuration TfDataSource#parsing_configuration}
  */
  readonly parsingConfiguration?: ParsingConfigurationProperty[] | cdktn.IResolvable;
}
export class VectorIngestionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VectorIngestionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfiguration = this._chunkingConfiguration?.internalValue;
    }
    if (this._customTransformationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTransformationConfiguration = this._customTransformationConfiguration?.internalValue;
    }
    if (this._parsingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfiguration = this._parsingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorIngestionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = undefined;
      this._customTransformationConfiguration.internalValue = undefined;
      this._parsingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = value.chunkingConfiguration;
      this._customTransformationConfiguration.internalValue = value.customTransformationConfiguration;
      this._parsingConfiguration.internalValue = value.parsingConfiguration;
    }
  }

  // chunking_configuration - computed: false, optional: true, required: false
  private _chunkingConfiguration = new ChunkingConfigurationPropertyList(this, "chunking_configuration", false);
  public get chunkingConfiguration() {
    return this._chunkingConfiguration;
  }
  public putChunkingConfiguration(value: ChunkingConfigurationProperty[] | cdktn.IResolvable) {
    this._chunkingConfiguration.internalValue = value;
  }
  public resetChunkingConfiguration() {
    this._chunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigurationInput() {
    return this._chunkingConfiguration.internalValue;
  }

  // custom_transformation_configuration - computed: false, optional: true, required: false
  private _customTransformationConfiguration = new CustomTransformationConfigurationPropertyList(this, "custom_transformation_configuration", false);
  public get customTransformationConfiguration() {
    return this._customTransformationConfiguration;
  }
  public putCustomTransformationConfiguration(value: CustomTransformationConfigurationProperty[] | cdktn.IResolvable) {
    this._customTransformationConfiguration.internalValue = value;
  }
  public resetCustomTransformationConfiguration() {
    this._customTransformationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTransformationConfigurationInput() {
    return this._customTransformationConfiguration.internalValue;
  }

  // parsing_configuration - computed: false, optional: true, required: false
  private _parsingConfiguration = new ParsingConfigurationPropertyList(this, "parsing_configuration", false);
  public get parsingConfiguration() {
    return this._parsingConfiguration;
  }
  public putParsingConfiguration(value: ParsingConfigurationProperty[] | cdktn.IResolvable) {
    this._parsingConfiguration.internalValue = value;
  }
  public resetParsingConfiguration() {
    this._parsingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingConfigurationInput() {
    return this._parsingConfiguration.internalValue;
  }
}

export class VectorIngestionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : VectorIngestionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): VectorIngestionConfigurationPropertyOutputReference {
    return new VectorIngestionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
