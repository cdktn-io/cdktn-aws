// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfWorkgroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#description TfWorkgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#force_destroy TfWorkgroup#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#id TfWorkgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#name TfWorkgroup#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#region TfWorkgroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#state TfWorkgroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#tags TfWorkgroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#tags_all TfWorkgroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#configuration TfWorkgroup#configuration}
  */
  readonly configuration?: TfWorkgroup.ConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup aws_athena_workgroup}
*/
export class TfWorkgroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_athena_workgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfWorkgroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfWorkgroup to import
  * @param importFromId The id of the existing TfWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfWorkgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_athena_workgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup aws_athena_workgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfWorkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: TfWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
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
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new TfWorkgroup.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: TfWorkgroup.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      configuration: tfWorkgroupConfigurationPropertyToTerraform(this._configuration.internalValue),
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
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      state: {
        value: cdktn.stringToHclTerraform(this._state),
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
      configuration: {
        value: tfWorkgroupConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWorkgroup.ConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfWorkgroupCustomerContentEncryptionConfigurationPropertyToTerraform(struct?: TfWorkgroup.CustomerContentEncryptionConfigurationPropertyOutputReference | TfWorkgroup.CustomerContentEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function tfWorkgroupCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.CustomerContentEncryptionConfigurationPropertyOutputReference | TfWorkgroup.CustomerContentEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupEngineVersionPropertyToTerraform(struct?: TfWorkgroup.EngineVersionPropertyOutputReference | TfWorkgroup.EngineVersionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    selected_engine_version: cdktn.stringToTerraform(struct!.selectedEngineVersion),
  }
}


export function tfWorkgroupEngineVersionPropertyToHclTerraform(struct?: TfWorkgroup.EngineVersionPropertyOutputReference | TfWorkgroup.EngineVersionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    selected_engine_version: {
      value: cdktn.stringToHclTerraform(struct!.selectedEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupIdentityCenterConfigurationPropertyToTerraform(struct?: TfWorkgroup.IdentityCenterConfigurationPropertyOutputReference | TfWorkgroup.IdentityCenterConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_center: cdktn.booleanToTerraform(struct!.enableIdentityCenter),
    identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
  }
}


export function tfWorkgroupIdentityCenterConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.IdentityCenterConfigurationPropertyOutputReference | TfWorkgroup.IdentityCenterConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_center: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_center_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.identityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyToTerraform(struct?: TfWorkgroup.ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function tfWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupManagedQueryResultsConfigurationPropertyToTerraform(struct?: TfWorkgroup.ManagedQueryResultsConfigurationPropertyOutputReference | TfWorkgroup.ManagedQueryResultsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption_configuration: tfWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
  }
}


export function tfWorkgroupManagedQueryResultsConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ManagedQueryResultsConfigurationPropertyOutputReference | TfWorkgroup.ManagedQueryResultsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_configuration: {
      value: tfWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupLogTypePropertyToTerraform(struct?: TfWorkgroup.LogTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfWorkgroupLogTypePropertyToHclTerraform(struct?: TfWorkgroup.LogTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupCloudWatchLoggingConfigurationPropertyToTerraform(struct?: TfWorkgroup.CloudWatchLoggingConfigurationPropertyOutputReference | TfWorkgroup.CloudWatchLoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
    log_type: cdktn.listMapper(tfWorkgroupLogTypePropertyToTerraform, true)(struct!.logType),
  }
}


export function tfWorkgroupCloudWatchLoggingConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.CloudWatchLoggingConfigurationPropertyOutputReference | TfWorkgroup.CloudWatchLoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.listMapperHcl(tfWorkgroupLogTypePropertyToHclTerraform, true)(struct!.logType),
      isBlock: true,
      type: "set",
      storageClassType: "LogTypePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupManagedLoggingConfigurationPropertyToTerraform(struct?: TfWorkgroup.ManagedLoggingConfigurationPropertyOutputReference | TfWorkgroup.ManagedLoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function tfWorkgroupManagedLoggingConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ManagedLoggingConfigurationPropertyOutputReference | TfWorkgroup.ManagedLoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupS3LoggingConfigurationPropertyToTerraform(struct?: TfWorkgroup.S3LoggingConfigurationPropertyOutputReference | TfWorkgroup.S3LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    log_location: cdktn.stringToTerraform(struct!.logLocation),
  }
}


export function tfWorkgroupS3LoggingConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.S3LoggingConfigurationPropertyOutputReference | TfWorkgroup.S3LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_location: {
      value: cdktn.stringToHclTerraform(struct!.logLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupMonitoringConfigurationPropertyToTerraform(struct?: TfWorkgroup.MonitoringConfigurationPropertyOutputReference | TfWorkgroup.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloud_watch_logging_configuration: tfWorkgroupCloudWatchLoggingConfigurationPropertyToTerraform(struct!.cloudWatchLoggingConfiguration),
    managed_logging_configuration: tfWorkgroupManagedLoggingConfigurationPropertyToTerraform(struct!.managedLoggingConfiguration),
    s3_logging_configuration: tfWorkgroupS3LoggingConfigurationPropertyToTerraform(struct!.s3LoggingConfiguration),
  }
}


export function tfWorkgroupMonitoringConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.MonitoringConfigurationPropertyOutputReference | TfWorkgroup.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloud_watch_logging_configuration: {
      value: tfWorkgroupCloudWatchLoggingConfigurationPropertyToHclTerraform(struct!.cloudWatchLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudWatchLoggingConfigurationPropertyList",
    },
    managed_logging_configuration: {
      value: tfWorkgroupManagedLoggingConfigurationPropertyToHclTerraform(struct!.managedLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedLoggingConfigurationPropertyList",
    },
    s3_logging_configuration: {
      value: tfWorkgroupS3LoggingConfigurationPropertyToHclTerraform(struct!.s3LoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3LoggingConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupQueryResultsS3AccessGrantsConfigurationPropertyToTerraform(struct?: TfWorkgroup.QueryResultsS3AccessGrantsConfigurationPropertyOutputReference | TfWorkgroup.QueryResultsS3AccessGrantsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    create_user_level_prefix: cdktn.booleanToTerraform(struct!.createUserLevelPrefix),
    enable_s3_access_grants: cdktn.booleanToTerraform(struct!.enableS3AccessGrants),
  }
}


export function tfWorkgroupQueryResultsS3AccessGrantsConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.QueryResultsS3AccessGrantsConfigurationPropertyOutputReference | TfWorkgroup.QueryResultsS3AccessGrantsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_user_level_prefix: {
      value: cdktn.booleanToHclTerraform(struct!.createUserLevelPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_s3_access_grants: {
      value: cdktn.booleanToHclTerraform(struct!.enableS3AccessGrants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupAclConfigurationPropertyToTerraform(struct?: TfWorkgroup.AclConfigurationPropertyOutputReference | TfWorkgroup.AclConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_acl_option: cdktn.stringToTerraform(struct!.s3AclOption),
  }
}


export function tfWorkgroupAclConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.AclConfigurationPropertyOutputReference | TfWorkgroup.AclConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_acl_option: {
      value: cdktn.stringToHclTerraform(struct!.s3AclOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupConfigurationResultConfigurationEncryptionConfigurationPropertyToTerraform(struct?: TfWorkgroup.ConfigurationResultConfigurationEncryptionConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationResultConfigurationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfWorkgroupConfigurationResultConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ConfigurationResultConfigurationEncryptionConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationResultConfigurationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function tfWorkgroupResultConfigurationPropertyToTerraform(struct?: TfWorkgroup.ResultConfigurationPropertyOutputReference | TfWorkgroup.ResultConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    output_location: cdktn.stringToTerraform(struct!.outputLocation),
    acl_configuration: tfWorkgroupAclConfigurationPropertyToTerraform(struct!.aclConfiguration),
    encryption_configuration: tfWorkgroupConfigurationResultConfigurationEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
  }
}


export function tfWorkgroupResultConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ResultConfigurationPropertyOutputReference | TfWorkgroup.ResultConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location: {
      value: cdktn.stringToHclTerraform(struct!.outputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_configuration: {
      value: tfWorkgroupAclConfigurationPropertyToHclTerraform(struct!.aclConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AclConfigurationPropertyList",
    },
    encryption_configuration: {
      value: tfWorkgroupConfigurationResultConfigurationEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationResultConfigurationEncryptionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWorkgroupConfigurationPropertyToTerraform(struct?: TfWorkgroup.ConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes_scanned_cutoff_per_query: cdktn.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enable_minimum_encryption_configuration: cdktn.booleanToTerraform(struct!.enableMinimumEncryptionConfiguration),
    enforce_workgroup_configuration: cdktn.booleanToTerraform(struct!.enforceWorkgroupConfiguration),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    publish_cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktn.booleanToTerraform(struct!.requesterPaysEnabled),
    customer_content_encryption_configuration: tfWorkgroupCustomerContentEncryptionConfigurationPropertyToTerraform(struct!.customerContentEncryptionConfiguration),
    engine_version: tfWorkgroupEngineVersionPropertyToTerraform(struct!.engineVersion),
    identity_center_configuration: tfWorkgroupIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
    managed_query_results_configuration: tfWorkgroupManagedQueryResultsConfigurationPropertyToTerraform(struct!.managedQueryResultsConfiguration),
    monitoring_configuration: tfWorkgroupMonitoringConfigurationPropertyToTerraform(struct!.monitoringConfiguration),
    query_results_s3_access_grants_configuration: tfWorkgroupQueryResultsS3AccessGrantsConfigurationPropertyToTerraform(struct!.queryResultsS3AccessGrantsConfiguration),
    result_configuration: tfWorkgroupResultConfigurationPropertyToTerraform(struct!.resultConfiguration),
  }
}


export function tfWorkgroupConfigurationPropertyToHclTerraform(struct?: TfWorkgroup.ConfigurationPropertyOutputReference | TfWorkgroup.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bytes_scanned_cutoff_per_query: {
      value: cdktn.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_minimum_encryption_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.enableMinimumEncryptionConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_workgroup_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.enforceWorkgroupConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requester_pays_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.requesterPaysEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customer_content_encryption_configuration: {
      value: tfWorkgroupCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct!.customerContentEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerContentEncryptionConfigurationPropertyList",
    },
    engine_version: {
      value: tfWorkgroupEngineVersionPropertyToHclTerraform(struct!.engineVersion),
      isBlock: true,
      type: "list",
      storageClassType: "EngineVersionPropertyList",
    },
    identity_center_configuration: {
      value: tfWorkgroupIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityCenterConfigurationPropertyList",
    },
    managed_query_results_configuration: {
      value: tfWorkgroupManagedQueryResultsConfigurationPropertyToHclTerraform(struct!.managedQueryResultsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedQueryResultsConfigurationPropertyList",
    },
    monitoring_configuration: {
      value: tfWorkgroupMonitoringConfigurationPropertyToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringConfigurationPropertyList",
    },
    query_results_s3_access_grants_configuration: {
      value: tfWorkgroupQueryResultsS3AccessGrantsConfigurationPropertyToHclTerraform(struct!.queryResultsS3AccessGrantsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "QueryResultsS3AccessGrantsConfigurationPropertyList",
    },
    result_configuration: {
      value: tfWorkgroupResultConfigurationPropertyToHclTerraform(struct!.resultConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ResultConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfWorkgroup {
export interface CustomerContentEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#kms_key TfWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}
export class CustomerContentEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerContentEncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerContentEncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface EngineVersionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#selected_engine_version TfWorkgroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}
export class EngineVersionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EngineVersionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EngineVersionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedEngineVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedEngineVersion = value.selectedEngineVersion;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: false, optional: true, required: false
  private _selectedEngineVersion?: string; 
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
  public set selectedEngineVersion(value: string) {
    this._selectedEngineVersion = value;
  }
  public resetSelectedEngineVersion() {
    this._selectedEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEngineVersionInput() {
    return this._selectedEngineVersion;
  }
}
export interface IdentityCenterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enable_identity_center TfWorkgroup#enable_identity_center}
  */
  readonly enableIdentityCenter?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#identity_center_instance_arn TfWorkgroup#identity_center_instance_arn}
  */
  readonly identityCenterInstanceArn?: string;
}
export class IdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityCenterConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityCenter = this._enableIdentityCenter;
    }
    if (this._identityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityCenterConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdentityCenter = undefined;
      this._identityCenterInstanceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdentityCenter = value.enableIdentityCenter;
      this._identityCenterInstanceArn = value.identityCenterInstanceArn;
    }
  }

  // enable_identity_center - computed: false, optional: true, required: false
  private _enableIdentityCenter?: boolean | cdktn.IResolvable; 
  public get enableIdentityCenter() {
    return this.getBooleanAttribute('enable_identity_center');
  }
  public set enableIdentityCenter(value: boolean | cdktn.IResolvable) {
    this._enableIdentityCenter = value;
  }
  public resetEnableIdentityCenter() {
    this._enableIdentityCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityCenterInput() {
    return this._enableIdentityCenter;
  }

  // identity_center_instance_arn - computed: false, optional: true, required: false
  private _identityCenterInstanceArn?: string; 
  public get identityCenterInstanceArn() {
    return this.getStringAttribute('identity_center_instance_arn');
  }
  public set identityCenterInstanceArn(value: string) {
    this._identityCenterInstanceArn = value;
  }
  public resetIdentityCenterInstanceArn() {
    this._identityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInstanceArnInput() {
    return this._identityCenterInstanceArn;
  }
}
export interface ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#kms_key TfWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}
export class ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface ManagedQueryResultsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enabled TfWorkgroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#encryption_configuration TfWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty;
}
export class ManagedQueryResultsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedQueryResultsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedQueryResultsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: ConfigurationManagedQueryResultsConfigurationEncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface LogTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#key TfWorkgroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#values TfWorkgroup#values}
  */
  readonly values: string[];
}
export class LogTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogTypePropertyList extends cdktn.ComplexList {
  public internalValue? : LogTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): LogTypePropertyOutputReference {
    return new LogTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudWatchLoggingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enabled TfWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#log_group TfWorkgroup#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#log_stream_name_prefix TfWorkgroup#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * log_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#log_type TfWorkgroup#log_type}
  */
  readonly logType?: LogTypeProperty[] | cdktn.IResolvable;
}
export class CloudWatchLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudWatchLoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudWatchLoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
      this._logStreamNamePrefix = undefined;
      this._logType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logType.internalValue = value.logType;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream_name_prefix - computed: false, optional: true, required: false
  private _logStreamNamePrefix?: string; 
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType = new LogTypePropertyList(this, "log_type", true);
  public get logType() {
    return this._logType;
  }
  public putLogType(value: LogTypeProperty[] | cdktn.IResolvable) {
    this._logType.internalValue = value;
  }
  public resetLogType() {
    this._logType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType.internalValue;
  }
}
export interface ManagedLoggingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enabled TfWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#kms_key TfWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}
export class ManagedLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedLoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedLoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface S3LoggingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enabled TfWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#kms_key TfWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#log_location TfWorkgroup#log_location}
  */
  readonly logLocation?: string;
}
export class S3LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3LoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._logLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocation = this._logLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3LoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKey = undefined;
      this._logLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
      this._logLocation = value.logLocation;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // log_location - computed: false, optional: true, required: false
  private _logLocation?: string; 
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
  public set logLocation(value: string) {
    this._logLocation = value;
  }
  public resetLogLocation() {
    this._logLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation;
  }
}
export interface MonitoringConfigurationProperty {
  /**
  * cloud_watch_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#cloud_watch_logging_configuration TfWorkgroup#cloud_watch_logging_configuration}
  */
  readonly cloudWatchLoggingConfiguration?: CloudWatchLoggingConfigurationProperty;
  /**
  * managed_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#managed_logging_configuration TfWorkgroup#managed_logging_configuration}
  */
  readonly managedLoggingConfiguration?: ManagedLoggingConfigurationProperty;
  /**
  * s3_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#s3_logging_configuration TfWorkgroup#s3_logging_configuration}
  */
  readonly s3LoggingConfiguration?: S3LoggingConfigurationProperty;
}
export class MonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLoggingConfiguration = this._cloudWatchLoggingConfiguration?.internalValue;
    }
    if (this._managedLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
    }
    if (this._s3LoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudWatchLoggingConfiguration.internalValue = undefined;
      this._managedLoggingConfiguration.internalValue = undefined;
      this._s3LoggingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudWatchLoggingConfiguration.internalValue = value.cloudWatchLoggingConfiguration;
      this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
      this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
    }
  }

  // cloud_watch_logging_configuration - computed: false, optional: true, required: false
  private _cloudWatchLoggingConfiguration = new CloudWatchLoggingConfigurationPropertyOutputReference(this, "cloud_watch_logging_configuration");
  public get cloudWatchLoggingConfiguration() {
    return this._cloudWatchLoggingConfiguration;
  }
  public putCloudWatchLoggingConfiguration(value: CloudWatchLoggingConfigurationProperty) {
    this._cloudWatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudWatchLoggingConfiguration() {
    this._cloudWatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLoggingConfigurationInput() {
    return this._cloudWatchLoggingConfiguration.internalValue;
  }

  // managed_logging_configuration - computed: false, optional: true, required: false
  private _managedLoggingConfiguration = new ManagedLoggingConfigurationPropertyOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }
  public putManagedLoggingConfiguration(value: ManagedLoggingConfigurationProperty) {
    this._managedLoggingConfiguration.internalValue = value;
  }
  public resetManagedLoggingConfiguration() {
    this._managedLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedLoggingConfigurationInput() {
    return this._managedLoggingConfiguration.internalValue;
  }

  // s3_logging_configuration - computed: false, optional: true, required: false
  private _s3LoggingConfiguration = new S3LoggingConfigurationPropertyOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
  public putS3LoggingConfiguration(value: S3LoggingConfigurationProperty) {
    this._s3LoggingConfiguration.internalValue = value;
  }
  public resetS3LoggingConfiguration() {
    this._s3LoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LoggingConfigurationInput() {
    return this._s3LoggingConfiguration.internalValue;
  }
}
export interface QueryResultsS3AccessGrantsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#authentication_type TfWorkgroup#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#create_user_level_prefix TfWorkgroup#create_user_level_prefix}
  */
  readonly createUserLevelPrefix?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enable_s3_access_grants TfWorkgroup#enable_s3_access_grants}
  */
  readonly enableS3AccessGrants: boolean | cdktn.IResolvable;
}
export class QueryResultsS3AccessGrantsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryResultsS3AccessGrantsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._createUserLevelPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.createUserLevelPrefix = this._createUserLevelPrefix;
    }
    if (this._enableS3AccessGrants !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableS3AccessGrants = this._enableS3AccessGrants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryResultsS3AccessGrantsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._createUserLevelPrefix = undefined;
      this._enableS3AccessGrants = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._createUserLevelPrefix = value.createUserLevelPrefix;
      this._enableS3AccessGrants = value.enableS3AccessGrants;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // create_user_level_prefix - computed: false, optional: true, required: false
  private _createUserLevelPrefix?: boolean | cdktn.IResolvable; 
  public get createUserLevelPrefix() {
    return this.getBooleanAttribute('create_user_level_prefix');
  }
  public set createUserLevelPrefix(value: boolean | cdktn.IResolvable) {
    this._createUserLevelPrefix = value;
  }
  public resetCreateUserLevelPrefix() {
    this._createUserLevelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUserLevelPrefixInput() {
    return this._createUserLevelPrefix;
  }

  // enable_s3_access_grants - computed: false, optional: false, required: true
  private _enableS3AccessGrants?: boolean | cdktn.IResolvable; 
  public get enableS3AccessGrants() {
    return this.getBooleanAttribute('enable_s3_access_grants');
  }
  public set enableS3AccessGrants(value: boolean | cdktn.IResolvable) {
    this._enableS3AccessGrants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableS3AccessGrantsInput() {
    return this._enableS3AccessGrants;
  }
}
export interface AclConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#s3_acl_option TfWorkgroup#s3_acl_option}
  */
  readonly s3AclOption: string;
}
export class AclConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AclConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3AclOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AclOption = this._s3AclOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3AclOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3AclOption = value.s3AclOption;
    }
  }

  // s3_acl_option - computed: false, optional: false, required: true
  private _s3AclOption?: string; 
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
  public set s3AclOption(value: string) {
    this._s3AclOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AclOptionInput() {
    return this._s3AclOption;
  }
}
export interface ConfigurationResultConfigurationEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#encryption_option TfWorkgroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#kms_key_arn TfWorkgroup#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class ConfigurationResultConfigurationEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationResultConfigurationEncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationResultConfigurationEncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionOption = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_option - computed: false, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
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
export interface ResultConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#expected_bucket_owner TfWorkgroup#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#output_location TfWorkgroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * acl_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#acl_configuration TfWorkgroup#acl_configuration}
  */
  readonly aclConfiguration?: AclConfigurationProperty;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#encryption_configuration TfWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: ConfigurationResultConfigurationEncryptionConfigurationProperty;
}
export class ResultConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResultConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    if (this._aclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResultConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedBucketOwner = undefined;
      this._outputLocation = undefined;
      this._aclConfiguration.internalValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedBucketOwner = value.expectedBucketOwner;
      this._outputLocation = value.outputLocation;
      this._aclConfiguration.internalValue = value.aclConfiguration;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
    }
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }

  // acl_configuration - computed: false, optional: true, required: false
  private _aclConfiguration = new AclConfigurationPropertyOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }
  public putAclConfiguration(value: AclConfigurationProperty) {
    this._aclConfiguration.internalValue = value;
  }
  public resetAclConfiguration() {
    this._aclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigurationInput() {
    return this._aclConfiguration.internalValue;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new ConfigurationResultConfigurationEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: ConfigurationResultConfigurationEncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query TfWorkgroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration TfWorkgroup#enable_minimum_encryption_configuration}
  */
  readonly enableMinimumEncryptionConfiguration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#enforce_workgroup_configuration TfWorkgroup#enforce_workgroup_configuration}
  */
  readonly enforceWorkgroupConfiguration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#execution_role TfWorkgroup#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled TfWorkgroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#requester_pays_enabled TfWorkgroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktn.IResolvable;
  /**
  * customer_content_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#customer_content_encryption_configuration TfWorkgroup#customer_content_encryption_configuration}
  */
  readonly customerContentEncryptionConfiguration?: CustomerContentEncryptionConfigurationProperty;
  /**
  * engine_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#engine_version TfWorkgroup#engine_version}
  */
  readonly engineVersion?: EngineVersionProperty;
  /**
  * identity_center_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#identity_center_configuration TfWorkgroup#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: IdentityCenterConfigurationProperty;
  /**
  * managed_query_results_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#managed_query_results_configuration TfWorkgroup#managed_query_results_configuration}
  */
  readonly managedQueryResultsConfiguration?: ManagedQueryResultsConfigurationProperty;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#monitoring_configuration TfWorkgroup#monitoring_configuration}
  */
  readonly monitoringConfiguration?: MonitoringConfigurationProperty;
  /**
  * query_results_s3_access_grants_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#query_results_s3_access_grants_configuration TfWorkgroup#query_results_s3_access_grants_configuration}
  */
  readonly queryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfigurationProperty;
  /**
  * result_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/athena_workgroup#result_configuration TfWorkgroup#result_configuration}
  */
  readonly resultConfiguration?: ResultConfigurationProperty;
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
    if (this._bytesScannedCutoffPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
    }
    if (this._enableMinimumEncryptionConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMinimumEncryptionConfiguration = this._enableMinimumEncryptionConfiguration;
    }
    if (this._enforceWorkgroupConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceWorkgroupConfiguration = this._enforceWorkgroupConfiguration;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._publishCloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
    }
    if (this._requesterPaysEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
    }
    if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
    }
    if (this._engineVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion?.internalValue;
    }
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._queryResultsS3AccessGrantsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryResultsS3AccessGrantsConfiguration = this._queryResultsS3AccessGrantsConfiguration?.internalValue;
    }
    if (this._resultConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultConfiguration = this._resultConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesScannedCutoffPerQuery = undefined;
      this._enableMinimumEncryptionConfiguration = undefined;
      this._enforceWorkgroupConfiguration = undefined;
      this._executionRole = undefined;
      this._publishCloudwatchMetricsEnabled = undefined;
      this._requesterPaysEnabled = undefined;
      this._customerContentEncryptionConfiguration.internalValue = undefined;
      this._engineVersion.internalValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._managedQueryResultsConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._queryResultsS3AccessGrantsConfiguration.internalValue = undefined;
      this._resultConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
      this._enableMinimumEncryptionConfiguration = value.enableMinimumEncryptionConfiguration;
      this._enforceWorkgroupConfiguration = value.enforceWorkgroupConfiguration;
      this._executionRole = value.executionRole;
      this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
      this._requesterPaysEnabled = value.requesterPaysEnabled;
      this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
      this._engineVersion.internalValue = value.engineVersion;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._queryResultsS3AccessGrantsConfiguration.internalValue = value.queryResultsS3AccessGrantsConfiguration;
      this._resultConfiguration.internalValue = value.resultConfiguration;
    }
  }

  // bytes_scanned_cutoff_per_query - computed: false, optional: true, required: false
  private _bytesScannedCutoffPerQuery?: number; 
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }
  public set bytesScannedCutoffPerQuery(value: number) {
    this._bytesScannedCutoffPerQuery = value;
  }
  public resetBytesScannedCutoffPerQuery() {
    this._bytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesScannedCutoffPerQueryInput() {
    return this._bytesScannedCutoffPerQuery;
  }

  // enable_minimum_encryption_configuration - computed: true, optional: true, required: false
  private _enableMinimumEncryptionConfiguration?: boolean | cdktn.IResolvable; 
  public get enableMinimumEncryptionConfiguration() {
    return this.getBooleanAttribute('enable_minimum_encryption_configuration');
  }
  public set enableMinimumEncryptionConfiguration(value: boolean | cdktn.IResolvable) {
    this._enableMinimumEncryptionConfiguration = value;
  }
  public resetEnableMinimumEncryptionConfiguration() {
    this._enableMinimumEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMinimumEncryptionConfigurationInput() {
    return this._enableMinimumEncryptionConfiguration;
  }

  // enforce_workgroup_configuration - computed: false, optional: true, required: false
  private _enforceWorkgroupConfiguration?: boolean | cdktn.IResolvable; 
  public get enforceWorkgroupConfiguration() {
    return this.getBooleanAttribute('enforce_workgroup_configuration');
  }
  public set enforceWorkgroupConfiguration(value: boolean | cdktn.IResolvable) {
    this._enforceWorkgroupConfiguration = value;
  }
  public resetEnforceWorkgroupConfiguration() {
    this._enforceWorkgroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWorkgroupConfigurationInput() {
    return this._enforceWorkgroupConfiguration;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // publish_cloudwatch_metrics_enabled - computed: false, optional: true, required: false
  private _publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }
  public set publishCloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._publishCloudwatchMetricsEnabled = value;
  }
  public resetPublishCloudwatchMetricsEnabled() {
    this._publishCloudwatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCloudwatchMetricsEnabledInput() {
    return this._publishCloudwatchMetricsEnabled;
  }

  // requester_pays_enabled - computed: false, optional: true, required: false
  private _requesterPaysEnabled?: boolean | cdktn.IResolvable; 
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }
  public set requesterPaysEnabled(value: boolean | cdktn.IResolvable) {
    this._requesterPaysEnabled = value;
  }
  public resetRequesterPaysEnabled() {
    this._requesterPaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysEnabledInput() {
    return this._requesterPaysEnabled;
  }

  // customer_content_encryption_configuration - computed: false, optional: true, required: false
  private _customerContentEncryptionConfiguration = new CustomerContentEncryptionConfigurationPropertyOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }
  public putCustomerContentEncryptionConfiguration(value: CustomerContentEncryptionConfigurationProperty) {
    this._customerContentEncryptionConfiguration.internalValue = value;
  }
  public resetCustomerContentEncryptionConfiguration() {
    this._customerContentEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContentEncryptionConfigurationInput() {
    return this._customerContentEncryptionConfiguration.internalValue;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion = new EngineVersionPropertyOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }
  public putEngineVersion(value: EngineVersionProperty) {
    this._engineVersion.internalValue = value;
  }
  public resetEngineVersion() {
    this._engineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion.internalValue;
  }

  // identity_center_configuration - computed: false, optional: true, required: false
  private _identityCenterConfiguration = new IdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: IdentityCenterConfigurationProperty) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }

  // managed_query_results_configuration - computed: false, optional: true, required: false
  private _managedQueryResultsConfiguration = new ManagedQueryResultsConfigurationPropertyOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }
  public putManagedQueryResultsConfiguration(value: ManagedQueryResultsConfigurationProperty) {
    this._managedQueryResultsConfiguration.internalValue = value;
  }
  public resetManagedQueryResultsConfiguration() {
    this._managedQueryResultsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedQueryResultsConfigurationInput() {
    return this._managedQueryResultsConfiguration.internalValue;
  }

  // monitoring_configuration - computed: false, optional: true, required: false
  private _monitoringConfiguration = new MonitoringConfigurationPropertyOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: MonitoringConfigurationProperty) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // query_results_s3_access_grants_configuration - computed: false, optional: true, required: false
  private _queryResultsS3AccessGrantsConfiguration = new QueryResultsS3AccessGrantsConfigurationPropertyOutputReference(this, "query_results_s3_access_grants_configuration");
  public get queryResultsS3AccessGrantsConfiguration() {
    return this._queryResultsS3AccessGrantsConfiguration;
  }
  public putQueryResultsS3AccessGrantsConfiguration(value: QueryResultsS3AccessGrantsConfigurationProperty) {
    this._queryResultsS3AccessGrantsConfiguration.internalValue = value;
  }
  public resetQueryResultsS3AccessGrantsConfiguration() {
    this._queryResultsS3AccessGrantsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryResultsS3AccessGrantsConfigurationInput() {
    return this._queryResultsS3AccessGrantsConfiguration.internalValue;
  }

  // result_configuration - computed: false, optional: true, required: false
  private _resultConfiguration = new ResultConfigurationPropertyOutputReference(this, "result_configuration");
  public get resultConfiguration() {
    return this._resultConfiguration;
  }
  public putResultConfiguration(value: ResultConfigurationProperty) {
    this._resultConfiguration.internalValue = value;
  }
  public resetResultConfiguration() {
    this._resultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigurationInput() {
    return this._resultConfiguration.internalValue;
  }
}
}
