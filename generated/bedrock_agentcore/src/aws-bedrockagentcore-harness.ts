// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsHarnessConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#allowed_tools AwsHarness#allowed_tools}
  */
  readonly allowedTools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#environment_variables AwsHarness#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#execution_role_arn AwsHarness#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#harness_name AwsHarness#harness_name}
  */
  readonly harnessName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_iterations AwsHarness#max_iterations}
  */
  readonly maxIterations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_tokens AwsHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#region AwsHarness#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#tags AwsHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#timeout_seconds AwsHarness#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#truncation AwsHarness#truncation}
  */
  readonly truncation?: AwsHarness.TruncationProperty[] | cdktn.IResolvable;
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#authorizer_configuration AwsHarness#authorizer_configuration}
  */
  readonly authorizerConfiguration?: AwsHarness.AuthorizerConfigurationProperty[] | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#environment AwsHarness#environment}
  */
  readonly environment?: AwsHarness.EnvironmentProperty[] | cdktn.IResolvable;
  /**
  * environment_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#environment_artifact AwsHarness#environment_artifact}
  */
  readonly environmentArtifact?: AwsHarness.EnvironmentArtifactProperty[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#memory AwsHarness#memory}
  */
  readonly memory?: AwsHarness.MemoryProperty[] | cdktn.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#model AwsHarness#model}
  */
  readonly model?: AwsHarness.ModelProperty[] | cdktn.IResolvable;
  /**
  * skill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#skill AwsHarness#skill}
  */
  readonly skill?: AwsHarness.SkillProperty[] | cdktn.IResolvable;
  /**
  * system_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#system_prompt AwsHarness#system_prompt}
  */
  readonly systemPrompt?: AwsHarness.SystemPromptProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#timeouts AwsHarness#timeouts}
  */
  readonly timeouts?: AwsHarness.TimeoutsProperty;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#tool AwsHarness#tool}
  */
  readonly tool?: AwsHarness.ToolProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness aws_bedrockagentcore_harness}
*/
export class AwsHarness extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_harness";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsHarness resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsHarness to import
  * @param importFromId The id of the existing AwsHarness that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsHarness to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_harness", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness aws_bedrockagentcore_harness} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsHarnessConfig
  */
  public constructor(scope: Construct, id: string, config: AwsHarnessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_harness',
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
    this._allowedTools = config.allowedTools;
    this._environmentVariables = config.environmentVariables;
    this._executionRoleArn = config.executionRoleArn;
    this._harnessName = config.harnessName;
    this._maxIterations = config.maxIterations;
    this._maxTokens = config.maxTokens;
    this._region = config.region;
    this._tags = config.tags;
    this._timeoutSeconds = config.timeoutSeconds;
    this._truncation.internalValue = config.truncation;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._environment.internalValue = config.environment;
    this._environmentArtifact.internalValue = config.environmentArtifact;
    this._memory.internalValue = config.memory;
    this._model.internalValue = config.model;
    this._skill.internalValue = config.skill;
    this._systemPrompt.internalValue = config.systemPrompt;
    this._timeouts.internalValue = config.timeouts;
    this._tool.internalValue = config.tool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tools - computed: true, optional: true, required: false
  private _allowedTools?: string[]; 
  public get allowedTools() {
    return this.getListAttribute('allowed_tools');
  }
  public set allowedTools(value: string[]) {
    this._allowedTools = value;
  }
  public resetAllowedTools() {
    this._allowedTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToolsInput() {
    return this._allowedTools;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // environment_actual - computed: true, optional: false, required: false
  private _environmentActual = new AwsHarness.EnvironmentActualPropertyList(this, "environment_actual", false);
  public get environmentActual() {
    return this._environmentActual;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // harness_id - computed: true, optional: false, required: false
  public get harnessId() {
    return this.getStringAttribute('harness_id');
  }

  // harness_name - computed: false, optional: false, required: true
  private _harnessName?: string; 
  public get harnessName() {
    return this.getStringAttribute('harness_name');
  }
  public set harnessName(value: string) {
    this._harnessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get harnessNameInput() {
    return this._harnessName;
  }

  // max_iterations - computed: true, optional: true, required: false
  private _maxIterations?: number; 
  public get maxIterations() {
    return this.getNumberAttribute('max_iterations');
  }
  public set maxIterations(value: number) {
    this._maxIterations = value;
  }
  public resetMaxIterations() {
    this._maxIterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIterationsInput() {
    return this._maxIterations;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // memory_actual - computed: true, optional: false, required: false
  private _memoryActual = new AwsHarness.MemoryActualPropertyList(this, "memory_actual", false);
  public get memoryActual() {
    return this._memoryActual;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // truncation - computed: true, optional: true, required: false
  private _truncation = new AwsHarness.TruncationPropertyList(this, "truncation", false);
  public get truncation() {
    return this._truncation;
  }
  public putTruncation(value: AwsHarness.TruncationProperty[] | cdktn.IResolvable) {
    this._truncation.internalValue = value;
  }
  public resetTruncation() {
    this._truncation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncationInput() {
    return this._truncation.internalValue;
  }

  // authorizer_configuration - computed: false, optional: true, required: false
  private _authorizerConfiguration = new AwsHarness.AuthorizerConfigurationPropertyList(this, "authorizer_configuration", false);
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: AwsHarness.AuthorizerConfigurationProperty[] | cdktn.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new AwsHarness.EnvironmentPropertyList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: AwsHarness.EnvironmentProperty[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_artifact - computed: false, optional: true, required: false
  private _environmentArtifact = new AwsHarness.EnvironmentArtifactPropertyList(this, "environment_artifact", false);
  public get environmentArtifact() {
    return this._environmentArtifact;
  }
  public putEnvironmentArtifact(value: AwsHarness.EnvironmentArtifactProperty[] | cdktn.IResolvable) {
    this._environmentArtifact.internalValue = value;
  }
  public resetEnvironmentArtifact() {
    this._environmentArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentArtifactInput() {
    return this._environmentArtifact.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new AwsHarness.MemoryPropertyList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: AwsHarness.MemoryProperty[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new AwsHarness.ModelPropertyList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: AwsHarness.ModelProperty[] | cdktn.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // skill - computed: false, optional: true, required: false
  private _skill = new AwsHarness.SkillPropertyList(this, "skill", false);
  public get skill() {
    return this._skill;
  }
  public putSkill(value: AwsHarness.SkillProperty[] | cdktn.IResolvable) {
    this._skill.internalValue = value;
  }
  public resetSkill() {
    this._skill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillInput() {
    return this._skill.internalValue;
  }

  // system_prompt - computed: false, optional: true, required: false
  private _systemPrompt = new AwsHarness.SystemPromptPropertyList(this, "system_prompt", false);
  public get systemPrompt() {
    return this._systemPrompt;
  }
  public putSystemPrompt(value: AwsHarness.SystemPromptProperty[] | cdktn.IResolvable) {
    this._systemPrompt.internalValue = value;
  }
  public resetSystemPrompt() {
    this._systemPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptInput() {
    return this._systemPrompt.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsHarness.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsHarness.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new AwsHarness.ToolPropertyList(this, "tool", false);
  public get tool() {
    return this._tool;
  }
  public putTool(value: AwsHarness.ToolProperty[] | cdktn.IResolvable) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedTools),
      environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      harness_name: cdktn.stringToTerraform(this._harnessName),
      max_iterations: cdktn.numberToTerraform(this._maxIterations),
      max_tokens: cdktn.numberToTerraform(this._maxTokens),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeout_seconds: cdktn.numberToTerraform(this._timeoutSeconds),
      truncation: cdktn.listMapper(awsHarnessTruncationPropertyToTerraform, false)(this._truncation.internalValue),
      authorizer_configuration: cdktn.listMapper(awsHarnessAuthorizerConfigurationPropertyToTerraform, true)(this._authorizerConfiguration.internalValue),
      environment: cdktn.listMapper(awsHarnessEnvironmentPropertyToTerraform, true)(this._environment.internalValue),
      environment_artifact: cdktn.listMapper(awsHarnessEnvironmentArtifactPropertyToTerraform, true)(this._environmentArtifact.internalValue),
      memory: cdktn.listMapper(awsHarnessMemoryPropertyToTerraform, true)(this._memory.internalValue),
      model: cdktn.listMapper(awsHarnessModelPropertyToTerraform, true)(this._model.internalValue),
      skill: cdktn.listMapper(awsHarnessSkillPropertyToTerraform, true)(this._skill.internalValue),
      system_prompt: cdktn.listMapper(awsHarnessSystemPromptPropertyToTerraform, true)(this._systemPrompt.internalValue),
      timeouts: awsHarnessTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      tool: cdktn.listMapper(awsHarnessToolPropertyToTerraform, true)(this._tool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_tools: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedTools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_variables: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      harness_name: {
        value: cdktn.stringToHclTerraform(this._harnessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_iterations: {
        value: cdktn.numberToHclTerraform(this._maxIterations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_tokens: {
        value: cdktn.numberToHclTerraform(this._maxTokens),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      truncation: {
        value: cdktn.listMapperHcl(awsHarnessTruncationPropertyToHclTerraform, false)(this._truncation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.TruncationPropertyList",
      },
      authorizer_configuration: {
        value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationPropertyToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.AuthorizerConfigurationPropertyList",
      },
      environment: {
        value: cdktn.listMapperHcl(awsHarnessEnvironmentPropertyToHclTerraform, true)(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.EnvironmentPropertyList",
      },
      environment_artifact: {
        value: cdktn.listMapperHcl(awsHarnessEnvironmentArtifactPropertyToHclTerraform, true)(this._environmentArtifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.EnvironmentArtifactPropertyList",
      },
      memory: {
        value: cdktn.listMapperHcl(awsHarnessMemoryPropertyToHclTerraform, true)(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.MemoryPropertyList",
      },
      model: {
        value: cdktn.listMapperHcl(awsHarnessModelPropertyToHclTerraform, true)(this._model.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.ModelPropertyList",
      },
      skill: {
        value: cdktn.listMapperHcl(awsHarnessSkillPropertyToHclTerraform, true)(this._skill.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.SkillPropertyList",
      },
      system_prompt: {
        value: cdktn.listMapperHcl(awsHarnessSystemPromptPropertyToHclTerraform, true)(this._systemPrompt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.SystemPromptPropertyList",
      },
      timeouts: {
        value: awsHarnessTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsHarness.TimeoutsProperty",
      },
      tool: {
        value: cdktn.listMapperHcl(awsHarnessToolPropertyToHclTerraform, true)(this._tool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHarness.ToolPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentPropertyToTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualAgentcoreRuntimeEnvironmentPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualAgentcoreRuntimeEnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessEnvironmentActualPropertyToTerraform(struct?: AwsHarness.EnvironmentActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessEnvironmentActualPropertyToHclTerraform(struct?: AwsHarness.EnvironmentActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyToTerraform(struct?: AwsHarness.MemoryActualAgentcoreMemoryConfigurationRetrievalConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyToHclTerraform(struct?: AwsHarness.MemoryActualAgentcoreMemoryConfigurationRetrievalConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryActualAgentcoreMemoryConfigurationPropertyToTerraform(struct?: AwsHarness.MemoryActualAgentcoreMemoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryActualAgentcoreMemoryConfigurationPropertyToHclTerraform(struct?: AwsHarness.MemoryActualAgentcoreMemoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryActualDisabledPropertyToTerraform(struct?: AwsHarness.MemoryActualDisabledProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryActualDisabledPropertyToHclTerraform(struct?: AwsHarness.MemoryActualDisabledProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryActualManagedMemoryConfigurationPropertyToTerraform(struct?: AwsHarness.MemoryActualManagedMemoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryActualManagedMemoryConfigurationPropertyToHclTerraform(struct?: AwsHarness.MemoryActualManagedMemoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryActualPropertyToTerraform(struct?: AwsHarness.MemoryActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryActualPropertyToHclTerraform(struct?: AwsHarness.MemoryActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessSlidingWindowPropertyToTerraform(struct?: AwsHarness.SlidingWindowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    messages_count: cdktn.numberToTerraform(struct!.messagesCount),
  }
}


export function awsHarnessSlidingWindowPropertyToHclTerraform(struct?: AwsHarness.SlidingWindowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    messages_count: {
      value: cdktn.numberToHclTerraform(struct!.messagesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessSummarizationPropertyToTerraform(struct?: AwsHarness.SummarizationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preserve_recent_messages: cdktn.numberToTerraform(struct!.preserveRecentMessages),
    summarization_system_prompt: cdktn.stringToTerraform(struct!.summarizationSystemPrompt),
    summary_ratio: cdktn.numberToTerraform(struct!.summaryRatio),
  }
}


export function awsHarnessSummarizationPropertyToHclTerraform(struct?: AwsHarness.SummarizationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preserve_recent_messages: {
      value: cdktn.numberToHclTerraform(struct!.preserveRecentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summarization_system_prompt: {
      value: cdktn.stringToHclTerraform(struct!.summarizationSystemPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_ratio: {
      value: cdktn.numberToHclTerraform(struct!.summaryRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessTruncationConfigPropertyToTerraform(struct?: AwsHarness.TruncationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sliding_window: cdktn.listMapper(awsHarnessSlidingWindowPropertyToTerraform, false)(struct!.slidingWindow),
    summarization: cdktn.listMapper(awsHarnessSummarizationPropertyToTerraform, false)(struct!.summarization),
  }
}


export function awsHarnessTruncationConfigPropertyToHclTerraform(struct?: AwsHarness.TruncationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sliding_window: {
      value: cdktn.listMapperHcl(awsHarnessSlidingWindowPropertyToHclTerraform, false)(struct!.slidingWindow),
      isBlock: true,
      type: "list",
      storageClassType: "SlidingWindowPropertyList",
    },
    summarization: {
      value: cdktn.listMapperHcl(awsHarnessSummarizationPropertyToHclTerraform, false)(struct!.summarization),
      isBlock: true,
      type: "list",
      storageClassType: "SummarizationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessTruncationPropertyToTerraform(struct?: AwsHarness.TruncationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: cdktn.listMapper(awsHarnessTruncationConfigPropertyToTerraform, false)(struct!.config),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function awsHarnessTruncationPropertyToHclTerraform(struct?: AwsHarness.TruncationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: cdktn.listMapperHcl(awsHarnessTruncationConfigPropertyToHclTerraform, false)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "TruncationConfigPropertyList",
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


export function awsHarnessHostingEnvironmentPropertyToTerraform(struct?: AwsHarness.HostingEnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsHarnessHostingEnvironmentPropertyToHclTerraform(struct?: AwsHarness.HostingEnvironmentProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAllowedWorkloadConfigurationPropertyToTerraform(struct?: AwsHarness.AllowedWorkloadConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadIdentities),
    hosting_environment: cdktn.listMapper(awsHarnessHostingEnvironmentPropertyToTerraform, true)(struct!.hostingEnvironment),
  }
}


export function awsHarnessAllowedWorkloadConfigurationPropertyToHclTerraform(struct?: AwsHarness.AllowedWorkloadConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workload_identities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workloadIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosting_environment: {
      value: cdktn.listMapperHcl(awsHarnessHostingEnvironmentPropertyToHclTerraform, true)(struct!.hostingEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "HostingEnvironmentPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessClaimMatchValuePropertyToTerraform(struct?: AwsHarness.ClaimMatchValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function awsHarnessClaimMatchValuePropertyToHclTerraform(struct?: AwsHarness.ClaimMatchValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_value_string: {
      value: cdktn.stringToHclTerraform(struct!.matchValueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizingClaimMatchValuePropertyToTerraform(struct?: AwsHarness.AuthorizingClaimMatchValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: cdktn.listMapper(awsHarnessClaimMatchValuePropertyToTerraform, true)(struct!.claimMatchValue),
  }
}


export function awsHarnessAuthorizingClaimMatchValuePropertyToHclTerraform(struct?: AwsHarness.AuthorizingClaimMatchValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_match_operator: {
      value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_match_value: {
      value: cdktn.listMapperHcl(awsHarnessClaimMatchValuePropertyToHclTerraform, true)(struct!.claimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "ClaimMatchValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessCustomClaimPropertyToTerraform(struct?: AwsHarness.CustomClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    authorizing_claim_match_value: cdktn.listMapper(awsHarnessAuthorizingClaimMatchValuePropertyToTerraform, true)(struct!.authorizingClaimMatchValue),
  }
}


export function awsHarnessCustomClaimPropertyToHclTerraform(struct?: AwsHarness.CustomClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inbound_token_claim_name: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_token_claim_value_type: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizing_claim_match_value: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizingClaimMatchValuePropertyToHclTerraform, true)(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizingClaimMatchValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessPrivateEndpointOverridesPropertyToTerraform(struct?: AwsHarness.PrivateEndpointOverridesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    private_endpoint: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToTerraform, true)(struct!.privateEndpoint),
  }
}


export function awsHarnessPrivateEndpointOverridesPropertyToHclTerraform(struct?: AwsHarness.PrivateEndpointOverridesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessCustomJwtAuthorizerPropertyToTerraform(struct?: AwsHarness.CustomJwtAuthorizerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    allowed_workload_configuration: cdktn.listMapper(awsHarnessAllowedWorkloadConfigurationPropertyToTerraform, true)(struct!.allowedWorkloadConfiguration),
    custom_claim: cdktn.listMapper(awsHarnessCustomClaimPropertyToTerraform, true)(struct!.customClaim),
    private_endpoint: cdktn.listMapper(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyToTerraform, true)(struct!.privateEndpoint),
    private_endpoint_overrides: cdktn.listMapper(awsHarnessPrivateEndpointOverridesPropertyToTerraform, true)(struct!.privateEndpointOverrides),
  }
}


export function awsHarnessCustomJwtAuthorizerPropertyToHclTerraform(struct?: AwsHarness.CustomJwtAuthorizerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_audience: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_workload_configuration: {
      value: cdktn.listMapperHcl(awsHarnessAllowedWorkloadConfigurationPropertyToHclTerraform, true)(struct!.allowedWorkloadConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AllowedWorkloadConfigurationPropertyList",
    },
    custom_claim: {
      value: cdktn.listMapperHcl(awsHarnessCustomClaimPropertyToHclTerraform, true)(struct!.customClaim),
      isBlock: true,
      type: "set",
      storageClassType: "CustomClaimPropertyList",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(awsHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyList",
    },
    private_endpoint_overrides: {
      value: cdktn.listMapperHcl(awsHarnessPrivateEndpointOverridesPropertyToHclTerraform, true)(struct!.privateEndpointOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateEndpointOverridesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAuthorizerConfigurationPropertyToTerraform(struct?: AwsHarness.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: cdktn.listMapper(awsHarnessCustomJwtAuthorizerPropertyToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function awsHarnessAuthorizerConfigurationPropertyToHclTerraform(struct?: AwsHarness.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktn.listMapperHcl(awsHarnessCustomJwtAuthorizerPropertyToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "CustomJwtAuthorizerPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
    max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_runtime_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifetime: {
      value: cdktn.numberToHclTerraform(struct!.maxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_access_point: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToTerraform, true)(struct!.efsAccessPoint),
    s3_files_access_point: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToTerraform, true)(struct!.s3FilesAccessPoint),
    session_storage: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToTerraform, true)(struct!.sessionStorage),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_access_point: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyToHclTerraform, true)(struct!.efsAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyList",
    },
    s3_files_access_point: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyToHclTerraform, true)(struct!.s3FilesAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyList",
    },
    session_storage: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyToHclTerraform, true)(struct!.sessionStorage),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_mode: cdktn.stringToTerraform(struct!.networkMode),
    network_mode_config: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToTerraform, true)(struct!.networkModeConfig),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_mode: {
      value: cdktn.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode_config: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyToHclTerraform, true)(struct!.networkModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentPropertyToTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_configuration: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToTerraform, false)(struct!.lifecycleConfiguration),
    filesystem_configuration: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToTerraform, true)(struct!.filesystemConfiguration),
    network_configuration: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToTerraform, true)(struct!.networkConfiguration),
  }
}


export function awsHarnessEnvironmentAgentcoreRuntimeEnvironmentPropertyToHclTerraform(struct?: AwsHarness.EnvironmentAgentcoreRuntimeEnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_configuration: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyToHclTerraform, false)(struct!.lifecycleConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyList",
    },
    filesystem_configuration: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyToHclTerraform, true)(struct!.filesystemConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyList",
    },
    network_configuration: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyToHclTerraform, true)(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentPropertyToTerraform(struct?: AwsHarness.EnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_runtime_environment: cdktn.listMapper(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentPropertyToTerraform, true)(struct!.agentcoreRuntimeEnvironment),
  }
}


export function awsHarnessEnvironmentPropertyToHclTerraform(struct?: AwsHarness.EnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_runtime_environment: {
      value: cdktn.listMapperHcl(awsHarnessEnvironmentAgentcoreRuntimeEnvironmentPropertyToHclTerraform, true)(struct!.agentcoreRuntimeEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentAgentcoreRuntimeEnvironmentPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessContainerConfigurationPropertyToTerraform(struct?: AwsHarness.ContainerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_uri: cdktn.stringToTerraform(struct!.containerUri),
  }
}


export function awsHarnessContainerConfigurationPropertyToHclTerraform(struct?: AwsHarness.ContainerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_uri: {
      value: cdktn.stringToHclTerraform(struct!.containerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessEnvironmentArtifactPropertyToTerraform(struct?: AwsHarness.EnvironmentArtifactProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_configuration: cdktn.listMapper(awsHarnessContainerConfigurationPropertyToTerraform, true)(struct!.containerConfiguration),
  }
}


export function awsHarnessEnvironmentArtifactPropertyToHclTerraform(struct?: AwsHarness.EnvironmentArtifactProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_configuration: {
      value: cdktn.listMapperHcl(awsHarnessContainerConfigurationPropertyToHclTerraform, true)(struct!.containerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyToTerraform(struct?: AwsHarness.MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    relevance_score: cdktn.numberToTerraform(struct!.relevanceScore),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    top_k: cdktn.numberToTerraform(struct!.topK),
  }
}


export function awsHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyToHclTerraform(struct?: AwsHarness.MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevance_score: {
      value: cdktn.numberToHclTerraform(struct!.relevanceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessMemoryAgentcoreMemoryConfigurationPropertyToTerraform(struct?: AwsHarness.MemoryAgentcoreMemoryConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actor_id: cdktn.stringToTerraform(struct!.actorId),
    arn: cdktn.stringToTerraform(struct!.arn),
    messages_count: cdktn.numberToTerraform(struct!.messagesCount),
    retrieval_config: cdktn.listMapper(awsHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyToTerraform, true)(struct!.retrievalConfig),
  }
}


export function awsHarnessMemoryAgentcoreMemoryConfigurationPropertyToHclTerraform(struct?: AwsHarness.MemoryAgentcoreMemoryConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actor_id: {
      value: cdktn.stringToHclTerraform(struct!.actorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages_count: {
      value: cdktn.numberToHclTerraform(struct!.messagesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrieval_config: {
      value: cdktn.listMapperHcl(awsHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyToHclTerraform, true)(struct!.retrievalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessMemoryDisabledPropertyToTerraform(struct?: AwsHarness.MemoryDisabledProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsHarnessMemoryDisabledPropertyToHclTerraform(struct?: AwsHarness.MemoryDisabledProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsHarnessMemoryManagedMemoryConfigurationPropertyToTerraform(struct?: AwsHarness.MemoryManagedMemoryConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_arn: cdktn.stringToTerraform(struct!.encryptionKeyArn),
    event_expiry_duration: cdktn.numberToTerraform(struct!.eventExpiryDuration),
    strategies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.strategies),
  }
}


export function awsHarnessMemoryManagedMemoryConfigurationPropertyToHclTerraform(struct?: AwsHarness.MemoryManagedMemoryConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_expiry_duration: {
      value: cdktn.numberToHclTerraform(struct!.eventExpiryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.strategies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessMemoryPropertyToTerraform(struct?: AwsHarness.MemoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_memory_configuration: cdktn.listMapper(awsHarnessMemoryAgentcoreMemoryConfigurationPropertyToTerraform, true)(struct!.agentcoreMemoryConfiguration),
    disabled: cdktn.listMapper(awsHarnessMemoryDisabledPropertyToTerraform, true)(struct!.disabled),
    managed_memory_configuration: cdktn.listMapper(awsHarnessMemoryManagedMemoryConfigurationPropertyToTerraform, true)(struct!.managedMemoryConfiguration),
  }
}


export function awsHarnessMemoryPropertyToHclTerraform(struct?: AwsHarness.MemoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_memory_configuration: {
      value: cdktn.listMapperHcl(awsHarnessMemoryAgentcoreMemoryConfigurationPropertyToHclTerraform, true)(struct!.agentcoreMemoryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryAgentcoreMemoryConfigurationPropertyList",
    },
    disabled: {
      value: cdktn.listMapperHcl(awsHarnessMemoryDisabledPropertyToHclTerraform, true)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryDisabledPropertyList",
    },
    managed_memory_configuration: {
      value: cdktn.listMapperHcl(awsHarnessMemoryManagedMemoryConfigurationPropertyToHclTerraform, true)(struct!.managedMemoryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryManagedMemoryConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessBedrockModelConfigPropertyToTerraform(struct?: AwsHarness.BedrockModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function awsHarnessBedrockModelConfigPropertyToHclTerraform(struct?: AwsHarness.BedrockModelConfigProperty | cdktn.IResolvable): any {
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
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessGeminiModelConfigPropertyToTerraform(struct?: AwsHarness.GeminiModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_k: cdktn.numberToTerraform(struct!.topK),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function awsHarnessGeminiModelConfigPropertyToHclTerraform(struct?: AwsHarness.GeminiModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessOpenaiModelConfigPropertyToTerraform(struct?: AwsHarness.OpenaiModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function awsHarnessOpenaiModelConfigPropertyToHclTerraform(struct?: AwsHarness.OpenaiModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessModelPropertyToTerraform(struct?: AwsHarness.ModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_model_config: cdktn.listMapper(awsHarnessBedrockModelConfigPropertyToTerraform, true)(struct!.bedrockModelConfig),
    gemini_model_config: cdktn.listMapper(awsHarnessGeminiModelConfigPropertyToTerraform, true)(struct!.geminiModelConfig),
    openai_model_config: cdktn.listMapper(awsHarnessOpenaiModelConfigPropertyToTerraform, true)(struct!.openaiModelConfig),
  }
}


export function awsHarnessModelPropertyToHclTerraform(struct?: AwsHarness.ModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_model_config: {
      value: cdktn.listMapperHcl(awsHarnessBedrockModelConfigPropertyToHclTerraform, true)(struct!.bedrockModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockModelConfigPropertyList",
    },
    gemini_model_config: {
      value: cdktn.listMapperHcl(awsHarnessGeminiModelConfigPropertyToHclTerraform, true)(struct!.geminiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiModelConfigPropertyList",
    },
    openai_model_config: {
      value: cdktn.listMapperHcl(awsHarnessOpenaiModelConfigPropertyToHclTerraform, true)(struct!.openaiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OpenaiModelConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessSkillPropertyToTerraform(struct?: AwsHarness.SkillProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsHarnessSkillPropertyToHclTerraform(struct?: AwsHarness.SkillProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessSystemPromptPropertyToTerraform(struct?: AwsHarness.SystemPromptProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function awsHarnessSystemPromptPropertyToHclTerraform(struct?: AwsHarness.SystemPromptProperty | cdktn.IResolvable): any {
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


export function awsHarnessTimeoutsPropertyToTerraform(struct?: AwsHarness.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsHarnessTimeoutsPropertyToHclTerraform(struct?: AwsHarness.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsHarnessAgentcoreBrowserPropertyToTerraform(struct?: AwsHarness.AgentcoreBrowserProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    browser_arn: cdktn.stringToTerraform(struct!.browserArn),
  }
}


export function awsHarnessAgentcoreBrowserPropertyToHclTerraform(struct?: AwsHarness.AgentcoreBrowserProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    browser_arn: {
      value: cdktn.stringToHclTerraform(struct!.browserArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAgentcoreCodeInterpreterPropertyToTerraform(struct?: AwsHarness.AgentcoreCodeInterpreterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_interpreter_arn: cdktn.stringToTerraform(struct!.codeInterpreterArn),
  }
}


export function awsHarnessAgentcoreCodeInterpreterPropertyToHclTerraform(struct?: AwsHarness.AgentcoreCodeInterpreterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_interpreter_arn: {
      value: cdktn.stringToHclTerraform(struct!.codeInterpreterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessOauthPropertyToTerraform(struct?: AwsHarness.OauthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
    default_return_url: cdktn.stringToTerraform(struct!.defaultReturnUrl),
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function awsHarnessOauthPropertyToHclTerraform(struct?: AwsHarness.OauthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_return_url: {
      value: cdktn.stringToHclTerraform(struct!.defaultReturnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessOutboundAuthPropertyToTerraform(struct?: AwsHarness.OutboundAuthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_iam: cdktn.booleanToTerraform(struct!.awsIam),
    none: cdktn.booleanToTerraform(struct!.none),
    oauth: cdktn.listMapper(awsHarnessOauthPropertyToTerraform, true)(struct!.oauth),
  }
}


export function awsHarnessOutboundAuthPropertyToHclTerraform(struct?: AwsHarness.OutboundAuthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_iam: {
      value: cdktn.booleanToHclTerraform(struct!.awsIam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktn.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth: {
      value: cdktn.listMapperHcl(awsHarnessOauthPropertyToHclTerraform, true)(struct!.oauth),
      isBlock: true,
      type: "list",
      storageClassType: "OauthPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessAgentcoreGatewayPropertyToTerraform(struct?: AwsHarness.AgentcoreGatewayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_arn: cdktn.stringToTerraform(struct!.gatewayArn),
    outbound_auth: cdktn.listMapper(awsHarnessOutboundAuthPropertyToTerraform, true)(struct!.outboundAuth),
  }
}


export function awsHarnessAgentcoreGatewayPropertyToHclTerraform(struct?: AwsHarness.AgentcoreGatewayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_arn: {
      value: cdktn.stringToHclTerraform(struct!.gatewayArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_auth: {
      value: cdktn.listMapperHcl(awsHarnessOutboundAuthPropertyToHclTerraform, true)(struct!.outboundAuth),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundAuthPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessInlineFunctionPropertyToTerraform(struct?: AwsHarness.InlineFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    input_schema: cdktn.stringToTerraform(struct!.inputSchema),
  }
}


export function awsHarnessInlineFunctionPropertyToHclTerraform(struct?: AwsHarness.InlineFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_schema: {
      value: cdktn.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessRemoteMcpPropertyToTerraform(struct?: AwsHarness.RemoteMcpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function awsHarnessRemoteMcpPropertyToHclTerraform(struct?: AwsHarness.RemoteMcpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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


export function awsHarnessToolConfigPropertyToTerraform(struct?: AwsHarness.ToolConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_browser: cdktn.listMapper(awsHarnessAgentcoreBrowserPropertyToTerraform, true)(struct!.agentcoreBrowser),
    agentcore_code_interpreter: cdktn.listMapper(awsHarnessAgentcoreCodeInterpreterPropertyToTerraform, true)(struct!.agentcoreCodeInterpreter),
    agentcore_gateway: cdktn.listMapper(awsHarnessAgentcoreGatewayPropertyToTerraform, true)(struct!.agentcoreGateway),
    inline_function: cdktn.listMapper(awsHarnessInlineFunctionPropertyToTerraform, true)(struct!.inlineFunction),
    remote_mcp: cdktn.listMapper(awsHarnessRemoteMcpPropertyToTerraform, true)(struct!.remoteMcp),
  }
}


export function awsHarnessToolConfigPropertyToHclTerraform(struct?: AwsHarness.ToolConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_browser: {
      value: cdktn.listMapperHcl(awsHarnessAgentcoreBrowserPropertyToHclTerraform, true)(struct!.agentcoreBrowser),
      isBlock: true,
      type: "list",
      storageClassType: "AgentcoreBrowserPropertyList",
    },
    agentcore_code_interpreter: {
      value: cdktn.listMapperHcl(awsHarnessAgentcoreCodeInterpreterPropertyToHclTerraform, true)(struct!.agentcoreCodeInterpreter),
      isBlock: true,
      type: "list",
      storageClassType: "AgentcoreCodeInterpreterPropertyList",
    },
    agentcore_gateway: {
      value: cdktn.listMapperHcl(awsHarnessAgentcoreGatewayPropertyToHclTerraform, true)(struct!.agentcoreGateway),
      isBlock: true,
      type: "list",
      storageClassType: "AgentcoreGatewayPropertyList",
    },
    inline_function: {
      value: cdktn.listMapperHcl(awsHarnessInlineFunctionPropertyToHclTerraform, true)(struct!.inlineFunction),
      isBlock: true,
      type: "list",
      storageClassType: "InlineFunctionPropertyList",
    },
    remote_mcp: {
      value: cdktn.listMapperHcl(awsHarnessRemoteMcpPropertyToHclTerraform, true)(struct!.remoteMcp),
      isBlock: true,
      type: "list",
      storageClassType: "RemoteMcpPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHarnessToolPropertyToTerraform(struct?: AwsHarness.ToolProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    config: cdktn.listMapper(awsHarnessToolConfigPropertyToTerraform, true)(struct!.config),
  }
}


export function awsHarnessToolPropertyToHclTerraform(struct?: AwsHarness.ToolProperty | cdktn.IResolvable): any {
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
    config: {
      value: cdktn.listMapperHcl(awsHarnessToolConfigPropertyToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ToolConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsHarness {
export interface EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_access_point - computed: true, optional: false, required: false
  private _efsAccessPoint = new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyList(this, "efs_access_point", false);
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }

  // s3_files_access_point - computed: true, optional: false, required: false
  private _s3FilesAccessPoint = new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyList(this, "s3_files_access_point", false);
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }

  // session_storage - computed: true, optional: false, required: false
  private _sessionStorage = new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyList(this, "session_storage", false);
  public get sessionStorage() {
    return this._sessionStorage;
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: false, required: false
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }

  // max_lifetime - computed: true, optional: false, required: false
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_service_s3_endpoint - computed: true, optional: false, required: false
  public get requireServiceS3Endpoint() {
    return this.getBooleanAttribute('require_service_s3_endpoint');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // network_mode_config - computed: true, optional: false, required: false
  private _networkModeConfig = new EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualAgentcoreRuntimeEnvironmentProperty {
}
export class EnvironmentActualAgentcoreRuntimeEnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualAgentcoreRuntimeEnvironmentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualAgentcoreRuntimeEnvironmentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // filesystem_configuration - computed: true, optional: false, required: false
  private _filesystemConfiguration = new EnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyList(this, "filesystem_configuration", false);
  public get filesystemConfiguration() {
    return this._filesystemConfiguration;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new EnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyList(this, "lifecycle_configuration", false);
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new EnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
}

export class EnvironmentActualAgentcoreRuntimeEnvironmentPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualAgentcoreRuntimeEnvironmentPropertyOutputReference {
    return new EnvironmentActualAgentcoreRuntimeEnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentActualProperty {
}
export class EnvironmentActualPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentActualProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentActualProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentcore_runtime_environment - computed: true, optional: false, required: false
  private _agentcoreRuntimeEnvironment = new EnvironmentActualAgentcoreRuntimeEnvironmentPropertyList(this, "agentcore_runtime_environment", false);
  public get agentcoreRuntimeEnvironment() {
    return this._agentcoreRuntimeEnvironment;
  }
}

export class EnvironmentActualPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EnvironmentActualPropertyOutputReference {
    return new EnvironmentActualPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryActualAgentcoreMemoryConfigurationRetrievalConfigProperty {
}
export class MemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryActualAgentcoreMemoryConfigurationRetrievalConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryActualAgentcoreMemoryConfigurationRetrievalConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map_block_key - computed: true, optional: false, required: false
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }

  // relevance_score - computed: true, optional: false, required: false
  public get relevanceScore() {
    return this.getNumberAttribute('relevance_score');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
}

export class MemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyList extends cdktn.ComplexList {

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
  public get(index: number): MemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference {
    return new MemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryActualAgentcoreMemoryConfigurationProperty {
}
export class MemoryActualAgentcoreMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryActualAgentcoreMemoryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryActualAgentcoreMemoryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // messages_count - computed: true, optional: false, required: false
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }

  // retrieval_config - computed: true, optional: false, required: false
  private _retrievalConfig = new MemoryActualAgentcoreMemoryConfigurationRetrievalConfigPropertyList(this, "retrieval_config", false);
  public get retrievalConfig() {
    return this._retrievalConfig;
  }
}

export class MemoryActualAgentcoreMemoryConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): MemoryActualAgentcoreMemoryConfigurationPropertyOutputReference {
    return new MemoryActualAgentcoreMemoryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryActualDisabledProperty {
}
export class MemoryActualDisabledPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryActualDisabledProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryActualDisabledProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class MemoryActualDisabledPropertyList extends cdktn.ComplexList {

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
  public get(index: number): MemoryActualDisabledPropertyOutputReference {
    return new MemoryActualDisabledPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryActualManagedMemoryConfigurationProperty {
}
export class MemoryActualManagedMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryActualManagedMemoryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryActualManagedMemoryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }

  // event_expiry_duration - computed: true, optional: false, required: false
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }

  // strategies - computed: true, optional: false, required: false
  public get strategies() {
    return cdktn.Fn.tolist(this.getListAttribute('strategies'));
  }
}

export class MemoryActualManagedMemoryConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): MemoryActualManagedMemoryConfigurationPropertyOutputReference {
    return new MemoryActualManagedMemoryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryActualProperty {
}
export class MemoryActualPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryActualProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryActualProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentcore_memory_configuration - computed: true, optional: false, required: false
  private _agentcoreMemoryConfiguration = new MemoryActualAgentcoreMemoryConfigurationPropertyList(this, "agentcore_memory_configuration", false);
  public get agentcoreMemoryConfiguration() {
    return this._agentcoreMemoryConfiguration;
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new MemoryActualDisabledPropertyList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }

  // managed_memory_configuration - computed: true, optional: false, required: false
  private _managedMemoryConfiguration = new MemoryActualManagedMemoryConfigurationPropertyList(this, "managed_memory_configuration", false);
  public get managedMemoryConfiguration() {
    return this._managedMemoryConfiguration;
  }
}

export class MemoryActualPropertyList extends cdktn.ComplexList {

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
  public get(index: number): MemoryActualPropertyOutputReference {
    return new MemoryActualPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlidingWindowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#messages_count AwsHarness#messages_count}
  */
  readonly messagesCount?: number;
}
export class SlidingWindowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SlidingWindowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messagesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesCount = this._messagesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlidingWindowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messagesCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messagesCount = value.messagesCount;
    }
  }

  // messages_count - computed: true, optional: true, required: false
  private _messagesCount?: number; 
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }
  public set messagesCount(value: number) {
    this._messagesCount = value;
  }
  public resetMessagesCount() {
    this._messagesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesCountInput() {
    return this._messagesCount;
  }
}

export class SlidingWindowPropertyList extends cdktn.ComplexList {
  public internalValue? : SlidingWindowProperty[] | cdktn.IResolvable

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
  public get(index: number): SlidingWindowPropertyOutputReference {
    return new SlidingWindowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SummarizationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages AwsHarness#preserve_recent_messages}
  */
  readonly preserveRecentMessages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt AwsHarness#summarization_system_prompt}
  */
  readonly summarizationSystemPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#summary_ratio AwsHarness#summary_ratio}
  */
  readonly summaryRatio?: number;
}
export class SummarizationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SummarizationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveRecentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveRecentMessages = this._preserveRecentMessages;
    }
    if (this._summarizationSystemPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationSystemPrompt = this._summarizationSystemPrompt;
    }
    if (this._summaryRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryRatio = this._summaryRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SummarizationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveRecentMessages = undefined;
      this._summarizationSystemPrompt = undefined;
      this._summaryRatio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveRecentMessages = value.preserveRecentMessages;
      this._summarizationSystemPrompt = value.summarizationSystemPrompt;
      this._summaryRatio = value.summaryRatio;
    }
  }

  // preserve_recent_messages - computed: true, optional: true, required: false
  private _preserveRecentMessages?: number; 
  public get preserveRecentMessages() {
    return this.getNumberAttribute('preserve_recent_messages');
  }
  public set preserveRecentMessages(value: number) {
    this._preserveRecentMessages = value;
  }
  public resetPreserveRecentMessages() {
    this._preserveRecentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveRecentMessagesInput() {
    return this._preserveRecentMessages;
  }

  // summarization_system_prompt - computed: true, optional: true, required: false
  private _summarizationSystemPrompt?: string; 
  public get summarizationSystemPrompt() {
    return this.getStringAttribute('summarization_system_prompt');
  }
  public set summarizationSystemPrompt(value: string) {
    this._summarizationSystemPrompt = value;
  }
  public resetSummarizationSystemPrompt() {
    this._summarizationSystemPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationSystemPromptInput() {
    return this._summarizationSystemPrompt;
  }

  // summary_ratio - computed: true, optional: true, required: false
  private _summaryRatio?: number; 
  public get summaryRatio() {
    return this.getNumberAttribute('summary_ratio');
  }
  public set summaryRatio(value: number) {
    this._summaryRatio = value;
  }
  public resetSummaryRatio() {
    this._summaryRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryRatioInput() {
    return this._summaryRatio;
  }
}

export class SummarizationPropertyList extends cdktn.ComplexList {
  public internalValue? : SummarizationProperty[] | cdktn.IResolvable

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
  public get(index: number): SummarizationPropertyOutputReference {
    return new SummarizationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TruncationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#sliding_window AwsHarness#sliding_window}
  */
  readonly slidingWindow?: SlidingWindowProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#summarization AwsHarness#summarization}
  */
  readonly summarization?: SummarizationProperty[] | cdktn.IResolvable;
}
export class TruncationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TruncationConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slidingWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slidingWindow = this._slidingWindow?.internalValue;
    }
    if (this._summarization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarization = this._summarization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TruncationConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slidingWindow.internalValue = undefined;
      this._summarization.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slidingWindow.internalValue = value.slidingWindow;
      this._summarization.internalValue = value.summarization;
    }
  }

  // sliding_window - computed: true, optional: true, required: false
  private _slidingWindow = new SlidingWindowPropertyList(this, "sliding_window", false);
  public get slidingWindow() {
    return this._slidingWindow;
  }
  public putSlidingWindow(value: SlidingWindowProperty[] | cdktn.IResolvable) {
    this._slidingWindow.internalValue = value;
  }
  public resetSlidingWindow() {
    this._slidingWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingWindowInput() {
    return this._slidingWindow.internalValue;
  }

  // summarization - computed: true, optional: true, required: false
  private _summarization = new SummarizationPropertyList(this, "summarization", false);
  public get summarization() {
    return this._summarization;
  }
  public putSummarization(value: SummarizationProperty[] | cdktn.IResolvable) {
    this._summarization.internalValue = value;
  }
  public resetSummarization() {
    this._summarization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationInput() {
    return this._summarization.internalValue;
  }
}

export class TruncationConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TruncationConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TruncationConfigPropertyOutputReference {
    return new TruncationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TruncationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#config AwsHarness#config}
  */
  readonly config?: TruncationConfigProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#strategy AwsHarness#strategy}
  */
  readonly strategy?: string;
}
export class TruncationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TruncationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TruncationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._strategy = value.strategy;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new TruncationConfigPropertyList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: TruncationConfigProperty[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

export class TruncationPropertyList extends cdktn.ComplexList {
  public internalValue? : TruncationProperty[] | cdktn.IResolvable

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
  public get(index: number): TruncationPropertyOutputReference {
    return new TruncationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostingEnvironmentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#arn AwsHarness#arn}
  */
  readonly arn: string;
}
export class HostingEnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HostingEnvironmentProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostingEnvironmentProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
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
}

export class HostingEnvironmentPropertyList extends cdktn.ComplexList {
  public internalValue? : HostingEnvironmentProperty[] | cdktn.IResolvable

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
  public get(index: number): HostingEnvironmentPropertyOutputReference {
    return new HostingEnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AllowedWorkloadConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#workload_identities AwsHarness#workload_identities}
  */
  readonly workloadIdentities?: string[];
  /**
  * hosting_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#hosting_environment AwsHarness#hosting_environment}
  */
  readonly hostingEnvironment?: HostingEnvironmentProperty[] | cdktn.IResolvable;
}
export class AllowedWorkloadConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AllowedWorkloadConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentities = this._workloadIdentities;
    }
    if (this._hostingEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostingEnvironment = this._hostingEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllowedWorkloadConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadIdentities = undefined;
      this._hostingEnvironment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadIdentities = value.workloadIdentities;
      this._hostingEnvironment.internalValue = value.hostingEnvironment;
    }
  }

  // workload_identities - computed: false, optional: true, required: false
  private _workloadIdentities?: string[]; 
  public get workloadIdentities() {
    return this.getListAttribute('workload_identities');
  }
  public set workloadIdentities(value: string[]) {
    this._workloadIdentities = value;
  }
  public resetWorkloadIdentities() {
    this._workloadIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentitiesInput() {
    return this._workloadIdentities;
  }

  // hosting_environment - computed: false, optional: true, required: false
  private _hostingEnvironment = new HostingEnvironmentPropertyList(this, "hosting_environment", false);
  public get hostingEnvironment() {
    return this._hostingEnvironment;
  }
  public putHostingEnvironment(value: HostingEnvironmentProperty[] | cdktn.IResolvable) {
    this._hostingEnvironment.internalValue = value;
  }
  public resetHostingEnvironment() {
    this._hostingEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingEnvironmentInput() {
    return this._hostingEnvironment.internalValue;
  }
}

export class AllowedWorkloadConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AllowedWorkloadConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AllowedWorkloadConfigurationPropertyOutputReference {
    return new AllowedWorkloadConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClaimMatchValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#match_value_string AwsHarness#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#match_value_string_list AwsHarness#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}
export class ClaimMatchValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClaimMatchValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueString = this._matchValueString;
    }
    if (this._matchValueStringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringList = this._matchValueStringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClaimMatchValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValueString = undefined;
      this._matchValueStringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValueString = value.matchValueString;
      this._matchValueStringList = value.matchValueStringList;
    }
  }

  // match_value_string - computed: false, optional: true, required: false
  private _matchValueString?: string; 
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }
  public set matchValueString(value: string) {
    this._matchValueString = value;
  }
  public resetMatchValueString() {
    this._matchValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringInput() {
    return this._matchValueString;
  }

  // match_value_string_list - computed: false, optional: true, required: false
  private _matchValueStringList?: string[]; 
  public get matchValueStringList() {
    return cdktn.Fn.tolist(this.getListAttribute('match_value_string_list'));
  }
  public set matchValueStringList(value: string[]) {
    this._matchValueStringList = value;
  }
  public resetMatchValueStringList() {
    this._matchValueStringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringListInput() {
    return this._matchValueStringList;
  }
}

export class ClaimMatchValuePropertyList extends cdktn.ComplexList {
  public internalValue? : ClaimMatchValueProperty[] | cdktn.IResolvable

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
  public get(index: number): ClaimMatchValuePropertyOutputReference {
    return new ClaimMatchValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizingClaimMatchValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#claim_match_operator AwsHarness#claim_match_operator}
  */
  readonly claimMatchOperator: string;
  /**
  * claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#claim_match_value AwsHarness#claim_match_value}
  */
  readonly claimMatchValue?: ClaimMatchValueProperty[] | cdktn.IResolvable;
}
export class AuthorizingClaimMatchValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizingClaimMatchValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchOperator = this._claimMatchOperator;
    }
    if (this._claimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizingClaimMatchValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimMatchOperator = undefined;
      this._claimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimMatchOperator = value.claimMatchOperator;
      this._claimMatchValue.internalValue = value.claimMatchValue;
    }
  }

  // claim_match_operator - computed: false, optional: false, required: true
  private _claimMatchOperator?: string; 
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }
  public set claimMatchOperator(value: string) {
    this._claimMatchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchOperatorInput() {
    return this._claimMatchOperator;
  }

  // claim_match_value - computed: false, optional: true, required: false
  private _claimMatchValue = new ClaimMatchValuePropertyList(this, "claim_match_value", false);
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: ClaimMatchValueProperty[] | cdktn.IResolvable) {
    this._claimMatchValue.internalValue = value;
  }
  public resetClaimMatchValue() {
    this._claimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchValueInput() {
    return this._claimMatchValue.internalValue;
  }
}

export class AuthorizingClaimMatchValuePropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizingClaimMatchValueProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizingClaimMatchValuePropertyOutputReference {
    return new AuthorizingClaimMatchValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomClaimProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name AwsHarness#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type AwsHarness#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType: string;
  /**
  * authorizing_claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value AwsHarness#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueProperty[] | cdktn.IResolvable;
}
export class CustomClaimPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomClaimProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundTokenClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
    }
    if (this._inboundTokenClaimValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
    }
    if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomClaimProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = undefined;
      this._inboundTokenClaimValueType = undefined;
      this._authorizingClaimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = value.inboundTokenClaimName;
      this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
      this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
    }
  }

  // inbound_token_claim_name - computed: false, optional: false, required: true
  private _inboundTokenClaimName?: string; 
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }
  public set inboundTokenClaimName(value: string) {
    this._inboundTokenClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimNameInput() {
    return this._inboundTokenClaimName;
  }

  // inbound_token_claim_value_type - computed: false, optional: false, required: true
  private _inboundTokenClaimValueType?: string; 
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
  public set inboundTokenClaimValueType(value: string) {
    this._inboundTokenClaimValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimValueTypeInput() {
    return this._inboundTokenClaimValueType;
  }

  // authorizing_claim_match_value - computed: false, optional: true, required: false
  private _authorizingClaimMatchValue = new AuthorizingClaimMatchValuePropertyList(this, "authorizing_claim_match_value", false);
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: AuthorizingClaimMatchValueProperty[] | cdktn.IResolvable) {
    this._authorizingClaimMatchValue.internalValue = value;
  }
  public resetAuthorizingClaimMatchValue() {
    this._authorizingClaimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingClaimMatchValueInput() {
    return this._authorizingClaimMatchValue.internalValue;
  }
}

export class CustomClaimPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomClaimProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomClaimPropertyOutputReference {
    return new CustomClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#endpoint_ip_address_type AwsHarness#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#routing_domain AwsHarness#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#security_group_ids AwsHarness#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#subnet_ids AwsHarness#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#tags AwsHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#vpc_identifier AwsHarness#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#resource_configuration_identifier AwsHarness#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#managed_vpc_resource AwsHarness#managed_vpc_resource}
  */
  readonly managedVpcResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#self_managed_lattice_resource AwsHarness#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourcePropertyList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourcePropertyList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#endpoint_ip_address_type AwsHarness#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#routing_domain AwsHarness#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#security_group_ids AwsHarness#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#subnet_ids AwsHarness#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#tags AwsHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#vpc_identifier AwsHarness#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#resource_configuration_identifier AwsHarness#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#managed_vpc_resource AwsHarness#managed_vpc_resource}
  */
  readonly managedVpcResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#self_managed_lattice_resource AwsHarness#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyOutputReference {
    return new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointOverridesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#domain AwsHarness#domain}
  */
  readonly domain: string;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#private_endpoint AwsHarness#private_endpoint}
  */
  readonly privateEndpoint?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty[] | cdktn.IResolvable;
}
export class PrivateEndpointOverridesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateEndpointOverridesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointOverridesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._privateEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._privateEndpoint.internalValue = value.privateEndpoint;
    }
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

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }
}

export class PrivateEndpointOverridesPropertyList extends cdktn.ComplexList {
  public internalValue? : PrivateEndpointOverridesProperty[] | cdktn.IResolvable

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
  public get(index: number): PrivateEndpointOverridesPropertyOutputReference {
    return new PrivateEndpointOverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomJwtAuthorizerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#allowed_audience AwsHarness#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#allowed_clients AwsHarness#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#allowed_scopes AwsHarness#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#discovery_url AwsHarness#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * allowed_workload_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#allowed_workload_configuration AwsHarness#allowed_workload_configuration}
  */
  readonly allowedWorkloadConfiguration?: AllowedWorkloadConfigurationProperty[] | cdktn.IResolvable;
  /**
  * custom_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#custom_claim AwsHarness#custom_claim}
  */
  readonly customClaim?: CustomClaimProperty[] | cdktn.IResolvable;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#private_endpoint AwsHarness#private_endpoint}
  */
  readonly privateEndpoint?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty[] | cdktn.IResolvable;
  /**
  * private_endpoint_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#private_endpoint_overrides AwsHarness#private_endpoint_overrides}
  */
  readonly privateEndpointOverrides?: PrivateEndpointOverridesProperty[] | cdktn.IResolvable;
}
export class CustomJwtAuthorizerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomJwtAuthorizerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._allowedWorkloadConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedWorkloadConfiguration = this._allowedWorkloadConfiguration?.internalValue;
    }
    if (this._customClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaim = this._customClaim?.internalValue;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    if (this._privateEndpointOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointOverrides = this._privateEndpointOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomJwtAuthorizerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._allowedScopes = undefined;
      this._discoveryUrl = undefined;
      this._allowedWorkloadConfiguration.internalValue = undefined;
      this._customClaim.internalValue = undefined;
      this._privateEndpoint.internalValue = undefined;
      this._privateEndpointOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._allowedScopes = value.allowedScopes;
      this._discoveryUrl = value.discoveryUrl;
      this._allowedWorkloadConfiguration.internalValue = value.allowedWorkloadConfiguration;
      this._customClaim.internalValue = value.customClaim;
      this._privateEndpoint.internalValue = value.privateEndpoint;
      this._privateEndpointOverrides.internalValue = value.privateEndpointOverrides;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_audience'));
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_scopes'));
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // allowed_workload_configuration - computed: false, optional: true, required: false
  private _allowedWorkloadConfiguration = new AllowedWorkloadConfigurationPropertyList(this, "allowed_workload_configuration", false);
  public get allowedWorkloadConfiguration() {
    return this._allowedWorkloadConfiguration;
  }
  public putAllowedWorkloadConfiguration(value: AllowedWorkloadConfigurationProperty[] | cdktn.IResolvable) {
    this._allowedWorkloadConfiguration.internalValue = value;
  }
  public resetAllowedWorkloadConfiguration() {
    this._allowedWorkloadConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWorkloadConfigurationInput() {
    return this._allowedWorkloadConfiguration.internalValue;
  }

  // custom_claim - computed: false, optional: true, required: false
  private _customClaim = new CustomClaimPropertyList(this, "custom_claim", true);
  public get customClaim() {
    return this._customClaim;
  }
  public putCustomClaim(value: CustomClaimProperty[] | cdktn.IResolvable) {
    this._customClaim.internalValue = value;
  }
  public resetCustomClaim() {
    this._customClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimInput() {
    return this._customClaim.internalValue;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointPropertyList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointProperty[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // private_endpoint_overrides - computed: false, optional: true, required: false
  private _privateEndpointOverrides = new PrivateEndpointOverridesPropertyList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }
  public putPrivateEndpointOverrides(value: PrivateEndpointOverridesProperty[] | cdktn.IResolvable) {
    this._privateEndpointOverrides.internalValue = value;
  }
  public resetPrivateEndpointOverrides() {
    this._privateEndpointOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointOverridesInput() {
    return this._privateEndpointOverrides.internalValue;
  }
}

export class CustomJwtAuthorizerPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomJwtAuthorizerProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomJwtAuthorizerPropertyOutputReference {
    return new CustomJwtAuthorizerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizerConfigurationProperty {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer AwsHarness#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: CustomJwtAuthorizerProperty[] | cdktn.IResolvable;
}
export class AuthorizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: false, optional: true, required: false
  private _customJwtAuthorizer = new CustomJwtAuthorizerPropertyList(this, "custom_jwt_authorizer", false);
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: CustomJwtAuthorizerProperty[] | cdktn.IResolvable) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}

export class AuthorizerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizerConfigurationPropertyOutputReference {
    return new AuthorizerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout AwsHarness#idle_runtime_session_timeout}
  */
  readonly idleRuntimeSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_lifetime AwsHarness#max_lifetime}
  */
  readonly maxLifetime?: number;
}
export class EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleRuntimeSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleRuntimeSessionTimeout = this._idleRuntimeSessionTimeout;
    }
    if (this._maxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifetime = this._maxLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = undefined;
      this._maxLifetime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = value.idleRuntimeSessionTimeout;
      this._maxLifetime = value.maxLifetime;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: true, required: false
  private _idleRuntimeSessionTimeout?: number; 
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }
  public set idleRuntimeSessionTimeout(value: number) {
    this._idleRuntimeSessionTimeout = value;
  }
  public resetIdleRuntimeSessionTimeout() {
    this._idleRuntimeSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleRuntimeSessionTimeoutInput() {
    return this._idleRuntimeSessionTimeout;
  }

  // max_lifetime - computed: true, optional: true, required: false
  private _maxLifetime?: number; 
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
  public set maxLifetime(value: number) {
    this._maxLifetime = value;
  }
  public resetMaxLifetime() {
    this._maxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifetimeInput() {
    return this._maxLifetime;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#access_point_arn AwsHarness#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#mount_path AwsHarness#mount_path}
  */
  readonly mountPath: string;
}
export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: false, optional: false, required: true
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#access_point_arn AwsHarness#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#mount_path AwsHarness#mount_path}
  */
  readonly mountPath: string;
}
export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: false, optional: false, required: true
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#mount_path AwsHarness#mount_path}
  */
  readonly mountPath: string;
}
export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty {
  /**
  * efs_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#efs_access_point AwsHarness#efs_access_point}
  */
  readonly efsAccessPoint?: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty[] | cdktn.IResolvable;
  /**
  * s3_files_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#s3_files_access_point AwsHarness#s3_files_access_point}
  */
  readonly s3FilesAccessPoint?: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty[] | cdktn.IResolvable;
  /**
  * session_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#session_storage AwsHarness#session_storage}
  */
  readonly sessionStorage?: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty[] | cdktn.IResolvable;
}
export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsAccessPoint = this._efsAccessPoint?.internalValue;
    }
    if (this._s3FilesAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FilesAccessPoint = this._s3FilesAccessPoint?.internalValue;
    }
    if (this._sessionStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = undefined;
      this._s3FilesAccessPoint.internalValue = undefined;
      this._sessionStorage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = value.efsAccessPoint;
      this._s3FilesAccessPoint.internalValue = value.s3FilesAccessPoint;
      this._sessionStorage.internalValue = value.sessionStorage;
    }
  }

  // efs_access_point - computed: false, optional: true, required: false
  private _efsAccessPoint = new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointPropertyList(this, "efs_access_point", false);
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }
  public putEfsAccessPoint(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointProperty[] | cdktn.IResolvable) {
    this._efsAccessPoint.internalValue = value;
  }
  public resetEfsAccessPoint() {
    this._efsAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsAccessPointInput() {
    return this._efsAccessPoint.internalValue;
  }

  // s3_files_access_point - computed: false, optional: true, required: false
  private _s3FilesAccessPoint = new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointPropertyList(this, "s3_files_access_point", false);
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }
  public putS3FilesAccessPoint(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointProperty[] | cdktn.IResolvable) {
    this._s3FilesAccessPoint.internalValue = value;
  }
  public resetS3FilesAccessPoint() {
    this._s3FilesAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FilesAccessPointInput() {
    return this._s3FilesAccessPoint.internalValue;
  }

  // session_storage - computed: false, optional: true, required: false
  private _sessionStorage = new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStoragePropertyList(this, "session_storage", false);
  public get sessionStorage() {
    return this._sessionStorage;
  }
  public putSessionStorage(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageProperty[] | cdktn.IResolvable) {
    this._sessionStorage.internalValue = value;
  }
  public resetSessionStorage() {
    this._sessionStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage.internalValue;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#security_groups AwsHarness#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#subnets AwsHarness#subnets}
  */
  readonly subnets: string[];
}
export class EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // require_service_s3_endpoint - computed: true, optional: false, required: false
  public get requireServiceS3Endpoint() {
    return this.getBooleanAttribute('require_service_s3_endpoint');
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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
}

export class EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#network_mode AwsHarness#network_mode}
  */
  readonly networkMode: string;
  /**
  * network_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#network_mode_config AwsHarness#network_mode_config}
  */
  readonly networkModeConfig?: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty[] | cdktn.IResolvable;
}
export class EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._networkModeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkMode = value.networkMode;
      this._networkModeConfig.internalValue = value.networkModeConfig;
    }
  }

  // network_mode - computed: false, optional: false, required: true
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_mode_config - computed: false, optional: true, required: false
  private _networkModeConfig = new EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigPropertyList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
  public putNetworkModeConfig(value: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigProperty[] | cdktn.IResolvable) {
    this._networkModeConfig.internalValue = value;
  }
  public resetNetworkModeConfig() {
    this._networkModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeConfigInput() {
    return this._networkModeConfig.internalValue;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentAgentcoreRuntimeEnvironmentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration AwsHarness#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty[] | cdktn.IResolvable;
  /**
  * filesystem_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#filesystem_configuration AwsHarness#filesystem_configuration}
  */
  readonly filesystemConfiguration?: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#network_configuration AwsHarness#network_configuration}
  */
  readonly networkConfiguration?: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty[] | cdktn.IResolvable;
}
export class EnvironmentAgentcoreRuntimeEnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentAgentcoreRuntimeEnvironmentProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfiguration = this._lifecycleConfiguration?.internalValue;
    }
    if (this._filesystemConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemConfiguration = this._filesystemConfiguration?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentAgentcoreRuntimeEnvironmentProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifecycleConfiguration.internalValue = undefined;
      this._filesystemConfiguration.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifecycleConfiguration.internalValue = value.lifecycleConfiguration;
      this._filesystemConfiguration.internalValue = value.filesystemConfiguration;
      this._networkConfiguration.internalValue = value.networkConfiguration;
    }
  }

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationPropertyList(this, "lifecycle_configuration", false);
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: EnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationProperty[] | cdktn.IResolvable) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // filesystem_configuration - computed: false, optional: true, required: false
  private _filesystemConfiguration = new EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationPropertyList(this, "filesystem_configuration", false);
  public get filesystemConfiguration() {
    return this._filesystemConfiguration;
  }
  public putFilesystemConfiguration(value: EnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationProperty[] | cdktn.IResolvable) {
    this._filesystemConfiguration.internalValue = value;
  }
  public resetFilesystemConfiguration() {
    this._filesystemConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemConfigurationInput() {
    return this._filesystemConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationPropertyList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationProperty[] | cdktn.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }
}

export class EnvironmentAgentcoreRuntimeEnvironmentPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentAgentcoreRuntimeEnvironmentProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentAgentcoreRuntimeEnvironmentPropertyOutputReference {
    return new EnvironmentAgentcoreRuntimeEnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentProperty {
  /**
  * agentcore_runtime_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#agentcore_runtime_environment AwsHarness#agentcore_runtime_environment}
  */
  readonly agentcoreRuntimeEnvironment?: EnvironmentAgentcoreRuntimeEnvironmentProperty[] | cdktn.IResolvable;
}
export class EnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreRuntimeEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreRuntimeEnvironment = this._agentcoreRuntimeEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreRuntimeEnvironment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreRuntimeEnvironment.internalValue = value.agentcoreRuntimeEnvironment;
    }
  }

  // agentcore_runtime_environment - computed: false, optional: true, required: false
  private _agentcoreRuntimeEnvironment = new EnvironmentAgentcoreRuntimeEnvironmentPropertyList(this, "agentcore_runtime_environment", false);
  public get agentcoreRuntimeEnvironment() {
    return this._agentcoreRuntimeEnvironment;
  }
  public putAgentcoreRuntimeEnvironment(value: EnvironmentAgentcoreRuntimeEnvironmentProperty[] | cdktn.IResolvable) {
    this._agentcoreRuntimeEnvironment.internalValue = value;
  }
  public resetAgentcoreRuntimeEnvironment() {
    this._agentcoreRuntimeEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreRuntimeEnvironmentInput() {
    return this._agentcoreRuntimeEnvironment.internalValue;
  }
}

export class EnvironmentPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentPropertyOutputReference {
    return new EnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#container_uri AwsHarness#container_uri}
  */
  readonly containerUri: string;
}
export class ContainerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerUri = this._containerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerUri = value.containerUri;
    }
  }

  // container_uri - computed: false, optional: false, required: true
  private _containerUri?: string; 
  public get containerUri() {
    return this.getStringAttribute('container_uri');
  }
  public set containerUri(value: string) {
    this._containerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerUriInput() {
    return this._containerUri;
  }
}

export class ContainerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerConfigurationPropertyOutputReference {
    return new ContainerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentArtifactProperty {
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#container_configuration AwsHarness#container_configuration}
  */
  readonly containerConfiguration?: ContainerConfigurationProperty[] | cdktn.IResolvable;
}
export class EnvironmentArtifactPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentArtifactProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentArtifactProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerConfiguration.internalValue = value.containerConfiguration;
    }
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new ContainerConfigurationPropertyList(this, "container_configuration", false);
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: ContainerConfigurationProperty[] | cdktn.IResolvable) {
    this._containerConfiguration.internalValue = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration.internalValue;
  }
}

export class EnvironmentArtifactPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentArtifactProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentArtifactPropertyOutputReference {
    return new EnvironmentArtifactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#map_block_key AwsHarness#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#relevance_score AwsHarness#relevance_score}
  */
  readonly relevanceScore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#strategy_id AwsHarness#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#top_k AwsHarness#top_k}
  */
  readonly topK?: number;
}
export class MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._relevanceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevanceScore = this._relevanceScore;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._relevanceScore = undefined;
      this._strategyId = undefined;
      this._topK = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._relevanceScore = value.relevanceScore;
      this._strategyId = value.strategyId;
      this._topK = value.topK;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // relevance_score - computed: false, optional: true, required: false
  private _relevanceScore?: number; 
  public get relevanceScore() {
    return this.getNumberAttribute('relevance_score');
  }
  public set relevanceScore(value: number) {
    this._relevanceScore = value;
  }
  public resetRelevanceScore() {
    this._relevanceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceScoreInput() {
    return this._relevanceScore;
  }

  // strategy_id - computed: false, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // top_k - computed: false, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }
}

export class MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference {
    return new MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryAgentcoreMemoryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#actor_id AwsHarness#actor_id}
  */
  readonly actorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#arn AwsHarness#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#messages_count AwsHarness#messages_count}
  */
  readonly messagesCount?: number;
  /**
  * retrieval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#retrieval_config AwsHarness#retrieval_config}
  */
  readonly retrievalConfig?: MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty[] | cdktn.IResolvable;
}
export class MemoryAgentcoreMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryAgentcoreMemoryConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorId = this._actorId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._messagesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesCount = this._messagesCount;
    }
    if (this._retrievalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalConfig = this._retrievalConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryAgentcoreMemoryConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actorId = undefined;
      this._arn = undefined;
      this._messagesCount = undefined;
      this._retrievalConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actorId = value.actorId;
      this._arn = value.arn;
      this._messagesCount = value.messagesCount;
      this._retrievalConfig.internalValue = value.retrievalConfig;
    }
  }

  // actor_id - computed: false, optional: true, required: false
  private _actorId?: string; 
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }
  public set actorId(value: string) {
    this._actorId = value;
  }
  public resetActorId() {
    this._actorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorIdInput() {
    return this._actorId;
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

  // messages_count - computed: false, optional: true, required: false
  private _messagesCount?: number; 
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }
  public set messagesCount(value: number) {
    this._messagesCount = value;
  }
  public resetMessagesCount() {
    this._messagesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesCountInput() {
    return this._messagesCount;
  }

  // retrieval_config - computed: false, optional: true, required: false
  private _retrievalConfig = new MemoryAgentcoreMemoryConfigurationRetrievalConfigPropertyList(this, "retrieval_config", false);
  public get retrievalConfig() {
    return this._retrievalConfig;
  }
  public putRetrievalConfig(value: MemoryAgentcoreMemoryConfigurationRetrievalConfigProperty[] | cdktn.IResolvable) {
    this._retrievalConfig.internalValue = value;
  }
  public resetRetrievalConfig() {
    this._retrievalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalConfigInput() {
    return this._retrievalConfig.internalValue;
  }
}

export class MemoryAgentcoreMemoryConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryAgentcoreMemoryConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryAgentcoreMemoryConfigurationPropertyOutputReference {
    return new MemoryAgentcoreMemoryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryDisabledProperty {
}
export class MemoryDisabledPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryDisabledProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryDisabledProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MemoryDisabledPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryDisabledProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryDisabledPropertyOutputReference {
    return new MemoryDisabledPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryManagedMemoryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#encryption_key_arn AwsHarness#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#event_expiry_duration AwsHarness#event_expiry_duration}
  */
  readonly eventExpiryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#strategies AwsHarness#strategies}
  */
  readonly strategies?: string[];
}
export class MemoryManagedMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryManagedMemoryConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._eventExpiryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventExpiryDuration = this._eventExpiryDuration;
    }
    if (this._strategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategies = this._strategies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryManagedMemoryConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyArn = undefined;
      this._eventExpiryDuration = undefined;
      this._strategies = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._eventExpiryDuration = value.eventExpiryDuration;
      this._strategies = value.strategies;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // event_expiry_duration - computed: true, optional: true, required: false
  private _eventExpiryDuration?: number; 
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }
  public set eventExpiryDuration(value: number) {
    this._eventExpiryDuration = value;
  }
  public resetEventExpiryDuration() {
    this._eventExpiryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpiryDurationInput() {
    return this._eventExpiryDuration;
  }

  // strategies - computed: true, optional: true, required: false
  private _strategies?: string[]; 
  public get strategies() {
    return cdktn.Fn.tolist(this.getListAttribute('strategies'));
  }
  public set strategies(value: string[]) {
    this._strategies = value;
  }
  public resetStrategies() {
    this._strategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategiesInput() {
    return this._strategies;
  }
}

export class MemoryManagedMemoryConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryManagedMemoryConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryManagedMemoryConfigurationPropertyOutputReference {
    return new MemoryManagedMemoryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryProperty {
  /**
  * agentcore_memory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#agentcore_memory_configuration AwsHarness#agentcore_memory_configuration}
  */
  readonly agentcoreMemoryConfiguration?: MemoryAgentcoreMemoryConfigurationProperty[] | cdktn.IResolvable;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#disabled AwsHarness#disabled}
  */
  readonly disabled?: MemoryDisabledProperty[] | cdktn.IResolvable;
  /**
  * managed_memory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#managed_memory_configuration AwsHarness#managed_memory_configuration}
  */
  readonly managedMemoryConfiguration?: MemoryManagedMemoryConfigurationProperty[] | cdktn.IResolvable;
}
export class MemoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreMemoryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreMemoryConfiguration = this._agentcoreMemoryConfiguration?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._managedMemoryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryConfiguration = this._managedMemoryConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreMemoryConfiguration.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._managedMemoryConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreMemoryConfiguration.internalValue = value.agentcoreMemoryConfiguration;
      this._disabled.internalValue = value.disabled;
      this._managedMemoryConfiguration.internalValue = value.managedMemoryConfiguration;
    }
  }

  // agentcore_memory_configuration - computed: false, optional: true, required: false
  private _agentcoreMemoryConfiguration = new MemoryAgentcoreMemoryConfigurationPropertyList(this, "agentcore_memory_configuration", false);
  public get agentcoreMemoryConfiguration() {
    return this._agentcoreMemoryConfiguration;
  }
  public putAgentcoreMemoryConfiguration(value: MemoryAgentcoreMemoryConfigurationProperty[] | cdktn.IResolvable) {
    this._agentcoreMemoryConfiguration.internalValue = value;
  }
  public resetAgentcoreMemoryConfiguration() {
    this._agentcoreMemoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreMemoryConfigurationInput() {
    return this._agentcoreMemoryConfiguration.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new MemoryDisabledPropertyList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: MemoryDisabledProperty[] | cdktn.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // managed_memory_configuration - computed: false, optional: true, required: false
  private _managedMemoryConfiguration = new MemoryManagedMemoryConfigurationPropertyList(this, "managed_memory_configuration", false);
  public get managedMemoryConfiguration() {
    return this._managedMemoryConfiguration;
  }
  public putManagedMemoryConfiguration(value: MemoryManagedMemoryConfigurationProperty[] | cdktn.IResolvable) {
    this._managedMemoryConfiguration.internalValue = value;
  }
  public resetManagedMemoryConfiguration() {
    this._managedMemoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryConfigurationInput() {
    return this._managedMemoryConfiguration.internalValue;
  }
}

export class MemoryPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryPropertyOutputReference {
    return new MemoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_tokens AwsHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#model_id AwsHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#temperature AwsHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#top_p AwsHarness#top_p}
  */
  readonly topP?: number;
}
export class BedrockModelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class BedrockModelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : BedrockModelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelConfigPropertyOutputReference {
    return new BedrockModelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiModelConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#api_key_arn AwsHarness#api_key_arn}
  */
  readonly apiKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_tokens AwsHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#model_id AwsHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#temperature AwsHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#top_k AwsHarness#top_k}
  */
  readonly topK?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#top_p AwsHarness#top_p}
  */
  readonly topP?: number;
}
export class GeminiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiModelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyArn = this._apiKeyArn;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiModelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyArn = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topK = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyArn = value.apiKeyArn;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
    }
  }

  // api_key_arn - computed: false, optional: false, required: true
  private _apiKeyArn?: string; 
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }
  public set apiKeyArn(value: string) {
    this._apiKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyArnInput() {
    return this._apiKeyArn;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_k - computed: false, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class GeminiModelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : GeminiModelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): GeminiModelConfigPropertyOutputReference {
    return new GeminiModelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenaiModelConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#api_key_arn AwsHarness#api_key_arn}
  */
  readonly apiKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#max_tokens AwsHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#model_id AwsHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#temperature AwsHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#top_p AwsHarness#top_p}
  */
  readonly topP?: number;
}
export class OpenaiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenaiModelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyArn = this._apiKeyArn;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenaiModelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyArn = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyArn = value.apiKeyArn;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // api_key_arn - computed: false, optional: false, required: true
  private _apiKeyArn?: string; 
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }
  public set apiKeyArn(value: string) {
    this._apiKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyArnInput() {
    return this._apiKeyArn;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class OpenaiModelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : OpenaiModelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): OpenaiModelConfigPropertyOutputReference {
    return new OpenaiModelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelProperty {
  /**
  * bedrock_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#bedrock_model_config AwsHarness#bedrock_model_config}
  */
  readonly bedrockModelConfig?: BedrockModelConfigProperty[] | cdktn.IResolvable;
  /**
  * gemini_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#gemini_model_config AwsHarness#gemini_model_config}
  */
  readonly geminiModelConfig?: GeminiModelConfigProperty[] | cdktn.IResolvable;
  /**
  * openai_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#openai_model_config AwsHarness#openai_model_config}
  */
  readonly openaiModelConfig?: OpenaiModelConfigProperty[] | cdktn.IResolvable;
}
export class ModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockModelConfig = this._bedrockModelConfig?.internalValue;
    }
    if (this._geminiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geminiModelConfig = this._geminiModelConfig?.internalValue;
    }
    if (this._openaiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiModelConfig = this._openaiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockModelConfig.internalValue = undefined;
      this._geminiModelConfig.internalValue = undefined;
      this._openaiModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockModelConfig.internalValue = value.bedrockModelConfig;
      this._geminiModelConfig.internalValue = value.geminiModelConfig;
      this._openaiModelConfig.internalValue = value.openaiModelConfig;
    }
  }

  // bedrock_model_config - computed: false, optional: true, required: false
  private _bedrockModelConfig = new BedrockModelConfigPropertyList(this, "bedrock_model_config", false);
  public get bedrockModelConfig() {
    return this._bedrockModelConfig;
  }
  public putBedrockModelConfig(value: BedrockModelConfigProperty[] | cdktn.IResolvable) {
    this._bedrockModelConfig.internalValue = value;
  }
  public resetBedrockModelConfig() {
    this._bedrockModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockModelConfigInput() {
    return this._bedrockModelConfig.internalValue;
  }

  // gemini_model_config - computed: false, optional: true, required: false
  private _geminiModelConfig = new GeminiModelConfigPropertyList(this, "gemini_model_config", false);
  public get geminiModelConfig() {
    return this._geminiModelConfig;
  }
  public putGeminiModelConfig(value: GeminiModelConfigProperty[] | cdktn.IResolvable) {
    this._geminiModelConfig.internalValue = value;
  }
  public resetGeminiModelConfig() {
    this._geminiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiModelConfigInput() {
    return this._geminiModelConfig.internalValue;
  }

  // openai_model_config - computed: false, optional: true, required: false
  private _openaiModelConfig = new OpenaiModelConfigPropertyList(this, "openai_model_config", false);
  public get openaiModelConfig() {
    return this._openaiModelConfig;
  }
  public putOpenaiModelConfig(value: OpenaiModelConfigProperty[] | cdktn.IResolvable) {
    this._openaiModelConfig.internalValue = value;
  }
  public resetOpenaiModelConfig() {
    this._openaiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiModelConfigInput() {
    return this._openaiModelConfig.internalValue;
  }
}

export class ModelPropertyList extends cdktn.ComplexList {
  public internalValue? : ModelProperty[] | cdktn.IResolvable

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
  public get(index: number): ModelPropertyOutputReference {
    return new ModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SkillProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#path AwsHarness#path}
  */
  readonly path: string;
}
export class SkillPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SkillProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkillProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SkillPropertyList extends cdktn.ComplexList {
  public internalValue? : SkillProperty[] | cdktn.IResolvable

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
  public get(index: number): SkillPropertyOutputReference {
    return new SkillPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPromptProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#text AwsHarness#text}
  */
  readonly text: string;
}
export class SystemPromptPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SystemPromptProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPromptProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class SystemPromptPropertyList extends cdktn.ComplexList {
  public internalValue? : SystemPromptProperty[] | cdktn.IResolvable

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
  public get(index: number): SystemPromptPropertyOutputReference {
    return new SystemPromptPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#create AwsHarness#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#delete AwsHarness#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#update AwsHarness#update}
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
export interface AgentcoreBrowserProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#browser_arn AwsHarness#browser_arn}
  */
  readonly browserArn?: string;
}
export class AgentcoreBrowserPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentcoreBrowserProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserArn = this._browserArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentcoreBrowserProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browserArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browserArn = value.browserArn;
    }
  }

  // browser_arn - computed: false, optional: true, required: false
  private _browserArn?: string; 
  public get browserArn() {
    return this.getStringAttribute('browser_arn');
  }
  public set browserArn(value: string) {
    this._browserArn = value;
  }
  public resetBrowserArn() {
    this._browserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserArnInput() {
    return this._browserArn;
  }
}

export class AgentcoreBrowserPropertyList extends cdktn.ComplexList {
  public internalValue? : AgentcoreBrowserProperty[] | cdktn.IResolvable

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
  public get(index: number): AgentcoreBrowserPropertyOutputReference {
    return new AgentcoreBrowserPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentcoreCodeInterpreterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn AwsHarness#code_interpreter_arn}
  */
  readonly codeInterpreterArn?: string;
}
export class AgentcoreCodeInterpreterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentcoreCodeInterpreterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeInterpreterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeInterpreterArn = this._codeInterpreterArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentcoreCodeInterpreterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeInterpreterArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeInterpreterArn = value.codeInterpreterArn;
    }
  }

  // code_interpreter_arn - computed: false, optional: true, required: false
  private _codeInterpreterArn?: string; 
  public get codeInterpreterArn() {
    return this.getStringAttribute('code_interpreter_arn');
  }
  public set codeInterpreterArn(value: string) {
    this._codeInterpreterArn = value;
  }
  public resetCodeInterpreterArn() {
    this._codeInterpreterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInterpreterArnInput() {
    return this._codeInterpreterArn;
  }
}

export class AgentcoreCodeInterpreterPropertyList extends cdktn.ComplexList {
  public internalValue? : AgentcoreCodeInterpreterProperty[] | cdktn.IResolvable

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
  public get(index: number): AgentcoreCodeInterpreterPropertyOutputReference {
    return new AgentcoreCodeInterpreterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#custom_parameters AwsHarness#custom_parameters}
  */
  readonly customParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#default_return_url AwsHarness#default_return_url}
  */
  readonly defaultReturnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#grant_type AwsHarness#grant_type}
  */
  readonly grantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#provider_arn AwsHarness#provider_arn}
  */
  readonly providerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#scopes AwsHarness#scopes}
  */
  readonly scopes: string[];
}
export class OauthPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OauthProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters;
    }
    if (this._defaultReturnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReturnUrl = this._defaultReturnUrl;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customParameters = undefined;
      this._defaultReturnUrl = undefined;
      this._grantType = undefined;
      this._providerArn = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customParameters = value.customParameters;
      this._defaultReturnUrl = value.defaultReturnUrl;
      this._grantType = value.grantType;
      this._providerArn = value.providerArn;
      this._scopes = value.scopes;
    }
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: { [key: string]: string }; 
  public get customParameters() {
    return this.getStringMapAttribute('custom_parameters');
  }
  public set customParameters(value: { [key: string]: string }) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
  }

  // default_return_url - computed: false, optional: true, required: false
  private _defaultReturnUrl?: string; 
  public get defaultReturnUrl() {
    return this.getStringAttribute('default_return_url');
  }
  public set defaultReturnUrl(value: string) {
    this._defaultReturnUrl = value;
  }
  public resetDefaultReturnUrl() {
    this._defaultReturnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReturnUrlInput() {
    return this._defaultReturnUrl;
  }

  // grant_type - computed: false, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // provider_arn - computed: false, optional: false, required: true
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class OauthPropertyList extends cdktn.ComplexList {
  public internalValue? : OauthProperty[] | cdktn.IResolvable

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
  public get(index: number): OauthPropertyOutputReference {
    return new OauthPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundAuthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#aws_iam AwsHarness#aws_iam}
  */
  readonly awsIam?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#none AwsHarness#none}
  */
  readonly none?: boolean | cdktn.IResolvable;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#oauth AwsHarness#oauth}
  */
  readonly oauth?: OauthProperty[] | cdktn.IResolvable;
}
export class OutboundAuthPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutboundAuthProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIam !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIam = this._awsIam;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAuthProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsIam = undefined;
      this._none = undefined;
      this._oauth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsIam = value.awsIam;
      this._none = value.none;
      this._oauth.internalValue = value.oauth;
    }
  }

  // aws_iam - computed: false, optional: true, required: false
  private _awsIam?: boolean | cdktn.IResolvable; 
  public get awsIam() {
    return this.getBooleanAttribute('aws_iam');
  }
  public set awsIam(value: boolean | cdktn.IResolvable) {
    this._awsIam = value;
  }
  public resetAwsIam() {
    this._awsIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamInput() {
    return this._awsIam;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktn.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktn.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new OauthPropertyList(this, "oauth", false);
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: OauthProperty[] | cdktn.IResolvable) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }
}

export class OutboundAuthPropertyList extends cdktn.ComplexList {
  public internalValue? : OutboundAuthProperty[] | cdktn.IResolvable

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
  public get(index: number): OutboundAuthPropertyOutputReference {
    return new OutboundAuthPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentcoreGatewayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#gateway_arn AwsHarness#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * outbound_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#outbound_auth AwsHarness#outbound_auth}
  */
  readonly outboundAuth?: OutboundAuthProperty[] | cdktn.IResolvable;
}
export class AgentcoreGatewayPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentcoreGatewayProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayArn = this._gatewayArn;
    }
    if (this._outboundAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAuth = this._outboundAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentcoreGatewayProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayArn = undefined;
      this._outboundAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayArn = value.gatewayArn;
      this._outboundAuth.internalValue = value.outboundAuth;
    }
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
  }

  // outbound_auth - computed: false, optional: true, required: false
  private _outboundAuth = new OutboundAuthPropertyList(this, "outbound_auth", false);
  public get outboundAuth() {
    return this._outboundAuth;
  }
  public putOutboundAuth(value: OutboundAuthProperty[] | cdktn.IResolvable) {
    this._outboundAuth.internalValue = value;
  }
  public resetOutboundAuth() {
    this._outboundAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAuthInput() {
    return this._outboundAuth.internalValue;
  }
}

export class AgentcoreGatewayPropertyList extends cdktn.ComplexList {
  public internalValue? : AgentcoreGatewayProperty[] | cdktn.IResolvable

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
  public get(index: number): AgentcoreGatewayPropertyOutputReference {
    return new AgentcoreGatewayPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InlineFunctionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#description AwsHarness#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#input_schema AwsHarness#input_schema}
  */
  readonly inputSchema: string;
}
export class InlineFunctionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InlineFunctionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InlineFunctionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inputSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inputSchema = value.inputSchema;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // input_schema - computed: false, optional: false, required: true
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }
}

export class InlineFunctionPropertyList extends cdktn.ComplexList {
  public internalValue? : InlineFunctionProperty[] | cdktn.IResolvable

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
  public get(index: number): InlineFunctionPropertyOutputReference {
    return new InlineFunctionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RemoteMcpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#headers AwsHarness#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#url AwsHarness#url}
  */
  readonly url: string;
}
export class RemoteMcpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RemoteMcpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteMcpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._url = value.url;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class RemoteMcpPropertyList extends cdktn.ComplexList {
  public internalValue? : RemoteMcpProperty[] | cdktn.IResolvable

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
  public get(index: number): RemoteMcpPropertyOutputReference {
    return new RemoteMcpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ToolConfigProperty {
  /**
  * agentcore_browser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#agentcore_browser AwsHarness#agentcore_browser}
  */
  readonly agentcoreBrowser?: AgentcoreBrowserProperty[] | cdktn.IResolvable;
  /**
  * agentcore_code_interpreter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#agentcore_code_interpreter AwsHarness#agentcore_code_interpreter}
  */
  readonly agentcoreCodeInterpreter?: AgentcoreCodeInterpreterProperty[] | cdktn.IResolvable;
  /**
  * agentcore_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#agentcore_gateway AwsHarness#agentcore_gateway}
  */
  readonly agentcoreGateway?: AgentcoreGatewayProperty[] | cdktn.IResolvable;
  /**
  * inline_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#inline_function AwsHarness#inline_function}
  */
  readonly inlineFunction?: InlineFunctionProperty[] | cdktn.IResolvable;
  /**
  * remote_mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#remote_mcp AwsHarness#remote_mcp}
  */
  readonly remoteMcp?: RemoteMcpProperty[] | cdktn.IResolvable;
}
export class ToolConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ToolConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreBrowser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreBrowser = this._agentcoreBrowser?.internalValue;
    }
    if (this._agentcoreCodeInterpreter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreCodeInterpreter = this._agentcoreCodeInterpreter?.internalValue;
    }
    if (this._agentcoreGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreGateway = this._agentcoreGateway?.internalValue;
    }
    if (this._inlineFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineFunction = this._inlineFunction?.internalValue;
    }
    if (this._remoteMcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMcp = this._remoteMcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ToolConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreBrowser.internalValue = undefined;
      this._agentcoreCodeInterpreter.internalValue = undefined;
      this._agentcoreGateway.internalValue = undefined;
      this._inlineFunction.internalValue = undefined;
      this._remoteMcp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreBrowser.internalValue = value.agentcoreBrowser;
      this._agentcoreCodeInterpreter.internalValue = value.agentcoreCodeInterpreter;
      this._agentcoreGateway.internalValue = value.agentcoreGateway;
      this._inlineFunction.internalValue = value.inlineFunction;
      this._remoteMcp.internalValue = value.remoteMcp;
    }
  }

  // agentcore_browser - computed: false, optional: true, required: false
  private _agentcoreBrowser = new AgentcoreBrowserPropertyList(this, "agentcore_browser", false);
  public get agentcoreBrowser() {
    return this._agentcoreBrowser;
  }
  public putAgentcoreBrowser(value: AgentcoreBrowserProperty[] | cdktn.IResolvable) {
    this._agentcoreBrowser.internalValue = value;
  }
  public resetAgentcoreBrowser() {
    this._agentcoreBrowser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreBrowserInput() {
    return this._agentcoreBrowser.internalValue;
  }

  // agentcore_code_interpreter - computed: false, optional: true, required: false
  private _agentcoreCodeInterpreter = new AgentcoreCodeInterpreterPropertyList(this, "agentcore_code_interpreter", false);
  public get agentcoreCodeInterpreter() {
    return this._agentcoreCodeInterpreter;
  }
  public putAgentcoreCodeInterpreter(value: AgentcoreCodeInterpreterProperty[] | cdktn.IResolvable) {
    this._agentcoreCodeInterpreter.internalValue = value;
  }
  public resetAgentcoreCodeInterpreter() {
    this._agentcoreCodeInterpreter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreCodeInterpreterInput() {
    return this._agentcoreCodeInterpreter.internalValue;
  }

  // agentcore_gateway - computed: false, optional: true, required: false
  private _agentcoreGateway = new AgentcoreGatewayPropertyList(this, "agentcore_gateway", false);
  public get agentcoreGateway() {
    return this._agentcoreGateway;
  }
  public putAgentcoreGateway(value: AgentcoreGatewayProperty[] | cdktn.IResolvable) {
    this._agentcoreGateway.internalValue = value;
  }
  public resetAgentcoreGateway() {
    this._agentcoreGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreGatewayInput() {
    return this._agentcoreGateway.internalValue;
  }

  // inline_function - computed: false, optional: true, required: false
  private _inlineFunction = new InlineFunctionPropertyList(this, "inline_function", false);
  public get inlineFunction() {
    return this._inlineFunction;
  }
  public putInlineFunction(value: InlineFunctionProperty[] | cdktn.IResolvable) {
    this._inlineFunction.internalValue = value;
  }
  public resetInlineFunction() {
    this._inlineFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineFunctionInput() {
    return this._inlineFunction.internalValue;
  }

  // remote_mcp - computed: false, optional: true, required: false
  private _remoteMcp = new RemoteMcpPropertyList(this, "remote_mcp", false);
  public get remoteMcp() {
    return this._remoteMcp;
  }
  public putRemoteMcp(value: RemoteMcpProperty[] | cdktn.IResolvable) {
    this._remoteMcp.internalValue = value;
  }
  public resetRemoteMcp() {
    this._remoteMcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMcpInput() {
    return this._remoteMcp.internalValue;
  }
}

export class ToolConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ToolConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ToolConfigPropertyOutputReference {
    return new ToolConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ToolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#name AwsHarness#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#type AwsHarness#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_harness#config AwsHarness#config}
  */
  readonly config?: ToolConfigProperty[] | cdktn.IResolvable;
}
export class ToolPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ToolProperty | cdktn.IResolvable | undefined {
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
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ToolProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._config.internalValue = undefined;
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
      this._config.internalValue = value.config;
    }
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

  // config - computed: false, optional: true, required: false
  private _config = new ToolConfigPropertyList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: ToolConfigProperty[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class ToolPropertyList extends cdktn.ComplexList {
  public internalValue? : ToolProperty[] | cdktn.IResolvable

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
  public get(index: number): ToolPropertyOutputReference {
    return new ToolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
