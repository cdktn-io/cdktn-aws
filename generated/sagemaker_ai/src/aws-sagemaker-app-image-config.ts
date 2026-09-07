// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAppImageConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#app_image_config_name AwsAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#id AwsAppImageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#region AwsAppImageConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#tags AwsAppImageConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#tags_all AwsAppImageConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * code_editor_app_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config AwsAppImageConfig#code_editor_app_image_config}
  */
  readonly codeEditorAppImageConfig?: AwsAppImageConfig.CodeEditorAppImageConfigProperty;
  /**
  * jupyter_lab_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config AwsAppImageConfig#jupyter_lab_image_config}
  */
  readonly jupyterLabImageConfig?: AwsAppImageConfig.JupyterLabImageConfigProperty;
  /**
  * kernel_gateway_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config AwsAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: AwsAppImageConfig.KernelGatewayImageConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}
*/
export class AwsAppImageConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_app_image_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAppImageConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppImageConfig to import
  * @param importFromId The id of the existing AwsAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppImageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_app_image_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_app_image_config',
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
    this._appImageConfigName = config.appImageConfigName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._codeEditorAppImageConfig.internalValue = config.codeEditorAppImageConfig;
    this._jupyterLabImageConfig.internalValue = config.jupyterLabImageConfig;
    this._kernelGatewayImageConfig.internalValue = config.kernelGatewayImageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // code_editor_app_image_config - computed: false, optional: true, required: false
  private _codeEditorAppImageConfig = new AwsAppImageConfig.CodeEditorAppImageConfigPropertyOutputReference(this, "code_editor_app_image_config");
  public get codeEditorAppImageConfig() {
    return this._codeEditorAppImageConfig;
  }
  public putCodeEditorAppImageConfig(value: AwsAppImageConfig.CodeEditorAppImageConfigProperty) {
    this._codeEditorAppImageConfig.internalValue = value;
  }
  public resetCodeEditorAppImageConfig() {
    this._codeEditorAppImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppImageConfigInput() {
    return this._codeEditorAppImageConfig.internalValue;
  }

  // jupyter_lab_image_config - computed: false, optional: true, required: false
  private _jupyterLabImageConfig = new AwsAppImageConfig.JupyterLabImageConfigPropertyOutputReference(this, "jupyter_lab_image_config");
  public get jupyterLabImageConfig() {
    return this._jupyterLabImageConfig;
  }
  public putJupyterLabImageConfig(value: AwsAppImageConfig.JupyterLabImageConfigProperty) {
    this._jupyterLabImageConfig.internalValue = value;
  }
  public resetJupyterLabImageConfig() {
    this._jupyterLabImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabImageConfigInput() {
    return this._jupyterLabImageConfig.internalValue;
  }

  // kernel_gateway_image_config - computed: false, optional: true, required: false
  private _kernelGatewayImageConfig = new AwsAppImageConfig.KernelGatewayImageConfigPropertyOutputReference(this, "kernel_gateway_image_config");
  public get kernelGatewayImageConfig() {
    return this._kernelGatewayImageConfig;
  }
  public putKernelGatewayImageConfig(value: AwsAppImageConfig.KernelGatewayImageConfigProperty) {
    this._kernelGatewayImageConfig.internalValue = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_image_config_name: cdktn.stringToTerraform(this._appImageConfigName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      code_editor_app_image_config: awsAppImageConfigCodeEditorAppImageConfigPropertyToTerraform(this._codeEditorAppImageConfig.internalValue),
      jupyter_lab_image_config: awsAppImageConfigJupyterLabImageConfigPropertyToTerraform(this._jupyterLabImageConfig.internalValue),
      kernel_gateway_image_config: awsAppImageConfigKernelGatewayImageConfigPropertyToTerraform(this._kernelGatewayImageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_image_config_name: {
        value: cdktn.stringToHclTerraform(this._appImageConfigName),
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
      code_editor_app_image_config: {
        value: awsAppImageConfigCodeEditorAppImageConfigPropertyToHclTerraform(this._codeEditorAppImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppImageConfig.CodeEditorAppImageConfigPropertyList",
      },
      jupyter_lab_image_config: {
        value: awsAppImageConfigJupyterLabImageConfigPropertyToHclTerraform(this._jupyterLabImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppImageConfig.JupyterLabImageConfigPropertyList",
      },
      kernel_gateway_image_config: {
        value: awsAppImageConfigKernelGatewayImageConfigPropertyToHclTerraform(this._kernelGatewayImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppImageConfig.KernelGatewayImageConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAppImageConfigCodeEditorAppImageConfigContainerConfigPropertyToTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigContainerConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigContainerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.containerEnvironmentVariables),
  }
}


export function awsAppImageConfigCodeEditorAppImageConfigContainerConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigContainerConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigContainerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.containerEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppImageConfigCodeEditorAppImageConfigFileSystemConfigPropertyToTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_gid: cdktn.numberToTerraform(struct!.defaultGid),
    default_uid: cdktn.numberToTerraform(struct!.defaultUid),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsAppImageConfigCodeEditorAppImageConfigFileSystemConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_gid: {
      value: cdktn.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktn.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function awsAppImageConfigCodeEditorAppImageConfigPropertyToTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_config: awsAppImageConfigCodeEditorAppImageConfigContainerConfigPropertyToTerraform(struct!.containerConfig),
    file_system_config: awsAppImageConfigCodeEditorAppImageConfigFileSystemConfigPropertyToTerraform(struct!.fileSystemConfig),
  }
}


export function awsAppImageConfigCodeEditorAppImageConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.CodeEditorAppImageConfigPropertyOutputReference | AwsAppImageConfig.CodeEditorAppImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_config: {
      value: awsAppImageConfigCodeEditorAppImageConfigContainerConfigPropertyToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodeEditorAppImageConfigContainerConfigPropertyList",
    },
    file_system_config: {
      value: awsAppImageConfigCodeEditorAppImageConfigFileSystemConfigPropertyToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodeEditorAppImageConfigFileSystemConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppImageConfigJupyterLabImageConfigContainerConfigPropertyToTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigContainerConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigContainerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.containerEnvironmentVariables),
  }
}


export function awsAppImageConfigJupyterLabImageConfigContainerConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigContainerConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigContainerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.containerEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppImageConfigJupyterLabImageConfigFileSystemConfigPropertyToTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_gid: cdktn.numberToTerraform(struct!.defaultGid),
    default_uid: cdktn.numberToTerraform(struct!.defaultUid),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsAppImageConfigJupyterLabImageConfigFileSystemConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_gid: {
      value: cdktn.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktn.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function awsAppImageConfigJupyterLabImageConfigPropertyToTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_config: awsAppImageConfigJupyterLabImageConfigContainerConfigPropertyToTerraform(struct!.containerConfig),
    file_system_config: awsAppImageConfigJupyterLabImageConfigFileSystemConfigPropertyToTerraform(struct!.fileSystemConfig),
  }
}


export function awsAppImageConfigJupyterLabImageConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.JupyterLabImageConfigPropertyOutputReference | AwsAppImageConfig.JupyterLabImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_config: {
      value: awsAppImageConfigJupyterLabImageConfigContainerConfigPropertyToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JupyterLabImageConfigContainerConfigPropertyList",
    },
    file_system_config: {
      value: awsAppImageConfigJupyterLabImageConfigFileSystemConfigPropertyToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JupyterLabImageConfigFileSystemConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppImageConfigKernelGatewayImageConfigFileSystemConfigPropertyToTerraform(struct?: AwsAppImageConfig.KernelGatewayImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.KernelGatewayImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_gid: cdktn.numberToTerraform(struct!.defaultGid),
    default_uid: cdktn.numberToTerraform(struct!.defaultUid),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function awsAppImageConfigKernelGatewayImageConfigFileSystemConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.KernelGatewayImageConfigFileSystemConfigPropertyOutputReference | AwsAppImageConfig.KernelGatewayImageConfigFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_gid: {
      value: cdktn.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktn.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function awsAppImageConfigKernelSpecPropertyToTerraform(struct?: AwsAppImageConfig.KernelSpecProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsAppImageConfigKernelSpecPropertyToHclTerraform(struct?: AwsAppImageConfig.KernelSpecProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
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


export function awsAppImageConfigKernelGatewayImageConfigPropertyToTerraform(struct?: AwsAppImageConfig.KernelGatewayImageConfigPropertyOutputReference | AwsAppImageConfig.KernelGatewayImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_config: awsAppImageConfigKernelGatewayImageConfigFileSystemConfigPropertyToTerraform(struct!.fileSystemConfig),
    kernel_spec: cdktn.listMapper(awsAppImageConfigKernelSpecPropertyToTerraform, true)(struct!.kernelSpec),
  }
}


export function awsAppImageConfigKernelGatewayImageConfigPropertyToHclTerraform(struct?: AwsAppImageConfig.KernelGatewayImageConfigPropertyOutputReference | AwsAppImageConfig.KernelGatewayImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_config: {
      value: awsAppImageConfigKernelGatewayImageConfigFileSystemConfigPropertyToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KernelGatewayImageConfigFileSystemConfigPropertyList",
    },
    kernel_spec: {
      value: cdktn.listMapperHcl(awsAppImageConfigKernelSpecPropertyToHclTerraform, true)(struct!.kernelSpec),
      isBlock: true,
      type: "list",
      storageClassType: "KernelSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAppImageConfig {
export interface CodeEditorAppImageConfigContainerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_arguments AwsAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_entrypoint AwsAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_environment_variables AwsAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: { [key: string]: string };
}
export class CodeEditorAppImageConfigContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeEditorAppImageConfigContainerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeEditorAppImageConfigContainerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: false, optional: true, required: false
  private _containerEnvironmentVariables?: { [key: string]: string }; 
  public get containerEnvironmentVariables() {
    return this.getStringMapAttribute('container_environment_variables');
  }
  public set containerEnvironmentVariables(value: { [key: string]: string }) {
    this._containerEnvironmentVariables = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables;
  }
}
export interface CodeEditorAppImageConfigFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_gid AwsAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_uid AwsAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#mount_path AwsAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}
export class CodeEditorAppImageConfigFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeEditorAppImageConfigFileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeEditorAppImageConfigFileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface CodeEditorAppImageConfigProperty {
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_config AwsAppImageConfig#container_config}
  */
  readonly containerConfig?: CodeEditorAppImageConfigContainerConfigProperty;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#file_system_config AwsAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: CodeEditorAppImageConfigFileSystemConfigProperty;
}
export class CodeEditorAppImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeEditorAppImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeEditorAppImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConfig.internalValue = undefined;
      this._fileSystemConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConfig.internalValue = value.containerConfig;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
    }
  }

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new CodeEditorAppImageConfigContainerConfigPropertyOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: CodeEditorAppImageConfigContainerConfigProperty) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new CodeEditorAppImageConfigFileSystemConfigPropertyOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: CodeEditorAppImageConfigFileSystemConfigProperty) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }
}
export interface JupyterLabImageConfigContainerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_arguments AwsAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_entrypoint AwsAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_environment_variables AwsAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: { [key: string]: string };
}
export class JupyterLabImageConfigContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JupyterLabImageConfigContainerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JupyterLabImageConfigContainerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: false, optional: true, required: false
  private _containerEnvironmentVariables?: { [key: string]: string }; 
  public get containerEnvironmentVariables() {
    return this.getStringMapAttribute('container_environment_variables');
  }
  public set containerEnvironmentVariables(value: { [key: string]: string }) {
    this._containerEnvironmentVariables = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables;
  }
}
export interface JupyterLabImageConfigFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_gid AwsAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_uid AwsAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#mount_path AwsAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}
export class JupyterLabImageConfigFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JupyterLabImageConfigFileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JupyterLabImageConfigFileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface JupyterLabImageConfigProperty {
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#container_config AwsAppImageConfig#container_config}
  */
  readonly containerConfig?: JupyterLabImageConfigContainerConfigProperty;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#file_system_config AwsAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: JupyterLabImageConfigFileSystemConfigProperty;
}
export class JupyterLabImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JupyterLabImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JupyterLabImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConfig.internalValue = undefined;
      this._fileSystemConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConfig.internalValue = value.containerConfig;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
    }
  }

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new JupyterLabImageConfigContainerConfigPropertyOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: JupyterLabImageConfigContainerConfigProperty) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new JupyterLabImageConfigFileSystemConfigPropertyOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: JupyterLabImageConfigFileSystemConfigProperty) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }
}
export interface KernelGatewayImageConfigFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_gid AwsAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#default_uid AwsAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#mount_path AwsAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}
export class KernelGatewayImageConfigFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KernelGatewayImageConfigFileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KernelGatewayImageConfigFileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface KernelSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#display_name AwsAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#name AwsAppImageConfig#name}
  */
  readonly name: string;
}
export class KernelSpecPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KernelSpecProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KernelSpecProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

export class KernelSpecPropertyList extends cdktn.ComplexList {
  public internalValue? : KernelSpecProperty[] | cdktn.IResolvable

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
  public get(index: number): KernelSpecPropertyOutputReference {
    return new KernelSpecPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KernelGatewayImageConfigProperty {
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#file_system_config AwsAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: KernelGatewayImageConfigFileSystemConfigProperty;
  /**
  * kernel_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_app_image_config#kernel_spec AwsAppImageConfig#kernel_spec}
  */
  readonly kernelSpec: KernelSpecProperty[] | cdktn.IResolvable;
}
export class KernelGatewayImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KernelGatewayImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    if (this._kernelSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelSpec = this._kernelSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KernelGatewayImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemConfig.internalValue = undefined;
      this._kernelSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
      this._kernelSpec.internalValue = value.kernelSpec;
    }
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new KernelGatewayImageConfigFileSystemConfigPropertyOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: KernelGatewayImageConfigFileSystemConfigProperty) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // kernel_spec - computed: false, optional: false, required: true
  private _kernelSpec = new KernelSpecPropertyList(this, "kernel_spec", false);
  public get kernelSpec() {
    return this._kernelSpec;
  }
  public putKernelSpec(value: KernelSpecProperty[] | cdktn.IResolvable) {
    this._kernelSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSpecInput() {
    return this._kernelSpec.internalValue;
  }
}
}
