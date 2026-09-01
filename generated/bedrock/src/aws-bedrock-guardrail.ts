// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBedrockGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#blocked_input_messaging AwsBedrockGuardrail#blocked_input_messaging}
  */
  readonly blockedInputMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging AwsBedrockGuardrail#blocked_outputs_messaging}
  */
  readonly blockedOutputsMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#description AwsBedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#kms_key_arn AwsBedrockGuardrail#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#name AwsBedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#region AwsBedrockGuardrail#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#tags AwsBedrockGuardrail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * content_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#content_policy_config AwsBedrockGuardrail#content_policy_config}
  */
  readonly contentPolicyConfig?: AwsBedrockGuardrail.ContentPolicyConfigProperty[] | cdktn.IResolvable;
  /**
  * contextual_grounding_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config AwsBedrockGuardrail#contextual_grounding_policy_config}
  */
  readonly contextualGroundingPolicyConfig?: AwsBedrockGuardrail.ContextualGroundingPolicyConfigProperty[] | cdktn.IResolvable;
  /**
  * cross_region_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#cross_region_config AwsBedrockGuardrail#cross_region_config}
  */
  readonly crossRegionConfig?: AwsBedrockGuardrail.CrossRegionConfigProperty[] | cdktn.IResolvable;
  /**
  * sensitive_information_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config AwsBedrockGuardrail#sensitive_information_policy_config}
  */
  readonly sensitiveInformationPolicyConfig?: AwsBedrockGuardrail.SensitiveInformationPolicyConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#timeouts AwsBedrockGuardrail#timeouts}
  */
  readonly timeouts?: AwsBedrockGuardrail.TimeoutsProperty;
  /**
  * topic_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#topic_policy_config AwsBedrockGuardrail#topic_policy_config}
  */
  readonly topicPolicyConfig?: AwsBedrockGuardrail.TopicPolicyConfigProperty[] | cdktn.IResolvable;
  /**
  * word_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#word_policy_config AwsBedrockGuardrail#word_policy_config}
  */
  readonly wordPolicyConfig?: AwsBedrockGuardrail.WordPolicyConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}
*/
export class AwsBedrockGuardrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBedrockGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBedrockGuardrail to import
  * @param importFromId The id of the existing AwsBedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBedrockGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBedrockGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBedrockGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_guardrail',
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
    this._blockedInputMessaging = config.blockedInputMessaging;
    this._blockedOutputsMessaging = config.blockedOutputsMessaging;
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
    this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
    this._crossRegionConfig.internalValue = config.crossRegionConfig;
    this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
    this._timeouts.internalValue = config.timeouts;
    this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
    this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_input_messaging - computed: false, optional: false, required: true
  private _blockedInputMessaging?: string; 
  public get blockedInputMessaging() {
    return this.getStringAttribute('blocked_input_messaging');
  }
  public set blockedInputMessaging(value: string) {
    this._blockedInputMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInputMessagingInput() {
    return this._blockedInputMessaging;
  }

  // blocked_outputs_messaging - computed: false, optional: false, required: true
  private _blockedOutputsMessaging?: string; 
  public get blockedOutputsMessaging() {
    return this.getStringAttribute('blocked_outputs_messaging');
  }
  public set blockedOutputsMessaging(value: string) {
    this._blockedOutputsMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOutputsMessagingInput() {
    return this._blockedOutputsMessaging;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // content_policy_config - computed: false, optional: true, required: false
  private _contentPolicyConfig = new AwsBedrockGuardrail.ContentPolicyConfigPropertyList(this, "content_policy_config", false);
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }
  public putContentPolicyConfig(value: AwsBedrockGuardrail.ContentPolicyConfigProperty[] | cdktn.IResolvable) {
    this._contentPolicyConfig.internalValue = value;
  }
  public resetContentPolicyConfig() {
    this._contentPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPolicyConfigInput() {
    return this._contentPolicyConfig.internalValue;
  }

  // contextual_grounding_policy_config - computed: false, optional: true, required: false
  private _contextualGroundingPolicyConfig = new AwsBedrockGuardrail.ContextualGroundingPolicyConfigPropertyList(this, "contextual_grounding_policy_config", false);
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }
  public putContextualGroundingPolicyConfig(value: AwsBedrockGuardrail.ContextualGroundingPolicyConfigProperty[] | cdktn.IResolvable) {
    this._contextualGroundingPolicyConfig.internalValue = value;
  }
  public resetContextualGroundingPolicyConfig() {
    this._contextualGroundingPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualGroundingPolicyConfigInput() {
    return this._contextualGroundingPolicyConfig.internalValue;
  }

  // cross_region_config - computed: false, optional: true, required: false
  private _crossRegionConfig = new AwsBedrockGuardrail.CrossRegionConfigPropertyList(this, "cross_region_config", false);
  public get crossRegionConfig() {
    return this._crossRegionConfig;
  }
  public putCrossRegionConfig(value: AwsBedrockGuardrail.CrossRegionConfigProperty[] | cdktn.IResolvable) {
    this._crossRegionConfig.internalValue = value;
  }
  public resetCrossRegionConfig() {
    this._crossRegionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionConfigInput() {
    return this._crossRegionConfig.internalValue;
  }

  // sensitive_information_policy_config - computed: false, optional: true, required: false
  private _sensitiveInformationPolicyConfig = new AwsBedrockGuardrail.SensitiveInformationPolicyConfigPropertyList(this, "sensitive_information_policy_config", false);
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }
  public putSensitiveInformationPolicyConfig(value: AwsBedrockGuardrail.SensitiveInformationPolicyConfigProperty[] | cdktn.IResolvable) {
    this._sensitiveInformationPolicyConfig.internalValue = value;
  }
  public resetSensitiveInformationPolicyConfig() {
    this._sensitiveInformationPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInformationPolicyConfigInput() {
    return this._sensitiveInformationPolicyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBedrockGuardrail.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBedrockGuardrail.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topic_policy_config - computed: false, optional: true, required: false
  private _topicPolicyConfig = new AwsBedrockGuardrail.TopicPolicyConfigPropertyList(this, "topic_policy_config", false);
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }
  public putTopicPolicyConfig(value: AwsBedrockGuardrail.TopicPolicyConfigProperty[] | cdktn.IResolvable) {
    this._topicPolicyConfig.internalValue = value;
  }
  public resetTopicPolicyConfig() {
    this._topicPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyConfigInput() {
    return this._topicPolicyConfig.internalValue;
  }

  // word_policy_config - computed: false, optional: true, required: false
  private _wordPolicyConfig = new AwsBedrockGuardrail.WordPolicyConfigPropertyList(this, "word_policy_config", false);
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
  }
  public putWordPolicyConfig(value: AwsBedrockGuardrail.WordPolicyConfigProperty[] | cdktn.IResolvable) {
    this._wordPolicyConfig.internalValue = value;
  }
  public resetWordPolicyConfig() {
    this._wordPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordPolicyConfigInput() {
    return this._wordPolicyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_input_messaging: cdktn.stringToTerraform(this._blockedInputMessaging),
      blocked_outputs_messaging: cdktn.stringToTerraform(this._blockedOutputsMessaging),
      description: cdktn.stringToTerraform(this._description),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      content_policy_config: cdktn.listMapper(awsBedrockGuardrailContentPolicyConfigPropertyToTerraform, true)(this._contentPolicyConfig.internalValue),
      contextual_grounding_policy_config: cdktn.listMapper(awsBedrockGuardrailContextualGroundingPolicyConfigPropertyToTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
      cross_region_config: cdktn.listMapper(awsBedrockGuardrailCrossRegionConfigPropertyToTerraform, true)(this._crossRegionConfig.internalValue),
      sensitive_information_policy_config: cdktn.listMapper(awsBedrockGuardrailSensitiveInformationPolicyConfigPropertyToTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
      timeouts: awsBedrockGuardrailTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      topic_policy_config: cdktn.listMapper(awsBedrockGuardrailTopicPolicyConfigPropertyToTerraform, true)(this._topicPolicyConfig.internalValue),
      word_policy_config: cdktn.listMapper(awsBedrockGuardrailWordPolicyConfigPropertyToTerraform, true)(this._wordPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_input_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedInputMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_outputs_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedOutputsMessaging),
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
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      content_policy_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailContentPolicyConfigPropertyToHclTerraform, true)(this._contentPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.ContentPolicyConfigPropertyList",
      },
      contextual_grounding_policy_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailContextualGroundingPolicyConfigPropertyToHclTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.ContextualGroundingPolicyConfigPropertyList",
      },
      cross_region_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailCrossRegionConfigPropertyToHclTerraform, true)(this._crossRegionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.CrossRegionConfigPropertyList",
      },
      sensitive_information_policy_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailSensitiveInformationPolicyConfigPropertyToHclTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.SensitiveInformationPolicyConfigPropertyList",
      },
      timeouts: {
        value: awsBedrockGuardrailTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBedrockGuardrail.TimeoutsProperty",
      },
      topic_policy_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailTopicPolicyConfigPropertyToHclTerraform, true)(this._topicPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.TopicPolicyConfigPropertyList",
      },
      word_policy_config: {
        value: cdktn.listMapperHcl(awsBedrockGuardrailWordPolicyConfigPropertyToHclTerraform, true)(this._wordPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockGuardrail.WordPolicyConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBedrockGuardrailContentPolicyConfigTierConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigTierConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function awsBedrockGuardrailContentPolicyConfigTierConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigTierConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailContentPolicyConfigFiltersConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigFiltersConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    input_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputModalities),
    input_strength: cdktn.stringToTerraform(struct!.inputStrength),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    output_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputModalities),
    output_strength: cdktn.stringToTerraform(struct!.outputStrength),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockGuardrailContentPolicyConfigFiltersConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigFiltersConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputModalities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    input_strength: {
      value: cdktn.stringToHclTerraform(struct!.inputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputModalities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    output_strength: {
      value: cdktn.stringToHclTerraform(struct!.outputStrength),
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


export function awsBedrockGuardrailContentPolicyConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_config: cdktn.listMapper(awsBedrockGuardrailContentPolicyConfigTierConfigPropertyToTerraform, false)(struct!.tierConfig),
    filters_config: cdktn.listMapper(awsBedrockGuardrailContentPolicyConfigFiltersConfigPropertyToTerraform, true)(struct!.filtersConfig),
  }
}


export function awsBedrockGuardrailContentPolicyConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ContentPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailContentPolicyConfigTierConfigPropertyToHclTerraform, false)(struct!.tierConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContentPolicyConfigTierConfigPropertyList",
    },
    filters_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailContentPolicyConfigFiltersConfigPropertyToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ContentPolicyConfigFiltersConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ContextualGroundingPolicyConfigFiltersConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    threshold: cdktn.numberToTerraform(struct!.threshold),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ContextualGroundingPolicyConfigFiltersConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function awsBedrockGuardrailContextualGroundingPolicyConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ContextualGroundingPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters_config: cdktn.listMapper(awsBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigPropertyToTerraform, true)(struct!.filtersConfig),
  }
}


export function awsBedrockGuardrailContextualGroundingPolicyConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ContextualGroundingPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigPropertyToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContextualGroundingPolicyConfigFiltersConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailCrossRegionConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.CrossRegionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guardrail_profile_identifier: cdktn.stringToTerraform(struct!.guardrailProfileIdentifier),
  }
}


export function awsBedrockGuardrailCrossRegionConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.CrossRegionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guardrail_profile_identifier: {
      value: cdktn.stringToHclTerraform(struct!.guardrailProfileIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailPiiEntitiesConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.PiiEntitiesConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockGuardrailPiiEntitiesConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.PiiEntitiesConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailRegexesConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.RegexesConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    name: cdktn.stringToTerraform(struct!.name),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function awsBedrockGuardrailRegexesConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.RegexesConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
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
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailSensitiveInformationPolicyConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.SensitiveInformationPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entities_config: cdktn.listMapper(awsBedrockGuardrailPiiEntitiesConfigPropertyToTerraform, true)(struct!.piiEntitiesConfig),
    regexes_config: cdktn.listMapper(awsBedrockGuardrailRegexesConfigPropertyToTerraform, true)(struct!.regexesConfig),
  }
}


export function awsBedrockGuardrailSensitiveInformationPolicyConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.SensitiveInformationPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entities_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailPiiEntitiesConfigPropertyToHclTerraform, true)(struct!.piiEntitiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PiiEntitiesConfigPropertyList",
    },
    regexes_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailRegexesConfigPropertyToHclTerraform, true)(struct!.regexesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RegexesConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailTimeoutsPropertyToTerraform(struct?: AwsBedrockGuardrail.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBedrockGuardrailTimeoutsPropertyToHclTerraform(struct?: AwsBedrockGuardrail.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBedrockGuardrailTopicPolicyConfigTierConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.TopicPolicyConfigTierConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function awsBedrockGuardrailTopicPolicyConfigTierConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.TopicPolicyConfigTierConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailTopicsConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.TopicsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockGuardrailTopicsConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.TopicsConfigProperty | cdktn.IResolvable): any {
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
    examples: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
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


export function awsBedrockGuardrailTopicPolicyConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.TopicPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_config: cdktn.listMapper(awsBedrockGuardrailTopicPolicyConfigTierConfigPropertyToTerraform, false)(struct!.tierConfig),
    topics_config: cdktn.listMapper(awsBedrockGuardrailTopicsConfigPropertyToTerraform, true)(struct!.topicsConfig),
  }
}


export function awsBedrockGuardrailTopicPolicyConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.TopicPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailTopicPolicyConfigTierConfigPropertyToHclTerraform, false)(struct!.tierConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TopicPolicyConfigTierConfigPropertyList",
    },
    topics_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailTopicsConfigPropertyToHclTerraform, true)(struct!.topicsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TopicsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailManagedWordListsConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.ManagedWordListsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockGuardrailManagedWordListsConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.ManagedWordListsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockGuardrailWordsConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.WordsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function awsBedrockGuardrailWordsConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.WordsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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


export function awsBedrockGuardrailWordPolicyConfigPropertyToTerraform(struct?: AwsBedrockGuardrail.WordPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_word_lists_config: cdktn.listMapper(awsBedrockGuardrailManagedWordListsConfigPropertyToTerraform, true)(struct!.managedWordListsConfig),
    words_config: cdktn.listMapper(awsBedrockGuardrailWordsConfigPropertyToTerraform, true)(struct!.wordsConfig),
  }
}


export function awsBedrockGuardrailWordPolicyConfigPropertyToHclTerraform(struct?: AwsBedrockGuardrail.WordPolicyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_word_lists_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailManagedWordListsConfigPropertyToHclTerraform, true)(struct!.managedWordListsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedWordListsConfigPropertyList",
    },
    words_config: {
      value: cdktn.listMapperHcl(awsBedrockGuardrailWordsConfigPropertyToHclTerraform, true)(struct!.wordsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WordsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBedrockGuardrail {
export interface ContentPolicyConfigTierConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#tier_name AwsBedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}
export class ContentPolicyConfigTierConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContentPolicyConfigTierConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentPolicyConfigTierConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}

export class ContentPolicyConfigTierConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ContentPolicyConfigTierConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ContentPolicyConfigTierConfigPropertyOutputReference {
    return new ContentPolicyConfigTierConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContentPolicyConfigFiltersConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_action AwsBedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_enabled AwsBedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_modalities AwsBedrockGuardrail#input_modalities}
  */
  readonly inputModalities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_strength AwsBedrockGuardrail#input_strength}
  */
  readonly inputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_action AwsBedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_enabled AwsBedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_modalities AwsBedrockGuardrail#output_modalities}
  */
  readonly outputModalities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_strength AwsBedrockGuardrail#output_strength}
  */
  readonly outputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#type AwsBedrockGuardrail#type}
  */
  readonly type: string;
}
export class ContentPolicyConfigFiltersConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContentPolicyConfigFiltersConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._inputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputModalities = this._inputModalities;
    }
    if (this._inputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStrength = this._inputStrength;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._outputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputModalities = this._outputModalities;
    }
    if (this._outputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStrength = this._outputStrength;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentPolicyConfigFiltersConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._inputModalities = undefined;
      this._inputStrength = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._outputModalities = undefined;
      this._outputStrength = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._inputModalities = value.inputModalities;
      this._inputStrength = value.inputStrength;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._outputModalities = value.outputModalities;
      this._outputStrength = value.outputStrength;
      this._type = value.type;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // input_modalities - computed: false, optional: true, required: false
  private _inputModalities?: string[]; 
  public get inputModalities() {
    return cdktn.Fn.tolist(this.getListAttribute('input_modalities'));
  }
  public set inputModalities(value: string[]) {
    this._inputModalities = value;
  }
  public resetInputModalities() {
    this._inputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModalitiesInput() {
    return this._inputModalities;
  }

  // input_strength - computed: false, optional: false, required: true
  private _inputStrength?: string; 
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
  }
  public set inputStrength(value: string) {
    this._inputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStrengthInput() {
    return this._inputStrength;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // output_modalities - computed: false, optional: true, required: false
  private _outputModalities?: string[]; 
  public get outputModalities() {
    return cdktn.Fn.tolist(this.getListAttribute('output_modalities'));
  }
  public set outputModalities(value: string[]) {
    this._outputModalities = value;
  }
  public resetOutputModalities() {
    this._outputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModalitiesInput() {
    return this._outputModalities;
  }

  // output_strength - computed: false, optional: false, required: true
  private _outputStrength?: string; 
  public get outputStrength() {
    return this.getStringAttribute('output_strength');
  }
  public set outputStrength(value: string) {
    this._outputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrengthInput() {
    return this._outputStrength;
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

export class ContentPolicyConfigFiltersConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ContentPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ContentPolicyConfigFiltersConfigPropertyOutputReference {
    return new ContentPolicyConfigFiltersConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContentPolicyConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#tier_config AwsBedrockGuardrail#tier_config}
  */
  readonly tierConfig?: ContentPolicyConfigTierConfigProperty[] | cdktn.IResolvable;
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#filters_config AwsBedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: ContentPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable;
}
export class ContentPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContentPolicyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierConfig = this._tierConfig?.internalValue;
    }
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentPolicyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = value.tierConfig;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // tier_config - computed: true, optional: true, required: false
  private _tierConfig = new ContentPolicyConfigTierConfigPropertyList(this, "tier_config", false);
  public get tierConfig() {
    return this._tierConfig;
  }
  public putTierConfig(value: ContentPolicyConfigTierConfigProperty[] | cdktn.IResolvable) {
    this._tierConfig.internalValue = value;
  }
  public resetTierConfig() {
    this._tierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierConfigInput() {
    return this._tierConfig.internalValue;
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new ContentPolicyConfigFiltersConfigPropertyList(this, "filters_config", true);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: ContentPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class ContentPolicyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ContentPolicyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ContentPolicyConfigPropertyOutputReference {
    return new ContentPolicyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContextualGroundingPolicyConfigFiltersConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#threshold AwsBedrockGuardrail#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#type AwsBedrockGuardrail#type}
  */
  readonly type: string;
}
export class ContextualGroundingPolicyConfigFiltersConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContextualGroundingPolicyConfigFiltersConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextualGroundingPolicyConfigFiltersConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

export class ContextualGroundingPolicyConfigFiltersConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ContextualGroundingPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ContextualGroundingPolicyConfigFiltersConfigPropertyOutputReference {
    return new ContextualGroundingPolicyConfigFiltersConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContextualGroundingPolicyConfigProperty {
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#filters_config AwsBedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: ContextualGroundingPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable;
}
export class ContextualGroundingPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContextualGroundingPolicyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextualGroundingPolicyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new ContextualGroundingPolicyConfigFiltersConfigPropertyList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: ContextualGroundingPolicyConfigFiltersConfigProperty[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class ContextualGroundingPolicyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ContextualGroundingPolicyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ContextualGroundingPolicyConfigPropertyOutputReference {
    return new ContextualGroundingPolicyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrossRegionConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#guardrail_profile_identifier AwsBedrockGuardrail#guardrail_profile_identifier}
  */
  readonly guardrailProfileIdentifier: string;
}
export class CrossRegionConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CrossRegionConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailProfileIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailProfileIdentifier = this._guardrailProfileIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrossRegionConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailProfileIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailProfileIdentifier = value.guardrailProfileIdentifier;
    }
  }

  // guardrail_profile_identifier - computed: false, optional: false, required: true
  private _guardrailProfileIdentifier?: string; 
  public get guardrailProfileIdentifier() {
    return this.getStringAttribute('guardrail_profile_identifier');
  }
  public set guardrailProfileIdentifier(value: string) {
    this._guardrailProfileIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailProfileIdentifierInput() {
    return this._guardrailProfileIdentifier;
  }
}

export class CrossRegionConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CrossRegionConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CrossRegionConfigPropertyOutputReference {
    return new CrossRegionConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PiiEntitiesConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#action AwsBedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_action AwsBedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_enabled AwsBedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_action AwsBedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_enabled AwsBedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#type AwsBedrockGuardrail#type}
  */
  readonly type: string;
}
export class PiiEntitiesConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PiiEntitiesConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PiiEntitiesConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._type = value.type;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class PiiEntitiesConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : PiiEntitiesConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): PiiEntitiesConfigPropertyOutputReference {
    return new PiiEntitiesConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegexesConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#action AwsBedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#description AwsBedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_action AwsBedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_enabled AwsBedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#name AwsBedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_action AwsBedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_enabled AwsBedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#pattern AwsBedrockGuardrail#pattern}
  */
  readonly pattern: string;
}
export class RegexesConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RegexesConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegexesConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._name = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._name = value.name;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._pattern = value.pattern;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
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

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RegexesConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RegexesConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RegexesConfigPropertyOutputReference {
    return new RegexesConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensitiveInformationPolicyConfigProperty {
  /**
  * pii_entities_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#pii_entities_config AwsBedrockGuardrail#pii_entities_config}
  */
  readonly piiEntitiesConfig?: PiiEntitiesConfigProperty[] | cdktn.IResolvable;
  /**
  * regexes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#regexes_config AwsBedrockGuardrail#regexes_config}
  */
  readonly regexesConfig?: RegexesConfigProperty[] | cdktn.IResolvable;
}
export class SensitiveInformationPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SensitiveInformationPolicyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntitiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfig = this._piiEntitiesConfig?.internalValue;
    }
    if (this._regexesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexesConfig = this._regexesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveInformationPolicyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = undefined;
      this._regexesConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = value.piiEntitiesConfig;
      this._regexesConfig.internalValue = value.regexesConfig;
    }
  }

  // pii_entities_config - computed: false, optional: true, required: false
  private _piiEntitiesConfig = new PiiEntitiesConfigPropertyList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }
  public putPiiEntitiesConfig(value: PiiEntitiesConfigProperty[] | cdktn.IResolvable) {
    this._piiEntitiesConfig.internalValue = value;
  }
  public resetPiiEntitiesConfig() {
    this._piiEntitiesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigInput() {
    return this._piiEntitiesConfig.internalValue;
  }

  // regexes_config - computed: false, optional: true, required: false
  private _regexesConfig = new RegexesConfigPropertyList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
  public putRegexesConfig(value: RegexesConfigProperty[] | cdktn.IResolvable) {
    this._regexesConfig.internalValue = value;
  }
  public resetRegexesConfig() {
    this._regexesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesConfigInput() {
    return this._regexesConfig.internalValue;
  }
}

export class SensitiveInformationPolicyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SensitiveInformationPolicyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SensitiveInformationPolicyConfigPropertyOutputReference {
    return new SensitiveInformationPolicyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#create AwsBedrockGuardrail#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#delete AwsBedrockGuardrail#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#update AwsBedrockGuardrail#update}
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
export interface TopicPolicyConfigTierConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#tier_name AwsBedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}
export class TopicPolicyConfigTierConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TopicPolicyConfigTierConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TopicPolicyConfigTierConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}

export class TopicPolicyConfigTierConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TopicPolicyConfigTierConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TopicPolicyConfigTierConfigPropertyOutputReference {
    return new TopicPolicyConfigTierConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TopicsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#definition AwsBedrockGuardrail#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#examples AwsBedrockGuardrail#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#name AwsBedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#type AwsBedrockGuardrail#type}
  */
  readonly type: string;
}
export class TopicsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TopicsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
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

  public set internalValue(value: TopicsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._examples = undefined;
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
      this._definition = value.definition;
      this._examples = value.examples;
      this._name = value.name;
      this._type = value.type;
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

  // examples - computed: true, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
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

export class TopicsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TopicsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TopicsConfigPropertyOutputReference {
    return new TopicsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TopicPolicyConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#tier_config AwsBedrockGuardrail#tier_config}
  */
  readonly tierConfig?: TopicPolicyConfigTierConfigProperty[] | cdktn.IResolvable;
  /**
  * topics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#topics_config AwsBedrockGuardrail#topics_config}
  */
  readonly topicsConfig?: TopicsConfigProperty[] | cdktn.IResolvable;
}
export class TopicPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TopicPolicyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierConfig = this._tierConfig?.internalValue;
    }
    if (this._topicsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TopicPolicyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = undefined;
      this._topicsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = value.tierConfig;
      this._topicsConfig.internalValue = value.topicsConfig;
    }
  }

  // tier_config - computed: true, optional: true, required: false
  private _tierConfig = new TopicPolicyConfigTierConfigPropertyList(this, "tier_config", false);
  public get tierConfig() {
    return this._tierConfig;
  }
  public putTierConfig(value: TopicPolicyConfigTierConfigProperty[] | cdktn.IResolvable) {
    this._tierConfig.internalValue = value;
  }
  public resetTierConfig() {
    this._tierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierConfigInput() {
    return this._tierConfig.internalValue;
  }

  // topics_config - computed: false, optional: true, required: false
  private _topicsConfig = new TopicsConfigPropertyList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
  public putTopicsConfig(value: TopicsConfigProperty[] | cdktn.IResolvable) {
    this._topicsConfig.internalValue = value;
  }
  public resetTopicsConfig() {
    this._topicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigInput() {
    return this._topicsConfig.internalValue;
  }
}

export class TopicPolicyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TopicPolicyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TopicPolicyConfigPropertyOutputReference {
    return new TopicPolicyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWordListsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_action AwsBedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_enabled AwsBedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_action AwsBedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_enabled AwsBedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#type AwsBedrockGuardrail#type}
  */
  readonly type: string;
}
export class ManagedWordListsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedWordListsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWordListsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._type = value.type;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class ManagedWordListsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedWordListsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedWordListsConfigPropertyOutputReference {
    return new ManagedWordListsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WordsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_action AwsBedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#input_enabled AwsBedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_action AwsBedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#output_enabled AwsBedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#text AwsBedrockGuardrail#text}
  */
  readonly text: string;
}
export class WordsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WordsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WordsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._text = value.text;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class WordsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WordsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WordsConfigPropertyOutputReference {
    return new WordsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WordPolicyConfigProperty {
  /**
  * managed_word_lists_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#managed_word_lists_config AwsBedrockGuardrail#managed_word_lists_config}
  */
  readonly managedWordListsConfig?: ManagedWordListsConfigProperty[] | cdktn.IResolvable;
  /**
  * words_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_guardrail#words_config AwsBedrockGuardrail#words_config}
  */
  readonly wordsConfig?: WordsConfigProperty[] | cdktn.IResolvable;
}
export class WordPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WordPolicyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedWordListsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWordListsConfig = this._managedWordListsConfig?.internalValue;
    }
    if (this._wordsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordsConfig = this._wordsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WordPolicyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = undefined;
      this._wordsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = value.managedWordListsConfig;
      this._wordsConfig.internalValue = value.wordsConfig;
    }
  }

  // managed_word_lists_config - computed: false, optional: true, required: false
  private _managedWordListsConfig = new ManagedWordListsConfigPropertyList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }
  public putManagedWordListsConfig(value: ManagedWordListsConfigProperty[] | cdktn.IResolvable) {
    this._managedWordListsConfig.internalValue = value;
  }
  public resetManagedWordListsConfig() {
    this._managedWordListsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWordListsConfigInput() {
    return this._managedWordListsConfig.internalValue;
  }

  // words_config - computed: false, optional: true, required: false
  private _wordsConfig = new WordsConfigPropertyList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
  public putWordsConfig(value: WordsConfigProperty[] | cdktn.IResolvable) {
    this._wordsConfig.internalValue = value;
  }
  public resetWordsConfig() {
    this._wordsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsConfigInput() {
    return this._wordsConfig.internalValue;
  }
}

export class WordPolicyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WordPolicyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WordPolicyConfigPropertyOutputReference {
    return new WordPolicyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
