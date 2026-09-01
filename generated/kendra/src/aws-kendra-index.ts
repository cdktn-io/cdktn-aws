// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsKendraIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#description AwsKendraIndex#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#edition AwsKendraIndex#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#id AwsKendraIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#name AwsKendraIndex#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#region AwsKendraIndex#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#role_arn AwsKendraIndex#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#tags AwsKendraIndex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#tags_all AwsKendraIndex#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_context_policy AwsKendraIndex#user_context_policy}
  */
  readonly userContextPolicy?: string;
  /**
  * capacity_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#capacity_units AwsKendraIndex#capacity_units}
  */
  readonly capacityUnits?: AwsKendraIndex.CapacityUnitsProperty;
  /**
  * document_metadata_configuration_updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#document_metadata_configuration_updates AwsKendraIndex#document_metadata_configuration_updates}
  */
  readonly documentMetadataConfigurationUpdates?: AwsKendraIndex.DocumentMetadataConfigurationUpdatesProperty[] | cdktn.IResolvable;
  /**
  * server_side_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#server_side_encryption_configuration AwsKendraIndex#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: AwsKendraIndex.ServerSideEncryptionConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#timeouts AwsKendraIndex#timeouts}
  */
  readonly timeouts?: AwsKendraIndex.TimeoutsProperty;
  /**
  * user_group_resolution_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_group_resolution_configuration AwsKendraIndex#user_group_resolution_configuration}
  */
  readonly userGroupResolutionConfiguration?: AwsKendraIndex.UserGroupResolutionConfigurationProperty;
  /**
  * user_token_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_token_configurations AwsKendraIndex#user_token_configurations}
  */
  readonly userTokenConfigurations?: AwsKendraIndex.UserTokenConfigurationsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index aws_kendra_index}
*/
export class AwsKendraIndex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsKendraIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsKendraIndex to import
  * @param importFromId The id of the existing AwsKendraIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsKendraIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kendra_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index aws_kendra_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsKendraIndexConfig
  */
  public constructor(scope: Construct, id: string, config: AwsKendraIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_index',
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
    this._edition = config.edition;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userContextPolicy = config.userContextPolicy;
    this._capacityUnits.internalValue = config.capacityUnits;
    this._documentMetadataConfigurationUpdates.internalValue = config.documentMetadataConfigurationUpdates;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._userGroupResolutionConfiguration.internalValue = config.userGroupResolutionConfiguration;
    this._userTokenConfigurations.internalValue = config.userTokenConfigurations;
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

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
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

  // index_statistics - computed: true, optional: false, required: false
  private _indexStatistics = new AwsKendraIndex.IndexStatisticsPropertyList(this, "index_statistics", false);
  public get indexStatistics() {
    return this._indexStatistics;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_context_policy - computed: false, optional: true, required: false
  private _userContextPolicy?: string; 
  public get userContextPolicy() {
    return this.getStringAttribute('user_context_policy');
  }
  public set userContextPolicy(value: string) {
    this._userContextPolicy = value;
  }
  public resetUserContextPolicy() {
    this._userContextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userContextPolicyInput() {
    return this._userContextPolicy;
  }

  // capacity_units - computed: false, optional: true, required: false
  private _capacityUnits = new AwsKendraIndex.CapacityUnitsPropertyOutputReference(this, "capacity_units");
  public get capacityUnits() {
    return this._capacityUnits;
  }
  public putCapacityUnits(value: AwsKendraIndex.CapacityUnitsProperty) {
    this._capacityUnits.internalValue = value;
  }
  public resetCapacityUnits() {
    this._capacityUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitsInput() {
    return this._capacityUnits.internalValue;
  }

  // document_metadata_configuration_updates - computed: false, optional: true, required: false
  private _documentMetadataConfigurationUpdates = new AwsKendraIndex.DocumentMetadataConfigurationUpdatesPropertyList(this, "document_metadata_configuration_updates", true);
  public get documentMetadataConfigurationUpdates() {
    return this._documentMetadataConfigurationUpdates;
  }
  public putDocumentMetadataConfigurationUpdates(value: AwsKendraIndex.DocumentMetadataConfigurationUpdatesProperty[] | cdktn.IResolvable) {
    this._documentMetadataConfigurationUpdates.internalValue = value;
  }
  public resetDocumentMetadataConfigurationUpdates() {
    this._documentMetadataConfigurationUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentMetadataConfigurationUpdatesInput() {
    return this._documentMetadataConfigurationUpdates.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new AwsKendraIndex.ServerSideEncryptionConfigurationPropertyOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: AwsKendraIndex.ServerSideEncryptionConfigurationProperty) {
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
  private _timeouts = new AwsKendraIndex.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsKendraIndex.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_group_resolution_configuration - computed: false, optional: true, required: false
  private _userGroupResolutionConfiguration = new AwsKendraIndex.UserGroupResolutionConfigurationPropertyOutputReference(this, "user_group_resolution_configuration");
  public get userGroupResolutionConfiguration() {
    return this._userGroupResolutionConfiguration;
  }
  public putUserGroupResolutionConfiguration(value: AwsKendraIndex.UserGroupResolutionConfigurationProperty) {
    this._userGroupResolutionConfiguration.internalValue = value;
  }
  public resetUserGroupResolutionConfiguration() {
    this._userGroupResolutionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupResolutionConfigurationInput() {
    return this._userGroupResolutionConfiguration.internalValue;
  }

  // user_token_configurations - computed: false, optional: true, required: false
  private _userTokenConfigurations = new AwsKendraIndex.UserTokenConfigurationsPropertyOutputReference(this, "user_token_configurations");
  public get userTokenConfigurations() {
    return this._userTokenConfigurations;
  }
  public putUserTokenConfigurations(value: AwsKendraIndex.UserTokenConfigurationsProperty) {
    this._userTokenConfigurations.internalValue = value;
  }
  public resetUserTokenConfigurations() {
    this._userTokenConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenConfigurationsInput() {
    return this._userTokenConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      edition: cdktn.stringToTerraform(this._edition),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      user_context_policy: cdktn.stringToTerraform(this._userContextPolicy),
      capacity_units: awsKendraIndexCapacityUnitsPropertyToTerraform(this._capacityUnits.internalValue),
      document_metadata_configuration_updates: cdktn.listMapper(awsKendraIndexDocumentMetadataConfigurationUpdatesPropertyToTerraform, true)(this._documentMetadataConfigurationUpdates.internalValue),
      server_side_encryption_configuration: awsKendraIndexServerSideEncryptionConfigurationPropertyToTerraform(this._serverSideEncryptionConfiguration.internalValue),
      timeouts: awsKendraIndexTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      user_group_resolution_configuration: awsKendraIndexUserGroupResolutionConfigurationPropertyToTerraform(this._userGroupResolutionConfiguration.internalValue),
      user_token_configurations: awsKendraIndexUserTokenConfigurationsPropertyToTerraform(this._userTokenConfigurations.internalValue),
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
      edition: {
        value: cdktn.stringToHclTerraform(this._edition),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      user_context_policy: {
        value: cdktn.stringToHclTerraform(this._userContextPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_units: {
        value: awsKendraIndexCapacityUnitsPropertyToHclTerraform(this._capacityUnits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKendraIndex.CapacityUnitsPropertyList",
      },
      document_metadata_configuration_updates: {
        value: cdktn.listMapperHcl(awsKendraIndexDocumentMetadataConfigurationUpdatesPropertyToHclTerraform, true)(this._documentMetadataConfigurationUpdates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsKendraIndex.DocumentMetadataConfigurationUpdatesPropertyList",
      },
      server_side_encryption_configuration: {
        value: awsKendraIndexServerSideEncryptionConfigurationPropertyToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKendraIndex.ServerSideEncryptionConfigurationPropertyList",
      },
      timeouts: {
        value: awsKendraIndexTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsKendraIndex.TimeoutsProperty",
      },
      user_group_resolution_configuration: {
        value: awsKendraIndexUserGroupResolutionConfigurationPropertyToHclTerraform(this._userGroupResolutionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKendraIndex.UserGroupResolutionConfigurationPropertyList",
      },
      user_token_configurations: {
        value: awsKendraIndexUserTokenConfigurationsPropertyToHclTerraform(this._userTokenConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKendraIndex.UserTokenConfigurationsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsKendraIndexFaqStatisticsPropertyToTerraform(struct?: AwsKendraIndex.FaqStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsKendraIndexFaqStatisticsPropertyToHclTerraform(struct?: AwsKendraIndex.FaqStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsKendraIndexTextDocumentStatisticsPropertyToTerraform(struct?: AwsKendraIndex.TextDocumentStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsKendraIndexTextDocumentStatisticsPropertyToHclTerraform(struct?: AwsKendraIndex.TextDocumentStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsKendraIndexIndexStatisticsPropertyToTerraform(struct?: AwsKendraIndex.IndexStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsKendraIndexIndexStatisticsPropertyToHclTerraform(struct?: AwsKendraIndex.IndexStatisticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsKendraIndexCapacityUnitsPropertyToTerraform(struct?: AwsKendraIndex.CapacityUnitsPropertyOutputReference | AwsKendraIndex.CapacityUnitsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_capacity_units: cdktn.numberToTerraform(struct!.queryCapacityUnits),
    storage_capacity_units: cdktn.numberToTerraform(struct!.storageCapacityUnits),
  }
}


export function awsKendraIndexCapacityUnitsPropertyToHclTerraform(struct?: AwsKendraIndex.CapacityUnitsPropertyOutputReference | AwsKendraIndex.CapacityUnitsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.queryCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.storageCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexRelevancePropertyToTerraform(struct?: AwsKendraIndex.RelevancePropertyOutputReference | AwsKendraIndex.RelevanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    freshness: cdktn.booleanToTerraform(struct!.freshness),
    importance: cdktn.numberToTerraform(struct!.importance),
    rank_order: cdktn.stringToTerraform(struct!.rankOrder),
    values_importance_map: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.valuesImportanceMap),
  }
}


export function awsKendraIndexRelevancePropertyToHclTerraform(struct?: AwsKendraIndex.RelevancePropertyOutputReference | AwsKendraIndex.RelevanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freshness: {
      value: cdktn.booleanToHclTerraform(struct!.freshness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    importance: {
      value: cdktn.numberToHclTerraform(struct!.importance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rank_order: {
      value: cdktn.stringToHclTerraform(struct!.rankOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_importance_map: {
      value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.valuesImportanceMap),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexSearchPropertyToTerraform(struct?: AwsKendraIndex.SearchPropertyOutputReference | AwsKendraIndex.SearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    displayable: cdktn.booleanToTerraform(struct!.displayable),
    facetable: cdktn.booleanToTerraform(struct!.facetable),
    searchable: cdktn.booleanToTerraform(struct!.searchable),
    sortable: cdktn.booleanToTerraform(struct!.sortable),
  }
}


export function awsKendraIndexSearchPropertyToHclTerraform(struct?: AwsKendraIndex.SearchPropertyOutputReference | AwsKendraIndex.SearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    displayable: {
      value: cdktn.booleanToHclTerraform(struct!.displayable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    facetable: {
      value: cdktn.booleanToHclTerraform(struct!.facetable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    searchable: {
      value: cdktn.booleanToHclTerraform(struct!.searchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sortable: {
      value: cdktn.booleanToHclTerraform(struct!.sortable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexDocumentMetadataConfigurationUpdatesPropertyToTerraform(struct?: AwsKendraIndex.DocumentMetadataConfigurationUpdatesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    relevance: awsKendraIndexRelevancePropertyToTerraform(struct!.relevance),
    search: awsKendraIndexSearchPropertyToTerraform(struct!.search),
  }
}


export function awsKendraIndexDocumentMetadataConfigurationUpdatesPropertyToHclTerraform(struct?: AwsKendraIndex.DocumentMetadataConfigurationUpdatesProperty | cdktn.IResolvable): any {
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
    relevance: {
      value: awsKendraIndexRelevancePropertyToHclTerraform(struct!.relevance),
      isBlock: true,
      type: "list",
      storageClassType: "RelevancePropertyList",
    },
    search: {
      value: awsKendraIndexSearchPropertyToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "SearchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexServerSideEncryptionConfigurationPropertyToTerraform(struct?: AwsKendraIndex.ServerSideEncryptionConfigurationPropertyOutputReference | AwsKendraIndex.ServerSideEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function awsKendraIndexServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: AwsKendraIndex.ServerSideEncryptionConfigurationPropertyOutputReference | AwsKendraIndex.ServerSideEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexTimeoutsPropertyToTerraform(struct?: AwsKendraIndex.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsKendraIndexTimeoutsPropertyToHclTerraform(struct?: AwsKendraIndex.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsKendraIndexUserGroupResolutionConfigurationPropertyToTerraform(struct?: AwsKendraIndex.UserGroupResolutionConfigurationPropertyOutputReference | AwsKendraIndex.UserGroupResolutionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    user_group_resolution_mode: cdktn.stringToTerraform(struct!.userGroupResolutionMode),
  }
}


export function awsKendraIndexUserGroupResolutionConfigurationPropertyToHclTerraform(struct?: AwsKendraIndex.UserGroupResolutionConfigurationPropertyOutputReference | AwsKendraIndex.UserGroupResolutionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    user_group_resolution_mode: {
      value: cdktn.stringToHclTerraform(struct!.userGroupResolutionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexJsonTokenTypeConfigurationPropertyToTerraform(struct?: AwsKendraIndex.JsonTokenTypeConfigurationPropertyOutputReference | AwsKendraIndex.JsonTokenTypeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_attribute_field: cdktn.stringToTerraform(struct!.groupAttributeField),
    user_name_attribute_field: cdktn.stringToTerraform(struct!.userNameAttributeField),
  }
}


export function awsKendraIndexJsonTokenTypeConfigurationPropertyToHclTerraform(struct?: AwsKendraIndex.JsonTokenTypeConfigurationPropertyOutputReference | AwsKendraIndex.JsonTokenTypeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_attribute_field: {
      value: cdktn.stringToHclTerraform(struct!.groupAttributeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_attribute_field: {
      value: cdktn.stringToHclTerraform(struct!.userNameAttributeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexJwtTokenTypeConfigurationPropertyToTerraform(struct?: AwsKendraIndex.JwtTokenTypeConfigurationPropertyOutputReference | AwsKendraIndex.JwtTokenTypeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_regex: cdktn.stringToTerraform(struct!.claimRegex),
    group_attribute_field: cdktn.stringToTerraform(struct!.groupAttributeField),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    key_location: cdktn.stringToTerraform(struct!.keyLocation),
    secrets_manager_arn: cdktn.stringToTerraform(struct!.secretsManagerArn),
    url: cdktn.stringToTerraform(struct!.url),
    user_name_attribute_field: cdktn.stringToTerraform(struct!.userNameAttributeField),
  }
}


export function awsKendraIndexJwtTokenTypeConfigurationPropertyToHclTerraform(struct?: AwsKendraIndex.JwtTokenTypeConfigurationPropertyOutputReference | AwsKendraIndex.JwtTokenTypeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_regex: {
      value: cdktn.stringToHclTerraform(struct!.claimRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_attribute_field: {
      value: cdktn.stringToHclTerraform(struct!.groupAttributeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_location: {
      value: cdktn.stringToHclTerraform(struct!.keyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_attribute_field: {
      value: cdktn.stringToHclTerraform(struct!.userNameAttributeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKendraIndexUserTokenConfigurationsPropertyToTerraform(struct?: AwsKendraIndex.UserTokenConfigurationsPropertyOutputReference | AwsKendraIndex.UserTokenConfigurationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_token_type_configuration: awsKendraIndexJsonTokenTypeConfigurationPropertyToTerraform(struct!.jsonTokenTypeConfiguration),
    jwt_token_type_configuration: awsKendraIndexJwtTokenTypeConfigurationPropertyToTerraform(struct!.jwtTokenTypeConfiguration),
  }
}


export function awsKendraIndexUserTokenConfigurationsPropertyToHclTerraform(struct?: AwsKendraIndex.UserTokenConfigurationsPropertyOutputReference | AwsKendraIndex.UserTokenConfigurationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_token_type_configuration: {
      value: awsKendraIndexJsonTokenTypeConfigurationPropertyToHclTerraform(struct!.jsonTokenTypeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "JsonTokenTypeConfigurationPropertyList",
    },
    jwt_token_type_configuration: {
      value: awsKendraIndexJwtTokenTypeConfigurationPropertyToHclTerraform(struct!.jwtTokenTypeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "JwtTokenTypeConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsKendraIndex {
export interface FaqStatisticsProperty {
}
export class FaqStatisticsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FaqStatisticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FaqStatisticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indexed_question_answers_count - computed: true, optional: false, required: false
  public get indexedQuestionAnswersCount() {
    return this.getNumberAttribute('indexed_question_answers_count');
  }
}

export class FaqStatisticsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): FaqStatisticsPropertyOutputReference {
    return new FaqStatisticsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TextDocumentStatisticsProperty {
}
export class TextDocumentStatisticsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TextDocumentStatisticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TextDocumentStatisticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indexed_text_bytes - computed: true, optional: false, required: false
  public get indexedTextBytes() {
    return this.getNumberAttribute('indexed_text_bytes');
  }

  // indexed_text_documents_count - computed: true, optional: false, required: false
  public get indexedTextDocumentsCount() {
    return this.getNumberAttribute('indexed_text_documents_count');
  }
}

export class TextDocumentStatisticsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TextDocumentStatisticsPropertyOutputReference {
    return new TextDocumentStatisticsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IndexStatisticsProperty {
}
export class IndexStatisticsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IndexStatisticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexStatisticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // faq_statistics - computed: true, optional: false, required: false
  private _faqStatistics = new FaqStatisticsPropertyList(this, "faq_statistics", false);
  public get faqStatistics() {
    return this._faqStatistics;
  }

  // text_document_statistics - computed: true, optional: false, required: false
  private _textDocumentStatistics = new TextDocumentStatisticsPropertyList(this, "text_document_statistics", false);
  public get textDocumentStatistics() {
    return this._textDocumentStatistics;
  }
}

export class IndexStatisticsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): IndexStatisticsPropertyOutputReference {
    return new IndexStatisticsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityUnitsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#query_capacity_units AwsKendraIndex#query_capacity_units}
  */
  readonly queryCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#storage_capacity_units AwsKendraIndex#storage_capacity_units}
  */
  readonly storageCapacityUnits?: number;
}
export class CapacityUnitsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityUnitsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCapacityUnits = this._queryCapacityUnits;
    }
    if (this._storageCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityUnits = this._storageCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityUnitsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryCapacityUnits = undefined;
      this._storageCapacityUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryCapacityUnits = value.queryCapacityUnits;
      this._storageCapacityUnits = value.storageCapacityUnits;
    }
  }

  // query_capacity_units - computed: true, optional: true, required: false
  private _queryCapacityUnits?: number; 
  public get queryCapacityUnits() {
    return this.getNumberAttribute('query_capacity_units');
  }
  public set queryCapacityUnits(value: number) {
    this._queryCapacityUnits = value;
  }
  public resetQueryCapacityUnits() {
    this._queryCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCapacityUnitsInput() {
    return this._queryCapacityUnits;
  }

  // storage_capacity_units - computed: true, optional: true, required: false
  private _storageCapacityUnits?: number; 
  public get storageCapacityUnits() {
    return this.getNumberAttribute('storage_capacity_units');
  }
  public set storageCapacityUnits(value: number) {
    this._storageCapacityUnits = value;
  }
  public resetStorageCapacityUnits() {
    this._storageCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityUnitsInput() {
    return this._storageCapacityUnits;
  }
}
export interface RelevanceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#duration AwsKendraIndex#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#freshness AwsKendraIndex#freshness}
  */
  readonly freshness?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#importance AwsKendraIndex#importance}
  */
  readonly importance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#rank_order AwsKendraIndex#rank_order}
  */
  readonly rankOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#values_importance_map AwsKendraIndex#values_importance_map}
  */
  readonly valuesImportanceMap?: { [key: string]: number };
}
export class RelevancePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RelevanceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._freshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.freshness = this._freshness;
    }
    if (this._importance !== undefined) {
      hasAnyValues = true;
      internalValueResult.importance = this._importance;
    }
    if (this._rankOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rankOrder = this._rankOrder;
    }
    if (this._valuesImportanceMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesImportanceMap = this._valuesImportanceMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelevanceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._freshness = undefined;
      this._importance = undefined;
      this._rankOrder = undefined;
      this._valuesImportanceMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._freshness = value.freshness;
      this._importance = value.importance;
      this._rankOrder = value.rankOrder;
      this._valuesImportanceMap = value.valuesImportanceMap;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // freshness - computed: true, optional: true, required: false
  private _freshness?: boolean | cdktn.IResolvable; 
  public get freshness() {
    return this.getBooleanAttribute('freshness');
  }
  public set freshness(value: boolean | cdktn.IResolvable) {
    this._freshness = value;
  }
  public resetFreshness() {
    this._freshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshnessInput() {
    return this._freshness;
  }

  // importance - computed: true, optional: true, required: false
  private _importance?: number; 
  public get importance() {
    return this.getNumberAttribute('importance');
  }
  public set importance(value: number) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // rank_order - computed: true, optional: true, required: false
  private _rankOrder?: string; 
  public get rankOrder() {
    return this.getStringAttribute('rank_order');
  }
  public set rankOrder(value: string) {
    this._rankOrder = value;
  }
  public resetRankOrder() {
    this._rankOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankOrderInput() {
    return this._rankOrder;
  }

  // values_importance_map - computed: true, optional: true, required: false
  private _valuesImportanceMap?: { [key: string]: number }; 
  public get valuesImportanceMap() {
    return this.getNumberMapAttribute('values_importance_map');
  }
  public set valuesImportanceMap(value: { [key: string]: number }) {
    this._valuesImportanceMap = value;
  }
  public resetValuesImportanceMap() {
    this._valuesImportanceMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesImportanceMapInput() {
    return this._valuesImportanceMap;
  }
}
export interface SearchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#displayable AwsKendraIndex#displayable}
  */
  readonly displayable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#facetable AwsKendraIndex#facetable}
  */
  readonly facetable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#searchable AwsKendraIndex#searchable}
  */
  readonly searchable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#sortable AwsKendraIndex#sortable}
  */
  readonly sortable?: boolean | cdktn.IResolvable;
}
export class SearchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SearchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayable !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayable = this._displayable;
    }
    if (this._facetable !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetable = this._facetable;
    }
    if (this._searchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchable = this._searchable;
    }
    if (this._sortable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortable = this._sortable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayable = undefined;
      this._facetable = undefined;
      this._searchable = undefined;
      this._sortable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayable = value.displayable;
      this._facetable = value.facetable;
      this._searchable = value.searchable;
      this._sortable = value.sortable;
    }
  }

  // displayable - computed: true, optional: true, required: false
  private _displayable?: boolean | cdktn.IResolvable; 
  public get displayable() {
    return this.getBooleanAttribute('displayable');
  }
  public set displayable(value: boolean | cdktn.IResolvable) {
    this._displayable = value;
  }
  public resetDisplayable() {
    this._displayable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayableInput() {
    return this._displayable;
  }

  // facetable - computed: true, optional: true, required: false
  private _facetable?: boolean | cdktn.IResolvable; 
  public get facetable() {
    return this.getBooleanAttribute('facetable');
  }
  public set facetable(value: boolean | cdktn.IResolvable) {
    this._facetable = value;
  }
  public resetFacetable() {
    this._facetable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetableInput() {
    return this._facetable;
  }

  // searchable - computed: true, optional: true, required: false
  private _searchable?: boolean | cdktn.IResolvable; 
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }
  public set searchable(value: boolean | cdktn.IResolvable) {
    this._searchable = value;
  }
  public resetSearchable() {
    this._searchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableInput() {
    return this._searchable;
  }

  // sortable - computed: true, optional: true, required: false
  private _sortable?: boolean | cdktn.IResolvable; 
  public get sortable() {
    return this.getBooleanAttribute('sortable');
  }
  public set sortable(value: boolean | cdktn.IResolvable) {
    this._sortable = value;
  }
  public resetSortable() {
    this._sortable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortableInput() {
    return this._sortable;
  }
}
export interface DocumentMetadataConfigurationUpdatesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#name AwsKendraIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#type AwsKendraIndex#type}
  */
  readonly type: string;
  /**
  * relevance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#relevance AwsKendraIndex#relevance}
  */
  readonly relevance?: RelevanceProperty;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#search AwsKendraIndex#search}
  */
  readonly search?: SearchProperty;
}
export class DocumentMetadataConfigurationUpdatesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DocumentMetadataConfigurationUpdatesProperty | cdktn.IResolvable | undefined {
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
    if (this._relevance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevance = this._relevance?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentMetadataConfigurationUpdatesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._relevance.internalValue = undefined;
      this._search.internalValue = undefined;
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
      this._relevance.internalValue = value.relevance;
      this._search.internalValue = value.search;
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

  // relevance - computed: false, optional: true, required: false
  private _relevance = new RelevancePropertyOutputReference(this, "relevance");
  public get relevance() {
    return this._relevance;
  }
  public putRelevance(value: RelevanceProperty) {
    this._relevance.internalValue = value;
  }
  public resetRelevance() {
    this._relevance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceInput() {
    return this._relevance.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new SearchPropertyOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: SearchProperty) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}

export class DocumentMetadataConfigurationUpdatesPropertyList extends cdktn.ComplexList {
  public internalValue? : DocumentMetadataConfigurationUpdatesProperty[] | cdktn.IResolvable

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
  public get(index: number): DocumentMetadataConfigurationUpdatesPropertyOutputReference {
    return new DocumentMetadataConfigurationUpdatesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSideEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#kms_key_id AwsKendraIndex#kms_key_id}
  */
  readonly kmsKeyId?: string;
}
export class ServerSideEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerSideEncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSideEncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#create AwsKendraIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#delete AwsKendraIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#update AwsKendraIndex#update}
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
export interface UserGroupResolutionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_group_resolution_mode AwsKendraIndex#user_group_resolution_mode}
  */
  readonly userGroupResolutionMode: string;
}
export class UserGroupResolutionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupResolutionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroupResolutionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupResolutionMode = this._userGroupResolutionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupResolutionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userGroupResolutionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userGroupResolutionMode = value.userGroupResolutionMode;
    }
  }

  // user_group_resolution_mode - computed: false, optional: false, required: true
  private _userGroupResolutionMode?: string; 
  public get userGroupResolutionMode() {
    return this.getStringAttribute('user_group_resolution_mode');
  }
  public set userGroupResolutionMode(value: string) {
    this._userGroupResolutionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupResolutionModeInput() {
    return this._userGroupResolutionMode;
  }
}
export interface JsonTokenTypeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#group_attribute_field AwsKendraIndex#group_attribute_field}
  */
  readonly groupAttributeField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_name_attribute_field AwsKendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField: string;
}
export class JsonTokenTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JsonTokenTypeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributeField = this._groupAttributeField;
    }
    if (this._userNameAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttributeField = this._userNameAttributeField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonTokenTypeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupAttributeField = undefined;
      this._userNameAttributeField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupAttributeField = value.groupAttributeField;
      this._userNameAttributeField = value.userNameAttributeField;
    }
  }

  // group_attribute_field - computed: false, optional: false, required: true
  private _groupAttributeField?: string; 
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }
  public set groupAttributeField(value: string) {
    this._groupAttributeField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeFieldInput() {
    return this._groupAttributeField;
  }

  // user_name_attribute_field - computed: false, optional: false, required: true
  private _userNameAttributeField?: string; 
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
  public set userNameAttributeField(value: string) {
    this._userNameAttributeField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeFieldInput() {
    return this._userNameAttributeField;
  }
}
export interface JwtTokenTypeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#claim_regex AwsKendraIndex#claim_regex}
  */
  readonly claimRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#group_attribute_field AwsKendraIndex#group_attribute_field}
  */
  readonly groupAttributeField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#issuer AwsKendraIndex#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#key_location AwsKendraIndex#key_location}
  */
  readonly keyLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#secrets_manager_arn AwsKendraIndex#secrets_manager_arn}
  */
  readonly secretsManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#url AwsKendraIndex#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#user_name_attribute_field AwsKendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField?: string;
}
export class JwtTokenTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JwtTokenTypeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimRegex = this._claimRegex;
    }
    if (this._groupAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributeField = this._groupAttributeField;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._keyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLocation = this._keyLocation;
    }
    if (this._secretsManagerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerArn = this._secretsManagerArn;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userNameAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttributeField = this._userNameAttributeField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtTokenTypeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimRegex = undefined;
      this._groupAttributeField = undefined;
      this._issuer = undefined;
      this._keyLocation = undefined;
      this._secretsManagerArn = undefined;
      this._url = undefined;
      this._userNameAttributeField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimRegex = value.claimRegex;
      this._groupAttributeField = value.groupAttributeField;
      this._issuer = value.issuer;
      this._keyLocation = value.keyLocation;
      this._secretsManagerArn = value.secretsManagerArn;
      this._url = value.url;
      this._userNameAttributeField = value.userNameAttributeField;
    }
  }

  // claim_regex - computed: false, optional: true, required: false
  private _claimRegex?: string; 
  public get claimRegex() {
    return this.getStringAttribute('claim_regex');
  }
  public set claimRegex(value: string) {
    this._claimRegex = value;
  }
  public resetClaimRegex() {
    this._claimRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRegexInput() {
    return this._claimRegex;
  }

  // group_attribute_field - computed: false, optional: true, required: false
  private _groupAttributeField?: string; 
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }
  public set groupAttributeField(value: string) {
    this._groupAttributeField = value;
  }
  public resetGroupAttributeField() {
    this._groupAttributeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeFieldInput() {
    return this._groupAttributeField;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // key_location - computed: false, optional: false, required: true
  private _keyLocation?: string; 
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }
  public set keyLocation(value: string) {
    this._keyLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLocationInput() {
    return this._keyLocation;
  }

  // secrets_manager_arn - computed: false, optional: true, required: false
  private _secretsManagerArn?: string; 
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }
  public set secretsManagerArn(value: string) {
    this._secretsManagerArn = value;
  }
  public resetSecretsManagerArn() {
    this._secretsManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerArnInput() {
    return this._secretsManagerArn;
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

  // user_name_attribute_field - computed: false, optional: true, required: false
  private _userNameAttributeField?: string; 
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
  public set userNameAttributeField(value: string) {
    this._userNameAttributeField = value;
  }
  public resetUserNameAttributeField() {
    this._userNameAttributeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeFieldInput() {
    return this._userNameAttributeField;
  }
}
export interface UserTokenConfigurationsProperty {
  /**
  * json_token_type_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#json_token_type_configuration AwsKendraIndex#json_token_type_configuration}
  */
  readonly jsonTokenTypeConfiguration?: JsonTokenTypeConfigurationProperty;
  /**
  * jwt_token_type_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kendra_index#jwt_token_type_configuration AwsKendraIndex#jwt_token_type_configuration}
  */
  readonly jwtTokenTypeConfiguration?: JwtTokenTypeConfigurationProperty;
}
export class UserTokenConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserTokenConfigurationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonTokenTypeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTokenTypeConfiguration = this._jsonTokenTypeConfiguration?.internalValue;
    }
    if (this._jwtTokenTypeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokenTypeConfiguration = this._jwtTokenTypeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTokenConfigurationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonTokenTypeConfiguration.internalValue = undefined;
      this._jwtTokenTypeConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonTokenTypeConfiguration.internalValue = value.jsonTokenTypeConfiguration;
      this._jwtTokenTypeConfiguration.internalValue = value.jwtTokenTypeConfiguration;
    }
  }

  // json_token_type_configuration - computed: false, optional: true, required: false
  private _jsonTokenTypeConfiguration = new JsonTokenTypeConfigurationPropertyOutputReference(this, "json_token_type_configuration");
  public get jsonTokenTypeConfiguration() {
    return this._jsonTokenTypeConfiguration;
  }
  public putJsonTokenTypeConfiguration(value: JsonTokenTypeConfigurationProperty) {
    this._jsonTokenTypeConfiguration.internalValue = value;
  }
  public resetJsonTokenTypeConfiguration() {
    this._jsonTokenTypeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTokenTypeConfigurationInput() {
    return this._jsonTokenTypeConfiguration.internalValue;
  }

  // jwt_token_type_configuration - computed: false, optional: true, required: false
  private _jwtTokenTypeConfiguration = new JwtTokenTypeConfigurationPropertyOutputReference(this, "jwt_token_type_configuration");
  public get jwtTokenTypeConfiguration() {
    return this._jwtTokenTypeConfiguration;
  }
  public putJwtTokenTypeConfiguration(value: JwtTokenTypeConfigurationProperty) {
    this._jwtTokenTypeConfiguration.internalValue = value;
  }
  public resetJwtTokenTypeConfiguration() {
    this._jwtTokenTypeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenTypeConfigurationInput() {
    return this._jwtTokenTypeConfiguration.internalValue;
  }
}
}
