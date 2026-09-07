// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#enable_network_isolation AwsModel#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#execution_role_arn AwsModel#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#id AwsModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#name AwsModel#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#region AwsModel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#tags AwsModel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#tags_all AwsModel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#container AwsModel#container}
  */
  readonly container?: AwsModel.ContainerProperty[] | cdktn.IResolvable;
  /**
  * inference_execution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#inference_execution_config AwsModel#inference_execution_config}
  */
  readonly inferenceExecutionConfig?: AwsModel.InferenceExecutionConfigProperty;
  /**
  * primary_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#primary_container AwsModel#primary_container}
  */
  readonly primaryContainer?: AwsModel.PrimaryContainerProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#vpc_config AwsModel#vpc_config}
  */
  readonly vpcConfig?: AwsModel.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model aws_sagemaker_model}
*/
export class AwsModel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsModel to import
  * @param importFromId The id of the existing AwsModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model aws_sagemaker_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsModelConfig
  */
  public constructor(scope: Construct, id: string, config: AwsModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
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
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._container.internalValue = config.container;
    this._inferenceExecutionConfig.internalValue = config.inferenceExecutionConfig;
    this._primaryContainer.internalValue = config.primaryContainer;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
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

  // container - computed: false, optional: true, required: false
  private _container = new AwsModel.ContainerPropertyList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: AwsModel.ContainerProperty[] | cdktn.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // inference_execution_config - computed: false, optional: true, required: false
  private _inferenceExecutionConfig = new AwsModel.InferenceExecutionConfigPropertyOutputReference(this, "inference_execution_config");
  public get inferenceExecutionConfig() {
    return this._inferenceExecutionConfig;
  }
  public putInferenceExecutionConfig(value: AwsModel.InferenceExecutionConfigProperty) {
    this._inferenceExecutionConfig.internalValue = value;
  }
  public resetInferenceExecutionConfig() {
    this._inferenceExecutionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceExecutionConfigInput() {
    return this._inferenceExecutionConfig.internalValue;
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer = new AwsModel.PrimaryContainerPropertyOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public putPrimaryContainer(value: AwsModel.PrimaryContainerProperty) {
    this._primaryContainer.internalValue = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsModel.VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsModel.VpcConfigProperty) {
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
      enable_network_isolation: cdktn.booleanToTerraform(this._enableNetworkIsolation),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      container: cdktn.listMapper(awsModelContainerPropertyToTerraform, true)(this._container.internalValue),
      inference_execution_config: awsModelInferenceExecutionConfigPropertyToTerraform(this._inferenceExecutionConfig.internalValue),
      primary_container: awsModelPrimaryContainerPropertyToTerraform(this._primaryContainer.internalValue),
      vpc_config: awsModelVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_network_isolation: {
        value: cdktn.booleanToHclTerraform(this._enableNetworkIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      container: {
        value: cdktn.listMapperHcl(awsModelContainerPropertyToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsModel.ContainerPropertyList",
      },
      inference_execution_config: {
        value: awsModelInferenceExecutionConfigPropertyToHclTerraform(this._inferenceExecutionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsModel.InferenceExecutionConfigPropertyList",
      },
      primary_container: {
        value: awsModelPrimaryContainerPropertyToHclTerraform(this._primaryContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsModel.PrimaryContainerPropertyList",
      },
      vpc_config: {
        value: awsModelVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsModel.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerAdditionalModelDataSourceS3DataSourcePropertyToTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    model_access_config: awsModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
  }
}


export function awsModelContainerAdditionalModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: awsModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerAdditionalModelDataSourcePropertyToTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    s3_data_source: cdktn.listMapper(awsModelContainerAdditionalModelDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsModelContainerAdditionalModelDataSourcePropertyToHclTerraform(struct?: AwsModel.ContainerAdditionalModelDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(awsModelContainerAdditionalModelDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAdditionalModelDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct?: AwsModel.ContainerImageConfigRepositoryAuthConfigPropertyOutputReference | AwsModel.ContainerImageConfigRepositoryAuthConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function awsModelContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct?: AwsModel.ContainerImageConfigRepositoryAuthConfigPropertyOutputReference | AwsModel.ContainerImageConfigRepositoryAuthConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerImageConfigPropertyToTerraform(struct?: AwsModel.ContainerImageConfigPropertyOutputReference | AwsModel.ContainerImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_access_mode: cdktn.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: awsModelContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct!.repositoryAuthConfig),
  }
}


export function awsModelContainerImageConfigPropertyToHclTerraform(struct?: AwsModel.ContainerImageConfigPropertyOutputReference | AwsModel.ContainerImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: awsModelContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerImageConfigRepositoryAuthConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsModel.ContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.ContainerModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsModelContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsModel.ContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.ContainerModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerModelDataSourceS3DataSourcePropertyToTerraform(struct?: AwsModel.ContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    model_access_config: awsModelContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
  }
}


export function awsModelContainerModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsModel.ContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: awsModelContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerModelDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerModelDataSourcePropertyToTerraform(struct?: AwsModel.ContainerModelDataSourcePropertyOutputReference | AwsModel.ContainerModelDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: cdktn.listMapper(awsModelContainerModelDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsModelContainerModelDataSourcePropertyToHclTerraform(struct?: AwsModel.ContainerModelDataSourcePropertyOutputReference | AwsModel.ContainerModelDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: cdktn.listMapperHcl(awsModelContainerModelDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerModelDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerMultiModelConfigPropertyToTerraform(struct?: AwsModel.ContainerMultiModelConfigPropertyOutputReference | AwsModel.ContainerMultiModelConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_cache_setting: cdktn.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function awsModelContainerMultiModelConfigPropertyToHclTerraform(struct?: AwsModel.ContainerMultiModelConfigPropertyOutputReference | AwsModel.ContainerMultiModelConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktn.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelContainerPropertyToTerraform(struct?: AwsModel.ContainerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
    inference_specification_name: cdktn.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktn.stringToTerraform(struct!.mode),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktn.stringToTerraform(struct!.modelPackageName),
    additional_model_data_source: cdktn.listMapper(awsModelContainerAdditionalModelDataSourcePropertyToTerraform, true)(struct!.additionalModelDataSource),
    image_config: awsModelContainerImageConfigPropertyToTerraform(struct!.imageConfig),
    model_data_source: awsModelContainerModelDataSourcePropertyToTerraform(struct!.modelDataSource),
    multi_model_config: awsModelContainerMultiModelConfigPropertyToTerraform(struct!.multiModelConfig),
  }
}


export function awsModelContainerPropertyToHclTerraform(struct?: AwsModel.ContainerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_hostname: {
      value: cdktn.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_specification_name: {
      value: cdktn.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_name: {
      value: cdktn.stringToHclTerraform(struct!.modelPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_model_data_source: {
      value: cdktn.listMapperHcl(awsModelContainerAdditionalModelDataSourcePropertyToHclTerraform, true)(struct!.additionalModelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAdditionalModelDataSourcePropertyList",
    },
    image_config: {
      value: awsModelContainerImageConfigPropertyToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerImageConfigPropertyList",
    },
    model_data_source: {
      value: awsModelContainerModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerModelDataSourcePropertyList",
    },
    multi_model_config: {
      value: awsModelContainerMultiModelConfigPropertyToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerMultiModelConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelInferenceExecutionConfigPropertyToTerraform(struct?: AwsModel.InferenceExecutionConfigPropertyOutputReference | AwsModel.InferenceExecutionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function awsModelInferenceExecutionConfigPropertyToHclTerraform(struct?: AwsModel.InferenceExecutionConfigPropertyOutputReference | AwsModel.InferenceExecutionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyToTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    model_access_config: awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
  }
}


export function awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerAdditionalModelDataSourcePropertyToTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    s3_data_source: cdktn.listMapper(awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsModelPrimaryContainerAdditionalModelDataSourcePropertyToHclTerraform(struct?: AwsModel.PrimaryContainerAdditionalModelDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(awsModelPrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct?: AwsModel.PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference | AwsModel.PrimaryContainerImageConfigRepositoryAuthConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function awsModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference | AwsModel.PrimaryContainerImageConfigRepositoryAuthConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerImageConfigPropertyToTerraform(struct?: AwsModel.PrimaryContainerImageConfigPropertyOutputReference | AwsModel.PrimaryContainerImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_access_mode: cdktn.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: awsModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct!.repositoryAuthConfig),
  }
}


export function awsModelPrimaryContainerImageConfigPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerImageConfigPropertyOutputReference | AwsModel.PrimaryContainerImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: awsModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerImageConfigRepositoryAuthConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference | AwsModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerModelDataSourceS3DataSourcePropertyToTerraform(struct?: AwsModel.PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    model_access_config: awsModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
  }
}


export function awsModelPrimaryContainerModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsModel.PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: awsModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerModelDataSourcePropertyToTerraform(struct?: AwsModel.PrimaryContainerModelDataSourcePropertyOutputReference | AwsModel.PrimaryContainerModelDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: cdktn.listMapper(awsModelPrimaryContainerModelDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsModelPrimaryContainerModelDataSourcePropertyToHclTerraform(struct?: AwsModel.PrimaryContainerModelDataSourcePropertyOutputReference | AwsModel.PrimaryContainerModelDataSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: cdktn.listMapperHcl(awsModelPrimaryContainerModelDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerModelDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerMultiModelConfigPropertyToTerraform(struct?: AwsModel.PrimaryContainerMultiModelConfigPropertyOutputReference | AwsModel.PrimaryContainerMultiModelConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_cache_setting: cdktn.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function awsModelPrimaryContainerMultiModelConfigPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerMultiModelConfigPropertyOutputReference | AwsModel.PrimaryContainerMultiModelConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktn.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelPrimaryContainerPropertyToTerraform(struct?: AwsModel.PrimaryContainerPropertyOutputReference | AwsModel.PrimaryContainerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
    inference_specification_name: cdktn.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktn.stringToTerraform(struct!.mode),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktn.stringToTerraform(struct!.modelPackageName),
    additional_model_data_source: cdktn.listMapper(awsModelPrimaryContainerAdditionalModelDataSourcePropertyToTerraform, true)(struct!.additionalModelDataSource),
    image_config: awsModelPrimaryContainerImageConfigPropertyToTerraform(struct!.imageConfig),
    model_data_source: awsModelPrimaryContainerModelDataSourcePropertyToTerraform(struct!.modelDataSource),
    multi_model_config: awsModelPrimaryContainerMultiModelConfigPropertyToTerraform(struct!.multiModelConfig),
  }
}


export function awsModelPrimaryContainerPropertyToHclTerraform(struct?: AwsModel.PrimaryContainerPropertyOutputReference | AwsModel.PrimaryContainerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_hostname: {
      value: cdktn.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_specification_name: {
      value: cdktn.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_name: {
      value: cdktn.stringToHclTerraform(struct!.modelPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_model_data_source: {
      value: cdktn.listMapperHcl(awsModelPrimaryContainerAdditionalModelDataSourcePropertyToHclTerraform, true)(struct!.additionalModelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerAdditionalModelDataSourcePropertyList",
    },
    image_config: {
      value: awsModelPrimaryContainerImageConfigPropertyToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerImageConfigPropertyList",
    },
    model_data_source: {
      value: awsModelPrimaryContainerModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerModelDataSourcePropertyList",
    },
    multi_model_config: {
      value: awsModelPrimaryContainerMultiModelConfigPropertyToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryContainerMultiModelConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsModelVpcConfigPropertyToTerraform(struct?: AwsModel.VpcConfigPropertyOutputReference | AwsModel.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsModelVpcConfigPropertyToHclTerraform(struct?: AwsModel.VpcConfigPropertyOutputReference | AwsModel.VpcConfigProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsModel {
export interface ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#accept_eula AwsModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface ContainerAdditionalModelDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#compression_type AwsModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_type AwsModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_uri AwsModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_access_config AwsModel#model_access_config}
  */
  readonly modelAccessConfig?: ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty;
}
export class ContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: ContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class ContainerAdditionalModelDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference {
    return new ContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAdditionalModelDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#channel_name AwsModel#channel_name}
  */
  readonly channelName: string;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_source AwsModel#s3_data_source}
  */
  readonly s3DataSource: ContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class ContainerAdditionalModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAdditionalModelDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAdditionalModelDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new ContainerAdditionalModelDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: ContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class ContainerAdditionalModelDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerAdditionalModelDataSourcePropertyOutputReference {
    return new ContainerAdditionalModelDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerImageConfigRepositoryAuthConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_credentials_provider_arn AwsModel#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn: string;
}
export class ContainerImageConfigRepositoryAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerImageConfigRepositoryAuthConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerImageConfigRepositoryAuthConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: false, required: true
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface ContainerImageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_access_mode AwsModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
  /**
  * repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_auth_config AwsModel#repository_auth_config}
  */
  readonly repositoryAuthConfig?: ContainerImageConfigRepositoryAuthConfigProperty;
}
export class ContainerImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new ContainerImageConfigRepositoryAuthConfigPropertyOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: ContainerImageConfigRepositoryAuthConfigProperty) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface ContainerModelDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#accept_eula AwsModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class ContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerModelDataSourceS3DataSourceModelAccessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerModelDataSourceS3DataSourceModelAccessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface ContainerModelDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#compression_type AwsModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_type AwsModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_uri AwsModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_access_config AwsModel#model_access_config}
  */
  readonly modelAccessConfig?: ContainerModelDataSourceS3DataSourceModelAccessConfigProperty;
}
export class ContainerModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new ContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: ContainerModelDataSourceS3DataSourceModelAccessConfigProperty) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class ContainerModelDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerModelDataSourceS3DataSourcePropertyOutputReference {
    return new ContainerModelDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerModelDataSourceProperty {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_source AwsModel#s3_data_source}
  */
  readonly s3DataSource: ContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class ContainerModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerModelDataSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerModelDataSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3DataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new ContainerModelDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: ContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface ContainerMultiModelConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_cache_setting AwsModel#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}
export class ContainerMultiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerMultiModelConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMultiModelConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelCacheSetting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface ContainerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#container_hostname AwsModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#environment AwsModel#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#image AwsModel#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#inference_specification_name AwsModel#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#mode AwsModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_data_url AwsModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_package_name AwsModel#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * additional_model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#additional_model_data_source AwsModel#additional_model_data_source}
  */
  readonly additionalModelDataSource?: ContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#image_config AwsModel#image_config}
  */
  readonly imageConfig?: ContainerImageConfigProperty;
  /**
  * model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_data_source AwsModel#model_data_source}
  */
  readonly modelDataSource?: ContainerModelDataSourceProperty;
  /**
  * multi_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#multi_model_config AwsModel#multi_model_config}
  */
  readonly multiModelConfig?: ContainerMultiModelConfigProperty;
}
export class ContainerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._additionalModelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalModelDataSource = this._additionalModelDataSource?.internalValue;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._additionalModelDataSource.internalValue = undefined;
      this._imageConfig.internalValue = undefined;
      this._modelDataSource.internalValue = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._additionalModelDataSource.internalValue = value.additionalModelDataSource;
      this._imageConfig.internalValue = value.imageConfig;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_package_name - computed: false, optional: true, required: false
  private _modelPackageName?: string; 
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // additional_model_data_source - computed: false, optional: true, required: false
  private _additionalModelDataSource = new ContainerAdditionalModelDataSourcePropertyList(this, "additional_model_data_source", false);
  public get additionalModelDataSource() {
    return this._additionalModelDataSource;
  }
  public putAdditionalModelDataSource(value: ContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable) {
    this._additionalModelDataSource.internalValue = value;
  }
  public resetAdditionalModelDataSource() {
    this._additionalModelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalModelDataSourceInput() {
    return this._additionalModelDataSource.internalValue;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new ContainerImageConfigPropertyOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: ContainerImageConfigProperty) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new ContainerModelDataSourcePropertyOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: ContainerModelDataSourceProperty) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new ContainerMultiModelConfigPropertyOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: ContainerMultiModelConfigProperty) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}

export class ContainerPropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerPropertyOutputReference {
    return new ContainerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InferenceExecutionConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#mode AwsModel#mode}
  */
  readonly mode: string;
}
export class InferenceExecutionConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InferenceExecutionConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceExecutionConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#accept_eula AwsModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#compression_type AwsModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_type AwsModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_uri AwsModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_access_config AwsModel#model_access_config}
  */
  readonly modelAccessConfig?: PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty;
}
export class PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: PrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigProperty) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference {
    return new PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrimaryContainerAdditionalModelDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#channel_name AwsModel#channel_name}
  */
  readonly channelName: string;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_source AwsModel#s3_data_source}
  */
  readonly s3DataSource: PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class PrimaryContainerAdditionalModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrimaryContainerAdditionalModelDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerAdditionalModelDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new PrimaryContainerAdditionalModelDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: PrimaryContainerAdditionalModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class PrimaryContainerAdditionalModelDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : PrimaryContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): PrimaryContainerAdditionalModelDataSourcePropertyOutputReference {
    return new PrimaryContainerAdditionalModelDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrimaryContainerImageConfigRepositoryAuthConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_credentials_provider_arn AwsModel#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn: string;
}
export class PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerImageConfigRepositoryAuthConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerImageConfigRepositoryAuthConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: false, required: true
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface PrimaryContainerImageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_access_mode AwsModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
  /**
  * repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#repository_auth_config AwsModel#repository_auth_config}
  */
  readonly repositoryAuthConfig?: PrimaryContainerImageConfigRepositoryAuthConfigProperty;
}
export class PrimaryContainerImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: PrimaryContainerImageConfigRepositoryAuthConfigProperty) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#accept_eula AwsModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface PrimaryContainerModelDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#compression_type AwsModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_type AwsModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_uri AwsModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_access_config AwsModel#model_access_config}
  */
  readonly modelAccessConfig?: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty;
}
export class PrimaryContainerModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class PrimaryContainerModelDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : PrimaryContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): PrimaryContainerModelDataSourceS3DataSourcePropertyOutputReference {
    return new PrimaryContainerModelDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrimaryContainerModelDataSourceProperty {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#s3_data_source AwsModel#s3_data_source}
  */
  readonly s3DataSource: PrimaryContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class PrimaryContainerModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerModelDataSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerModelDataSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3DataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new PrimaryContainerModelDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: PrimaryContainerModelDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface PrimaryContainerMultiModelConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_cache_setting AwsModel#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}
export class PrimaryContainerMultiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerMultiModelConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerMultiModelConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelCacheSetting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface PrimaryContainerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#container_hostname AwsModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#environment AwsModel#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#image AwsModel#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#inference_specification_name AwsModel#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#mode AwsModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_data_url AwsModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_package_name AwsModel#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * additional_model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#additional_model_data_source AwsModel#additional_model_data_source}
  */
  readonly additionalModelDataSource?: PrimaryContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#image_config AwsModel#image_config}
  */
  readonly imageConfig?: PrimaryContainerImageConfigProperty;
  /**
  * model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#model_data_source AwsModel#model_data_source}
  */
  readonly modelDataSource?: PrimaryContainerModelDataSourceProperty;
  /**
  * multi_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#multi_model_config AwsModel#multi_model_config}
  */
  readonly multiModelConfig?: PrimaryContainerMultiModelConfigProperty;
}
export class PrimaryContainerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryContainerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._additionalModelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalModelDataSource = this._additionalModelDataSource?.internalValue;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryContainerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._additionalModelDataSource.internalValue = undefined;
      this._imageConfig.internalValue = undefined;
      this._modelDataSource.internalValue = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._additionalModelDataSource.internalValue = value.additionalModelDataSource;
      this._imageConfig.internalValue = value.imageConfig;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_package_name - computed: false, optional: true, required: false
  private _modelPackageName?: string; 
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // additional_model_data_source - computed: false, optional: true, required: false
  private _additionalModelDataSource = new PrimaryContainerAdditionalModelDataSourcePropertyList(this, "additional_model_data_source", false);
  public get additionalModelDataSource() {
    return this._additionalModelDataSource;
  }
  public putAdditionalModelDataSource(value: PrimaryContainerAdditionalModelDataSourceProperty[] | cdktn.IResolvable) {
    this._additionalModelDataSource.internalValue = value;
  }
  public resetAdditionalModelDataSource() {
    this._additionalModelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalModelDataSourceInput() {
    return this._additionalModelDataSource.internalValue;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new PrimaryContainerImageConfigPropertyOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: PrimaryContainerImageConfigProperty) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new PrimaryContainerModelDataSourcePropertyOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: PrimaryContainerModelDataSourceProperty) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new PrimaryContainerMultiModelConfigPropertyOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: PrimaryContainerMultiModelConfigProperty) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#security_group_ids AwsModel#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_model#subnets AwsModel#subnets}
  */
  readonly subnets: string[];
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
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
}
}
