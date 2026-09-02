// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#description TfFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#id TfFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#kms_arn TfFlow#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#name TfFlow#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#region TfFlow#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#tags TfFlow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#tags_all TfFlow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * destination_flow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#destination_flow_config TfFlow#destination_flow_config}
  */
  readonly destinationFlowConfig: TfFlow.DestinationFlowConfigProperty[] | cdktn.IResolvable;
  /**
  * metadata_catalog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#metadata_catalog_config TfFlow#metadata_catalog_config}
  */
  readonly metadataCatalogConfig?: TfFlow.MetadataCatalogConfigProperty;
  /**
  * source_flow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#source_flow_config TfFlow#source_flow_config}
  */
  readonly sourceFlowConfig: TfFlow.SourceFlowConfigProperty;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#task TfFlow#task}
  */
  readonly task: TfFlow.TaskProperty[] | cdktn.IResolvable;
  /**
  * trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#trigger_config TfFlow#trigger_config}
  */
  readonly triggerConfig: TfFlow.TriggerConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow aws_appflow_flow}
*/
export class TfFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appflow_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfFlow to import
  * @param importFromId The id of the existing TfFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appflow_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow aws_appflow_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfFlowConfig
  */
  public constructor(scope: Construct, id: string, config: TfFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appflow_flow',
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
    this._kmsArn = config.kmsArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._destinationFlowConfig.internalValue = config.destinationFlowConfig;
    this._metadataCatalogConfig.internalValue = config.metadataCatalogConfig;
    this._sourceFlowConfig.internalValue = config.sourceFlowConfig;
    this._task.internalValue = config.task;
    this._triggerConfig.internalValue = config.triggerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // flow_status - computed: true, optional: false, required: false
  public get flowStatus() {
    return this.getStringAttribute('flow_status');
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

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
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

  // destination_flow_config - computed: false, optional: false, required: true
  private _destinationFlowConfig = new TfFlow.DestinationFlowConfigPropertyList(this, "destination_flow_config", false);
  public get destinationFlowConfig() {
    return this._destinationFlowConfig;
  }
  public putDestinationFlowConfig(value: TfFlow.DestinationFlowConfigProperty[] | cdktn.IResolvable) {
    this._destinationFlowConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFlowConfigInput() {
    return this._destinationFlowConfig.internalValue;
  }

  // metadata_catalog_config - computed: false, optional: true, required: false
  private _metadataCatalogConfig = new TfFlow.MetadataCatalogConfigPropertyOutputReference(this, "metadata_catalog_config");
  public get metadataCatalogConfig() {
    return this._metadataCatalogConfig;
  }
  public putMetadataCatalogConfig(value: TfFlow.MetadataCatalogConfigProperty) {
    this._metadataCatalogConfig.internalValue = value;
  }
  public resetMetadataCatalogConfig() {
    this._metadataCatalogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCatalogConfigInput() {
    return this._metadataCatalogConfig.internalValue;
  }

  // source_flow_config - computed: false, optional: false, required: true
  private _sourceFlowConfig = new TfFlow.SourceFlowConfigPropertyOutputReference(this, "source_flow_config");
  public get sourceFlowConfig() {
    return this._sourceFlowConfig;
  }
  public putSourceFlowConfig(value: TfFlow.SourceFlowConfigProperty) {
    this._sourceFlowConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFlowConfigInput() {
    return this._sourceFlowConfig.internalValue;
  }

  // task - computed: false, optional: false, required: true
  private _task = new TfFlow.TaskPropertyList(this, "task", true);
  public get task() {
    return this._task;
  }
  public putTask(value: TfFlow.TaskProperty[] | cdktn.IResolvable) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }

  // trigger_config - computed: false, optional: false, required: true
  private _triggerConfig = new TfFlow.TriggerConfigPropertyOutputReference(this, "trigger_config");
  public get triggerConfig() {
    return this._triggerConfig;
  }
  public putTriggerConfig(value: TfFlow.TriggerConfigProperty) {
    this._triggerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigInput() {
    return this._triggerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      kms_arn: cdktn.stringToTerraform(this._kmsArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      destination_flow_config: cdktn.listMapper(tfFlowDestinationFlowConfigPropertyToTerraform, true)(this._destinationFlowConfig.internalValue),
      metadata_catalog_config: tfFlowMetadataCatalogConfigPropertyToTerraform(this._metadataCatalogConfig.internalValue),
      source_flow_config: tfFlowSourceFlowConfigPropertyToTerraform(this._sourceFlowConfig.internalValue),
      task: cdktn.listMapper(tfFlowTaskPropertyToTerraform, true)(this._task.internalValue),
      trigger_config: tfFlowTriggerConfigPropertyToTerraform(this._triggerConfig.internalValue),
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
      kms_arn: {
        value: cdktn.stringToHclTerraform(this._kmsArn),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destination_flow_config: {
        value: cdktn.listMapperHcl(tfFlowDestinationFlowConfigPropertyToHclTerraform, true)(this._destinationFlowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlow.DestinationFlowConfigPropertyList",
      },
      metadata_catalog_config: {
        value: tfFlowMetadataCatalogConfigPropertyToHclTerraform(this._metadataCatalogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlow.MetadataCatalogConfigPropertyList",
      },
      source_flow_config: {
        value: tfFlowSourceFlowConfigPropertyToHclTerraform(this._sourceFlowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlow.SourceFlowConfigPropertyList",
      },
      task: {
        value: cdktn.listMapperHcl(tfFlowTaskPropertyToHclTerraform, true)(this._task.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfFlow.TaskPropertyList",
      },
      trigger_config: {
        value: tfFlowTriggerConfigPropertyToHclTerraform(this._triggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlow.TriggerConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customProperties),
    entity_name: cdktn.stringToTerraform(struct!.entityName),
    id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
    write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_name: {
      value: cdktn.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_field_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    write_operation_type: {
      value: cdktn.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowCustomerProfilesPropertyToTerraform(struct?: TfFlow.CustomerProfilesPropertyOutputReference | TfFlow.CustomerProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    object_type_name: cdktn.stringToTerraform(struct!.objectTypeName),
  }
}


export function tfFlowCustomerProfilesPropertyToHclTerraform(struct?: TfFlow.CustomerProfilesPropertyOutputReference | TfFlow.CustomerProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type_name: {
      value: cdktn.stringToHclTerraform(struct!.objectTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowEventBridgePropertyToTerraform(struct?: TfFlow.EventBridgePropertyOutputReference | TfFlow.EventBridgeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowEventBridgePropertyToHclTerraform(struct?: TfFlow.EventBridgePropertyOutputReference | TfFlow.EventBridgeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowHoneycodePropertyToTerraform(struct?: TfFlow.HoneycodePropertyOutputReference | TfFlow.HoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowHoneycodePropertyToHclTerraform(struct?: TfFlow.HoneycodePropertyOutputReference | TfFlow.HoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowLookoutMetricsPropertyToTerraform(struct?: TfFlow.LookoutMetricsPropertyOutputReference | TfFlow.LookoutMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfFlowLookoutMetricsPropertyToHclTerraform(struct?: TfFlow.LookoutMetricsPropertyOutputReference | TfFlow.LookoutMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowRedshiftPropertyToTerraform(struct?: TfFlow.RedshiftPropertyOutputReference | TfFlow.RedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    intermediate_bucket_name: cdktn.stringToTerraform(struct!.intermediateBucketName),
    object: cdktn.stringToTerraform(struct!.object),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowRedshiftPropertyToHclTerraform(struct?: TfFlow.RedshiftPropertyOutputReference | TfFlow.RedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intermediate_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.intermediateBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
    target_file_size: cdktn.numberToTerraform(struct!.targetFileSize),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_type: {
      value: cdktn.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_file_size: {
      value: cdktn.numberToHclTerraform(struct!.targetFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix_format: cdktn.stringToTerraform(struct!.prefixFormat),
    prefix_hierarchy: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prefixHierarchy),
    prefix_type: cdktn.stringToTerraform(struct!.prefixType),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix_format: {
      value: cdktn.stringToHclTerraform(struct!.prefixFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_hierarchy: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prefixHierarchy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_type: {
      value: cdktn.stringToHclTerraform(struct!.prefixType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_type: cdktn.stringToTerraform(struct!.fileType),
    preserve_source_data_typing: cdktn.booleanToTerraform(struct!.preserveSourceDataTyping),
    aggregation_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyToTerraform(struct!.aggregationConfig),
    prefix_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyToTerraform(struct!.prefixConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_source_data_typing: {
      value: cdktn.booleanToHclTerraform(struct!.preserveSourceDataTyping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct!.aggregationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyList",
    },
    prefix_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct!.prefixConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3PropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3PropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyToTerraform(struct!.s3OutputFormatConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3PropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3PropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesS3Property): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_format_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyToHclTerraform(struct!.s3OutputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_transfer_api: cdktn.stringToTerraform(struct!.dataTransferApi),
    id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
    object: cdktn.stringToTerraform(struct!.object),
    write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_transfer_api: {
      value: cdktn.stringToHclTerraform(struct!.dataTransferApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_field_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktn.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSuccessResponseHandlingConfigPropertyToTerraform(struct?: TfFlow.SuccessResponseHandlingConfigPropertyOutputReference | TfFlow.SuccessResponseHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
  }
}


export function tfFlowSuccessResponseHandlingConfigPropertyToHclTerraform(struct?: TfFlow.SuccessResponseHandlingConfigPropertyOutputReference | TfFlow.SuccessResponseHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
    object_path: cdktn.stringToTerraform(struct!.objectPath),
    write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
    success_response_handling_config: tfFlowSuccessResponseHandlingConfigPropertyToTerraform(struct!.successResponseHandlingConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id_field_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_path: {
      value: cdktn.stringToHclTerraform(struct!.objectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktn.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyList",
    },
    success_response_handling_config: {
      value: tfFlowSuccessResponseHandlingConfigPropertyToHclTerraform(struct!.successResponseHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SuccessResponseHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSnowflakePropertyToTerraform(struct?: TfFlow.SnowflakePropertyOutputReference | TfFlow.SnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    intermediate_bucket_name: cdktn.stringToTerraform(struct!.intermediateBucketName),
    object: cdktn.stringToTerraform(struct!.object),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowSnowflakePropertyToHclTerraform(struct?: TfFlow.SnowflakePropertyOutputReference | TfFlow.SnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intermediate_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.intermediateBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_type: {
      value: cdktn.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix_format: cdktn.stringToTerraform(struct!.prefixFormat),
    prefix_hierarchy: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prefixHierarchy),
    prefix_type: cdktn.stringToTerraform(struct!.prefixType),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix_format: {
      value: cdktn.stringToHclTerraform(struct!.prefixFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_hierarchy: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prefixHierarchy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_type: {
      value: cdktn.stringToHclTerraform(struct!.prefixType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_type: cdktn.stringToTerraform(struct!.fileType),
    aggregation_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToTerraform(struct!.aggregationConfig),
    prefix_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToTerraform(struct!.prefixConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct!.aggregationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyList",
    },
    prefix_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct!.prefixConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowUpsolverPropertyToTerraform(struct?: TfFlow.UpsolverPropertyOutputReference | TfFlow.UpsolverProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyToTerraform(struct!.s3OutputFormatConfig),
  }
}


export function tfFlowUpsolverPropertyToHclTerraform(struct?: TfFlow.UpsolverPropertyOutputReference | TfFlow.UpsolverProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_format_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyToHclTerraform(struct!.s3OutputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktn.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktn.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
    object: cdktn.stringToTerraform(struct!.object),
    write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    error_handling_config: tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
  }
}


export function tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyOutputReference | TfFlow.DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id_field_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktn.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationConnectorPropertiesPropertyToTerraform(struct?: TfFlow.DestinationConnectorPropertiesPropertyOutputReference | TfFlow.DestinationConnectorPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_connector: tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyToTerraform(struct!.customConnector),
    customer_profiles: tfFlowCustomerProfilesPropertyToTerraform(struct!.customerProfiles),
    event_bridge: tfFlowEventBridgePropertyToTerraform(struct!.eventBridge),
    honeycode: tfFlowHoneycodePropertyToTerraform(struct!.honeycode),
    lookout_metrics: tfFlowLookoutMetricsPropertyToTerraform(struct!.lookoutMetrics),
    marketo: tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyToTerraform(struct!.marketo),
    redshift: tfFlowRedshiftPropertyToTerraform(struct!.redshift),
    s3: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3PropertyToTerraform(struct!.s3),
    salesforce: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyToTerraform(struct!.salesforce),
    sapo_data: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyToTerraform(struct!.sapoData),
    snowflake: tfFlowSnowflakePropertyToTerraform(struct!.snowflake),
    upsolver: tfFlowUpsolverPropertyToTerraform(struct!.upsolver),
    zendesk: tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyToTerraform(struct!.zendesk),
  }
}


export function tfFlowDestinationConnectorPropertiesPropertyToHclTerraform(struct?: TfFlow.DestinationConnectorPropertiesPropertyOutputReference | TfFlow.DestinationConnectorPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_connector: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyList",
    },
    customer_profiles: {
      value: tfFlowCustomerProfilesPropertyToHclTerraform(struct!.customerProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerProfilesPropertyList",
    },
    event_bridge: {
      value: tfFlowEventBridgePropertyToHclTerraform(struct!.eventBridge),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgePropertyList",
    },
    honeycode: {
      value: tfFlowHoneycodePropertyToHclTerraform(struct!.honeycode),
      isBlock: true,
      type: "list",
      storageClassType: "HoneycodePropertyList",
    },
    lookout_metrics: {
      value: tfFlowLookoutMetricsPropertyToHclTerraform(struct!.lookoutMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "LookoutMetricsPropertyList",
    },
    marketo: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyList",
    },
    redshift: {
      value: tfFlowRedshiftPropertyToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftPropertyList",
    },
    s3: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesS3PropertyList",
    },
    salesforce: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyList",
    },
    sapo_data: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyList",
    },
    snowflake: {
      value: tfFlowSnowflakePropertyToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakePropertyList",
    },
    upsolver: {
      value: tfFlowUpsolverPropertyToHclTerraform(struct!.upsolver),
      isBlock: true,
      type: "list",
      storageClassType: "UpsolverPropertyList",
    },
    zendesk: {
      value: tfFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDestinationFlowConfigPropertyToTerraform(struct?: TfFlow.DestinationFlowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    connector_profile_name: cdktn.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktn.stringToTerraform(struct!.connectorType),
    destination_connector_properties: tfFlowDestinationConnectorPropertiesPropertyToTerraform(struct!.destinationConnectorProperties),
  }
}


export function tfFlowDestinationFlowConfigPropertyToHclTerraform(struct?: TfFlow.DestinationFlowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_profile_name: {
      value: cdktn.stringToHclTerraform(struct!.connectorProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktn.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_connector_properties: {
      value: tfFlowDestinationConnectorPropertiesPropertyToHclTerraform(struct!.destinationConnectorProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationConnectorPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowGlueDataCatalogPropertyToTerraform(struct?: TfFlow.GlueDataCatalogPropertyOutputReference | TfFlow.GlueDataCatalogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_prefix: cdktn.stringToTerraform(struct!.tablePrefix),
  }
}


export function tfFlowGlueDataCatalogPropertyToHclTerraform(struct?: TfFlow.GlueDataCatalogPropertyOutputReference | TfFlow.GlueDataCatalogProperty): any {
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowMetadataCatalogConfigPropertyToTerraform(struct?: TfFlow.MetadataCatalogConfigPropertyOutputReference | TfFlow.MetadataCatalogConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    glue_data_catalog: tfFlowGlueDataCatalogPropertyToTerraform(struct!.glueDataCatalog),
  }
}


export function tfFlowMetadataCatalogConfigPropertyToHclTerraform(struct?: TfFlow.MetadataCatalogConfigPropertyOutputReference | TfFlow.MetadataCatalogConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    glue_data_catalog: {
      value: tfFlowGlueDataCatalogPropertyToHclTerraform(struct!.glueDataCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "GlueDataCatalogPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowIncrementalPullConfigPropertyToTerraform(struct?: TfFlow.IncrementalPullConfigPropertyOutputReference | TfFlow.IncrementalPullConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datetime_type_field_name: cdktn.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}


export function tfFlowIncrementalPullConfigPropertyToHclTerraform(struct?: TfFlow.IncrementalPullConfigPropertyOutputReference | TfFlow.IncrementalPullConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datetime_type_field_name: {
      value: cdktn.stringToHclTerraform(struct!.datetimeTypeFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowAmplitudePropertyToTerraform(struct?: TfFlow.AmplitudePropertyOutputReference | TfFlow.AmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowAmplitudePropertyToHclTerraform(struct?: TfFlow.AmplitudePropertyOutputReference | TfFlow.AmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customProperties),
    entity_name: cdktn.stringToTerraform(struct!.entityName),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_name: {
      value: cdktn.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDatadogPropertyToTerraform(struct?: TfFlow.DatadogPropertyOutputReference | TfFlow.DatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowDatadogPropertyToHclTerraform(struct?: TfFlow.DatadogPropertyOutputReference | TfFlow.DatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDynatracePropertyToTerraform(struct?: TfFlow.DynatracePropertyOutputReference | TfFlow.DynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowDynatracePropertyToHclTerraform(struct?: TfFlow.DynatracePropertyOutputReference | TfFlow.DynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowGoogleAnalyticsPropertyToTerraform(struct?: TfFlow.GoogleAnalyticsPropertyOutputReference | TfFlow.GoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowGoogleAnalyticsPropertyToHclTerraform(struct?: TfFlow.GoogleAnalyticsPropertyOutputReference | TfFlow.GoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowInforNexusPropertyToTerraform(struct?: TfFlow.InforNexusPropertyOutputReference | TfFlow.InforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowInforNexusPropertyToHclTerraform(struct?: TfFlow.InforNexusPropertyOutputReference | TfFlow.InforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesMarketoPropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesMarketoPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesMarketoPropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesMarketoPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowS3InputFormatConfigPropertyToTerraform(struct?: TfFlow.S3InputFormatConfigPropertyOutputReference | TfFlow.S3InputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_input_file_type: cdktn.stringToTerraform(struct!.s3InputFileType),
  }
}


export function tfFlowS3InputFormatConfigPropertyToHclTerraform(struct?: TfFlow.S3InputFormatConfigPropertyOutputReference | TfFlow.S3InputFormatConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_input_file_type: {
      value: cdktn.stringToHclTerraform(struct!.s3InputFileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesS3PropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesS3PropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesS3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    s3_input_format_config: tfFlowS3InputFormatConfigPropertyToTerraform(struct!.s3InputFormatConfig),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesS3PropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesS3PropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesS3Property): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_format_config: {
      value: tfFlowS3InputFormatConfigPropertyToHclTerraform(struct!.s3InputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "S3InputFormatConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesSalesforcePropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesSalesforcePropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_transfer_api: cdktn.stringToTerraform(struct!.dataTransferApi),
    enable_dynamic_field_update: cdktn.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktn.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesSalesforcePropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesSalesforcePropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_transfer_api: {
      value: cdktn.stringToHclTerraform(struct!.dataTransferApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dynamic_field_update: {
      value: cdktn.booleanToHclTerraform(struct!.enableDynamicFieldUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_deleted_records: {
      value: cdktn.booleanToHclTerraform(struct!.includeDeletedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowPaginationConfigPropertyToTerraform(struct?: TfFlow.PaginationConfigPropertyOutputReference | TfFlow.PaginationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_page_size: cdktn.numberToTerraform(struct!.maxPageSize),
  }
}


export function tfFlowPaginationConfigPropertyToHclTerraform(struct?: TfFlow.PaginationConfigPropertyOutputReference | TfFlow.PaginationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_page_size: {
      value: cdktn.numberToHclTerraform(struct!.maxPageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowParallelismConfigPropertyToTerraform(struct?: TfFlow.ParallelismConfigPropertyOutputReference | TfFlow.ParallelismConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_page_size: cdktn.numberToTerraform(struct!.maxPageSize),
  }
}


export function tfFlowParallelismConfigPropertyToHclTerraform(struct?: TfFlow.ParallelismConfigPropertyOutputReference | TfFlow.ParallelismConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_page_size: {
      value: cdktn.numberToHclTerraform(struct!.maxPageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesSapoDataPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_path: cdktn.stringToTerraform(struct!.objectPath),
    pagination_config: tfFlowPaginationConfigPropertyToTerraform(struct!.paginationConfig),
    parallelism_config: tfFlowParallelismConfigPropertyToTerraform(struct!.parallelismConfig),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesSapoDataPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_path: {
      value: cdktn.stringToHclTerraform(struct!.objectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pagination_config: {
      value: tfFlowPaginationConfigPropertyToHclTerraform(struct!.paginationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PaginationConfigPropertyList",
    },
    parallelism_config: {
      value: tfFlowParallelismConfigPropertyToHclTerraform(struct!.parallelismConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ParallelismConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowServiceNowPropertyToTerraform(struct?: TfFlow.ServiceNowPropertyOutputReference | TfFlow.ServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowServiceNowPropertyToHclTerraform(struct?: TfFlow.ServiceNowPropertyOutputReference | TfFlow.ServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSingularPropertyToTerraform(struct?: TfFlow.SingularPropertyOutputReference | TfFlow.SingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowSingularPropertyToHclTerraform(struct?: TfFlow.SingularPropertyOutputReference | TfFlow.SingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSlackPropertyToTerraform(struct?: TfFlow.SlackPropertyOutputReference | TfFlow.SlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowSlackPropertyToHclTerraform(struct?: TfFlow.SlackPropertyOutputReference | TfFlow.SlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowTrendmicroPropertyToTerraform(struct?: TfFlow.TrendmicroPropertyOutputReference | TfFlow.TrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowTrendmicroPropertyToHclTerraform(struct?: TfFlow.TrendmicroPropertyOutputReference | TfFlow.TrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowVeevaPropertyToTerraform(struct?: TfFlow.VeevaPropertyOutputReference | TfFlow.VeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_type: cdktn.stringToTerraform(struct!.documentType),
    include_all_versions: cdktn.booleanToTerraform(struct!.includeAllVersions),
    include_renditions: cdktn.booleanToTerraform(struct!.includeRenditions),
    include_source_files: cdktn.booleanToTerraform(struct!.includeSourceFiles),
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowVeevaPropertyToHclTerraform(struct?: TfFlow.VeevaPropertyOutputReference | TfFlow.VeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_type: {
      value: cdktn.stringToHclTerraform(struct!.documentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_all_versions: {
      value: cdktn.booleanToHclTerraform(struct!.includeAllVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_renditions: {
      value: cdktn.booleanToHclTerraform(struct!.includeRenditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_source_files: {
      value: cdktn.booleanToHclTerraform(struct!.includeSourceFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesZendeskPropertyToTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesZendeskPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function tfFlowSourceFlowConfigSourceConnectorPropertiesZendeskPropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigSourceConnectorPropertiesZendeskPropertyOutputReference | TfFlow.SourceFlowConfigSourceConnectorPropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceConnectorPropertiesPropertyToTerraform(struct?: TfFlow.SourceConnectorPropertiesPropertyOutputReference | TfFlow.SourceConnectorPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amplitude: tfFlowAmplitudePropertyToTerraform(struct!.amplitude),
    custom_connector: tfFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyToTerraform(struct!.customConnector),
    datadog: tfFlowDatadogPropertyToTerraform(struct!.datadog),
    dynatrace: tfFlowDynatracePropertyToTerraform(struct!.dynatrace),
    google_analytics: tfFlowGoogleAnalyticsPropertyToTerraform(struct!.googleAnalytics),
    infor_nexus: tfFlowInforNexusPropertyToTerraform(struct!.inforNexus),
    marketo: tfFlowSourceFlowConfigSourceConnectorPropertiesMarketoPropertyToTerraform(struct!.marketo),
    s3: tfFlowSourceFlowConfigSourceConnectorPropertiesS3PropertyToTerraform(struct!.s3),
    salesforce: tfFlowSourceFlowConfigSourceConnectorPropertiesSalesforcePropertyToTerraform(struct!.salesforce),
    sapo_data: tfFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPropertyToTerraform(struct!.sapoData),
    service_now: tfFlowServiceNowPropertyToTerraform(struct!.serviceNow),
    singular: tfFlowSingularPropertyToTerraform(struct!.singular),
    slack: tfFlowSlackPropertyToTerraform(struct!.slack),
    trendmicro: tfFlowTrendmicroPropertyToTerraform(struct!.trendmicro),
    veeva: tfFlowVeevaPropertyToTerraform(struct!.veeva),
    zendesk: tfFlowSourceFlowConfigSourceConnectorPropertiesZendeskPropertyToTerraform(struct!.zendesk),
  }
}


export function tfFlowSourceConnectorPropertiesPropertyToHclTerraform(struct?: TfFlow.SourceConnectorPropertiesPropertyOutputReference | TfFlow.SourceConnectorPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amplitude: {
      value: tfFlowAmplitudePropertyToHclTerraform(struct!.amplitude),
      isBlock: true,
      type: "list",
      storageClassType: "AmplitudePropertyList",
    },
    custom_connector: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyList",
    },
    datadog: {
      value: tfFlowDatadogPropertyToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "DatadogPropertyList",
    },
    dynatrace: {
      value: tfFlowDynatracePropertyToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "DynatracePropertyList",
    },
    google_analytics: {
      value: tfFlowGoogleAnalyticsPropertyToHclTerraform(struct!.googleAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAnalyticsPropertyList",
    },
    infor_nexus: {
      value: tfFlowInforNexusPropertyToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "list",
      storageClassType: "InforNexusPropertyList",
    },
    marketo: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesMarketoPropertyToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesMarketoPropertyList",
    },
    s3: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesS3PropertyList",
    },
    salesforce: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesSalesforcePropertyToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesSalesforcePropertyList",
    },
    sapo_data: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPropertyToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesSapoDataPropertyList",
    },
    service_now: {
      value: tfFlowServiceNowPropertyToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNowPropertyList",
    },
    singular: {
      value: tfFlowSingularPropertyToHclTerraform(struct!.singular),
      isBlock: true,
      type: "list",
      storageClassType: "SingularPropertyList",
    },
    slack: {
      value: tfFlowSlackPropertyToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "SlackPropertyList",
    },
    trendmicro: {
      value: tfFlowTrendmicroPropertyToHclTerraform(struct!.trendmicro),
      isBlock: true,
      type: "list",
      storageClassType: "TrendmicroPropertyList",
    },
    veeva: {
      value: tfFlowVeevaPropertyToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "list",
      storageClassType: "VeevaPropertyList",
    },
    zendesk: {
      value: tfFlowSourceFlowConfigSourceConnectorPropertiesZendeskPropertyToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFlowConfigSourceConnectorPropertiesZendeskPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowSourceFlowConfigPropertyToTerraform(struct?: TfFlow.SourceFlowConfigPropertyOutputReference | TfFlow.SourceFlowConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    connector_profile_name: cdktn.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktn.stringToTerraform(struct!.connectorType),
    incremental_pull_config: tfFlowIncrementalPullConfigPropertyToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: tfFlowSourceConnectorPropertiesPropertyToTerraform(struct!.sourceConnectorProperties),
  }
}


export function tfFlowSourceFlowConfigPropertyToHclTerraform(struct?: TfFlow.SourceFlowConfigPropertyOutputReference | TfFlow.SourceFlowConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_profile_name: {
      value: cdktn.stringToHclTerraform(struct!.connectorProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktn.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incremental_pull_config: {
      value: tfFlowIncrementalPullConfigPropertyToHclTerraform(struct!.incrementalPullConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IncrementalPullConfigPropertyList",
    },
    source_connector_properties: {
      value: tfFlowSourceConnectorPropertiesPropertyToHclTerraform(struct!.sourceConnectorProperties),
      isBlock: true,
      type: "list",
      storageClassType: "SourceConnectorPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowConnectorOperatorPropertyToTerraform(struct?: TfFlow.ConnectorOperatorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amplitude: cdktn.stringToTerraform(struct!.amplitude),
    custom_connector: cdktn.stringToTerraform(struct!.customConnector),
    datadog: cdktn.stringToTerraform(struct!.datadog),
    dynatrace: cdktn.stringToTerraform(struct!.dynatrace),
    google_analytics: cdktn.stringToTerraform(struct!.googleAnalytics),
    infor_nexus: cdktn.stringToTerraform(struct!.inforNexus),
    marketo: cdktn.stringToTerraform(struct!.marketo),
    s3: cdktn.stringToTerraform(struct!.s3),
    salesforce: cdktn.stringToTerraform(struct!.salesforce),
    sapo_data: cdktn.stringToTerraform(struct!.sapoData),
    service_now: cdktn.stringToTerraform(struct!.serviceNow),
    singular: cdktn.stringToTerraform(struct!.singular),
    slack: cdktn.stringToTerraform(struct!.slack),
    trendmicro: cdktn.stringToTerraform(struct!.trendmicro),
    veeva: cdktn.stringToTerraform(struct!.veeva),
    zendesk: cdktn.stringToTerraform(struct!.zendesk),
  }
}


export function tfFlowConnectorOperatorPropertyToHclTerraform(struct?: TfFlow.ConnectorOperatorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amplitude: {
      value: cdktn.stringToHclTerraform(struct!.amplitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_connector: {
      value: cdktn.stringToHclTerraform(struct!.customConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog: {
      value: cdktn.stringToHclTerraform(struct!.datadog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynatrace: {
      value: cdktn.stringToHclTerraform(struct!.dynatrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_analytics: {
      value: cdktn.stringToHclTerraform(struct!.googleAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infor_nexus: {
      value: cdktn.stringToHclTerraform(struct!.inforNexus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketo: {
      value: cdktn.stringToHclTerraform(struct!.marketo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktn.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salesforce: {
      value: cdktn.stringToHclTerraform(struct!.salesforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sapo_data: {
      value: cdktn.stringToHclTerraform(struct!.sapoData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_now: {
      value: cdktn.stringToHclTerraform(struct!.serviceNow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    singular: {
      value: cdktn.stringToHclTerraform(struct!.singular),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack: {
      value: cdktn.stringToHclTerraform(struct!.slack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trendmicro: {
      value: cdktn.stringToHclTerraform(struct!.trendmicro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    veeva: {
      value: cdktn.stringToHclTerraform(struct!.veeva),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zendesk: {
      value: cdktn.stringToHclTerraform(struct!.zendesk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowTaskPropertyToTerraform(struct?: TfFlow.TaskProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_field: cdktn.stringToTerraform(struct!.destinationField),
    source_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceFields),
    task_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.taskProperties),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    connector_operator: cdktn.listMapper(tfFlowConnectorOperatorPropertyToTerraform, true)(struct!.connectorOperator),
  }
}


export function tfFlowTaskPropertyToHclTerraform(struct?: TfFlow.TaskProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_field: {
      value: cdktn.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.taskProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_operator: {
      value: cdktn.listMapperHcl(tfFlowConnectorOperatorPropertyToHclTerraform, true)(struct!.connectorOperator),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorOperatorPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowScheduledPropertyToTerraform(struct?: TfFlow.ScheduledPropertyOutputReference | TfFlow.ScheduledProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_pull_mode: cdktn.stringToTerraform(struct!.dataPullMode),
    first_execution_from: cdktn.stringToTerraform(struct!.firstExecutionFrom),
    schedule_end_time: cdktn.stringToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    schedule_offset: cdktn.numberToTerraform(struct!.scheduleOffset),
    schedule_start_time: cdktn.stringToTerraform(struct!.scheduleStartTime),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function tfFlowScheduledPropertyToHclTerraform(struct?: TfFlow.ScheduledPropertyOutputReference | TfFlow.ScheduledProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_pull_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataPullMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_execution_from: {
      value: cdktn.stringToHclTerraform(struct!.firstExecutionFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_end_time: {
      value: cdktn.stringToHclTerraform(struct!.scheduleEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_offset: {
      value: cdktn.numberToHclTerraform(struct!.scheduleOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_start_time: {
      value: cdktn.stringToHclTerraform(struct!.scheduleStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowTriggerPropertiesPropertyToTerraform(struct?: TfFlow.TriggerPropertiesPropertyOutputReference | TfFlow.TriggerPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scheduled: tfFlowScheduledPropertyToTerraform(struct!.scheduled),
  }
}


export function tfFlowTriggerPropertiesPropertyToHclTerraform(struct?: TfFlow.TriggerPropertiesPropertyOutputReference | TfFlow.TriggerPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scheduled: {
      value: tfFlowScheduledPropertyToHclTerraform(struct!.scheduled),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduledPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowTriggerConfigPropertyToTerraform(struct?: TfFlow.TriggerConfigPropertyOutputReference | TfFlow.TriggerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trigger_type: cdktn.stringToTerraform(struct!.triggerType),
    trigger_properties: tfFlowTriggerPropertiesPropertyToTerraform(struct!.triggerProperties),
  }
}


export function tfFlowTriggerConfigPropertyToHclTerraform(struct?: TfFlow.TriggerConfigPropertyOutputReference | TfFlow.TriggerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trigger_type: {
      value: cdktn.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_properties: {
      value: tfFlowTriggerPropertiesPropertyToHclTerraform(struct!.triggerProperties),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfFlow {
export interface DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#custom_properties TfFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#entity_name TfFlow#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#id_field_names TfFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#write_operation_type TfFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProperties = undefined;
      this._entityName = undefined;
      this._idFieldNames = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProperties = value.customProperties;
      this._entityName = value.entityName;
      this._idFieldNames = value.idFieldNames;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface CustomerProfilesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#domain_name TfFlow#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object_type_name TfFlow#object_type_name}
  */
  readonly objectTypeName?: string;
}
export class CustomerProfilesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerProfilesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._objectTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTypeName = this._objectTypeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerProfilesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._objectTypeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._objectTypeName = value.objectTypeName;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // object_type_name - computed: false, optional: true, required: false
  private _objectTypeName?: string; 
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  public resetObjectTypeName() {
    this._objectTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface EventBridgeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty;
}
export class EventBridgePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface HoneycodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty;
}
export class HoneycodePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HoneycodeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HoneycodeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface LookoutMetricsProperty {
}
export class LookoutMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookoutMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookoutMetricsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface RedshiftProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#intermediate_bucket_name TfFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty;
}
export class RedshiftPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._intermediateBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateBucketName = this._intermediateBucketName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketPrefix = undefined;
      this._intermediateBucketName = undefined;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketPrefix = value.bucketPrefix;
      this._intermediateBucketName = value.intermediateBucketName;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // intermediate_bucket_name - computed: false, optional: false, required: true
  private _intermediateBucketName?: string; 
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }
  public set intermediateBucketName(value: string) {
    this._intermediateBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateBucketNameInput() {
    return this._intermediateBucketName;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#aggregation_type TfFlow#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#target_file_size TfFlow#target_file_size}
  */
  readonly targetFileSize?: number;
}
export class DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._targetFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFileSize = this._targetFileSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._targetFileSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._targetFileSize = value.targetFileSize;
    }
  }

  // aggregation_type - computed: true, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // target_file_size - computed: true, optional: true, required: false
  private _targetFileSize?: number; 
  public get targetFileSize() {
    return this.getNumberAttribute('target_file_size');
  }
  public set targetFileSize(value: number) {
    this._targetFileSize = value;
  }
  public resetTargetFileSize() {
    this._targetFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeInput() {
    return this._targetFileSize;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_format TfFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_hierarchy TfFlow#prefix_hierarchy}
  */
  readonly prefixHierarchy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_type TfFlow#prefix_type}
  */
  readonly prefixType?: string;
}
export class DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFormat = this._prefixFormat;
    }
    if (this._prefixHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHierarchy = this._prefixHierarchy;
    }
    if (this._prefixType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixType = this._prefixType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixFormat = undefined;
      this._prefixHierarchy = undefined;
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
      this._prefixHierarchy = value.prefixHierarchy;
      this._prefixType = value.prefixType;
    }
  }

  // prefix_format - computed: false, optional: true, required: false
  private _prefixFormat?: string; 
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }
  public set prefixFormat(value: string) {
    this._prefixFormat = value;
  }
  public resetPrefixFormat() {
    this._prefixFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFormatInput() {
    return this._prefixFormat;
  }

  // prefix_hierarchy - computed: true, optional: true, required: false
  private _prefixHierarchy?: string[]; 
  public get prefixHierarchy() {
    return this.getListAttribute('prefix_hierarchy');
  }
  public set prefixHierarchy(value: string[]) {
    this._prefixHierarchy = value;
  }
  public resetPrefixHierarchy() {
    this._prefixHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHierarchyInput() {
    return this._prefixHierarchy;
  }

  // prefix_type - computed: false, optional: true, required: false
  private _prefixType?: string; 
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
  public set prefixType(value: string) {
    this._prefixType = value;
  }
  public resetPrefixType() {
    this._prefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixTypeInput() {
    return this._prefixType;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#file_type TfFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#preserve_source_data_typing TfFlow#preserve_source_data_typing}
  */
  readonly preserveSourceDataTyping?: boolean | cdktn.IResolvable;
  /**
  * aggregation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#aggregation_config TfFlow#aggregation_config}
  */
  readonly aggregationConfig?: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty;
  /**
  * prefix_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_config TfFlow#prefix_config}
  */
  readonly prefixConfig?: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._preserveSourceDataTyping !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSourceDataTyping = this._preserveSourceDataTyping;
    }
    if (this._aggregationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
    }
    if (this._prefixConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileType = undefined;
      this._preserveSourceDataTyping = undefined;
      this._aggregationConfig.internalValue = undefined;
      this._prefixConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileType = value.fileType;
      this._preserveSourceDataTyping = value.preserveSourceDataTyping;
      this._aggregationConfig.internalValue = value.aggregationConfig;
      this._prefixConfig.internalValue = value.prefixConfig;
    }
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // preserve_source_data_typing - computed: true, optional: true, required: false
  private _preserveSourceDataTyping?: boolean | cdktn.IResolvable; 
  public get preserveSourceDataTyping() {
    return this.getBooleanAttribute('preserve_source_data_typing');
  }
  public set preserveSourceDataTyping(value: boolean | cdktn.IResolvable) {
    this._preserveSourceDataTyping = value;
  }
  public resetPreserveSourceDataTyping() {
    this._preserveSourceDataTyping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceDataTypingInput() {
    return this._preserveSourceDataTyping;
  }

  // aggregation_config - computed: false, optional: true, required: false
  private _aggregationConfig = new DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigPropertyOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }
  public putAggregationConfig(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigProperty) {
    this._aggregationConfig.internalValue = value;
  }
  public resetAggregationConfig() {
    this._aggregationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationConfigInput() {
    return this._aggregationConfig.internalValue;
  }

  // prefix_config - computed: false, optional: true, required: false
  private _prefixConfig = new DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigPropertyOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }
  public putPrefixConfig(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigProperty) {
    this._prefixConfig.internalValue = value;
  }
  public resetPrefixConfig() {
    this._prefixConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixConfigInput() {
    return this._prefixConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3_output_format_config TfFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig?: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesS3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesS3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3OutputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesS3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3OutputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
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

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_output_format_config - computed: false, optional: true, required: false
  private _s3OutputFormatConfig = new DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPropertyOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
  public putS3OutputFormatConfig(value: DestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigProperty) {
    this._s3OutputFormatConfig.internalValue = value;
  }
  public resetS3OutputFormatConfig() {
    this._s3OutputFormatConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputFormatConfigInput() {
    return this._s3OutputFormatConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#data_transfer_api TfFlow#data_transfer_api}
  */
  readonly dataTransferApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#id_field_names TfFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#write_operation_type TfFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransferApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferApi = this._dataTransferApi;
    }
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransferApi = undefined;
      this._idFieldNames = undefined;
      this._object = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransferApi = value.dataTransferApi;
      this._idFieldNames = value.idFieldNames;
      this._object = value.object;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // data_transfer_api - computed: false, optional: true, required: false
  private _dataTransferApi?: string; 
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
  }
  public set dataTransferApi(value: string) {
    this._dataTransferApi = value;
  }
  public resetDataTransferApi() {
    this._dataTransferApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferApiInput() {
    return this._dataTransferApi;
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface SuccessResponseHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
}
export class SuccessResponseHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SuccessResponseHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SuccessResponseHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#id_field_names TfFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object_path TfFlow#object_path}
  */
  readonly objectPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#write_operation_type TfFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty;
  /**
  * success_response_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#success_response_handling_config TfFlow#success_response_handling_config}
  */
  readonly successResponseHandlingConfig?: SuccessResponseHandlingConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._objectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPath = this._objectPath;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    if (this._successResponseHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successResponseHandlingConfig = this._successResponseHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idFieldNames = undefined;
      this._objectPath = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
      this._successResponseHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idFieldNames = value.idFieldNames;
      this._objectPath = value.objectPath;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
      this._successResponseHandlingConfig.internalValue = value.successResponseHandlingConfig;
    }
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object_path - computed: false, optional: false, required: true
  private _objectPath?: string; 
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }
  public set objectPath(value: string) {
    this._objectPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPathInput() {
    return this._objectPath;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }

  // success_response_handling_config - computed: false, optional: true, required: false
  private _successResponseHandlingConfig = new SuccessResponseHandlingConfigPropertyOutputReference(this, "success_response_handling_config");
  public get successResponseHandlingConfig() {
    return this._successResponseHandlingConfig;
  }
  public putSuccessResponseHandlingConfig(value: SuccessResponseHandlingConfigProperty) {
    this._successResponseHandlingConfig.internalValue = value;
  }
  public resetSuccessResponseHandlingConfig() {
    this._successResponseHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successResponseHandlingConfigInput() {
    return this._successResponseHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface SnowflakeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#intermediate_bucket_name TfFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty;
}
export class SnowflakePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._intermediateBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateBucketName = this._intermediateBucketName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketPrefix = undefined;
      this._intermediateBucketName = undefined;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketPrefix = value.bucketPrefix;
      this._intermediateBucketName = value.intermediateBucketName;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // intermediate_bucket_name - computed: false, optional: false, required: true
  private _intermediateBucketName?: string; 
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }
  public set intermediateBucketName(value: string) {
    this._intermediateBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateBucketNameInput() {
    return this._intermediateBucketName;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#aggregation_type TfFlow#aggregation_type}
  */
  readonly aggregationType?: string;
}
export class DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
    }
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_format TfFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_hierarchy TfFlow#prefix_hierarchy}
  */
  readonly prefixHierarchy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_type TfFlow#prefix_type}
  */
  readonly prefixType: string;
}
export class DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFormat = this._prefixFormat;
    }
    if (this._prefixHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHierarchy = this._prefixHierarchy;
    }
    if (this._prefixType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixType = this._prefixType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixFormat = undefined;
      this._prefixHierarchy = undefined;
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
      this._prefixHierarchy = value.prefixHierarchy;
      this._prefixType = value.prefixType;
    }
  }

  // prefix_format - computed: false, optional: true, required: false
  private _prefixFormat?: string; 
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }
  public set prefixFormat(value: string) {
    this._prefixFormat = value;
  }
  public resetPrefixFormat() {
    this._prefixFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFormatInput() {
    return this._prefixFormat;
  }

  // prefix_hierarchy - computed: true, optional: true, required: false
  private _prefixHierarchy?: string[]; 
  public get prefixHierarchy() {
    return this.getListAttribute('prefix_hierarchy');
  }
  public set prefixHierarchy(value: string[]) {
    this._prefixHierarchy = value;
  }
  public resetPrefixHierarchy() {
    this._prefixHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHierarchyInput() {
    return this._prefixHierarchy;
  }

  // prefix_type - computed: false, optional: false, required: true
  private _prefixType?: string; 
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
  public set prefixType(value: string) {
    this._prefixType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixTypeInput() {
    return this._prefixType;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#file_type TfFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * aggregation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#aggregation_config TfFlow#aggregation_config}
  */
  readonly aggregationConfig?: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty;
  /**
  * prefix_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#prefix_config TfFlow#prefix_config}
  */
  readonly prefixConfig: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._aggregationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
    }
    if (this._prefixConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileType = undefined;
      this._aggregationConfig.internalValue = undefined;
      this._prefixConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileType = value.fileType;
      this._aggregationConfig.internalValue = value.aggregationConfig;
      this._prefixConfig.internalValue = value.prefixConfig;
    }
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // aggregation_config - computed: false, optional: true, required: false
  private _aggregationConfig = new DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }
  public putAggregationConfig(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty) {
    this._aggregationConfig.internalValue = value;
  }
  public resetAggregationConfig() {
    this._aggregationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationConfigInput() {
    return this._aggregationConfig.internalValue;
  }

  // prefix_config - computed: false, optional: false, required: true
  private _prefixConfig = new DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }
  public putPrefixConfig(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty) {
    this._prefixConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixConfigInput() {
    return this._prefixConfig.internalValue;
  }
}
export interface UpsolverProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3_output_format_config TfFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty;
}
export class UpsolverPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpsolverProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3OutputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpsolverProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3OutputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
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

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_output_format_config - computed: false, optional: false, required: true
  private _s3OutputFormatConfig = new DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPropertyOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
  public putS3OutputFormatConfig(value: DestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigProperty) {
    this._s3OutputFormatConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputFormatConfigInput() {
    return this._s3OutputFormatConfig.internalValue;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#fail_on_first_destination_error TfFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktn.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktn.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#id_field_names TfFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#write_operation_type TfFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#error_handling_config TfFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty;
}
export class DestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idFieldNames = undefined;
      this._object = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idFieldNames = value.idFieldNames;
      this._object = value.object;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: DestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface DestinationConnectorPropertiesProperty {
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#custom_connector TfFlow#custom_connector}
  */
  readonly customConnector?: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty;
  /**
  * customer_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#customer_profiles TfFlow#customer_profiles}
  */
  readonly customerProfiles?: CustomerProfilesProperty;
  /**
  * event_bridge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#event_bridge TfFlow#event_bridge}
  */
  readonly eventBridge?: EventBridgeProperty;
  /**
  * honeycode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#honeycode TfFlow#honeycode}
  */
  readonly honeycode?: HoneycodeProperty;
  /**
  * lookout_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#lookout_metrics TfFlow#lookout_metrics}
  */
  readonly lookoutMetrics?: LookoutMetricsProperty;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#marketo TfFlow#marketo}
  */
  readonly marketo?: DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#redshift TfFlow#redshift}
  */
  readonly redshift?: RedshiftProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3 TfFlow#s3}
  */
  readonly s3?: DestinationFlowConfigDestinationConnectorPropertiesS3Property;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#salesforce TfFlow#salesforce}
  */
  readonly salesforce?: DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#sapo_data TfFlow#sapo_data}
  */
  readonly sapoData?: DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#snowflake TfFlow#snowflake}
  */
  readonly snowflake?: SnowflakeProperty;
  /**
  * upsolver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#upsolver TfFlow#upsolver}
  */
  readonly upsolver?: UpsolverProperty;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#zendesk TfFlow#zendesk}
  */
  readonly zendesk?: DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty;
}
export class DestinationConnectorPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationConnectorPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._customerProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerProfiles = this._customerProfiles?.internalValue;
    }
    if (this._eventBridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridge = this._eventBridge?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._lookoutMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookoutMetrics = this._lookoutMetrics?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._upsolver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsolver = this._upsolver?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationConnectorPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConnector.internalValue = undefined;
      this._customerProfiles.internalValue = undefined;
      this._eventBridge.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._lookoutMetrics.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._upsolver.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConnector.internalValue = value.customConnector;
      this._customerProfiles.internalValue = value.customerProfiles;
      this._eventBridge.internalValue = value.eventBridge;
      this._honeycode.internalValue = value.honeycode;
      this._lookoutMetrics.internalValue = value.lookoutMetrics;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._s3.internalValue = value.s3;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._snowflake.internalValue = value.snowflake;
      this._upsolver.internalValue = value.upsolver;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorPropertyOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: DestinationFlowConfigDestinationConnectorPropertiesCustomConnectorProperty) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // customer_profiles - computed: false, optional: true, required: false
  private _customerProfiles = new CustomerProfilesPropertyOutputReference(this, "customer_profiles");
  public get customerProfiles() {
    return this._customerProfiles;
  }
  public putCustomerProfiles(value: CustomerProfilesProperty) {
    this._customerProfiles.internalValue = value;
  }
  public resetCustomerProfiles() {
    this._customerProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfilesInput() {
    return this._customerProfiles.internalValue;
  }

  // event_bridge - computed: false, optional: true, required: false
  private _eventBridge = new EventBridgePropertyOutputReference(this, "event_bridge");
  public get eventBridge() {
    return this._eventBridge;
  }
  public putEventBridge(value: EventBridgeProperty) {
    this._eventBridge.internalValue = value;
  }
  public resetEventBridge() {
    this._eventBridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeInput() {
    return this._eventBridge.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new HoneycodePropertyOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: HoneycodeProperty) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // lookout_metrics - computed: false, optional: true, required: false
  private _lookoutMetrics = new LookoutMetricsPropertyOutputReference(this, "lookout_metrics");
  public get lookoutMetrics() {
    return this._lookoutMetrics;
  }
  public putLookoutMetrics(value: LookoutMetricsProperty) {
    this._lookoutMetrics.internalValue = value;
  }
  public resetLookoutMetrics() {
    this._lookoutMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookoutMetricsInput() {
    return this._lookoutMetrics.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new DestinationFlowConfigDestinationConnectorPropertiesMarketoPropertyOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: DestinationFlowConfigDestinationConnectorPropertiesMarketoProperty) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new RedshiftPropertyOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: RedshiftProperty) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DestinationFlowConfigDestinationConnectorPropertiesS3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DestinationFlowConfigDestinationConnectorPropertiesS3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new DestinationFlowConfigDestinationConnectorPropertiesSalesforcePropertyOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: DestinationFlowConfigDestinationConnectorPropertiesSalesforceProperty) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new DestinationFlowConfigDestinationConnectorPropertiesSapoDataPropertyOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: DestinationFlowConfigDestinationConnectorPropertiesSapoDataProperty) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new SnowflakePropertyOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: SnowflakeProperty) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // upsolver - computed: false, optional: true, required: false
  private _upsolver = new UpsolverPropertyOutputReference(this, "upsolver");
  public get upsolver() {
    return this._upsolver;
  }
  public putUpsolver(value: UpsolverProperty) {
    this._upsolver.internalValue = value;
  }
  public resetUpsolver() {
    this._upsolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsolverInput() {
    return this._upsolver.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new DestinationFlowConfigDestinationConnectorPropertiesZendeskPropertyOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: DestinationFlowConfigDestinationConnectorPropertiesZendeskProperty) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface DestinationFlowConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#api_version TfFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#connector_profile_name TfFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#connector_type TfFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * destination_connector_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#destination_connector_properties TfFlow#destination_connector_properties}
  */
  readonly destinationConnectorProperties: DestinationConnectorPropertiesProperty;
}
export class DestinationFlowConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationFlowConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._connectorProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileName = this._connectorProfileName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._destinationConnectorProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectorProperties = this._destinationConnectorProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFlowConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._connectorProfileName = undefined;
      this._connectorType = undefined;
      this._destinationConnectorProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._connectorProfileName = value.connectorProfileName;
      this._connectorType = value.connectorType;
      this._destinationConnectorProperties.internalValue = value.destinationConnectorProperties;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // connector_profile_name - computed: false, optional: true, required: false
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  public resetConnectorProfileName() {
    this._connectorProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // destination_connector_properties - computed: false, optional: false, required: true
  private _destinationConnectorProperties = new DestinationConnectorPropertiesPropertyOutputReference(this, "destination_connector_properties");
  public get destinationConnectorProperties() {
    return this._destinationConnectorProperties;
  }
  public putDestinationConnectorProperties(value: DestinationConnectorPropertiesProperty) {
    this._destinationConnectorProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectorPropertiesInput() {
    return this._destinationConnectorProperties.internalValue;
  }
}

export class DestinationFlowConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationFlowConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationFlowConfigPropertyOutputReference {
    return new DestinationFlowConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueDataCatalogProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#database_name TfFlow#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#role_arn TfFlow#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#table_prefix TfFlow#table_prefix}
  */
  readonly tablePrefix: string;
}
export class GlueDataCatalogPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueDataCatalogProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueDataCatalogProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tablePrefix = value.tablePrefix;
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

  // table_prefix - computed: false, optional: false, required: true
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}
export interface MetadataCatalogConfigProperty {
  /**
  * glue_data_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#glue_data_catalog TfFlow#glue_data_catalog}
  */
  readonly glueDataCatalog?: GlueDataCatalogProperty;
}
export class MetadataCatalogConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetadataCatalogConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueDataCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueDataCatalog = this._glueDataCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataCatalogConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glueDataCatalog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glueDataCatalog.internalValue = value.glueDataCatalog;
    }
  }

  // glue_data_catalog - computed: false, optional: true, required: false
  private _glueDataCatalog = new GlueDataCatalogPropertyOutputReference(this, "glue_data_catalog");
  public get glueDataCatalog() {
    return this._glueDataCatalog;
  }
  public putGlueDataCatalog(value: GlueDataCatalogProperty) {
    this._glueDataCatalog.internalValue = value;
  }
  public resetGlueDataCatalog() {
    this._glueDataCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueDataCatalogInput() {
    return this._glueDataCatalog.internalValue;
  }
}
export interface IncrementalPullConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#datetime_type_field_name TfFlow#datetime_type_field_name}
  */
  readonly datetimeTypeFieldName?: string;
}
export class IncrementalPullConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncrementalPullConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetimeTypeFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeTypeFieldName = this._datetimeTypeFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncrementalPullConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datetimeTypeFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datetimeTypeFieldName = value.datetimeTypeFieldName;
    }
  }

  // datetime_type_field_name - computed: false, optional: true, required: false
  private _datetimeTypeFieldName?: string; 
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
  public set datetimeTypeFieldName(value: string) {
    this._datetimeTypeFieldName = value;
  }
  public resetDatetimeTypeFieldName() {
    this._datetimeTypeFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeTypeFieldNameInput() {
    return this._datetimeTypeFieldName;
  }
}
export interface AmplitudeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class AmplitudePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmplitudeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplitudeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#custom_properties TfFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#entity_name TfFlow#entity_name}
  */
  readonly entityName: string;
}
export class SourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProperties = undefined;
      this._entityName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProperties = value.customProperties;
      this._entityName = value.entityName;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }
}
export interface DatadogProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class DatadogPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatadogProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatadogProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface DynatraceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class DynatracePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynatraceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynatraceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleAnalyticsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class GoogleAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAnalyticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAnalyticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface InforNexusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class InforNexusPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InforNexusProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InforNexusProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesMarketoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class SourceFlowConfigSourceConnectorPropertiesMarketoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesMarketoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesMarketoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface S3InputFormatConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3_input_file_type TfFlow#s3_input_file_type}
  */
  readonly s3InputFileType?: string;
}
export class S3InputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3InputFormatConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3InputFileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputFileType = this._s3InputFileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3InputFormatConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3InputFileType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3InputFileType = value.s3InputFileType;
    }
  }

  // s3_input_file_type - computed: false, optional: true, required: false
  private _s3InputFileType?: string; 
  public get s3InputFileType() {
    return this.getStringAttribute('s3_input_file_type');
  }
  public set s3InputFileType(value: string) {
    this._s3InputFileType = value;
  }
  public resetS3InputFileType() {
    this._s3InputFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputFileTypeInput() {
    return this._s3InputFileType;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_name TfFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#bucket_prefix TfFlow#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * s3_input_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3_input_format_config TfFlow#s3_input_format_config}
  */
  readonly s3InputFormatConfig?: S3InputFormatConfigProperty;
}
export class SourceFlowConfigSourceConnectorPropertiesS3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesS3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3InputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputFormatConfig = this._s3InputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesS3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3InputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3InputFormatConfig.internalValue = value.s3InputFormatConfig;
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

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_input_format_config - computed: false, optional: true, required: false
  private _s3InputFormatConfig = new S3InputFormatConfigPropertyOutputReference(this, "s3_input_format_config");
  public get s3InputFormatConfig() {
    return this._s3InputFormatConfig;
  }
  public putS3InputFormatConfig(value: S3InputFormatConfigProperty) {
    this._s3InputFormatConfig.internalValue = value;
  }
  public resetS3InputFormatConfig() {
    this._s3InputFormatConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputFormatConfigInput() {
    return this._s3InputFormatConfig.internalValue;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesSalesforceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#data_transfer_api TfFlow#data_transfer_api}
  */
  readonly dataTransferApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#enable_dynamic_field_update TfFlow#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#include_deleted_records TfFlow#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class SourceFlowConfigSourceConnectorPropertiesSalesforcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesSalesforceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransferApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferApi = this._dataTransferApi;
    }
    if (this._enableDynamicFieldUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDynamicFieldUpdate = this._enableDynamicFieldUpdate;
    }
    if (this._includeDeletedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeletedRecords = this._includeDeletedRecords;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesSalesforceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransferApi = undefined;
      this._enableDynamicFieldUpdate = undefined;
      this._includeDeletedRecords = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransferApi = value.dataTransferApi;
      this._enableDynamicFieldUpdate = value.enableDynamicFieldUpdate;
      this._includeDeletedRecords = value.includeDeletedRecords;
      this._object = value.object;
    }
  }

  // data_transfer_api - computed: false, optional: true, required: false
  private _dataTransferApi?: string; 
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
  }
  public set dataTransferApi(value: string) {
    this._dataTransferApi = value;
  }
  public resetDataTransferApi() {
    this._dataTransferApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferApiInput() {
    return this._dataTransferApi;
  }

  // enable_dynamic_field_update - computed: false, optional: true, required: false
  private _enableDynamicFieldUpdate?: boolean | cdktn.IResolvable; 
  public get enableDynamicFieldUpdate() {
    return this.getBooleanAttribute('enable_dynamic_field_update');
  }
  public set enableDynamicFieldUpdate(value: boolean | cdktn.IResolvable) {
    this._enableDynamicFieldUpdate = value;
  }
  public resetEnableDynamicFieldUpdate() {
    this._enableDynamicFieldUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicFieldUpdateInput() {
    return this._enableDynamicFieldUpdate;
  }

  // include_deleted_records - computed: false, optional: true, required: false
  private _includeDeletedRecords?: boolean | cdktn.IResolvable; 
  public get includeDeletedRecords() {
    return this.getBooleanAttribute('include_deleted_records');
  }
  public set includeDeletedRecords(value: boolean | cdktn.IResolvable) {
    this._includeDeletedRecords = value;
  }
  public resetIncludeDeletedRecords() {
    this._includeDeletedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedRecordsInput() {
    return this._includeDeletedRecords;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface PaginationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#max_page_size TfFlow#max_page_size}
  */
  readonly maxPageSize: number;
}
export class PaginationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaginationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPageSize = this._maxPageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaginationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPageSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPageSize = value.maxPageSize;
    }
  }

  // max_page_size - computed: false, optional: false, required: true
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }
}
export interface ParallelismConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#max_page_size TfFlow#max_page_size}
  */
  readonly maxPageSize: number;
}
export class ParallelismConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParallelismConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPageSize = this._maxPageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParallelismConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPageSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPageSize = value.maxPageSize;
    }
  }

  // max_page_size - computed: false, optional: false, required: true
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesSapoDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object_path TfFlow#object_path}
  */
  readonly objectPath: string;
  /**
  * pagination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#pagination_config TfFlow#pagination_config}
  */
  readonly paginationConfig?: PaginationConfigProperty;
  /**
  * parallelism_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#parallelism_config TfFlow#parallelism_config}
  */
  readonly parallelismConfig?: ParallelismConfigProperty;
}
export class SourceFlowConfigSourceConnectorPropertiesSapoDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesSapoDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPath = this._objectPath;
    }
    if (this._paginationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationConfig = this._paginationConfig?.internalValue;
    }
    if (this._parallelismConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismConfig = this._parallelismConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesSapoDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectPath = undefined;
      this._paginationConfig.internalValue = undefined;
      this._parallelismConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectPath = value.objectPath;
      this._paginationConfig.internalValue = value.paginationConfig;
      this._parallelismConfig.internalValue = value.parallelismConfig;
    }
  }

  // object_path - computed: false, optional: false, required: true
  private _objectPath?: string; 
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }
  public set objectPath(value: string) {
    this._objectPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPathInput() {
    return this._objectPath;
  }

  // pagination_config - computed: false, optional: true, required: false
  private _paginationConfig = new PaginationConfigPropertyOutputReference(this, "pagination_config");
  public get paginationConfig() {
    return this._paginationConfig;
  }
  public putPaginationConfig(value: PaginationConfigProperty) {
    this._paginationConfig.internalValue = value;
  }
  public resetPaginationConfig() {
    this._paginationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigInput() {
    return this._paginationConfig.internalValue;
  }

  // parallelism_config - computed: false, optional: true, required: false
  private _parallelismConfig = new ParallelismConfigPropertyOutputReference(this, "parallelism_config");
  public get parallelismConfig() {
    return this._parallelismConfig;
  }
  public putParallelismConfig(value: ParallelismConfigProperty) {
    this._parallelismConfig.internalValue = value;
  }
  public resetParallelismConfig() {
    this._parallelismConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigInput() {
    return this._parallelismConfig.internalValue;
  }
}
export interface ServiceNowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class ServiceNowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SingularProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class SingularPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SingularProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SingularProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SlackProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class SlackPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlackProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlackProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface TrendmicroProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class TrendmicroPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrendmicroProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrendmicroProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface VeevaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#document_type TfFlow#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#include_all_versions TfFlow#include_all_versions}
  */
  readonly includeAllVersions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#include_renditions TfFlow#include_renditions}
  */
  readonly includeRenditions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#include_source_files TfFlow#include_source_files}
  */
  readonly includeSourceFiles?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class VeevaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VeevaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentType = this._documentType;
    }
    if (this._includeAllVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllVersions = this._includeAllVersions;
    }
    if (this._includeRenditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRenditions = this._includeRenditions;
    }
    if (this._includeSourceFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSourceFiles = this._includeSourceFiles;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VeevaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentType = undefined;
      this._includeAllVersions = undefined;
      this._includeRenditions = undefined;
      this._includeSourceFiles = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentType = value.documentType;
      this._includeAllVersions = value.includeAllVersions;
      this._includeRenditions = value.includeRenditions;
      this._includeSourceFiles = value.includeSourceFiles;
      this._object = value.object;
    }
  }

  // document_type - computed: false, optional: true, required: false
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
  }

  // include_all_versions - computed: false, optional: true, required: false
  private _includeAllVersions?: boolean | cdktn.IResolvable; 
  public get includeAllVersions() {
    return this.getBooleanAttribute('include_all_versions');
  }
  public set includeAllVersions(value: boolean | cdktn.IResolvable) {
    this._includeAllVersions = value;
  }
  public resetIncludeAllVersions() {
    this._includeAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllVersionsInput() {
    return this._includeAllVersions;
  }

  // include_renditions - computed: false, optional: true, required: false
  private _includeRenditions?: boolean | cdktn.IResolvable; 
  public get includeRenditions() {
    return this.getBooleanAttribute('include_renditions');
  }
  public set includeRenditions(value: boolean | cdktn.IResolvable) {
    this._includeRenditions = value;
  }
  public resetIncludeRenditions() {
    this._includeRenditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRenditionsInput() {
    return this._includeRenditions;
  }

  // include_source_files - computed: false, optional: true, required: false
  private _includeSourceFiles?: boolean | cdktn.IResolvable; 
  public get includeSourceFiles() {
    return this.getBooleanAttribute('include_source_files');
  }
  public set includeSourceFiles(value: boolean | cdktn.IResolvable) {
    this._includeSourceFiles = value;
  }
  public resetIncludeSourceFiles() {
    this._includeSourceFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSourceFilesInput() {
    return this._includeSourceFiles;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SourceFlowConfigSourceConnectorPropertiesZendeskProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#object TfFlow#object}
  */
  readonly object: string;
}
export class SourceFlowConfigSourceConnectorPropertiesZendeskPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigSourceConnectorPropertiesZendeskProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigSourceConnectorPropertiesZendeskProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SourceConnectorPropertiesProperty {
  /**
  * amplitude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#amplitude TfFlow#amplitude}
  */
  readonly amplitude?: AmplitudeProperty;
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#custom_connector TfFlow#custom_connector}
  */
  readonly customConnector?: SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#datadog TfFlow#datadog}
  */
  readonly datadog?: DatadogProperty;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#dynatrace TfFlow#dynatrace}
  */
  readonly dynatrace?: DynatraceProperty;
  /**
  * google_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#google_analytics TfFlow#google_analytics}
  */
  readonly googleAnalytics?: GoogleAnalyticsProperty;
  /**
  * infor_nexus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#infor_nexus TfFlow#infor_nexus}
  */
  readonly inforNexus?: InforNexusProperty;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#marketo TfFlow#marketo}
  */
  readonly marketo?: SourceFlowConfigSourceConnectorPropertiesMarketoProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3 TfFlow#s3}
  */
  readonly s3?: SourceFlowConfigSourceConnectorPropertiesS3Property;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#salesforce TfFlow#salesforce}
  */
  readonly salesforce?: SourceFlowConfigSourceConnectorPropertiesSalesforceProperty;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#sapo_data TfFlow#sapo_data}
  */
  readonly sapoData?: SourceFlowConfigSourceConnectorPropertiesSapoDataProperty;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#service_now TfFlow#service_now}
  */
  readonly serviceNow?: ServiceNowProperty;
  /**
  * singular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#singular TfFlow#singular}
  */
  readonly singular?: SingularProperty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#slack TfFlow#slack}
  */
  readonly slack?: SlackProperty;
  /**
  * trendmicro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#trendmicro TfFlow#trendmicro}
  */
  readonly trendmicro?: TrendmicroProperty;
  /**
  * veeva block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#veeva TfFlow#veeva}
  */
  readonly veeva?: VeevaProperty;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#zendesk TfFlow#zendesk}
  */
  readonly zendesk?: SourceFlowConfigSourceConnectorPropertiesZendeskProperty;
}
export class SourceConnectorPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceConnectorPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceConnectorPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._s3.internalValue = value.s3;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new AmplitudePropertyOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: AmplitudeProperty) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new SourceFlowConfigSourceConnectorPropertiesCustomConnectorPropertyOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: SourceFlowConfigSourceConnectorPropertiesCustomConnectorProperty) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new DatadogPropertyOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: DatadogProperty) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new DynatracePropertyOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: DynatraceProperty) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new GoogleAnalyticsPropertyOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: GoogleAnalyticsProperty) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new InforNexusPropertyOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: InforNexusProperty) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new SourceFlowConfigSourceConnectorPropertiesMarketoPropertyOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: SourceFlowConfigSourceConnectorPropertiesMarketoProperty) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new SourceFlowConfigSourceConnectorPropertiesS3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: SourceFlowConfigSourceConnectorPropertiesS3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new SourceFlowConfigSourceConnectorPropertiesSalesforcePropertyOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: SourceFlowConfigSourceConnectorPropertiesSalesforceProperty) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new SourceFlowConfigSourceConnectorPropertiesSapoDataPropertyOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: SourceFlowConfigSourceConnectorPropertiesSapoDataProperty) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new ServiceNowPropertyOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: ServiceNowProperty) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new SingularPropertyOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: SingularProperty) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new SlackPropertyOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: SlackProperty) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new TrendmicroPropertyOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: TrendmicroProperty) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new VeevaPropertyOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: VeevaProperty) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new SourceFlowConfigSourceConnectorPropertiesZendeskPropertyOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: SourceFlowConfigSourceConnectorPropertiesZendeskProperty) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface SourceFlowConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#api_version TfFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#connector_profile_name TfFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#connector_type TfFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * incremental_pull_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#incremental_pull_config TfFlow#incremental_pull_config}
  */
  readonly incrementalPullConfig?: IncrementalPullConfigProperty;
  /**
  * source_connector_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#source_connector_properties TfFlow#source_connector_properties}
  */
  readonly sourceConnectorProperties: SourceConnectorPropertiesProperty;
}
export class SourceFlowConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceFlowConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._connectorProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileName = this._connectorProfileName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._incrementalPullConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalPullConfig = this._incrementalPullConfig?.internalValue;
    }
    if (this._sourceConnectorProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectorProperties = this._sourceConnectorProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFlowConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._connectorProfileName = undefined;
      this._connectorType = undefined;
      this._incrementalPullConfig.internalValue = undefined;
      this._sourceConnectorProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._connectorProfileName = value.connectorProfileName;
      this._connectorType = value.connectorType;
      this._incrementalPullConfig.internalValue = value.incrementalPullConfig;
      this._sourceConnectorProperties.internalValue = value.sourceConnectorProperties;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // connector_profile_name - computed: false, optional: true, required: false
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  public resetConnectorProfileName() {
    this._connectorProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // incremental_pull_config - computed: false, optional: true, required: false
  private _incrementalPullConfig = new IncrementalPullConfigPropertyOutputReference(this, "incremental_pull_config");
  public get incrementalPullConfig() {
    return this._incrementalPullConfig;
  }
  public putIncrementalPullConfig(value: IncrementalPullConfigProperty) {
    this._incrementalPullConfig.internalValue = value;
  }
  public resetIncrementalPullConfig() {
    this._incrementalPullConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalPullConfigInput() {
    return this._incrementalPullConfig.internalValue;
  }

  // source_connector_properties - computed: false, optional: false, required: true
  private _sourceConnectorProperties = new SourceConnectorPropertiesPropertyOutputReference(this, "source_connector_properties");
  public get sourceConnectorProperties() {
    return this._sourceConnectorProperties;
  }
  public putSourceConnectorProperties(value: SourceConnectorPropertiesProperty) {
    this._sourceConnectorProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectorPropertiesInput() {
    return this._sourceConnectorProperties.internalValue;
  }
}
export interface ConnectorOperatorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#amplitude TfFlow#amplitude}
  */
  readonly amplitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#custom_connector TfFlow#custom_connector}
  */
  readonly customConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#datadog TfFlow#datadog}
  */
  readonly datadog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#dynatrace TfFlow#dynatrace}
  */
  readonly dynatrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#google_analytics TfFlow#google_analytics}
  */
  readonly googleAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#infor_nexus TfFlow#infor_nexus}
  */
  readonly inforNexus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#marketo TfFlow#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#s3 TfFlow#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#salesforce TfFlow#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#sapo_data TfFlow#sapo_data}
  */
  readonly sapoData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#service_now TfFlow#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#singular TfFlow#singular}
  */
  readonly singular?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#slack TfFlow#slack}
  */
  readonly slack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#trendmicro TfFlow#trendmicro}
  */
  readonly trendmicro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#veeva TfFlow#veeva}
  */
  readonly veeva?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#zendesk TfFlow#zendesk}
  */
  readonly zendesk?: string;
}
export class ConnectorOperatorPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectorOperatorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude;
    }
    if (this._customConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector;
    }
    if (this._datadog !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog;
    }
    if (this._dynatrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace;
    }
    if (this._googleAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics;
    }
    if (this._inforNexus !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus;
    }
    if (this._marketo !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    if (this._salesforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce;
    }
    if (this._sapoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData;
    }
    if (this._serviceNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow;
    }
    if (this._singular !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular;
    }
    if (this._slack !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack;
    }
    if (this._trendmicro !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro;
    }
    if (this._veeva !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva;
    }
    if (this._zendesk !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorOperatorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amplitude = undefined;
      this._customConnector = undefined;
      this._datadog = undefined;
      this._dynatrace = undefined;
      this._googleAnalytics = undefined;
      this._inforNexus = undefined;
      this._marketo = undefined;
      this._s3 = undefined;
      this._salesforce = undefined;
      this._sapoData = undefined;
      this._serviceNow = undefined;
      this._singular = undefined;
      this._slack = undefined;
      this._trendmicro = undefined;
      this._veeva = undefined;
      this._zendesk = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amplitude = value.amplitude;
      this._customConnector = value.customConnector;
      this._datadog = value.datadog;
      this._dynatrace = value.dynatrace;
      this._googleAnalytics = value.googleAnalytics;
      this._inforNexus = value.inforNexus;
      this._marketo = value.marketo;
      this._s3 = value.s3;
      this._salesforce = value.salesforce;
      this._sapoData = value.sapoData;
      this._serviceNow = value.serviceNow;
      this._singular = value.singular;
      this._slack = value.slack;
      this._trendmicro = value.trendmicro;
      this._veeva = value.veeva;
      this._zendesk = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude?: string; 
  public get amplitude() {
    return this.getStringAttribute('amplitude');
  }
  public set amplitude(value: string) {
    this._amplitude = value;
  }
  public resetAmplitude() {
    this._amplitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector?: string; 
  public get customConnector() {
    return this.getStringAttribute('custom_connector');
  }
  public set customConnector(value: string) {
    this._customConnector = value;
  }
  public resetCustomConnector() {
    this._customConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog?: string; 
  public get datadog() {
    return this.getStringAttribute('datadog');
  }
  public set datadog(value: string) {
    this._datadog = value;
  }
  public resetDatadog() {
    this._datadog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace?: string; 
  public get dynatrace() {
    return this.getStringAttribute('dynatrace');
  }
  public set dynatrace(value: string) {
    this._dynatrace = value;
  }
  public resetDynatrace() {
    this._dynatrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics?: string; 
  public get googleAnalytics() {
    return this.getStringAttribute('google_analytics');
  }
  public set googleAnalytics(value: string) {
    this._googleAnalytics = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus?: string; 
  public get inforNexus() {
    return this.getStringAttribute('infor_nexus');
  }
  public set inforNexus(value: string) {
    this._inforNexus = value;
  }
  public resetInforNexus() {
    this._inforNexus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo?: string; 
  public get marketo() {
    return this.getStringAttribute('marketo');
  }
  public set marketo(value: string) {
    this._marketo = value;
  }
  public resetMarketo() {
    this._marketo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: string; 
  public get s3() {
    return this.getStringAttribute('s3');
  }
  public set s3(value: string) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce?: string; 
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }
  public set salesforce(value: string) {
    this._salesforce = value;
  }
  public resetSalesforce() {
    this._salesforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData?: string; 
  public get sapoData() {
    return this.getStringAttribute('sapo_data');
  }
  public set sapoData(value: string) {
    this._sapoData = value;
  }
  public resetSapoData() {
    this._sapoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow?: string; 
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }
  public set serviceNow(value: string) {
    this._serviceNow = value;
  }
  public resetServiceNow() {
    this._serviceNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow;
  }

  // singular - computed: false, optional: true, required: false
  private _singular?: string; 
  public get singular() {
    return this.getStringAttribute('singular');
  }
  public set singular(value: string) {
    this._singular = value;
  }
  public resetSingular() {
    this._singular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular;
  }

  // slack - computed: false, optional: true, required: false
  private _slack?: string; 
  public get slack() {
    return this.getStringAttribute('slack');
  }
  public set slack(value: string) {
    this._slack = value;
  }
  public resetSlack() {
    this._slack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro?: string; 
  public get trendmicro() {
    return this.getStringAttribute('trendmicro');
  }
  public set trendmicro(value: string) {
    this._trendmicro = value;
  }
  public resetTrendmicro() {
    this._trendmicro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva?: string; 
  public get veeva() {
    return this.getStringAttribute('veeva');
  }
  public set veeva(value: string) {
    this._veeva = value;
  }
  public resetVeeva() {
    this._veeva = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk?: string; 
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
  public set zendesk(value: string) {
    this._zendesk = value;
  }
  public resetZendesk() {
    this._zendesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk;
  }
}

export class ConnectorOperatorPropertyList extends cdktn.ComplexList {
  public internalValue? : ConnectorOperatorProperty[] | cdktn.IResolvable

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
  public get(index: number): ConnectorOperatorPropertyOutputReference {
    return new ConnectorOperatorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#destination_field TfFlow#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#source_fields TfFlow#source_fields}
  */
  readonly sourceFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#task_properties TfFlow#task_properties}
  */
  readonly taskProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#task_type TfFlow#task_type}
  */
  readonly taskType: string;
  /**
  * connector_operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#connector_operator TfFlow#connector_operator}
  */
  readonly connectorOperator?: ConnectorOperatorProperty[] | cdktn.IResolvable;
}
export class TaskPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TaskProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._sourceFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFields = this._sourceFields;
    }
    if (this._taskProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskProperties = this._taskProperties;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._connectorOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOperator = this._connectorOperator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationField = undefined;
      this._sourceFields = undefined;
      this._taskProperties = undefined;
      this._taskType = undefined;
      this._connectorOperator.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationField = value.destinationField;
      this._sourceFields = value.sourceFields;
      this._taskProperties = value.taskProperties;
      this._taskType = value.taskType;
      this._connectorOperator.internalValue = value.connectorOperator;
    }
  }

  // destination_field - computed: false, optional: true, required: false
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  public resetDestinationField() {
    this._destinationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // source_fields - computed: true, optional: true, required: false
  private _sourceFields?: string[]; 
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }
  public set sourceFields(value: string[]) {
    this._sourceFields = value;
  }
  public resetSourceFields() {
    this._sourceFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldsInput() {
    return this._sourceFields;
  }

  // task_properties - computed: false, optional: true, required: false
  private _taskProperties?: { [key: string]: string }; 
  public get taskProperties() {
    return this.getStringMapAttribute('task_properties');
  }
  public set taskProperties(value: { [key: string]: string }) {
    this._taskProperties = value;
  }
  public resetTaskProperties() {
    this._taskProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPropertiesInput() {
    return this._taskProperties;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // connector_operator - computed: false, optional: true, required: false
  private _connectorOperator = new ConnectorOperatorPropertyList(this, "connector_operator", false);
  public get connectorOperator() {
    return this._connectorOperator;
  }
  public putConnectorOperator(value: ConnectorOperatorProperty[] | cdktn.IResolvable) {
    this._connectorOperator.internalValue = value;
  }
  public resetConnectorOperator() {
    this._connectorOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOperatorInput() {
    return this._connectorOperator.internalValue;
  }
}

export class TaskPropertyList extends cdktn.ComplexList {
  public internalValue? : TaskProperty[] | cdktn.IResolvable

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
  public get(index: number): TaskPropertyOutputReference {
    return new TaskPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduledProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#data_pull_mode TfFlow#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#first_execution_from TfFlow#first_execution_from}
  */
  readonly firstExecutionFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#schedule_end_time TfFlow#schedule_end_time}
  */
  readonly scheduleEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#schedule_expression TfFlow#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#schedule_offset TfFlow#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#schedule_start_time TfFlow#schedule_start_time}
  */
  readonly scheduleStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#timezone TfFlow#timezone}
  */
  readonly timezone?: string;
}
export class ScheduledPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduledProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPullMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPullMode = this._dataPullMode;
    }
    if (this._firstExecutionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstExecutionFrom = this._firstExecutionFrom;
    }
    if (this._scheduleEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEndTime = this._scheduleEndTime;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._scheduleOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleOffset = this._scheduleOffset;
    }
    if (this._scheduleStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartTime = this._scheduleStartTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduledProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataPullMode = undefined;
      this._firstExecutionFrom = undefined;
      this._scheduleEndTime = undefined;
      this._scheduleExpression = undefined;
      this._scheduleOffset = undefined;
      this._scheduleStartTime = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataPullMode = value.dataPullMode;
      this._firstExecutionFrom = value.firstExecutionFrom;
      this._scheduleEndTime = value.scheduleEndTime;
      this._scheduleExpression = value.scheduleExpression;
      this._scheduleOffset = value.scheduleOffset;
      this._scheduleStartTime = value.scheduleStartTime;
      this._timezone = value.timezone;
    }
  }

  // data_pull_mode - computed: false, optional: true, required: false
  private _dataPullMode?: string; 
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }
  public set dataPullMode(value: string) {
    this._dataPullMode = value;
  }
  public resetDataPullMode() {
    this._dataPullMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPullModeInput() {
    return this._dataPullMode;
  }

  // first_execution_from - computed: false, optional: true, required: false
  private _firstExecutionFrom?: string; 
  public get firstExecutionFrom() {
    return this.getStringAttribute('first_execution_from');
  }
  public set firstExecutionFrom(value: string) {
    this._firstExecutionFrom = value;
  }
  public resetFirstExecutionFrom() {
    this._firstExecutionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstExecutionFromInput() {
    return this._firstExecutionFrom;
  }

  // schedule_end_time - computed: false, optional: true, required: false
  private _scheduleEndTime?: string; 
  public get scheduleEndTime() {
    return this.getStringAttribute('schedule_end_time');
  }
  public set scheduleEndTime(value: string) {
    this._scheduleEndTime = value;
  }
  public resetScheduleEndTime() {
    this._scheduleEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndTimeInput() {
    return this._scheduleEndTime;
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_offset - computed: false, optional: true, required: false
  private _scheduleOffset?: number; 
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }
  public set scheduleOffset(value: number) {
    this._scheduleOffset = value;
  }
  public resetScheduleOffset() {
    this._scheduleOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOffsetInput() {
    return this._scheduleOffset;
  }

  // schedule_start_time - computed: false, optional: true, required: false
  private _scheduleStartTime?: string; 
  public get scheduleStartTime() {
    return this.getStringAttribute('schedule_start_time');
  }
  public set scheduleStartTime(value: string) {
    this._scheduleStartTime = value;
  }
  public resetScheduleStartTime() {
    this._scheduleStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartTimeInput() {
    return this._scheduleStartTime;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface TriggerPropertiesProperty {
  /**
  * scheduled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#scheduled TfFlow#scheduled}
  */
  readonly scheduled?: ScheduledProperty;
}
export class TriggerPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduled = this._scheduled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduled.internalValue = value.scheduled;
    }
  }

  // scheduled - computed: false, optional: true, required: false
  private _scheduled = new ScheduledPropertyOutputReference(this, "scheduled");
  public get scheduled() {
    return this._scheduled;
  }
  public putScheduled(value: ScheduledProperty) {
    this._scheduled.internalValue = value;
  }
  public resetScheduled() {
    this._scheduled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledInput() {
    return this._scheduled.internalValue;
  }
}
export interface TriggerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#trigger_type TfFlow#trigger_type}
  */
  readonly triggerType: string;
  /**
  * trigger_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_flow#trigger_properties TfFlow#trigger_properties}
  */
  readonly triggerProperties?: TriggerPropertiesProperty;
}
export class TriggerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TriggerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._triggerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerProperties = this._triggerProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._triggerType = undefined;
      this._triggerProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._triggerType = value.triggerType;
      this._triggerProperties.internalValue = value.triggerProperties;
    }
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // trigger_properties - computed: false, optional: true, required: false
  private _triggerProperties = new TriggerPropertiesPropertyOutputReference(this, "trigger_properties");
  public get triggerProperties() {
    return this._triggerProperties;
  }
  public putTriggerProperties(value: TriggerPropertiesProperty) {
    this._triggerProperties.internalValue = value;
  }
  public resetTriggerProperties() {
    this._triggerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPropertiesInput() {
    return this._triggerProperties.internalValue;
  }
}
}
