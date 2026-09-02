// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities TfImage#additional_os_capabilities}
  */
  readonly additionalOsCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn TfImage#base_image_arn}
  */
  readonly baseImageArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version TfImage#base_image_version}
  */
  readonly baseImageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn TfImage#build_role_arn}
  */
  readonly buildRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description TfImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors TfImage#egress_network_connectors}
  */
  readonly egressNetworkConnectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables TfImage#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name TfImage#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#region TfImage#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags TfImage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * code_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#code_artifact TfImage#code_artifact}
  */
  readonly codeArtifact?: TfImage.CodeArtifactProperty[] | cdktn.IResolvable;
  /**
  * cpu_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#cpu_configuration TfImage#cpu_configuration}
  */
  readonly cpuConfiguration?: TfImage.CpuConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#timeouts TfImage#timeouts}
  */
  readonly timeouts?: TfImage.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image}
*/
export class TfImage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdamicrovms_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfImage to import
  * @param importFromId The id of the existing TfImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdamicrovms_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfImageConfig
  */
  public constructor(scope: Construct, id: string, config: TfImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdamicrovms_image',
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
    this._additionalOsCapabilities = config.additionalOsCapabilities;
    this._baseImageArn = config.baseImageArn;
    this._baseImageVersion = config.baseImageVersion;
    this._buildRoleArn = config.buildRoleArn;
    this._description = config.description;
    this._egressNetworkConnectors = config.egressNetworkConnectors;
    this._environmentVariables = config.environmentVariables;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._codeArtifact.internalValue = config.codeArtifact;
    this._cpuConfiguration.internalValue = config.cpuConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_os_capabilities - computed: false, optional: true, required: false
  private _additionalOsCapabilities?: string[]; 
  public get additionalOsCapabilities() {
    return this.getListAttribute('additional_os_capabilities');
  }
  public set additionalOsCapabilities(value: string[]) {
    this._additionalOsCapabilities = value;
  }
  public resetAdditionalOsCapabilities() {
    this._additionalOsCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOsCapabilitiesInput() {
    return this._additionalOsCapabilities;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_image_arn - computed: false, optional: false, required: true
  private _baseImageArn?: string; 
  public get baseImageArn() {
    return this.getStringAttribute('base_image_arn');
  }
  public set baseImageArn(value: string) {
    this._baseImageArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageArnInput() {
    return this._baseImageArn;
  }

  // base_image_version - computed: true, optional: true, required: false
  private _baseImageVersion?: string; 
  public get baseImageVersion() {
    return this.getStringAttribute('base_image_version');
  }
  public set baseImageVersion(value: string) {
    this._baseImageVersion = value;
  }
  public resetBaseImageVersion() {
    this._baseImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageVersionInput() {
    return this._baseImageVersion;
  }

  // build_role_arn - computed: false, optional: false, required: true
  private _buildRoleArn?: string; 
  public get buildRoleArn() {
    return this.getStringAttribute('build_role_arn');
  }
  public set buildRoleArn(value: string) {
    this._buildRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRoleArnInput() {
    return this._buildRoleArn;
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

  // egress_network_connectors - computed: true, optional: true, required: false
  private _egressNetworkConnectors?: string[]; 
  public get egressNetworkConnectors() {
    return this.getListAttribute('egress_network_connectors');
  }
  public set egressNetworkConnectors(value: string[]) {
    this._egressNetworkConnectors = value;
  }
  public resetEgressNetworkConnectors() {
    this._egressNetworkConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkConnectorsInput() {
    return this._egressNetworkConnectors;
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

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // latest_active_image_version - computed: true, optional: false, required: false
  public get latestActiveImageVersion() {
    return this.getStringAttribute('latest_active_image_version');
  }

  // latest_failed_image_version - computed: true, optional: false, required: false
  public get latestFailedImageVersion() {
    return this.getStringAttribute('latest_failed_image_version');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // code_artifact - computed: false, optional: true, required: false
  private _codeArtifact = new TfImage.CodeArtifactPropertyList(this, "code_artifact", false);
  public get codeArtifact() {
    return this._codeArtifact;
  }
  public putCodeArtifact(value: TfImage.CodeArtifactProperty[] | cdktn.IResolvable) {
    this._codeArtifact.internalValue = value;
  }
  public resetCodeArtifact() {
    this._codeArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeArtifactInput() {
    return this._codeArtifact.internalValue;
  }

  // cpu_configuration - computed: false, optional: true, required: false
  private _cpuConfiguration = new TfImage.CpuConfigurationPropertyList(this, "cpu_configuration", false);
  public get cpuConfiguration() {
    return this._cpuConfiguration;
  }
  public putCpuConfiguration(value: TfImage.CpuConfigurationProperty[] | cdktn.IResolvable) {
    this._cpuConfiguration.internalValue = value;
  }
  public resetCpuConfiguration() {
    this._cpuConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuConfigurationInput() {
    return this._cpuConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfImage.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfImage.TimeoutsProperty) {
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
      additional_os_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalOsCapabilities),
      base_image_arn: cdktn.stringToTerraform(this._baseImageArn),
      base_image_version: cdktn.stringToTerraform(this._baseImageVersion),
      build_role_arn: cdktn.stringToTerraform(this._buildRoleArn),
      description: cdktn.stringToTerraform(this._description),
      egress_network_connectors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._egressNetworkConnectors),
      environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      code_artifact: cdktn.listMapper(tfImageCodeArtifactPropertyToTerraform, true)(this._codeArtifact.internalValue),
      cpu_configuration: cdktn.listMapper(tfImageCpuConfigurationPropertyToTerraform, true)(this._cpuConfiguration.internalValue),
      timeouts: tfImageTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_os_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalOsCapabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      base_image_arn: {
        value: cdktn.stringToHclTerraform(this._baseImageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_image_version: {
        value: cdktn.stringToHclTerraform(this._baseImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_role_arn: {
        value: cdktn.stringToHclTerraform(this._buildRoleArn),
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
      egress_network_connectors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._egressNetworkConnectors),
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
      code_artifact: {
        value: cdktn.listMapperHcl(tfImageCodeArtifactPropertyToHclTerraform, true)(this._codeArtifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfImage.CodeArtifactPropertyList",
      },
      cpu_configuration: {
        value: cdktn.listMapperHcl(tfImageCpuConfigurationPropertyToHclTerraform, true)(this._cpuConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfImage.CpuConfigurationPropertyList",
      },
      timeouts: {
        value: tfImageTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfImage.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfImageCodeArtifactPropertyToTerraform(struct?: TfImage.CodeArtifactProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfImageCodeArtifactPropertyToHclTerraform(struct?: TfImage.CodeArtifactProperty | cdktn.IResolvable): any {
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


export function tfImageCpuConfigurationPropertyToTerraform(struct?: TfImage.CpuConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture: cdktn.stringToTerraform(struct!.architecture),
  }
}


export function tfImageCpuConfigurationPropertyToHclTerraform(struct?: TfImage.CpuConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture: {
      value: cdktn.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfImageTimeoutsPropertyToTerraform(struct?: TfImage.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfImageTimeoutsPropertyToHclTerraform(struct?: TfImage.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfImage {
export interface CodeArtifactProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#uri TfImage#uri}
  */
  readonly uri: string;
}
export class CodeArtifactPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeArtifactProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CodeArtifactProperty | cdktn.IResolvable | undefined) {
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

export class CodeArtifactPropertyList extends cdktn.ComplexList {
  public internalValue? : CodeArtifactProperty[] | cdktn.IResolvable

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
  public get(index: number): CodeArtifactPropertyOutputReference {
    return new CodeArtifactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CpuConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#architecture TfImage#architecture}
  */
  readonly architecture: string;
}
export class CpuConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CpuConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpuConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
    }
  }

  // architecture - computed: false, optional: false, required: true
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }
}

export class CpuConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CpuConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CpuConfigurationPropertyOutputReference {
    return new CpuConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#create TfImage#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#delete TfImage#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#update TfImage#update}
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
