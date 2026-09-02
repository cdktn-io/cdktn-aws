// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_mode TfApplication#application_mode}
  */
  readonly applicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#description TfApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#force_stop TfApplication#force_stop}
  */
  readonly forceStop?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#id TfApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#name TfApplication#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#region TfApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#runtime_environment TfApplication#runtime_environment}
  */
  readonly runtimeEnvironment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#service_execution_role TfApplication#service_execution_role}
  */
  readonly serviceExecutionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#start_application TfApplication#start_application}
  */
  readonly startApplication?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#tags TfApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#tags_all TfApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_configuration TfApplication#application_configuration}
  */
  readonly applicationConfiguration?: TfApplication.ApplicationConfigurationProperty;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#cloudwatch_logging_options TfApplication#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: TfApplication.CloudwatchLoggingOptionsProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#timeouts TfApplication#timeouts}
  */
  readonly timeouts?: TfApplication.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application aws_kinesisanalyticsv2_application}
*/
export class TfApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesisanalyticsv2_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfApplication to import
  * @param importFromId The id of the existing TfApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesisanalyticsv2_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application aws_kinesisanalyticsv2_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: TfApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesisanalyticsv2_application',
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
    this._applicationMode = config.applicationMode;
    this._description = config.description;
    this._forceStop = config.forceStop;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._runtimeEnvironment = config.runtimeEnvironment;
    this._serviceExecutionRole = config.serviceExecutionRole;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_mode - computed: true, optional: true, required: false
  private _applicationMode?: string; 
  public get applicationMode() {
    return this.getStringAttribute('application_mode');
  }
  public set applicationMode(value: string) {
    this._applicationMode = value;
  }
  public resetApplicationMode() {
    this._applicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationModeInput() {
    return this._applicationMode;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
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

  // force_stop - computed: false, optional: true, required: false
  private _forceStop?: boolean | cdktn.IResolvable; 
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }
  public set forceStop(value: boolean | cdktn.IResolvable) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop;
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

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
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

  // runtime_environment - computed: false, optional: false, required: true
  private _runtimeEnvironment?: string; 
  public get runtimeEnvironment() {
    return this.getStringAttribute('runtime_environment');
  }
  public set runtimeEnvironment(value: string) {
    this._runtimeEnvironment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment;
  }

  // service_execution_role - computed: false, optional: false, required: true
  private _serviceExecutionRole?: string; 
  public get serviceExecutionRole() {
    return this.getStringAttribute('service_execution_role');
  }
  public set serviceExecutionRole(value: string) {
    this._serviceExecutionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleInput() {
    return this._serviceExecutionRole;
  }

  // start_application - computed: false, optional: true, required: false
  private _startApplication?: boolean | cdktn.IResolvable; 
  public get startApplication() {
    return this.getBooleanAttribute('start_application');
  }
  public set startApplication(value: boolean | cdktn.IResolvable) {
    this._startApplication = value;
  }
  public resetStartApplication() {
    this._startApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startApplicationInput() {
    return this._startApplication;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new TfApplication.ApplicationConfigurationPropertyOutputReference(this, "application_configuration");
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: TfApplication.ApplicationConfigurationProperty) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new TfApplication.CloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: TfApplication.CloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfApplication.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfApplication.TimeoutsProperty) {
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
      application_mode: cdktn.stringToTerraform(this._applicationMode),
      description: cdktn.stringToTerraform(this._description),
      force_stop: cdktn.booleanToTerraform(this._forceStop),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      runtime_environment: cdktn.stringToTerraform(this._runtimeEnvironment),
      service_execution_role: cdktn.stringToTerraform(this._serviceExecutionRole),
      start_application: cdktn.booleanToTerraform(this._startApplication),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      application_configuration: tfApplicationApplicationConfigurationPropertyToTerraform(this._applicationConfiguration.internalValue),
      cloudwatch_logging_options: tfApplicationCloudwatchLoggingOptionsPropertyToTerraform(this._cloudwatchLoggingOptions.internalValue),
      timeouts: tfApplicationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_mode: {
        value: cdktn.stringToHclTerraform(this._applicationMode),
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
      force_stop: {
        value: cdktn.booleanToHclTerraform(this._forceStop),
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
      runtime_environment: {
        value: cdktn.stringToHclTerraform(this._runtimeEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_execution_role: {
        value: cdktn.stringToHclTerraform(this._serviceExecutionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_application: {
        value: cdktn.booleanToHclTerraform(this._startApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      application_configuration: {
        value: tfApplicationApplicationConfigurationPropertyToHclTerraform(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfApplication.ApplicationConfigurationPropertyList",
      },
      cloudwatch_logging_options: {
        value: tfApplicationCloudwatchLoggingOptionsPropertyToHclTerraform(this._cloudwatchLoggingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfApplication.CloudwatchLoggingOptionsPropertyList",
      },
      timeouts: {
        value: tfApplicationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfApplication.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfApplicationS3ContentLocationPropertyToTerraform(struct?: TfApplication.S3ContentLocationPropertyOutputReference | TfApplication.S3ContentLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
    object_version: cdktn.stringToTerraform(struct!.objectVersion),
  }
}


export function tfApplicationS3ContentLocationPropertyToHclTerraform(struct?: TfApplication.S3ContentLocationPropertyOutputReference | TfApplication.S3ContentLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_version: {
      value: cdktn.stringToHclTerraform(struct!.objectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationCodeContentPropertyToTerraform(struct?: TfApplication.CodeContentPropertyOutputReference | TfApplication.CodeContentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text_content: cdktn.stringToTerraform(struct!.textContent),
    s3_content_location: tfApplicationS3ContentLocationPropertyToTerraform(struct!.s3ContentLocation),
  }
}


export function tfApplicationCodeContentPropertyToHclTerraform(struct?: TfApplication.CodeContentPropertyOutputReference | TfApplication.CodeContentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text_content: {
      value: cdktn.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_content_location: {
      value: tfApplicationS3ContentLocationPropertyToHclTerraform(struct!.s3ContentLocation),
      isBlock: true,
      type: "list",
      storageClassType: "S3ContentLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationCodeConfigurationPropertyToTerraform(struct?: TfApplication.ApplicationCodeConfigurationPropertyOutputReference | TfApplication.ApplicationCodeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_content_type: cdktn.stringToTerraform(struct!.codeContentType),
    code_content: tfApplicationCodeContentPropertyToTerraform(struct!.codeContent),
  }
}


export function tfApplicationApplicationCodeConfigurationPropertyToHclTerraform(struct?: TfApplication.ApplicationCodeConfigurationPropertyOutputReference | TfApplication.ApplicationCodeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_content_type: {
      value: cdktn.stringToHclTerraform(struct!.codeContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_content: {
      value: tfApplicationCodeContentPropertyToHclTerraform(struct!.codeContent),
      isBlock: true,
      type: "list",
      storageClassType: "CodeContentPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationEncryptionConfigurationPropertyToTerraform(struct?: TfApplication.ApplicationEncryptionConfigurationPropertyOutputReference | TfApplication.ApplicationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function tfApplicationApplicationEncryptionConfigurationPropertyToHclTerraform(struct?: TfApplication.ApplicationEncryptionConfigurationPropertyOutputReference | TfApplication.ApplicationEncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationSnapshotConfigurationPropertyToTerraform(struct?: TfApplication.ApplicationSnapshotConfigurationPropertyOutputReference | TfApplication.ApplicationSnapshotConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snapshots_enabled: cdktn.booleanToTerraform(struct!.snapshotsEnabled),
  }
}


export function tfApplicationApplicationSnapshotConfigurationPropertyToHclTerraform(struct?: TfApplication.ApplicationSnapshotConfigurationPropertyOutputReference | TfApplication.ApplicationSnapshotConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snapshots_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.snapshotsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationPropertyGroupPropertyToTerraform(struct?: TfApplication.PropertyGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_group_id: cdktn.stringToTerraform(struct!.propertyGroupId),
    property_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.propertyMap),
  }
}


export function tfApplicationPropertyGroupPropertyToHclTerraform(struct?: TfApplication.PropertyGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_group_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.propertyMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationEnvironmentPropertiesPropertyToTerraform(struct?: TfApplication.EnvironmentPropertiesPropertyOutputReference | TfApplication.EnvironmentPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_group: cdktn.listMapper(tfApplicationPropertyGroupPropertyToTerraform, true)(struct!.propertyGroup),
  }
}


export function tfApplicationEnvironmentPropertiesPropertyToHclTerraform(struct?: TfApplication.EnvironmentPropertiesPropertyOutputReference | TfApplication.EnvironmentPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_group: {
      value: cdktn.listMapperHcl(tfApplicationPropertyGroupPropertyToHclTerraform, true)(struct!.propertyGroup),
      isBlock: true,
      type: "set",
      storageClassType: "PropertyGroupPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationCheckpointConfigurationPropertyToTerraform(struct?: TfApplication.CheckpointConfigurationPropertyOutputReference | TfApplication.CheckpointConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    checkpoint_interval: cdktn.numberToTerraform(struct!.checkpointInterval),
    checkpointing_enabled: cdktn.booleanToTerraform(struct!.checkpointingEnabled),
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    min_pause_between_checkpoints: cdktn.numberToTerraform(struct!.minPauseBetweenCheckpoints),
  }
}


export function tfApplicationCheckpointConfigurationPropertyToHclTerraform(struct?: TfApplication.CheckpointConfigurationPropertyOutputReference | TfApplication.CheckpointConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    checkpoint_interval: {
      value: cdktn.numberToHclTerraform(struct!.checkpointInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    checkpointing_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.checkpointingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_pause_between_checkpoints: {
      value: cdktn.numberToHclTerraform(struct!.minPauseBetweenCheckpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationMonitoringConfigurationPropertyToTerraform(struct?: TfApplication.MonitoringConfigurationPropertyOutputReference | TfApplication.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    metrics_level: cdktn.stringToTerraform(struct!.metricsLevel),
  }
}


export function tfApplicationMonitoringConfigurationPropertyToHclTerraform(struct?: TfApplication.MonitoringConfigurationPropertyOutputReference | TfApplication.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_level: {
      value: cdktn.stringToHclTerraform(struct!.metricsLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationParallelismConfigurationPropertyToTerraform(struct?: TfApplication.ParallelismConfigurationPropertyOutputReference | TfApplication.ParallelismConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_enabled: cdktn.booleanToTerraform(struct!.autoScalingEnabled),
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    parallelism_per_kpu: cdktn.numberToTerraform(struct!.parallelismPerKpu),
  }
}


export function tfApplicationParallelismConfigurationPropertyToHclTerraform(struct?: TfApplication.ParallelismConfigurationPropertyOutputReference | TfApplication.ParallelismConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism_per_kpu: {
      value: cdktn.numberToHclTerraform(struct!.parallelismPerKpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationFlinkApplicationConfigurationPropertyToTerraform(struct?: TfApplication.FlinkApplicationConfigurationPropertyOutputReference | TfApplication.FlinkApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    checkpoint_configuration: tfApplicationCheckpointConfigurationPropertyToTerraform(struct!.checkpointConfiguration),
    monitoring_configuration: tfApplicationMonitoringConfigurationPropertyToTerraform(struct!.monitoringConfiguration),
    parallelism_configuration: tfApplicationParallelismConfigurationPropertyToTerraform(struct!.parallelismConfiguration),
  }
}


export function tfApplicationFlinkApplicationConfigurationPropertyToHclTerraform(struct?: TfApplication.FlinkApplicationConfigurationPropertyOutputReference | TfApplication.FlinkApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    checkpoint_configuration: {
      value: tfApplicationCheckpointConfigurationPropertyToHclTerraform(struct!.checkpointConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CheckpointConfigurationPropertyList",
    },
    monitoring_configuration: {
      value: tfApplicationMonitoringConfigurationPropertyToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringConfigurationPropertyList",
    },
    parallelism_configuration: {
      value: tfApplicationParallelismConfigurationPropertyToHclTerraform(struct!.parallelismConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ParallelismConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationRestoreConfigurationPropertyToTerraform(struct?: TfApplication.ApplicationRestoreConfigurationPropertyOutputReference | TfApplication.ApplicationRestoreConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_restore_type: cdktn.stringToTerraform(struct!.applicationRestoreType),
    snapshot_name: cdktn.stringToTerraform(struct!.snapshotName),
  }
}


export function tfApplicationApplicationRestoreConfigurationPropertyToHclTerraform(struct?: TfApplication.ApplicationRestoreConfigurationPropertyOutputReference | TfApplication.ApplicationRestoreConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_restore_type: {
      value: cdktn.stringToHclTerraform(struct!.applicationRestoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_name: {
      value: cdktn.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationFlinkRunConfigurationPropertyToTerraform(struct?: TfApplication.FlinkRunConfigurationPropertyOutputReference | TfApplication.FlinkRunConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_non_restored_state: cdktn.booleanToTerraform(struct!.allowNonRestoredState),
  }
}


export function tfApplicationFlinkRunConfigurationPropertyToHclTerraform(struct?: TfApplication.FlinkRunConfigurationPropertyOutputReference | TfApplication.FlinkRunConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_non_restored_state: {
      value: cdktn.booleanToHclTerraform(struct!.allowNonRestoredState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationRunConfigurationPropertyToTerraform(struct?: TfApplication.RunConfigurationPropertyOutputReference | TfApplication.RunConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_restore_configuration: tfApplicationApplicationRestoreConfigurationPropertyToTerraform(struct!.applicationRestoreConfiguration),
    flink_run_configuration: tfApplicationFlinkRunConfigurationPropertyToTerraform(struct!.flinkRunConfiguration),
  }
}


export function tfApplicationRunConfigurationPropertyToHclTerraform(struct?: TfApplication.RunConfigurationPropertyOutputReference | TfApplication.RunConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_restore_configuration: {
      value: tfApplicationApplicationRestoreConfigurationPropertyToHclTerraform(struct!.applicationRestoreConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRestoreConfigurationPropertyList",
    },
    flink_run_configuration: {
      value: tfApplicationFlinkRunConfigurationPropertyToHclTerraform(struct!.flinkRunConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FlinkRunConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputParallelismPropertyToTerraform(struct?: TfApplication.InputParallelismPropertyOutputReference | TfApplication.InputParallelismProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
  }
}


export function tfApplicationInputParallelismPropertyToHclTerraform(struct?: TfApplication.InputParallelismPropertyOutputReference | TfApplication.InputParallelismProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputLambdaProcessorPropertyToTerraform(struct?: TfApplication.InputLambdaProcessorPropertyOutputReference | TfApplication.InputLambdaProcessorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationInputLambdaProcessorPropertyToHclTerraform(struct?: TfApplication.InputLambdaProcessorPropertyOutputReference | TfApplication.InputLambdaProcessorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputProcessingConfigurationPropertyToTerraform(struct?: TfApplication.InputProcessingConfigurationPropertyOutputReference | TfApplication.InputProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_lambda_processor: tfApplicationInputLambdaProcessorPropertyToTerraform(struct!.inputLambdaProcessor),
  }
}


export function tfApplicationInputProcessingConfigurationPropertyToHclTerraform(struct?: TfApplication.InputProcessingConfigurationPropertyOutputReference | TfApplication.InputProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_lambda_processor: {
      value: tfApplicationInputLambdaProcessorPropertyToHclTerraform(struct!.inputLambdaProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "InputLambdaProcessorPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping: cdktn.stringToTerraform(struct!.mapping),
    name: cdktn.stringToTerraform(struct!.name),
    sql_type: cdktn.stringToTerraform(struct!.sqlType),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping: {
      value: cdktn.stringToHclTerraform(struct!.mapping),
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
    sql_type: {
      value: cdktn.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_column_delimiter: cdktn.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktn.stringToTerraform(struct!.recordRowDelimiter),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_column_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordColumnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_row_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordRowDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_row_path: cdktn.stringToTerraform(struct!.recordRowPath),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_row_path: {
      value: cdktn.stringToHclTerraform(struct!.recordRowPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv_mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToTerraform(struct!.csvMappingParameters),
    json_mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToTerraform(struct!.jsonMappingParameters),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv_mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToHclTerraform(struct!.csvMappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyList",
    },
    json_mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToHclTerraform(struct!.jsonMappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
    mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyToTerraform(struct!.mappingParameters),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_format_type: {
      value: cdktn.stringToHclTerraform(struct!.recordFormatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct!.mappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputSchemaPropertyToTerraform(struct?: TfApplication.InputSchemaPropertyOutputReference | TfApplication.InputSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_encoding: cdktn.stringToTerraform(struct!.recordEncoding),
    record_column: cdktn.listMapper(tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyToTerraform, true)(struct!.recordColumn),
    record_format: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyToTerraform(struct!.recordFormat),
  }
}


export function tfApplicationInputSchemaPropertyToHclTerraform(struct?: TfApplication.InputSchemaPropertyOutputReference | TfApplication.InputSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_encoding: {
      value: cdktn.stringToHclTerraform(struct!.recordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_column: {
      value: cdktn.listMapperHcl(tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyToHclTerraform, true)(struct!.recordColumn),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyList",
    },
    record_format: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyToHclTerraform(struct!.recordFormat),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputStartingPositionConfigurationPropertyToTerraform(struct?: TfApplication.InputStartingPositionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_starting_position: cdktn.stringToTerraform(struct!.inputStartingPosition),
  }
}


export function tfApplicationInputStartingPositionConfigurationPropertyToHclTerraform(struct?: TfApplication.InputStartingPositionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_starting_position: {
      value: cdktn.stringToHclTerraform(struct!.inputStartingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationKinesisFirehoseInputPropertyToTerraform(struct?: TfApplication.KinesisFirehoseInputPropertyOutputReference | TfApplication.KinesisFirehoseInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationKinesisFirehoseInputPropertyToHclTerraform(struct?: TfApplication.KinesisFirehoseInputPropertyOutputReference | TfApplication.KinesisFirehoseInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationKinesisStreamsInputPropertyToTerraform(struct?: TfApplication.KinesisStreamsInputPropertyOutputReference | TfApplication.KinesisStreamsInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationKinesisStreamsInputPropertyToHclTerraform(struct?: TfApplication.KinesisStreamsInputPropertyOutputReference | TfApplication.KinesisStreamsInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationInputPropertyToTerraform(struct?: TfApplication.InputPropertyOutputReference | TfApplication.InputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name_prefix: cdktn.stringToTerraform(struct!.namePrefix),
    input_parallelism: tfApplicationInputParallelismPropertyToTerraform(struct!.inputParallelism),
    input_processing_configuration: tfApplicationInputProcessingConfigurationPropertyToTerraform(struct!.inputProcessingConfiguration),
    input_schema: tfApplicationInputSchemaPropertyToTerraform(struct!.inputSchema),
    input_starting_position_configuration: cdktn.listMapper(tfApplicationInputStartingPositionConfigurationPropertyToTerraform, true)(struct!.inputStartingPositionConfiguration),
    kinesis_firehose_input: tfApplicationKinesisFirehoseInputPropertyToTerraform(struct!.kinesisFirehoseInput),
    kinesis_streams_input: tfApplicationKinesisStreamsInputPropertyToTerraform(struct!.kinesisStreamsInput),
  }
}


export function tfApplicationInputPropertyToHclTerraform(struct?: TfApplication.InputPropertyOutputReference | TfApplication.InputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_parallelism: {
      value: tfApplicationInputParallelismPropertyToHclTerraform(struct!.inputParallelism),
      isBlock: true,
      type: "list",
      storageClassType: "InputParallelismPropertyList",
    },
    input_processing_configuration: {
      value: tfApplicationInputProcessingConfigurationPropertyToHclTerraform(struct!.inputProcessingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InputProcessingConfigurationPropertyList",
    },
    input_schema: {
      value: tfApplicationInputSchemaPropertyToHclTerraform(struct!.inputSchema),
      isBlock: true,
      type: "list",
      storageClassType: "InputSchemaPropertyList",
    },
    input_starting_position_configuration: {
      value: cdktn.listMapperHcl(tfApplicationInputStartingPositionConfigurationPropertyToHclTerraform, true)(struct!.inputStartingPositionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InputStartingPositionConfigurationPropertyList",
    },
    kinesis_firehose_input: {
      value: tfApplicationKinesisFirehoseInputPropertyToHclTerraform(struct!.kinesisFirehoseInput),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseInputPropertyList",
    },
    kinesis_streams_input: {
      value: tfApplicationKinesisStreamsInputPropertyToHclTerraform(struct!.kinesisStreamsInput),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisStreamsInputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationDestinationSchemaPropertyToTerraform(struct?: TfApplication.DestinationSchemaPropertyOutputReference | TfApplication.DestinationSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
  }
}


export function tfApplicationDestinationSchemaPropertyToHclTerraform(struct?: TfApplication.DestinationSchemaPropertyOutputReference | TfApplication.DestinationSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_format_type: {
      value: cdktn.stringToHclTerraform(struct!.recordFormatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationKinesisFirehoseOutputPropertyToTerraform(struct?: TfApplication.KinesisFirehoseOutputPropertyOutputReference | TfApplication.KinesisFirehoseOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationKinesisFirehoseOutputPropertyToHclTerraform(struct?: TfApplication.KinesisFirehoseOutputPropertyOutputReference | TfApplication.KinesisFirehoseOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationKinesisStreamsOutputPropertyToTerraform(struct?: TfApplication.KinesisStreamsOutputPropertyOutputReference | TfApplication.KinesisStreamsOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationKinesisStreamsOutputPropertyToHclTerraform(struct?: TfApplication.KinesisStreamsOutputPropertyOutputReference | TfApplication.KinesisStreamsOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationLambdaOutputPropertyToTerraform(struct?: TfApplication.LambdaOutputPropertyOutputReference | TfApplication.LambdaOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function tfApplicationLambdaOutputPropertyToHclTerraform(struct?: TfApplication.LambdaOutputPropertyOutputReference | TfApplication.LambdaOutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationOutputPropertyToTerraform(struct?: TfApplication.OutputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    destination_schema: tfApplicationDestinationSchemaPropertyToTerraform(struct!.destinationSchema),
    kinesis_firehose_output: tfApplicationKinesisFirehoseOutputPropertyToTerraform(struct!.kinesisFirehoseOutput),
    kinesis_streams_output: tfApplicationKinesisStreamsOutputPropertyToTerraform(struct!.kinesisStreamsOutput),
    lambda_output: tfApplicationLambdaOutputPropertyToTerraform(struct!.lambdaOutput),
  }
}


export function tfApplicationOutputPropertyToHclTerraform(struct?: TfApplication.OutputProperty | cdktn.IResolvable): any {
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
    destination_schema: {
      value: tfApplicationDestinationSchemaPropertyToHclTerraform(struct!.destinationSchema),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationSchemaPropertyList",
    },
    kinesis_firehose_output: {
      value: tfApplicationKinesisFirehoseOutputPropertyToHclTerraform(struct!.kinesisFirehoseOutput),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseOutputPropertyList",
    },
    kinesis_streams_output: {
      value: tfApplicationKinesisStreamsOutputPropertyToHclTerraform(struct!.kinesisStreamsOutput),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisStreamsOutputPropertyList",
    },
    lambda_output: {
      value: tfApplicationLambdaOutputPropertyToHclTerraform(struct!.lambdaOutput),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaOutputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping: cdktn.stringToTerraform(struct!.mapping),
    name: cdktn.stringToTerraform(struct!.name),
    sql_type: cdktn.stringToTerraform(struct!.sqlType),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping: {
      value: cdktn.stringToHclTerraform(struct!.mapping),
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
    sql_type: {
      value: cdktn.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_column_delimiter: cdktn.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktn.stringToTerraform(struct!.recordRowDelimiter),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_column_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordColumnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_row_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordRowDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_row_path: cdktn.stringToTerraform(struct!.recordRowPath),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_row_path: {
      value: cdktn.stringToHclTerraform(struct!.recordRowPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv_mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToTerraform(struct!.csvMappingParameters),
    json_mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToTerraform(struct!.jsonMappingParameters),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv_mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyToHclTerraform(struct!.csvMappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyList",
    },
    json_mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyToHclTerraform(struct!.jsonMappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
    mapping_parameters: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyToTerraform(struct!.mappingParameters),
  }
}


export function tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyOutputReference | TfApplication.ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_format_type: {
      value: cdktn.stringToHclTerraform(struct!.recordFormatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_parameters: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct!.mappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationReferenceSchemaPropertyToTerraform(struct?: TfApplication.ReferenceSchemaPropertyOutputReference | TfApplication.ReferenceSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_encoding: cdktn.stringToTerraform(struct!.recordEncoding),
    record_column: cdktn.listMapper(tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyToTerraform, true)(struct!.recordColumn),
    record_format: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyToTerraform(struct!.recordFormat),
  }
}


export function tfApplicationReferenceSchemaPropertyToHclTerraform(struct?: TfApplication.ReferenceSchemaPropertyOutputReference | TfApplication.ReferenceSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_encoding: {
      value: cdktn.stringToHclTerraform(struct!.recordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_column: {
      value: cdktn.listMapperHcl(tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyToHclTerraform, true)(struct!.recordColumn),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyList",
    },
    record_format: {
      value: tfApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyToHclTerraform(struct!.recordFormat),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationS3ReferenceDataSourcePropertyToTerraform(struct?: TfApplication.S3ReferenceDataSourcePropertyOutputReference | TfApplication.S3ReferenceDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
  }
}


export function tfApplicationS3ReferenceDataSourcePropertyToHclTerraform(struct?: TfApplication.S3ReferenceDataSourcePropertyOutputReference | TfApplication.S3ReferenceDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationReferenceDataSourcePropertyToTerraform(struct?: TfApplication.ReferenceDataSourcePropertyOutputReference | TfApplication.ReferenceDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
    reference_schema: tfApplicationReferenceSchemaPropertyToTerraform(struct!.referenceSchema),
    s3_reference_data_source: tfApplicationS3ReferenceDataSourcePropertyToTerraform(struct!.s3ReferenceDataSource),
  }
}


export function tfApplicationReferenceDataSourcePropertyToHclTerraform(struct?: TfApplication.ReferenceDataSourcePropertyOutputReference | TfApplication.ReferenceDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_schema: {
      value: tfApplicationReferenceSchemaPropertyToHclTerraform(struct!.referenceSchema),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceSchemaPropertyList",
    },
    s3_reference_data_source: {
      value: tfApplicationS3ReferenceDataSourcePropertyToHclTerraform(struct!.s3ReferenceDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "S3ReferenceDataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationSqlApplicationConfigurationPropertyToTerraform(struct?: TfApplication.SqlApplicationConfigurationPropertyOutputReference | TfApplication.SqlApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: tfApplicationInputPropertyToTerraform(struct!.input),
    output: cdktn.listMapper(tfApplicationOutputPropertyToTerraform, true)(struct!.output),
    reference_data_source: tfApplicationReferenceDataSourcePropertyToTerraform(struct!.referenceDataSource),
  }
}


export function tfApplicationSqlApplicationConfigurationPropertyToHclTerraform(struct?: TfApplication.SqlApplicationConfigurationPropertyOutputReference | TfApplication.SqlApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: tfApplicationInputPropertyToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "InputPropertyList",
    },
    output: {
      value: cdktn.listMapperHcl(tfApplicationOutputPropertyToHclTerraform, true)(struct!.output),
      isBlock: true,
      type: "set",
      storageClassType: "OutputPropertyList",
    },
    reference_data_source: {
      value: tfApplicationReferenceDataSourcePropertyToHclTerraform(struct!.referenceDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationVpcConfigurationPropertyToTerraform(struct?: TfApplication.VpcConfigurationPropertyOutputReference | TfApplication.VpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function tfApplicationVpcConfigurationPropertyToHclTerraform(struct?: TfApplication.VpcConfigurationPropertyOutputReference | TfApplication.VpcConfigurationProperty): any {
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
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationApplicationConfigurationPropertyToTerraform(struct?: TfApplication.ApplicationConfigurationPropertyOutputReference | TfApplication.ApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_code_configuration: tfApplicationApplicationCodeConfigurationPropertyToTerraform(struct!.applicationCodeConfiguration),
    application_encryption_configuration: tfApplicationApplicationEncryptionConfigurationPropertyToTerraform(struct!.applicationEncryptionConfiguration),
    application_snapshot_configuration: tfApplicationApplicationSnapshotConfigurationPropertyToTerraform(struct!.applicationSnapshotConfiguration),
    environment_properties: tfApplicationEnvironmentPropertiesPropertyToTerraform(struct!.environmentProperties),
    flink_application_configuration: tfApplicationFlinkApplicationConfigurationPropertyToTerraform(struct!.flinkApplicationConfiguration),
    run_configuration: tfApplicationRunConfigurationPropertyToTerraform(struct!.runConfiguration),
    sql_application_configuration: tfApplicationSqlApplicationConfigurationPropertyToTerraform(struct!.sqlApplicationConfiguration),
    vpc_configuration: tfApplicationVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
  }
}


export function tfApplicationApplicationConfigurationPropertyToHclTerraform(struct?: TfApplication.ApplicationConfigurationPropertyOutputReference | TfApplication.ApplicationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_code_configuration: {
      value: tfApplicationApplicationCodeConfigurationPropertyToHclTerraform(struct!.applicationCodeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationCodeConfigurationPropertyList",
    },
    application_encryption_configuration: {
      value: tfApplicationApplicationEncryptionConfigurationPropertyToHclTerraform(struct!.applicationEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationEncryptionConfigurationPropertyList",
    },
    application_snapshot_configuration: {
      value: tfApplicationApplicationSnapshotConfigurationPropertyToHclTerraform(struct!.applicationSnapshotConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSnapshotConfigurationPropertyList",
    },
    environment_properties: {
      value: tfApplicationEnvironmentPropertiesPropertyToHclTerraform(struct!.environmentProperties),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentPropertiesPropertyList",
    },
    flink_application_configuration: {
      value: tfApplicationFlinkApplicationConfigurationPropertyToHclTerraform(struct!.flinkApplicationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FlinkApplicationConfigurationPropertyList",
    },
    run_configuration: {
      value: tfApplicationRunConfigurationPropertyToHclTerraform(struct!.runConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RunConfigurationPropertyList",
    },
    sql_application_configuration: {
      value: tfApplicationSqlApplicationConfigurationPropertyToHclTerraform(struct!.sqlApplicationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SqlApplicationConfigurationPropertyList",
    },
    vpc_configuration: {
      value: tfApplicationVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfApplication.CloudwatchLoggingOptionsPropertyOutputReference | TfApplication.CloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_stream_arn: cdktn.stringToTerraform(struct!.logStreamArn),
  }
}


export function tfApplicationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfApplication.CloudwatchLoggingOptionsPropertyOutputReference | TfApplication.CloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.logStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfApplicationTimeoutsPropertyToTerraform(struct?: TfApplication.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfApplicationTimeoutsPropertyToHclTerraform(struct?: TfApplication.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfApplication {
export interface S3ContentLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#bucket_arn TfApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#file_key TfApplication#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#object_version TfApplication#object_version}
  */
  readonly objectVersion?: string;
}
export class S3ContentLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ContentLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._objectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersion = this._objectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ContentLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._objectVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._objectVersion = value.objectVersion;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }

  // object_version - computed: false, optional: true, required: false
  private _objectVersion?: string; 
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
  public set objectVersion(value: string) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }
}
export interface CodeContentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#text_content TfApplication#text_content}
  */
  readonly textContent?: string;
  /**
  * s3_content_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#s3_content_location TfApplication#s3_content_location}
  */
  readonly s3ContentLocation?: S3ContentLocationProperty;
}
export class CodeContentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeContentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._s3ContentLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ContentLocation = this._s3ContentLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeContentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textContent = undefined;
      this._s3ContentLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textContent = value.textContent;
      this._s3ContentLocation.internalValue = value.s3ContentLocation;
    }
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // s3_content_location - computed: false, optional: true, required: false
  private _s3ContentLocation = new S3ContentLocationPropertyOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
  public putS3ContentLocation(value: S3ContentLocationProperty) {
    this._s3ContentLocation.internalValue = value;
  }
  public resetS3ContentLocation() {
    this._s3ContentLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ContentLocationInput() {
    return this._s3ContentLocation.internalValue;
  }
}
export interface ApplicationCodeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#code_content_type TfApplication#code_content_type}
  */
  readonly codeContentType: string;
  /**
  * code_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#code_content TfApplication#code_content}
  */
  readonly codeContent?: CodeContentProperty;
}
export class ApplicationCodeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationCodeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeContentType = this._codeContentType;
    }
    if (this._codeContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeContent = this._codeContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationCodeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeContentType = undefined;
      this._codeContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeContentType = value.codeContentType;
      this._codeContent.internalValue = value.codeContent;
    }
  }

  // code_content_type - computed: false, optional: false, required: true
  private _codeContentType?: string; 
  public get codeContentType() {
    return this.getStringAttribute('code_content_type');
  }
  public set codeContentType(value: string) {
    this._codeContentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeContentTypeInput() {
    return this._codeContentType;
  }

  // code_content - computed: false, optional: true, required: false
  private _codeContent = new CodeContentPropertyOutputReference(this, "code_content");
  public get codeContent() {
    return this._codeContent;
  }
  public putCodeContent(value: CodeContentProperty) {
    this._codeContent.internalValue = value;
  }
  public resetCodeContent() {
    this._codeContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeContentInput() {
    return this._codeContent.internalValue;
  }
}
export interface ApplicationEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#key_id TfApplication#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#key_type TfApplication#key_type}
  */
  readonly keyType: string;
}
export class ApplicationEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationEncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface ApplicationSnapshotConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#snapshots_enabled TfApplication#snapshots_enabled}
  */
  readonly snapshotsEnabled: boolean | cdktn.IResolvable;
}
export class ApplicationSnapshotConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSnapshotConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsEnabled = this._snapshotsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSnapshotConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotsEnabled = value.snapshotsEnabled;
    }
  }

  // snapshots_enabled - computed: false, optional: false, required: true
  private _snapshotsEnabled?: boolean | cdktn.IResolvable; 
  public get snapshotsEnabled() {
    return this.getBooleanAttribute('snapshots_enabled');
  }
  public set snapshotsEnabled(value: boolean | cdktn.IResolvable) {
    this._snapshotsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsEnabledInput() {
    return this._snapshotsEnabled;
  }
}
export interface PropertyGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#property_group_id TfApplication#property_group_id}
  */
  readonly propertyGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#property_map TfApplication#property_map}
  */
  readonly propertyMap: { [key: string]: string };
}
export class PropertyGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PropertyGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGroupId = this._propertyGroupId;
    }
    if (this._propertyMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyMap = this._propertyMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyGroupId = undefined;
      this._propertyMap = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyGroupId = value.propertyGroupId;
      this._propertyMap = value.propertyMap;
    }
  }

  // property_group_id - computed: false, optional: false, required: true
  private _propertyGroupId?: string; 
  public get propertyGroupId() {
    return this.getStringAttribute('property_group_id');
  }
  public set propertyGroupId(value: string) {
    this._propertyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGroupIdInput() {
    return this._propertyGroupId;
  }

  // property_map - computed: false, optional: false, required: true
  private _propertyMap?: { [key: string]: string }; 
  public get propertyMap() {
    return this.getStringMapAttribute('property_map');
  }
  public set propertyMap(value: { [key: string]: string }) {
    this._propertyMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMapInput() {
    return this._propertyMap;
  }
}

export class PropertyGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : PropertyGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): PropertyGroupPropertyOutputReference {
    return new PropertyGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentPropertiesProperty {
  /**
  * property_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#property_group TfApplication#property_group}
  */
  readonly propertyGroup: PropertyGroupProperty[] | cdktn.IResolvable;
}
export class EnvironmentPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGroup = this._propertyGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyGroup.internalValue = value.propertyGroup;
    }
  }

  // property_group - computed: false, optional: false, required: true
  private _propertyGroup = new PropertyGroupPropertyList(this, "property_group", true);
  public get propertyGroup() {
    return this._propertyGroup;
  }
  public putPropertyGroup(value: PropertyGroupProperty[] | cdktn.IResolvable) {
    this._propertyGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGroupInput() {
    return this._propertyGroup.internalValue;
  }
}
export interface CheckpointConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#checkpoint_interval TfApplication#checkpoint_interval}
  */
  readonly checkpointInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#checkpointing_enabled TfApplication#checkpointing_enabled}
  */
  readonly checkpointingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#configuration_type TfApplication#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#min_pause_between_checkpoints TfApplication#min_pause_between_checkpoints}
  */
  readonly minPauseBetweenCheckpoints?: number;
}
export class CheckpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckpointConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointInterval = this._checkpointInterval;
    }
    if (this._checkpointingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointingEnabled = this._checkpointingEnabled;
    }
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._minPauseBetweenCheckpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPauseBetweenCheckpoints = this._minPauseBetweenCheckpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckpointConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkpointInterval = undefined;
      this._checkpointingEnabled = undefined;
      this._configurationType = undefined;
      this._minPauseBetweenCheckpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkpointInterval = value.checkpointInterval;
      this._checkpointingEnabled = value.checkpointingEnabled;
      this._configurationType = value.configurationType;
      this._minPauseBetweenCheckpoints = value.minPauseBetweenCheckpoints;
    }
  }

  // checkpoint_interval - computed: true, optional: true, required: false
  private _checkpointInterval?: number; 
  public get checkpointInterval() {
    return this.getNumberAttribute('checkpoint_interval');
  }
  public set checkpointInterval(value: number) {
    this._checkpointInterval = value;
  }
  public resetCheckpointInterval() {
    this._checkpointInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIntervalInput() {
    return this._checkpointInterval;
  }

  // checkpointing_enabled - computed: true, optional: true, required: false
  private _checkpointingEnabled?: boolean | cdktn.IResolvable; 
  public get checkpointingEnabled() {
    return this.getBooleanAttribute('checkpointing_enabled');
  }
  public set checkpointingEnabled(value: boolean | cdktn.IResolvable) {
    this._checkpointingEnabled = value;
  }
  public resetCheckpointingEnabled() {
    this._checkpointingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointingEnabledInput() {
    return this._checkpointingEnabled;
  }

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // min_pause_between_checkpoints - computed: true, optional: true, required: false
  private _minPauseBetweenCheckpoints?: number; 
  public get minPauseBetweenCheckpoints() {
    return this.getNumberAttribute('min_pause_between_checkpoints');
  }
  public set minPauseBetweenCheckpoints(value: number) {
    this._minPauseBetweenCheckpoints = value;
  }
  public resetMinPauseBetweenCheckpoints() {
    this._minPauseBetweenCheckpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPauseBetweenCheckpointsInput() {
    return this._minPauseBetweenCheckpoints;
  }
}
export interface MonitoringConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#configuration_type TfApplication#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#log_level TfApplication#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#metrics_level TfApplication#metrics_level}
  */
  readonly metricsLevel?: string;
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
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._metricsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsLevel = this._metricsLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationType = undefined;
      this._logLevel = undefined;
      this._metricsLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationType = value.configurationType;
      this._logLevel = value.logLevel;
      this._metricsLevel = value.metricsLevel;
    }
  }

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // metrics_level - computed: true, optional: true, required: false
  private _metricsLevel?: string; 
  public get metricsLevel() {
    return this.getStringAttribute('metrics_level');
  }
  public set metricsLevel(value: string) {
    this._metricsLevel = value;
  }
  public resetMetricsLevel() {
    this._metricsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsLevelInput() {
    return this._metricsLevel;
  }
}
export interface ParallelismConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#auto_scaling_enabled TfApplication#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#configuration_type TfApplication#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#parallelism TfApplication#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#parallelism_per_kpu TfApplication#parallelism_per_kpu}
  */
  readonly parallelismPerKpu?: number;
}
export class ParallelismConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParallelismConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingEnabled = this._autoScalingEnabled;
    }
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._parallelismPerKpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismPerKpu = this._parallelismPerKpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParallelismConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingEnabled = undefined;
      this._configurationType = undefined;
      this._parallelism = undefined;
      this._parallelismPerKpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingEnabled = value.autoScalingEnabled;
      this._configurationType = value.configurationType;
      this._parallelism = value.parallelism;
      this._parallelismPerKpu = value.parallelismPerKpu;
    }
  }

  // auto_scaling_enabled - computed: true, optional: true, required: false
  private _autoScalingEnabled?: boolean | cdktn.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._autoScalingEnabled = value;
  }
  public resetAutoScalingEnabled() {
    this._autoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // parallelism - computed: true, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // parallelism_per_kpu - computed: true, optional: true, required: false
  private _parallelismPerKpu?: number; 
  public get parallelismPerKpu() {
    return this.getNumberAttribute('parallelism_per_kpu');
  }
  public set parallelismPerKpu(value: number) {
    this._parallelismPerKpu = value;
  }
  public resetParallelismPerKpu() {
    this._parallelismPerKpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismPerKpuInput() {
    return this._parallelismPerKpu;
  }
}
export interface FlinkApplicationConfigurationProperty {
  /**
  * checkpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#checkpoint_configuration TfApplication#checkpoint_configuration}
  */
  readonly checkpointConfiguration?: CheckpointConfigurationProperty;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#monitoring_configuration TfApplication#monitoring_configuration}
  */
  readonly monitoringConfiguration?: MonitoringConfigurationProperty;
  /**
  * parallelism_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#parallelism_configuration TfApplication#parallelism_configuration}
  */
  readonly parallelismConfiguration?: ParallelismConfigurationProperty;
}
export class FlinkApplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkApplicationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfiguration = this._checkpointConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._parallelismConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismConfiguration = this._parallelismConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkApplicationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkpointConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._parallelismConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkpointConfiguration.internalValue = value.checkpointConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._parallelismConfiguration.internalValue = value.parallelismConfiguration;
    }
  }

  // checkpoint_configuration - computed: false, optional: true, required: false
  private _checkpointConfiguration = new CheckpointConfigurationPropertyOutputReference(this, "checkpoint_configuration");
  public get checkpointConfiguration() {
    return this._checkpointConfiguration;
  }
  public putCheckpointConfiguration(value: CheckpointConfigurationProperty) {
    this._checkpointConfiguration.internalValue = value;
  }
  public resetCheckpointConfiguration() {
    this._checkpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigurationInput() {
    return this._checkpointConfiguration.internalValue;
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

  // parallelism_configuration - computed: false, optional: true, required: false
  private _parallelismConfiguration = new ParallelismConfigurationPropertyOutputReference(this, "parallelism_configuration");
  public get parallelismConfiguration() {
    return this._parallelismConfiguration;
  }
  public putParallelismConfiguration(value: ParallelismConfigurationProperty) {
    this._parallelismConfiguration.internalValue = value;
  }
  public resetParallelismConfiguration() {
    this._parallelismConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigurationInput() {
    return this._parallelismConfiguration.internalValue;
  }
}
export interface ApplicationRestoreConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_restore_type TfApplication#application_restore_type}
  */
  readonly applicationRestoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#snapshot_name TfApplication#snapshot_name}
  */
  readonly snapshotName?: string;
}
export class ApplicationRestoreConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRestoreConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationRestoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRestoreType = this._applicationRestoreType;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRestoreConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationRestoreType = undefined;
      this._snapshotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationRestoreType = value.applicationRestoreType;
      this._snapshotName = value.snapshotName;
    }
  }

  // application_restore_type - computed: true, optional: true, required: false
  private _applicationRestoreType?: string; 
  public get applicationRestoreType() {
    return this.getStringAttribute('application_restore_type');
  }
  public set applicationRestoreType(value: string) {
    this._applicationRestoreType = value;
  }
  public resetApplicationRestoreType() {
    this._applicationRestoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRestoreTypeInput() {
    return this._applicationRestoreType;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface FlinkRunConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#allow_non_restored_state TfApplication#allow_non_restored_state}
  */
  readonly allowNonRestoredState?: boolean | cdktn.IResolvable;
}
export class FlinkRunConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkRunConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonRestoredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkRunConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNonRestoredState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNonRestoredState = value.allowNonRestoredState;
    }
  }

  // allow_non_restored_state - computed: true, optional: true, required: false
  private _allowNonRestoredState?: boolean | cdktn.IResolvable; 
  public get allowNonRestoredState() {
    return this.getBooleanAttribute('allow_non_restored_state');
  }
  public set allowNonRestoredState(value: boolean | cdktn.IResolvable) {
    this._allowNonRestoredState = value;
  }
  public resetAllowNonRestoredState() {
    this._allowNonRestoredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonRestoredStateInput() {
    return this._allowNonRestoredState;
  }
}
export interface RunConfigurationProperty {
  /**
  * application_restore_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_restore_configuration TfApplication#application_restore_configuration}
  */
  readonly applicationRestoreConfiguration?: ApplicationRestoreConfigurationProperty;
  /**
  * flink_run_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#flink_run_configuration TfApplication#flink_run_configuration}
  */
  readonly flinkRunConfiguration?: FlinkRunConfigurationProperty;
}
export class RunConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RunConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationRestoreConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRestoreConfiguration = this._applicationRestoreConfiguration?.internalValue;
    }
    if (this._flinkRunConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkRunConfiguration = this._flinkRunConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationRestoreConfiguration.internalValue = undefined;
      this._flinkRunConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationRestoreConfiguration.internalValue = value.applicationRestoreConfiguration;
      this._flinkRunConfiguration.internalValue = value.flinkRunConfiguration;
    }
  }

  // application_restore_configuration - computed: false, optional: true, required: false
  private _applicationRestoreConfiguration = new ApplicationRestoreConfigurationPropertyOutputReference(this, "application_restore_configuration");
  public get applicationRestoreConfiguration() {
    return this._applicationRestoreConfiguration;
  }
  public putApplicationRestoreConfiguration(value: ApplicationRestoreConfigurationProperty) {
    this._applicationRestoreConfiguration.internalValue = value;
  }
  public resetApplicationRestoreConfiguration() {
    this._applicationRestoreConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRestoreConfigurationInput() {
    return this._applicationRestoreConfiguration.internalValue;
  }

  // flink_run_configuration - computed: false, optional: true, required: false
  private _flinkRunConfiguration = new FlinkRunConfigurationPropertyOutputReference(this, "flink_run_configuration");
  public get flinkRunConfiguration() {
    return this._flinkRunConfiguration;
  }
  public putFlinkRunConfiguration(value: FlinkRunConfigurationProperty) {
    this._flinkRunConfiguration.internalValue = value;
  }
  public resetFlinkRunConfiguration() {
    this._flinkRunConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkRunConfigurationInput() {
    return this._flinkRunConfiguration.internalValue;
  }
}
export interface InputParallelismProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#count TfApplication#count}
  */
  readonly count?: number;
}
export class InputParallelismPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputParallelismProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputParallelismProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface InputLambdaProcessorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class InputLambdaProcessorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputLambdaProcessorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputLambdaProcessorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface InputProcessingConfigurationProperty {
  /**
  * input_lambda_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_lambda_processor TfApplication#input_lambda_processor}
  */
  readonly inputLambdaProcessor: InputLambdaProcessorProperty;
}
export class InputProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputLambdaProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLambdaProcessor = this._inputLambdaProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputLambdaProcessor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputLambdaProcessor.internalValue = value.inputLambdaProcessor;
    }
  }

  // input_lambda_processor - computed: false, optional: false, required: true
  private _inputLambdaProcessor = new InputLambdaProcessorPropertyOutputReference(this, "input_lambda_processor");
  public get inputLambdaProcessor() {
    return this._inputLambdaProcessor;
  }
  public putInputLambdaProcessor(value: InputLambdaProcessorProperty) {
    this._inputLambdaProcessor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLambdaProcessorInput() {
    return this._inputLambdaProcessor.internalValue;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#mapping TfApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#name TfApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#sql_type TfApplication#sql_type}
  */
  readonly sqlType: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyList extends cdktn.ComplexList {
  public internalValue? : ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty[] | cdktn.IResolvable

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
  public get(index: number): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyOutputReference {
    return new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_column_delimiter TfApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_row_delimiter TfApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_row_path TfApplication#record_row_path}
  */
  readonly recordRowPath: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty {
  /**
  * csv_mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#csv_mapping_parameters TfApplication#csv_mapping_parameters}
  */
  readonly csvMappingParameters?: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty;
  /**
  * json_mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#json_mapping_parameters TfApplication#json_mapping_parameters}
  */
  readonly jsonMappingParameters?: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty;
}
export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvMappingParameters = this._csvMappingParameters?.internalValue;
    }
    if (this._jsonMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMappingParameters = this._jsonMappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvMappingParameters.internalValue = undefined;
      this._jsonMappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvMappingParameters.internalValue = value.csvMappingParameters;
      this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
    }
  }

  // csv_mapping_parameters - computed: false, optional: true, required: false
  private _csvMappingParameters = new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference(this, "csv_mapping_parameters");
  public get csvMappingParameters() {
    return this._csvMappingParameters;
  }
  public putCsvMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersProperty) {
    this._csvMappingParameters.internalValue = value;
  }
  public resetCsvMappingParameters() {
    this._csvMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvMappingParametersInput() {
    return this._csvMappingParameters.internalValue;
  }

  // json_mapping_parameters - computed: false, optional: true, required: false
  private _jsonMappingParameters = new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference(this, "json_mapping_parameters");
  public get jsonMappingParameters() {
    return this._jsonMappingParameters;
  }
  public putJsonMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersProperty) {
    this._jsonMappingParameters.internalValue = value;
  }
  public resetJsonMappingParameters() {
    this._jsonMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMappingParametersInput() {
    return this._jsonMappingParameters.internalValue;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_format_type TfApplication#record_format_type}
  */
  readonly recordFormatType: string;
  /**
  * mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#mapping_parameters TfApplication#mapping_parameters}
  */
  readonly mappingParameters: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty;
}
export class ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordFormatType = undefined;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordFormatType = value.recordFormatType;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }

  // mapping_parameters - computed: false, optional: false, required: true
  private _mappingParameters = new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersPropertyOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersProperty) {
    this._mappingParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface InputSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_encoding TfApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_column TfApplication#record_column}
  */
  readonly recordColumn: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty[] | cdktn.IResolvable;
  /**
  * record_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_format TfApplication#record_format}
  */
  readonly recordFormat: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty;
}
export class InputSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumn = this._recordColumn?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumn.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumn.internalValue = value.recordColumn;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_column - computed: false, optional: false, required: true
  private _recordColumn = new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnPropertyList(this, "record_column", false);
  public get recordColumn() {
    return this._recordColumn;
  }
  public putRecordColumn(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnProperty[] | cdktn.IResolvable) {
    this._recordColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnInput() {
    return this._recordColumn.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatPropertyOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: ApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatProperty) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface InputStartingPositionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_starting_position TfApplication#input_starting_position}
  */
  readonly inputStartingPosition?: string;
}
export class InputStartingPositionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputStartingPositionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputStartingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStartingPosition = this._inputStartingPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputStartingPositionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputStartingPosition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputStartingPosition = value.inputStartingPosition;
    }
  }

  // input_starting_position - computed: true, optional: true, required: false
  private _inputStartingPosition?: string; 
  public get inputStartingPosition() {
    return this.getStringAttribute('input_starting_position');
  }
  public set inputStartingPosition(value: string) {
    this._inputStartingPosition = value;
  }
  public resetInputStartingPosition() {
    this._inputStartingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStartingPositionInput() {
    return this._inputStartingPosition;
  }
}

export class InputStartingPositionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : InputStartingPositionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): InputStartingPositionConfigurationPropertyOutputReference {
    return new InputStartingPositionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseInputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class KinesisFirehoseInputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseInputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseInputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface KinesisStreamsInputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class KinesisStreamsInputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisStreamsInputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisStreamsInputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface InputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#name_prefix TfApplication#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * input_parallelism block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_parallelism TfApplication#input_parallelism}
  */
  readonly inputParallelism?: InputParallelismProperty;
  /**
  * input_processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_processing_configuration TfApplication#input_processing_configuration}
  */
  readonly inputProcessingConfiguration?: InputProcessingConfigurationProperty;
  /**
  * input_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_schema TfApplication#input_schema}
  */
  readonly inputSchema: InputSchemaProperty;
  /**
  * input_starting_position_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input_starting_position_configuration TfApplication#input_starting_position_configuration}
  */
  readonly inputStartingPositionConfiguration?: InputStartingPositionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * kinesis_firehose_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#kinesis_firehose_input TfApplication#kinesis_firehose_input}
  */
  readonly kinesisFirehoseInput?: KinesisFirehoseInputProperty;
  /**
  * kinesis_streams_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#kinesis_streams_input TfApplication#kinesis_streams_input}
  */
  readonly kinesisStreamsInput?: KinesisStreamsInputProperty;
}
export class InputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._inputParallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputParallelism = this._inputParallelism?.internalValue;
    }
    if (this._inputProcessingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputProcessingConfiguration = this._inputProcessingConfiguration?.internalValue;
    }
    if (this._inputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema?.internalValue;
    }
    if (this._inputStartingPositionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStartingPositionConfiguration = this._inputStartingPositionConfiguration?.internalValue;
    }
    if (this._kinesisFirehoseInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseInput = this._kinesisFirehoseInput?.internalValue;
    }
    if (this._kinesisStreamsInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamsInput = this._kinesisStreamsInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namePrefix = undefined;
      this._inputParallelism.internalValue = undefined;
      this._inputProcessingConfiguration.internalValue = undefined;
      this._inputSchema.internalValue = undefined;
      this._inputStartingPositionConfiguration.internalValue = undefined;
      this._kinesisFirehoseInput.internalValue = undefined;
      this._kinesisStreamsInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namePrefix = value.namePrefix;
      this._inputParallelism.internalValue = value.inputParallelism;
      this._inputProcessingConfiguration.internalValue = value.inputProcessingConfiguration;
      this._inputSchema.internalValue = value.inputSchema;
      this._inputStartingPositionConfiguration.internalValue = value.inputStartingPositionConfiguration;
      this._kinesisFirehoseInput.internalValue = value.kinesisFirehoseInput;
      this._kinesisStreamsInput.internalValue = value.kinesisStreamsInput;
    }
  }

  // in_app_stream_names - computed: true, optional: false, required: false
  public get inAppStreamNames() {
    return this.getListAttribute('in_app_stream_names');
  }

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // input_parallelism - computed: false, optional: true, required: false
  private _inputParallelism = new InputParallelismPropertyOutputReference(this, "input_parallelism");
  public get inputParallelism() {
    return this._inputParallelism;
  }
  public putInputParallelism(value: InputParallelismProperty) {
    this._inputParallelism.internalValue = value;
  }
  public resetInputParallelism() {
    this._inputParallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParallelismInput() {
    return this._inputParallelism.internalValue;
  }

  // input_processing_configuration - computed: false, optional: true, required: false
  private _inputProcessingConfiguration = new InputProcessingConfigurationPropertyOutputReference(this, "input_processing_configuration");
  public get inputProcessingConfiguration() {
    return this._inputProcessingConfiguration;
  }
  public putInputProcessingConfiguration(value: InputProcessingConfigurationProperty) {
    this._inputProcessingConfiguration.internalValue = value;
  }
  public resetInputProcessingConfiguration() {
    this._inputProcessingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputProcessingConfigurationInput() {
    return this._inputProcessingConfiguration.internalValue;
  }

  // input_schema - computed: false, optional: false, required: true
  private _inputSchema = new InputSchemaPropertyOutputReference(this, "input_schema");
  public get inputSchema() {
    return this._inputSchema;
  }
  public putInputSchema(value: InputSchemaProperty) {
    this._inputSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema.internalValue;
  }

  // input_starting_position_configuration - computed: false, optional: true, required: false
  private _inputStartingPositionConfiguration = new InputStartingPositionConfigurationPropertyList(this, "input_starting_position_configuration", false);
  public get inputStartingPositionConfiguration() {
    return this._inputStartingPositionConfiguration;
  }
  public putInputStartingPositionConfiguration(value: InputStartingPositionConfigurationProperty[] | cdktn.IResolvable) {
    this._inputStartingPositionConfiguration.internalValue = value;
  }
  public resetInputStartingPositionConfiguration() {
    this._inputStartingPositionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStartingPositionConfigurationInput() {
    return this._inputStartingPositionConfiguration.internalValue;
  }

  // kinesis_firehose_input - computed: false, optional: true, required: false
  private _kinesisFirehoseInput = new KinesisFirehoseInputPropertyOutputReference(this, "kinesis_firehose_input");
  public get kinesisFirehoseInput() {
    return this._kinesisFirehoseInput;
  }
  public putKinesisFirehoseInput(value: KinesisFirehoseInputProperty) {
    this._kinesisFirehoseInput.internalValue = value;
  }
  public resetKinesisFirehoseInput() {
    this._kinesisFirehoseInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInputInput() {
    return this._kinesisFirehoseInput.internalValue;
  }

  // kinesis_streams_input - computed: false, optional: true, required: false
  private _kinesisStreamsInput = new KinesisStreamsInputPropertyOutputReference(this, "kinesis_streams_input");
  public get kinesisStreamsInput() {
    return this._kinesisStreamsInput;
  }
  public putKinesisStreamsInput(value: KinesisStreamsInputProperty) {
    this._kinesisStreamsInput.internalValue = value;
  }
  public resetKinesisStreamsInput() {
    this._kinesisStreamsInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamsInputInput() {
    return this._kinesisStreamsInput.internalValue;
  }
}
export interface DestinationSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_format_type TfApplication#record_format_type}
  */
  readonly recordFormatType: string;
}
export class DestinationSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordFormatType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordFormatType = value.recordFormatType;
    }
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }
}
export interface KinesisFirehoseOutputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class KinesisFirehoseOutputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseOutputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseOutputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface KinesisStreamsOutputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class KinesisStreamsOutputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisStreamsOutputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisStreamsOutputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface LambdaOutputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#resource_arn TfApplication#resource_arn}
  */
  readonly resourceArn: string;
}
export class LambdaOutputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaOutputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaOutputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
    }
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
}
export interface OutputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#name TfApplication#name}
  */
  readonly name: string;
  /**
  * destination_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#destination_schema TfApplication#destination_schema}
  */
  readonly destinationSchema: DestinationSchemaProperty;
  /**
  * kinesis_firehose_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#kinesis_firehose_output TfApplication#kinesis_firehose_output}
  */
  readonly kinesisFirehoseOutput?: KinesisFirehoseOutputProperty;
  /**
  * kinesis_streams_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#kinesis_streams_output TfApplication#kinesis_streams_output}
  */
  readonly kinesisStreamsOutput?: KinesisStreamsOutputProperty;
  /**
  * lambda_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#lambda_output TfApplication#lambda_output}
  */
  readonly lambdaOutput?: LambdaOutputProperty;
}
export class OutputPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._destinationSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSchema = this._destinationSchema?.internalValue;
    }
    if (this._kinesisFirehoseOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseOutput = this._kinesisFirehoseOutput?.internalValue;
    }
    if (this._kinesisStreamsOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamsOutput = this._kinesisStreamsOutput?.internalValue;
    }
    if (this._lambdaOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaOutput = this._lambdaOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._destinationSchema.internalValue = undefined;
      this._kinesisFirehoseOutput.internalValue = undefined;
      this._kinesisStreamsOutput.internalValue = undefined;
      this._lambdaOutput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._destinationSchema.internalValue = value.destinationSchema;
      this._kinesisFirehoseOutput.internalValue = value.kinesisFirehoseOutput;
      this._kinesisStreamsOutput.internalValue = value.kinesisStreamsOutput;
      this._lambdaOutput.internalValue = value.lambdaOutput;
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

  // output_id - computed: true, optional: false, required: false
  public get outputId() {
    return this.getStringAttribute('output_id');
  }

  // destination_schema - computed: false, optional: false, required: true
  private _destinationSchema = new DestinationSchemaPropertyOutputReference(this, "destination_schema");
  public get destinationSchema() {
    return this._destinationSchema;
  }
  public putDestinationSchema(value: DestinationSchemaProperty) {
    this._destinationSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSchemaInput() {
    return this._destinationSchema.internalValue;
  }

  // kinesis_firehose_output - computed: false, optional: true, required: false
  private _kinesisFirehoseOutput = new KinesisFirehoseOutputPropertyOutputReference(this, "kinesis_firehose_output");
  public get kinesisFirehoseOutput() {
    return this._kinesisFirehoseOutput;
  }
  public putKinesisFirehoseOutput(value: KinesisFirehoseOutputProperty) {
    this._kinesisFirehoseOutput.internalValue = value;
  }
  public resetKinesisFirehoseOutput() {
    this._kinesisFirehoseOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseOutputInput() {
    return this._kinesisFirehoseOutput.internalValue;
  }

  // kinesis_streams_output - computed: false, optional: true, required: false
  private _kinesisStreamsOutput = new KinesisStreamsOutputPropertyOutputReference(this, "kinesis_streams_output");
  public get kinesisStreamsOutput() {
    return this._kinesisStreamsOutput;
  }
  public putKinesisStreamsOutput(value: KinesisStreamsOutputProperty) {
    this._kinesisStreamsOutput.internalValue = value;
  }
  public resetKinesisStreamsOutput() {
    this._kinesisStreamsOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamsOutputInput() {
    return this._kinesisStreamsOutput.internalValue;
  }

  // lambda_output - computed: false, optional: true, required: false
  private _lambdaOutput = new LambdaOutputPropertyOutputReference(this, "lambda_output");
  public get lambdaOutput() {
    return this._lambdaOutput;
  }
  public putLambdaOutput(value: LambdaOutputProperty) {
    this._lambdaOutput.internalValue = value;
  }
  public resetLambdaOutput() {
    this._lambdaOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaOutputInput() {
    return this._lambdaOutput.internalValue;
  }
}

export class OutputPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputPropertyOutputReference {
    return new OutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#mapping TfApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#name TfApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#sql_type TfApplication#sql_type}
  */
  readonly sqlType: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyList extends cdktn.ComplexList {
  public internalValue? : ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty[] | cdktn.IResolvable

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
  public get(index: number): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyOutputReference {
    return new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_column_delimiter TfApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_row_delimiter TfApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_row_path TfApplication#record_row_path}
  */
  readonly recordRowPath: string;
}
export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty {
  /**
  * csv_mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#csv_mapping_parameters TfApplication#csv_mapping_parameters}
  */
  readonly csvMappingParameters?: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty;
  /**
  * json_mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#json_mapping_parameters TfApplication#json_mapping_parameters}
  */
  readonly jsonMappingParameters?: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty;
}
export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvMappingParameters = this._csvMappingParameters?.internalValue;
    }
    if (this._jsonMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMappingParameters = this._jsonMappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvMappingParameters.internalValue = undefined;
      this._jsonMappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvMappingParameters.internalValue = value.csvMappingParameters;
      this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
    }
  }

  // csv_mapping_parameters - computed: false, optional: true, required: false
  private _csvMappingParameters = new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersPropertyOutputReference(this, "csv_mapping_parameters");
  public get csvMappingParameters() {
    return this._csvMappingParameters;
  }
  public putCsvMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersProperty) {
    this._csvMappingParameters.internalValue = value;
  }
  public resetCsvMappingParameters() {
    this._csvMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvMappingParametersInput() {
    return this._csvMappingParameters.internalValue;
  }

  // json_mapping_parameters - computed: false, optional: true, required: false
  private _jsonMappingParameters = new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersPropertyOutputReference(this, "json_mapping_parameters");
  public get jsonMappingParameters() {
    return this._jsonMappingParameters;
  }
  public putJsonMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersProperty) {
    this._jsonMappingParameters.internalValue = value;
  }
  public resetJsonMappingParameters() {
    this._jsonMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMappingParametersInput() {
    return this._jsonMappingParameters.internalValue;
  }
}
export interface ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_format_type TfApplication#record_format_type}
  */
  readonly recordFormatType: string;
  /**
  * mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#mapping_parameters TfApplication#mapping_parameters}
  */
  readonly mappingParameters: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty;
}
export class ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordFormatType = undefined;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordFormatType = value.recordFormatType;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }

  // mapping_parameters - computed: false, optional: false, required: true
  private _mappingParameters = new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersPropertyOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersProperty) {
    this._mappingParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface ReferenceSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_encoding TfApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_column TfApplication#record_column}
  */
  readonly recordColumn: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty[] | cdktn.IResolvable;
  /**
  * record_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#record_format TfApplication#record_format}
  */
  readonly recordFormat: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty;
}
export class ReferenceSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumn = this._recordColumn?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumn.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumn.internalValue = value.recordColumn;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_column - computed: false, optional: false, required: true
  private _recordColumn = new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnPropertyList(this, "record_column", false);
  public get recordColumn() {
    return this._recordColumn;
  }
  public putRecordColumn(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnProperty[] | cdktn.IResolvable) {
    this._recordColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnInput() {
    return this._recordColumn.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatPropertyOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: ApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatProperty) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface S3ReferenceDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#bucket_arn TfApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#file_key TfApplication#file_key}
  */
  readonly fileKey: string;
}
export class S3ReferenceDataSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ReferenceDataSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ReferenceDataSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._fileKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }
}
export interface ReferenceDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#table_name TfApplication#table_name}
  */
  readonly tableName: string;
  /**
  * reference_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#reference_schema TfApplication#reference_schema}
  */
  readonly referenceSchema: ReferenceSchemaProperty;
  /**
  * s3_reference_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#s3_reference_data_source TfApplication#s3_reference_data_source}
  */
  readonly s3ReferenceDataSource: S3ReferenceDataSourceProperty;
}
export class ReferenceDataSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._referenceSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSchema = this._referenceSchema?.internalValue;
    }
    if (this._s3ReferenceDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ReferenceDataSource = this._s3ReferenceDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
      this._referenceSchema.internalValue = undefined;
      this._s3ReferenceDataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
      this._referenceSchema.internalValue = value.referenceSchema;
      this._s3ReferenceDataSource.internalValue = value.s3ReferenceDataSource;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
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

  // reference_schema - computed: false, optional: false, required: true
  private _referenceSchema = new ReferenceSchemaPropertyOutputReference(this, "reference_schema");
  public get referenceSchema() {
    return this._referenceSchema;
  }
  public putReferenceSchema(value: ReferenceSchemaProperty) {
    this._referenceSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSchemaInput() {
    return this._referenceSchema.internalValue;
  }

  // s3_reference_data_source - computed: false, optional: false, required: true
  private _s3ReferenceDataSource = new S3ReferenceDataSourcePropertyOutputReference(this, "s3_reference_data_source");
  public get s3ReferenceDataSource() {
    return this._s3ReferenceDataSource;
  }
  public putS3ReferenceDataSource(value: S3ReferenceDataSourceProperty) {
    this._s3ReferenceDataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReferenceDataSourceInput() {
    return this._s3ReferenceDataSource.internalValue;
  }
}
export interface SqlApplicationConfigurationProperty {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#input TfApplication#input}
  */
  readonly input?: InputProperty;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#output TfApplication#output}
  */
  readonly output?: OutputProperty[] | cdktn.IResolvable;
  /**
  * reference_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#reference_data_source TfApplication#reference_data_source}
  */
  readonly referenceDataSource?: ReferenceDataSourceProperty;
}
export class SqlApplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlApplicationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._referenceDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceDataSource = this._referenceDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlApplicationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
      this._referenceDataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
      this._referenceDataSource.internalValue = value.referenceDataSource;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input = new InputPropertyOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: InputProperty) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new OutputPropertyList(this, "output", true);
  public get output() {
    return this._output;
  }
  public putOutput(value: OutputProperty[] | cdktn.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // reference_data_source - computed: false, optional: true, required: false
  private _referenceDataSource = new ReferenceDataSourcePropertyOutputReference(this, "reference_data_source");
  public get referenceDataSource() {
    return this._referenceDataSource;
  }
  public putReferenceDataSource(value: ReferenceDataSourceProperty) {
    this._referenceDataSource.internalValue = value;
  }
  public resetReferenceDataSource() {
    this._referenceDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataSourceInput() {
    return this._referenceDataSource.internalValue;
  }
}
export interface VpcConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#security_group_ids TfApplication#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#subnet_ids TfApplication#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
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

  // vpc_configuration_id - computed: true, optional: false, required: false
  public get vpcConfigurationId() {
    return this.getStringAttribute('vpc_configuration_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface ApplicationConfigurationProperty {
  /**
  * application_code_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_code_configuration TfApplication#application_code_configuration}
  */
  readonly applicationCodeConfiguration: ApplicationCodeConfigurationProperty;
  /**
  * application_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_encryption_configuration TfApplication#application_encryption_configuration}
  */
  readonly applicationEncryptionConfiguration?: ApplicationEncryptionConfigurationProperty;
  /**
  * application_snapshot_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#application_snapshot_configuration TfApplication#application_snapshot_configuration}
  */
  readonly applicationSnapshotConfiguration?: ApplicationSnapshotConfigurationProperty;
  /**
  * environment_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#environment_properties TfApplication#environment_properties}
  */
  readonly environmentProperties?: EnvironmentPropertiesProperty;
  /**
  * flink_application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#flink_application_configuration TfApplication#flink_application_configuration}
  */
  readonly flinkApplicationConfiguration?: FlinkApplicationConfigurationProperty;
  /**
  * run_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#run_configuration TfApplication#run_configuration}
  */
  readonly runConfiguration?: RunConfigurationProperty;
  /**
  * sql_application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#sql_application_configuration TfApplication#sql_application_configuration}
  */
  readonly sqlApplicationConfiguration?: SqlApplicationConfigurationProperty;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#vpc_configuration TfApplication#vpc_configuration}
  */
  readonly vpcConfiguration?: VpcConfigurationProperty;
}
export class ApplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationCodeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCodeConfiguration = this._applicationCodeConfiguration?.internalValue;
    }
    if (this._applicationEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEncryptionConfiguration = this._applicationEncryptionConfiguration?.internalValue;
    }
    if (this._applicationSnapshotConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSnapshotConfiguration = this._applicationSnapshotConfiguration?.internalValue;
    }
    if (this._environmentProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentProperties = this._environmentProperties?.internalValue;
    }
    if (this._flinkApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkApplicationConfiguration = this._flinkApplicationConfiguration?.internalValue;
    }
    if (this._runConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runConfiguration = this._runConfiguration?.internalValue;
    }
    if (this._sqlApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlApplicationConfiguration = this._sqlApplicationConfiguration?.internalValue;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationCodeConfiguration.internalValue = undefined;
      this._applicationEncryptionConfiguration.internalValue = undefined;
      this._applicationSnapshotConfiguration.internalValue = undefined;
      this._environmentProperties.internalValue = undefined;
      this._flinkApplicationConfiguration.internalValue = undefined;
      this._runConfiguration.internalValue = undefined;
      this._sqlApplicationConfiguration.internalValue = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationCodeConfiguration.internalValue = value.applicationCodeConfiguration;
      this._applicationEncryptionConfiguration.internalValue = value.applicationEncryptionConfiguration;
      this._applicationSnapshotConfiguration.internalValue = value.applicationSnapshotConfiguration;
      this._environmentProperties.internalValue = value.environmentProperties;
      this._flinkApplicationConfiguration.internalValue = value.flinkApplicationConfiguration;
      this._runConfiguration.internalValue = value.runConfiguration;
      this._sqlApplicationConfiguration.internalValue = value.sqlApplicationConfiguration;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // application_code_configuration - computed: false, optional: false, required: true
  private _applicationCodeConfiguration = new ApplicationCodeConfigurationPropertyOutputReference(this, "application_code_configuration");
  public get applicationCodeConfiguration() {
    return this._applicationCodeConfiguration;
  }
  public putApplicationCodeConfiguration(value: ApplicationCodeConfigurationProperty) {
    this._applicationCodeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCodeConfigurationInput() {
    return this._applicationCodeConfiguration.internalValue;
  }

  // application_encryption_configuration - computed: false, optional: true, required: false
  private _applicationEncryptionConfiguration = new ApplicationEncryptionConfigurationPropertyOutputReference(this, "application_encryption_configuration");
  public get applicationEncryptionConfiguration() {
    return this._applicationEncryptionConfiguration;
  }
  public putApplicationEncryptionConfiguration(value: ApplicationEncryptionConfigurationProperty) {
    this._applicationEncryptionConfiguration.internalValue = value;
  }
  public resetApplicationEncryptionConfiguration() {
    this._applicationEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEncryptionConfigurationInput() {
    return this._applicationEncryptionConfiguration.internalValue;
  }

  // application_snapshot_configuration - computed: false, optional: true, required: false
  private _applicationSnapshotConfiguration = new ApplicationSnapshotConfigurationPropertyOutputReference(this, "application_snapshot_configuration");
  public get applicationSnapshotConfiguration() {
    return this._applicationSnapshotConfiguration;
  }
  public putApplicationSnapshotConfiguration(value: ApplicationSnapshotConfigurationProperty) {
    this._applicationSnapshotConfiguration.internalValue = value;
  }
  public resetApplicationSnapshotConfiguration() {
    this._applicationSnapshotConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSnapshotConfigurationInput() {
    return this._applicationSnapshotConfiguration.internalValue;
  }

  // environment_properties - computed: false, optional: true, required: false
  private _environmentProperties = new EnvironmentPropertiesPropertyOutputReference(this, "environment_properties");
  public get environmentProperties() {
    return this._environmentProperties;
  }
  public putEnvironmentProperties(value: EnvironmentPropertiesProperty) {
    this._environmentProperties.internalValue = value;
  }
  public resetEnvironmentProperties() {
    this._environmentProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentPropertiesInput() {
    return this._environmentProperties.internalValue;
  }

  // flink_application_configuration - computed: false, optional: true, required: false
  private _flinkApplicationConfiguration = new FlinkApplicationConfigurationPropertyOutputReference(this, "flink_application_configuration");
  public get flinkApplicationConfiguration() {
    return this._flinkApplicationConfiguration;
  }
  public putFlinkApplicationConfiguration(value: FlinkApplicationConfigurationProperty) {
    this._flinkApplicationConfiguration.internalValue = value;
  }
  public resetFlinkApplicationConfiguration() {
    this._flinkApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkApplicationConfigurationInput() {
    return this._flinkApplicationConfiguration.internalValue;
  }

  // run_configuration - computed: false, optional: true, required: false
  private _runConfiguration = new RunConfigurationPropertyOutputReference(this, "run_configuration");
  public get runConfiguration() {
    return this._runConfiguration;
  }
  public putRunConfiguration(value: RunConfigurationProperty) {
    this._runConfiguration.internalValue = value;
  }
  public resetRunConfiguration() {
    this._runConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigurationInput() {
    return this._runConfiguration.internalValue;
  }

  // sql_application_configuration - computed: false, optional: true, required: false
  private _sqlApplicationConfiguration = new SqlApplicationConfigurationPropertyOutputReference(this, "sql_application_configuration");
  public get sqlApplicationConfiguration() {
    return this._sqlApplicationConfiguration;
  }
  public putSqlApplicationConfiguration(value: SqlApplicationConfigurationProperty) {
    this._sqlApplicationConfiguration.internalValue = value;
  }
  public resetSqlApplicationConfiguration() {
    this._sqlApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlApplicationConfigurationInput() {
    return this._sqlApplicationConfiguration.internalValue;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: VpcConfigurationProperty) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface CloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#log_stream_arn TfApplication#log_stream_arn}
  */
  readonly logStreamArn: string;
}
export class CloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamArn = this._logStreamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logStreamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logStreamArn = value.logStreamArn;
    }
  }

  // cloudwatch_logging_option_id - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptionId() {
    return this.getStringAttribute('cloudwatch_logging_option_id');
  }

  // log_stream_arn - computed: false, optional: false, required: true
  private _logStreamArn?: string; 
  public get logStreamArn() {
    return this.getStringAttribute('log_stream_arn');
  }
  public set logStreamArn(value: string) {
    this._logStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamArnInput() {
    return this._logStreamArn;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#create TfApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#delete TfApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesisanalyticsv2_application#update TfApplication#update}
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
