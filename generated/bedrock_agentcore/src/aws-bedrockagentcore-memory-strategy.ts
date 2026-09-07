// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMemoryStrategyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#description AwsMemoryStrategy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn AwsMemoryStrategy#memory_execution_role_arn}
  */
  readonly memoryExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_id AwsMemoryStrategy#memory_id}
  */
  readonly memoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#name AwsMemoryStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates AwsMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespaces AwsMemoryStrategy#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#region AwsMemoryStrategy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type AwsMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#configuration AwsMemoryStrategy#configuration}
  */
  readonly configuration?: AwsMemoryStrategy.ConfigurationProperty[] | cdktn.IResolvable;
  /**
  * memory_record_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_record_schema AwsMemoryStrategy#memory_record_schema}
  */
  readonly memoryRecordSchema?: AwsMemoryStrategy.MemoryRecordSchemaProperty[] | cdktn.IResolvable;
  /**
  * reflection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#reflection_configuration AwsMemoryStrategy#reflection_configuration}
  */
  readonly reflectionConfiguration?: AwsMemoryStrategy.ReflectionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#timeouts AwsMemoryStrategy#timeouts}
  */
  readonly timeouts?: AwsMemoryStrategy.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy}
*/
export class AwsMemoryStrategy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_memory_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMemoryStrategy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMemoryStrategy to import
  * @param importFromId The id of the existing AwsMemoryStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMemoryStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_memory_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMemoryStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMemoryStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_memory_strategy',
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
    this._memoryExecutionRoleArn = config.memoryExecutionRoleArn;
    this._memoryId = config.memoryId;
    this._name = config.name;
    this._namespaceTemplates = config.namespaceTemplates;
    this._namespaces = config.namespaces;
    this._region = config.region;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._memoryRecordSchema.internalValue = config.memoryRecordSchema;
    this._reflectionConfiguration.internalValue = config.reflectionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // memory_execution_role_arn - computed: false, optional: true, required: false
  private _memoryExecutionRoleArn?: string; 
  public get memoryExecutionRoleArn() {
    return this.getStringAttribute('memory_execution_role_arn');
  }
  public set memoryExecutionRoleArn(value: string) {
    this._memoryExecutionRoleArn = value;
  }
  public resetMemoryExecutionRoleArn() {
    this._memoryExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExecutionRoleArnInput() {
    return this._memoryExecutionRoleArn;
  }

  // memory_id - computed: false, optional: false, required: true
  private _memoryId?: string; 
  public get memoryId() {
    return this.getStringAttribute('memory_id');
  }
  public set memoryId(value: string) {
    this._memoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryIdInput() {
    return this._memoryId;
  }

  // memory_strategy_id - computed: true, optional: false, required: false
  public get memoryStrategyId() {
    return this.getStringAttribute('memory_strategy_id');
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktn.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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
  private _configuration = new AwsMemoryStrategy.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsMemoryStrategy.ConfigurationProperty[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // memory_record_schema - computed: false, optional: true, required: false
  private _memoryRecordSchema = new AwsMemoryStrategy.MemoryRecordSchemaPropertyList(this, "memory_record_schema", false);
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: AwsMemoryStrategy.MemoryRecordSchemaProperty[] | cdktn.IResolvable) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
  }

  // reflection_configuration - computed: false, optional: true, required: false
  private _reflectionConfiguration = new AwsMemoryStrategy.ReflectionConfigurationPropertyList(this, "reflection_configuration", false);
  public get reflectionConfiguration() {
    return this._reflectionConfiguration;
  }
  public putReflectionConfiguration(value: AwsMemoryStrategy.ReflectionConfigurationProperty[] | cdktn.IResolvable) {
    this._reflectionConfiguration.internalValue = value;
  }
  public resetReflectionConfiguration() {
    this._reflectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionConfigurationInput() {
    return this._reflectionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsMemoryStrategy.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsMemoryStrategy.TimeoutsProperty) {
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
      memory_execution_role_arn: cdktn.stringToTerraform(this._memoryExecutionRoleArn),
      memory_id: cdktn.stringToTerraform(this._memoryId),
      name: cdktn.stringToTerraform(this._name),
      namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._namespaceTemplates),
      namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(this._namespaces),
      region: cdktn.stringToTerraform(this._region),
      type: cdktn.stringToTerraform(this._type),
      configuration: cdktn.listMapper(awsMemoryStrategyConfigurationPropertyToTerraform, true)(this._configuration.internalValue),
      memory_record_schema: cdktn.listMapper(awsMemoryStrategyMemoryRecordSchemaPropertyToTerraform, true)(this._memoryRecordSchema.internalValue),
      reflection_configuration: cdktn.listMapper(awsMemoryStrategyReflectionConfigurationPropertyToTerraform, true)(this._reflectionConfiguration.internalValue),
      timeouts: awsMemoryStrategyTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      memory_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._memoryExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_id: {
        value: cdktn.stringToHclTerraform(this._memoryId),
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
      namespace_templates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._namespaceTemplates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespaces: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
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
        value: cdktn.listMapperHcl(awsMemoryStrategyConfigurationPropertyToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMemoryStrategy.ConfigurationPropertyList",
      },
      memory_record_schema: {
        value: cdktn.listMapperHcl(awsMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform, true)(this._memoryRecordSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMemoryStrategy.MemoryRecordSchemaPropertyList",
      },
      reflection_configuration: {
        value: cdktn.listMapperHcl(awsMemoryStrategyReflectionConfigurationPropertyToHclTerraform, true)(this._reflectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMemoryStrategy.ReflectionConfigurationPropertyList",
      },
      timeouts: {
        value: awsMemoryStrategyTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsMemoryStrategy.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMemoryStrategyConsolidationPropertyToTerraform(struct?: AwsMemoryStrategy.ConsolidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function awsMemoryStrategyConsolidationPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConsolidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyExtractionPropertyToTerraform(struct?: AwsMemoryStrategy.ExtractionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function awsMemoryStrategyExtractionPropertyToHclTerraform(struct?: AwsMemoryStrategy.ExtractionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyReflectionPropertyToTerraform(struct?: AwsMemoryStrategy.ReflectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
  }
}


export function awsMemoryStrategyReflectionPropertyToHclTerraform(struct?: AwsMemoryStrategy.ReflectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMemoryStrategyTriggerConditionsActualPropertyToTerraform(struct?: AwsMemoryStrategy.TriggerConditionsActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMemoryStrategyTriggerConditionsActualPropertyToHclTerraform(struct?: AwsMemoryStrategy.TriggerConditionsActualProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMemoryStrategyInvocationConfigurationPropertyToTerraform(struct?: AwsMemoryStrategy.InvocationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_delivery_bucket_name: cdktn.stringToTerraform(struct!.payloadDeliveryBucketName),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function awsMemoryStrategyInvocationConfigurationPropertyToHclTerraform(struct?: AwsMemoryStrategy.InvocationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_delivery_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.payloadDeliveryBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_count: cdktn.numberToTerraform(struct!.messageCount),
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_count: {
      value: cdktn.numberToHclTerraform(struct!.messageCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_session_timeout: cdktn.numberToTerraform(struct!.idleSessionTimeout),
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_count: cdktn.numberToTerraform(struct!.tokenCount),
  }
}


export function awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_count: {
      value: cdktn.numberToHclTerraform(struct!.tokenCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyTriggerConditionsPropertyToTerraform(struct?: AwsMemoryStrategy.TriggerConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_based_trigger: cdktn.listMapper(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyToTerraform, true)(struct!.messageBasedTrigger),
    time_based_trigger: cdktn.listMapper(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyToTerraform, true)(struct!.timeBasedTrigger),
    token_based_trigger: cdktn.listMapper(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyToTerraform, true)(struct!.tokenBasedTrigger),
  }
}


export function awsMemoryStrategyTriggerConditionsPropertyToHclTerraform(struct?: AwsMemoryStrategy.TriggerConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_based_trigger: {
      value: cdktn.listMapperHcl(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyToHclTerraform, true)(struct!.messageBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyList",
    },
    time_based_trigger: {
      value: cdktn.listMapperHcl(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyToHclTerraform, true)(struct!.timeBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyList",
    },
    token_based_trigger: {
      value: cdktn.listMapperHcl(awsMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyToHclTerraform, true)(struct!.tokenBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategySelfManagedConfigurationPropertyToTerraform(struct?: AwsMemoryStrategy.SelfManagedConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    historical_context_window_size: cdktn.numberToTerraform(struct!.historicalContextWindowSize),
    invocation_configuration: cdktn.listMapper(awsMemoryStrategyInvocationConfigurationPropertyToTerraform, true)(struct!.invocationConfiguration),
    trigger_conditions: cdktn.listMapper(awsMemoryStrategyTriggerConditionsPropertyToTerraform, true)(struct!.triggerConditions),
  }
}


export function awsMemoryStrategySelfManagedConfigurationPropertyToHclTerraform(struct?: AwsMemoryStrategy.SelfManagedConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    historical_context_window_size: {
      value: cdktn.numberToHclTerraform(struct!.historicalContextWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_configuration: {
      value: cdktn.listMapperHcl(awsMemoryStrategyInvocationConfigurationPropertyToHclTerraform, true)(struct!.invocationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InvocationConfigurationPropertyList",
    },
    trigger_conditions: {
      value: cdktn.listMapperHcl(awsMemoryStrategyTriggerConditionsPropertyToHclTerraform, true)(struct!.triggerConditions),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerConditionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyConfigurationPropertyToTerraform(struct?: AwsMemoryStrategy.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    consolidation: cdktn.listMapper(awsMemoryStrategyConsolidationPropertyToTerraform, true)(struct!.consolidation),
    extraction: cdktn.listMapper(awsMemoryStrategyExtractionPropertyToTerraform, true)(struct!.extraction),
    reflection: cdktn.listMapper(awsMemoryStrategyReflectionPropertyToTerraform, true)(struct!.reflection),
    self_managed_configuration: cdktn.listMapper(awsMemoryStrategySelfManagedConfigurationPropertyToTerraform, true)(struct!.selfManagedConfiguration),
  }
}


export function awsMemoryStrategyConfigurationPropertyToHclTerraform(struct?: AwsMemoryStrategy.ConfigurationProperty | cdktn.IResolvable): any {
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
    consolidation: {
      value: cdktn.listMapperHcl(awsMemoryStrategyConsolidationPropertyToHclTerraform, true)(struct!.consolidation),
      isBlock: true,
      type: "list",
      storageClassType: "ConsolidationPropertyList",
    },
    extraction: {
      value: cdktn.listMapperHcl(awsMemoryStrategyExtractionPropertyToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "ExtractionPropertyList",
    },
    reflection: {
      value: cdktn.listMapperHcl(awsMemoryStrategyReflectionPropertyToHclTerraform, true)(struct!.reflection),
      isBlock: true,
      type: "list",
      storageClassType: "ReflectionPropertyList",
    },
    self_managed_configuration: {
      value: cdktn.listMapperHcl(awsMemoryStrategySelfManagedConfigurationPropertyToHclTerraform, true)(struct!.selfManagedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SelfManagedConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyNumberValidationPropertyToTerraform(struct?: AwsMemoryStrategy.NumberValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function awsMemoryStrategyNumberValidationPropertyToHclTerraform(struct?: AwsMemoryStrategy.NumberValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyStringListValidationPropertyToTerraform(struct?: AwsMemoryStrategy.StringListValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function awsMemoryStrategyStringListValidationPropertyToHclTerraform(struct?: AwsMemoryStrategy.StringListValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyStringValidationPropertyToTerraform(struct?: AwsMemoryStrategy.StringValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function awsMemoryStrategyStringValidationPropertyToHclTerraform(struct?: AwsMemoryStrategy.StringValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyValidationPropertyToTerraform(struct?: AwsMemoryStrategy.ValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: cdktn.listMapper(awsMemoryStrategyNumberValidationPropertyToTerraform, true)(struct!.numberValidation),
    string_list_validation: cdktn.listMapper(awsMemoryStrategyStringListValidationPropertyToTerraform, true)(struct!.stringListValidation),
    string_validation: cdktn.listMapper(awsMemoryStrategyStringValidationPropertyToTerraform, true)(struct!.stringValidation),
  }
}


export function awsMemoryStrategyValidationPropertyToHclTerraform(struct?: AwsMemoryStrategy.ValidationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: cdktn.listMapperHcl(awsMemoryStrategyNumberValidationPropertyToHclTerraform, true)(struct!.numberValidation),
      isBlock: true,
      type: "list",
      storageClassType: "NumberValidationPropertyList",
    },
    string_list_validation: {
      value: cdktn.listMapperHcl(awsMemoryStrategyStringListValidationPropertyToHclTerraform, true)(struct!.stringListValidation),
      isBlock: true,
      type: "list",
      storageClassType: "StringListValidationPropertyList",
    },
    string_validation: {
      value: cdktn.listMapperHcl(awsMemoryStrategyStringValidationPropertyToHclTerraform, true)(struct!.stringValidation),
      isBlock: true,
      type: "list",
      storageClassType: "StringValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyLlmExtractionConfigPropertyToTerraform(struct?: AwsMemoryStrategy.LlmExtractionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: cdktn.listMapper(awsMemoryStrategyValidationPropertyToTerraform, true)(struct!.validation),
  }
}


export function awsMemoryStrategyLlmExtractionConfigPropertyToHclTerraform(struct?: AwsMemoryStrategy.LlmExtractionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: cdktn.listMapperHcl(awsMemoryStrategyValidationPropertyToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "ValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyExtractionConfigPropertyToTerraform(struct?: AwsMemoryStrategy.ExtractionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: cdktn.listMapper(awsMemoryStrategyLlmExtractionConfigPropertyToTerraform, true)(struct!.llmExtractionConfig),
  }
}


export function awsMemoryStrategyExtractionConfigPropertyToHclTerraform(struct?: AwsMemoryStrategy.ExtractionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: cdktn.listMapperHcl(awsMemoryStrategyLlmExtractionConfigPropertyToHclTerraform, true)(struct!.llmExtractionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LlmExtractionConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyMetadataSchemaPropertyToTerraform(struct?: AwsMemoryStrategy.MetadataSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_type: cdktn.stringToTerraform(struct!.extractionType),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    extraction_config: cdktn.listMapper(awsMemoryStrategyExtractionConfigPropertyToTerraform, true)(struct!.extractionConfig),
  }
}


export function awsMemoryStrategyMetadataSchemaPropertyToHclTerraform(struct?: AwsMemoryStrategy.MetadataSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_type: {
      value: cdktn.stringToHclTerraform(struct!.extractionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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
    extraction_config: {
      value: cdktn.listMapperHcl(awsMemoryStrategyExtractionConfigPropertyToHclTerraform, true)(struct!.extractionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ExtractionConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: AwsMemoryStrategy.MemoryRecordSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(awsMemoryStrategyMetadataSchemaPropertyToTerraform, true)(struct!.metadataSchema),
  }
}


export function awsMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: AwsMemoryStrategy.MemoryRecordSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(awsMemoryStrategyMetadataSchemaPropertyToHclTerraform, true)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "MetadataSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyReflectionConfigurationPropertyToTerraform(struct?: AwsMemoryStrategy.ReflectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
  }
}


export function awsMemoryStrategyReflectionConfigurationPropertyToHclTerraform(struct?: AwsMemoryStrategy.ReflectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMemoryStrategyTimeoutsPropertyToTerraform(struct?: AwsMemoryStrategy.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsMemoryStrategyTimeoutsPropertyToHclTerraform(struct?: AwsMemoryStrategy.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsMemoryStrategy {
export interface ConsolidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt AwsMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id AwsMemoryStrategy#model_id}
  */
  readonly modelId: string;
}
export class ConsolidationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConsolidationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolidationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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
}

export class ConsolidationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConsolidationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConsolidationPropertyOutputReference {
    return new ConsolidationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtractionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt AwsMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id AwsMemoryStrategy#model_id}
  */
  readonly modelId: string;
}
export class ExtractionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExtractionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtractionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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
}

export class ExtractionPropertyList extends cdktn.ComplexList {
  public internalValue? : ExtractionProperty[] | cdktn.IResolvable

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
  public get(index: number): ExtractionPropertyOutputReference {
    return new ExtractionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReflectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt AwsMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id AwsMemoryStrategy#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates AwsMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates: string[];
}
export class ReflectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReflectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReflectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
      this._namespaceTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
      this._namespaceTemplates = value.namespaceTemplates;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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

  // namespace_templates - computed: false, optional: false, required: true
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }
}

export class ReflectionPropertyList extends cdktn.ComplexList {
  public internalValue? : ReflectionProperty[] | cdktn.IResolvable

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
  public get(index: number): ReflectionPropertyOutputReference {
    return new ReflectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerProperty {
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_count - computed: true, optional: false, required: false
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerProperty {
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_session_timeout - computed: true, optional: false, required: false
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerProperty {
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_count - computed: true, optional: false, required: false
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerConditionsActualProperty {
}
export class TriggerConditionsActualPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerConditionsActualProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerConditionsActualProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_based_trigger - computed: true, optional: false, required: false
  private _messageBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerPropertyList(this, "message_based_trigger", false);
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }

  // time_based_trigger - computed: true, optional: false, required: false
  private _timeBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerPropertyList(this, "time_based_trigger", false);
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }

  // token_based_trigger - computed: true, optional: false, required: false
  private _tokenBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerPropertyList(this, "token_based_trigger", false);
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
}

export class TriggerConditionsActualPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TriggerConditionsActualPropertyOutputReference {
    return new TriggerConditionsActualPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InvocationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#payload_delivery_bucket_name AwsMemoryStrategy#payload_delivery_bucket_name}
  */
  readonly payloadDeliveryBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#topic_arn AwsMemoryStrategy#topic_arn}
  */
  readonly topicArn: string;
}
export class InvocationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InvocationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadDeliveryBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadDeliveryBucketName = this._payloadDeliveryBucketName;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvocationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = value.payloadDeliveryBucketName;
      this._topicArn = value.topicArn;
    }
  }

  // payload_delivery_bucket_name - computed: false, optional: false, required: true
  private _payloadDeliveryBucketName?: string; 
  public get payloadDeliveryBucketName() {
    return this.getStringAttribute('payload_delivery_bucket_name');
  }
  public set payloadDeliveryBucketName(value: string) {
    this._payloadDeliveryBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadDeliveryBucketNameInput() {
    return this._payloadDeliveryBucketName;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class InvocationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : InvocationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): InvocationConfigurationPropertyOutputReference {
    return new InvocationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#message_count AwsMemoryStrategy#message_count}
  */
  readonly messageCount: number;
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCount = this._messageCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageCount = value.messageCount;
    }
  }

  // message_count - computed: false, optional: false, required: true
  private _messageCount?: number; 
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
  public set messageCount(value: number) {
    this._messageCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCountInput() {
    return this._messageCount;
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#idle_session_timeout AwsMemoryStrategy#idle_session_timeout}
  */
  readonly idleSessionTimeout: number;
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSessionTimeout = this._idleSessionTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = value.idleSessionTimeout;
    }
  }

  // idle_session_timeout - computed: false, optional: false, required: true
  private _idleSessionTimeout?: number; 
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
  public set idleSessionTimeout(value: number) {
    this._idleSessionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTimeoutInput() {
    return this._idleSessionTimeout;
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#token_count AwsMemoryStrategy#token_count}
  */
  readonly tokenCount: number;
}
export class ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCount = this._tokenCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenCount = value.tokenCount;
    }
  }

  // token_count - computed: false, optional: false, required: true
  private _tokenCount?: number; 
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
  public set tokenCount(value: number) {
    this._tokenCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCountInput() {
    return this._tokenCount;
  }
}

export class ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyOutputReference {
    return new ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerConditionsProperty {
  /**
  * message_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#message_based_trigger AwsMemoryStrategy#message_based_trigger}
  */
  readonly messageBasedTrigger?: ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty[] | cdktn.IResolvable;
  /**
  * time_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#time_based_trigger AwsMemoryStrategy#time_based_trigger}
  */
  readonly timeBasedTrigger?: ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty[] | cdktn.IResolvable;
  /**
  * token_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#token_based_trigger AwsMemoryStrategy#token_based_trigger}
  */
  readonly tokenBasedTrigger?: ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty[] | cdktn.IResolvable;
}
export class TriggerConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerConditionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBasedTrigger = this._messageBasedTrigger?.internalValue;
    }
    if (this._timeBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedTrigger = this._timeBasedTrigger?.internalValue;
    }
    if (this._tokenBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenBasedTrigger = this._tokenBasedTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = undefined;
      this._timeBasedTrigger.internalValue = undefined;
      this._tokenBasedTrigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = value.messageBasedTrigger;
      this._timeBasedTrigger.internalValue = value.timeBasedTrigger;
      this._tokenBasedTrigger.internalValue = value.tokenBasedTrigger;
    }
  }

  // message_based_trigger - computed: false, optional: true, required: false
  private _messageBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerPropertyList(this, "message_based_trigger", false);
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }
  public putMessageBasedTrigger(value: ConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerProperty[] | cdktn.IResolvable) {
    this._messageBasedTrigger.internalValue = value;
  }
  public resetMessageBasedTrigger() {
    this._messageBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBasedTriggerInput() {
    return this._messageBasedTrigger.internalValue;
  }

  // time_based_trigger - computed: false, optional: true, required: false
  private _timeBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerPropertyList(this, "time_based_trigger", false);
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }
  public putTimeBasedTrigger(value: ConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerProperty[] | cdktn.IResolvable) {
    this._timeBasedTrigger.internalValue = value;
  }
  public resetTimeBasedTrigger() {
    this._timeBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedTriggerInput() {
    return this._timeBasedTrigger.internalValue;
  }

  // token_based_trigger - computed: false, optional: true, required: false
  private _tokenBasedTrigger = new ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerPropertyList(this, "token_based_trigger", false);
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
  public putTokenBasedTrigger(value: ConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerProperty[] | cdktn.IResolvable) {
    this._tokenBasedTrigger.internalValue = value;
  }
  public resetTokenBasedTrigger() {
    this._tokenBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBasedTriggerInput() {
    return this._tokenBasedTrigger.internalValue;
  }
}

export class TriggerConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggerConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggerConditionsPropertyOutputReference {
    return new TriggerConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfManagedConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#historical_context_window_size AwsMemoryStrategy#historical_context_window_size}
  */
  readonly historicalContextWindowSize?: number;
  /**
  * invocation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#invocation_configuration AwsMemoryStrategy#invocation_configuration}
  */
  readonly invocationConfiguration?: InvocationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * trigger_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#trigger_conditions AwsMemoryStrategy#trigger_conditions}
  */
  readonly triggerConditions?: TriggerConditionsProperty[] | cdktn.IResolvable;
}
export class SelfManagedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SelfManagedConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historicalContextWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalContextWindowSize = this._historicalContextWindowSize;
    }
    if (this._invocationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationConfiguration = this._invocationConfiguration?.internalValue;
    }
    if (this._triggerConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerConditions = this._triggerConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = undefined;
      this._invocationConfiguration.internalValue = undefined;
      this._triggerConditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = value.historicalContextWindowSize;
      this._invocationConfiguration.internalValue = value.invocationConfiguration;
      this._triggerConditions.internalValue = value.triggerConditions;
    }
  }

  // historical_context_window_size - computed: true, optional: true, required: false
  private _historicalContextWindowSize?: number; 
  public get historicalContextWindowSize() {
    return this.getNumberAttribute('historical_context_window_size');
  }
  public set historicalContextWindowSize(value: number) {
    this._historicalContextWindowSize = value;
  }
  public resetHistoricalContextWindowSize() {
    this._historicalContextWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalContextWindowSizeInput() {
    return this._historicalContextWindowSize;
  }

  // trigger_conditions_actual - computed: true, optional: false, required: false
  private _triggerConditionsActual = new TriggerConditionsActualPropertyList(this, "trigger_conditions_actual", false);
  public get triggerConditionsActual() {
    return this._triggerConditionsActual;
  }

  // invocation_configuration - computed: false, optional: true, required: false
  private _invocationConfiguration = new InvocationConfigurationPropertyList(this, "invocation_configuration", false);
  public get invocationConfiguration() {
    return this._invocationConfiguration;
  }
  public putInvocationConfiguration(value: InvocationConfigurationProperty[] | cdktn.IResolvable) {
    this._invocationConfiguration.internalValue = value;
  }
  public resetInvocationConfiguration() {
    this._invocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConfigurationInput() {
    return this._invocationConfiguration.internalValue;
  }

  // trigger_conditions - computed: false, optional: true, required: false
  private _triggerConditions = new TriggerConditionsPropertyList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: TriggerConditionsProperty[] | cdktn.IResolvable) {
    this._triggerConditions.internalValue = value;
  }
  public resetTriggerConditions() {
    this._triggerConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }
}

export class SelfManagedConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SelfManagedConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SelfManagedConfigurationPropertyOutputReference {
    return new SelfManagedConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type AwsMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * consolidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#consolidation AwsMemoryStrategy#consolidation}
  */
  readonly consolidation?: ConsolidationProperty[] | cdktn.IResolvable;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction AwsMemoryStrategy#extraction}
  */
  readonly extraction?: ExtractionProperty[] | cdktn.IResolvable;
  /**
  * reflection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#reflection AwsMemoryStrategy#reflection}
  */
  readonly reflection?: ReflectionProperty[] | cdktn.IResolvable;
  /**
  * self_managed_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#self_managed_configuration AwsMemoryStrategy#self_managed_configuration}
  */
  readonly selfManagedConfiguration?: SelfManagedConfigurationProperty[] | cdktn.IResolvable;
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._reflection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflection = this._reflection?.internalValue;
    }
    if (this._selfManagedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedConfiguration = this._selfManagedConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._reflection.internalValue = undefined;
      this._selfManagedConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
      this._reflection.internalValue = value.reflection;
      this._selfManagedConfiguration.internalValue = value.selfManagedConfiguration;
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

  // consolidation - computed: false, optional: true, required: false
  private _consolidation = new ConsolidationPropertyList(this, "consolidation", false);
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: ConsolidationProperty[] | cdktn.IResolvable) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new ExtractionPropertyList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: ExtractionProperty[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // reflection - computed: false, optional: true, required: false
  private _reflection = new ReflectionPropertyList(this, "reflection", false);
  public get reflection() {
    return this._reflection;
  }
  public putReflection(value: ReflectionProperty[] | cdktn.IResolvable) {
    this._reflection.internalValue = value;
  }
  public resetReflection() {
    this._reflection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionInput() {
    return this._reflection.internalValue;
  }

  // self_managed_configuration - computed: false, optional: true, required: false
  private _selfManagedConfiguration = new SelfManagedConfigurationPropertyList(this, "self_managed_configuration", false);
  public get selfManagedConfiguration() {
    return this._selfManagedConfiguration;
  }
  public putSelfManagedConfiguration(value: SelfManagedConfigurationProperty[] | cdktn.IResolvable) {
    this._selfManagedConfiguration.internalValue = value;
  }
  public resetSelfManagedConfiguration() {
    this._selfManagedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedConfigurationInput() {
    return this._selfManagedConfiguration.internalValue;
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
export interface NumberValidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#max_value AwsMemoryStrategy#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#min_value AwsMemoryStrategy#min_value}
  */
  readonly minValue?: number;
}
export class NumberValidationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NumberValidationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NumberValidationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class NumberValidationPropertyList extends cdktn.ComplexList {
  public internalValue? : NumberValidationProperty[] | cdktn.IResolvable

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
  public get(index: number): NumberValidationPropertyOutputReference {
    return new NumberValidationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringListValidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#allowed_values AwsMemoryStrategy#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#max_items AwsMemoryStrategy#max_items}
  */
  readonly maxItems?: number;
}
export class StringListValidationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringListValidationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringListValidationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}

export class StringListValidationPropertyList extends cdktn.ComplexList {
  public internalValue? : StringListValidationProperty[] | cdktn.IResolvable

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
  public get(index: number): StringListValidationPropertyOutputReference {
    return new StringListValidationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringValidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#allowed_values AwsMemoryStrategy#allowed_values}
  */
  readonly allowedValues: string[];
}
export class StringValidationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringValidationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringValidationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
    }
  }

  // allowed_values - computed: false, optional: false, required: true
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }
}

export class StringValidationPropertyList extends cdktn.ComplexList {
  public internalValue? : StringValidationProperty[] | cdktn.IResolvable

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
  public get(index: number): StringValidationPropertyOutputReference {
    return new StringValidationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValidationProperty {
  /**
  * number_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#number_validation AwsMemoryStrategy#number_validation}
  */
  readonly numberValidation?: NumberValidationProperty[] | cdktn.IResolvable;
  /**
  * string_list_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#string_list_validation AwsMemoryStrategy#string_list_validation}
  */
  readonly stringListValidation?: StringListValidationProperty[] | cdktn.IResolvable;
  /**
  * string_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#string_validation AwsMemoryStrategy#string_validation}
  */
  readonly stringValidation?: StringValidationProperty[] | cdktn.IResolvable;
}
export class ValidationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ValidationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValidationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: false, optional: true, required: false
  private _numberValidation = new NumberValidationPropertyList(this, "number_validation", false);
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: NumberValidationProperty[] | cdktn.IResolvable) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: false, optional: true, required: false
  private _stringListValidation = new StringListValidationPropertyList(this, "string_list_validation", false);
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: StringListValidationProperty[] | cdktn.IResolvable) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: false, optional: true, required: false
  private _stringValidation = new StringValidationPropertyList(this, "string_validation", false);
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: StringValidationProperty[] | cdktn.IResolvable) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}

export class ValidationPropertyList extends cdktn.ComplexList {
  public internalValue? : ValidationProperty[] | cdktn.IResolvable

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
  public get(index: number): ValidationPropertyOutputReference {
    return new ValidationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LlmExtractionConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#definition AwsMemoryStrategy#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#llm_extraction_instruction AwsMemoryStrategy#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#validation AwsMemoryStrategy#validation}
  */
  readonly validation?: ValidationProperty[] | cdktn.IResolvable;
}
export class LlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LlmExtractionConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new ValidationPropertyList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: ValidationProperty[] | cdktn.IResolvable) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class LlmExtractionConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LlmExtractionConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LlmExtractionConfigPropertyOutputReference {
    return new LlmExtractionConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtractionConfigProperty {
  /**
  * llm_extraction_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#llm_extraction_config AwsMemoryStrategy#llm_extraction_config}
  */
  readonly llmExtractionConfig?: LlmExtractionConfigProperty[] | cdktn.IResolvable;
}
export class ExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExtractionConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtractionConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: false, optional: true, required: false
  private _llmExtractionConfig = new LlmExtractionConfigPropertyList(this, "llm_extraction_config", false);
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: LlmExtractionConfigProperty[] | cdktn.IResolvable) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}

export class ExtractionConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ExtractionConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ExtractionConfigPropertyOutputReference {
    return new ExtractionConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetadataSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction_type AwsMemoryStrategy#extraction_type}
  */
  readonly extractionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#key AwsMemoryStrategy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type AwsMemoryStrategy#type}
  */
  readonly type?: string;
  /**
  * extraction_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction_config AwsMemoryStrategy#extraction_config}
  */
  readonly extractionConfig?: ExtractionConfigProperty[] | cdktn.IResolvable;
}
export class MetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetadataSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionType = this._extractionType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionType = undefined;
      this._key = undefined;
      this._type = undefined;
      this._extractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionType = value.extractionType;
      this._key = value.key;
      this._type = value.type;
      this._extractionConfig.internalValue = value.extractionConfig;
    }
  }

  // extraction_type - computed: true, optional: true, required: false
  private _extractionType?: string; 
  public get extractionType() {
    return this.getStringAttribute('extraction_type');
  }
  public set extractionType(value: string) {
    this._extractionType = value;
  }
  public resetExtractionType() {
    this._extractionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionTypeInput() {
    return this._extractionType;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: true, optional: true, required: false
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

  // extraction_config - computed: false, optional: true, required: false
  private _extractionConfig = new ExtractionConfigPropertyList(this, "extraction_config", false);
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: ExtractionConfigProperty[] | cdktn.IResolvable) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
  }
}

export class MetadataSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : MetadataSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): MetadataSchemaPropertyOutputReference {
    return new MetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemoryRecordSchemaProperty {
  /**
  * metadata_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#metadata_schema AwsMemoryStrategy#metadata_schema}
  */
  readonly metadataSchema?: MetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: false, optional: true, required: false
  private _metadataSchema = new MetadataSchemaPropertyList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: MetadataSchemaProperty[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}

export class MemoryRecordSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : MemoryRecordSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): MemoryRecordSchemaPropertyOutputReference {
    return new MemoryRecordSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReflectionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates AwsMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates: string[];
}
export class ReflectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReflectionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReflectionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceTemplates = value.namespaceTemplates;
    }
  }

  // namespace_templates - computed: false, optional: false, required: true
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }
}

export class ReflectionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ReflectionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ReflectionConfigurationPropertyOutputReference {
    return new ReflectionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#create AwsMemoryStrategy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#delete AwsMemoryStrategy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#update AwsMemoryStrategy#update}
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
