// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsTransferWebAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#access_endpoint AwsTransferWebApp#access_endpoint}
  */
  readonly accessEndpoint?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#region AwsTransferWebApp#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#tags AwsTransferWebApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#web_app_endpoint_policy AwsTransferWebApp#web_app_endpoint_policy}
  */
  readonly webAppEndpointPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#web_app_units AwsTransferWebApp#web_app_units}
  */
  readonly webAppUnits?: AwsTransferWebApp.WebAppUnitsProperty[] | cdktn.IResolvable;
  /**
  * endpoint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#endpoint_details AwsTransferWebApp#endpoint_details}
  */
  readonly endpointDetails?: AwsTransferWebApp.EndpointDetailsProperty[] | cdktn.IResolvable;
  /**
  * identity_provider_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#identity_provider_details AwsTransferWebApp#identity_provider_details}
  */
  readonly identityProviderDetails?: AwsTransferWebApp.IdentityProviderDetailsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app aws_transfer_web_app}
*/
export class AwsTransferWebApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_web_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsTransferWebApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTransferWebApp to import
  * @param importFromId The id of the existing AwsTransferWebApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTransferWebApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_web_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app aws_transfer_web_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTransferWebAppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsTransferWebAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_web_app',
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
    this._accessEndpoint = config.accessEndpoint;
    this._region = config.region;
    this._tags = config.tags;
    this._webAppEndpointPolicy = config.webAppEndpointPolicy;
    this._webAppUnits.internalValue = config.webAppUnits;
    this._endpointDetails.internalValue = config.endpointDetails;
    this._identityProviderDetails.internalValue = config.identityProviderDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: true, required: false
  private _accessEndpoint?: string; 
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }
  public set accessEndpoint(value: string) {
    this._accessEndpoint = value;
  }
  public resetAccessEndpoint() {
    this._accessEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointInput() {
    return this._accessEndpoint;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // web_app_endpoint_policy - computed: true, optional: true, required: false
  private _webAppEndpointPolicy?: string; 
  public get webAppEndpointPolicy() {
    return this.getStringAttribute('web_app_endpoint_policy');
  }
  public set webAppEndpointPolicy(value: string) {
    this._webAppEndpointPolicy = value;
  }
  public resetWebAppEndpointPolicy() {
    this._webAppEndpointPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppEndpointPolicyInput() {
    return this._webAppEndpointPolicy;
  }

  // web_app_id - computed: true, optional: false, required: false
  public get webAppId() {
    return this.getStringAttribute('web_app_id');
  }

  // web_app_units - computed: true, optional: true, required: false
  private _webAppUnits = new AwsTransferWebApp.WebAppUnitsPropertyList(this, "web_app_units", false);
  public get webAppUnits() {
    return this._webAppUnits;
  }
  public putWebAppUnits(value: AwsTransferWebApp.WebAppUnitsProperty[] | cdktn.IResolvable) {
    this._webAppUnits.internalValue = value;
  }
  public resetWebAppUnits() {
    this._webAppUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppUnitsInput() {
    return this._webAppUnits.internalValue;
  }

  // endpoint_details - computed: false, optional: true, required: false
  private _endpointDetails = new AwsTransferWebApp.EndpointDetailsPropertyList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
  }
  public putEndpointDetails(value: AwsTransferWebApp.EndpointDetailsProperty[] | cdktn.IResolvable) {
    this._endpointDetails.internalValue = value;
  }
  public resetEndpointDetails() {
    this._endpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails.internalValue;
  }

  // identity_provider_details - computed: false, optional: true, required: false
  private _identityProviderDetails = new AwsTransferWebApp.IdentityProviderDetailsPropertyList(this, "identity_provider_details", false);
  public get identityProviderDetails() {
    return this._identityProviderDetails;
  }
  public putIdentityProviderDetails(value: AwsTransferWebApp.IdentityProviderDetailsProperty[] | cdktn.IResolvable) {
    this._identityProviderDetails.internalValue = value;
  }
  public resetIdentityProviderDetails() {
    this._identityProviderDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderDetailsInput() {
    return this._identityProviderDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_endpoint: cdktn.stringToTerraform(this._accessEndpoint),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      web_app_endpoint_policy: cdktn.stringToTerraform(this._webAppEndpointPolicy),
      web_app_units: cdktn.listMapper(awsTransferWebAppWebAppUnitsPropertyToTerraform, false)(this._webAppUnits.internalValue),
      endpoint_details: cdktn.listMapper(awsTransferWebAppEndpointDetailsPropertyToTerraform, true)(this._endpointDetails.internalValue),
      identity_provider_details: cdktn.listMapper(awsTransferWebAppIdentityProviderDetailsPropertyToTerraform, true)(this._identityProviderDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_endpoint: {
        value: cdktn.stringToHclTerraform(this._accessEndpoint),
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
      web_app_endpoint_policy: {
        value: cdktn.stringToHclTerraform(this._webAppEndpointPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_app_units: {
        value: cdktn.listMapperHcl(awsTransferWebAppWebAppUnitsPropertyToHclTerraform, false)(this._webAppUnits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTransferWebApp.WebAppUnitsPropertyList",
      },
      endpoint_details: {
        value: cdktn.listMapperHcl(awsTransferWebAppEndpointDetailsPropertyToHclTerraform, true)(this._endpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTransferWebApp.EndpointDetailsPropertyList",
      },
      identity_provider_details: {
        value: cdktn.listMapperHcl(awsTransferWebAppIdentityProviderDetailsPropertyToHclTerraform, true)(this._identityProviderDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTransferWebApp.IdentityProviderDetailsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsTransferWebAppWebAppUnitsPropertyToTerraform(struct?: AwsTransferWebApp.WebAppUnitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provisioned: cdktn.numberToTerraform(struct!.provisioned),
  }
}


export function awsTransferWebAppWebAppUnitsPropertyToHclTerraform(struct?: AwsTransferWebApp.WebAppUnitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provisioned: {
      value: cdktn.numberToHclTerraform(struct!.provisioned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTransferWebAppVpcPropertyToTerraform(struct?: AwsTransferWebApp.VpcProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function awsTransferWebAppVpcPropertyToHclTerraform(struct?: AwsTransferWebApp.VpcProperty | cdktn.IResolvable): any {
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
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTransferWebAppEndpointDetailsPropertyToTerraform(struct?: AwsTransferWebApp.EndpointDetailsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc: cdktn.listMapper(awsTransferWebAppVpcPropertyToTerraform, true)(struct!.vpc),
  }
}


export function awsTransferWebAppEndpointDetailsPropertyToHclTerraform(struct?: AwsTransferWebApp.EndpointDetailsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc: {
      value: cdktn.listMapperHcl(awsTransferWebAppVpcPropertyToHclTerraform, true)(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "VpcPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTransferWebAppIdentityCenterConfigPropertyToTerraform(struct?: AwsTransferWebApp.IdentityCenterConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function awsTransferWebAppIdentityCenterConfigPropertyToHclTerraform(struct?: AwsTransferWebApp.IdentityCenterConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTransferWebAppIdentityProviderDetailsPropertyToTerraform(struct?: AwsTransferWebApp.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_config: cdktn.listMapper(awsTransferWebAppIdentityCenterConfigPropertyToTerraform, true)(struct!.identityCenterConfig),
  }
}


export function awsTransferWebAppIdentityProviderDetailsPropertyToHclTerraform(struct?: AwsTransferWebApp.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_config: {
      value: cdktn.listMapperHcl(awsTransferWebAppIdentityCenterConfigPropertyToHclTerraform, true)(struct!.identityCenterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityCenterConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsTransferWebApp {
export interface WebAppUnitsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#provisioned AwsTransferWebApp#provisioned}
  */
  readonly provisioned?: number;
}
export class WebAppUnitsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebAppUnitsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioned = this._provisioned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppUnitsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisioned = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisioned = value.provisioned;
    }
  }

  // provisioned - computed: true, optional: true, required: false
  private _provisioned?: number; 
  public get provisioned() {
    return this.getNumberAttribute('provisioned');
  }
  public set provisioned(value: number) {
    this._provisioned = value;
  }
  public resetProvisioned() {
    this._provisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInput() {
    return this._provisioned;
  }
}

export class WebAppUnitsPropertyList extends cdktn.ComplexList {
  public internalValue? : WebAppUnitsProperty[] | cdktn.IResolvable

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
  public get(index: number): WebAppUnitsPropertyOutputReference {
    return new WebAppUnitsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#security_group_ids AwsTransferWebApp#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#subnet_ids AwsTransferWebApp#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#vpc_id AwsTransferWebApp#vpc_id}
  */
  readonly vpcId: string;
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
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

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class VpcPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcPropertyOutputReference {
    return new VpcPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointDetailsProperty {
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#vpc AwsTransferWebApp#vpc}
  */
  readonly vpc?: VpcProperty[] | cdktn.IResolvable;
}
export class EndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EndpointDetailsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointDetailsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpc.internalValue = value.vpc;
    }
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new VpcPropertyList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: VpcProperty[] | cdktn.IResolvable) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}

export class EndpointDetailsPropertyList extends cdktn.ComplexList {
  public internalValue? : EndpointDetailsProperty[] | cdktn.IResolvable

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
  public get(index: number): EndpointDetailsPropertyOutputReference {
    return new EndpointDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityCenterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#instance_arn AwsTransferWebApp#instance_arn}
  */
  readonly instanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#role AwsTransferWebApp#role}
  */
  readonly role?: string;
}
export class IdentityCenterConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityCenterConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArn = this._instanceArn;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityCenterConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceArn = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceArn = value.instanceArn;
      this._role = value.role;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // instance_arn - computed: false, optional: true, required: false
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  public resetInstanceArn() {
    this._instanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class IdentityCenterConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentityCenterConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentityCenterConfigPropertyOutputReference {
    return new IdentityCenterConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityProviderDetailsProperty {
  /**
  * identity_center_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_web_app#identity_center_config AwsTransferWebApp#identity_center_config}
  */
  readonly identityCenterConfig?: IdentityCenterConfigProperty[] | cdktn.IResolvable;
}
export class IdentityProviderDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityProviderDetailsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfig = this._identityCenterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderDetailsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfig.internalValue = value.identityCenterConfig;
    }
  }

  // identity_center_config - computed: false, optional: true, required: false
  private _identityCenterConfig = new IdentityCenterConfigPropertyList(this, "identity_center_config", false);
  public get identityCenterConfig() {
    return this._identityCenterConfig;
  }
  public putIdentityCenterConfig(value: IdentityCenterConfigProperty[] | cdktn.IResolvable) {
    this._identityCenterConfig.internalValue = value;
  }
  public resetIdentityCenterConfig() {
    this._identityCenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigInput() {
    return this._identityCenterConfig.internalValue;
  }
}

export class IdentityProviderDetailsPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentityProviderDetailsProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentityProviderDetailsPropertyOutputReference {
    return new IdentityProviderDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
