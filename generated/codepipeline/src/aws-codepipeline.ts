// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfCodepipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#execution_mode TfCodepipeline#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#id TfCodepipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#pipeline_type TfCodepipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#role_arn TfCodepipeline#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#tags TfCodepipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#tags_all TfCodepipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * artifact_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#artifact_store TfCodepipeline#artifact_store}
  */
  readonly artifactStore: TfCodepipeline.ArtifactStoreProperty[] | cdktn.IResolvable;
  /**
  * stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#stage TfCodepipeline#stage}
  */
  readonly stage: TfCodepipeline.StageProperty[] | cdktn.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#trigger TfCodepipeline#trigger}
  */
  readonly trigger?: TfCodepipeline.TriggerProperty[] | cdktn.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#variable TfCodepipeline#variable}
  */
  readonly variable?: TfCodepipeline.VariableProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline aws_codepipeline}
*/
export class TfCodepipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codepipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfCodepipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfCodepipeline to import
  * @param importFromId The id of the existing TfCodepipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfCodepipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_codepipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline aws_codepipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfCodepipelineConfig
  */
  public constructor(scope: Construct, id: string, config: TfCodepipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline',
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
    this._executionMode = config.executionMode;
    this._id = config.id;
    this._name = config.name;
    this._pipelineType = config.pipelineType;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._artifactStore.internalValue = config.artifactStore;
    this._stage.internalValue = config.stage;
    this._trigger.internalValue = config.trigger;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // execution_mode - computed: false, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
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

  // pipeline_type - computed: false, optional: true, required: false
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  public resetPipelineType() {
    this._pipelineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
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

  // trigger_all - computed: true, optional: false, required: false
  private _triggerAll = new TfCodepipeline.TriggerAllPropertyList(this, "trigger_all", false);
  public get triggerAll() {
    return this._triggerAll;
  }

  // artifact_store - computed: false, optional: false, required: true
  private _artifactStore = new TfCodepipeline.ArtifactStorePropertyList(this, "artifact_store", true);
  public get artifactStore() {
    return this._artifactStore;
  }
  public putArtifactStore(value: TfCodepipeline.ArtifactStoreProperty[] | cdktn.IResolvable) {
    this._artifactStore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreInput() {
    return this._artifactStore.internalValue;
  }

  // stage - computed: false, optional: false, required: true
  private _stage = new TfCodepipeline.StagePropertyList(this, "stage", false);
  public get stage() {
    return this._stage;
  }
  public putStage(value: TfCodepipeline.StageProperty[] | cdktn.IResolvable) {
    this._stage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new TfCodepipeline.TriggerPropertyList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: TfCodepipeline.TriggerProperty[] | cdktn.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new TfCodepipeline.VariablePropertyList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: TfCodepipeline.VariableProperty[] | cdktn.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_mode: cdktn.stringToTerraform(this._executionMode),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      pipeline_type: cdktn.stringToTerraform(this._pipelineType),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      artifact_store: cdktn.listMapper(tfCodepipelineArtifactStorePropertyToTerraform, true)(this._artifactStore.internalValue),
      stage: cdktn.listMapper(tfCodepipelineStagePropertyToTerraform, true)(this._stage.internalValue),
      trigger: cdktn.listMapper(tfCodepipelineTriggerPropertyToTerraform, true)(this._trigger.internalValue),
      variable: cdktn.listMapper(tfCodepipelineVariablePropertyToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_mode: {
        value: cdktn.stringToHclTerraform(this._executionMode),
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
      pipeline_type: {
        value: cdktn.stringToHclTerraform(this._pipelineType),
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
      artifact_store: {
        value: cdktn.listMapperHcl(tfCodepipelineArtifactStorePropertyToHclTerraform, true)(this._artifactStore.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfCodepipeline.ArtifactStorePropertyList",
      },
      stage: {
        value: cdktn.listMapperHcl(tfCodepipelineStagePropertyToHclTerraform, true)(this._stage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCodepipeline.StagePropertyList",
      },
      trigger: {
        value: cdktn.listMapperHcl(tfCodepipelineTriggerPropertyToHclTerraform, true)(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCodepipeline.TriggerPropertyList",
      },
      variable: {
        value: cdktn.listMapperHcl(tfCodepipelineVariablePropertyToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCodepipeline.VariablePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfCodepipelineTriggerAllGitConfigurationPullRequestBranchesPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPullRequestBranchesPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPullRequestFilePathsPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPullRequestFilePathsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPullRequestPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPullRequestPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPullRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPushBranchesPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPushBranchesPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPushFilePathsPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPushFilePathsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPushTagsPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPushTagsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPushPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPushPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationPushProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllGitConfigurationPropertyToTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllGitConfigurationPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllGitConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineTriggerAllPropertyToTerraform(struct?: TfCodepipeline.TriggerAllProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfCodepipelineTriggerAllPropertyToHclTerraform(struct?: TfCodepipeline.TriggerAllProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfCodepipelineEncryptionKeyPropertyToTerraform(struct?: TfCodepipeline.EncryptionKeyPropertyOutputReference | TfCodepipeline.EncryptionKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfCodepipelineEncryptionKeyPropertyToHclTerraform(struct?: TfCodepipeline.EncryptionKeyPropertyOutputReference | TfCodepipeline.EncryptionKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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


export function tfCodepipelineArtifactStorePropertyToTerraform(struct?: TfCodepipeline.ArtifactStoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    region: cdktn.stringToTerraform(struct!.region),
    type: cdktn.stringToTerraform(struct!.type),
    encryption_key: tfCodepipelineEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
  }
}


export function tfCodepipelineArtifactStorePropertyToHclTerraform(struct?: TfCodepipeline.ArtifactStoreProperty | cdktn.IResolvable): any {
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
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
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
    encryption_key: {
      value: tfCodepipelineEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "EncryptionKeyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineOutputArtifactsForComputeActionPropertyToTerraform(struct?: TfCodepipeline.OutputArtifactsForComputeActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    files: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.files),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfCodepipelineOutputArtifactsForComputeActionPropertyToHclTerraform(struct?: TfCodepipeline.OutputArtifactsForComputeActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    files: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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


export function tfCodepipelineActionPropertyToTerraform(struct?: TfCodepipeline.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configuration),
    input_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    output_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputArtifacts),
    output_variables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputVariables),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    run_order: cdktn.numberToTerraform(struct!.runOrder),
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    version: cdktn.stringToTerraform(struct!.version),
    output_artifacts_for_compute_action: cdktn.listMapper(tfCodepipelineOutputArtifactsForComputeActionPropertyToTerraform, true)(struct!.outputArtifactsForComputeAction),
  }
}


export function tfCodepipelineActionPropertyToHclTerraform(struct?: TfCodepipeline.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    output_artifacts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_variables: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputVariables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_order: {
      value: cdktn.numberToHclTerraform(struct!.runOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_artifacts_for_compute_action: {
      value: cdktn.listMapperHcl(tfCodepipelineOutputArtifactsForComputeActionPropertyToHclTerraform, true)(struct!.outputArtifactsForComputeAction),
      isBlock: true,
      type: "list",
      storageClassType: "OutputArtifactsForComputeActionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageBeforeEntryConditionRuleRuleTypeIdPropertyToTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageBeforeEntryConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfCodepipelineStageBeforeEntryConditionRuleRuleTypeIdPropertyToHclTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageBeforeEntryConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageBeforeEntryConditionRulePropertyToTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configuration),
    input_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    rule_type_id: tfCodepipelineStageBeforeEntryConditionRuleRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
  }
}


export function tfCodepipelineStageBeforeEntryConditionRulePropertyToHclTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type_id: {
      value: tfCodepipelineStageBeforeEntryConditionRuleRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "list",
      storageClassType: "StageBeforeEntryConditionRuleRuleTypeIdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageBeforeEntryConditionPropertyToTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionPropertyOutputReference | TfCodepipeline.StageBeforeEntryConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rule: cdktn.listMapper(tfCodepipelineStageBeforeEntryConditionRulePropertyToTerraform, true)(struct!.rule),
  }
}


export function tfCodepipelineStageBeforeEntryConditionPropertyToHclTerraform(struct?: TfCodepipeline.StageBeforeEntryConditionPropertyOutputReference | TfCodepipeline.StageBeforeEntryConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktn.listMapperHcl(tfCodepipelineStageBeforeEntryConditionRulePropertyToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "StageBeforeEntryConditionRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineBeforeEntryPropertyToTerraform(struct?: TfCodepipeline.BeforeEntryPropertyOutputReference | TfCodepipeline.BeforeEntryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: tfCodepipelineStageBeforeEntryConditionPropertyToTerraform(struct!.condition),
  }
}


export function tfCodepipelineBeforeEntryPropertyToHclTerraform(struct?: TfCodepipeline.BeforeEntryPropertyOutputReference | TfCodepipeline.BeforeEntryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: tfCodepipelineStageBeforeEntryConditionPropertyToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "StageBeforeEntryConditionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnFailureConditionRuleRuleTypeIdPropertyToTerraform(struct?: TfCodepipeline.StageOnFailureConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageOnFailureConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfCodepipelineStageOnFailureConditionRuleRuleTypeIdPropertyToHclTerraform(struct?: TfCodepipeline.StageOnFailureConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageOnFailureConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnFailureConditionRulePropertyToTerraform(struct?: TfCodepipeline.StageOnFailureConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configuration),
    input_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    rule_type_id: tfCodepipelineStageOnFailureConditionRuleRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
  }
}


export function tfCodepipelineStageOnFailureConditionRulePropertyToHclTerraform(struct?: TfCodepipeline.StageOnFailureConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type_id: {
      value: tfCodepipelineStageOnFailureConditionRuleRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnFailureConditionRuleRuleTypeIdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnFailureConditionPropertyToTerraform(struct?: TfCodepipeline.StageOnFailureConditionPropertyOutputReference | TfCodepipeline.StageOnFailureConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rule: cdktn.listMapper(tfCodepipelineStageOnFailureConditionRulePropertyToTerraform, true)(struct!.rule),
  }
}


export function tfCodepipelineStageOnFailureConditionPropertyToHclTerraform(struct?: TfCodepipeline.StageOnFailureConditionPropertyOutputReference | TfCodepipeline.StageOnFailureConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktn.listMapperHcl(tfCodepipelineStageOnFailureConditionRulePropertyToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnFailureConditionRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineRetryConfigurationPropertyToTerraform(struct?: TfCodepipeline.RetryConfigurationPropertyOutputReference | TfCodepipeline.RetryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retry_mode: cdktn.stringToTerraform(struct!.retryMode),
  }
}


export function tfCodepipelineRetryConfigurationPropertyToHclTerraform(struct?: TfCodepipeline.RetryConfigurationPropertyOutputReference | TfCodepipeline.RetryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retry_mode: {
      value: cdktn.stringToHclTerraform(struct!.retryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineOnFailurePropertyToTerraform(struct?: TfCodepipeline.OnFailurePropertyOutputReference | TfCodepipeline.OnFailureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    condition: tfCodepipelineStageOnFailureConditionPropertyToTerraform(struct!.condition),
    retry_configuration: tfCodepipelineRetryConfigurationPropertyToTerraform(struct!.retryConfiguration),
  }
}


export function tfCodepipelineOnFailurePropertyToHclTerraform(struct?: TfCodepipeline.OnFailurePropertyOutputReference | TfCodepipeline.OnFailureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: tfCodepipelineStageOnFailureConditionPropertyToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnFailureConditionPropertyList",
    },
    retry_configuration: {
      value: tfCodepipelineRetryConfigurationPropertyToHclTerraform(struct!.retryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RetryConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnSuccessConditionRuleRuleTypeIdPropertyToTerraform(struct?: TfCodepipeline.StageOnSuccessConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageOnSuccessConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfCodepipelineStageOnSuccessConditionRuleRuleTypeIdPropertyToHclTerraform(struct?: TfCodepipeline.StageOnSuccessConditionRuleRuleTypeIdPropertyOutputReference | TfCodepipeline.StageOnSuccessConditionRuleRuleTypeIdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnSuccessConditionRulePropertyToTerraform(struct?: TfCodepipeline.StageOnSuccessConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configuration),
    input_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    rule_type_id: tfCodepipelineStageOnSuccessConditionRuleRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
  }
}


export function tfCodepipelineStageOnSuccessConditionRulePropertyToHclTerraform(struct?: TfCodepipeline.StageOnSuccessConditionRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type_id: {
      value: tfCodepipelineStageOnSuccessConditionRuleRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnSuccessConditionRuleRuleTypeIdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStageOnSuccessConditionPropertyToTerraform(struct?: TfCodepipeline.StageOnSuccessConditionPropertyOutputReference | TfCodepipeline.StageOnSuccessConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rule: cdktn.listMapper(tfCodepipelineStageOnSuccessConditionRulePropertyToTerraform, true)(struct!.rule),
  }
}


export function tfCodepipelineStageOnSuccessConditionPropertyToHclTerraform(struct?: TfCodepipeline.StageOnSuccessConditionPropertyOutputReference | TfCodepipeline.StageOnSuccessConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktn.listMapperHcl(tfCodepipelineStageOnSuccessConditionRulePropertyToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnSuccessConditionRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineOnSuccessPropertyToTerraform(struct?: TfCodepipeline.OnSuccessPropertyOutputReference | TfCodepipeline.OnSuccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: tfCodepipelineStageOnSuccessConditionPropertyToTerraform(struct!.condition),
  }
}


export function tfCodepipelineOnSuccessPropertyToHclTerraform(struct?: TfCodepipeline.OnSuccessPropertyOutputReference | TfCodepipeline.OnSuccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: tfCodepipelineStageOnSuccessConditionPropertyToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "StageOnSuccessConditionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineStagePropertyToTerraform(struct?: TfCodepipeline.StageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action: cdktn.listMapper(tfCodepipelineActionPropertyToTerraform, true)(struct!.action),
    before_entry: tfCodepipelineBeforeEntryPropertyToTerraform(struct!.beforeEntry),
    on_failure: tfCodepipelineOnFailurePropertyToTerraform(struct!.onFailure),
    on_success: tfCodepipelineOnSuccessPropertyToTerraform(struct!.onSuccess),
  }
}


export function tfCodepipelineStagePropertyToHclTerraform(struct?: TfCodepipeline.StageProperty | cdktn.IResolvable): any {
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
    action: {
      value: cdktn.listMapperHcl(tfCodepipelineActionPropertyToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ActionPropertyList",
    },
    before_entry: {
      value: tfCodepipelineBeforeEntryPropertyToHclTerraform(struct!.beforeEntry),
      isBlock: true,
      type: "list",
      storageClassType: "BeforeEntryPropertyList",
    },
    on_failure: {
      value: tfCodepipelineOnFailurePropertyToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "OnFailurePropertyList",
    },
    on_success: {
      value: tfCodepipelineOnSuccessPropertyToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "OnSuccessPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPullRequestBranchesPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestBranchesPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPullRequestBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function tfCodepipelineTriggerGitConfigurationPullRequestBranchesPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestBranchesPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPullRequestBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPullRequestFilePathsPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestFilePathsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPullRequestFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function tfCodepipelineTriggerGitConfigurationPullRequestFilePathsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestFilePathsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPullRequestFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPullRequestPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    branches: tfCodepipelineTriggerGitConfigurationPullRequestBranchesPropertyToTerraform(struct!.branches),
    file_paths: tfCodepipelineTriggerGitConfigurationPullRequestFilePathsPropertyToTerraform(struct!.filePaths),
  }
}


export function tfCodepipelineTriggerGitConfigurationPullRequestPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPullRequestProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    branches: {
      value: tfCodepipelineTriggerGitConfigurationPullRequestBranchesPropertyToHclTerraform(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPullRequestBranchesPropertyList",
    },
    file_paths: {
      value: tfCodepipelineTriggerGitConfigurationPullRequestFilePathsPropertyToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPullRequestFilePathsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPushBranchesPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushBranchesPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function tfCodepipelineTriggerGitConfigurationPushBranchesPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushBranchesPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushBranchesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPushFilePathsPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushFilePathsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function tfCodepipelineTriggerGitConfigurationPushFilePathsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushFilePathsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushFilePathsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPushTagsPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushTagsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function tfCodepipelineTriggerGitConfigurationPushTagsPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushTagsPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationPushTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPushPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branches: tfCodepipelineTriggerGitConfigurationPushBranchesPropertyToTerraform(struct!.branches),
    file_paths: tfCodepipelineTriggerGitConfigurationPushFilePathsPropertyToTerraform(struct!.filePaths),
    tags: tfCodepipelineTriggerGitConfigurationPushTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfCodepipelineTriggerGitConfigurationPushPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPushProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branches: {
      value: tfCodepipelineTriggerGitConfigurationPushBranchesPropertyToHclTerraform(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPushBranchesPropertyList",
    },
    file_paths: {
      value: tfCodepipelineTriggerGitConfigurationPushFilePathsPropertyToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPushFilePathsPropertyList",
    },
    tags: {
      value: tfCodepipelineTriggerGitConfigurationPushTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPushTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerGitConfigurationPropertyToTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_action_name: cdktn.stringToTerraform(struct!.sourceActionName),
    pull_request: cdktn.listMapper(tfCodepipelineTriggerGitConfigurationPullRequestPropertyToTerraform, true)(struct!.pullRequest),
    push: cdktn.listMapper(tfCodepipelineTriggerGitConfigurationPushPropertyToTerraform, true)(struct!.push),
  }
}


export function tfCodepipelineTriggerGitConfigurationPropertyToHclTerraform(struct?: TfCodepipeline.TriggerGitConfigurationPropertyOutputReference | TfCodepipeline.TriggerGitConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_action_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: cdktn.listMapperHcl(tfCodepipelineTriggerGitConfigurationPullRequestPropertyToHclTerraform, true)(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPullRequestPropertyList",
    },
    push: {
      value: cdktn.listMapperHcl(tfCodepipelineTriggerGitConfigurationPushPropertyToHclTerraform, true)(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPushPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineTriggerPropertyToTerraform(struct?: TfCodepipeline.TriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider_type: cdktn.stringToTerraform(struct!.providerType),
    git_configuration: tfCodepipelineTriggerGitConfigurationPropertyToTerraform(struct!.gitConfiguration),
  }
}


export function tfCodepipelineTriggerPropertyToHclTerraform(struct?: TfCodepipeline.TriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provider_type: {
      value: cdktn.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_configuration: {
      value: tfCodepipelineTriggerGitConfigurationPropertyToHclTerraform(struct!.gitConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerGitConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfCodepipelineVariablePropertyToTerraform(struct?: TfCodepipeline.VariableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfCodepipelineVariablePropertyToHclTerraform(struct?: TfCodepipeline.VariableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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


export namespace TfCodepipeline {
export interface TriggerAllGitConfigurationPullRequestBranchesProperty {
}
export class TriggerAllGitConfigurationPullRequestBranchesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPullRequestBranchesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPullRequestBranchesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }
}

export class TriggerAllGitConfigurationPullRequestBranchesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPullRequestBranchesPropertyOutputReference {
    return new TriggerAllGitConfigurationPullRequestBranchesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPullRequestFilePathsProperty {
}
export class TriggerAllGitConfigurationPullRequestFilePathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPullRequestFilePathsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPullRequestFilePathsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }
}

export class TriggerAllGitConfigurationPullRequestFilePathsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPullRequestFilePathsPropertyOutputReference {
    return new TriggerAllGitConfigurationPullRequestFilePathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPullRequestProperty {
}
export class TriggerAllGitConfigurationPullRequestPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPullRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPullRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branches - computed: true, optional: false, required: false
  private _branches = new TriggerAllGitConfigurationPullRequestBranchesPropertyList(this, "branches", false);
  public get branches() {
    return this._branches;
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getListAttribute('events');
  }

  // file_paths - computed: true, optional: false, required: false
  private _filePaths = new TriggerAllGitConfigurationPullRequestFilePathsPropertyList(this, "file_paths", false);
  public get filePaths() {
    return this._filePaths;
  }
}

export class TriggerAllGitConfigurationPullRequestPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPullRequestPropertyOutputReference {
    return new TriggerAllGitConfigurationPullRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPushBranchesProperty {
}
export class TriggerAllGitConfigurationPushBranchesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPushBranchesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPushBranchesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }
}

export class TriggerAllGitConfigurationPushBranchesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPushBranchesPropertyOutputReference {
    return new TriggerAllGitConfigurationPushBranchesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPushFilePathsProperty {
}
export class TriggerAllGitConfigurationPushFilePathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPushFilePathsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPushFilePathsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }
}

export class TriggerAllGitConfigurationPushFilePathsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPushFilePathsPropertyOutputReference {
    return new TriggerAllGitConfigurationPushFilePathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPushTagsProperty {
}
export class TriggerAllGitConfigurationPushTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPushTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPushTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }
}

export class TriggerAllGitConfigurationPushTagsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPushTagsPropertyOutputReference {
    return new TriggerAllGitConfigurationPushTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationPushProperty {
}
export class TriggerAllGitConfigurationPushPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationPushProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationPushProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branches - computed: true, optional: false, required: false
  private _branches = new TriggerAllGitConfigurationPushBranchesPropertyList(this, "branches", false);
  public get branches() {
    return this._branches;
  }

  // file_paths - computed: true, optional: false, required: false
  private _filePaths = new TriggerAllGitConfigurationPushFilePathsPropertyList(this, "file_paths", false);
  public get filePaths() {
    return this._filePaths;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new TriggerAllGitConfigurationPushTagsPropertyList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class TriggerAllGitConfigurationPushPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPushPropertyOutputReference {
    return new TriggerAllGitConfigurationPushPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllGitConfigurationProperty {
}
export class TriggerAllGitConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllGitConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllGitConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pull_request - computed: true, optional: false, required: false
  private _pullRequest = new TriggerAllGitConfigurationPullRequestPropertyList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }

  // push - computed: true, optional: false, required: false
  private _push = new TriggerAllGitConfigurationPushPropertyList(this, "push", false);
  public get push() {
    return this._push;
  }

  // source_action_name - computed: true, optional: false, required: false
  public get sourceActionName() {
    return this.getStringAttribute('source_action_name');
  }
}

export class TriggerAllGitConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllGitConfigurationPropertyOutputReference {
    return new TriggerAllGitConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerAllProperty {
}
export class TriggerAllPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerAllProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerAllProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // git_configuration - computed: true, optional: false, required: false
  private _gitConfiguration = new TriggerAllGitConfigurationPropertyList(this, "git_configuration", false);
  public get gitConfiguration() {
    return this._gitConfiguration;
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
}

export class TriggerAllPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerAllPropertyOutputReference {
    return new TriggerAllPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#id TfCodepipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#type TfCodepipeline#type}
  */
  readonly type: string;
}
export class EncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionKeyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionKeyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface ArtifactStoreProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#location TfCodepipeline#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#type TfCodepipeline#type}
  */
  readonly type: string;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#encryption_key TfCodepipeline#encryption_key}
  */
  readonly encryptionKey?: EncryptionKeyProperty;
}
export class ArtifactStorePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArtifactStoreProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactStoreProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._region = undefined;
      this._type = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._region = value.region;
      this._type = value.type;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // region - computed: false, optional: true, required: false
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

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new EncryptionKeyPropertyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: EncryptionKeyProperty) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}

export class ArtifactStorePropertyList extends cdktn.ComplexList {
  public internalValue? : ArtifactStoreProperty[] | cdktn.IResolvable

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
  public get(index: number): ArtifactStorePropertyOutputReference {
    return new ArtifactStorePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputArtifactsForComputeActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#files TfCodepipeline#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
}
export class OutputArtifactsForComputeActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputArtifactsForComputeActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputArtifactsForComputeActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._name = value.name;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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

export class OutputArtifactsForComputeActionPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputArtifactsForComputeActionProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputArtifactsForComputeActionPropertyOutputReference {
    return new OutputArtifactsForComputeActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#category TfCodepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#commands TfCodepipeline#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#configuration TfCodepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#input_artifacts TfCodepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#namespace TfCodepipeline#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#output_artifacts TfCodepipeline#output_artifacts}
  */
  readonly outputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#output_variables TfCodepipeline#output_variables}
  */
  readonly outputVariables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#owner TfCodepipeline#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#provider TfCodepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#role_arn TfCodepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#run_order TfCodepipeline#run_order}
  */
  readonly runOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#timeout_in_minutes TfCodepipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#version TfCodepipeline#version}
  */
  readonly version: string;
  /**
  * output_artifacts_for_compute_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#output_artifacts_for_compute_action TfCodepipeline#output_artifacts_for_compute_action}
  */
  readonly outputArtifactsForComputeAction?: OutputArtifactsForComputeActionProperty[] | cdktn.IResolvable;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._outputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputArtifacts = this._outputArtifacts;
    }
    if (this._outputVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariables = this._outputVariables;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._runOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOrder = this._runOrder;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._outputArtifactsForComputeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputArtifactsForComputeAction = this._outputArtifactsForComputeAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._outputArtifacts = undefined;
      this._outputVariables = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._runOrder = undefined;
      this._timeoutInMinutes = undefined;
      this._version = undefined;
      this._outputArtifactsForComputeAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts = value.inputArtifacts;
      this._name = value.name;
      this._namespace = value.namespace;
      this._outputArtifacts = value.outputArtifacts;
      this._outputVariables = value.outputVariables;
      this._owner = value.owner;
      this._provider = value.provider;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._runOrder = value.runOrder;
      this._timeoutInMinutes = value.timeoutInMinutes;
      this._version = value.version;
      this._outputArtifactsForComputeAction.internalValue = value.outputArtifactsForComputeAction;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts?: string[]; 
  public get inputArtifacts() {
    return this.getListAttribute('input_artifacts');
  }
  public set inputArtifacts(value: string[]) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
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

  // output_artifacts - computed: false, optional: true, required: false
  private _outputArtifacts?: string[]; 
  public get outputArtifacts() {
    return this.getListAttribute('output_artifacts');
  }
  public set outputArtifacts(value: string[]) {
    this._outputArtifacts = value;
  }
  public resetOutputArtifacts() {
    this._outputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactsInput() {
    return this._outputArtifacts;
  }

  // output_variables - computed: false, optional: true, required: false
  private _outputVariables?: string[]; 
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
  public set outputVariables(value: string[]) {
    this._outputVariables = value;
  }
  public resetOutputVariables() {
    this._outputVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariablesInput() {
    return this._outputVariables;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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

  // run_order - computed: true, optional: true, required: false
  private _runOrder?: number; 
  public get runOrder() {
    return this.getNumberAttribute('run_order');
  }
  public set runOrder(value: number) {
    this._runOrder = value;
  }
  public resetRunOrder() {
    this._runOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOrderInput() {
    return this._runOrder;
  }

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // output_artifacts_for_compute_action - computed: false, optional: true, required: false
  private _outputArtifactsForComputeAction = new OutputArtifactsForComputeActionPropertyList(this, "output_artifacts_for_compute_action", false);
  public get outputArtifactsForComputeAction() {
    return this._outputArtifactsForComputeAction;
  }
  public putOutputArtifactsForComputeAction(value: OutputArtifactsForComputeActionProperty[] | cdktn.IResolvable) {
    this._outputArtifactsForComputeAction.internalValue = value;
  }
  public resetOutputArtifactsForComputeAction() {
    this._outputArtifactsForComputeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactsForComputeActionInput() {
    return this._outputArtifactsForComputeAction.internalValue;
  }
}

export class ActionPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionPropertyOutputReference {
    return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageBeforeEntryConditionRuleRuleTypeIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#category TfCodepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#owner TfCodepipeline#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#provider TfCodepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#version TfCodepipeline#version}
  */
  readonly version?: string;
}
export class StageBeforeEntryConditionRuleRuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageBeforeEntryConditionRuleRuleTypeIdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageBeforeEntryConditionRuleRuleTypeIdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StageBeforeEntryConditionRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#commands TfCodepipeline#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#configuration TfCodepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#input_artifacts TfCodepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#role_arn TfCodepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#timeout_in_minutes TfCodepipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * rule_type_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule_type_id TfCodepipeline#rule_type_id}
  */
  readonly ruleTypeId: StageBeforeEntryConditionRuleRuleTypeIdProperty;
}
export class StageBeforeEntryConditionRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageBeforeEntryConditionRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageBeforeEntryConditionRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._timeoutInMinutes = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._timeoutInMinutes = value.timeoutInMinutes;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts?: string[]; 
  public get inputArtifacts() {
    return this.getListAttribute('input_artifacts');
  }
  public set inputArtifacts(value: string[]) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
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

  // region - computed: false, optional: true, required: false
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

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // rule_type_id - computed: false, optional: false, required: true
  private _ruleTypeId = new StageBeforeEntryConditionRuleRuleTypeIdPropertyOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: StageBeforeEntryConditionRuleRuleTypeIdProperty) {
    this._ruleTypeId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class StageBeforeEntryConditionRulePropertyList extends cdktn.ComplexList {
  public internalValue? : StageBeforeEntryConditionRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): StageBeforeEntryConditionRulePropertyOutputReference {
    return new StageBeforeEntryConditionRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageBeforeEntryConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#result TfCodepipeline#result}
  */
  readonly result?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule TfCodepipeline#rule}
  */
  readonly rule: StageBeforeEntryConditionRuleProperty[] | cdktn.IResolvable;
}
export class StageBeforeEntryConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageBeforeEntryConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageBeforeEntryConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._result = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._result = value.result;
      this._rule.internalValue = value.rule;
    }
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new StageBeforeEntryConditionRulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: StageBeforeEntryConditionRuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface BeforeEntryProperty {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#condition TfCodepipeline#condition}
  */
  readonly condition: StageBeforeEntryConditionProperty;
}
export class BeforeEntryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeforeEntryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeforeEntryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new StageBeforeEntryConditionPropertyOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: StageBeforeEntryConditionProperty) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface StageOnFailureConditionRuleRuleTypeIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#category TfCodepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#owner TfCodepipeline#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#provider TfCodepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#version TfCodepipeline#version}
  */
  readonly version?: string;
}
export class StageOnFailureConditionRuleRuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageOnFailureConditionRuleRuleTypeIdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnFailureConditionRuleRuleTypeIdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StageOnFailureConditionRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#commands TfCodepipeline#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#configuration TfCodepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#input_artifacts TfCodepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#role_arn TfCodepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#timeout_in_minutes TfCodepipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * rule_type_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule_type_id TfCodepipeline#rule_type_id}
  */
  readonly ruleTypeId: StageOnFailureConditionRuleRuleTypeIdProperty;
}
export class StageOnFailureConditionRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageOnFailureConditionRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnFailureConditionRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._timeoutInMinutes = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._timeoutInMinutes = value.timeoutInMinutes;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts?: string[]; 
  public get inputArtifacts() {
    return this.getListAttribute('input_artifacts');
  }
  public set inputArtifacts(value: string[]) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
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

  // region - computed: false, optional: true, required: false
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

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // rule_type_id - computed: false, optional: false, required: true
  private _ruleTypeId = new StageOnFailureConditionRuleRuleTypeIdPropertyOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: StageOnFailureConditionRuleRuleTypeIdProperty) {
    this._ruleTypeId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class StageOnFailureConditionRulePropertyList extends cdktn.ComplexList {
  public internalValue? : StageOnFailureConditionRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): StageOnFailureConditionRulePropertyOutputReference {
    return new StageOnFailureConditionRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageOnFailureConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#result TfCodepipeline#result}
  */
  readonly result?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule TfCodepipeline#rule}
  */
  readonly rule: StageOnFailureConditionRuleProperty[] | cdktn.IResolvable;
}
export class StageOnFailureConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageOnFailureConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnFailureConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._result = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._result = value.result;
      this._rule.internalValue = value.rule;
    }
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new StageOnFailureConditionRulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: StageOnFailureConditionRuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface RetryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#retry_mode TfCodepipeline#retry_mode}
  */
  readonly retryMode?: string;
}
export class RetryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryMode = this._retryMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retryMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retryMode = value.retryMode;
    }
  }

  // retry_mode - computed: false, optional: true, required: false
  private _retryMode?: string; 
  public get retryMode() {
    return this.getStringAttribute('retry_mode');
  }
  public set retryMode(value: string) {
    this._retryMode = value;
  }
  public resetRetryMode() {
    this._retryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryModeInput() {
    return this._retryMode;
  }
}
export interface OnFailureProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#result TfCodepipeline#result}
  */
  readonly result?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#condition TfCodepipeline#condition}
  */
  readonly condition?: StageOnFailureConditionProperty;
  /**
  * retry_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#retry_configuration TfCodepipeline#retry_configuration}
  */
  readonly retryConfiguration?: RetryConfigurationProperty;
}
export class OnFailurePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnFailureProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._retryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConfiguration = this._retryConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnFailureProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._result = undefined;
      this._condition.internalValue = undefined;
      this._retryConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._result = value.result;
      this._condition.internalValue = value.condition;
      this._retryConfiguration.internalValue = value.retryConfiguration;
    }
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new StageOnFailureConditionPropertyOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: StageOnFailureConditionProperty) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // retry_configuration - computed: false, optional: true, required: false
  private _retryConfiguration = new RetryConfigurationPropertyOutputReference(this, "retry_configuration");
  public get retryConfiguration() {
    return this._retryConfiguration;
  }
  public putRetryConfiguration(value: RetryConfigurationProperty) {
    this._retryConfiguration.internalValue = value;
  }
  public resetRetryConfiguration() {
    this._retryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigurationInput() {
    return this._retryConfiguration.internalValue;
  }
}
export interface StageOnSuccessConditionRuleRuleTypeIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#category TfCodepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#owner TfCodepipeline#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#provider TfCodepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#version TfCodepipeline#version}
  */
  readonly version?: string;
}
export class StageOnSuccessConditionRuleRuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageOnSuccessConditionRuleRuleTypeIdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnSuccessConditionRuleRuleTypeIdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StageOnSuccessConditionRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#commands TfCodepipeline#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#configuration TfCodepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#input_artifacts TfCodepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#region TfCodepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#role_arn TfCodepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#timeout_in_minutes TfCodepipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * rule_type_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule_type_id TfCodepipeline#rule_type_id}
  */
  readonly ruleTypeId: StageOnSuccessConditionRuleRuleTypeIdProperty;
}
export class StageOnSuccessConditionRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageOnSuccessConditionRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnSuccessConditionRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._timeoutInMinutes = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._timeoutInMinutes = value.timeoutInMinutes;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts?: string[]; 
  public get inputArtifacts() {
    return this.getListAttribute('input_artifacts');
  }
  public set inputArtifacts(value: string[]) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
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

  // region - computed: false, optional: true, required: false
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

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // rule_type_id - computed: false, optional: false, required: true
  private _ruleTypeId = new StageOnSuccessConditionRuleRuleTypeIdPropertyOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: StageOnSuccessConditionRuleRuleTypeIdProperty) {
    this._ruleTypeId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class StageOnSuccessConditionRulePropertyList extends cdktn.ComplexList {
  public internalValue? : StageOnSuccessConditionRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): StageOnSuccessConditionRulePropertyOutputReference {
    return new StageOnSuccessConditionRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageOnSuccessConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#result TfCodepipeline#result}
  */
  readonly result?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#rule TfCodepipeline#rule}
  */
  readonly rule: StageOnSuccessConditionRuleProperty[] | cdktn.IResolvable;
}
export class StageOnSuccessConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageOnSuccessConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageOnSuccessConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._result = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._result = value.result;
      this._rule.internalValue = value.rule;
    }
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new StageOnSuccessConditionRulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: StageOnSuccessConditionRuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface OnSuccessProperty {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#condition TfCodepipeline#condition}
  */
  readonly condition: StageOnSuccessConditionProperty;
}
export class OnSuccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnSuccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnSuccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new StageOnSuccessConditionPropertyOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: StageOnSuccessConditionProperty) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface StageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#action TfCodepipeline#action}
  */
  readonly action: ActionProperty[] | cdktn.IResolvable;
  /**
  * before_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#before_entry TfCodepipeline#before_entry}
  */
  readonly beforeEntry?: BeforeEntryProperty;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#on_failure TfCodepipeline#on_failure}
  */
  readonly onFailure?: OnFailureProperty;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#on_success TfCodepipeline#on_success}
  */
  readonly onSuccess?: OnSuccessProperty;
}
export class StagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._beforeEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeEntry = this._beforeEntry?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._beforeEntry.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._beforeEntry.internalValue = value.beforeEntry;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
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

  // action - computed: false, optional: false, required: true
  private _action = new ActionPropertyList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: ActionProperty[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // before_entry - computed: false, optional: true, required: false
  private _beforeEntry = new BeforeEntryPropertyOutputReference(this, "before_entry");
  public get beforeEntry() {
    return this._beforeEntry;
  }
  public putBeforeEntry(value: BeforeEntryProperty) {
    this._beforeEntry.internalValue = value;
  }
  public resetBeforeEntry() {
    this._beforeEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeEntryInput() {
    return this._beforeEntry.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new OnFailurePropertyOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: OnFailureProperty) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new OnSuccessPropertyOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: OnSuccessProperty) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}

export class StagePropertyList extends cdktn.ComplexList {
  public internalValue? : StageProperty[] | cdktn.IResolvable

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
  public get(index: number): StagePropertyOutputReference {
    return new StagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerGitConfigurationPullRequestBranchesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#excludes TfCodepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#includes TfCodepipeline#includes}
  */
  readonly includes?: string[];
}
export class TriggerGitConfigurationPullRequestBranchesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationPullRequestBranchesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPullRequestBranchesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface TriggerGitConfigurationPullRequestFilePathsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#excludes TfCodepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#includes TfCodepipeline#includes}
  */
  readonly includes?: string[];
}
export class TriggerGitConfigurationPullRequestFilePathsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationPullRequestFilePathsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPullRequestFilePathsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface TriggerGitConfigurationPullRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#events TfCodepipeline#events}
  */
  readonly events?: string[];
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#branches TfCodepipeline#branches}
  */
  readonly branches?: TriggerGitConfigurationPullRequestBranchesProperty;
  /**
  * file_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#file_paths TfCodepipeline#file_paths}
  */
  readonly filePaths?: TriggerGitConfigurationPullRequestFilePathsProperty;
}
export class TriggerGitConfigurationPullRequestPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerGitConfigurationPullRequestProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPullRequestProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._branches.internalValue = undefined;
      this._filePaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._branches.internalValue = value.branches;
      this._filePaths.internalValue = value.filePaths;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new TriggerGitConfigurationPullRequestBranchesPropertyOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TriggerGitConfigurationPullRequestBranchesProperty) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // file_paths - computed: false, optional: true, required: false
  private _filePaths = new TriggerGitConfigurationPullRequestFilePathsPropertyOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: TriggerGitConfigurationPullRequestFilePathsProperty) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }
}

export class TriggerGitConfigurationPullRequestPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggerGitConfigurationPullRequestProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggerGitConfigurationPullRequestPropertyOutputReference {
    return new TriggerGitConfigurationPullRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerGitConfigurationPushBranchesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#excludes TfCodepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#includes TfCodepipeline#includes}
  */
  readonly includes?: string[];
}
export class TriggerGitConfigurationPushBranchesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationPushBranchesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPushBranchesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface TriggerGitConfigurationPushFilePathsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#excludes TfCodepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#includes TfCodepipeline#includes}
  */
  readonly includes?: string[];
}
export class TriggerGitConfigurationPushFilePathsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationPushFilePathsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPushFilePathsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface TriggerGitConfigurationPushTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#excludes TfCodepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#includes TfCodepipeline#includes}
  */
  readonly includes?: string[];
}
export class TriggerGitConfigurationPushTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationPushTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPushTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface TriggerGitConfigurationPushProperty {
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#branches TfCodepipeline#branches}
  */
  readonly branches?: TriggerGitConfigurationPushBranchesProperty;
  /**
  * file_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#file_paths TfCodepipeline#file_paths}
  */
  readonly filePaths?: TriggerGitConfigurationPushFilePathsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#tags TfCodepipeline#tags}
  */
  readonly tags?: TriggerGitConfigurationPushTagsProperty;
}
export class TriggerGitConfigurationPushPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerGitConfigurationPushProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationPushProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filePaths.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filePaths.internalValue = value.filePaths;
      this._tags.internalValue = value.tags;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new TriggerGitConfigurationPushBranchesPropertyOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TriggerGitConfigurationPushBranchesProperty) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // file_paths - computed: false, optional: true, required: false
  private _filePaths = new TriggerGitConfigurationPushFilePathsPropertyOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: TriggerGitConfigurationPushFilePathsProperty) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new TriggerGitConfigurationPushTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: TriggerGitConfigurationPushTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class TriggerGitConfigurationPushPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggerGitConfigurationPushProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggerGitConfigurationPushPropertyOutputReference {
    return new TriggerGitConfigurationPushPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerGitConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#source_action_name TfCodepipeline#source_action_name}
  */
  readonly sourceActionName: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#pull_request TfCodepipeline#pull_request}
  */
  readonly pullRequest?: TriggerGitConfigurationPullRequestProperty[] | cdktn.IResolvable;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#push TfCodepipeline#push}
  */
  readonly push?: TriggerGitConfigurationPushProperty[] | cdktn.IResolvable;
}
export class TriggerGitConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerGitConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceActionName = this._sourceActionName;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerGitConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceActionName = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceActionName = value.sourceActionName;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
  }

  // source_action_name - computed: false, optional: false, required: true
  private _sourceActionName?: string; 
  public get sourceActionName() {
    return this.getStringAttribute('source_action_name');
  }
  public set sourceActionName(value: string) {
    this._sourceActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceActionNameInput() {
    return this._sourceActionName;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new TriggerGitConfigurationPullRequestPropertyList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: TriggerGitConfigurationPullRequestProperty[] | cdktn.IResolvable) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new TriggerGitConfigurationPushPropertyList(this, "push", false);
  public get push() {
    return this._push;
  }
  public putPush(value: TriggerGitConfigurationPushProperty[] | cdktn.IResolvable) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface TriggerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#provider_type TfCodepipeline#provider_type}
  */
  readonly providerType: string;
  /**
  * git_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#git_configuration TfCodepipeline#git_configuration}
  */
  readonly gitConfiguration: TriggerGitConfigurationProperty;
}
export class TriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._gitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitConfiguration = this._gitConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerType = undefined;
      this._gitConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerType = value.providerType;
      this._gitConfiguration.internalValue = value.gitConfiguration;
    }
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // git_configuration - computed: false, optional: false, required: true
  private _gitConfiguration = new TriggerGitConfigurationPropertyOutputReference(this, "git_configuration");
  public get gitConfiguration() {
    return this._gitConfiguration;
  }
  public putGitConfiguration(value: TriggerGitConfigurationProperty) {
    this._gitConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigurationInput() {
    return this._gitConfiguration.internalValue;
  }
}

export class TriggerPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggerProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggerPropertyOutputReference {
    return new TriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VariableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#default_value TfCodepipeline#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#description TfCodepipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codepipeline#name TfCodepipeline#name}
  */
  readonly name: string;
}
export class VariablePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VariableProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VariableProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

export class VariablePropertyList extends cdktn.ComplexList {
  public internalValue? : VariableProperty[] | cdktn.IResolvable

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
  public get(index: number): VariablePropertyOutputReference {
    return new VariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
