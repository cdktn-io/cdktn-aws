// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEndpointConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#execution_role_arn TfEndpointConfiguration#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#id TfEndpointConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#kms_key_arn TfEndpointConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#name TfEndpointConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#name_prefix TfEndpointConfiguration#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#region TfEndpointConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#tags TfEndpointConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#tags_all TfEndpointConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * async_inference_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#async_inference_config TfEndpointConfiguration#async_inference_config}
  */
  readonly asyncInferenceConfig?: TfEndpointConfiguration.AsyncInferenceConfigProperty;
  /**
  * data_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#data_capture_config TfEndpointConfiguration#data_capture_config}
  */
  readonly dataCaptureConfig?: TfEndpointConfiguration.DataCaptureConfigProperty;
  /**
  * production_variants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#production_variants TfEndpointConfiguration#production_variants}
  */
  readonly productionVariants: TfEndpointConfiguration.ProductionVariantsProperty[] | cdktn.IResolvable;
  /**
  * shadow_production_variants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#shadow_production_variants TfEndpointConfiguration#shadow_production_variants}
  */
  readonly shadowProductionVariants?: TfEndpointConfiguration.ShadowProductionVariantsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}
*/
export class TfEndpointConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_endpoint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEndpointConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEndpointConfiguration to import
  * @param importFromId The id of the existing TfEndpointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEndpointConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEndpointConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfEndpointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint_configuration',
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
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._asyncInferenceConfig.internalValue = config.asyncInferenceConfig;
    this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
    this._productionVariants.internalValue = config.productionVariants;
    this._shadowProductionVariants.internalValue = config.shadowProductionVariants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // async_inference_config - computed: false, optional: true, required: false
  private _asyncInferenceConfig = new TfEndpointConfiguration.AsyncInferenceConfigPropertyOutputReference(this, "async_inference_config");
  public get asyncInferenceConfig() {
    return this._asyncInferenceConfig;
  }
  public putAsyncInferenceConfig(value: TfEndpointConfiguration.AsyncInferenceConfigProperty) {
    this._asyncInferenceConfig.internalValue = value;
  }
  public resetAsyncInferenceConfig() {
    this._asyncInferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInferenceConfigInput() {
    return this._asyncInferenceConfig.internalValue;
  }

  // data_capture_config - computed: false, optional: true, required: false
  private _dataCaptureConfig = new TfEndpointConfiguration.DataCaptureConfigPropertyOutputReference(this, "data_capture_config");
  public get dataCaptureConfig() {
    return this._dataCaptureConfig;
  }
  public putDataCaptureConfig(value: TfEndpointConfiguration.DataCaptureConfigProperty) {
    this._dataCaptureConfig.internalValue = value;
  }
  public resetDataCaptureConfig() {
    this._dataCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureConfigInput() {
    return this._dataCaptureConfig.internalValue;
  }

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants = new TfEndpointConfiguration.ProductionVariantsPropertyList(this, "production_variants", false);
  public get productionVariants() {
    return this._productionVariants;
  }
  public putProductionVariants(value: TfEndpointConfiguration.ProductionVariantsProperty[] | cdktn.IResolvable) {
    this._productionVariants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVariantsInput() {
    return this._productionVariants.internalValue;
  }

  // shadow_production_variants - computed: false, optional: true, required: false
  private _shadowProductionVariants = new TfEndpointConfiguration.ShadowProductionVariantsPropertyList(this, "shadow_production_variants", false);
  public get shadowProductionVariants() {
    return this._shadowProductionVariants;
  }
  public putShadowProductionVariants(value: TfEndpointConfiguration.ShadowProductionVariantsProperty[] | cdktn.IResolvable) {
    this._shadowProductionVariants.internalValue = value;
  }
  public resetShadowProductionVariants() {
    this._shadowProductionVariants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowProductionVariantsInput() {
    return this._shadowProductionVariants.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      id: cdktn.stringToTerraform(this._id),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      async_inference_config: tfEndpointConfigurationAsyncInferenceConfigPropertyToTerraform(this._asyncInferenceConfig.internalValue),
      data_capture_config: tfEndpointConfigurationDataCaptureConfigPropertyToTerraform(this._dataCaptureConfig.internalValue),
      production_variants: cdktn.listMapper(tfEndpointConfigurationProductionVariantsPropertyToTerraform, true)(this._productionVariants.internalValue),
      shadow_production_variants: cdktn.listMapper(tfEndpointConfigurationShadowProductionVariantsPropertyToTerraform, true)(this._shadowProductionVariants.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      async_inference_config: {
        value: tfEndpointConfigurationAsyncInferenceConfigPropertyToHclTerraform(this._asyncInferenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpointConfiguration.AsyncInferenceConfigPropertyList",
      },
      data_capture_config: {
        value: tfEndpointConfigurationDataCaptureConfigPropertyToHclTerraform(this._dataCaptureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpointConfiguration.DataCaptureConfigPropertyList",
      },
      production_variants: {
        value: cdktn.listMapperHcl(tfEndpointConfigurationProductionVariantsPropertyToHclTerraform, true)(this._productionVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpointConfiguration.ProductionVariantsPropertyList",
      },
      shadow_production_variants: {
        value: cdktn.listMapperHcl(tfEndpointConfigurationShadowProductionVariantsPropertyToHclTerraform, true)(this._shadowProductionVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpointConfiguration.ShadowProductionVariantsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEndpointConfigurationClientConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ClientConfigPropertyOutputReference | TfEndpointConfiguration.ClientConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_invocations_per_instance: cdktn.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
  }
}


export function tfEndpointConfigurationClientConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ClientConfigPropertyOutputReference | TfEndpointConfiguration.ClientConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrent_invocations_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentInvocationsPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationNotificationConfigPropertyToTerraform(struct?: TfEndpointConfiguration.NotificationConfigPropertyOutputReference | TfEndpointConfiguration.NotificationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_topic: cdktn.stringToTerraform(struct!.errorTopic),
    include_inference_response_in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeInferenceResponseIn),
    success_topic: cdktn.stringToTerraform(struct!.successTopic),
  }
}


export function tfEndpointConfigurationNotificationConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.NotificationConfigPropertyOutputReference | TfEndpointConfiguration.NotificationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_topic: {
      value: cdktn.stringToHclTerraform(struct!.errorTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_inference_response_in: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeInferenceResponseIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_topic: {
      value: cdktn.stringToHclTerraform(struct!.successTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationOutputConfigPropertyToTerraform(struct?: TfEndpointConfiguration.OutputConfigPropertyOutputReference | TfEndpointConfiguration.OutputConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_failure_path: cdktn.stringToTerraform(struct!.s3FailurePath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    notification_config: tfEndpointConfigurationNotificationConfigPropertyToTerraform(struct!.notificationConfig),
  }
}


export function tfEndpointConfigurationOutputConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.OutputConfigPropertyOutputReference | TfEndpointConfiguration.OutputConfigProperty): any {
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
    s3_failure_path: {
      value: cdktn.stringToHclTerraform(struct!.s3FailurePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_config: {
      value: tfEndpointConfigurationNotificationConfigPropertyToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationAsyncInferenceConfigPropertyToTerraform(struct?: TfEndpointConfiguration.AsyncInferenceConfigPropertyOutputReference | TfEndpointConfiguration.AsyncInferenceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_config: tfEndpointConfigurationClientConfigPropertyToTerraform(struct!.clientConfig),
    output_config: tfEndpointConfigurationOutputConfigPropertyToTerraform(struct!.outputConfig),
  }
}


export function tfEndpointConfigurationAsyncInferenceConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.AsyncInferenceConfigPropertyOutputReference | TfEndpointConfiguration.AsyncInferenceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_config: {
      value: tfEndpointConfigurationClientConfigPropertyToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClientConfigPropertyList",
    },
    output_config: {
      value: tfEndpointConfigurationOutputConfigPropertyToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OutputConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationCaptureContentTypeHeaderPropertyToTerraform(struct?: TfEndpointConfiguration.CaptureContentTypeHeaderPropertyOutputReference | TfEndpointConfiguration.CaptureContentTypeHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.csvContentTypes),
    json_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jsonContentTypes),
  }
}


export function tfEndpointConfigurationCaptureContentTypeHeaderPropertyToHclTerraform(struct?: TfEndpointConfiguration.CaptureContentTypeHeaderPropertyOutputReference | TfEndpointConfiguration.CaptureContentTypeHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.csvContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jsonContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationCaptureOptionsPropertyToTerraform(struct?: TfEndpointConfiguration.CaptureOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capture_mode: cdktn.stringToTerraform(struct!.captureMode),
  }
}


export function tfEndpointConfigurationCaptureOptionsPropertyToHclTerraform(struct?: TfEndpointConfiguration.CaptureOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capture_mode: {
      value: cdktn.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationDataCaptureConfigPropertyToTerraform(struct?: TfEndpointConfiguration.DataCaptureConfigPropertyOutputReference | TfEndpointConfiguration.DataCaptureConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
    enable_capture: cdktn.booleanToTerraform(struct!.enableCapture),
    initial_sampling_percentage: cdktn.numberToTerraform(struct!.initialSamplingPercentage),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    capture_content_type_header: tfEndpointConfigurationCaptureContentTypeHeaderPropertyToTerraform(struct!.captureContentTypeHeader),
    capture_options: cdktn.listMapper(tfEndpointConfigurationCaptureOptionsPropertyToTerraform, true)(struct!.captureOptions),
  }
}


export function tfEndpointConfigurationDataCaptureConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.DataCaptureConfigPropertyOutputReference | TfEndpointConfiguration.DataCaptureConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_capture: {
      value: cdktn.booleanToHclTerraform(struct!.enableCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_sampling_percentage: {
      value: cdktn.numberToHclTerraform(struct!.initialSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_content_type_header: {
      value: tfEndpointConfigurationCaptureContentTypeHeaderPropertyToHclTerraform(struct!.captureContentTypeHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CaptureContentTypeHeaderPropertyList",
    },
    capture_options: {
      value: cdktn.listMapperHcl(tfEndpointConfigurationCaptureOptionsPropertyToHclTerraform, true)(struct!.captureOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CaptureOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationProductionVariantsCapacityReservationConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsCapacityReservationConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsCapacityReservationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
    ml_reservation_arn: cdktn.stringToTerraform(struct!.mlReservationArn),
  }
}


export function tfEndpointConfigurationProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsCapacityReservationConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsCapacityReservationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ml_reservation_arn: {
      value: cdktn.stringToHclTerraform(struct!.mlReservationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationProductionVariantsCoreDumpConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsCoreDumpConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsCoreDumpConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function tfEndpointConfigurationProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsCoreDumpConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsCoreDumpConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function tfEndpointConfigurationProductionVariantsManagedInstanceScalingPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsManagedInstanceScalingPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsManagedInstanceScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfEndpointConfigurationProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsManagedInstanceScalingPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsManagedInstanceScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfEndpointConfigurationProductionVariantsRoutingConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_strategy: cdktn.stringToTerraform(struct!.routingStrategy),
  }
}


export function tfEndpointConfigurationProductionVariantsRoutingConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.routingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationProductionVariantsServerlessConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsServerlessConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsServerlessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
    memory_size_in_mb: cdktn.numberToTerraform(struct!.memorySizeInMb),
    provisioned_concurrency: cdktn.numberToTerraform(struct!.provisionedConcurrency),
  }
}


export function tfEndpointConfigurationProductionVariantsServerlessConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsServerlessConfigPropertyOutputReference | TfEndpointConfiguration.ProductionVariantsServerlessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.memorySizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.provisionedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationProductionVariantsPropertyToTerraform(struct?: TfEndpointConfiguration.ProductionVariantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    enable_ssm_access: cdktn.booleanToTerraform(struct!.enableSsmAccess),
    inference_ami_version: cdktn.stringToTerraform(struct!.inferenceAmiVersion),
    initial_instance_count: cdktn.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktn.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    variant_name: cdktn.stringToTerraform(struct!.variantName),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    capacity_reservation_config: tfEndpointConfigurationProductionVariantsCapacityReservationConfigPropertyToTerraform(struct!.capacityReservationConfig),
    core_dump_config: tfEndpointConfigurationProductionVariantsCoreDumpConfigPropertyToTerraform(struct!.coreDumpConfig),
    managed_instance_scaling: tfEndpointConfigurationProductionVariantsManagedInstanceScalingPropertyToTerraform(struct!.managedInstanceScaling),
    routing_config: cdktn.listMapper(tfEndpointConfigurationProductionVariantsRoutingConfigPropertyToTerraform, true)(struct!.routingConfig),
    serverless_config: tfEndpointConfigurationProductionVariantsServerlessConfigPropertyToTerraform(struct!.serverlessConfig),
  }
}


export function tfEndpointConfigurationProductionVariantsPropertyToHclTerraform(struct?: TfEndpointConfiguration.ProductionVariantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ssm_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableSsmAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inference_ami_version: {
      value: cdktn.stringToHclTerraform(struct!.inferenceAmiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktn.numberToHclTerraform(struct!.initialVariantWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktn.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_reservation_config: {
      value: tfEndpointConfigurationProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct!.capacityReservationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProductionVariantsCapacityReservationConfigPropertyList",
    },
    core_dump_config: {
      value: tfEndpointConfigurationProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct!.coreDumpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProductionVariantsCoreDumpConfigPropertyList",
    },
    managed_instance_scaling: {
      value: tfEndpointConfigurationProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct!.managedInstanceScaling),
      isBlock: true,
      type: "list",
      storageClassType: "ProductionVariantsManagedInstanceScalingPropertyList",
    },
    routing_config: {
      value: cdktn.listMapperHcl(tfEndpointConfigurationProductionVariantsRoutingConfigPropertyToHclTerraform, true)(struct!.routingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProductionVariantsRoutingConfigPropertyList",
    },
    serverless_config: {
      value: tfEndpointConfigurationProductionVariantsServerlessConfigPropertyToHclTerraform(struct!.serverlessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProductionVariantsServerlessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationShadowProductionVariantsCapacityReservationConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsCapacityReservationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
    ml_reservation_arn: cdktn.stringToTerraform(struct!.mlReservationArn),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsCapacityReservationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ml_reservation_arn: {
      value: cdktn.stringToHclTerraform(struct!.mlReservationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationShadowProductionVariantsCoreDumpConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsCoreDumpConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsCoreDumpConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsCoreDumpConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsCoreDumpConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function tfEndpointConfigurationShadowProductionVariantsManagedInstanceScalingPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsManagedInstanceScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsManagedInstanceScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfEndpointConfigurationShadowProductionVariantsRoutingConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_strategy: cdktn.stringToTerraform(struct!.routingStrategy),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsRoutingConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.routingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationShadowProductionVariantsServerlessConfigPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsServerlessConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsServerlessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
    memory_size_in_mb: cdktn.numberToTerraform(struct!.memorySizeInMb),
    provisioned_concurrency: cdktn.numberToTerraform(struct!.provisionedConcurrency),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsServerlessConfigPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsServerlessConfigPropertyOutputReference | TfEndpointConfiguration.ShadowProductionVariantsServerlessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.memorySizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.provisionedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointConfigurationShadowProductionVariantsPropertyToTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    enable_ssm_access: cdktn.booleanToTerraform(struct!.enableSsmAccess),
    inference_ami_version: cdktn.stringToTerraform(struct!.inferenceAmiVersion),
    initial_instance_count: cdktn.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktn.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    variant_name: cdktn.stringToTerraform(struct!.variantName),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    capacity_reservation_config: tfEndpointConfigurationShadowProductionVariantsCapacityReservationConfigPropertyToTerraform(struct!.capacityReservationConfig),
    core_dump_config: tfEndpointConfigurationShadowProductionVariantsCoreDumpConfigPropertyToTerraform(struct!.coreDumpConfig),
    managed_instance_scaling: tfEndpointConfigurationShadowProductionVariantsManagedInstanceScalingPropertyToTerraform(struct!.managedInstanceScaling),
    routing_config: cdktn.listMapper(tfEndpointConfigurationShadowProductionVariantsRoutingConfigPropertyToTerraform, true)(struct!.routingConfig),
    serverless_config: tfEndpointConfigurationShadowProductionVariantsServerlessConfigPropertyToTerraform(struct!.serverlessConfig),
  }
}


export function tfEndpointConfigurationShadowProductionVariantsPropertyToHclTerraform(struct?: TfEndpointConfiguration.ShadowProductionVariantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ssm_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableSsmAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inference_ami_version: {
      value: cdktn.stringToHclTerraform(struct!.inferenceAmiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktn.numberToHclTerraform(struct!.initialVariantWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktn.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_reservation_config: {
      value: tfEndpointConfigurationShadowProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct!.capacityReservationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ShadowProductionVariantsCapacityReservationConfigPropertyList",
    },
    core_dump_config: {
      value: tfEndpointConfigurationShadowProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct!.coreDumpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ShadowProductionVariantsCoreDumpConfigPropertyList",
    },
    managed_instance_scaling: {
      value: tfEndpointConfigurationShadowProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct!.managedInstanceScaling),
      isBlock: true,
      type: "list",
      storageClassType: "ShadowProductionVariantsManagedInstanceScalingPropertyList",
    },
    routing_config: {
      value: cdktn.listMapperHcl(tfEndpointConfigurationShadowProductionVariantsRoutingConfigPropertyToHclTerraform, true)(struct!.routingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ShadowProductionVariantsRoutingConfigPropertyList",
    },
    serverless_config: {
      value: tfEndpointConfigurationShadowProductionVariantsServerlessConfigPropertyToHclTerraform(struct!.serverlessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ShadowProductionVariantsServerlessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfEndpointConfiguration {
export interface ClientConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance TfEndpointConfiguration#max_concurrent_invocations_per_instance}
  */
  readonly maxConcurrentInvocationsPerInstance?: number;
}
export class ClientConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentInvocationsPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentInvocationsPerInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
    }
  }

  // max_concurrent_invocations_per_instance - computed: false, optional: true, required: false
  private _maxConcurrentInvocationsPerInstance?: number; 
  public get maxConcurrentInvocationsPerInstance() {
    return this.getNumberAttribute('max_concurrent_invocations_per_instance');
  }
  public set maxConcurrentInvocationsPerInstance(value: number) {
    this._maxConcurrentInvocationsPerInstance = value;
  }
  public resetMaxConcurrentInvocationsPerInstance() {
    this._maxConcurrentInvocationsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInvocationsPerInstanceInput() {
    return this._maxConcurrentInvocationsPerInstance;
  }
}
export interface NotificationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#error_topic TfEndpointConfiguration#error_topic}
  */
  readonly errorTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#include_inference_response_in TfEndpointConfiguration#include_inference_response_in}
  */
  readonly includeInferenceResponseIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#success_topic TfEndpointConfiguration#success_topic}
  */
  readonly successTopic?: string;
}
export class NotificationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorTopic = this._errorTopic;
    }
    if (this._includeInferenceResponseIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInferenceResponseIn = this._includeInferenceResponseIn;
    }
    if (this._successTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.successTopic = this._successTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorTopic = undefined;
      this._includeInferenceResponseIn = undefined;
      this._successTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorTopic = value.errorTopic;
      this._includeInferenceResponseIn = value.includeInferenceResponseIn;
      this._successTopic = value.successTopic;
    }
  }

  // error_topic - computed: false, optional: true, required: false
  private _errorTopic?: string; 
  public get errorTopic() {
    return this.getStringAttribute('error_topic');
  }
  public set errorTopic(value: string) {
    this._errorTopic = value;
  }
  public resetErrorTopic() {
    this._errorTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTopicInput() {
    return this._errorTopic;
  }

  // include_inference_response_in - computed: false, optional: true, required: false
  private _includeInferenceResponseIn?: string[]; 
  public get includeInferenceResponseIn() {
    return cdktn.Fn.tolist(this.getListAttribute('include_inference_response_in'));
  }
  public set includeInferenceResponseIn(value: string[]) {
    this._includeInferenceResponseIn = value;
  }
  public resetIncludeInferenceResponseIn() {
    this._includeInferenceResponseIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInferenceResponseInInput() {
    return this._includeInferenceResponseIn;
  }

  // success_topic - computed: false, optional: true, required: false
  private _successTopic?: string; 
  public get successTopic() {
    return this.getStringAttribute('success_topic');
  }
  public set successTopic(value: string) {
    this._successTopic = value;
  }
  public resetSuccessTopic() {
    this._successTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successTopicInput() {
    return this._successTopic;
  }
}
export interface OutputConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id TfEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#s3_failure_path TfEndpointConfiguration#s3_failure_path}
  */
  readonly s3FailurePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#s3_output_path TfEndpointConfiguration#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#notification_config TfEndpointConfiguration#notification_config}
  */
  readonly notificationConfig?: NotificationConfigProperty;
}
export class OutputConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3FailurePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FailurePath = this._s3FailurePath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3FailurePath = undefined;
      this._s3OutputPath = undefined;
      this._notificationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3FailurePath = value.s3FailurePath;
      this._s3OutputPath = value.s3OutputPath;
      this._notificationConfig.internalValue = value.notificationConfig;
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

  // s3_failure_path - computed: false, optional: true, required: false
  private _s3FailurePath?: string; 
  public get s3FailurePath() {
    return this.getStringAttribute('s3_failure_path');
  }
  public set s3FailurePath(value: string) {
    this._s3FailurePath = value;
  }
  public resetS3FailurePath() {
    this._s3FailurePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FailurePathInput() {
    return this._s3FailurePath;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new NotificationConfigPropertyOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: NotificationConfigProperty) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }
}
export interface AsyncInferenceConfigProperty {
  /**
  * client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#client_config TfEndpointConfiguration#client_config}
  */
  readonly clientConfig?: ClientConfigProperty;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#output_config TfEndpointConfiguration#output_config}
  */
  readonly outputConfig: OutputConfigProperty;
}
export class AsyncInferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsyncInferenceConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsyncInferenceConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientConfig.internalValue = undefined;
      this._outputConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientConfig.internalValue = value.clientConfig;
      this._outputConfig.internalValue = value.outputConfig;
    }
  }

  // client_config - computed: false, optional: true, required: false
  private _clientConfig = new ClientConfigPropertyOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: ClientConfigProperty) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new OutputConfigPropertyOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: OutputConfigProperty) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }
}
export interface CaptureContentTypeHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#csv_content_types TfEndpointConfiguration#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#json_content_types TfEndpointConfiguration#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}
export class CaptureContentTypeHeaderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CaptureContentTypeHeaderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvContentTypes = this._csvContentTypes;
    }
    if (this._jsonContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonContentTypes = this._jsonContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptureContentTypeHeaderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvContentTypes = undefined;
      this._jsonContentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvContentTypes = value.csvContentTypes;
      this._jsonContentTypes = value.jsonContentTypes;
    }
  }

  // csv_content_types - computed: false, optional: true, required: false
  private _csvContentTypes?: string[]; 
  public get csvContentTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('csv_content_types'));
  }
  public set csvContentTypes(value: string[]) {
    this._csvContentTypes = value;
  }
  public resetCsvContentTypes() {
    this._csvContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentTypesInput() {
    return this._csvContentTypes;
  }

  // json_content_types - computed: false, optional: true, required: false
  private _jsonContentTypes?: string[]; 
  public get jsonContentTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('json_content_types'));
  }
  public set jsonContentTypes(value: string[]) {
    this._jsonContentTypes = value;
  }
  public resetJsonContentTypes() {
    this._jsonContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonContentTypesInput() {
    return this._jsonContentTypes;
  }
}
export interface CaptureOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capture_mode TfEndpointConfiguration#capture_mode}
  */
  readonly captureMode: string;
}
export class CaptureOptionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CaptureOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptureOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureMode = value.captureMode;
    }
  }

  // capture_mode - computed: false, optional: false, required: true
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }
}

export class CaptureOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : CaptureOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): CaptureOptionsPropertyOutputReference {
    return new CaptureOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCaptureConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri TfEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#enable_capture TfEndpointConfiguration#enable_capture}
  */
  readonly enableCapture?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#initial_sampling_percentage TfEndpointConfiguration#initial_sampling_percentage}
  */
  readonly initialSamplingPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id TfEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * capture_content_type_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capture_content_type_header TfEndpointConfiguration#capture_content_type_header}
  */
  readonly captureContentTypeHeader?: CaptureContentTypeHeaderProperty;
  /**
  * capture_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capture_options TfEndpointConfiguration#capture_options}
  */
  readonly captureOptions: CaptureOptionsProperty[] | cdktn.IResolvable;
}
export class DataCaptureConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCaptureConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._enableCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCapture = this._enableCapture;
    }
    if (this._initialSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._captureContentTypeHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
    }
    if (this._captureOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureOptions = this._captureOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCaptureConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._enableCapture = undefined;
      this._initialSamplingPercentage = undefined;
      this._kmsKeyId = undefined;
      this._captureContentTypeHeader.internalValue = undefined;
      this._captureOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._enableCapture = value.enableCapture;
      this._initialSamplingPercentage = value.initialSamplingPercentage;
      this._kmsKeyId = value.kmsKeyId;
      this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
      this._captureOptions.internalValue = value.captureOptions;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // enable_capture - computed: false, optional: true, required: false
  private _enableCapture?: boolean | cdktn.IResolvable; 
  public get enableCapture() {
    return this.getBooleanAttribute('enable_capture');
  }
  public set enableCapture(value: boolean | cdktn.IResolvable) {
    this._enableCapture = value;
  }
  public resetEnableCapture() {
    this._enableCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptureInput() {
    return this._enableCapture;
  }

  // initial_sampling_percentage - computed: false, optional: false, required: true
  private _initialSamplingPercentage?: number; 
  public get initialSamplingPercentage() {
    return this.getNumberAttribute('initial_sampling_percentage');
  }
  public set initialSamplingPercentage(value: number) {
    this._initialSamplingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSamplingPercentageInput() {
    return this._initialSamplingPercentage;
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

  // capture_content_type_header - computed: false, optional: true, required: false
  private _captureContentTypeHeader = new CaptureContentTypeHeaderPropertyOutputReference(this, "capture_content_type_header");
  public get captureContentTypeHeader() {
    return this._captureContentTypeHeader;
  }
  public putCaptureContentTypeHeader(value: CaptureContentTypeHeaderProperty) {
    this._captureContentTypeHeader.internalValue = value;
  }
  public resetCaptureContentTypeHeader() {
    this._captureContentTypeHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureContentTypeHeaderInput() {
    return this._captureContentTypeHeader.internalValue;
  }

  // capture_options - computed: false, optional: false, required: true
  private _captureOptions = new CaptureOptionsPropertyList(this, "capture_options", false);
  public get captureOptions() {
    return this._captureOptions;
  }
  public putCaptureOptions(value: CaptureOptionsProperty[] | cdktn.IResolvable) {
    this._captureOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureOptionsInput() {
    return this._captureOptions.internalValue;
  }
}
export interface ProductionVariantsCapacityReservationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capacity_reservation_preference TfEndpointConfiguration#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#ml_reservation_arn TfEndpointConfiguration#ml_reservation_arn}
  */
  readonly mlReservationArn?: string;
}
export class ProductionVariantsCapacityReservationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductionVariantsCapacityReservationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._mlReservationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlReservationArn = this._mlReservationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsCapacityReservationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationPreference = undefined;
      this._mlReservationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._mlReservationArn = value.mlReservationArn;
    }
  }

  // capacity_reservation_preference - computed: false, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // ml_reservation_arn - computed: false, optional: true, required: false
  private _mlReservationArn?: string; 
  public get mlReservationArn() {
    return this.getStringAttribute('ml_reservation_arn');
  }
  public set mlReservationArn(value: string) {
    this._mlReservationArn = value;
  }
  public resetMlReservationArn() {
    this._mlReservationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlReservationArnInput() {
    return this._mlReservationArn;
  }
}
export interface ProductionVariantsCoreDumpConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri TfEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id TfEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
}
export class ProductionVariantsCoreDumpConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductionVariantsCoreDumpConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsCoreDumpConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
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
export interface ProductionVariantsManagedInstanceScalingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count TfEndpointConfiguration#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count TfEndpointConfiguration#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#status TfEndpointConfiguration#status}
  */
  readonly status?: string;
}
export class ProductionVariantsManagedInstanceScalingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductionVariantsManagedInstanceScalingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsManagedInstanceScalingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._status = value.status;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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
export interface ProductionVariantsRoutingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy TfEndpointConfiguration#routing_strategy}
  */
  readonly routingStrategy: string;
}
export class ProductionVariantsRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingStrategy = this._routingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingStrategy = value.routingStrategy;
    }
  }

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy?: string; 
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
  public set routingStrategy(value: string) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy;
  }
}

export class ProductionVariantsRoutingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductionVariantsRoutingConfigPropertyOutputReference {
    return new ProductionVariantsRoutingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductionVariantsServerlessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency TfEndpointConfiguration#max_concurrency}
  */
  readonly maxConcurrency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb TfEndpointConfiguration#memory_size_in_mb}
  */
  readonly memorySizeInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency TfEndpointConfiguration#provisioned_concurrency}
  */
  readonly provisionedConcurrency?: number;
}
export class ProductionVariantsServerlessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductionVariantsServerlessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memorySizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeInMb = this._memorySizeInMb;
    }
    if (this._provisionedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsServerlessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrency = undefined;
      this._memorySizeInMb = undefined;
      this._provisionedConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrency = value.maxConcurrency;
      this._memorySizeInMb = value.memorySizeInMb;
      this._provisionedConcurrency = value.provisionedConcurrency;
    }
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_size_in_mb - computed: false, optional: false, required: true
  private _memorySizeInMb?: number; 
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }
  public set memorySizeInMb(value: number) {
    this._memorySizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInMbInput() {
    return this._memorySizeInMb;
  }

  // provisioned_concurrency - computed: false, optional: true, required: false
  private _provisionedConcurrency?: number; 
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
  public set provisionedConcurrency(value: number) {
    this._provisionedConcurrency = value;
  }
  public resetProvisionedConcurrency() {
    this._provisionedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyInput() {
    return this._provisionedConcurrency;
  }
}
export interface ProductionVariantsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type TfEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds TfEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access TfEndpointConfiguration#enable_ssm_access}
  */
  readonly enableSsmAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version TfEndpointConfiguration#inference_ami_version}
  */
  readonly inferenceAmiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count TfEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight TfEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#instance_type TfEndpointConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds TfEndpointConfiguration#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#model_name TfEndpointConfiguration#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#variant_name TfEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb TfEndpointConfiguration#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * capacity_reservation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capacity_reservation_config TfEndpointConfiguration#capacity_reservation_config}
  */
  readonly capacityReservationConfig?: ProductionVariantsCapacityReservationConfigProperty;
  /**
  * core_dump_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config TfEndpointConfiguration#core_dump_config}
  */
  readonly coreDumpConfig?: ProductionVariantsCoreDumpConfigProperty;
  /**
  * managed_instance_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling TfEndpointConfiguration#managed_instance_scaling}
  */
  readonly managedInstanceScaling?: ProductionVariantsManagedInstanceScalingProperty;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#routing_config TfEndpointConfiguration#routing_config}
  */
  readonly routingConfig?: ProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#serverless_config TfEndpointConfiguration#serverless_config}
  */
  readonly serverlessConfig?: ProductionVariantsServerlessConfigProperty;
}
export class ProductionVariantsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductionVariantsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._enableSsmAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsmAccess = this._enableSsmAccess;
    }
    if (this._inferenceAmiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._capacityReservationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationConfig = this._capacityReservationConfig?.internalValue;
    }
    if (this._coreDumpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
    }
    if (this._managedInstanceScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
    }
    if (this._routingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingConfig = this._routingConfig?.internalValue;
    }
    if (this._serverlessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductionVariantsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._enableSsmAccess = undefined;
      this._inferenceAmiVersion = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
      this._volumeSizeInGb = undefined;
      this._capacityReservationConfig.internalValue = undefined;
      this._coreDumpConfig.internalValue = undefined;
      this._managedInstanceScaling.internalValue = undefined;
      this._routingConfig.internalValue = undefined;
      this._serverlessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._enableSsmAccess = value.enableSsmAccess;
      this._inferenceAmiVersion = value.inferenceAmiVersion;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._capacityReservationConfig.internalValue = value.capacityReservationConfig;
      this._coreDumpConfig.internalValue = value.coreDumpConfig;
      this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
      this._routingConfig.internalValue = value.routingConfig;
      this._serverlessConfig.internalValue = value.serverlessConfig;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // enable_ssm_access - computed: false, optional: true, required: false
  private _enableSsmAccess?: boolean | cdktn.IResolvable; 
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }
  public set enableSsmAccess(value: boolean | cdktn.IResolvable) {
    this._enableSsmAccess = value;
  }
  public resetEnableSsmAccess() {
    this._enableSsmAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmAccessInput() {
    return this._enableSsmAccess;
  }

  // inference_ami_version - computed: false, optional: true, required: false
  private _inferenceAmiVersion?: string; 
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }
  public set inferenceAmiVersion(value: string) {
    this._inferenceAmiVersion = value;
  }
  public resetInferenceAmiVersion() {
    this._inferenceAmiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAmiVersionInput() {
    return this._inferenceAmiVersion;
  }

  // initial_instance_count - computed: false, optional: true, required: false
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  public resetInitialInstanceCount() {
    this._initialInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // capacity_reservation_config - computed: false, optional: true, required: false
  private _capacityReservationConfig = new ProductionVariantsCapacityReservationConfigPropertyOutputReference(this, "capacity_reservation_config");
  public get capacityReservationConfig() {
    return this._capacityReservationConfig;
  }
  public putCapacityReservationConfig(value: ProductionVariantsCapacityReservationConfigProperty) {
    this._capacityReservationConfig.internalValue = value;
  }
  public resetCapacityReservationConfig() {
    this._capacityReservationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationConfigInput() {
    return this._capacityReservationConfig.internalValue;
  }

  // core_dump_config - computed: false, optional: true, required: false
  private _coreDumpConfig = new ProductionVariantsCoreDumpConfigPropertyOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }
  public putCoreDumpConfig(value: ProductionVariantsCoreDumpConfigProperty) {
    this._coreDumpConfig.internalValue = value;
  }
  public resetCoreDumpConfig() {
    this._coreDumpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDumpConfigInput() {
    return this._coreDumpConfig.internalValue;
  }

  // managed_instance_scaling - computed: false, optional: true, required: false
  private _managedInstanceScaling = new ProductionVariantsManagedInstanceScalingPropertyOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }
  public putManagedInstanceScaling(value: ProductionVariantsManagedInstanceScalingProperty) {
    this._managedInstanceScaling.internalValue = value;
  }
  public resetManagedInstanceScaling() {
    this._managedInstanceScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceScalingInput() {
    return this._managedInstanceScaling.internalValue;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new ProductionVariantsRoutingConfigPropertyList(this, "routing_config", false);
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: ProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new ProductionVariantsServerlessConfigPropertyOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: ProductionVariantsServerlessConfigProperty) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }
}

export class ProductionVariantsPropertyList extends cdktn.ComplexList {
  public internalValue? : ProductionVariantsProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductionVariantsPropertyOutputReference {
    return new ProductionVariantsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShadowProductionVariantsCapacityReservationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capacity_reservation_preference TfEndpointConfiguration#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#ml_reservation_arn TfEndpointConfiguration#ml_reservation_arn}
  */
  readonly mlReservationArn?: string;
}
export class ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShadowProductionVariantsCapacityReservationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._mlReservationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlReservationArn = this._mlReservationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsCapacityReservationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationPreference = undefined;
      this._mlReservationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._mlReservationArn = value.mlReservationArn;
    }
  }

  // capacity_reservation_preference - computed: false, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // ml_reservation_arn - computed: false, optional: true, required: false
  private _mlReservationArn?: string; 
  public get mlReservationArn() {
    return this.getStringAttribute('ml_reservation_arn');
  }
  public set mlReservationArn(value: string) {
    this._mlReservationArn = value;
  }
  public resetMlReservationArn() {
    this._mlReservationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlReservationArnInput() {
    return this._mlReservationArn;
  }
}
export interface ShadowProductionVariantsCoreDumpConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri TfEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id TfEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId: string;
}
export class ShadowProductionVariantsCoreDumpConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShadowProductionVariantsCoreDumpConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsCoreDumpConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface ShadowProductionVariantsManagedInstanceScalingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count TfEndpointConfiguration#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count TfEndpointConfiguration#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#status TfEndpointConfiguration#status}
  */
  readonly status?: string;
}
export class ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShadowProductionVariantsManagedInstanceScalingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsManagedInstanceScalingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._status = value.status;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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
export interface ShadowProductionVariantsRoutingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy TfEndpointConfiguration#routing_strategy}
  */
  readonly routingStrategy: string;
}
export class ShadowProductionVariantsRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingStrategy = this._routingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingStrategy = value.routingStrategy;
    }
  }

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy?: string; 
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
  public set routingStrategy(value: string) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy;
  }
}

export class ShadowProductionVariantsRoutingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ShadowProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ShadowProductionVariantsRoutingConfigPropertyOutputReference {
    return new ShadowProductionVariantsRoutingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShadowProductionVariantsServerlessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency TfEndpointConfiguration#max_concurrency}
  */
  readonly maxConcurrency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb TfEndpointConfiguration#memory_size_in_mb}
  */
  readonly memorySizeInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency TfEndpointConfiguration#provisioned_concurrency}
  */
  readonly provisionedConcurrency?: number;
}
export class ShadowProductionVariantsServerlessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShadowProductionVariantsServerlessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memorySizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeInMb = this._memorySizeInMb;
    }
    if (this._provisionedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsServerlessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrency = undefined;
      this._memorySizeInMb = undefined;
      this._provisionedConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrency = value.maxConcurrency;
      this._memorySizeInMb = value.memorySizeInMb;
      this._provisionedConcurrency = value.provisionedConcurrency;
    }
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_size_in_mb - computed: false, optional: false, required: true
  private _memorySizeInMb?: number; 
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }
  public set memorySizeInMb(value: number) {
    this._memorySizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInMbInput() {
    return this._memorySizeInMb;
  }

  // provisioned_concurrency - computed: false, optional: true, required: false
  private _provisionedConcurrency?: number; 
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
  public set provisionedConcurrency(value: number) {
    this._provisionedConcurrency = value;
  }
  public resetProvisionedConcurrency() {
    this._provisionedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyInput() {
    return this._provisionedConcurrency;
  }
}
export interface ShadowProductionVariantsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type TfEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds TfEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access TfEndpointConfiguration#enable_ssm_access}
  */
  readonly enableSsmAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version TfEndpointConfiguration#inference_ami_version}
  */
  readonly inferenceAmiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count TfEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight TfEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#instance_type TfEndpointConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds TfEndpointConfiguration#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#model_name TfEndpointConfiguration#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#variant_name TfEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb TfEndpointConfiguration#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * capacity_reservation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#capacity_reservation_config TfEndpointConfiguration#capacity_reservation_config}
  */
  readonly capacityReservationConfig?: ShadowProductionVariantsCapacityReservationConfigProperty;
  /**
  * core_dump_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config TfEndpointConfiguration#core_dump_config}
  */
  readonly coreDumpConfig?: ShadowProductionVariantsCoreDumpConfigProperty;
  /**
  * managed_instance_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling TfEndpointConfiguration#managed_instance_scaling}
  */
  readonly managedInstanceScaling?: ShadowProductionVariantsManagedInstanceScalingProperty;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#routing_config TfEndpointConfiguration#routing_config}
  */
  readonly routingConfig?: ShadowProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint_configuration#serverless_config TfEndpointConfiguration#serverless_config}
  */
  readonly serverlessConfig?: ShadowProductionVariantsServerlessConfigProperty;
}
export class ShadowProductionVariantsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ShadowProductionVariantsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._enableSsmAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsmAccess = this._enableSsmAccess;
    }
    if (this._inferenceAmiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._capacityReservationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationConfig = this._capacityReservationConfig?.internalValue;
    }
    if (this._coreDumpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
    }
    if (this._managedInstanceScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
    }
    if (this._routingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingConfig = this._routingConfig?.internalValue;
    }
    if (this._serverlessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShadowProductionVariantsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._enableSsmAccess = undefined;
      this._inferenceAmiVersion = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
      this._volumeSizeInGb = undefined;
      this._capacityReservationConfig.internalValue = undefined;
      this._coreDumpConfig.internalValue = undefined;
      this._managedInstanceScaling.internalValue = undefined;
      this._routingConfig.internalValue = undefined;
      this._serverlessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._enableSsmAccess = value.enableSsmAccess;
      this._inferenceAmiVersion = value.inferenceAmiVersion;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._capacityReservationConfig.internalValue = value.capacityReservationConfig;
      this._coreDumpConfig.internalValue = value.coreDumpConfig;
      this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
      this._routingConfig.internalValue = value.routingConfig;
      this._serverlessConfig.internalValue = value.serverlessConfig;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // enable_ssm_access - computed: false, optional: true, required: false
  private _enableSsmAccess?: boolean | cdktn.IResolvable; 
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }
  public set enableSsmAccess(value: boolean | cdktn.IResolvable) {
    this._enableSsmAccess = value;
  }
  public resetEnableSsmAccess() {
    this._enableSsmAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmAccessInput() {
    return this._enableSsmAccess;
  }

  // inference_ami_version - computed: false, optional: true, required: false
  private _inferenceAmiVersion?: string; 
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }
  public set inferenceAmiVersion(value: string) {
    this._inferenceAmiVersion = value;
  }
  public resetInferenceAmiVersion() {
    this._inferenceAmiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAmiVersionInput() {
    return this._inferenceAmiVersion;
  }

  // initial_instance_count - computed: false, optional: true, required: false
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  public resetInitialInstanceCount() {
    this._initialInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // capacity_reservation_config - computed: false, optional: true, required: false
  private _capacityReservationConfig = new ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference(this, "capacity_reservation_config");
  public get capacityReservationConfig() {
    return this._capacityReservationConfig;
  }
  public putCapacityReservationConfig(value: ShadowProductionVariantsCapacityReservationConfigProperty) {
    this._capacityReservationConfig.internalValue = value;
  }
  public resetCapacityReservationConfig() {
    this._capacityReservationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationConfigInput() {
    return this._capacityReservationConfig.internalValue;
  }

  // core_dump_config - computed: false, optional: true, required: false
  private _coreDumpConfig = new ShadowProductionVariantsCoreDumpConfigPropertyOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }
  public putCoreDumpConfig(value: ShadowProductionVariantsCoreDumpConfigProperty) {
    this._coreDumpConfig.internalValue = value;
  }
  public resetCoreDumpConfig() {
    this._coreDumpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDumpConfigInput() {
    return this._coreDumpConfig.internalValue;
  }

  // managed_instance_scaling - computed: false, optional: true, required: false
  private _managedInstanceScaling = new ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }
  public putManagedInstanceScaling(value: ShadowProductionVariantsManagedInstanceScalingProperty) {
    this._managedInstanceScaling.internalValue = value;
  }
  public resetManagedInstanceScaling() {
    this._managedInstanceScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceScalingInput() {
    return this._managedInstanceScaling.internalValue;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new ShadowProductionVariantsRoutingConfigPropertyList(this, "routing_config", false);
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: ShadowProductionVariantsRoutingConfigProperty[] | cdktn.IResolvable) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new ShadowProductionVariantsServerlessConfigPropertyOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: ShadowProductionVariantsServerlessConfigProperty) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }
}

export class ShadowProductionVariantsPropertyList extends cdktn.ComplexList {
  public internalValue? : ShadowProductionVariantsProperty[] | cdktn.IResolvable

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
  public get(index: number): ShadowProductionVariantsPropertyOutputReference {
    return new ShadowProductionVariantsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
