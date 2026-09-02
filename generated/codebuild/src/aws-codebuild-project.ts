// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Maximum number of additional automatic retries after a failed build. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#auto_retry_limit TfProject#auto_retry_limit}
  */
  readonly autoRetryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#badge_enabled TfProject#badge_enabled}
  */
  readonly badgeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#build_timeout TfProject#build_timeout}
  */
  readonly buildTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#concurrent_build_limit TfProject#concurrent_build_limit}
  */
  readonly concurrentBuildLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#description TfProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#encryption_key TfProject#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#id TfProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#name TfProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#project_visibility TfProject#project_visibility}
  */
  readonly projectVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#queued_timeout TfProject#queued_timeout}
  */
  readonly queuedTimeout?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#region TfProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#resource_access_role TfProject#resource_access_role}
  */
  readonly resourceAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#service_role TfProject#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#source_version TfProject#source_version}
  */
  readonly sourceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#tags TfProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#tags_all TfProject#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#artifacts TfProject#artifacts}
  */
  readonly artifacts: TfProject.ArtifactsProperty;
  /**
  * build_batch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#build_batch_config TfProject#build_batch_config}
  */
  readonly buildBatchConfig?: TfProject.BuildBatchConfigProperty;
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#cache TfProject#cache}
  */
  readonly cache?: TfProject.CacheProperty;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#environment TfProject#environment}
  */
  readonly environment: TfProject.EnvironmentProperty;
  /**
  * file_system_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#file_system_locations TfProject#file_system_locations}
  */
  readonly fileSystemLocations?: TfProject.FileSystemLocationsProperty[] | cdktn.IResolvable;
  /**
  * logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#logs_config TfProject#logs_config}
  */
  readonly logsConfig?: TfProject.LogsConfigProperty;
  /**
  * secondary_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#secondary_artifacts TfProject#secondary_artifacts}
  */
  readonly secondaryArtifacts?: TfProject.SecondaryArtifactsProperty[] | cdktn.IResolvable;
  /**
  * secondary_source_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#secondary_source_version TfProject#secondary_source_version}
  */
  readonly secondarySourceVersion?: TfProject.SecondarySourceVersionProperty[] | cdktn.IResolvable;
  /**
  * secondary_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#secondary_sources TfProject#secondary_sources}
  */
  readonly secondarySources?: TfProject.SecondarySourcesProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#source TfProject#source}
  */
  readonly source: TfProject.SourceProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#vpc_config TfProject#vpc_config}
  */
  readonly vpcConfig?: TfProject.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project aws_codebuild_project}
*/
export class TfProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codebuild_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfProject to import
  * @param importFromId The id of the existing TfProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_codebuild_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project aws_codebuild_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfProjectConfig
  */
  public constructor(scope: Construct, id: string, config: TfProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_project',
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
    this._autoRetryLimit = config.autoRetryLimit;
    this._badgeEnabled = config.badgeEnabled;
    this._buildTimeout = config.buildTimeout;
    this._concurrentBuildLimit = config.concurrentBuildLimit;
    this._description = config.description;
    this._encryptionKey = config.encryptionKey;
    this._id = config.id;
    this._name = config.name;
    this._projectVisibility = config.projectVisibility;
    this._queuedTimeout = config.queuedTimeout;
    this._region = config.region;
    this._resourceAccessRole = config.resourceAccessRole;
    this._serviceRole = config.serviceRole;
    this._sourceVersion = config.sourceVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._artifacts.internalValue = config.artifacts;
    this._buildBatchConfig.internalValue = config.buildBatchConfig;
    this._cache.internalValue = config.cache;
    this._environment.internalValue = config.environment;
    this._fileSystemLocations.internalValue = config.fileSystemLocations;
    this._logsConfig.internalValue = config.logsConfig;
    this._secondaryArtifacts.internalValue = config.secondaryArtifacts;
    this._secondarySourceVersion.internalValue = config.secondarySourceVersion;
    this._secondarySources.internalValue = config.secondarySources;
    this._source.internalValue = config.source;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_retry_limit - computed: true, optional: true, required: false
  private _autoRetryLimit?: number; 
  public get autoRetryLimit() {
    return this.getNumberAttribute('auto_retry_limit');
  }
  public set autoRetryLimit(value: number) {
    this._autoRetryLimit = value;
  }
  public resetAutoRetryLimit() {
    this._autoRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetryLimitInput() {
    return this._autoRetryLimit;
  }

  // badge_enabled - computed: false, optional: true, required: false
  private _badgeEnabled?: boolean | cdktn.IResolvable; 
  public get badgeEnabled() {
    return this.getBooleanAttribute('badge_enabled');
  }
  public set badgeEnabled(value: boolean | cdktn.IResolvable) {
    this._badgeEnabled = value;
  }
  public resetBadgeEnabled() {
    this._badgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badgeEnabledInput() {
    return this._badgeEnabled;
  }

  // badge_url - computed: true, optional: false, required: false
  public get badgeUrl() {
    return this.getStringAttribute('badge_url');
  }

  // build_timeout - computed: false, optional: true, required: false
  private _buildTimeout?: number; 
  public get buildTimeout() {
    return this.getNumberAttribute('build_timeout');
  }
  public set buildTimeout(value: number) {
    this._buildTimeout = value;
  }
  public resetBuildTimeout() {
    this._buildTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimeoutInput() {
    return this._buildTimeout;
  }

  // concurrent_build_limit - computed: false, optional: true, required: false
  private _concurrentBuildLimit?: number; 
  public get concurrentBuildLimit() {
    return this.getNumberAttribute('concurrent_build_limit');
  }
  public set concurrentBuildLimit(value: number) {
    this._concurrentBuildLimit = value;
  }
  public resetConcurrentBuildLimit() {
    this._concurrentBuildLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentBuildLimitInput() {
    return this._concurrentBuildLimit;
  }

  // description - computed: true, optional: true, required: false
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

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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

  // project_visibility - computed: false, optional: true, required: false
  private _projectVisibility?: string; 
  public get projectVisibility() {
    return this.getStringAttribute('project_visibility');
  }
  public set projectVisibility(value: string) {
    this._projectVisibility = value;
  }
  public resetProjectVisibility() {
    this._projectVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVisibilityInput() {
    return this._projectVisibility;
  }

  // public_project_alias - computed: true, optional: false, required: false
  public get publicProjectAlias() {
    return this.getStringAttribute('public_project_alias');
  }

  // queued_timeout - computed: false, optional: true, required: false
  private _queuedTimeout?: number; 
  public get queuedTimeout() {
    return this.getNumberAttribute('queued_timeout');
  }
  public set queuedTimeout(value: number) {
    this._queuedTimeout = value;
  }
  public resetQueuedTimeout() {
    this._queuedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedTimeoutInput() {
    return this._queuedTimeout;
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

  // resource_access_role - computed: false, optional: true, required: false
  private _resourceAccessRole?: string; 
  public get resourceAccessRole() {
    return this.getStringAttribute('resource_access_role');
  }
  public set resourceAccessRole(value: string) {
    this._resourceAccessRole = value;
  }
  public resetResourceAccessRole() {
    this._resourceAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessRoleInput() {
    return this._resourceAccessRole;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // source_version - computed: false, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
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

  // artifacts - computed: false, optional: false, required: true
  private _artifacts = new TfProject.ArtifactsPropertyOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: TfProject.ArtifactsProperty) {
    this._artifacts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // build_batch_config - computed: false, optional: true, required: false
  private _buildBatchConfig = new TfProject.BuildBatchConfigPropertyOutputReference(this, "build_batch_config");
  public get buildBatchConfig() {
    return this._buildBatchConfig;
  }
  public putBuildBatchConfig(value: TfProject.BuildBatchConfigProperty) {
    this._buildBatchConfig.internalValue = value;
  }
  public resetBuildBatchConfig() {
    this._buildBatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildBatchConfigInput() {
    return this._buildBatchConfig.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new TfProject.CachePropertyOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: TfProject.CacheProperty) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new TfProject.EnvironmentPropertyOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: TfProject.EnvironmentProperty) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // file_system_locations - computed: false, optional: true, required: false
  private _fileSystemLocations = new TfProject.FileSystemLocationsPropertyList(this, "file_system_locations", true);
  public get fileSystemLocations() {
    return this._fileSystemLocations;
  }
  public putFileSystemLocations(value: TfProject.FileSystemLocationsProperty[] | cdktn.IResolvable) {
    this._fileSystemLocations.internalValue = value;
  }
  public resetFileSystemLocations() {
    this._fileSystemLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemLocationsInput() {
    return this._fileSystemLocations.internalValue;
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig = new TfProject.LogsConfigPropertyOutputReference(this, "logs_config");
  public get logsConfig() {
    return this._logsConfig;
  }
  public putLogsConfig(value: TfProject.LogsConfigProperty) {
    this._logsConfig.internalValue = value;
  }
  public resetLogsConfig() {
    this._logsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsConfigInput() {
    return this._logsConfig.internalValue;
  }

  // secondary_artifacts - computed: false, optional: true, required: false
  private _secondaryArtifacts = new TfProject.SecondaryArtifactsPropertyList(this, "secondary_artifacts", true);
  public get secondaryArtifacts() {
    return this._secondaryArtifacts;
  }
  public putSecondaryArtifacts(value: TfProject.SecondaryArtifactsProperty[] | cdktn.IResolvable) {
    this._secondaryArtifacts.internalValue = value;
  }
  public resetSecondaryArtifacts() {
    this._secondaryArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryArtifactsInput() {
    return this._secondaryArtifacts.internalValue;
  }

  // secondary_source_version - computed: false, optional: true, required: false
  private _secondarySourceVersion = new TfProject.SecondarySourceVersionPropertyList(this, "secondary_source_version", true);
  public get secondarySourceVersion() {
    return this._secondarySourceVersion;
  }
  public putSecondarySourceVersion(value: TfProject.SecondarySourceVersionProperty[] | cdktn.IResolvable) {
    this._secondarySourceVersion.internalValue = value;
  }
  public resetSecondarySourceVersion() {
    this._secondarySourceVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySourceVersionInput() {
    return this._secondarySourceVersion.internalValue;
  }

  // secondary_sources - computed: false, optional: true, required: false
  private _secondarySources = new TfProject.SecondarySourcesPropertyList(this, "secondary_sources", true);
  public get secondarySources() {
    return this._secondarySources;
  }
  public putSecondarySources(value: TfProject.SecondarySourcesProperty[] | cdktn.IResolvable) {
    this._secondarySources.internalValue = value;
  }
  public resetSecondarySources() {
    this._secondarySources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySourcesInput() {
    return this._secondarySources.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new TfProject.SourcePropertyOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: TfProject.SourceProperty) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new TfProject.VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: TfProject.VpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_retry_limit: cdktn.numberToTerraform(this._autoRetryLimit),
      badge_enabled: cdktn.booleanToTerraform(this._badgeEnabled),
      build_timeout: cdktn.numberToTerraform(this._buildTimeout),
      concurrent_build_limit: cdktn.numberToTerraform(this._concurrentBuildLimit),
      description: cdktn.stringToTerraform(this._description),
      encryption_key: cdktn.stringToTerraform(this._encryptionKey),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project_visibility: cdktn.stringToTerraform(this._projectVisibility),
      queued_timeout: cdktn.numberToTerraform(this._queuedTimeout),
      region: cdktn.stringToTerraform(this._region),
      resource_access_role: cdktn.stringToTerraform(this._resourceAccessRole),
      service_role: cdktn.stringToTerraform(this._serviceRole),
      source_version: cdktn.stringToTerraform(this._sourceVersion),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      artifacts: tfProjectArtifactsPropertyToTerraform(this._artifacts.internalValue),
      build_batch_config: tfProjectBuildBatchConfigPropertyToTerraform(this._buildBatchConfig.internalValue),
      cache: tfProjectCachePropertyToTerraform(this._cache.internalValue),
      environment: tfProjectEnvironmentPropertyToTerraform(this._environment.internalValue),
      file_system_locations: cdktn.listMapper(tfProjectFileSystemLocationsPropertyToTerraform, true)(this._fileSystemLocations.internalValue),
      logs_config: tfProjectLogsConfigPropertyToTerraform(this._logsConfig.internalValue),
      secondary_artifacts: cdktn.listMapper(tfProjectSecondaryArtifactsPropertyToTerraform, true)(this._secondaryArtifacts.internalValue),
      secondary_source_version: cdktn.listMapper(tfProjectSecondarySourceVersionPropertyToTerraform, true)(this._secondarySourceVersion.internalValue),
      secondary_sources: cdktn.listMapper(tfProjectSecondarySourcesPropertyToTerraform, true)(this._secondarySources.internalValue),
      source: tfProjectSourcePropertyToTerraform(this._source.internalValue),
      vpc_config: tfProjectVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_retry_limit: {
        value: cdktn.numberToHclTerraform(this._autoRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      badge_enabled: {
        value: cdktn.booleanToHclTerraform(this._badgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      build_timeout: {
        value: cdktn.numberToHclTerraform(this._buildTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_build_limit: {
        value: cdktn.numberToHclTerraform(this._concurrentBuildLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktn.stringToHclTerraform(this._encryptionKey),
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
      project_visibility: {
        value: cdktn.stringToHclTerraform(this._projectVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queued_timeout: {
        value: cdktn.numberToHclTerraform(this._queuedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_access_role: {
        value: cdktn.stringToHclTerraform(this._resourceAccessRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role: {
        value: cdktn.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_version: {
        value: cdktn.stringToHclTerraform(this._sourceVersion),
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
      artifacts: {
        value: tfProjectArtifactsPropertyToHclTerraform(this._artifacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.ArtifactsPropertyList",
      },
      build_batch_config: {
        value: tfProjectBuildBatchConfigPropertyToHclTerraform(this._buildBatchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.BuildBatchConfigPropertyList",
      },
      cache: {
        value: tfProjectCachePropertyToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.CachePropertyList",
      },
      environment: {
        value: tfProjectEnvironmentPropertyToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.EnvironmentPropertyList",
      },
      file_system_locations: {
        value: cdktn.listMapperHcl(tfProjectFileSystemLocationsPropertyToHclTerraform, true)(this._fileSystemLocations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfProject.FileSystemLocationsPropertyList",
      },
      logs_config: {
        value: tfProjectLogsConfigPropertyToHclTerraform(this._logsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.LogsConfigPropertyList",
      },
      secondary_artifacts: {
        value: cdktn.listMapperHcl(tfProjectSecondaryArtifactsPropertyToHclTerraform, true)(this._secondaryArtifacts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfProject.SecondaryArtifactsPropertyList",
      },
      secondary_source_version: {
        value: cdktn.listMapperHcl(tfProjectSecondarySourceVersionPropertyToHclTerraform, true)(this._secondarySourceVersion.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfProject.SecondarySourceVersionPropertyList",
      },
      secondary_sources: {
        value: cdktn.listMapperHcl(tfProjectSecondarySourcesPropertyToHclTerraform, true)(this._secondarySources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfProject.SecondarySourcesPropertyList",
      },
      source: {
        value: tfProjectSourcePropertyToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.SourcePropertyList",
      },
      vpc_config: {
        value: tfProjectVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfProject.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfProjectArtifactsPropertyToTerraform(struct?: TfProject.ArtifactsPropertyOutputReference | TfProject.ArtifactsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_identifier: cdktn.stringToTerraform(struct!.artifactIdentifier),
    bucket_owner_access: cdktn.stringToTerraform(struct!.bucketOwnerAccess),
    encryption_disabled: cdktn.booleanToTerraform(struct!.encryptionDisabled),
    location: cdktn.stringToTerraform(struct!.location),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_type: cdktn.stringToTerraform(struct!.namespaceType),
    override_artifact_name: cdktn.booleanToTerraform(struct!.overrideArtifactName),
    packaging: cdktn.stringToTerraform(struct!.packaging),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectArtifactsPropertyToHclTerraform(struct?: TfProject.ArtifactsPropertyOutputReference | TfProject.ArtifactsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_identifier: {
      value: cdktn.stringToHclTerraform(struct!.artifactIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_access: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
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
    namespace_type: {
      value: cdktn.stringToHclTerraform(struct!.namespaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_artifact_name: {
      value: cdktn.booleanToHclTerraform(struct!.overrideArtifactName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packaging: {
      value: cdktn.stringToHclTerraform(struct!.packaging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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


export function tfProjectRestrictionsPropertyToTerraform(struct?: TfProject.RestrictionsPropertyOutputReference | TfProject.RestrictionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_types_allowed: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.computeTypesAllowed),
    maximum_builds_allowed: cdktn.numberToTerraform(struct!.maximumBuildsAllowed),
  }
}


export function tfProjectRestrictionsPropertyToHclTerraform(struct?: TfProject.RestrictionsPropertyOutputReference | TfProject.RestrictionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_types_allowed: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.computeTypesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_builds_allowed: {
      value: cdktn.numberToHclTerraform(struct!.maximumBuildsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectBuildBatchConfigPropertyToTerraform(struct?: TfProject.BuildBatchConfigPropertyOutputReference | TfProject.BuildBatchConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    combine_artifacts: cdktn.booleanToTerraform(struct!.combineArtifacts),
    service_role: cdktn.stringToTerraform(struct!.serviceRole),
    timeout_in_mins: cdktn.numberToTerraform(struct!.timeoutInMins),
    restrictions: tfProjectRestrictionsPropertyToTerraform(struct!.restrictions),
  }
}


export function tfProjectBuildBatchConfigPropertyToHclTerraform(struct?: TfProject.BuildBatchConfigPropertyOutputReference | TfProject.BuildBatchConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    combine_artifacts: {
      value: cdktn.booleanToHclTerraform(struct!.combineArtifacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_role: {
      value: cdktn.stringToHclTerraform(struct!.serviceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_mins: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrictions: {
      value: tfProjectRestrictionsPropertyToHclTerraform(struct!.restrictions),
      isBlock: true,
      type: "list",
      storageClassType: "RestrictionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectCachePropertyToTerraform(struct?: TfProject.CachePropertyOutputReference | TfProject.CacheProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_namespace: cdktn.stringToTerraform(struct!.cacheNamespace),
    location: cdktn.stringToTerraform(struct!.location),
    modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.modes),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectCachePropertyToHclTerraform(struct?: TfProject.CachePropertyOutputReference | TfProject.CacheProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_namespace: {
      value: cdktn.stringToHclTerraform(struct!.cacheNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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


export function tfProjectDockerServerPropertyToTerraform(struct?: TfProject.DockerServerPropertyOutputReference | TfProject.DockerServerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_type: cdktn.stringToTerraform(struct!.computeType),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function tfProjectDockerServerPropertyToHclTerraform(struct?: TfProject.DockerServerPropertyOutputReference | TfProject.DockerServerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_type: {
      value: cdktn.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectEnvironmentVariablePropertyToTerraform(struct?: TfProject.EnvironmentVariableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfProjectEnvironmentVariablePropertyToHclTerraform(struct?: TfProject.EnvironmentVariableProperty | cdktn.IResolvable): any {
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


export function tfProjectFleetPropertyToTerraform(struct?: TfProject.FleetPropertyOutputReference | TfProject.FleetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fleet_arn: cdktn.stringToTerraform(struct!.fleetArn),
  }
}


export function tfProjectFleetPropertyToHclTerraform(struct?: TfProject.FleetPropertyOutputReference | TfProject.FleetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fleet_arn: {
      value: cdktn.stringToHclTerraform(struct!.fleetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectRegistryCredentialPropertyToTerraform(struct?: TfProject.RegistryCredentialPropertyOutputReference | TfProject.RegistryCredentialProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential: cdktn.stringToTerraform(struct!.credential),
    credential_provider: cdktn.stringToTerraform(struct!.credentialProvider),
  }
}


export function tfProjectRegistryCredentialPropertyToHclTerraform(struct?: TfProject.RegistryCredentialPropertyOutputReference | TfProject.RegistryCredentialProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential: {
      value: cdktn.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_provider: {
      value: cdktn.stringToHclTerraform(struct!.credentialProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectEnvironmentPropertyToTerraform(struct?: TfProject.EnvironmentPropertyOutputReference | TfProject.EnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate: cdktn.stringToTerraform(struct!.certificate),
    compute_type: cdktn.stringToTerraform(struct!.computeType),
    host_kernel: cdktn.stringToTerraform(struct!.hostKernel),
    image: cdktn.stringToTerraform(struct!.image),
    image_pull_credentials_type: cdktn.stringToTerraform(struct!.imagePullCredentialsType),
    privileged_mode: cdktn.booleanToTerraform(struct!.privilegedMode),
    type: cdktn.stringToTerraform(struct!.type),
    docker_server: tfProjectDockerServerPropertyToTerraform(struct!.dockerServer),
    environment_variable: cdktn.listMapper(tfProjectEnvironmentVariablePropertyToTerraform, true)(struct!.environmentVariable),
    fleet: tfProjectFleetPropertyToTerraform(struct!.fleet),
    registry_credential: tfProjectRegistryCredentialPropertyToTerraform(struct!.registryCredential),
  }
}


export function tfProjectEnvironmentPropertyToHclTerraform(struct?: TfProject.EnvironmentPropertyOutputReference | TfProject.EnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate: {
      value: cdktn.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_type: {
      value: cdktn.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_kernel: {
      value: cdktn.stringToHclTerraform(struct!.hostKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_credentials_type: {
      value: cdktn.stringToHclTerraform(struct!.imagePullCredentialsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged_mode: {
      value: cdktn.booleanToHclTerraform(struct!.privilegedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_server: {
      value: tfProjectDockerServerPropertyToHclTerraform(struct!.dockerServer),
      isBlock: true,
      type: "list",
      storageClassType: "DockerServerPropertyList",
    },
    environment_variable: {
      value: cdktn.listMapperHcl(tfProjectEnvironmentVariablePropertyToHclTerraform, true)(struct!.environmentVariable),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentVariablePropertyList",
    },
    fleet: {
      value: tfProjectFleetPropertyToHclTerraform(struct!.fleet),
      isBlock: true,
      type: "list",
      storageClassType: "FleetPropertyList",
    },
    registry_credential: {
      value: tfProjectRegistryCredentialPropertyToHclTerraform(struct!.registryCredential),
      isBlock: true,
      type: "list",
      storageClassType: "RegistryCredentialPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectFileSystemLocationsPropertyToTerraform(struct?: TfProject.FileSystemLocationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
    location: cdktn.stringToTerraform(struct!.location),
    mount_options: cdktn.stringToTerraform(struct!.mountOptions),
    mount_point: cdktn.stringToTerraform(struct!.mountPoint),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectFileSystemLocationsPropertyToHclTerraform(struct?: TfProject.FileSystemLocationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktn.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktn.stringToHclTerraform(struct!.mountPoint),
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


export function tfProjectCloudwatchLogsPropertyToTerraform(struct?: TfProject.CloudwatchLogsPropertyOutputReference | TfProject.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_name: cdktn.stringToTerraform(struct!.groupName),
    status: cdktn.stringToTerraform(struct!.status),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function tfProjectCloudwatchLogsPropertyToHclTerraform(struct?: TfProject.CloudwatchLogsPropertyOutputReference | TfProject.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
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
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectS3LogsPropertyToTerraform(struct?: TfProject.S3LogsPropertyOutputReference | TfProject.S3LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner_access: cdktn.stringToTerraform(struct!.bucketOwnerAccess),
    encryption_disabled: cdktn.booleanToTerraform(struct!.encryptionDisabled),
    location: cdktn.stringToTerraform(struct!.location),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfProjectS3LogsPropertyToHclTerraform(struct?: TfProject.S3LogsPropertyOutputReference | TfProject.S3LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner_access: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
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


export function tfProjectLogsConfigPropertyToTerraform(struct?: TfProject.LogsConfigPropertyOutputReference | TfProject.LogsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: tfProjectCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    s3_logs: tfProjectS3LogsPropertyToTerraform(struct!.s3Logs),
  }
}


export function tfProjectLogsConfigPropertyToHclTerraform(struct?: TfProject.LogsConfigPropertyOutputReference | TfProject.LogsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: tfProjectCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogsPropertyList",
    },
    s3_logs: {
      value: tfProjectS3LogsPropertyToHclTerraform(struct!.s3Logs),
      isBlock: true,
      type: "list",
      storageClassType: "S3LogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSecondaryArtifactsPropertyToTerraform(struct?: TfProject.SecondaryArtifactsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_identifier: cdktn.stringToTerraform(struct!.artifactIdentifier),
    bucket_owner_access: cdktn.stringToTerraform(struct!.bucketOwnerAccess),
    encryption_disabled: cdktn.booleanToTerraform(struct!.encryptionDisabled),
    location: cdktn.stringToTerraform(struct!.location),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_type: cdktn.stringToTerraform(struct!.namespaceType),
    override_artifact_name: cdktn.booleanToTerraform(struct!.overrideArtifactName),
    packaging: cdktn.stringToTerraform(struct!.packaging),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectSecondaryArtifactsPropertyToHclTerraform(struct?: TfProject.SecondaryArtifactsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_identifier: {
      value: cdktn.stringToHclTerraform(struct!.artifactIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_access: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
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
    namespace_type: {
      value: cdktn.stringToHclTerraform(struct!.namespaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_artifact_name: {
      value: cdktn.booleanToHclTerraform(struct!.overrideArtifactName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packaging: {
      value: cdktn.stringToHclTerraform(struct!.packaging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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


export function tfProjectSecondarySourceVersionPropertyToTerraform(struct?: TfProject.SecondarySourceVersionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_identifier: cdktn.stringToTerraform(struct!.sourceIdentifier),
    source_version: cdktn.stringToTerraform(struct!.sourceVersion),
  }
}


export function tfProjectSecondarySourceVersionPropertyToHclTerraform(struct?: TfProject.SecondarySourceVersionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.sourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktn.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSecondarySourcesAuthPropertyToTerraform(struct?: TfProject.SecondarySourcesAuthPropertyOutputReference | TfProject.SecondarySourcesAuthProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: cdktn.stringToTerraform(struct!.resource),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectSecondarySourcesAuthPropertyToHclTerraform(struct?: TfProject.SecondarySourcesAuthPropertyOutputReference | TfProject.SecondarySourcesAuthProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
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


export function tfProjectSecondarySourcesBuildStatusConfigPropertyToTerraform(struct?: TfProject.SecondarySourcesBuildStatusConfigPropertyOutputReference | TfProject.SecondarySourcesBuildStatusConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context: cdktn.stringToTerraform(struct!.context),
    target_url: cdktn.stringToTerraform(struct!.targetUrl),
  }
}


export function tfProjectSecondarySourcesBuildStatusConfigPropertyToHclTerraform(struct?: TfProject.SecondarySourcesBuildStatusConfigPropertyOutputReference | TfProject.SecondarySourcesBuildStatusConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context: {
      value: cdktn.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktn.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSecondarySourcesGitSubmodulesConfigPropertyToTerraform(struct?: TfProject.SecondarySourcesGitSubmodulesConfigPropertyOutputReference | TfProject.SecondarySourcesGitSubmodulesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fetch_submodules: cdktn.booleanToTerraform(struct!.fetchSubmodules),
  }
}


export function tfProjectSecondarySourcesGitSubmodulesConfigPropertyToHclTerraform(struct?: TfProject.SecondarySourcesGitSubmodulesConfigPropertyOutputReference | TfProject.SecondarySourcesGitSubmodulesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fetch_submodules: {
      value: cdktn.booleanToHclTerraform(struct!.fetchSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSecondarySourcesPropertyToTerraform(struct?: TfProject.SecondarySourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buildspec: cdktn.stringToTerraform(struct!.buildspec),
    git_clone_depth: cdktn.numberToTerraform(struct!.gitCloneDepth),
    insecure_ssl: cdktn.booleanToTerraform(struct!.insecureSsl),
    location: cdktn.stringToTerraform(struct!.location),
    report_build_status: cdktn.booleanToTerraform(struct!.reportBuildStatus),
    source_identifier: cdktn.stringToTerraform(struct!.sourceIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
    auth: tfProjectSecondarySourcesAuthPropertyToTerraform(struct!.auth),
    build_status_config: tfProjectSecondarySourcesBuildStatusConfigPropertyToTerraform(struct!.buildStatusConfig),
    git_submodules_config: tfProjectSecondarySourcesGitSubmodulesConfigPropertyToTerraform(struct!.gitSubmodulesConfig),
  }
}


export function tfProjectSecondarySourcesPropertyToHclTerraform(struct?: TfProject.SecondarySourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buildspec: {
      value: cdktn.stringToHclTerraform(struct!.buildspec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_clone_depth: {
      value: cdktn.numberToHclTerraform(struct!.gitCloneDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_ssl: {
      value: cdktn.booleanToHclTerraform(struct!.insecureSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_build_status: {
      value: cdktn.booleanToHclTerraform(struct!.reportBuildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.sourceIdentifier),
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
    auth: {
      value: tfProjectSecondarySourcesAuthPropertyToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "SecondarySourcesAuthPropertyList",
    },
    build_status_config: {
      value: tfProjectSecondarySourcesBuildStatusConfigPropertyToHclTerraform(struct!.buildStatusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecondarySourcesBuildStatusConfigPropertyList",
    },
    git_submodules_config: {
      value: tfProjectSecondarySourcesGitSubmodulesConfigPropertyToHclTerraform(struct!.gitSubmodulesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecondarySourcesGitSubmodulesConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSourceAuthPropertyToTerraform(struct?: TfProject.SourceAuthPropertyOutputReference | TfProject.SourceAuthProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: cdktn.stringToTerraform(struct!.resource),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfProjectSourceAuthPropertyToHclTerraform(struct?: TfProject.SourceAuthPropertyOutputReference | TfProject.SourceAuthProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
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


export function tfProjectSourceBuildStatusConfigPropertyToTerraform(struct?: TfProject.SourceBuildStatusConfigPropertyOutputReference | TfProject.SourceBuildStatusConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context: cdktn.stringToTerraform(struct!.context),
    target_url: cdktn.stringToTerraform(struct!.targetUrl),
  }
}


export function tfProjectSourceBuildStatusConfigPropertyToHclTerraform(struct?: TfProject.SourceBuildStatusConfigPropertyOutputReference | TfProject.SourceBuildStatusConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context: {
      value: cdktn.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktn.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSourceGitSubmodulesConfigPropertyToTerraform(struct?: TfProject.SourceGitSubmodulesConfigPropertyOutputReference | TfProject.SourceGitSubmodulesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fetch_submodules: cdktn.booleanToTerraform(struct!.fetchSubmodules),
  }
}


export function tfProjectSourceGitSubmodulesConfigPropertyToHclTerraform(struct?: TfProject.SourceGitSubmodulesConfigPropertyOutputReference | TfProject.SourceGitSubmodulesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fetch_submodules: {
      value: cdktn.booleanToHclTerraform(struct!.fetchSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectSourcePropertyToTerraform(struct?: TfProject.SourcePropertyOutputReference | TfProject.SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buildspec: cdktn.stringToTerraform(struct!.buildspec),
    git_clone_depth: cdktn.numberToTerraform(struct!.gitCloneDepth),
    insecure_ssl: cdktn.booleanToTerraform(struct!.insecureSsl),
    location: cdktn.stringToTerraform(struct!.location),
    report_build_status: cdktn.booleanToTerraform(struct!.reportBuildStatus),
    type: cdktn.stringToTerraform(struct!.type),
    auth: tfProjectSourceAuthPropertyToTerraform(struct!.auth),
    build_status_config: tfProjectSourceBuildStatusConfigPropertyToTerraform(struct!.buildStatusConfig),
    git_submodules_config: tfProjectSourceGitSubmodulesConfigPropertyToTerraform(struct!.gitSubmodulesConfig),
  }
}


export function tfProjectSourcePropertyToHclTerraform(struct?: TfProject.SourcePropertyOutputReference | TfProject.SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buildspec: {
      value: cdktn.stringToHclTerraform(struct!.buildspec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_clone_depth: {
      value: cdktn.numberToHclTerraform(struct!.gitCloneDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_ssl: {
      value: cdktn.booleanToHclTerraform(struct!.insecureSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_build_status: {
      value: cdktn.booleanToHclTerraform(struct!.reportBuildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: tfProjectSourceAuthPropertyToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "SourceAuthPropertyList",
    },
    build_status_config: {
      value: tfProjectSourceBuildStatusConfigPropertyToHclTerraform(struct!.buildStatusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SourceBuildStatusConfigPropertyList",
    },
    git_submodules_config: {
      value: tfProjectSourceGitSubmodulesConfigPropertyToHclTerraform(struct!.gitSubmodulesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGitSubmodulesConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfProjectVpcConfigPropertyToTerraform(struct?: TfProject.VpcConfigPropertyOutputReference | TfProject.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function tfProjectVpcConfigPropertyToHclTerraform(struct?: TfProject.VpcConfigPropertyOutputReference | TfProject.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfProject {
export interface ArtifactsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#artifact_identifier TfProject#artifact_identifier}
  */
  readonly artifactIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#bucket_owner_access TfProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#encryption_disabled TfProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#name TfProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#namespace_type TfProject#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#override_artifact_name TfProject#override_artifact_name}
  */
  readonly overrideArtifactName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#packaging TfProject#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#path TfProject#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
}
export class ArtifactsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactIdentifier = this._artifactIdentifier;
    }
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceType = this._namespaceType;
    }
    if (this._overrideArtifactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideArtifactName = this._overrideArtifactName;
    }
    if (this._packaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.packaging = this._packaging;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactIdentifier = undefined;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._name = undefined;
      this._namespaceType = undefined;
      this._overrideArtifactName = undefined;
      this._packaging = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactIdentifier = value.artifactIdentifier;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._name = value.name;
      this._namespaceType = value.namespaceType;
      this._overrideArtifactName = value.overrideArtifactName;
      this._packaging = value.packaging;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // artifact_identifier - computed: false, optional: true, required: false
  private _artifactIdentifier?: string; 
  public get artifactIdentifier() {
    return this.getStringAttribute('artifact_identifier');
  }
  public set artifactIdentifier(value: string) {
    this._artifactIdentifier = value;
  }
  public resetArtifactIdentifier() {
    this._artifactIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdentifierInput() {
    return this._artifactIdentifier;
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktn.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktn.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
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

  // namespace_type - computed: false, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // override_artifact_name - computed: false, optional: true, required: false
  private _overrideArtifactName?: boolean | cdktn.IResolvable; 
  public get overrideArtifactName() {
    return this.getBooleanAttribute('override_artifact_name');
  }
  public set overrideArtifactName(value: boolean | cdktn.IResolvable) {
    this._overrideArtifactName = value;
  }
  public resetOverrideArtifactName() {
    this._overrideArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideArtifactNameInput() {
    return this._overrideArtifactName;
  }

  // packaging - computed: false, optional: true, required: false
  private _packaging?: string; 
  public get packaging() {
    return this.getStringAttribute('packaging');
  }
  public set packaging(value: string) {
    this._packaging = value;
  }
  public resetPackaging() {
    this._packaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingInput() {
    return this._packaging;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface RestrictionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#compute_types_allowed TfProject#compute_types_allowed}
  */
  readonly computeTypesAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#maximum_builds_allowed TfProject#maximum_builds_allowed}
  */
  readonly maximumBuildsAllowed?: number;
}
export class RestrictionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RestrictionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeTypesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeTypesAllowed = this._computeTypesAllowed;
    }
    if (this._maximumBuildsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBuildsAllowed = this._maximumBuildsAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeTypesAllowed = undefined;
      this._maximumBuildsAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeTypesAllowed = value.computeTypesAllowed;
      this._maximumBuildsAllowed = value.maximumBuildsAllowed;
    }
  }

  // compute_types_allowed - computed: false, optional: true, required: false
  private _computeTypesAllowed?: string[]; 
  public get computeTypesAllowed() {
    return this.getListAttribute('compute_types_allowed');
  }
  public set computeTypesAllowed(value: string[]) {
    this._computeTypesAllowed = value;
  }
  public resetComputeTypesAllowed() {
    this._computeTypesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypesAllowedInput() {
    return this._computeTypesAllowed;
  }

  // maximum_builds_allowed - computed: false, optional: true, required: false
  private _maximumBuildsAllowed?: number; 
  public get maximumBuildsAllowed() {
    return this.getNumberAttribute('maximum_builds_allowed');
  }
  public set maximumBuildsAllowed(value: number) {
    this._maximumBuildsAllowed = value;
  }
  public resetMaximumBuildsAllowed() {
    this._maximumBuildsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBuildsAllowedInput() {
    return this._maximumBuildsAllowed;
  }
}
export interface BuildBatchConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#combine_artifacts TfProject#combine_artifacts}
  */
  readonly combineArtifacts?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#service_role TfProject#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#timeout_in_mins TfProject#timeout_in_mins}
  */
  readonly timeoutInMins?: number;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#restrictions TfProject#restrictions}
  */
  readonly restrictions?: RestrictionsProperty;
}
export class BuildBatchConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildBatchConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combineArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineArtifacts = this._combineArtifacts;
    }
    if (this._serviceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRole = this._serviceRole;
    }
    if (this._timeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMins = this._timeoutInMins;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildBatchConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combineArtifacts = undefined;
      this._serviceRole = undefined;
      this._timeoutInMins = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combineArtifacts = value.combineArtifacts;
      this._serviceRole = value.serviceRole;
      this._timeoutInMins = value.timeoutInMins;
      this._restrictions.internalValue = value.restrictions;
    }
  }

  // combine_artifacts - computed: false, optional: true, required: false
  private _combineArtifacts?: boolean | cdktn.IResolvable; 
  public get combineArtifacts() {
    return this.getBooleanAttribute('combine_artifacts');
  }
  public set combineArtifacts(value: boolean | cdktn.IResolvable) {
    this._combineArtifacts = value;
  }
  public resetCombineArtifacts() {
    this._combineArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineArtifactsInput() {
    return this._combineArtifacts;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // timeout_in_mins - computed: false, optional: true, required: false
  private _timeoutInMins?: number; 
  public get timeoutInMins() {
    return this.getNumberAttribute('timeout_in_mins');
  }
  public set timeoutInMins(value: number) {
    this._timeoutInMins = value;
  }
  public resetTimeoutInMins() {
    this._timeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinsInput() {
    return this._timeoutInMins;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new RestrictionsPropertyOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: RestrictionsProperty) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}
export interface CacheProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#cache_namespace TfProject#cache_namespace}
  */
  readonly cacheNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#modes TfProject#modes}
  */
  readonly modes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type?: string;
}
export class CachePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CacheProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNamespace = this._cacheNamespace;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheNamespace = undefined;
      this._location = undefined;
      this._modes = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheNamespace = value.cacheNamespace;
      this._location = value.location;
      this._modes = value.modes;
      this._type = value.type;
    }
  }

  // cache_namespace - computed: false, optional: true, required: false
  private _cacheNamespace?: string; 
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string) {
    this._cacheNamespace = value;
  }
  public resetCacheNamespace() {
    this._cacheNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNamespaceInput() {
    return this._cacheNamespace;
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

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
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
export interface DockerServerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#compute_type TfProject#compute_type}
  */
  readonly computeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#security_group_ids TfProject#security_group_ids}
  */
  readonly securityGroupIds?: string[];
}
export class DockerServerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DockerServerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerServerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeType = undefined;
      this._securityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeType = value.computeType;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // compute_type - computed: false, optional: false, required: true
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}
export interface EnvironmentVariableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#name TfProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#value TfProject#value}
  */
  readonly value: string;
}
export class EnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentVariableProperty | cdktn.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentVariableProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
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
      this._value = value.value;
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

export class EnvironmentVariablePropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentVariableProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentVariablePropertyOutputReference {
    return new EnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#fleet_arn TfProject#fleet_arn}
  */
  readonly fleetArn?: string;
}
export class FleetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetArn = this._fleetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetArn = value.fleetArn;
    }
  }

  // fleet_arn - computed: false, optional: true, required: false
  private _fleetArn?: string; 
  public get fleetArn() {
    return this.getStringAttribute('fleet_arn');
  }
  public set fleetArn(value: string) {
    this._fleetArn = value;
  }
  public resetFleetArn() {
    this._fleetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetArnInput() {
    return this._fleetArn;
  }
}
export interface RegistryCredentialProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#credential TfProject#credential}
  */
  readonly credential: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#credential_provider TfProject#credential_provider}
  */
  readonly credentialProvider: string;
}
export class RegistryCredentialPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistryCredentialProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._credentialProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProvider = this._credentialProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistryCredentialProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credential = undefined;
      this._credentialProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credential = value.credential;
      this._credentialProvider = value.credentialProvider;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // credential_provider - computed: false, optional: false, required: true
  private _credentialProvider?: string; 
  public get credentialProvider() {
    return this.getStringAttribute('credential_provider');
  }
  public set credentialProvider(value: string) {
    this._credentialProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderInput() {
    return this._credentialProvider;
  }
}
export interface EnvironmentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#certificate TfProject#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#compute_type TfProject#compute_type}
  */
  readonly computeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#host_kernel TfProject#host_kernel}
  */
  readonly hostKernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#image TfProject#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#image_pull_credentials_type TfProject#image_pull_credentials_type}
  */
  readonly imagePullCredentialsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#privileged_mode TfProject#privileged_mode}
  */
  readonly privilegedMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
  /**
  * docker_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#docker_server TfProject#docker_server}
  */
  readonly dockerServer?: DockerServerProperty;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#environment_variable TfProject#environment_variable}
  */
  readonly environmentVariable?: EnvironmentVariableProperty[] | cdktn.IResolvable;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#fleet TfProject#fleet}
  */
  readonly fleet?: FleetProperty;
  /**
  * registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#registry_credential TfProject#registry_credential}
  */
  readonly registryCredential?: RegistryCredentialProperty;
}
export class EnvironmentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._hostKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKernel = this._hostKernel;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullCredentialsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentialsType = this._imagePullCredentialsType;
    }
    if (this._privilegedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedMode = this._privilegedMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dockerServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerServer = this._dockerServer?.internalValue;
    }
    if (this._environmentVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable?.internalValue;
    }
    if (this._fleet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleet = this._fleet?.internalValue;
    }
    if (this._registryCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredential = this._registryCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._computeType = undefined;
      this._hostKernel = undefined;
      this._image = undefined;
      this._imagePullCredentialsType = undefined;
      this._privilegedMode = undefined;
      this._type = undefined;
      this._dockerServer.internalValue = undefined;
      this._environmentVariable.internalValue = undefined;
      this._fleet.internalValue = undefined;
      this._registryCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._computeType = value.computeType;
      this._hostKernel = value.hostKernel;
      this._image = value.image;
      this._imagePullCredentialsType = value.imagePullCredentialsType;
      this._privilegedMode = value.privilegedMode;
      this._type = value.type;
      this._dockerServer.internalValue = value.dockerServer;
      this._environmentVariable.internalValue = value.environmentVariable;
      this._fleet.internalValue = value.fleet;
      this._registryCredential.internalValue = value.registryCredential;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // compute_type - computed: false, optional: false, required: true
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // host_kernel - computed: true, optional: true, required: false
  private _hostKernel?: string; 
  public get hostKernel() {
    return this.getStringAttribute('host_kernel');
  }
  public set hostKernel(value: string) {
    this._hostKernel = value;
  }
  public resetHostKernel() {
    this._hostKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKernelInput() {
    return this._hostKernel;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_credentials_type - computed: false, optional: true, required: false
  private _imagePullCredentialsType?: string; 
  public get imagePullCredentialsType() {
    return this.getStringAttribute('image_pull_credentials_type');
  }
  public set imagePullCredentialsType(value: string) {
    this._imagePullCredentialsType = value;
  }
  public resetImagePullCredentialsType() {
    this._imagePullCredentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsTypeInput() {
    return this._imagePullCredentialsType;
  }

  // privileged_mode - computed: false, optional: true, required: false
  private _privilegedMode?: boolean | cdktn.IResolvable; 
  public get privilegedMode() {
    return this.getBooleanAttribute('privileged_mode');
  }
  public set privilegedMode(value: boolean | cdktn.IResolvable) {
    this._privilegedMode = value;
  }
  public resetPrivilegedMode() {
    this._privilegedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedModeInput() {
    return this._privilegedMode;
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

  // docker_server - computed: false, optional: true, required: false
  private _dockerServer = new DockerServerPropertyOutputReference(this, "docker_server");
  public get dockerServer() {
    return this._dockerServer;
  }
  public putDockerServer(value: DockerServerProperty) {
    this._dockerServer.internalValue = value;
  }
  public resetDockerServer() {
    this._dockerServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerServerInput() {
    return this._dockerServer.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new EnvironmentVariablePropertyList(this, "environment_variable", false);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: EnvironmentVariableProperty[] | cdktn.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet = new FleetPropertyOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: FleetProperty) {
    this._fleet.internalValue = value;
  }
  public resetFleet() {
    this._fleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // registry_credential - computed: false, optional: true, required: false
  private _registryCredential = new RegistryCredentialPropertyOutputReference(this, "registry_credential");
  public get registryCredential() {
    return this._registryCredential;
  }
  public putRegistryCredential(value: RegistryCredentialProperty) {
    this._registryCredential.internalValue = value;
  }
  public resetRegistryCredential() {
    this._registryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialInput() {
    return this._registryCredential.internalValue;
  }
}
export interface FileSystemLocationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#identifier TfProject#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#mount_options TfProject#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#mount_point TfProject#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type?: string;
}
export class FileSystemLocationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FileSystemLocationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileSystemLocationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._location = undefined;
      this._mountOptions = undefined;
      this._mountPoint = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._location = value.location;
      this._mountOptions = value.mountOptions;
      this._mountPoint = value.mountPoint;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
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

export class FileSystemLocationsPropertyList extends cdktn.ComplexList {
  public internalValue? : FileSystemLocationsProperty[] | cdktn.IResolvable

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
  public get(index: number): FileSystemLocationsPropertyOutputReference {
    return new FileSystemLocationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#group_name TfProject#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#status TfProject#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#stream_name TfProject#stream_name}
  */
  readonly streamName?: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._status = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._status = value.status;
      this._streamName = value.streamName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface S3LogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#bucket_owner_access TfProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#encryption_disabled TfProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#status TfProject#status}
  */
  readonly status?: string;
}
export class S3LogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3LogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3LogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._status = value.status;
    }
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktn.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktn.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
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
export interface LogsConfigProperty {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#cloudwatch_logs TfProject#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CloudwatchLogsProperty;
  /**
  * s3_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#s3_logs TfProject#s3_logs}
  */
  readonly s3Logs?: S3LogsProperty;
}
export class LogsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._s3Logs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new CloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: CloudwatchLogsProperty) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // s3_logs - computed: false, optional: true, required: false
  private _s3Logs = new S3LogsPropertyOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: S3LogsProperty) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}
export interface SecondaryArtifactsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#artifact_identifier TfProject#artifact_identifier}
  */
  readonly artifactIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#bucket_owner_access TfProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#encryption_disabled TfProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#name TfProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#namespace_type TfProject#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#override_artifact_name TfProject#override_artifact_name}
  */
  readonly overrideArtifactName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#packaging TfProject#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#path TfProject#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
}
export class SecondaryArtifactsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecondaryArtifactsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactIdentifier = this._artifactIdentifier;
    }
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceType = this._namespaceType;
    }
    if (this._overrideArtifactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideArtifactName = this._overrideArtifactName;
    }
    if (this._packaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.packaging = this._packaging;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondaryArtifactsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactIdentifier = undefined;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._name = undefined;
      this._namespaceType = undefined;
      this._overrideArtifactName = undefined;
      this._packaging = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactIdentifier = value.artifactIdentifier;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._name = value.name;
      this._namespaceType = value.namespaceType;
      this._overrideArtifactName = value.overrideArtifactName;
      this._packaging = value.packaging;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // artifact_identifier - computed: false, optional: false, required: true
  private _artifactIdentifier?: string; 
  public get artifactIdentifier() {
    return this.getStringAttribute('artifact_identifier');
  }
  public set artifactIdentifier(value: string) {
    this._artifactIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdentifierInput() {
    return this._artifactIdentifier;
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktn.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktn.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
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

  // namespace_type - computed: false, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // override_artifact_name - computed: false, optional: true, required: false
  private _overrideArtifactName?: boolean | cdktn.IResolvable; 
  public get overrideArtifactName() {
    return this.getBooleanAttribute('override_artifact_name');
  }
  public set overrideArtifactName(value: boolean | cdktn.IResolvable) {
    this._overrideArtifactName = value;
  }
  public resetOverrideArtifactName() {
    this._overrideArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideArtifactNameInput() {
    return this._overrideArtifactName;
  }

  // packaging - computed: false, optional: true, required: false
  private _packaging?: string; 
  public get packaging() {
    return this.getStringAttribute('packaging');
  }
  public set packaging(value: string) {
    this._packaging = value;
  }
  public resetPackaging() {
    this._packaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingInput() {
    return this._packaging;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class SecondaryArtifactsPropertyList extends cdktn.ComplexList {
  public internalValue? : SecondaryArtifactsProperty[] | cdktn.IResolvable

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
  public get(index: number): SecondaryArtifactsPropertyOutputReference {
    return new SecondaryArtifactsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecondarySourceVersionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#source_identifier TfProject#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#source_version TfProject#source_version}
  */
  readonly sourceVersion: string;
}
export class SecondarySourceVersionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecondarySourceVersionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdentifier = this._sourceIdentifier;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondarySourceVersionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIdentifier = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIdentifier = value.sourceIdentifier;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // source_identifier - computed: false, optional: false, required: true
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
  }

  // source_version - computed: false, optional: false, required: true
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class SecondarySourceVersionPropertyList extends cdktn.ComplexList {
  public internalValue? : SecondarySourceVersionProperty[] | cdktn.IResolvable

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
  public get(index: number): SecondarySourceVersionPropertyOutputReference {
    return new SecondarySourceVersionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecondarySourcesAuthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#resource TfProject#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
}
export class SecondarySourcesAuthPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecondarySourcesAuthProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondarySourcesAuthProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._type = value.type;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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
export interface SecondarySourcesBuildStatusConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#context TfProject#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#target_url TfProject#target_url}
  */
  readonly targetUrl?: string;
}
export class SecondarySourcesBuildStatusConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecondarySourcesBuildStatusConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondarySourcesBuildStatusConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._targetUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._targetUrl = value.targetUrl;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}
export interface SecondarySourcesGitSubmodulesConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#fetch_submodules TfProject#fetch_submodules}
  */
  readonly fetchSubmodules: boolean | cdktn.IResolvable;
}
export class SecondarySourcesGitSubmodulesConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecondarySourcesGitSubmodulesConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSubmodules = this._fetchSubmodules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondarySourcesGitSubmodulesConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchSubmodules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchSubmodules = value.fetchSubmodules;
    }
  }

  // fetch_submodules - computed: false, optional: false, required: true
  private _fetchSubmodules?: boolean | cdktn.IResolvable; 
  public get fetchSubmodules() {
    return this.getBooleanAttribute('fetch_submodules');
  }
  public set fetchSubmodules(value: boolean | cdktn.IResolvable) {
    this._fetchSubmodules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesInput() {
    return this._fetchSubmodules;
  }
}
export interface SecondarySourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#buildspec TfProject#buildspec}
  */
  readonly buildspec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#git_clone_depth TfProject#git_clone_depth}
  */
  readonly gitCloneDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#insecure_ssl TfProject#insecure_ssl}
  */
  readonly insecureSsl?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#report_build_status TfProject#report_build_status}
  */
  readonly reportBuildStatus?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#source_identifier TfProject#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#auth TfProject#auth}
  */
  readonly auth?: SecondarySourcesAuthProperty;
  /**
  * build_status_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#build_status_config TfProject#build_status_config}
  */
  readonly buildStatusConfig?: SecondarySourcesBuildStatusConfigProperty;
  /**
  * git_submodules_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#git_submodules_config TfProject#git_submodules_config}
  */
  readonly gitSubmodulesConfig?: SecondarySourcesGitSubmodulesConfigProperty;
}
export class SecondarySourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecondarySourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildspec = this._buildspec;
    }
    if (this._gitCloneDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCloneDepth = this._gitCloneDepth;
    }
    if (this._insecureSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSsl = this._insecureSsl;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._reportBuildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBuildStatus = this._reportBuildStatus;
    }
    if (this._sourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdentifier = this._sourceIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buildStatusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildStatusConfig = this._buildStatusConfig?.internalValue;
    }
    if (this._gitSubmodulesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSubmodulesConfig = this._gitSubmodulesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondarySourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildspec = undefined;
      this._gitCloneDepth = undefined;
      this._insecureSsl = undefined;
      this._location = undefined;
      this._reportBuildStatus = undefined;
      this._sourceIdentifier = undefined;
      this._type = undefined;
      this._auth.internalValue = undefined;
      this._buildStatusConfig.internalValue = undefined;
      this._gitSubmodulesConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildspec = value.buildspec;
      this._gitCloneDepth = value.gitCloneDepth;
      this._insecureSsl = value.insecureSsl;
      this._location = value.location;
      this._reportBuildStatus = value.reportBuildStatus;
      this._sourceIdentifier = value.sourceIdentifier;
      this._type = value.type;
      this._auth.internalValue = value.auth;
      this._buildStatusConfig.internalValue = value.buildStatusConfig;
      this._gitSubmodulesConfig.internalValue = value.gitSubmodulesConfig;
    }
  }

  // buildspec - computed: false, optional: true, required: false
  private _buildspec?: string; 
  public get buildspec() {
    return this.getStringAttribute('buildspec');
  }
  public set buildspec(value: string) {
    this._buildspec = value;
  }
  public resetBuildspec() {
    this._buildspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildspecInput() {
    return this._buildspec;
  }

  // git_clone_depth - computed: false, optional: true, required: false
  private _gitCloneDepth?: number; 
  public get gitCloneDepth() {
    return this.getNumberAttribute('git_clone_depth');
  }
  public set gitCloneDepth(value: number) {
    this._gitCloneDepth = value;
  }
  public resetGitCloneDepth() {
    this._gitCloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneDepthInput() {
    return this._gitCloneDepth;
  }

  // insecure_ssl - computed: false, optional: true, required: false
  private _insecureSsl?: boolean | cdktn.IResolvable; 
  public get insecureSsl() {
    return this.getBooleanAttribute('insecure_ssl');
  }
  public set insecureSsl(value: boolean | cdktn.IResolvable) {
    this._insecureSsl = value;
  }
  public resetInsecureSsl() {
    this._insecureSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSslInput() {
    return this._insecureSsl;
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

  // report_build_status - computed: false, optional: true, required: false
  private _reportBuildStatus?: boolean | cdktn.IResolvable; 
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }
  public set reportBuildStatus(value: boolean | cdktn.IResolvable) {
    this._reportBuildStatus = value;
  }
  public resetReportBuildStatus() {
    this._reportBuildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportBuildStatusInput() {
    return this._reportBuildStatus;
  }

  // source_identifier - computed: false, optional: false, required: true
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new SecondarySourcesAuthPropertyOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: SecondarySourcesAuthProperty) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // build_status_config - computed: false, optional: true, required: false
  private _buildStatusConfig = new SecondarySourcesBuildStatusConfigPropertyOutputReference(this, "build_status_config");
  public get buildStatusConfig() {
    return this._buildStatusConfig;
  }
  public putBuildStatusConfig(value: SecondarySourcesBuildStatusConfigProperty) {
    this._buildStatusConfig.internalValue = value;
  }
  public resetBuildStatusConfig() {
    this._buildStatusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildStatusConfigInput() {
    return this._buildStatusConfig.internalValue;
  }

  // git_submodules_config - computed: false, optional: true, required: false
  private _gitSubmodulesConfig = new SecondarySourcesGitSubmodulesConfigPropertyOutputReference(this, "git_submodules_config");
  public get gitSubmodulesConfig() {
    return this._gitSubmodulesConfig;
  }
  public putGitSubmodulesConfig(value: SecondarySourcesGitSubmodulesConfigProperty) {
    this._gitSubmodulesConfig.internalValue = value;
  }
  public resetGitSubmodulesConfig() {
    this._gitSubmodulesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSubmodulesConfigInput() {
    return this._gitSubmodulesConfig.internalValue;
  }
}

export class SecondarySourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : SecondarySourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): SecondarySourcesPropertyOutputReference {
    return new SecondarySourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceAuthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#resource TfProject#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
}
export class SourceAuthPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceAuthProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAuthProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._type = value.type;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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
export interface SourceBuildStatusConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#context TfProject#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#target_url TfProject#target_url}
  */
  readonly targetUrl?: string;
}
export class SourceBuildStatusConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceBuildStatusConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBuildStatusConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._targetUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._targetUrl = value.targetUrl;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}
export interface SourceGitSubmodulesConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#fetch_submodules TfProject#fetch_submodules}
  */
  readonly fetchSubmodules: boolean | cdktn.IResolvable;
}
export class SourceGitSubmodulesConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceGitSubmodulesConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSubmodules = this._fetchSubmodules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGitSubmodulesConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchSubmodules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchSubmodules = value.fetchSubmodules;
    }
  }

  // fetch_submodules - computed: false, optional: false, required: true
  private _fetchSubmodules?: boolean | cdktn.IResolvable; 
  public get fetchSubmodules() {
    return this.getBooleanAttribute('fetch_submodules');
  }
  public set fetchSubmodules(value: boolean | cdktn.IResolvable) {
    this._fetchSubmodules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesInput() {
    return this._fetchSubmodules;
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#buildspec TfProject#buildspec}
  */
  readonly buildspec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#git_clone_depth TfProject#git_clone_depth}
  */
  readonly gitCloneDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#insecure_ssl TfProject#insecure_ssl}
  */
  readonly insecureSsl?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#location TfProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#report_build_status TfProject#report_build_status}
  */
  readonly reportBuildStatus?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#type TfProject#type}
  */
  readonly type: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#auth TfProject#auth}
  */
  readonly auth?: SourceAuthProperty;
  /**
  * build_status_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#build_status_config TfProject#build_status_config}
  */
  readonly buildStatusConfig?: SourceBuildStatusConfigProperty;
  /**
  * git_submodules_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#git_submodules_config TfProject#git_submodules_config}
  */
  readonly gitSubmodulesConfig?: SourceGitSubmodulesConfigProperty;
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
    if (this._buildspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildspec = this._buildspec;
    }
    if (this._gitCloneDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCloneDepth = this._gitCloneDepth;
    }
    if (this._insecureSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSsl = this._insecureSsl;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._reportBuildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBuildStatus = this._reportBuildStatus;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buildStatusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildStatusConfig = this._buildStatusConfig?.internalValue;
    }
    if (this._gitSubmodulesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSubmodulesConfig = this._gitSubmodulesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildspec = undefined;
      this._gitCloneDepth = undefined;
      this._insecureSsl = undefined;
      this._location = undefined;
      this._reportBuildStatus = undefined;
      this._type = undefined;
      this._auth.internalValue = undefined;
      this._buildStatusConfig.internalValue = undefined;
      this._gitSubmodulesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildspec = value.buildspec;
      this._gitCloneDepth = value.gitCloneDepth;
      this._insecureSsl = value.insecureSsl;
      this._location = value.location;
      this._reportBuildStatus = value.reportBuildStatus;
      this._type = value.type;
      this._auth.internalValue = value.auth;
      this._buildStatusConfig.internalValue = value.buildStatusConfig;
      this._gitSubmodulesConfig.internalValue = value.gitSubmodulesConfig;
    }
  }

  // buildspec - computed: false, optional: true, required: false
  private _buildspec?: string; 
  public get buildspec() {
    return this.getStringAttribute('buildspec');
  }
  public set buildspec(value: string) {
    this._buildspec = value;
  }
  public resetBuildspec() {
    this._buildspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildspecInput() {
    return this._buildspec;
  }

  // git_clone_depth - computed: false, optional: true, required: false
  private _gitCloneDepth?: number; 
  public get gitCloneDepth() {
    return this.getNumberAttribute('git_clone_depth');
  }
  public set gitCloneDepth(value: number) {
    this._gitCloneDepth = value;
  }
  public resetGitCloneDepth() {
    this._gitCloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneDepthInput() {
    return this._gitCloneDepth;
  }

  // insecure_ssl - computed: false, optional: true, required: false
  private _insecureSsl?: boolean | cdktn.IResolvable; 
  public get insecureSsl() {
    return this.getBooleanAttribute('insecure_ssl');
  }
  public set insecureSsl(value: boolean | cdktn.IResolvable) {
    this._insecureSsl = value;
  }
  public resetInsecureSsl() {
    this._insecureSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSslInput() {
    return this._insecureSsl;
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

  // report_build_status - computed: false, optional: true, required: false
  private _reportBuildStatus?: boolean | cdktn.IResolvable; 
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }
  public set reportBuildStatus(value: boolean | cdktn.IResolvable) {
    this._reportBuildStatus = value;
  }
  public resetReportBuildStatus() {
    this._reportBuildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportBuildStatusInput() {
    return this._reportBuildStatus;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new SourceAuthPropertyOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: SourceAuthProperty) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // build_status_config - computed: false, optional: true, required: false
  private _buildStatusConfig = new SourceBuildStatusConfigPropertyOutputReference(this, "build_status_config");
  public get buildStatusConfig() {
    return this._buildStatusConfig;
  }
  public putBuildStatusConfig(value: SourceBuildStatusConfigProperty) {
    this._buildStatusConfig.internalValue = value;
  }
  public resetBuildStatusConfig() {
    this._buildStatusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildStatusConfigInput() {
    return this._buildStatusConfig.internalValue;
  }

  // git_submodules_config - computed: false, optional: true, required: false
  private _gitSubmodulesConfig = new SourceGitSubmodulesConfigPropertyOutputReference(this, "git_submodules_config");
  public get gitSubmodulesConfig() {
    return this._gitSubmodulesConfig;
  }
  public putGitSubmodulesConfig(value: SourceGitSubmodulesConfigProperty) {
    this._gitSubmodulesConfig.internalValue = value;
  }
  public resetGitSubmodulesConfig() {
    this._gitSubmodulesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSubmodulesConfigInput() {
    return this._gitSubmodulesConfig.internalValue;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#security_group_ids TfProject#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#subnets TfProject#subnets}
  */
  readonly subnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codebuild_project#vpc_id TfProject#vpc_id}
  */
  readonly vpcId: string;
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
}
