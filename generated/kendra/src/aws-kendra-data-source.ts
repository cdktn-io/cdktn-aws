// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#description TfDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#id TfDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#index_id TfDataSource#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#language_code TfDataSource#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#name TfDataSource#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#region TfDataSource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#role_arn TfDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#schedule TfDataSource#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#tags TfDataSource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#tags_all TfDataSource#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#type TfDataSource#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#configuration TfDataSource#configuration}
  */
  readonly configuration?: TfDataSource.ConfigurationProperty;
  /**
  * custom_document_enrichment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#custom_document_enrichment_configuration TfDataSource#custom_document_enrichment_configuration}
  */
  readonly customDocumentEnrichmentConfiguration?: TfDataSource.CustomDocumentEnrichmentConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#timeouts TfDataSource#timeouts}
  */
  readonly timeouts?: TfDataSource.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source aws_kendra_data_source}
*/
export class TfDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDataSource to import
  * @param importFromId The id of the existing TfDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kendra_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source aws_kendra_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: TfDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_data_source',
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
    this._description = config.description;
    this._id = config.id;
    this._indexId = config.indexId;
    this._languageCode = config.languageCode;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._schedule = config.schedule;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._customDocumentEnrichmentConfiguration.internalValue = config.customDocumentEnrichmentConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new TfDataSource.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: TfDataSource.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // custom_document_enrichment_configuration - computed: false, optional: true, required: false
  private _customDocumentEnrichmentConfiguration = new TfDataSource.CustomDocumentEnrichmentConfigurationPropertyOutputReference(this, "custom_document_enrichment_configuration");
  public get customDocumentEnrichmentConfiguration() {
    return this._customDocumentEnrichmentConfiguration;
  }
  public putCustomDocumentEnrichmentConfiguration(value: TfDataSource.CustomDocumentEnrichmentConfigurationProperty) {
    this._customDocumentEnrichmentConfiguration.internalValue = value;
  }
  public resetCustomDocumentEnrichmentConfiguration() {
    this._customDocumentEnrichmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDocumentEnrichmentConfigurationInput() {
    return this._customDocumentEnrichmentConfiguration.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      index_id: cdktn.stringToTerraform(this._indexId),
      language_code: cdktn.stringToTerraform(this._languageCode),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      schedule: cdktn.stringToTerraform(this._schedule),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      configuration: tfDataSourceConfigurationPropertyToTerraform(this._configuration.internalValue),
      custom_document_enrichment_configuration: tfDataSourceCustomDocumentEnrichmentConfigurationPropertyToTerraform(this._customDocumentEnrichmentConfiguration.internalValue),
      timeouts: tfDataSourceTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_code: {
        value: cdktn.stringToHclTerraform(this._languageCode),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktn.stringToHclTerraform(this._schedule),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: tfDataSourceConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataSource.ConfigurationPropertyList",
      },
      custom_document_enrichment_configuration: {
        value: tfDataSourceCustomDocumentEnrichmentConfigurationPropertyToHclTerraform(this._customDocumentEnrichmentConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataSource.CustomDocumentEnrichmentConfigurationPropertyList",
      },
      timeouts: {
        value: tfDataSourceTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfDataSource.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDataSourceAccessControlListConfigurationPropertyToTerraform(struct?: TfDataSource.AccessControlListConfigurationPropertyOutputReference | TfDataSource.AccessControlListConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_path: cdktn.stringToTerraform(struct!.keyPath),
  }
}


export function tfDataSourceAccessControlListConfigurationPropertyToHclTerraform(struct?: TfDataSource.AccessControlListConfigurationPropertyOutputReference | TfDataSource.AccessControlListConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_path: {
      value: cdktn.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceDocumentsMetadataConfigurationPropertyToTerraform(struct?: TfDataSource.DocumentsMetadataConfigurationPropertyOutputReference | TfDataSource.DocumentsMetadataConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
  }
}


export function tfDataSourceDocumentsMetadataConfigurationPropertyToHclTerraform(struct?: TfDataSource.DocumentsMetadataConfigurationPropertyOutputReference | TfDataSource.DocumentsMetadataConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceS3ConfigurationPropertyToTerraform(struct?: TfDataSource.S3ConfigurationPropertyOutputReference | TfDataSource.S3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPrefixes),
    access_control_list_configuration: tfDataSourceAccessControlListConfigurationPropertyToTerraform(struct!.accessControlListConfiguration),
    documents_metadata_configuration: tfDataSourceDocumentsMetadataConfigurationPropertyToTerraform(struct!.documentsMetadataConfiguration),
  }
}


export function tfDataSourceS3ConfigurationPropertyToHclTerraform(struct?: TfDataSource.S3ConfigurationPropertyOutputReference | TfDataSource.S3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    access_control_list_configuration: {
      value: tfDataSourceAccessControlListConfigurationPropertyToHclTerraform(struct!.accessControlListConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlListConfigurationPropertyList",
    },
    documents_metadata_configuration: {
      value: tfDataSourceDocumentsMetadataConfigurationPropertyToHclTerraform(struct!.documentsMetadataConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentsMetadataConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTemplateConfigurationPropertyToTerraform(struct?: TfDataSource.TemplateConfigurationPropertyOutputReference | TfDataSource.TemplateConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function tfDataSourceTemplateConfigurationPropertyToHclTerraform(struct?: TfDataSource.TemplateConfigurationPropertyOutputReference | TfDataSource.TemplateConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceBasicAuthenticationPropertyToTerraform(struct?: TfDataSource.BasicAuthenticationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials: cdktn.stringToTerraform(struct!.credentials),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function tfDataSourceBasicAuthenticationPropertyToHclTerraform(struct?: TfDataSource.BasicAuthenticationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials: {
      value: cdktn.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceAuthenticationConfigurationPropertyToTerraform(struct?: TfDataSource.AuthenticationConfigurationPropertyOutputReference | TfDataSource.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_authentication: cdktn.listMapper(tfDataSourceBasicAuthenticationPropertyToTerraform, true)(struct!.basicAuthentication),
  }
}


export function tfDataSourceAuthenticationConfigurationPropertyToHclTerraform(struct?: TfDataSource.AuthenticationConfigurationPropertyOutputReference | TfDataSource.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_authentication: {
      value: cdktn.listMapperHcl(tfDataSourceBasicAuthenticationPropertyToHclTerraform, true)(struct!.basicAuthentication),
      isBlock: true,
      type: "set",
      storageClassType: "BasicAuthenticationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceProxyConfigurationPropertyToTerraform(struct?: TfDataSource.ProxyConfigurationPropertyOutputReference | TfDataSource.ProxyConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials: cdktn.stringToTerraform(struct!.credentials),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function tfDataSourceProxyConfigurationPropertyToHclTerraform(struct?: TfDataSource.ProxyConfigurationPropertyOutputReference | TfDataSource.ProxyConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials: {
      value: cdktn.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSeedUrlConfigurationPropertyToTerraform(struct?: TfDataSource.SeedUrlConfigurationPropertyOutputReference | TfDataSource.SeedUrlConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.seedUrls),
    web_crawler_mode: cdktn.stringToTerraform(struct!.webCrawlerMode),
  }
}


export function tfDataSourceSeedUrlConfigurationPropertyToHclTerraform(struct?: TfDataSource.SeedUrlConfigurationPropertyOutputReference | TfDataSource.SeedUrlConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.seedUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    web_crawler_mode: {
      value: cdktn.stringToHclTerraform(struct!.webCrawlerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceSiteMapsConfigurationPropertyToTerraform(struct?: TfDataSource.SiteMapsConfigurationPropertyOutputReference | TfDataSource.SiteMapsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    site_maps: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.siteMaps),
  }
}


export function tfDataSourceSiteMapsConfigurationPropertyToHclTerraform(struct?: TfDataSource.SiteMapsConfigurationPropertyOutputReference | TfDataSource.SiteMapsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    site_maps: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.siteMaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceUrlsPropertyToTerraform(struct?: TfDataSource.UrlsPropertyOutputReference | TfDataSource.UrlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_url_configuration: tfDataSourceSeedUrlConfigurationPropertyToTerraform(struct!.seedUrlConfiguration),
    site_maps_configuration: tfDataSourceSiteMapsConfigurationPropertyToTerraform(struct!.siteMapsConfiguration),
  }
}


export function tfDataSourceUrlsPropertyToHclTerraform(struct?: TfDataSource.UrlsPropertyOutputReference | TfDataSource.UrlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_url_configuration: {
      value: tfDataSourceSeedUrlConfigurationPropertyToHclTerraform(struct!.seedUrlConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SeedUrlConfigurationPropertyList",
    },
    site_maps_configuration: {
      value: tfDataSourceSiteMapsConfigurationPropertyToHclTerraform(struct!.siteMapsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SiteMapsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceWebCrawlerConfigurationPropertyToTerraform(struct?: TfDataSource.WebCrawlerConfigurationPropertyOutputReference | TfDataSource.WebCrawlerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_depth: cdktn.numberToTerraform(struct!.crawlDepth),
    max_content_size_per_page_in_mega_bytes: cdktn.numberToTerraform(struct!.maxContentSizePerPageInMegaBytes),
    max_links_per_page: cdktn.numberToTerraform(struct!.maxLinksPerPage),
    max_urls_per_minute_crawl_rate: cdktn.numberToTerraform(struct!.maxUrlsPerMinuteCrawlRate),
    url_exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urlExclusionPatterns),
    url_inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urlInclusionPatterns),
    authentication_configuration: tfDataSourceAuthenticationConfigurationPropertyToTerraform(struct!.authenticationConfiguration),
    proxy_configuration: tfDataSourceProxyConfigurationPropertyToTerraform(struct!.proxyConfiguration),
    urls: tfDataSourceUrlsPropertyToTerraform(struct!.urls),
  }
}


export function tfDataSourceWebCrawlerConfigurationPropertyToHclTerraform(struct?: TfDataSource.WebCrawlerConfigurationPropertyOutputReference | TfDataSource.WebCrawlerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_depth: {
      value: cdktn.numberToHclTerraform(struct!.crawlDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_content_size_per_page_in_mega_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxContentSizePerPageInMegaBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_links_per_page: {
      value: cdktn.numberToHclTerraform(struct!.maxLinksPerPage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_urls_per_minute_crawl_rate: {
      value: cdktn.numberToHclTerraform(struct!.maxUrlsPerMinuteCrawlRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urlExclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url_inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urlInclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authentication_configuration: {
      value: tfDataSourceAuthenticationConfigurationPropertyToHclTerraform(struct!.authenticationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticationConfigurationPropertyList",
    },
    proxy_configuration: {
      value: tfDataSourceProxyConfigurationPropertyToHclTerraform(struct!.proxyConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ProxyConfigurationPropertyList",
    },
    urls: {
      value: tfDataSourceUrlsPropertyToHclTerraform(struct!.urls),
      isBlock: true,
      type: "list",
      storageClassType: "UrlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceConfigurationPropertyToTerraform(struct?: TfDataSource.ConfigurationPropertyOutputReference | TfDataSource.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: tfDataSourceS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    template_configuration: tfDataSourceTemplateConfigurationPropertyToTerraform(struct!.templateConfiguration),
    web_crawler_configuration: tfDataSourceWebCrawlerConfigurationPropertyToTerraform(struct!.webCrawlerConfiguration),
  }
}


export function tfDataSourceConfigurationPropertyToHclTerraform(struct?: TfDataSource.ConfigurationPropertyOutputReference | TfDataSource.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: tfDataSourceS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
    template_configuration: {
      value: tfDataSourceTemplateConfigurationPropertyToHclTerraform(struct!.templateConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateConfigurationPropertyList",
    },
    web_crawler_configuration: {
      value: tfDataSourceWebCrawlerConfigurationPropertyToHclTerraform(struct!.webCrawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WebCrawlerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceConditionPropertyToTerraform(struct?: TfDataSource.ConditionPropertyOutputReference | TfDataSource.ConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktn.stringToTerraform(struct!.operator),
    condition_on_value: tfDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyToTerraform(struct!.conditionOnValue),
  }
}


export function tfDataSourceConditionPropertyToHclTerraform(struct?: TfDataSource.ConditionPropertyOutputReference | TfDataSource.ConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: tfDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTargetDocumentAttributeValuePropertyToTerraform(struct?: TfDataSource.TargetDocumentAttributeValuePropertyOutputReference | TfDataSource.TargetDocumentAttributeValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function tfDataSourceTargetDocumentAttributeValuePropertyToHclTerraform(struct?: TfDataSource.TargetDocumentAttributeValuePropertyOutputReference | TfDataSource.TargetDocumentAttributeValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceTargetPropertyToTerraform(struct?: TfDataSource.TargetPropertyOutputReference | TfDataSource.TargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_document_attribute_key: cdktn.stringToTerraform(struct!.targetDocumentAttributeKey),
    target_document_attribute_value_deletion: cdktn.booleanToTerraform(struct!.targetDocumentAttributeValueDeletion),
    target_document_attribute_value: tfDataSourceTargetDocumentAttributeValuePropertyToTerraform(struct!.targetDocumentAttributeValue),
  }
}


export function tfDataSourceTargetPropertyToHclTerraform(struct?: TfDataSource.TargetPropertyOutputReference | TfDataSource.TargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.targetDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_document_attribute_value_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.targetDocumentAttributeValueDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_document_attribute_value: {
      value: tfDataSourceTargetDocumentAttributeValuePropertyToHclTerraform(struct!.targetDocumentAttributeValue),
      isBlock: true,
      type: "list",
      storageClassType: "TargetDocumentAttributeValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceInlineConfigurationsPropertyToTerraform(struct?: TfDataSource.InlineConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_content_deletion: cdktn.booleanToTerraform(struct!.documentContentDeletion),
    condition: tfDataSourceConditionPropertyToTerraform(struct!.condition),
    target: tfDataSourceTargetPropertyToTerraform(struct!.target),
  }
}


export function tfDataSourceInlineConfigurationsPropertyToHclTerraform(struct?: TfDataSource.InlineConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_content_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.documentContentDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: tfDataSourceConditionPropertyToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionPropertyList",
    },
    target: {
      value: tfDataSourceTargetPropertyToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "TargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktn.stringToTerraform(struct!.operator),
    condition_on_value: tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToTerraform(struct!.conditionOnValue),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourcePostExtractionHookConfigurationPropertyToTerraform(struct?: TfDataSource.PostExtractionHookConfigurationPropertyOutputReference | TfDataSource.PostExtractionHookConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    invocation_condition: tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct!.invocationCondition),
  }
}


export function tfDataSourcePostExtractionHookConfigurationPropertyToHclTerraform(struct?: TfDataSource.PostExtractionHookConfigurationPropertyOutputReference | TfDataSource.PostExtractionHookConfigurationProperty): any {
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
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_condition: {
      value: tfDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktn.stringToTerraform(struct!.operator),
    condition_on_value: tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToTerraform(struct!.conditionOnValue),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourcePreExtractionHookConfigurationPropertyToTerraform(struct?: TfDataSource.PreExtractionHookConfigurationPropertyOutputReference | TfDataSource.PreExtractionHookConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    invocation_condition: tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct!.invocationCondition),
  }
}


export function tfDataSourcePreExtractionHookConfigurationPropertyToHclTerraform(struct?: TfDataSource.PreExtractionHookConfigurationPropertyOutputReference | TfDataSource.PreExtractionHookConfigurationProperty): any {
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
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_condition: {
      value: tfDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPropertyToTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    inline_configurations: cdktn.listMapper(tfDataSourceInlineConfigurationsPropertyToTerraform, true)(struct!.inlineConfigurations),
    post_extraction_hook_configuration: tfDataSourcePostExtractionHookConfigurationPropertyToTerraform(struct!.postExtractionHookConfiguration),
    pre_extraction_hook_configuration: tfDataSourcePreExtractionHookConfigurationPropertyToTerraform(struct!.preExtractionHookConfiguration),
  }
}


export function tfDataSourceCustomDocumentEnrichmentConfigurationPropertyToHclTerraform(struct?: TfDataSource.CustomDocumentEnrichmentConfigurationPropertyOutputReference | TfDataSource.CustomDocumentEnrichmentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_configurations: {
      value: cdktn.listMapperHcl(tfDataSourceInlineConfigurationsPropertyToHclTerraform, true)(struct!.inlineConfigurations),
      isBlock: true,
      type: "set",
      storageClassType: "InlineConfigurationsPropertyList",
    },
    post_extraction_hook_configuration: {
      value: tfDataSourcePostExtractionHookConfigurationPropertyToHclTerraform(struct!.postExtractionHookConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PostExtractionHookConfigurationPropertyList",
    },
    pre_extraction_hook_configuration: {
      value: tfDataSourcePreExtractionHookConfigurationPropertyToHclTerraform(struct!.preExtractionHookConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PreExtractionHookConfigurationPropertyList",
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


export namespace TfDataSource {
export interface AccessControlListConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#key_path TfDataSource#key_path}
  */
  readonly keyPath?: string;
}
export class AccessControlListConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlListConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlListConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPath = value.keyPath;
    }
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }
}
export interface DocumentsMetadataConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#s3_prefix TfDataSource#s3_prefix}
  */
  readonly s3Prefix?: string;
}
export class DocumentsMetadataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentsMetadataConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentsMetadataConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Prefix = value.s3Prefix;
    }
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }
}
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#bucket_name TfDataSource#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#exclusion_patterns TfDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#inclusion_patterns TfDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#inclusion_prefixes TfDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
  /**
  * access_control_list_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#access_control_list_configuration TfDataSource#access_control_list_configuration}
  */
  readonly accessControlListConfiguration?: AccessControlListConfigurationProperty;
  /**
  * documents_metadata_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#documents_metadata_configuration TfDataSource#documents_metadata_configuration}
  */
  readonly documentsMetadataConfiguration?: DocumentsMetadataConfigurationProperty;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    if (this._accessControlListConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlListConfiguration = this._accessControlListConfiguration?.internalValue;
    }
    if (this._documentsMetadataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentsMetadataConfiguration = this._documentsMetadataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._exclusionPatterns = undefined;
      this._inclusionPatterns = undefined;
      this._inclusionPrefixes = undefined;
      this._accessControlListConfiguration.internalValue = undefined;
      this._documentsMetadataConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._exclusionPatterns = value.exclusionPatterns;
      this._inclusionPatterns = value.inclusionPatterns;
      this._inclusionPrefixes = value.inclusionPrefixes;
      this._accessControlListConfiguration.internalValue = value.accessControlListConfiguration;
      this._documentsMetadataConfiguration.internalValue = value.documentsMetadataConfiguration;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // exclusion_patterns - computed: false, optional: true, required: false
  private _exclusionPatterns?: string[]; 
  public get exclusionPatterns() {
    return cdktn.Fn.tolist(this.getListAttribute('exclusion_patterns'));
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // inclusion_patterns - computed: false, optional: true, required: false
  private _inclusionPatterns?: string[]; 
  public get inclusionPatterns() {
    return cdktn.Fn.tolist(this.getListAttribute('inclusion_patterns'));
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
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

  // access_control_list_configuration - computed: false, optional: true, required: false
  private _accessControlListConfiguration = new AccessControlListConfigurationPropertyOutputReference(this, "access_control_list_configuration");
  public get accessControlListConfiguration() {
    return this._accessControlListConfiguration;
  }
  public putAccessControlListConfiguration(value: AccessControlListConfigurationProperty) {
    this._accessControlListConfiguration.internalValue = value;
  }
  public resetAccessControlListConfiguration() {
    this._accessControlListConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListConfigurationInput() {
    return this._accessControlListConfiguration.internalValue;
  }

  // documents_metadata_configuration - computed: false, optional: true, required: false
  private _documentsMetadataConfiguration = new DocumentsMetadataConfigurationPropertyOutputReference(this, "documents_metadata_configuration");
  public get documentsMetadataConfiguration() {
    return this._documentsMetadataConfiguration;
  }
  public putDocumentsMetadataConfiguration(value: DocumentsMetadataConfigurationProperty) {
    this._documentsMetadataConfiguration.internalValue = value;
  }
  public resetDocumentsMetadataConfiguration() {
    this._documentsMetadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsMetadataConfigurationInput() {
    return this._documentsMetadataConfiguration.internalValue;
  }
}
export interface TemplateConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#template TfDataSource#template}
  */
  readonly template: string;
}
export class TemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface BasicAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#credentials TfDataSource#credentials}
  */
  readonly credentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#host TfDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#port TfDataSource#port}
  */
  readonly port: number;
}
export class BasicAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BasicAuthenticationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BasicAuthenticationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class BasicAuthenticationPropertyList extends cdktn.ComplexList {
  public internalValue? : BasicAuthenticationProperty[] | cdktn.IResolvable

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
  public get(index: number): BasicAuthenticationPropertyOutputReference {
    return new BasicAuthenticationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationConfigurationProperty {
  /**
  * basic_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#basic_authentication TfDataSource#basic_authentication}
  */
  readonly basicAuthentication?: BasicAuthenticationProperty[] | cdktn.IResolvable;
}
export class AuthenticationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthentication = this._basicAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthentication.internalValue = value.basicAuthentication;
    }
  }

  // basic_authentication - computed: false, optional: true, required: false
  private _basicAuthentication = new BasicAuthenticationPropertyList(this, "basic_authentication", true);
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
  public putBasicAuthentication(value: BasicAuthenticationProperty[] | cdktn.IResolvable) {
    this._basicAuthentication.internalValue = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication.internalValue;
  }
}
export interface ProxyConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#credentials TfDataSource#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#host TfDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#port TfDataSource#port}
  */
  readonly port: number;
}
export class ProxyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProxyConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProxyConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface SeedUrlConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#seed_urls TfDataSource#seed_urls}
  */
  readonly seedUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#web_crawler_mode TfDataSource#web_crawler_mode}
  */
  readonly webCrawlerMode?: string;
}
export class SeedUrlConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SeedUrlConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls;
    }
    if (this._webCrawlerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerMode = this._webCrawlerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeedUrlConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._seedUrls = undefined;
      this._webCrawlerMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._seedUrls = value.seedUrls;
      this._webCrawlerMode = value.webCrawlerMode;
    }
  }

  // seed_urls - computed: false, optional: false, required: true
  private _seedUrls?: string[]; 
  public get seedUrls() {
    return cdktn.Fn.tolist(this.getListAttribute('seed_urls'));
  }
  public set seedUrls(value: string[]) {
    this._seedUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls;
  }

  // web_crawler_mode - computed: false, optional: true, required: false
  private _webCrawlerMode?: string; 
  public get webCrawlerMode() {
    return this.getStringAttribute('web_crawler_mode');
  }
  public set webCrawlerMode(value: string) {
    this._webCrawlerMode = value;
  }
  public resetWebCrawlerMode() {
    this._webCrawlerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerModeInput() {
    return this._webCrawlerMode;
  }
}
export interface SiteMapsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#site_maps TfDataSource#site_maps}
  */
  readonly siteMaps: string[];
}
export class SiteMapsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteMapsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMaps = this._siteMaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMapsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteMaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteMaps = value.siteMaps;
    }
  }

  // site_maps - computed: false, optional: false, required: true
  private _siteMaps?: string[]; 
  public get siteMaps() {
    return cdktn.Fn.tolist(this.getListAttribute('site_maps'));
  }
  public set siteMaps(value: string[]) {
    this._siteMaps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsInput() {
    return this._siteMaps;
  }
}
export interface UrlsProperty {
  /**
  * seed_url_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#seed_url_configuration TfDataSource#seed_url_configuration}
  */
  readonly seedUrlConfiguration?: SeedUrlConfigurationProperty;
  /**
  * site_maps_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#site_maps_configuration TfDataSource#site_maps_configuration}
  */
  readonly siteMapsConfiguration?: SiteMapsConfigurationProperty;
}
export class UrlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrlConfiguration = this._seedUrlConfiguration?.internalValue;
    }
    if (this._siteMapsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMapsConfiguration = this._siteMapsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._seedUrlConfiguration.internalValue = undefined;
      this._siteMapsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._seedUrlConfiguration.internalValue = value.seedUrlConfiguration;
      this._siteMapsConfiguration.internalValue = value.siteMapsConfiguration;
    }
  }

  // seed_url_configuration - computed: false, optional: true, required: false
  private _seedUrlConfiguration = new SeedUrlConfigurationPropertyOutputReference(this, "seed_url_configuration");
  public get seedUrlConfiguration() {
    return this._seedUrlConfiguration;
  }
  public putSeedUrlConfiguration(value: SeedUrlConfigurationProperty) {
    this._seedUrlConfiguration.internalValue = value;
  }
  public resetSeedUrlConfiguration() {
    this._seedUrlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlConfigurationInput() {
    return this._seedUrlConfiguration.internalValue;
  }

  // site_maps_configuration - computed: false, optional: true, required: false
  private _siteMapsConfiguration = new SiteMapsConfigurationPropertyOutputReference(this, "site_maps_configuration");
  public get siteMapsConfiguration() {
    return this._siteMapsConfiguration;
  }
  public putSiteMapsConfiguration(value: SiteMapsConfigurationProperty) {
    this._siteMapsConfiguration.internalValue = value;
  }
  public resetSiteMapsConfiguration() {
    this._siteMapsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsConfigurationInput() {
    return this._siteMapsConfiguration.internalValue;
  }
}
export interface WebCrawlerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#crawl_depth TfDataSource#crawl_depth}
  */
  readonly crawlDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#max_content_size_per_page_in_mega_bytes TfDataSource#max_content_size_per_page_in_mega_bytes}
  */
  readonly maxContentSizePerPageInMegaBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#max_links_per_page TfDataSource#max_links_per_page}
  */
  readonly maxLinksPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#max_urls_per_minute_crawl_rate TfDataSource#max_urls_per_minute_crawl_rate}
  */
  readonly maxUrlsPerMinuteCrawlRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#url_exclusion_patterns TfDataSource#url_exclusion_patterns}
  */
  readonly urlExclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#url_inclusion_patterns TfDataSource#url_inclusion_patterns}
  */
  readonly urlInclusionPatterns?: string[];
  /**
  * authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#authentication_configuration TfDataSource#authentication_configuration}
  */
  readonly authenticationConfiguration?: AuthenticationConfigurationProperty;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#proxy_configuration TfDataSource#proxy_configuration}
  */
  readonly proxyConfiguration?: ProxyConfigurationProperty;
  /**
  * urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#urls TfDataSource#urls}
  */
  readonly urls: UrlsProperty;
}
export class WebCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCrawlerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlDepth = this._crawlDepth;
    }
    if (this._maxContentSizePerPageInMegaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContentSizePerPageInMegaBytes = this._maxContentSizePerPageInMegaBytes;
    }
    if (this._maxLinksPerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksPerPage = this._maxLinksPerPage;
    }
    if (this._maxUrlsPerMinuteCrawlRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlsPerMinuteCrawlRate = this._maxUrlsPerMinuteCrawlRate;
    }
    if (this._urlExclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlExclusionPatterns = this._urlExclusionPatterns;
    }
    if (this._urlInclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInclusionPatterns = this._urlInclusionPatterns;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    if (this._proxyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfiguration = this._proxyConfiguration?.internalValue;
    }
    if (this._urls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCrawlerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crawlDepth = undefined;
      this._maxContentSizePerPageInMegaBytes = undefined;
      this._maxLinksPerPage = undefined;
      this._maxUrlsPerMinuteCrawlRate = undefined;
      this._urlExclusionPatterns = undefined;
      this._urlInclusionPatterns = undefined;
      this._authenticationConfiguration.internalValue = undefined;
      this._proxyConfiguration.internalValue = undefined;
      this._urls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crawlDepth = value.crawlDepth;
      this._maxContentSizePerPageInMegaBytes = value.maxContentSizePerPageInMegaBytes;
      this._maxLinksPerPage = value.maxLinksPerPage;
      this._maxUrlsPerMinuteCrawlRate = value.maxUrlsPerMinuteCrawlRate;
      this._urlExclusionPatterns = value.urlExclusionPatterns;
      this._urlInclusionPatterns = value.urlInclusionPatterns;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
      this._proxyConfiguration.internalValue = value.proxyConfiguration;
      this._urls.internalValue = value.urls;
    }
  }

  // crawl_depth - computed: false, optional: true, required: false
  private _crawlDepth?: number; 
  public get crawlDepth() {
    return this.getNumberAttribute('crawl_depth');
  }
  public set crawlDepth(value: number) {
    this._crawlDepth = value;
  }
  public resetCrawlDepth() {
    this._crawlDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlDepthInput() {
    return this._crawlDepth;
  }

  // max_content_size_per_page_in_mega_bytes - computed: false, optional: true, required: false
  private _maxContentSizePerPageInMegaBytes?: number; 
  public get maxContentSizePerPageInMegaBytes() {
    return this.getNumberAttribute('max_content_size_per_page_in_mega_bytes');
  }
  public set maxContentSizePerPageInMegaBytes(value: number) {
    this._maxContentSizePerPageInMegaBytes = value;
  }
  public resetMaxContentSizePerPageInMegaBytes() {
    this._maxContentSizePerPageInMegaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContentSizePerPageInMegaBytesInput() {
    return this._maxContentSizePerPageInMegaBytes;
  }

  // max_links_per_page - computed: false, optional: true, required: false
  private _maxLinksPerPage?: number; 
  public get maxLinksPerPage() {
    return this.getNumberAttribute('max_links_per_page');
  }
  public set maxLinksPerPage(value: number) {
    this._maxLinksPerPage = value;
  }
  public resetMaxLinksPerPage() {
    this._maxLinksPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksPerPageInput() {
    return this._maxLinksPerPage;
  }

  // max_urls_per_minute_crawl_rate - computed: false, optional: true, required: false
  private _maxUrlsPerMinuteCrawlRate?: number; 
  public get maxUrlsPerMinuteCrawlRate() {
    return this.getNumberAttribute('max_urls_per_minute_crawl_rate');
  }
  public set maxUrlsPerMinuteCrawlRate(value: number) {
    this._maxUrlsPerMinuteCrawlRate = value;
  }
  public resetMaxUrlsPerMinuteCrawlRate() {
    this._maxUrlsPerMinuteCrawlRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlsPerMinuteCrawlRateInput() {
    return this._maxUrlsPerMinuteCrawlRate;
  }

  // url_exclusion_patterns - computed: false, optional: true, required: false
  private _urlExclusionPatterns?: string[]; 
  public get urlExclusionPatterns() {
    return cdktn.Fn.tolist(this.getListAttribute('url_exclusion_patterns'));
  }
  public set urlExclusionPatterns(value: string[]) {
    this._urlExclusionPatterns = value;
  }
  public resetUrlExclusionPatterns() {
    this._urlExclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExclusionPatternsInput() {
    return this._urlExclusionPatterns;
  }

  // url_inclusion_patterns - computed: false, optional: true, required: false
  private _urlInclusionPatterns?: string[]; 
  public get urlInclusionPatterns() {
    return cdktn.Fn.tolist(this.getListAttribute('url_inclusion_patterns'));
  }
  public set urlInclusionPatterns(value: string[]) {
    this._urlInclusionPatterns = value;
  }
  public resetUrlInclusionPatterns() {
    this._urlInclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInclusionPatternsInput() {
    return this._urlInclusionPatterns;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new AuthenticationConfigurationPropertyOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: AuthenticationConfigurationProperty) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new ProxyConfigurationPropertyOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: ProxyConfigurationProperty) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // urls - computed: false, optional: false, required: true
  private _urls = new UrlsPropertyOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }
  public putUrls(value: UrlsProperty) {
    this._urls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls.internalValue;
  }
}
export interface ConfigurationProperty {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#s3_configuration TfDataSource#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty;
  /**
  * template_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#template_configuration TfDataSource#template_configuration}
  */
  readonly templateConfiguration?: TemplateConfigurationProperty;
  /**
  * web_crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#web_crawler_configuration TfDataSource#web_crawler_configuration}
  */
  readonly webCrawlerConfiguration?: WebCrawlerConfigurationProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._templateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
    }
    if (this._webCrawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerConfiguration = this._webCrawlerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
      this._templateConfiguration.internalValue = undefined;
      this._webCrawlerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._templateConfiguration.internalValue = value.templateConfiguration;
      this._webCrawlerConfiguration.internalValue = value.webCrawlerConfiguration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // template_configuration - computed: false, optional: true, required: false
  private _templateConfiguration = new TemplateConfigurationPropertyOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: TemplateConfigurationProperty) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }

  // web_crawler_configuration - computed: false, optional: true, required: false
  private _webCrawlerConfiguration = new WebCrawlerConfigurationPropertyOutputReference(this, "web_crawler_configuration");
  public get webCrawlerConfiguration() {
    return this._webCrawlerConfiguration;
  }
  public putWebCrawlerConfiguration(value: WebCrawlerConfigurationProperty) {
    this._webCrawlerConfiguration.internalValue = value;
  }
  public resetWebCrawlerConfiguration() {
    this._webCrawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerConfigurationInput() {
    return this._webCrawlerConfiguration.internalValue;
  }
}
export interface CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#date_value TfDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#long_value TfDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_list_value TfDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_value TfDataSource#string_value}
  */
  readonly stringValue?: string;
}
export class CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktn.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface ConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_document_attribute_key TfDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#operator TfDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_on_value TfDataSource#condition_on_value}
  */
  readonly conditionOnValue?: CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValuePropertyOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: CustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueProperty) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface TargetDocumentAttributeValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#date_value TfDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#long_value TfDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_list_value TfDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_value TfDataSource#string_value}
  */
  readonly stringValue?: string;
}
export class TargetDocumentAttributeValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetDocumentAttributeValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetDocumentAttributeValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktn.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface TargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#target_document_attribute_key TfDataSource#target_document_attribute_key}
  */
  readonly targetDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#target_document_attribute_value_deletion TfDataSource#target_document_attribute_value_deletion}
  */
  readonly targetDocumentAttributeValueDeletion?: boolean | cdktn.IResolvable;
  /**
  * target_document_attribute_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#target_document_attribute_value TfDataSource#target_document_attribute_value}
  */
  readonly targetDocumentAttributeValue?: TargetDocumentAttributeValueProperty;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeKey = this._targetDocumentAttributeKey;
    }
    if (this._targetDocumentAttributeValueDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValueDeletion = this._targetDocumentAttributeValueDeletion;
    }
    if (this._targetDocumentAttributeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValue = this._targetDocumentAttributeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetDocumentAttributeKey = undefined;
      this._targetDocumentAttributeValueDeletion = undefined;
      this._targetDocumentAttributeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetDocumentAttributeKey = value.targetDocumentAttributeKey;
      this._targetDocumentAttributeValueDeletion = value.targetDocumentAttributeValueDeletion;
      this._targetDocumentAttributeValue.internalValue = value.targetDocumentAttributeValue;
    }
  }

  // target_document_attribute_key - computed: false, optional: true, required: false
  private _targetDocumentAttributeKey?: string; 
  public get targetDocumentAttributeKey() {
    return this.getStringAttribute('target_document_attribute_key');
  }
  public set targetDocumentAttributeKey(value: string) {
    this._targetDocumentAttributeKey = value;
  }
  public resetTargetDocumentAttributeKey() {
    this._targetDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeKeyInput() {
    return this._targetDocumentAttributeKey;
  }

  // target_document_attribute_value_deletion - computed: false, optional: true, required: false
  private _targetDocumentAttributeValueDeletion?: boolean | cdktn.IResolvable; 
  public get targetDocumentAttributeValueDeletion() {
    return this.getBooleanAttribute('target_document_attribute_value_deletion');
  }
  public set targetDocumentAttributeValueDeletion(value: boolean | cdktn.IResolvable) {
    this._targetDocumentAttributeValueDeletion = value;
  }
  public resetTargetDocumentAttributeValueDeletion() {
    this._targetDocumentAttributeValueDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueDeletionInput() {
    return this._targetDocumentAttributeValueDeletion;
  }

  // target_document_attribute_value - computed: false, optional: true, required: false
  private _targetDocumentAttributeValue = new TargetDocumentAttributeValuePropertyOutputReference(this, "target_document_attribute_value");
  public get targetDocumentAttributeValue() {
    return this._targetDocumentAttributeValue;
  }
  public putTargetDocumentAttributeValue(value: TargetDocumentAttributeValueProperty) {
    this._targetDocumentAttributeValue.internalValue = value;
  }
  public resetTargetDocumentAttributeValue() {
    this._targetDocumentAttributeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueInput() {
    return this._targetDocumentAttributeValue.internalValue;
  }
}
export interface InlineConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#document_content_deletion TfDataSource#document_content_deletion}
  */
  readonly documentContentDeletion?: boolean | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition TfDataSource#condition}
  */
  readonly condition?: ConditionProperty;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#target TfDataSource#target}
  */
  readonly target?: TargetProperty;
}
export class InlineConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InlineConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentContentDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentContentDeletion = this._documentContentDeletion;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InlineConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentContentDeletion = undefined;
      this._condition.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentContentDeletion = value.documentContentDeletion;
      this._condition.internalValue = value.condition;
      this._target.internalValue = value.target;
    }
  }

  // document_content_deletion - computed: false, optional: true, required: false
  private _documentContentDeletion?: boolean | cdktn.IResolvable; 
  public get documentContentDeletion() {
    return this.getBooleanAttribute('document_content_deletion');
  }
  public set documentContentDeletion(value: boolean | cdktn.IResolvable) {
    this._documentContentDeletion = value;
  }
  public resetDocumentContentDeletion() {
    this._documentContentDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentContentDeletionInput() {
    return this._documentContentDeletion;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ConditionPropertyOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ConditionProperty) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new TargetPropertyOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: TargetProperty) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class InlineConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : InlineConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): InlineConfigurationsPropertyOutputReference {
    return new InlineConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#date_value TfDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#long_value TfDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_list_value TfDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_value TfDataSource#string_value}
  */
  readonly stringValue?: string;
}
export class CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktn.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_document_attribute_key TfDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#operator TfDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_on_value TfDataSource#condition_on_value}
  */
  readonly conditionOnValue?: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty;
}
export class CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueProperty) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface PostExtractionHookConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#lambda_arn TfDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#s3_bucket TfDataSource#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * invocation_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#invocation_condition TfDataSource#invocation_condition}
  */
  readonly invocationCondition?: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty;
}
export class PostExtractionHookConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostExtractionHookConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostExtractionHookConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
      this._invocationCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
      this._invocationCondition.internalValue = value.invocationCondition;
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

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // invocation_condition - computed: false, optional: true, required: false
  private _invocationCondition = new CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: CustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }
}
export interface CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#date_value TfDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#long_value TfDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_list_value TfDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#string_value TfDataSource#string_value}
  */
  readonly stringValue?: string;
}
export class CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktn.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_document_attribute_key TfDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#operator TfDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#condition_on_value TfDataSource#condition_on_value}
  */
  readonly conditionOnValue?: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty;
}
export class CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValuePropertyOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueProperty) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface PreExtractionHookConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#lambda_arn TfDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#s3_bucket TfDataSource#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * invocation_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#invocation_condition TfDataSource#invocation_condition}
  */
  readonly invocationCondition?: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty;
}
export class PreExtractionHookConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreExtractionHookConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreExtractionHookConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
      this._invocationCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
      this._invocationCondition.internalValue = value.invocationCondition;
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

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // invocation_condition - computed: false, optional: true, required: false
  private _invocationCondition = new CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: CustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }
}
export interface CustomDocumentEnrichmentConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#role_arn TfDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * inline_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#inline_configurations TfDataSource#inline_configurations}
  */
  readonly inlineConfigurations?: InlineConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * post_extraction_hook_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#post_extraction_hook_configuration TfDataSource#post_extraction_hook_configuration}
  */
  readonly postExtractionHookConfiguration?: PostExtractionHookConfigurationProperty;
  /**
  * pre_extraction_hook_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#pre_extraction_hook_configuration TfDataSource#pre_extraction_hook_configuration}
  */
  readonly preExtractionHookConfiguration?: PreExtractionHookConfigurationProperty;
}
export class CustomDocumentEnrichmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDocumentEnrichmentConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._inlineConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineConfigurations = this._inlineConfigurations?.internalValue;
    }
    if (this._postExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postExtractionHookConfiguration = this._postExtractionHookConfiguration?.internalValue;
    }
    if (this._preExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExtractionHookConfiguration = this._preExtractionHookConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDocumentEnrichmentConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._inlineConfigurations.internalValue = undefined;
      this._postExtractionHookConfiguration.internalValue = undefined;
      this._preExtractionHookConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._inlineConfigurations.internalValue = value.inlineConfigurations;
      this._postExtractionHookConfiguration.internalValue = value.postExtractionHookConfiguration;
      this._preExtractionHookConfiguration.internalValue = value.preExtractionHookConfiguration;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // inline_configurations - computed: false, optional: true, required: false
  private _inlineConfigurations = new InlineConfigurationsPropertyList(this, "inline_configurations", true);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }
  public putInlineConfigurations(value: InlineConfigurationsProperty[] | cdktn.IResolvable) {
    this._inlineConfigurations.internalValue = value;
  }
  public resetInlineConfigurations() {
    this._inlineConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineConfigurationsInput() {
    return this._inlineConfigurations.internalValue;
  }

  // post_extraction_hook_configuration - computed: false, optional: true, required: false
  private _postExtractionHookConfiguration = new PostExtractionHookConfigurationPropertyOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }
  public putPostExtractionHookConfiguration(value: PostExtractionHookConfigurationProperty) {
    this._postExtractionHookConfiguration.internalValue = value;
  }
  public resetPostExtractionHookConfiguration() {
    this._postExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postExtractionHookConfigurationInput() {
    return this._postExtractionHookConfiguration.internalValue;
  }

  // pre_extraction_hook_configuration - computed: false, optional: true, required: false
  private _preExtractionHookConfiguration = new PreExtractionHookConfigurationPropertyOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }
  public putPreExtractionHookConfiguration(value: PreExtractionHookConfigurationProperty) {
    this._preExtractionHookConfiguration.internalValue = value;
  }
  public resetPreExtractionHookConfiguration() {
    this._preExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExtractionHookConfigurationInput() {
    return this._preExtractionHookConfiguration.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#create TfDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#delete TfDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_data_source#update TfDataSource#update}
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
