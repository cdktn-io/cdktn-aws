// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsImageBuilderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#appstream_agent_version AwsImageBuilder#appstream_agent_version}
  */
  readonly appstreamAgentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#description AwsImageBuilder#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#display_name AwsImageBuilder#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#enable_default_internet_access AwsImageBuilder#enable_default_internet_access}
  */
  readonly enableDefaultInternetAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#iam_role_arn AwsImageBuilder#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#id AwsImageBuilder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#image_arn AwsImageBuilder#image_arn}
  */
  readonly imageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#image_name AwsImageBuilder#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#instance_type AwsImageBuilder#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#name AwsImageBuilder#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#region AwsImageBuilder#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#tags AwsImageBuilder#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#tags_all AwsImageBuilder#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#access_endpoint AwsImageBuilder#access_endpoint}
  */
  readonly accessEndpoint?: AwsImageBuilder.AccessEndpointProperty[] | cdktn.IResolvable;
  /**
  * domain_join_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#domain_join_info AwsImageBuilder#domain_join_info}
  */
  readonly domainJoinInfo?: AwsImageBuilder.DomainJoinInfoProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#vpc_config AwsImageBuilder#vpc_config}
  */
  readonly vpcConfig?: AwsImageBuilder.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder aws_appstream_image_builder}
*/
export class AwsImageBuilder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appstream_image_builder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsImageBuilder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsImageBuilder to import
  * @param importFromId The id of the existing AwsImageBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsImageBuilder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appstream_image_builder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder aws_appstream_image_builder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsImageBuilderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsImageBuilderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_image_builder',
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
    this._appstreamAgentVersion = config.appstreamAgentVersion;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
    this._iamRoleArn = config.iamRoleArn;
    this._id = config.id;
    this._imageArn = config.imageArn;
    this._imageName = config.imageName;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessEndpoint.internalValue = config.accessEndpoint;
    this._domainJoinInfo.internalValue = config.domainJoinInfo;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appstream_agent_version - computed: true, optional: true, required: false
  private _appstreamAgentVersion?: string; 
  public get appstreamAgentVersion() {
    return this.getStringAttribute('appstream_agent_version');
  }
  public set appstreamAgentVersion(value: string) {
    this._appstreamAgentVersion = value;
  }
  public resetAppstreamAgentVersion() {
    this._appstreamAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstreamAgentVersionInput() {
    return this._appstreamAgentVersion;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // display_name - computed: true, optional: true, required: false
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

  // enable_default_internet_access - computed: true, optional: true, required: false
  private _enableDefaultInternetAccess?: boolean | cdktn.IResolvable; 
  public get enableDefaultInternetAccess() {
    return this.getBooleanAttribute('enable_default_internet_access');
  }
  public set enableDefaultInternetAccess(value: boolean | cdktn.IResolvable) {
    this._enableDefaultInternetAccess = value;
  }
  public resetEnableDefaultInternetAccess() {
    this._enableDefaultInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultInternetAccessInput() {
    return this._enableDefaultInternetAccess;
  }

  // iam_role_arn - computed: true, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // image_arn - computed: true, optional: true, required: false
  private _imageArn?: string; 
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }
  public set imageArn(value: string) {
    this._imageArn = value;
  }
  public resetImageArn() {
    this._imageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageArnInput() {
    return this._imageArn;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // access_endpoint - computed: false, optional: true, required: false
  private _accessEndpoint = new AwsImageBuilder.AccessEndpointPropertyList(this, "access_endpoint", true);
  public get accessEndpoint() {
    return this._accessEndpoint;
  }
  public putAccessEndpoint(value: AwsImageBuilder.AccessEndpointProperty[] | cdktn.IResolvable) {
    this._accessEndpoint.internalValue = value;
  }
  public resetAccessEndpoint() {
    this._accessEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointInput() {
    return this._accessEndpoint.internalValue;
  }

  // domain_join_info - computed: false, optional: true, required: false
  private _domainJoinInfo = new AwsImageBuilder.DomainJoinInfoPropertyOutputReference(this, "domain_join_info");
  public get domainJoinInfo() {
    return this._domainJoinInfo;
  }
  public putDomainJoinInfo(value: AwsImageBuilder.DomainJoinInfoProperty) {
    this._domainJoinInfo.internalValue = value;
  }
  public resetDomainJoinInfo() {
    this._domainJoinInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainJoinInfoInput() {
    return this._domainJoinInfo.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsImageBuilder.VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsImageBuilder.VpcConfigProperty) {
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
      appstream_agent_version: cdktn.stringToTerraform(this._appstreamAgentVersion),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_default_internet_access: cdktn.booleanToTerraform(this._enableDefaultInternetAccess),
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      id: cdktn.stringToTerraform(this._id),
      image_arn: cdktn.stringToTerraform(this._imageArn),
      image_name: cdktn.stringToTerraform(this._imageName),
      instance_type: cdktn.stringToTerraform(this._instanceType),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      access_endpoint: cdktn.listMapper(awsImageBuilderAccessEndpointPropertyToTerraform, true)(this._accessEndpoint.internalValue),
      domain_join_info: awsImageBuilderDomainJoinInfoPropertyToTerraform(this._domainJoinInfo.internalValue),
      vpc_config: awsImageBuilderVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appstream_agent_version: {
        value: cdktn.stringToHclTerraform(this._appstreamAgentVersion),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_internet_access: {
        value: cdktn.booleanToHclTerraform(this._enableDefaultInternetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
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
      image_arn: {
        value: cdktn.stringToHclTerraform(this._imageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktn.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktn.stringToHclTerraform(this._instanceType),
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
      access_endpoint: {
        value: cdktn.listMapperHcl(awsImageBuilderAccessEndpointPropertyToHclTerraform, true)(this._accessEndpoint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsImageBuilder.AccessEndpointPropertyList",
      },
      domain_join_info: {
        value: awsImageBuilderDomainJoinInfoPropertyToHclTerraform(this._domainJoinInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImageBuilder.DomainJoinInfoPropertyList",
      },
      vpc_config: {
        value: awsImageBuilderVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImageBuilder.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsImageBuilderAccessEndpointPropertyToTerraform(struct?: AwsImageBuilder.AccessEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
    vpce_id: cdktn.stringToTerraform(struct!.vpceId),
  }
}


export function awsImageBuilderAccessEndpointPropertyToHclTerraform(struct?: AwsImageBuilder.AccessEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpce_id: {
      value: cdktn.stringToHclTerraform(struct!.vpceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImageBuilderDomainJoinInfoPropertyToTerraform(struct?: AwsImageBuilder.DomainJoinInfoPropertyOutputReference | AwsImageBuilder.DomainJoinInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_name: cdktn.stringToTerraform(struct!.directoryName),
    organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}


export function awsImageBuilderDomainJoinInfoPropertyToHclTerraform(struct?: AwsImageBuilder.DomainJoinInfoPropertyOutputReference | AwsImageBuilder.DomainJoinInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_name: {
      value: cdktn.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_distinguished_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImageBuilderVpcConfigPropertyToTerraform(struct?: AwsImageBuilder.VpcConfigPropertyOutputReference | AwsImageBuilder.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsImageBuilderVpcConfigPropertyToHclTerraform(struct?: AwsImageBuilder.VpcConfigPropertyOutputReference | AwsImageBuilder.VpcConfigProperty): any {
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


export namespace AwsImageBuilder {
export interface AccessEndpointProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#endpoint_type AwsImageBuilder#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#vpce_id AwsImageBuilder#vpce_id}
  */
  readonly vpceId?: string;
}
export class AccessEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessEndpointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._vpceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceId = this._vpceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessEndpointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointType = undefined;
      this._vpceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointType = value.endpointType;
      this._vpceId = value.vpceId;
    }
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // vpce_id - computed: true, optional: true, required: false
  private _vpceId?: string; 
  public get vpceId() {
    return this.getStringAttribute('vpce_id');
  }
  public set vpceId(value: string) {
    this._vpceId = value;
  }
  public resetVpceId() {
    this._vpceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdInput() {
    return this._vpceId;
  }
}

export class AccessEndpointPropertyList extends cdktn.ComplexList {
  public internalValue? : AccessEndpointProperty[] | cdktn.IResolvable

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
  public get(index: number): AccessEndpointPropertyOutputReference {
    return new AccessEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainJoinInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#directory_name AwsImageBuilder#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AwsImageBuilder#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
}
export class DomainJoinInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainJoinInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._organizationalUnitDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainJoinInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directoryName = undefined;
      this._organizationalUnitDistinguishedName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directoryName = value.directoryName;
      this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
    }
  }

  // directory_name - computed: false, optional: true, required: false
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  public resetDirectoryName() {
    this._directoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // organizational_unit_distinguished_name - computed: false, optional: true, required: false
  private _organizationalUnitDistinguishedName?: string; 
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
  public set organizationalUnitDistinguishedName(value: string) {
    this._organizationalUnitDistinguishedName = value;
  }
  public resetOrganizationalUnitDistinguishedName() {
    this._organizationalUnitDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNameInput() {
    return this._organizationalUnitDistinguishedName;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#security_group_ids AwsImageBuilder#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_image_builder#subnet_ids AwsImageBuilder#subnet_ids}
  */
  readonly subnetIds?: string[];
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
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | undefined) {
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

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
}
