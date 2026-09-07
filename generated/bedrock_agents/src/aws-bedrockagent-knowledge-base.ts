// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsKnowledgeBaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#description AwsKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#name AwsKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#region AwsKnowledgeBase#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#role_arn AwsKnowledgeBase#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#tags AwsKnowledgeBase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration AwsKnowledgeBase#knowledge_base_configuration}
  */
  readonly knowledgeBaseConfiguration?: AwsKnowledgeBase.KnowledgeBaseConfigurationProperty[] | cdktn.IResolvable;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#storage_configuration AwsKnowledgeBase#storage_configuration}
  */
  readonly storageConfiguration?: AwsKnowledgeBase.StorageConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#timeouts AwsKnowledgeBase#timeouts}
  */
  readonly timeouts?: AwsKnowledgeBase.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base}
*/
export class AwsKnowledgeBase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsKnowledgeBase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsKnowledgeBase to import
  * @param importFromId The id of the existing AwsKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: AwsKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_knowledge_base',
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
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._knowledgeBaseConfiguration.internalValue = config.knowledgeBaseConfiguration;
    this._storageConfiguration.internalValue = config.storageConfiguration;
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

  // failure_reasons - computed: true, optional: false, required: false
  public get failureReasons() {
    return this.getListAttribute('failure_reasons');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // knowledge_base_configuration - computed: false, optional: true, required: false
  private _knowledgeBaseConfiguration = new AwsKnowledgeBase.KnowledgeBaseConfigurationPropertyList(this, "knowledge_base_configuration", false);
  public get knowledgeBaseConfiguration() {
    return this._knowledgeBaseConfiguration;
  }
  public putKnowledgeBaseConfiguration(value: AwsKnowledgeBase.KnowledgeBaseConfigurationProperty[] | cdktn.IResolvable) {
    this._knowledgeBaseConfiguration.internalValue = value;
  }
  public resetKnowledgeBaseConfiguration() {
    this._knowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseConfigurationInput() {
    return this._knowledgeBaseConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new AwsKnowledgeBase.StorageConfigurationPropertyList(this, "storage_configuration", false);
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: AwsKnowledgeBase.StorageConfigurationProperty[] | cdktn.IResolvable) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsKnowledgeBase.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsKnowledgeBase.TimeoutsProperty) {
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
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      knowledge_base_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform, true)(this._knowledgeBaseConfiguration.internalValue),
      storage_configuration: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationPropertyToTerraform, true)(this._storageConfiguration.internalValue),
      timeouts: awsKnowledgeBaseTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      knowledge_base_configuration: {
        value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform, true)(this._knowledgeBaseConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKnowledgeBase.KnowledgeBaseConfigurationPropertyList",
      },
      storage_configuration: {
        value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationPropertyToHclTerraform, true)(this._storageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKnowledgeBase.StorageConfigurationPropertyList",
      },
      timeouts: {
        value: awsKnowledgeBaseTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsKnowledgeBase.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kendra_index_arn: cdktn.stringToTerraform(struct!.kendraIndexArn),
  }
}


export function awsKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kendra_index_arn: {
      value: cdktn.stringToHclTerraform(struct!.kendraIndexArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed_length_duration: {
      value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform, true)(struct!.segmentationConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform, true)(struct!.segmentationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed_length_duration: {
      value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform, true)(struct!.segmentationConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform, true)(struct!.segmentationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.numberToTerraform(struct!.dimensions),
    embedding_data_type: cdktn.stringToTerraform(struct!.embeddingDataType),
    audio: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToTerraform, true)(struct!.audio),
    video: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToTerraform, true)(struct!.video),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    embedding_data_type: {
      value: cdktn.stringToHclTerraform(struct!.embeddingDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audio: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToHclTerraform, true)(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList",
    },
    video: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToHclTerraform, true)(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_embedding_model_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_embedding_model_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function awsKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
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


export function awsKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_model_arn: cdktn.stringToTerraform(struct!.embeddingModelArn),
    embedding_model_type: cdktn.stringToTerraform(struct!.embeddingModelType),
    embedding_model_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform, true)(struct!.embeddingModelConfiguration),
    server_side_encryption_configuration: cdktn.listMapper(awsKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform, true)(struct!.serverSideEncryptionConfiguration),
  }
}


export function awsKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_type: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform, true)(struct!.embeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList",
    },
    server_side_encryption_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform, true)(struct!.serverSideEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerSideEncryptionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_user: cdktn.stringToTerraform(struct!.databaseUser),
    type: cdktn.stringToTerraform(struct!.type),
    username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_user: {
      value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
    username_password_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseProvisionedConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.ProvisionedConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    auth_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyToTerraform, true)(struct!.authConfiguration),
  }
}


export function awsKnowledgeBaseProvisionedConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.ProvisionedConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyToHclTerraform, true)(struct!.authConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty | cdktn.IResolvable): any {
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
    username_password_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseServerlessConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.ServerlessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workgroup_arn: cdktn.stringToTerraform(struct!.workgroupArn),
    auth_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyToTerraform, true)(struct!.authConfiguration),
  }
}


export function awsKnowledgeBaseServerlessConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.ServerlessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workgroup_arn: {
      value: cdktn.stringToHclTerraform(struct!.workgroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyToHclTerraform, true)(struct!.authConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseQueryEngineConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.QueryEngineConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    provisioned_configuration: cdktn.listMapper(awsKnowledgeBaseProvisionedConfigurationPropertyToTerraform, true)(struct!.provisionedConfiguration),
    serverless_configuration: cdktn.listMapper(awsKnowledgeBaseServerlessConfigurationPropertyToTerraform, true)(struct!.serverlessConfiguration),
  }
}


export function awsKnowledgeBaseQueryEngineConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.QueryEngineConfigurationProperty | cdktn.IResolvable): any {
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
    provisioned_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseProvisionedConfigurationPropertyToHclTerraform, true)(struct!.provisionedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ProvisionedConfigurationPropertyList",
    },
    serverless_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseServerlessConfigurationPropertyToHclTerraform, true)(struct!.serverlessConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseCuratedQueryPropertyToTerraform(struct?: AwsKnowledgeBase.CuratedQueryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language: cdktn.stringToTerraform(struct!.naturalLanguage),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function awsKnowledgeBaseCuratedQueryPropertyToHclTerraform(struct?: AwsKnowledgeBase.CuratedQueryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseColumnPropertyToTerraform(struct?: AwsKnowledgeBase.ColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    inclusion: cdktn.stringToTerraform(struct!.inclusion),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsKnowledgeBaseColumnPropertyToHclTerraform(struct?: AwsKnowledgeBase.ColumnProperty | cdktn.IResolvable): any {
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
    inclusion: {
      value: cdktn.stringToHclTerraform(struct!.inclusion),
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


export function awsKnowledgeBaseTablePropertyToTerraform(struct?: AwsKnowledgeBase.TableProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    inclusion: cdktn.stringToTerraform(struct!.inclusion),
    name: cdktn.stringToTerraform(struct!.name),
    column: cdktn.listMapper(awsKnowledgeBaseColumnPropertyToTerraform, true)(struct!.column),
  }
}


export function awsKnowledgeBaseTablePropertyToHclTerraform(struct?: AwsKnowledgeBase.TableProperty | cdktn.IResolvable): any {
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
    inclusion: {
      value: cdktn.stringToHclTerraform(struct!.inclusion),
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
    column: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseColumnPropertyToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "ColumnPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseGenerationContextPropertyToTerraform(struct?: AwsKnowledgeBase.GenerationContextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    curated_query: cdktn.listMapper(awsKnowledgeBaseCuratedQueryPropertyToTerraform, true)(struct!.curatedQuery),
    table: cdktn.listMapper(awsKnowledgeBaseTablePropertyToTerraform, true)(struct!.table),
  }
}


export function awsKnowledgeBaseGenerationContextPropertyToHclTerraform(struct?: AwsKnowledgeBase.GenerationContextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    curated_query: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseCuratedQueryPropertyToHclTerraform, true)(struct!.curatedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "CuratedQueryPropertyList",
    },
    table: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseTablePropertyToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "TablePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseQueryGenerationConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.QueryGenerationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_timeout_seconds: cdktn.numberToTerraform(struct!.executionTimeoutSeconds),
    generation_context: cdktn.listMapper(awsKnowledgeBaseGenerationContextPropertyToTerraform, true)(struct!.generationContext),
  }
}


export function awsKnowledgeBaseQueryGenerationConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.QueryGenerationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.executionTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generation_context: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseGenerationContextPropertyToHclTerraform, true)(struct!.generationContext),
      isBlock: true,
      type: "list",
      storageClassType: "GenerationContextPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseAwsDataCatalogConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.AwsDataCatalogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tableNames),
  }
}


export function awsKnowledgeBaseAwsDataCatalogConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.AwsDataCatalogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    aws_data_catalog_configuration: cdktn.listMapper(awsKnowledgeBaseAwsDataCatalogConfigurationPropertyToTerraform, true)(struct!.awsDataCatalogConfiguration),
    redshift_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyToTerraform, true)(struct!.redshiftConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty | cdktn.IResolvable): any {
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
    aws_data_catalog_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseAwsDataCatalogConfigurationPropertyToHclTerraform, true)(struct!.awsDataCatalogConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AwsDataCatalogConfigurationPropertyList",
    },
    redshift_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyToHclTerraform, true)(struct!.redshiftConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_engine_configuration: cdktn.listMapper(awsKnowledgeBaseQueryEngineConfigurationPropertyToTerraform, true)(struct!.queryEngineConfiguration),
    query_generation_configuration: cdktn.listMapper(awsKnowledgeBaseQueryGenerationConfigurationPropertyToTerraform, true)(struct!.queryGenerationConfiguration),
    storage_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyToTerraform, true)(struct!.storageConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_engine_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseQueryEngineConfigurationPropertyToHclTerraform, true)(struct!.queryEngineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "QueryEngineConfigurationPropertyList",
    },
    query_generation_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseQueryGenerationConfigurationPropertyToHclTerraform, true)(struct!.queryGenerationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "QueryGenerationConfigurationPropertyList",
    },
    storage_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyToHclTerraform, true)(struct!.storageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    redshift_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyToTerraform, true)(struct!.redshiftConfiguration),
  }
}


export function awsKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
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
    redshift_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyToHclTerraform, true)(struct!.redshiftConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed_length_duration: {
      value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform, true)(struct!.segmentationConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform, true)(struct!.segmentationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed_length_duration: {
      value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform, true)(struct!.segmentationConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform, true)(struct!.segmentationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.numberToTerraform(struct!.dimensions),
    embedding_data_type: cdktn.stringToTerraform(struct!.embeddingDataType),
    audio: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToTerraform, true)(struct!.audio),
    video: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToTerraform, true)(struct!.video),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    embedding_data_type: {
      value: cdktn.stringToHclTerraform(struct!.embeddingDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audio: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyToHclTerraform, true)(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList",
    },
    video: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyToHclTerraform, true)(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_embedding_model_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_embedding_model_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseS3LocationPropertyToTerraform(struct?: AwsKnowledgeBase.S3LocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsKnowledgeBaseS3LocationPropertyToHclTerraform(struct?: AwsKnowledgeBase.S3LocationProperty | cdktn.IResolvable): any {
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


export function awsKnowledgeBaseStorageLocationPropertyToTerraform(struct?: AwsKnowledgeBase.StorageLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    s3_location: cdktn.listMapper(awsKnowledgeBaseS3LocationPropertyToTerraform, true)(struct!.s3Location),
  }
}


export function awsKnowledgeBaseStorageLocationPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageLocationProperty | cdktn.IResolvable): any {
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
    s3_location: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseS3LocationPropertyToHclTerraform, true)(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "S3LocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseSupplementalDataStorageConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.SupplementalDataStorageConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_location: cdktn.listMapper(awsKnowledgeBaseStorageLocationPropertyToTerraform, true)(struct!.storageLocation),
  }
}


export function awsKnowledgeBaseSupplementalDataStorageConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.SupplementalDataStorageConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_location: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageLocationPropertyToHclTerraform, true)(struct!.storageLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_model_arn: cdktn.stringToTerraform(struct!.embeddingModelArn),
    embedding_model_configuration: cdktn.listMapper(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform, true)(struct!.embeddingModelConfiguration),
    supplemental_data_storage_configuration: cdktn.listMapper(awsKnowledgeBaseSupplementalDataStorageConfigurationPropertyToTerraform, true)(struct!.supplementalDataStorageConfiguration),
  }
}


export function awsKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform, true)(struct!.embeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList",
    },
    supplemental_data_storage_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseSupplementalDataStorageConfigurationPropertyToHclTerraform, true)(struct!.supplementalDataStorageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SupplementalDataStorageConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    kendra_knowledge_base_configuration: cdktn.listMapper(awsKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToTerraform, true)(struct!.kendraKnowledgeBaseConfiguration),
    managed_knowledge_base_configuration: cdktn.listMapper(awsKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToTerraform, true)(struct!.managedKnowledgeBaseConfiguration),
    sql_knowledge_base_configuration: cdktn.listMapper(awsKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToTerraform, true)(struct!.sqlKnowledgeBaseConfiguration),
    vector_knowledge_base_configuration: cdktn.listMapper(awsKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToTerraform, true)(struct!.vectorKnowledgeBaseConfiguration),
  }
}


export function awsKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
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
    kendra_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToHclTerraform, true)(struct!.kendraKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KendraKnowledgeBaseConfigurationPropertyList",
    },
    managed_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToHclTerraform, true)(struct!.managedKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedKnowledgeBaseConfigurationPropertyList",
    },
    sql_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToHclTerraform, true)(struct!.sqlKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SqlKnowledgeBaseConfigurationPropertyList",
    },
    vector_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToHclTerraform, true)(struct!.vectorKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VectorKnowledgeBaseConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function awsKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseMongoDbAtlasConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.MongoDbAtlasConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_name: cdktn.stringToTerraform(struct!.collectionName),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    endpoint_service_name: cdktn.stringToTerraform(struct!.endpointServiceName),
    text_index_name: cdktn.stringToTerraform(struct!.textIndexName),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseMongoDbAtlasConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.MongoDbAtlasConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_name: {
      value: cdktn.stringToHclTerraform(struct!.collectionName),
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
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_service_name: {
      value: cdktn.stringToHclTerraform(struct!.endpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_index_name: {
      value: cdktn.stringToHclTerraform(struct!.textIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
  }
}


export function awsKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    graph_arn: cdktn.stringToTerraform(struct!.graphArn),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    graph_arn: {
      value: cdktn.stringToHclTerraform(struct!.graphArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function awsKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseOpensearchManagedClusterConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.OpensearchManagedClusterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_arn: cdktn.stringToTerraform(struct!.domainArn),
    domain_endpoint: cdktn.stringToTerraform(struct!.domainEndpoint),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseOpensearchManagedClusterConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.OpensearchManagedClusterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.domainEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function awsKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseOpensearchServerlessConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.OpensearchServerlessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_arn: cdktn.stringToTerraform(struct!.collectionArn),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseOpensearchServerlessConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.OpensearchServerlessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_arn: {
      value: cdktn.stringToHclTerraform(struct!.collectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationPineconeConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
  }
}


export function awsKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationPineconeConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBasePineconeConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.PineconeConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBasePineconeConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.PineconeConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationPineconeConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationRdsConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metadata_field: cdktn.stringToTerraform(struct!.customMetadataField),
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    primary_key_field: cdktn.stringToTerraform(struct!.primaryKeyField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function awsKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationRdsConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.customMetadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key_field: {
      value: cdktn.stringToHclTerraform(struct!.primaryKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseRdsConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.RdsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseRdsConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.RdsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationRdsConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function awsKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseRedisEnterpriseCloudConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.RedisEnterpriseCloudConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(awsKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyToTerraform, true)(struct!.fieldMapping),
  }
}


export function awsKnowledgeBaseRedisEnterpriseCloudConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.RedisEnterpriseCloudConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseS3VectorsConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.S3VectorsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_arn: cdktn.stringToTerraform(struct!.indexArn),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    vector_bucket_arn: cdktn.stringToTerraform(struct!.vectorBucketArn),
  }
}


export function awsKnowledgeBaseS3VectorsConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.S3VectorsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_arn: {
      value: cdktn.stringToHclTerraform(struct!.indexArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.vectorBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseStorageConfigurationPropertyToTerraform(struct?: AwsKnowledgeBase.StorageConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    mongo_db_atlas_configuration: cdktn.listMapper(awsKnowledgeBaseMongoDbAtlasConfigurationPropertyToTerraform, true)(struct!.mongoDbAtlasConfiguration),
    neptune_analytics_configuration: cdktn.listMapper(awsKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToTerraform, true)(struct!.neptuneAnalyticsConfiguration),
    opensearch_managed_cluster_configuration: cdktn.listMapper(awsKnowledgeBaseOpensearchManagedClusterConfigurationPropertyToTerraform, true)(struct!.opensearchManagedClusterConfiguration),
    opensearch_serverless_configuration: cdktn.listMapper(awsKnowledgeBaseOpensearchServerlessConfigurationPropertyToTerraform, true)(struct!.opensearchServerlessConfiguration),
    pinecone_configuration: cdktn.listMapper(awsKnowledgeBasePineconeConfigurationPropertyToTerraform, true)(struct!.pineconeConfiguration),
    rds_configuration: cdktn.listMapper(awsKnowledgeBaseRdsConfigurationPropertyToTerraform, true)(struct!.rdsConfiguration),
    redis_enterprise_cloud_configuration: cdktn.listMapper(awsKnowledgeBaseRedisEnterpriseCloudConfigurationPropertyToTerraform, true)(struct!.redisEnterpriseCloudConfiguration),
    s3_vectors_configuration: cdktn.listMapper(awsKnowledgeBaseS3VectorsConfigurationPropertyToTerraform, true)(struct!.s3VectorsConfiguration),
  }
}


export function awsKnowledgeBaseStorageConfigurationPropertyToHclTerraform(struct?: AwsKnowledgeBase.StorageConfigurationProperty | cdktn.IResolvable): any {
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
    mongo_db_atlas_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseMongoDbAtlasConfigurationPropertyToHclTerraform, true)(struct!.mongoDbAtlasConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MongoDbAtlasConfigurationPropertyList",
    },
    neptune_analytics_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToHclTerraform, true)(struct!.neptuneAnalyticsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NeptuneAnalyticsConfigurationPropertyList",
    },
    opensearch_managed_cluster_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseOpensearchManagedClusterConfigurationPropertyToHclTerraform, true)(struct!.opensearchManagedClusterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchManagedClusterConfigurationPropertyList",
    },
    opensearch_serverless_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseOpensearchServerlessConfigurationPropertyToHclTerraform, true)(struct!.opensearchServerlessConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchServerlessConfigurationPropertyList",
    },
    pinecone_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBasePineconeConfigurationPropertyToHclTerraform, true)(struct!.pineconeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PineconeConfigurationPropertyList",
    },
    rds_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseRdsConfigurationPropertyToHclTerraform, true)(struct!.rdsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RdsConfigurationPropertyList",
    },
    redis_enterprise_cloud_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseRedisEnterpriseCloudConfigurationPropertyToHclTerraform, true)(struct!.redisEnterpriseCloudConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RedisEnterpriseCloudConfigurationPropertyList",
    },
    s3_vectors_configuration: {
      value: cdktn.listMapperHcl(awsKnowledgeBaseS3VectorsConfigurationPropertyToHclTerraform, true)(struct!.s3VectorsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3VectorsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKnowledgeBaseTimeoutsPropertyToTerraform(struct?: AwsKnowledgeBase.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsKnowledgeBaseTimeoutsPropertyToHclTerraform(struct?: AwsKnowledgeBase.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsKnowledgeBase {
export interface KendraKnowledgeBaseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#kendra_index_arn AwsKnowledgeBase#kendra_index_arn}
  */
  readonly kendraIndexArn: string;
}
export class KendraKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kendraIndexArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraIndexArn = this._kendraIndexArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kendraIndexArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kendraIndexArn = value.kendraIndexArn;
    }
  }

  // kendra_index_arn - computed: false, optional: false, required: true
  private _kendraIndexArn?: string; 
  public get kendraIndexArn() {
    return this.getStringAttribute('kendra_index_arn');
  }
  public set kendraIndexArn(value: string) {
    this._kendraIndexArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraIndexArnInput() {
    return this._kendraIndexArn;
  }
}

export class KendraKnowledgeBaseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KendraKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KendraKnowledgeBaseConfigurationPropertyOutputReference {
    return new KendraKnowledgeBaseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#fixed_length_duration AwsKnowledgeBase#fixed_length_duration}
  */
  readonly fixedLengthDuration: number;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLengthDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = value.fixedLengthDuration;
    }
  }

  // fixed_length_duration - computed: false, optional: false, required: true
  private _fixedLengthDuration?: number; 
  public get fixedLengthDuration() {
    return this.getNumberAttribute('fixed_length_duration');
  }
  public set fixedLengthDuration(value: number) {
    this._fixedLengthDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLengthDurationInput() {
    return this._fixedLengthDuration;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty {
  /**
  * segmentation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#segmentation_configuration AwsKnowledgeBase#segmentation_configuration}
  */
  readonly segmentationConfiguration?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
    }
  }

  // segmentation_configuration - computed: false, optional: true, required: false
  private _segmentationConfiguration = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList(this, "segmentation_configuration", false);
  public get segmentationConfiguration() {
    return this._segmentationConfiguration;
  }
  public putSegmentationConfiguration(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable) {
    this._segmentationConfiguration.internalValue = value;
  }
  public resetSegmentationConfiguration() {
    this._segmentationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationConfigurationInput() {
    return this._segmentationConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#fixed_length_duration AwsKnowledgeBase#fixed_length_duration}
  */
  readonly fixedLengthDuration: number;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLengthDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = value.fixedLengthDuration;
    }
  }

  // fixed_length_duration - computed: false, optional: false, required: true
  private _fixedLengthDuration?: number; 
  public get fixedLengthDuration() {
    return this.getNumberAttribute('fixed_length_duration');
  }
  public set fixedLengthDuration(value: number) {
    this._fixedLengthDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLengthDurationInput() {
    return this._fixedLengthDuration;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty {
  /**
  * segmentation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#segmentation_configuration AwsKnowledgeBase#segmentation_configuration}
  */
  readonly segmentationConfiguration?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
    }
  }

  // segmentation_configuration - computed: false, optional: true, required: false
  private _segmentationConfiguration = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList(this, "segmentation_configuration", false);
  public get segmentationConfiguration() {
    return this._segmentationConfiguration;
  }
  public putSegmentationConfiguration(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable) {
    this._segmentationConfiguration.internalValue = value;
  }
  public resetSegmentationConfiguration() {
    this._segmentationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationConfigurationInput() {
    return this._segmentationConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#dimensions AwsKnowledgeBase#dimensions}
  */
  readonly dimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type AwsKnowledgeBase#embedding_data_type}
  */
  readonly embeddingDataType?: string;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#audio AwsKnowledgeBase#audio}
  */
  readonly audio?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#video AwsKnowledgeBase#video}
  */
  readonly video?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._embeddingDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDataType = this._embeddingDataType;
    }
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._embeddingDataType = undefined;
      this._audio.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._embeddingDataType = value.embeddingDataType;
      this._audio.internalValue = value.audio;
      this._video.internalValue = value.video;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // embedding_data_type - computed: false, optional: true, required: false
  private _embeddingDataType?: string; 
  public get embeddingDataType() {
    return this.getStringAttribute('embedding_data_type');
  }
  public set embeddingDataType(value: string) {
    this._embeddingDataType = value;
  }
  public resetEmbeddingDataType() {
    this._embeddingDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDataTypeInput() {
    return this._embeddingDataType;
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList(this, "audio", false);
  public get audio() {
    return this._audio;
  }
  public putAudio(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList(this, "video", false);
  public get video() {
    return this._video;
  }
  public putVideo(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty {
  /**
  * bedrock_embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#bedrock_embedding_model_configuration AwsKnowledgeBase#bedrock_embedding_model_configuration}
  */
  readonly bedrockEmbeddingModelConfiguration?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEmbeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEmbeddingModelConfiguration = this._bedrockEmbeddingModelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = value.bedrockEmbeddingModelConfiguration;
    }
  }

  // bedrock_embedding_model_configuration - computed: false, optional: true, required: false
  private _bedrockEmbeddingModelConfiguration = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList(this, "bedrock_embedding_model_configuration", false);
  public get bedrockEmbeddingModelConfiguration() {
    return this._bedrockEmbeddingModelConfiguration;
  }
  public putBedrockEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable) {
    this._bedrockEmbeddingModelConfiguration.internalValue = value;
  }
  public resetBedrockEmbeddingModelConfiguration() {
    this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEmbeddingModelConfigurationInput() {
    return this._bedrockEmbeddingModelConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSideEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#kms_key_arn AwsKnowledgeBase#kms_key_arn}
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
export interface ManagedKnowledgeBaseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn AwsKnowledgeBase#embedding_model_arn}
  */
  readonly embeddingModelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_model_type AwsKnowledgeBase#embedding_model_type}
  */
  readonly embeddingModelType?: string;
  /**
  * embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_model_configuration AwsKnowledgeBase#embedding_model_configuration}
  */
  readonly embeddingModelConfiguration?: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable;
  /**
  * server_side_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#server_side_encryption_configuration AwsKnowledgeBase#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: ServerSideEncryptionConfigurationProperty[] | cdktn.IResolvable;
}
export class ManagedKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelArn = this._embeddingModelArn;
    }
    if (this._embeddingModelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelType = this._embeddingModelType;
    }
    if (this._embeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelConfiguration = this._embeddingModelConfiguration?.internalValue;
    }
    if (this._serverSideEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionConfiguration = this._serverSideEncryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelArn = undefined;
      this._embeddingModelType = undefined;
      this._embeddingModelConfiguration.internalValue = undefined;
      this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelArn = value.embeddingModelArn;
      this._embeddingModelType = value.embeddingModelType;
      this._embeddingModelConfiguration.internalValue = value.embeddingModelConfiguration;
      this._serverSideEncryptionConfiguration.internalValue = value.serverSideEncryptionConfiguration;
    }
  }

  // embedding_model_arn - computed: false, optional: true, required: false
  private _embeddingModelArn?: string; 
  public get embeddingModelArn() {
    return this.getStringAttribute('embedding_model_arn');
  }
  public set embeddingModelArn(value: string) {
    this._embeddingModelArn = value;
  }
  public resetEmbeddingModelArn() {
    this._embeddingModelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelArnInput() {
    return this._embeddingModelArn;
  }

  // embedding_model_type - computed: true, optional: true, required: false
  private _embeddingModelType?: string; 
  public get embeddingModelType() {
    return this.getStringAttribute('embedding_model_type');
  }
  public set embeddingModelType(value: string) {
    this._embeddingModelType = value;
  }
  public resetEmbeddingModelType() {
    this._embeddingModelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelTypeInput() {
    return this._embeddingModelType;
  }

  // embedding_model_configuration - computed: false, optional: true, required: false
  private _embeddingModelConfiguration = new KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList(this, "embedding_model_configuration", false);
  public get embeddingModelConfiguration() {
    return this._embeddingModelConfiguration;
  }
  public putEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationManagedKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable) {
    this._embeddingModelConfiguration.internalValue = value;
  }
  public resetEmbeddingModelConfiguration() {
    this._embeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelConfigurationInput() {
    return this._embeddingModelConfiguration.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new ServerSideEncryptionConfigurationPropertyList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: ServerSideEncryptionConfigurationProperty[] | cdktn.IResolvable) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }
}

export class ManagedKnowledgeBaseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedKnowledgeBaseConfigurationPropertyOutputReference {
    return new ManagedKnowledgeBaseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#database_user AwsKnowledgeBase#database_user}
  */
  readonly databaseUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#username_password_secret_arn AwsKnowledgeBase#username_password_secret_arn}
  */
  readonly usernamePasswordSecretArn?: string;
}
export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUser = this._databaseUser;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernamePasswordSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseUser = undefined;
      this._type = undefined;
      this._usernamePasswordSecretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseUser = value.databaseUser;
      this._type = value.type;
      this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
    }
  }

  // database_user - computed: false, optional: true, required: false
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  public resetDatabaseUser() {
    this._databaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
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

  // username_password_secret_arn - computed: false, optional: true, required: false
  private _usernamePasswordSecretArn?: string; 
  public get usernamePasswordSecretArn() {
    return this.getStringAttribute('username_password_secret_arn');
  }
  public set usernamePasswordSecretArn(value: string) {
    this._usernamePasswordSecretArn = value;
  }
  public resetUsernamePasswordSecretArn() {
    this._usernamePasswordSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordSecretArnInput() {
    return this._usernamePasswordSecretArn;
  }
}

export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProvisionedConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#cluster_identifier AwsKnowledgeBase#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#auth_configuration AwsKnowledgeBase#auth_configuration}
  */
  readonly authConfiguration?: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty[] | cdktn.IResolvable;
}
export class ProvisionedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProvisionedConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._authConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionedConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIdentifier = undefined;
      this._authConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIdentifier = value.clusterIdentifier;
      this._authConfiguration.internalValue = value.authConfiguration;
    }
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // auth_configuration - computed: false, optional: true, required: false
  private _authConfiguration = new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationPropertyList(this, "auth_configuration", false);
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationProperty[] | cdktn.IResolvable) {
    this._authConfiguration.internalValue = value;
  }
  public resetAuthConfiguration() {
    this._authConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }
}

export class ProvisionedConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ProvisionedConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ProvisionedConfigurationPropertyOutputReference {
    return new ProvisionedConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#username_password_secret_arn AwsKnowledgeBase#username_password_secret_arn}
  */
  readonly usernamePasswordSecretArn?: string;
}
export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernamePasswordSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._usernamePasswordSecretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
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

  // username_password_secret_arn - computed: false, optional: true, required: false
  private _usernamePasswordSecretArn?: string; 
  public get usernamePasswordSecretArn() {
    return this.getStringAttribute('username_password_secret_arn');
  }
  public set usernamePasswordSecretArn(value: string) {
    this._usernamePasswordSecretArn = value;
  }
  public resetUsernamePasswordSecretArn() {
    this._usernamePasswordSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordSecretArnInput() {
    return this._usernamePasswordSecretArn;
  }
}

export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#workgroup_arn AwsKnowledgeBase#workgroup_arn}
  */
  readonly workgroupArn: string;
  /**
  * auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#auth_configuration AwsKnowledgeBase#auth_configuration}
  */
  readonly authConfiguration?: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty[] | cdktn.IResolvable;
}
export class ServerlessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServerlessConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workgroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroupArn = this._workgroupArn;
    }
    if (this._authConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workgroupArn = undefined;
      this._authConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workgroupArn = value.workgroupArn;
      this._authConfiguration.internalValue = value.authConfiguration;
    }
  }

  // workgroup_arn - computed: false, optional: false, required: true
  private _workgroupArn?: string; 
  public get workgroupArn() {
    return this.getStringAttribute('workgroup_arn');
  }
  public set workgroupArn(value: string) {
    this._workgroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupArnInput() {
    return this._workgroupArn;
  }

  // auth_configuration - computed: false, optional: true, required: false
  private _authConfiguration = new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationPropertyList(this, "auth_configuration", false);
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationProperty[] | cdktn.IResolvable) {
    this._authConfiguration.internalValue = value;
  }
  public resetAuthConfiguration() {
    this._authConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }
}

export class ServerlessConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ServerlessConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ServerlessConfigurationPropertyOutputReference {
    return new ServerlessConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueryEngineConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * provisioned_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#provisioned_configuration AwsKnowledgeBase#provisioned_configuration}
  */
  readonly provisionedConfiguration?: ProvisionedConfigurationProperty[] | cdktn.IResolvable;
  /**
  * serverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#serverless_configuration AwsKnowledgeBase#serverless_configuration}
  */
  readonly serverlessConfiguration?: ServerlessConfigurationProperty[] | cdktn.IResolvable;
}
export class QueryEngineConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueryEngineConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._provisionedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConfiguration = this._provisionedConfiguration?.internalValue;
    }
    if (this._serverlessConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfiguration = this._serverlessConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryEngineConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._provisionedConfiguration.internalValue = undefined;
      this._serverlessConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._provisionedConfiguration.internalValue = value.provisionedConfiguration;
      this._serverlessConfiguration.internalValue = value.serverlessConfiguration;
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

  // provisioned_configuration - computed: false, optional: true, required: false
  private _provisionedConfiguration = new ProvisionedConfigurationPropertyList(this, "provisioned_configuration", false);
  public get provisionedConfiguration() {
    return this._provisionedConfiguration;
  }
  public putProvisionedConfiguration(value: ProvisionedConfigurationProperty[] | cdktn.IResolvable) {
    this._provisionedConfiguration.internalValue = value;
  }
  public resetProvisionedConfiguration() {
    this._provisionedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConfigurationInput() {
    return this._provisionedConfiguration.internalValue;
  }

  // serverless_configuration - computed: false, optional: true, required: false
  private _serverlessConfiguration = new ServerlessConfigurationPropertyList(this, "serverless_configuration", false);
  public get serverlessConfiguration() {
    return this._serverlessConfiguration;
  }
  public putServerlessConfiguration(value: ServerlessConfigurationProperty[] | cdktn.IResolvable) {
    this._serverlessConfiguration.internalValue = value;
  }
  public resetServerlessConfiguration() {
    this._serverlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigurationInput() {
    return this._serverlessConfiguration.internalValue;
  }
}

export class QueryEngineConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : QueryEngineConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): QueryEngineConfigurationPropertyOutputReference {
    return new QueryEngineConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CuratedQueryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#natural_language AwsKnowledgeBase#natural_language}
  */
  readonly naturalLanguage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#sql AwsKnowledgeBase#sql}
  */
  readonly sql: string;
}
export class CuratedQueryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CuratedQueryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguage = this._naturalLanguage;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CuratedQueryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguage = undefined;
      this._sql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguage = value.naturalLanguage;
      this._sql = value.sql;
    }
  }

  // natural_language - computed: false, optional: false, required: true
  private _naturalLanguage?: string; 
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
  public set naturalLanguage(value: string) {
    this._naturalLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageInput() {
    return this._naturalLanguage;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }
}

export class CuratedQueryPropertyList extends cdktn.ComplexList {
  public internalValue? : CuratedQueryProperty[] | cdktn.IResolvable

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
  public get(index: number): CuratedQueryPropertyOutputReference {
    return new CuratedQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ColumnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#description AwsKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#inclusion AwsKnowledgeBase#inclusion}
  */
  readonly inclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#name AwsKnowledgeBase#name}
  */
  readonly name?: string;
}
export class ColumnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ColumnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusion = this._inclusion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColumnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inclusion = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inclusion = value.inclusion;
      this._name = value.name;
    }
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

  // inclusion - computed: false, optional: true, required: false
  private _inclusion?: string; 
  public get inclusion() {
    return this.getStringAttribute('inclusion');
  }
  public set inclusion(value: string) {
    this._inclusion = value;
  }
  public resetInclusion() {
    this._inclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionInput() {
    return this._inclusion;
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
}

export class ColumnPropertyList extends cdktn.ComplexList {
  public internalValue? : ColumnProperty[] | cdktn.IResolvable

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
  public get(index: number): ColumnPropertyOutputReference {
    return new ColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#description AwsKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#inclusion AwsKnowledgeBase#inclusion}
  */
  readonly inclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#name AwsKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#column AwsKnowledgeBase#column}
  */
  readonly column?: ColumnProperty[] | cdktn.IResolvable;
}
export class TablePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TableProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusion = this._inclusion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inclusion = undefined;
      this._name = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inclusion = value.inclusion;
      this._name = value.name;
      this._column.internalValue = value.column;
    }
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

  // inclusion - computed: false, optional: true, required: false
  private _inclusion?: string; 
  public get inclusion() {
    return this.getStringAttribute('inclusion');
  }
  public set inclusion(value: string) {
    this._inclusion = value;
  }
  public resetInclusion() {
    this._inclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionInput() {
    return this._inclusion;
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

  // column - computed: false, optional: true, required: false
  private _column = new ColumnPropertyList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: ColumnProperty[] | cdktn.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class TablePropertyList extends cdktn.ComplexList {
  public internalValue? : TableProperty[] | cdktn.IResolvable

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
  public get(index: number): TablePropertyOutputReference {
    return new TablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerationContextProperty {
  /**
  * curated_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#curated_query AwsKnowledgeBase#curated_query}
  */
  readonly curatedQuery?: CuratedQueryProperty[] | cdktn.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#table AwsKnowledgeBase#table}
  */
  readonly table?: TableProperty[] | cdktn.IResolvable;
}
export class GenerationContextPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GenerationContextProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curatedQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.curatedQuery = this._curatedQuery?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerationContextProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curatedQuery.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curatedQuery.internalValue = value.curatedQuery;
      this._table.internalValue = value.table;
    }
  }

  // curated_query - computed: false, optional: true, required: false
  private _curatedQuery = new CuratedQueryPropertyList(this, "curated_query", false);
  public get curatedQuery() {
    return this._curatedQuery;
  }
  public putCuratedQuery(value: CuratedQueryProperty[] | cdktn.IResolvable) {
    this._curatedQuery.internalValue = value;
  }
  public resetCuratedQuery() {
    this._curatedQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curatedQueryInput() {
    return this._curatedQuery.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new TablePropertyList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: TableProperty[] | cdktn.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class GenerationContextPropertyList extends cdktn.ComplexList {
  public internalValue? : GenerationContextProperty[] | cdktn.IResolvable

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
  public get(index: number): GenerationContextPropertyOutputReference {
    return new GenerationContextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueryGenerationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#execution_timeout_seconds AwsKnowledgeBase#execution_timeout_seconds}
  */
  readonly executionTimeoutSeconds?: number;
  /**
  * generation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#generation_context AwsKnowledgeBase#generation_context}
  */
  readonly generationContext?: GenerationContextProperty[] | cdktn.IResolvable;
}
export class QueryGenerationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueryGenerationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeoutSeconds = this._executionTimeoutSeconds;
    }
    if (this._generationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationContext = this._generationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryGenerationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionTimeoutSeconds = undefined;
      this._generationContext.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionTimeoutSeconds = value.executionTimeoutSeconds;
      this._generationContext.internalValue = value.generationContext;
    }
  }

  // execution_timeout_seconds - computed: false, optional: true, required: false
  private _executionTimeoutSeconds?: number; 
  public get executionTimeoutSeconds() {
    return this.getNumberAttribute('execution_timeout_seconds');
  }
  public set executionTimeoutSeconds(value: number) {
    this._executionTimeoutSeconds = value;
  }
  public resetExecutionTimeoutSeconds() {
    this._executionTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutSecondsInput() {
    return this._executionTimeoutSeconds;
  }

  // generation_context - computed: false, optional: true, required: false
  private _generationContext = new GenerationContextPropertyList(this, "generation_context", false);
  public get generationContext() {
    return this._generationContext;
  }
  public putGenerationContext(value: GenerationContextProperty[] | cdktn.IResolvable) {
    this._generationContext.internalValue = value;
  }
  public resetGenerationContext() {
    this._generationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationContextInput() {
    return this._generationContext.internalValue;
  }
}

export class QueryGenerationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : QueryGenerationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): QueryGenerationConfigurationPropertyOutputReference {
    return new QueryGenerationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsDataCatalogConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#table_names AwsKnowledgeBase#table_names}
  */
  readonly tableNames: string[];
}
export class AwsDataCatalogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsDataCatalogConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsDataCatalogConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableNames = value.tableNames;
    }
  }

  // table_names - computed: false, optional: false, required: true
  private _tableNames?: string[]; 
  public get tableNames() {
    return cdktn.Fn.tolist(this.getListAttribute('table_names'));
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }
}

export class AwsDataCatalogConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsDataCatalogConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsDataCatalogConfigurationPropertyOutputReference {
    return new AwsDataCatalogConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#database_name AwsKnowledgeBase#database_name}
  */
  readonly databaseName: string;
}
export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
    }
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
}

export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * aws_data_catalog_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#aws_data_catalog_configuration AwsKnowledgeBase#aws_data_catalog_configuration}
  */
  readonly awsDataCatalogConfiguration?: AwsDataCatalogConfigurationProperty[] | cdktn.IResolvable;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#redshift_configuration AwsKnowledgeBase#redshift_configuration}
  */
  readonly redshiftConfiguration?: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._awsDataCatalogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsDataCatalogConfiguration = this._awsDataCatalogConfiguration?.internalValue;
    }
    if (this._redshiftConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._awsDataCatalogConfiguration.internalValue = undefined;
      this._redshiftConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._awsDataCatalogConfiguration.internalValue = value.awsDataCatalogConfiguration;
      this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
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

  // aws_data_catalog_configuration - computed: false, optional: true, required: false
  private _awsDataCatalogConfiguration = new AwsDataCatalogConfigurationPropertyList(this, "aws_data_catalog_configuration", false);
  public get awsDataCatalogConfiguration() {
    return this._awsDataCatalogConfiguration;
  }
  public putAwsDataCatalogConfiguration(value: AwsDataCatalogConfigurationProperty[] | cdktn.IResolvable) {
    this._awsDataCatalogConfiguration.internalValue = value;
  }
  public resetAwsDataCatalogConfiguration() {
    this._awsDataCatalogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDataCatalogConfigurationInput() {
    return this._awsDataCatalogConfiguration.internalValue;
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationPropertyList(this, "redshift_configuration", false);
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty {
  /**
  * query_engine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#query_engine_configuration AwsKnowledgeBase#query_engine_configuration}
  */
  readonly queryEngineConfiguration?: QueryEngineConfigurationProperty[] | cdktn.IResolvable;
  /**
  * query_generation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#query_generation_configuration AwsKnowledgeBase#query_generation_configuration}
  */
  readonly queryGenerationConfiguration?: QueryGenerationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#storage_configuration AwsKnowledgeBase#storage_configuration}
  */
  readonly storageConfiguration?: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryEngineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryEngineConfiguration = this._queryEngineConfiguration?.internalValue;
    }
    if (this._queryGenerationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGenerationConfiguration = this._queryGenerationConfiguration?.internalValue;
    }
    if (this._storageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryEngineConfiguration.internalValue = undefined;
      this._queryGenerationConfiguration.internalValue = undefined;
      this._storageConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryEngineConfiguration.internalValue = value.queryEngineConfiguration;
      this._queryGenerationConfiguration.internalValue = value.queryGenerationConfiguration;
      this._storageConfiguration.internalValue = value.storageConfiguration;
    }
  }

  // query_engine_configuration - computed: false, optional: true, required: false
  private _queryEngineConfiguration = new QueryEngineConfigurationPropertyList(this, "query_engine_configuration", false);
  public get queryEngineConfiguration() {
    return this._queryEngineConfiguration;
  }
  public putQueryEngineConfiguration(value: QueryEngineConfigurationProperty[] | cdktn.IResolvable) {
    this._queryEngineConfiguration.internalValue = value;
  }
  public resetQueryEngineConfiguration() {
    this._queryEngineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryEngineConfigurationInput() {
    return this._queryEngineConfiguration.internalValue;
  }

  // query_generation_configuration - computed: false, optional: true, required: false
  private _queryGenerationConfiguration = new QueryGenerationConfigurationPropertyList(this, "query_generation_configuration", false);
  public get queryGenerationConfiguration() {
    return this._queryGenerationConfiguration;
  }
  public putQueryGenerationConfiguration(value: QueryGenerationConfigurationProperty[] | cdktn.IResolvable) {
    this._queryGenerationConfiguration.internalValue = value;
  }
  public resetQueryGenerationConfiguration() {
    this._queryGenerationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGenerationConfigurationInput() {
    return this._queryGenerationConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationPropertyList(this, "storage_configuration", false);
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationProperty[] | cdktn.IResolvable) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlKnowledgeBaseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#redshift_configuration AwsKnowledgeBase#redshift_configuration}
  */
  readonly redshiftConfiguration?: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable;
}
export class SqlKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._redshiftConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._redshiftConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
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

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationPropertyList(this, "redshift_configuration", false);
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: KnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationProperty[] | cdktn.IResolvable) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }
}

export class SqlKnowledgeBaseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SqlKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SqlKnowledgeBaseConfigurationPropertyOutputReference {
    return new SqlKnowledgeBaseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#fixed_length_duration AwsKnowledgeBase#fixed_length_duration}
  */
  readonly fixedLengthDuration: number;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLengthDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = value.fixedLengthDuration;
    }
  }

  // fixed_length_duration - computed: false, optional: false, required: true
  private _fixedLengthDuration?: number; 
  public get fixedLengthDuration() {
    return this.getNumberAttribute('fixed_length_duration');
  }
  public set fixedLengthDuration(value: number) {
    this._fixedLengthDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLengthDurationInput() {
    return this._fixedLengthDuration;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty {
  /**
  * segmentation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#segmentation_configuration AwsKnowledgeBase#segmentation_configuration}
  */
  readonly segmentationConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
    }
  }

  // segmentation_configuration - computed: false, optional: true, required: false
  private _segmentationConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyList(this, "segmentation_configuration", false);
  public get segmentationConfiguration() {
    return this._segmentationConfiguration;
  }
  public putSegmentationConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty[] | cdktn.IResolvable) {
    this._segmentationConfiguration.internalValue = value;
  }
  public resetSegmentationConfiguration() {
    this._segmentationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationConfigurationInput() {
    return this._segmentationConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#fixed_length_duration AwsKnowledgeBase#fixed_length_duration}
  */
  readonly fixedLengthDuration: number;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLengthDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedLengthDuration = value.fixedLengthDuration;
    }
  }

  // fixed_length_duration - computed: false, optional: false, required: true
  private _fixedLengthDuration?: number; 
  public get fixedLengthDuration() {
    return this.getNumberAttribute('fixed_length_duration');
  }
  public set fixedLengthDuration(value: number) {
    this._fixedLengthDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLengthDurationInput() {
    return this._fixedLengthDuration;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty {
  /**
  * segmentation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#segmentation_configuration AwsKnowledgeBase#segmentation_configuration}
  */
  readonly segmentationConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
    }
  }

  // segmentation_configuration - computed: false, optional: true, required: false
  private _segmentationConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyList(this, "segmentation_configuration", false);
  public get segmentationConfiguration() {
    return this._segmentationConfiguration;
  }
  public putSegmentationConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty[] | cdktn.IResolvable) {
    this._segmentationConfiguration.internalValue = value;
  }
  public resetSegmentationConfiguration() {
    this._segmentationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationConfigurationInput() {
    return this._segmentationConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#dimensions AwsKnowledgeBase#dimensions}
  */
  readonly dimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type AwsKnowledgeBase#embedding_data_type}
  */
  readonly embeddingDataType?: string;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#audio AwsKnowledgeBase#audio}
  */
  readonly audio?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#video AwsKnowledgeBase#video}
  */
  readonly video?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._embeddingDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDataType = this._embeddingDataType;
    }
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._embeddingDataType = undefined;
      this._audio.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._embeddingDataType = value.embeddingDataType;
      this._audio.internalValue = value.audio;
      this._video.internalValue = value.video;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // embedding_data_type - computed: false, optional: true, required: false
  private _embeddingDataType?: string; 
  public get embeddingDataType() {
    return this.getStringAttribute('embedding_data_type');
  }
  public set embeddingDataType(value: string) {
    this._embeddingDataType = value;
  }
  public resetEmbeddingDataType() {
    this._embeddingDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDataTypeInput() {
    return this._embeddingDataType;
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioPropertyList(this, "audio", false);
  public get audio() {
    return this._audio;
  }
  public putAudio(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioProperty[] | cdktn.IResolvable) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoPropertyList(this, "video", false);
  public get video() {
    return this._video;
  }
  public putVideo(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoProperty[] | cdktn.IResolvable) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty {
  /**
  * bedrock_embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#bedrock_embedding_model_configuration AwsKnowledgeBase#bedrock_embedding_model_configuration}
  */
  readonly bedrockEmbeddingModelConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEmbeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEmbeddingModelConfiguration = this._bedrockEmbeddingModelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = value.bedrockEmbeddingModelConfiguration;
    }
  }

  // bedrock_embedding_model_configuration - computed: false, optional: true, required: false
  private _bedrockEmbeddingModelConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyList(this, "bedrock_embedding_model_configuration", false);
  public get bedrockEmbeddingModelConfiguration() {
    return this._bedrockEmbeddingModelConfiguration;
  }
  public putBedrockEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty[] | cdktn.IResolvable) {
    this._bedrockEmbeddingModelConfiguration.internalValue = value;
  }
  public resetBedrockEmbeddingModelConfiguration() {
    this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEmbeddingModelConfigurationInput() {
    return this._bedrockEmbeddingModelConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3LocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#uri AwsKnowledgeBase#uri}
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
export interface StorageLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#s3_location AwsKnowledgeBase#s3_location}
  */
  readonly s3Location?: S3LocationProperty[] | cdktn.IResolvable;
}
export class StorageLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._s3Location.internalValue = value.s3Location;
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

export class StorageLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageLocationPropertyOutputReference {
    return new StorageLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupplementalDataStorageConfigurationProperty {
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#storage_location AwsKnowledgeBase#storage_location}
  */
  readonly storageLocation?: StorageLocationProperty[] | cdktn.IResolvable;
}
export class SupplementalDataStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SupplementalDataStorageConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupplementalDataStorageConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageLocation.internalValue = value.storageLocation;
    }
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation = new StorageLocationPropertyList(this, "storage_location", false);
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: StorageLocationProperty[] | cdktn.IResolvable) {
    this._storageLocation.internalValue = value;
  }
  public resetStorageLocation() {
    this._storageLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }
}

export class SupplementalDataStorageConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SupplementalDataStorageConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SupplementalDataStorageConfigurationPropertyOutputReference {
    return new SupplementalDataStorageConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorKnowledgeBaseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn AwsKnowledgeBase#embedding_model_arn}
  */
  readonly embeddingModelArn: string;
  /**
  * embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#embedding_model_configuration AwsKnowledgeBase#embedding_model_configuration}
  */
  readonly embeddingModelConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable;
  /**
  * supplemental_data_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#supplemental_data_storage_configuration AwsKnowledgeBase#supplemental_data_storage_configuration}
  */
  readonly supplementalDataStorageConfiguration?: SupplementalDataStorageConfigurationProperty[] | cdktn.IResolvable;
}
export class VectorKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelArn = this._embeddingModelArn;
    }
    if (this._embeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelConfiguration = this._embeddingModelConfiguration?.internalValue;
    }
    if (this._supplementalDataStorageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalDataStorageConfiguration = this._supplementalDataStorageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelArn = undefined;
      this._embeddingModelConfiguration.internalValue = undefined;
      this._supplementalDataStorageConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelArn = value.embeddingModelArn;
      this._embeddingModelConfiguration.internalValue = value.embeddingModelConfiguration;
      this._supplementalDataStorageConfiguration.internalValue = value.supplementalDataStorageConfiguration;
    }
  }

  // embedding_model_arn - computed: false, optional: false, required: true
  private _embeddingModelArn?: string; 
  public get embeddingModelArn() {
    return this.getStringAttribute('embedding_model_arn');
  }
  public set embeddingModelArn(value: string) {
    this._embeddingModelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelArnInput() {
    return this._embeddingModelArn;
  }

  // embedding_model_configuration - computed: false, optional: true, required: false
  private _embeddingModelConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyList(this, "embedding_model_configuration", false);
  public get embeddingModelConfiguration() {
    return this._embeddingModelConfiguration;
  }
  public putEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty[] | cdktn.IResolvable) {
    this._embeddingModelConfiguration.internalValue = value;
  }
  public resetEmbeddingModelConfiguration() {
    this._embeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelConfigurationInput() {
    return this._embeddingModelConfiguration.internalValue;
  }

  // supplemental_data_storage_configuration - computed: false, optional: true, required: false
  private _supplementalDataStorageConfiguration = new SupplementalDataStorageConfigurationPropertyList(this, "supplemental_data_storage_configuration", false);
  public get supplementalDataStorageConfiguration() {
    return this._supplementalDataStorageConfiguration;
  }
  public putSupplementalDataStorageConfiguration(value: SupplementalDataStorageConfigurationProperty[] | cdktn.IResolvable) {
    this._supplementalDataStorageConfiguration.internalValue = value;
  }
  public resetSupplementalDataStorageConfiguration() {
    this._supplementalDataStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalDataStorageConfigurationInput() {
    return this._supplementalDataStorageConfiguration.internalValue;
  }
}

export class VectorKnowledgeBaseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : VectorKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): VectorKnowledgeBaseConfigurationPropertyOutputReference {
    return new VectorKnowledgeBaseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * kendra_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#kendra_knowledge_base_configuration AwsKnowledgeBase#kendra_knowledge_base_configuration}
  */
  readonly kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable;
  /**
  * managed_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#managed_knowledge_base_configuration AwsKnowledgeBase#managed_knowledge_base_configuration}
  */
  readonly managedKnowledgeBaseConfiguration?: ManagedKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable;
  /**
  * sql_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#sql_knowledge_base_configuration AwsKnowledgeBase#sql_knowledge_base_configuration}
  */
  readonly sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable;
  /**
  * vector_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_knowledge_base_configuration AwsKnowledgeBase#vector_knowledge_base_configuration}
  */
  readonly vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._kendraKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraKnowledgeBaseConfiguration = this._kendraKnowledgeBaseConfiguration?.internalValue;
    }
    if (this._managedKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedKnowledgeBaseConfiguration = this._managedKnowledgeBaseConfiguration?.internalValue;
    }
    if (this._sqlKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlKnowledgeBaseConfiguration = this._sqlKnowledgeBaseConfiguration?.internalValue;
    }
    if (this._vectorKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorKnowledgeBaseConfiguration = this._vectorKnowledgeBaseConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
      this._managedKnowledgeBaseConfiguration.internalValue = undefined;
      this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
      this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._kendraKnowledgeBaseConfiguration.internalValue = value.kendraKnowledgeBaseConfiguration;
      this._managedKnowledgeBaseConfiguration.internalValue = value.managedKnowledgeBaseConfiguration;
      this._sqlKnowledgeBaseConfiguration.internalValue = value.sqlKnowledgeBaseConfiguration;
      this._vectorKnowledgeBaseConfiguration.internalValue = value.vectorKnowledgeBaseConfiguration;
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

  // kendra_knowledge_base_configuration - computed: false, optional: true, required: false
  private _kendraKnowledgeBaseConfiguration = new KendraKnowledgeBaseConfigurationPropertyList(this, "kendra_knowledge_base_configuration", false);
  public get kendraKnowledgeBaseConfiguration() {
    return this._kendraKnowledgeBaseConfiguration;
  }
  public putKendraKnowledgeBaseConfiguration(value: KendraKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable) {
    this._kendraKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetKendraKnowledgeBaseConfiguration() {
    this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraKnowledgeBaseConfigurationInput() {
    return this._kendraKnowledgeBaseConfiguration.internalValue;
  }

  // managed_knowledge_base_configuration - computed: false, optional: true, required: false
  private _managedKnowledgeBaseConfiguration = new ManagedKnowledgeBaseConfigurationPropertyList(this, "managed_knowledge_base_configuration", false);
  public get managedKnowledgeBaseConfiguration() {
    return this._managedKnowledgeBaseConfiguration;
  }
  public putManagedKnowledgeBaseConfiguration(value: ManagedKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable) {
    this._managedKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetManagedKnowledgeBaseConfiguration() {
    this._managedKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKnowledgeBaseConfigurationInput() {
    return this._managedKnowledgeBaseConfiguration.internalValue;
  }

  // sql_knowledge_base_configuration - computed: false, optional: true, required: false
  private _sqlKnowledgeBaseConfiguration = new SqlKnowledgeBaseConfigurationPropertyList(this, "sql_knowledge_base_configuration", false);
  public get sqlKnowledgeBaseConfiguration() {
    return this._sqlKnowledgeBaseConfiguration;
  }
  public putSqlKnowledgeBaseConfiguration(value: SqlKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable) {
    this._sqlKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetSqlKnowledgeBaseConfiguration() {
    this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlKnowledgeBaseConfigurationInput() {
    return this._sqlKnowledgeBaseConfiguration.internalValue;
  }

  // vector_knowledge_base_configuration - computed: false, optional: true, required: false
  private _vectorKnowledgeBaseConfiguration = new VectorKnowledgeBaseConfigurationPropertyList(this, "vector_knowledge_base_configuration", false);
  public get vectorKnowledgeBaseConfiguration() {
    return this._vectorKnowledgeBaseConfiguration;
  }
  public putVectorKnowledgeBaseConfiguration(value: VectorKnowledgeBaseConfigurationProperty[] | cdktn.IResolvable) {
    this._vectorKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetVectorKnowledgeBaseConfiguration() {
    this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorKnowledgeBaseConfigurationInput() {
    return this._vectorKnowledgeBaseConfiguration.internalValue;
  }
}

export class KnowledgeBaseConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigurationPropertyOutputReference {
    return new KnowledgeBaseConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_field AwsKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}
export class StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongoDbAtlasConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#collection_name AwsKnowledgeBase#collection_name}
  */
  readonly collectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn AwsKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#database_name AwsKnowledgeBase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#endpoint AwsKnowledgeBase#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#endpoint_service_name AwsKnowledgeBase#endpoint_service_name}
  */
  readonly endpointServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_index_name AwsKnowledgeBase#text_index_name}
  */
  readonly textIndexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_index_name AwsKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class MongoDbAtlasConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MongoDbAtlasConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._endpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointServiceName = this._endpointServiceName;
    }
    if (this._textIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.textIndexName = this._textIndexName;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongoDbAtlasConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._credentialsSecretArn = undefined;
      this._databaseName = undefined;
      this._endpoint = undefined;
      this._endpointServiceName = undefined;
      this._textIndexName = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._databaseName = value.databaseName;
      this._endpoint = value.endpoint;
      this._endpointServiceName = value.endpointServiceName;
      this._textIndexName = value.textIndexName;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // collection_name - computed: false, optional: false, required: true
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // endpoint_service_name - computed: false, optional: true, required: false
  private _endpointServiceName?: string; 
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }
  public set endpointServiceName(value: string) {
    this._endpointServiceName = value;
  }
  public resetEndpointServiceName() {
    this._endpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceNameInput() {
    return this._endpointServiceName;
  }

  // text_index_name - computed: false, optional: true, required: false
  private _textIndexName?: string; 
  public get textIndexName() {
    return this.getStringAttribute('text_index_name');
  }
  public set textIndexName(value: string) {
    this._textIndexName = value;
  }
  public resetTextIndexName() {
    this._textIndexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textIndexNameInput() {
    return this._textIndexName;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationMongoDbAtlasConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationMongoDbAtlasConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class MongoDbAtlasConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : MongoDbAtlasConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): MongoDbAtlasConfigurationPropertyOutputReference {
    return new MongoDbAtlasConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
}
export class StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }
}

export class StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NeptuneAnalyticsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#graph_arn AwsKnowledgeBase#graph_arn}
  */
  readonly graphArn: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class NeptuneAnalyticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphArn = this._graphArn;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphArn = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphArn = value.graphArn;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // graph_arn - computed: false, optional: false, required: true
  private _graphArn?: string; 
  public get graphArn() {
    return this.getStringAttribute('graph_arn');
  }
  public set graphArn(value: string) {
    this._graphArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphArnInput() {
    return this._graphArn;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationNeptuneAnalyticsConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class NeptuneAnalyticsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : NeptuneAnalyticsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): NeptuneAnalyticsConfigurationPropertyOutputReference {
    return new NeptuneAnalyticsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_field AwsKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}
export class StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchManagedClusterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#domain_arn AwsKnowledgeBase#domain_arn}
  */
  readonly domainArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#domain_endpoint AwsKnowledgeBase#domain_endpoint}
  */
  readonly domainEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_index_name AwsKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class OpensearchManagedClusterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchManagedClusterConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._domainEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEndpoint = this._domainEndpoint;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchManagedClusterConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainArn = undefined;
      this._domainEndpoint = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainArn = value.domainArn;
      this._domainEndpoint = value.domainEndpoint;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // domain_arn - computed: false, optional: false, required: true
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
  }

  // domain_endpoint - computed: false, optional: false, required: true
  private _domainEndpoint?: string; 
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }
  public set domainEndpoint(value: string) {
    this._domainEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointInput() {
    return this._domainEndpoint;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationOpensearchManagedClusterConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class OpensearchManagedClusterConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchManagedClusterConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchManagedClusterConfigurationPropertyOutputReference {
    return new OpensearchManagedClusterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_field AwsKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}
export class StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchServerlessConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#collection_arn AwsKnowledgeBase#collection_arn}
  */
  readonly collectionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_index_name AwsKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class OpensearchServerlessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchServerlessConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionArn = this._collectionArn;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchServerlessConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionArn = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionArn = value.collectionArn;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // collection_arn - computed: false, optional: false, required: true
  private _collectionArn?: string; 
  public get collectionArn() {
    return this.getStringAttribute('collection_arn');
  }
  public set collectionArn(value: string) {
    this._collectionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionArnInput() {
    return this._collectionArn;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationOpensearchServerlessConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationOpensearchServerlessConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class OpensearchServerlessConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchServerlessConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchServerlessConfigurationPropertyOutputReference {
    return new OpensearchServerlessConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationPineconeConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
}
export class StorageConfigurationPineconeConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationPineconeConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationPineconeConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }
}

export class StorageConfigurationPineconeConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationPineconeConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationPineconeConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationPineconeConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PineconeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#connection_string AwsKnowledgeBase#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn AwsKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#namespace AwsKnowledgeBase#namespace}
  */
  readonly namespace?: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationPineconeConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class PineconeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PineconeConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PineconeConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionString = undefined;
      this._credentialsSecretArn = undefined;
      this._namespace = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionString = value.connectionString;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._namespace = value.namespace;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationPineconeConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationPineconeConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class PineconeConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : PineconeConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): PineconeConfigurationPropertyOutputReference {
    return new PineconeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationRdsConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#custom_metadata_field AwsKnowledgeBase#custom_metadata_field}
  */
  readonly customMetadataField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#primary_key_field AwsKnowledgeBase#primary_key_field}
  */
  readonly primaryKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_field AwsKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}
export class StorageConfigurationRdsConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationRdsConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadataField = this._customMetadataField;
    }
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._primaryKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyField = this._primaryKeyField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationRdsConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetadataField = undefined;
      this._metadataField = undefined;
      this._primaryKeyField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetadataField = value.customMetadataField;
      this._metadataField = value.metadataField;
      this._primaryKeyField = value.primaryKeyField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // custom_metadata_field - computed: false, optional: true, required: false
  private _customMetadataField?: string; 
  public get customMetadataField() {
    return this.getStringAttribute('custom_metadata_field');
  }
  public set customMetadataField(value: string) {
    this._customMetadataField = value;
  }
  public resetCustomMetadataField() {
    this._customMetadataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataFieldInput() {
    return this._customMetadataField;
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // primary_key_field - computed: false, optional: false, required: true
  private _primaryKeyField?: string; 
  public get primaryKeyField() {
    return this.getStringAttribute('primary_key_field');
  }
  public set primaryKeyField(value: string) {
    this._primaryKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyFieldInput() {
    return this._primaryKeyField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class StorageConfigurationRdsConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationRdsConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationRdsConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationRdsConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn AwsKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#database_name AwsKnowledgeBase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#resource_arn AwsKnowledgeBase#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#table_name AwsKnowledgeBase#table_name}
  */
  readonly tableName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationRdsConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class RdsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RdsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = undefined;
      this._databaseName = undefined;
      this._resourceArn = undefined;
      this._tableName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._databaseName = value.databaseName;
      this._resourceArn = value.resourceArn;
      this._tableName = value.tableName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationRdsConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationRdsConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class RdsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RdsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RdsConfigurationPropertyOutputReference {
    return new RdsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#metadata_field AwsKnowledgeBase#metadata_field}
  */
  readonly metadataField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#text_field AwsKnowledgeBase#text_field}
  */
  readonly textField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_field AwsKnowledgeBase#vector_field}
  */
  readonly vectorField?: string;
}
export class StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: true, required: false
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  public resetMetadataField() {
    this._metadataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: true, required: false
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  public resetTextField() {
    this._textField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: true, required: false
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  public resetVectorField() {
    this._vectorField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyOutputReference {
    return new StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisEnterpriseCloudConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn AwsKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#endpoint AwsKnowledgeBase#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_index_name AwsKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#field_mapping AwsKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty[] | cdktn.IResolvable;
}
export class RedisEnterpriseCloudConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RedisEnterpriseCloudConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisEnterpriseCloudConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = undefined;
      this._endpoint = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._endpoint = value.endpoint;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingPropertyList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: StorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingProperty[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class RedisEnterpriseCloudConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RedisEnterpriseCloudConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RedisEnterpriseCloudConfigurationPropertyOutputReference {
    return new RedisEnterpriseCloudConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3VectorsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#index_arn AwsKnowledgeBase#index_arn}
  */
  readonly indexArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#index_name AwsKnowledgeBase#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#vector_bucket_arn AwsKnowledgeBase#vector_bucket_arn}
  */
  readonly vectorBucketArn?: string;
}
export class S3VectorsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3VectorsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexArn = this._indexArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._vectorBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorBucketArn = this._vectorBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3VectorsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexArn = undefined;
      this._indexName = undefined;
      this._vectorBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexArn = value.indexArn;
      this._indexName = value.indexName;
      this._vectorBucketArn = value.vectorBucketArn;
    }
  }

  // index_arn - computed: false, optional: true, required: false
  private _indexArn?: string; 
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }
  public set indexArn(value: string) {
    this._indexArn = value;
  }
  public resetIndexArn() {
    this._indexArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexArnInput() {
    return this._indexArn;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // vector_bucket_arn - computed: false, optional: true, required: false
  private _vectorBucketArn?: string; 
  public get vectorBucketArn() {
    return this.getStringAttribute('vector_bucket_arn');
  }
  public set vectorBucketArn(value: string) {
    this._vectorBucketArn = value;
  }
  public resetVectorBucketArn() {
    this._vectorBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorBucketArnInput() {
    return this._vectorBucketArn;
  }
}

export class S3VectorsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3VectorsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3VectorsConfigurationPropertyOutputReference {
    return new S3VectorsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#type AwsKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * mongo_db_atlas_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#mongo_db_atlas_configuration AwsKnowledgeBase#mongo_db_atlas_configuration}
  */
  readonly mongoDbAtlasConfiguration?: MongoDbAtlasConfigurationProperty[] | cdktn.IResolvable;
  /**
  * neptune_analytics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#neptune_analytics_configuration AwsKnowledgeBase#neptune_analytics_configuration}
  */
  readonly neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * opensearch_managed_cluster_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#opensearch_managed_cluster_configuration AwsKnowledgeBase#opensearch_managed_cluster_configuration}
  */
  readonly opensearchManagedClusterConfiguration?: OpensearchManagedClusterConfigurationProperty[] | cdktn.IResolvable;
  /**
  * opensearch_serverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#opensearch_serverless_configuration AwsKnowledgeBase#opensearch_serverless_configuration}
  */
  readonly opensearchServerlessConfiguration?: OpensearchServerlessConfigurationProperty[] | cdktn.IResolvable;
  /**
  * pinecone_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#pinecone_configuration AwsKnowledgeBase#pinecone_configuration}
  */
  readonly pineconeConfiguration?: PineconeConfigurationProperty[] | cdktn.IResolvable;
  /**
  * rds_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#rds_configuration AwsKnowledgeBase#rds_configuration}
  */
  readonly rdsConfiguration?: RdsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * redis_enterprise_cloud_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#redis_enterprise_cloud_configuration AwsKnowledgeBase#redis_enterprise_cloud_configuration}
  */
  readonly redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfigurationProperty[] | cdktn.IResolvable;
  /**
  * s3_vectors_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#s3_vectors_configuration AwsKnowledgeBase#s3_vectors_configuration}
  */
  readonly s3VectorsConfiguration?: S3VectorsConfigurationProperty[] | cdktn.IResolvable;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._mongoDbAtlasConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbAtlasConfiguration = this._mongoDbAtlasConfiguration?.internalValue;
    }
    if (this._neptuneAnalyticsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneAnalyticsConfiguration = this._neptuneAnalyticsConfiguration?.internalValue;
    }
    if (this._opensearchManagedClusterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchManagedClusterConfiguration = this._opensearchManagedClusterConfiguration?.internalValue;
    }
    if (this._opensearchServerlessConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchServerlessConfiguration = this._opensearchServerlessConfiguration?.internalValue;
    }
    if (this._pineconeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pineconeConfiguration = this._pineconeConfiguration?.internalValue;
    }
    if (this._rdsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsConfiguration = this._rdsConfiguration?.internalValue;
    }
    if (this._redisEnterpriseCloudConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisEnterpriseCloudConfiguration = this._redisEnterpriseCloudConfiguration?.internalValue;
    }
    if (this._s3VectorsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3VectorsConfiguration = this._s3VectorsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._mongoDbAtlasConfiguration.internalValue = undefined;
      this._neptuneAnalyticsConfiguration.internalValue = undefined;
      this._opensearchManagedClusterConfiguration.internalValue = undefined;
      this._opensearchServerlessConfiguration.internalValue = undefined;
      this._pineconeConfiguration.internalValue = undefined;
      this._rdsConfiguration.internalValue = undefined;
      this._redisEnterpriseCloudConfiguration.internalValue = undefined;
      this._s3VectorsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._mongoDbAtlasConfiguration.internalValue = value.mongoDbAtlasConfiguration;
      this._neptuneAnalyticsConfiguration.internalValue = value.neptuneAnalyticsConfiguration;
      this._opensearchManagedClusterConfiguration.internalValue = value.opensearchManagedClusterConfiguration;
      this._opensearchServerlessConfiguration.internalValue = value.opensearchServerlessConfiguration;
      this._pineconeConfiguration.internalValue = value.pineconeConfiguration;
      this._rdsConfiguration.internalValue = value.rdsConfiguration;
      this._redisEnterpriseCloudConfiguration.internalValue = value.redisEnterpriseCloudConfiguration;
      this._s3VectorsConfiguration.internalValue = value.s3VectorsConfiguration;
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

  // mongo_db_atlas_configuration - computed: false, optional: true, required: false
  private _mongoDbAtlasConfiguration = new MongoDbAtlasConfigurationPropertyList(this, "mongo_db_atlas_configuration", false);
  public get mongoDbAtlasConfiguration() {
    return this._mongoDbAtlasConfiguration;
  }
  public putMongoDbAtlasConfiguration(value: MongoDbAtlasConfigurationProperty[] | cdktn.IResolvable) {
    this._mongoDbAtlasConfiguration.internalValue = value;
  }
  public resetMongoDbAtlasConfiguration() {
    this._mongoDbAtlasConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbAtlasConfigurationInput() {
    return this._mongoDbAtlasConfiguration.internalValue;
  }

  // neptune_analytics_configuration - computed: false, optional: true, required: false
  private _neptuneAnalyticsConfiguration = new NeptuneAnalyticsConfigurationPropertyList(this, "neptune_analytics_configuration", false);
  public get neptuneAnalyticsConfiguration() {
    return this._neptuneAnalyticsConfiguration;
  }
  public putNeptuneAnalyticsConfiguration(value: NeptuneAnalyticsConfigurationProperty[] | cdktn.IResolvable) {
    this._neptuneAnalyticsConfiguration.internalValue = value;
  }
  public resetNeptuneAnalyticsConfiguration() {
    this._neptuneAnalyticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneAnalyticsConfigurationInput() {
    return this._neptuneAnalyticsConfiguration.internalValue;
  }

  // opensearch_managed_cluster_configuration - computed: false, optional: true, required: false
  private _opensearchManagedClusterConfiguration = new OpensearchManagedClusterConfigurationPropertyList(this, "opensearch_managed_cluster_configuration", false);
  public get opensearchManagedClusterConfiguration() {
    return this._opensearchManagedClusterConfiguration;
  }
  public putOpensearchManagedClusterConfiguration(value: OpensearchManagedClusterConfigurationProperty[] | cdktn.IResolvable) {
    this._opensearchManagedClusterConfiguration.internalValue = value;
  }
  public resetOpensearchManagedClusterConfiguration() {
    this._opensearchManagedClusterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchManagedClusterConfigurationInput() {
    return this._opensearchManagedClusterConfiguration.internalValue;
  }

  // opensearch_serverless_configuration - computed: false, optional: true, required: false
  private _opensearchServerlessConfiguration = new OpensearchServerlessConfigurationPropertyList(this, "opensearch_serverless_configuration", false);
  public get opensearchServerlessConfiguration() {
    return this._opensearchServerlessConfiguration;
  }
  public putOpensearchServerlessConfiguration(value: OpensearchServerlessConfigurationProperty[] | cdktn.IResolvable) {
    this._opensearchServerlessConfiguration.internalValue = value;
  }
  public resetOpensearchServerlessConfiguration() {
    this._opensearchServerlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchServerlessConfigurationInput() {
    return this._opensearchServerlessConfiguration.internalValue;
  }

  // pinecone_configuration - computed: false, optional: true, required: false
  private _pineconeConfiguration = new PineconeConfigurationPropertyList(this, "pinecone_configuration", false);
  public get pineconeConfiguration() {
    return this._pineconeConfiguration;
  }
  public putPineconeConfiguration(value: PineconeConfigurationProperty[] | cdktn.IResolvable) {
    this._pineconeConfiguration.internalValue = value;
  }
  public resetPineconeConfiguration() {
    this._pineconeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pineconeConfigurationInput() {
    return this._pineconeConfiguration.internalValue;
  }

  // rds_configuration - computed: false, optional: true, required: false
  private _rdsConfiguration = new RdsConfigurationPropertyList(this, "rds_configuration", false);
  public get rdsConfiguration() {
    return this._rdsConfiguration;
  }
  public putRdsConfiguration(value: RdsConfigurationProperty[] | cdktn.IResolvable) {
    this._rdsConfiguration.internalValue = value;
  }
  public resetRdsConfiguration() {
    this._rdsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsConfigurationInput() {
    return this._rdsConfiguration.internalValue;
  }

  // redis_enterprise_cloud_configuration - computed: false, optional: true, required: false
  private _redisEnterpriseCloudConfiguration = new RedisEnterpriseCloudConfigurationPropertyList(this, "redis_enterprise_cloud_configuration", false);
  public get redisEnterpriseCloudConfiguration() {
    return this._redisEnterpriseCloudConfiguration;
  }
  public putRedisEnterpriseCloudConfiguration(value: RedisEnterpriseCloudConfigurationProperty[] | cdktn.IResolvable) {
    this._redisEnterpriseCloudConfiguration.internalValue = value;
  }
  public resetRedisEnterpriseCloudConfiguration() {
    this._redisEnterpriseCloudConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisEnterpriseCloudConfigurationInput() {
    return this._redisEnterpriseCloudConfiguration.internalValue;
  }

  // s3_vectors_configuration - computed: false, optional: true, required: false
  private _s3VectorsConfiguration = new S3VectorsConfigurationPropertyList(this, "s3_vectors_configuration", false);
  public get s3VectorsConfiguration() {
    return this._s3VectorsConfiguration;
  }
  public putS3VectorsConfiguration(value: S3VectorsConfigurationProperty[] | cdktn.IResolvable) {
    this._s3VectorsConfiguration.internalValue = value;
  }
  public resetS3VectorsConfiguration() {
    this._s3VectorsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VectorsConfigurationInput() {
    return this._s3VectorsConfiguration.internalValue;
  }
}

export class StorageConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConfigurationPropertyOutputReference {
    return new StorageConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#create AwsKnowledgeBase#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#delete AwsKnowledgeBase#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_knowledge_base#update AwsKnowledgeBase#update}
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
